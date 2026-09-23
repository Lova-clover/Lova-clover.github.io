import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const stable = value => JSON.stringify(value, function (key, item) {
  return item && typeof item === 'object' && !Array.isArray(item)
    ? Object.fromEntries(Object.keys(item).sort().map(name => [name, item[name]]))
    : item;
});

function loadData(file) {
  const context = { window: Object.create(null) };
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file, timeout: 1000 });
  return context.window.PORTFOLIO_DATA;
}

function loadBaseline(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function validate() {
  const errors = [];
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const dataFile = path.join(root, 'assets/data/portfolio.js');
  if (!fs.existsSync(dataFile)) throw new Error('Missing assets/data/portfolio.js.');
  const data = loadData(dataFile);
  if (!data || !Array.isArray(data.projects) || !Array.isArray(data.records) || !Array.isArray(data.finalists)) {
    throw new Error('PORTFOLIO_DATA must contain projects, records, and finalists arrays.');
  }
  const { projects, records, finalists } = data;
  const ids = new Set();
  const titles = new Set();
  const imagePaths = new Set();
  let linkCount = 0;

  function localAsset(source, label) {
    if (!nonempty(source)) { errors.push(`${label}: empty asset path.`); return; }
    let relative;
    try { relative = decodeURIComponent(source.split(/[?#]/)[0]).replace(/^\.\//, '').replace(/^\//, ''); }
    catch { errors.push(`${label}: malformed path ${source}.`); return; }
    if (!relative.startsWith('assets/') || relative.includes('\\') || relative.split('/').includes('..')) {
      errors.push(`${label}: asset must stay inside assets/: ${source}.`);
      return;
    }
    const target = path.resolve(root, relative);
    const assetsRoot = path.join(root, 'assets') + path.sep;
    if (!target.startsWith(assetsRoot) || !fs.existsSync(target) || !fs.statSync(target).isFile()) {
      errors.push(`${label}: missing asset ${source}.`);
    } else if (!fs.realpathSync(target).startsWith(fs.realpathSync(path.join(root, 'assets')) + path.sep)) {
      errors.push(`${label}: asset resolves outside assets/: ${source}.`);
    }
    imagePaths.add(relative);
  }

  for (const project of projects) {
    const label = project.id || '(unnamed project)';
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id || '')) errors.push(`${label}: invalid project id.`);
    if (ids.has(project.id)) errors.push(`${label}: duplicate project id.`);
    ids.add(project.id);
    const title = (project.title || '').trim().toLowerCase();
    if (titles.has(title)) errors.push(`${label}: duplicate project title.`);
    titles.add(title);
    for (const key of ['title', 'type', 'desc']) if (!nonempty(project[key])) errors.push(`${label}: missing ${key}.`);
    if (!Array.isArray(project.categories)) errors.push(`${label}: categories must be an array.`);
    if (!Array.isArray(project.tags) || !project.tags.length) errors.push(`${label}: tags must not be empty.`);
    for (const field of ['metrics', 'build', 'impact']) {
      if (!Array.isArray(project[field]) || !project[field].length) errors.push(`${label}: ${field} must not be empty.`);
    }
    const pendingMedia = project.mediaStatus === 'awaiting-source';
    if (pendingMedia) {
      if (project.cover !== null || !Array.isArray(project.media) || project.media.length !== 0) errors.push(`${label}: awaiting-source must use null cover and an empty gallery.`);
    } else {
      localAsset(project.cover, `${label} cover`);
      if (!Array.isArray(project.media) || !project.media.length) errors.push(`${label}: gallery must not be empty.`);
    }
    for (const item of project.media || []) {
      localAsset(item.src, `${label} gallery`);
      if (!nonempty(item.alt)) errors.push(`${label}: gallery image needs alt text.`);
    }
    for (const link of Object.values(project.links || {})) {
      const href = typeof link === 'string' ? link : link?.href;
      try {
        const parsed = new URL(href);
        if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) throw new Error();
        linkCount += 1;
      } catch { errors.push(`${label}: invalid public link ${href}.`); }
    }
  }

  const main = projects.filter(project => project.categories?.includes('main'));
  if (main.length !== 8) errors.push(`Main must contain exactly 8 base projects; found ${main.length}.`);
  const expectedMain = ["gyeopbom","cheotjari","losstwin","perfacto","mediclear","jjikmuk","anemia","freshguard"];
  if (JSON.stringify([...main].sort((a,b) => a.rank-b.rank).map(p => p.id)) !== JSON.stringify(expectedMain)) errors.push('Main project order differs from the requested selection.');
  const wideMain = projects.filter(p => p.categories?.includes('main-wide')).sort((a,b) => a.rank-b.rank);
  if (JSON.stringify(wideMain.map(p => p.id)) !== JSON.stringify(['kmomento','devhistory'])) errors.push('Wide Main must append K-MOMENTO AI and DevHistory in that order.');
  if (wideMain.some(p => p.categories.includes('main'))) errors.push('Wide-only projects must not duplicate the base Main selection.');
  const expectedPrefix = [...expectedMain, ...wideMain.map(p => p.id)];
  if (JSON.stringify([...projects].sort((a,b) => a.rank-b.rank).slice(0,10).map(p => p.id)) !== JSON.stringify(expectedPrefix)) errors.push('All must retain the requested Main order in its first ten projects.');
  if (!ids.has('structure')) errors.push('Structure Stability AI must remain in the project archive.');
  const monthPattern = /^\d{4}\.(0[1-9]|1[0-2])$/;
  const awardDates = records.filter(record => record[3] !== 'Education').map(record => record[0]);
  if (awardDates.some(date => !monthPattern.test(date))) errors.push('Award dates must use YYYY.MM.');
  if (awardDates.some((date, index) => index > 0 && date < awardDates[index - 1])) errors.push('Awards must be in chronological order.');
  const finalistDates = finalists.map(item => item.date);
  if (finalistDates.some((date, index) => index > 0 && date < finalistDates[index - 1])) errors.push('Finalists must be in chronological order.');
  const recordTitles = new Set();
  for (const record of records) {
    const title = Array.isArray(record) ? record[1] : record.title;
    if (!nonempty(title)) errors.push('A record is missing its title.');
    const key = (title || '').replace(/\s+/g, '').toLowerCase();
    if (recordTitles.has(key)) errors.push(`Duplicate record: ${title}.`);
    recordTitles.add(key);
    const text = JSON.stringify(record);
    if (/Medical\s*AI/i.test(text) && /49\s*위/.test(text)) errors.push('Medical AI Private 49위 must not appear in Awards.');
    if (/12\s*위/.test(text) && /DACON|구조물/i.test(text)) errors.push('DACON Private 12위 must not appear in Awards.');
  }

  const approvedFinalists = new Map([
    ['k-intelligence-track2', ['MediClear', '본선 진출', '예선 3등 · 본선 9등']],
    ['yogiyo-oracle', ['찍먹AI', '본선 발표', '서류 지원 186팀 중 본선 8팀 선정']],
    ['incheon-startup', ['PortFlow Dispatch AI', '본선 발표']],
    ['sejong-data-ai', ['MoveLens', '본선 발표']],
    ['ulsan-digital-twin', ['TwinOps Ulsan', '본선 발표']],
  ]);
  if (finalists.length !== approvedFinalists.size) errors.push(`Finalist & Selected must contain exactly 5 entries; found ${finalists.length}.`);
  const finalistIds = new Set();
  const finalistCompetitions = new Set();
  for (const finalist of finalists) {
    if (!finalist || typeof finalist !== 'object' || Array.isArray(finalist)) {
      errors.push('Each finalist must be an object.');
      continue;
    }
    const label = finalist.id || '(unnamed finalist)';
    for (const field of ['id', 'date', 'competition', 'project', 'result']) {
      if (!nonempty(finalist[field])) errors.push(`${label}: missing finalist ${field}.`);
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(finalist.id || '')) errors.push(`${label}: invalid finalist id.`);
    if (finalistIds.has(finalist.id)) errors.push(`${label}: duplicate finalist id.`);
    finalistIds.add(finalist.id);
    if (!/^\d{4}\.(0[1-9]|1[0-2])$/.test(finalist.date || '')) errors.push(`${label}: finalist date must use YYYY.MM.`);
    if (finalist.division !== undefined && !nonempty(finalist.division)) errors.push(`${label}: empty finalist division.`);
    const approved = approvedFinalists.get(finalist.id);
    if (!approved) errors.push(`${label}: finalist was not included in the approved selection.`);
    else if (finalist.project !== approved[0] || finalist.result !== approved[1] || finalist.detail !== approved[2]) errors.push(`${label}: finalist project or result differs from the user-provided record.`);
    const competition = typeof finalist.competition === 'string' ? finalist.competition.replace(/\s+/g, '').toLowerCase() : '';
    if (finalistCompetitions.has(competition)) errors.push(`${label}: duplicate finalist competition.`);
    finalistCompetitions.add(competition);
    if (competition && [...recordTitles].some(title => title.includes(competition) || competition.includes(title))) errors.push(`${label}: finalist competition already appears in Records.`);
    if (/조달클리어\s*AI|공공조달|울산.*공공데이터|RuleVest|창업진흥원/i.test(JSON.stringify(finalist))) errors.push(`${label}: excluded finalist record must not be added.`);
    if (Object.keys(finalist).some(key => !['id', 'date', 'competition', 'division', 'project', 'result', 'detail'].includes(key))) errors.push(`${label}: finalist cards must contain only the approved concise fields.`);
  }
  for (const id of approvedFinalists.keys()) if (!finalistIds.has(id)) errors.push(`Missing approved finalist: ${id}.`);

  const baseline = loadBaseline(path.join(root, 'scripts/fixtures/project-baseline.json'));
  for (const original of baseline.projects) {
    const current = projects.find(project => project.id === original.id);
    if (!current) { errors.push(`Existing project removed: ${original.id}.`); continue; }
    for (const field of ['media', 'links', 'desc', 'build', 'impact']) {
      if (stable(current[field]) !== stable(original[field])) errors.push(`Existing ${original.id}.${field} changed from deployed baseline.`);
    }
  }

  const assetsDirectory = path.join(root, 'assets');
  function inspectDirectory(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) errors.push(`Assets must not contain symlinks: ${path.relative(root, file)}.`);
      else if (entry.isDirectory()) inspectDirectory(file);
    }
  }
  inspectDirectory(assetsDirectory);

  for (const match of html.matchAll(/<(script|link|img)\b[^>]*?\b(?:src|href)=["']([^"']+)["'][^>]*>/gi)) {
    const source = match[2];
    // These gallery/card template values are validated against every project above.
    if (source === '${project.cover}' || source === '${media.src}') continue;
    if (/^(?:https?:|data:|#)/i.test(source)) continue;
    if (/^(?:\.?\/?)(?:archive|orbit(?:-source)?|portfolio(?:-source)?)\//i.test(source)) {
      errors.push(`Active page references archived 3D content: ${source}.`);
    } else if (source !== '/' && source !== 'index.html') localAsset(source, match[1]);
  }
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/.test(match[1]) || /application\/ld\+json/.test(match[1])) continue;
    try { new vm.Script(match[2], { filename: 'index.html inline script' }); }
    catch (error) { errors.push(`Inline JavaScript syntax error: ${error.message}`); }
  }
  if (!/\bsrc=["'](?:\.\/)?assets\/data\/portfolio\.js["']/.test(html)) errors.push('index.html must load assets/data/portfolio.js.');
  if (/Smart Factory MVP(?: Hackathon)? 3rd/.test(html)) errors.push('Remove the old Smart Factory hero badge.');

  if (errors.length) throw new Error('Portfolio checks failed:\n' + errors.map(error => ` - ${error}`).join('\n'));
  const summary = {
    projects: projects.length,
    featured: main.length,
    records: records.length,
    finalists: finalists.length,
    media: projects.reduce((count, project) => count + project.media.length, 0),
    localAssets: imagePaths.size,
    publicLinks: linkCount,
    preservedProjects: baseline.projects.length,
    pendingMedia: projects.filter(p => p.mediaStatus === 'awaiting-source').map(p => p.id),
  };
  console.log(`Portfolio checks passed: ${summary.projects} projects (${summary.featured} Main / ${summary.featured + wideMain.length} wide Main), ${summary.records} records, ${summary.finalists} finalists, ${summary.media} gallery images, ${summary.publicLinks} public links; ${summary.preservedProjects} existing projects preserved.`);
  if (summary.pendingMedia.length) console.log('Actual screenshots still needed: ' + summary.pendingMedia.join(', ') + '. No substitute images were generated.');
  console.log('Link syntax and local files checked. External availability and browser behavior require the separate browser review.');
  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { validate(); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}

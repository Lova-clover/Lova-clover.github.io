import fs from 'node:fs';
import path from 'node:path';

const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(match => [match[1], match[2]]));

// Publishing checks use only Node built-ins; no browser or network is required.
export function validatePublishing(root, html, data, imagePaths) {
  const errors = [];
  const warnings = [];
  const meta = new Map([...html.matchAll(/<meta\b[^>]*>/gi)].map(match => {
    const attr = attributes(match[0]);
    return [attr.property || attr.name, attr.content];
  }));
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attributes(match[0]));
  const site = 'https://lova-clover.github.io/';
  const canonicals = links.filter(link => link.rel === 'canonical');
  if (canonicals.length !== 1 || canonicals[0].href !== site) errors.push('A single root canonical URL is required.');
  const required = ['description','author','robots','og:type','og:title','og:description','og:url','og:site_name','og:locale','og:image','og:image:alt','og:image:width','og:image:height','twitter:card','twitter:title','twitter:description','twitter:image'];
  for (const key of required) if (!nonempty(meta.get(key))) errors.push(`Missing metadata: ${key}.`);
  if (meta.get('og:url') !== site || meta.get('twitter:card') !== 'summary_large_image') errors.push('Social metadata needs the root URL and large-image card.');
  for (const [left, right] of [['description','og:description'],['og:description','twitter:description'],['og:title','twitter:title'],['og:image','twitter:image']]) {
    if (meta.get(left) !== meta.get(right)) errors.push(`Metadata differs: ${left} / ${right}.`);
  }
  if (meta.get('og:image') !== site + 'assets/portfolio-preview-2026.jpg') errors.push('Use the approved light portfolio preview for sharing.');
  try {
    const match = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    const profile = JSON.parse(match?.[1] || '');
    if (profile['@type'] !== 'ProfilePage' || profile.mainEntity?.['@type'] !== 'Person' || profile.url !== site) errors.push('Structured data must describe the portfolio ProfilePage and Person.');
  } catch { errors.push('Missing or invalid ProfilePage JSON-LD.'); }

  for (const project of data.projects) {
    const role = data.projectRoles?.[project.id];
    if (!role || typeof role !== 'object' || Array.isArray(role)) { errors.push(`${project.id}: projectRoles is required.`); continue; }
    for (const key of ['mode','label','contribution']) if (!nonempty(role[key])) errors.push(`${project.id}: role ${key} must not be empty.`);
    if (!Array.isArray(role.tasks) || !role.tasks.length || role.tasks.some(task => !nonempty(task))) errors.push(`${project.id}: role tasks must contain nonempty strings.`);
  }
  const ranks = data.projects.map(project => project.rank);
  if (ranks.some(rank => !Number.isInteger(rank) || rank < 1) || new Set(ranks).size !== ranks.length) errors.push('Project ranks must be unique positive integers.');
  for (const [file, size] of [['favicon-32.png',32],['favicon-192.png',192],['apple-touch-icon.png',180]]) {
    const relative = 'assets/' + file;
    try {
      const png = fs.readFileSync(path.join(root, relative));
      if (png.subarray(1,4).toString() !== 'PNG' || png.readUInt32BE(16) !== size || png.readUInt32BE(20) !== size) errors.push(`${file}: incorrect PNG dimensions.`);
    } catch { errors.push(`Missing favicon: ${relative}.`); }
    if (!links.some(link => link.href === relative && ['icon','apple-touch-icon'].includes(link.rel))) errors.push(`${file}: missing head link.`);
  }
  const read = file => {
    try { return fs.readFileSync(path.join(root, file), 'utf8'); }
    catch { errors.push(`Missing publication file: ${file}.`); return ''; }
  };
  const robots = read('robots.txt');
  if (!/^User-agent: \*\s*$/m.test(robots) || !/^Allow: \/\s*$/m.test(robots) || !robots.includes(`Sitemap: ${site}sitemap.xml`)) errors.push('robots.txt must allow crawling and reference the sitemap.');
  const sitemap = read('sitemap.xml');
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  if (JSON.stringify(locations) !== JSON.stringify([site]) || /<lastmod>|<loc>[^<]*#/.test(sitemap)) errors.push('Sitemap must contain only the root URL without a stale lastmod.');
  const notFound = read('404.html');
  if (!/href=["']\/["']/.test(notFound)) errors.push('404 page needs a root home link.');
  for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
    const attr = attributes(match[0]);
    if (attr.target === '_blank' && !['noopener','noreferrer'].every(token => attr.rel?.split(/\s+/).includes(token))) errors.push('Every new-window link needs noopener noreferrer.');
  }
  if (/원본 보기|galleryOriginal|modalOriginal/.test(html) || /<a\b[^>]*href=["']\$\{media\.src\}/.test(html)) errors.push('The raw gallery asset link must not return.');
  const hero = html.match(/<img\b[^>]*src="assets\/profile-duck\.png"[^>]*>/)?.[0] || '';
  if (!hero.includes('loading="eager"') || !hero.includes('fetchpriority="high"') || !/width="\d+"/.test(hero) || !/height="\d+"/.test(hero)) errors.push('Keep explicit Hero dimensions and eager/high image priority.');
  const covers = new Set(data.projects.map(project => project.cover));
  for (const relative of new Set([...imagePaths, 'assets/profile-duck.png', 'assets/duck-contact.png'])) {
    const file = path.join(root, relative);
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) continue;
    const bytes = fs.statSync(file).size;
    const label = relative === 'assets/profile-duck.png' ? 'Hero' : covers.has(relative) ? 'Cover' : 'Gallery';
    if (bytes > 1.5 * 1024 * 1024 || (label !== 'Gallery' && bytes > 1024 * 1024)) warnings.push(`${label}: ${relative} (${(bytes / 1024 / 1024).toFixed(2)} MiB); kept for image quality.`);
  }
  return { errors, warnings };
}

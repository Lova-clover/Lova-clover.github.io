import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
let useDist = false;
let port = 4175;
for (let index = 0; index < args.length; index += 1) {
  const argument = args[index];
  if (argument === '--dist') useDist = true;
  else if (argument === '--port') port = Number(args[++index]);
  else if (argument.startsWith('--port=')) port = Number(argument.slice(7));
  else if (argument === '--host' && args[++index] === '127.0.0.1') continue;
  else if (argument === '--host=127.0.0.1') continue;
  else throw new Error(`Unknown preview option: ${argument}. Preview binds to 127.0.0.1 only.`);
}
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Port must be an integer between 1 and 65535.');
const root = useDist ? path.join(projectRoot, 'dist') : projectRoot;
if (!fs.existsSync(path.join(root, 'index.html'))) throw new Error(`${useDist ? 'Run npm run build first.' : 'Missing index.html.'}`);
const assetsRoot = path.join(root, 'assets');
const realAssetsRoot = fs.realpathSync(assetsRoot) + path.sep;
const publicFiles = new Map(['index.html', '404.html', 'robots.txt', 'sitemap.xml'].filter(file => fs.existsSync(path.join(root, file))).map(file => ['/' + file, fs.realpathSync(path.join(root, file))]));
const contentTypes = {
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.avif': 'image/avif', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff',
  '.ttf': 'font/ttf', '.mp4': 'video/mp4', '.pdf': 'application/pdf',
};

const server = http.createServer((request, response) => {
  const sendError = (status, message) => {
    const notFound = publicFiles.get('/404.html');
    if (status === 404 && notFound) {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
      response.end(request.method === 'HEAD' ? undefined : fs.readFileSync(notFound));
      return;
    }
    response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
    response.end(request.method === 'HEAD' ? undefined : message);
  };
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.setHeader('Allow', 'GET, HEAD');
    sendError(405, 'Method not allowed');
    return;
  }
  let pathname;
  try { pathname = decodeURIComponent((request.url || '/').split(/[?#]/)[0]); }
  catch { sendError(400, 'Malformed URL'); return; }
  if (!pathname.startsWith('/') || pathname.includes('\\') || pathname.includes('\0') || pathname.split('/').some(part => part === '..' || part === '.')) {
    sendError(400, 'Invalid path');
    return;
  }
  if (pathname !== '/' && !publicFiles.has(pathname) && !pathname.startsWith('/assets/')) {
    sendError(404, 'Not found');
    return;
  }
  const file = pathname === '/' ? path.join(root, 'index.html') : path.resolve(root, '.' + pathname);
  try {
    if (!fs.statSync(file).isFile()) { sendError(404, 'Not found'); return; }
    const resolved = fs.realpathSync(file);
    if (![...publicFiles.values()].includes(resolved) && !resolved.startsWith(realAssetsRoot)) { sendError(404, 'Not found'); return; }
    const stats = fs.statSync(resolved);
    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(resolved).toLowerCase()] || 'application/octet-stream',
      'Content-Length': stats.size,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    });
    if (request.method === 'HEAD') response.end();
    else fs.createReadStream(resolved).on('error', () => response.destroy()).pipe(response);
  } catch { sendError(404, 'Not found'); }
});
server.on('error', error => { console.error(`Preview failed: ${error.message}`); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => {
  console.log(`2D portfolio preview: http://127.0.0.1:${port}/ (${useDist ? 'dist' : 'local source'})`);
  console.log('Only public HTML, robots, sitemap, and assets/ are served. Archived experiments are unavailable.');
});
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));

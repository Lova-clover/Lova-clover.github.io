import fs from 'node:fs';
import path from 'node:path';
import { root, validate } from './check.mjs';

try {
  validate();
  const destination = path.join(root, 'dist');
  const verifyNoSymlinks = directory => {
    if (!fs.existsSync(directory)) return;
    if (fs.lstatSync(directory).isSymbolicLink()) throw new Error(`Build destination must not be a symlink: ${directory}`);
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`Build destination contains a symlink: ${file}`);
      if (entry.isDirectory()) verifyNoSymlinks(file);
    }
  };
  verifyNoSymlinks(destination);
  if (fs.existsSync(path.join(destination, 'archive'))) throw new Error('dist/archive exists; refusing to include archived experiments in the build.');
  fs.mkdirSync(destination, { recursive: true });
  for (const file of ['index.html', 'LICENSE', 'NOTICE.md']) {
    fs.copyFileSync(path.join(root, file), path.join(destination, file));
  }
  fs.cpSync(path.join(root, 'assets'), path.join(destination, 'assets'), { recursive: true, force: true });
  console.log('Static build ready: dist/index.html + dist/assets/ + license notices. Archive, source experiments, and QA files are excluded.');
  console.log('Local files only. Nothing was deployed.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}

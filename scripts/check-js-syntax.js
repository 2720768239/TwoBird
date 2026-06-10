const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const roots = ['next.config.js', 'src', 'server', 'scripts', 'tests'];
const ignoredDirs = new Set(['.git', '.next', 'node_modules', 'data']);

function collectJsFiles(entry, files = []) {
  if (!fs.existsSync(entry)) return files;
  const stat = fs.statSync(entry);
  if (stat.isFile()) {
    if (entry.endsWith('.js')) files.push(entry);
    return files;
  }

  if (ignoredDirs.has(path.basename(entry))) return files;
  for (const child of fs.readdirSync(entry)) {
    collectJsFiles(path.join(entry, child), files);
  }
  return files;
}

const files = roots.flatMap((root) => collectJsFiles(root));
let failed = false;

for (const file of files) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) failed = true;
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log(`Checked ${files.length} JavaScript files.`);
}

const fs = require('node:fs');
const path = require('node:path');

const dir = path.join(__dirname, '..', 'src', 'data', 'translations');

function fixInnerQuotes(line) {
  if (!line.trim().startsWith('"')) return line;
  const match = line.match(/^(\s*")(.*)(",?)$/);
  if (!match) return line;
  const [, open, body, close] = match;
  const fixedBody = body.replace(/"([^"\n]+)"/g, '「$1」');
  return `${open}${fixedBody}${close}`;
}

for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.zh.json'))) {
  const filePath = path.join(dir, file);
  const lines = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '').split('\n');
  const fixed = lines.map(fixInnerQuotes).join('\n');

  try {
    const parsed = JSON.parse(fixed);
    fs.writeFileSync(filePath, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8');
    const filled = parsed.filter((value) => String(value).trim()).length;
    console.log(`fixed ${file} (${filled}/${parsed.length})`);
  } catch (error) {
    console.log(`still bad ${file}: ${error.message}`);
  }
}

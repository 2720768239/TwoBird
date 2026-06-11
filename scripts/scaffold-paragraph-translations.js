const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const articlesPath = path.join(root, 'src', 'data', 'articles.js');
const translationsDir = path.join(root, 'src', 'data', 'translations');

const docMap = new Map([
  [0, 'building-effective-agents.md'],
  [1, 'equipping-agents-for-the-real-world-with-agent-skills.md'],
  [2, 'effective-context-engineering-for-ai-agents.md'],
  [3, 'claude-code-auto-mode.md'],
  [4, 'claude-code-sandboxing.md'],
  [5, 'effective-harnesses-for-long-running-agents.md'],
  [6, 'managed-agents.md'],
  [7, 'how-we-contain-claude.md'],
  [8, 'demystifying-evals-for-ai-agents.md'],
  [9, 'multi-agent-research-system.md'],
  [10, 'building-c-compiler.md'],
  [11, 'advanced-tool-use.md'],
  [12, 'writing-tools-for-agents.md'],
]);

function readArticles() {
  const source = fs.readFileSync(articlesPath, 'utf8').replace(/^export const articles = /m, 'articles = ');
  const context = {};
  vm.runInNewContext(source, context);
  return context.articles;
}

function plainPreview(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 96);
}

function translationSlugFromDoc(fileName) {
  return fileName.replace(/\.md$/i, '');
}

function scaffoldFile(articleId, fileName, article) {
  const slug = translationSlugFromDoc(fileName);
  const jsPath = path.join(translationsDir, `${slug}.zh.js`);
  const jsonPath = path.join(translationsDir, `${slug}.zh.json`);

  if (fs.existsSync(jsPath) || fs.existsSync(jsonPath)) {
    console.log(`skip ${slug} (translation file already exists)`);
    return;
  }

  const content = `// Paragraph translations for docs/${fileName}
// Index aligns with reading-view blocks. Image blocks can stay empty. Then run: npm run generate:aids
export const paragraphsZh = [
${article.paragraphs
  .map((paragraph, index) => {
    const isImage = paragraph.kind === 'image' || String(paragraph.en).startsWith('<figure');
    const label = isImage ? 'image, skip translation' : plainPreview(paragraph.en);
    return `  "", // ${index}: ${label}`;
  })
  .join('\n')}
];
`;

  fs.mkdirSync(translationsDir, { recursive: true });
  fs.writeFileSync(jsPath, content, 'utf8');
  console.log(`created ${path.relative(root, jsPath)} (${article.paragraphs.length} slots)`);
  void comments;
}

const articles = readArticles();
for (const [articleId, fileName] of docMap) {
  scaffoldFile(articleId, fileName, articles[articleId]);
}

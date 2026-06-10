const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');

function readProjectFile(filePath) {
  return fs.readFileSync(path.join(root, filePath), 'utf8');
}

function loadArticlesForTest() {
  const translationSource = readProjectFile('src/data/building-effective-agents.zh.js');
  const articleSource = readProjectFile('src/data/articles.js');
  const translationsLiteral = translationSource.match(/export const buildingEffectiveAgentsZh = (\[[\s\S]*?\]);/)[1];
  const source = articleSource
    .replace(/import \{ buildingEffectiveAgentsZh \} from '\.\/building-effective-agents\.zh';\n\n/, `const buildingEffectiveAgentsZh = ${translationsLiteral};\n\n`)
    .replace(/^export const articles = /m, 'articles = ');
  const context = {};
  vm.runInNewContext(source, context);
  return context.articles;
}

test('Next app shell and route handlers are present', () => {
  const requiredFiles = [
    'src/app/layout.js',
    'src/app/page.js',
    'src/app/globals.css',
    'src/components/learning-app.js',
    'src/lib/db.js',
    'src/lib/auth.js',
    'src/app/api/auth/register/route.js',
    'src/app/api/auth/login/route.js',
    'src/app/api/auth/logout/route.js',
    'src/app/api/auth/me/route.js',
    'src/app/api/me/dashboard/route.js',
    'src/app/api/me/progress/[articleId]/route.js',
    'src/app/api/me/notes/[articleId]/route.js',
    'src/app/api/me/favorites/[articleId]/route.js',
  ];

  for (const filePath of requiredFiles) {
    assert.equal(fs.existsSync(path.join(root, filePath)), true, `${filePath} should exist`);
  }
});

test('article data is extracted into a parseable module', () => {
  const articles = loadArticlesForTest();

  assert.equal(articles.length, 13);
  assert.equal(articles[0].title, 'Building effective agents');
  assert.equal(articles[0].paragraphs.length, 93);
  assert.equal(articles[11].paragraphs.length, 112);
  assert.equal(articles.at(-1).title, 'Writing effective tools for agents — with agents');
});

test('first article has full Chinese translations applied', () => {
  const translations = readProjectFile('src/data/building-effective-agents.zh.js');

  assert.match(translations, /构建有效的智能体/);
  assert.match(translations, /什么时候该用智能体/);
  assert.match(translations, /编排者-工作者/);
  assert.match(translations, /附录 1：实践中的智能体/);
});

test('all articles have generated learning aids without garbled placeholders', () => {
  const articles = loadArticlesForTest();
  const seenVocab = new Map();

  for (const article of articles) {
    assert.ok(article.vocab.length >= 8, `${article.title} should have vocabulary`);
    for (const word of article.vocab) {
      const key = word.en
        .toLowerCase()
        .replace(/['’]s\b/g, '')
        .replace(/[^a-z0-9+#.\s-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      assert.equal(seenVocab.has(key), false, `${word.en} should not repeat across articles`);
      seenVocab.set(key, article.title);
    }
    for (const field of ['structure', 'sentences', 'concepts', 'quotes', 'tasks']) {
      assert.ok(article[field].length > 80, `${article.title} should have ${field}`);
      assert.equal(/\?{2,}/.test(article[field]), false, `${article.title} ${field} should not contain ??`);
    }
    assert.equal(/\?{2,}/.test(JSON.stringify(article.vocab)), false, `${article.title} vocab should not contain ??`);
  }
});

test('legacy inline CSS has been extracted into Next globals', () => {
  const css = readProjectFile('src/app/globals.css');

  assert.match(css, /\.top-bar/);
  assert.match(css, /\.paragraph/);
  assert.match(css, /\.auth-modal/);
});

test('translation progress bar UI has been removed', () => {
  const app = readProjectFile('src/components/learning-app.js');
  const css = readProjectFile('src/app/globals.css');

  assert.doesNotMatch(app, /ProgressBar/);
  assert.doesNotMatch(css, /progress-inline/);
  assert.equal(fs.existsSync(path.join(root, 'src/components/progress-bar.js')), false);
});

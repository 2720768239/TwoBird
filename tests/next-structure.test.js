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
  assert.equal(articles[0].paragraphs.length, 17);
  assert.equal(articles[11].paragraphs.length, 6);
  assert.equal(articles.at(-1).title, 'Writing effective tools for agents - with agents');
});

test('first article has full Chinese translations applied', () => {
  const translations = readProjectFile('src/data/building-effective-agents.zh.js');

  assert.match(translations, /最成功的智能体系统/);
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

test('generated concept and quote aids use specific teacher-style explanations', () => {
  const articles = loadArticlesForTest();
  const forbiddenGenericCopy = [
    '复盘时补一句',
    '它解决什么问题、依赖什么条件、带来什么取舍',
    '这句话适合用来复述文章主张',
    '改写成自己的项目检查项',
  ];

  for (const article of articles) {
    for (const phrase of forbiddenGenericCopy) {
      assert.equal(article.concepts.includes(phrase), false, `${article.title} concepts should not use "${phrase}"`);
      assert.equal(article.quotes.includes(phrase), false, `${article.title} quotes should not use "${phrase}"`);
    }

    assert.match(article.concepts, /本文语境|英文表达|工程理解/, `${article.title} concepts should teach reading and engineering context`);
    assert.match(article.quotes, /中文理解|英文表达|工程启发/, `${article.title} quotes should explain meaning, English, and engineering insight`);
  }
});

test('generated structure overview previews the article thesis and section meaning', () => {
  const articles = loadArticlesForTest();
  const forbiddenStructureTemplates = [
    '\u8fd9\u4e00\u8282\u5728\u8bb2\u4e0a\u4e0b\u6587\u5982\u4f55\u5f71\u54cd\u6a21\u578b\u8868\u73b0',
    '\u91cd\u70b9\u4e0d\u662f\u585e\u5165\u66f4\u591a\u6750\u6599',
    '\u8fd9\u4e00\u8282\u5728\u8bb2\u5de5\u5177\u8bbe\u8ba1\u5982\u4f55\u5f71\u54cd\u667a\u80fd\u4f53\u8868\u73b0',
    '\u8fd9\u4e00\u8282\u5728\u8bb2\u4efb\u52a1\u62c6\u5206\u6a21\u5f0f',
    '\u8fd9\u4e00\u8282\u7684\u539f\u6587\u7ebf\u7d22\u662f',
    '\u8bfb\u524d\u5148\u628a\u5b83\u5f53\u6210\u4e00\u4e2a\u5de5\u7a0b\u5224\u65ad\u9898',
    '\u4f5c\u8005\u8981\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898',
    '\u5f00\u7bc7\u7ebf\u7d22\u662f',
    '\u672c\u6587\u4e3b\u7ebf\u662f\uff1a',
    '\u672c\u6587\u8bb2',
    '\u56f4\u7ed5\u672c\u8282\u5f00\u5934\u7684\u6838\u5fc3\u4fe1\u606f\u5c55\u5f00',
    '\u8bfb\u65f6\u5148\u6293\u4f5c\u8005\u7ed9\u51fa\u7684\u5224\u65ad',
    '\u627f\u63a5\u524d\u6587\u7ee7\u7eed\u63a8\u8fdb\u6587\u7ae0\u4e3b\u7ebf',
  ];

  for (const article of articles) {
    assert.match(article.structure, /structure-summary/, `${article.title} should include an article-level summary`);
    assert.match(article.structure, /structure-guide-list/, `${article.title} should include guided section rows`);
    assert.match(article.structure, /structure-step/, `${article.title} should label the reading role of each section`);
    assert.equal(article.structure.includes('-> '), false, `${article.title} should not use the old generic arrow hints`);
    for (const phrase of forbiddenStructureTemplates) {
      assert.equal(article.structure.includes(phrase), false, `${article.title} structure should not use "${phrase}"`);
    }
  }

  assert.match(
    articles[0].structure,
    /\u4ece\u7b80\u5355\u65b9\u6848\u5f00\u59cb/,
    'Building effective agents should summarize its concrete article thesis',
  );
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

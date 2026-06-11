const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const articlesPath = path.join(root, 'src', 'data', 'articles.js');
const translationsDir = path.join(root, 'src', 'data', 'translations');
const MARKER_RE = /\[\[PARA:(\d+)\]\]/g;

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

function slugFromDoc(fileName) {
  return fileName.replace(/\.md$/i, '');
}

function translationPath(slug) {
  return path.join(translationsDir, `${slug}.zh.json`);
}

function loadExisting(slug) {
  const jsonPath = translationPath(slug);
  if (!fs.existsSync(jsonPath)) return [];
  return JSON.parse(fs.readFileSync(jsonPath, 'utf8').replace(/^\uFEFF/, ''));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildBatches(paragraphs, translations) {
  const batches = [];
  let current = [];
  let currentSize = 0;

  for (let index = 0; index < paragraphs.length; index += 1) {
    const paragraph = paragraphs[index];
    if (paragraph.kind === 'image') continue;
    if (String(translations[index] || '').trim()) continue;

    const chunk = `[[PARA:${index}]]${paragraph.en}`;
    const chunkSize = chunk.length;
    if (current.length > 0 && (currentSize + chunkSize > 1800 || current.length >= 3)) {
      batches.push(current);
      current = [];
      currentSize = 0;
    }
    current.push({ index, html: paragraph.en });
    currentSize += chunkSize;
  }

  if (current.length > 0) batches.push(current);
  return batches;
}

async function translateMyMemory(text) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh-CN`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.responseStatus !== 200) {
    throw new Error(data.responseDetails || 'MyMemory translation failed');
  }
  return data.responseData.translatedText;
}

async function translateGoogle(translate, text) {
  const result = await translate(text, { to: 'zh-CN', format: 'html' });
  return result.text;
}

async function translateWithFallback(translate, text, attempt = 0) {
  try {
    return await translateGoogle(translate, text);
  } catch (googleError) {
    const plain = text
      .replace(/<a [^>]+>([^<]*)<\/a>/gi, '$1')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();

    try {
      const translated = await translateMyMemory(plain.slice(0, 450));
      if (text.startsWith('<h2>')) return `<h2>${translated}</h2>`;
      if (text.startsWith('<h3>')) return `<h3>${translated}</h3>`;
      if (text.startsWith('<h4>')) return `<h4>${translated}</h4>`;
      if (text.startsWith('<ul>')) return `<ul><li>${translated}</li></ul>`;
      if (text.startsWith('<ol>')) return `<ol><li>${translated}</li></ol>`;
      return `<p>${translated}</p>`;
    } catch (memoryError) {
      if (attempt >= 4) throw googleError;
      const waitMs = 8000 * (attempt + 1);
      console.log(`    retry in ${Math.round(waitMs / 1000)}s`);
      await sleep(waitMs);
      return translateWithFallback(translate, text, attempt + 1);
    }
  }
}

function applyBatchResult(translations, batch, translatedText) {
  const parts = translatedText.split(MARKER_RE);
  if (parts.length < 2) {
    throw new Error('batch split failed');
  }

  for (let i = 1; i < parts.length; i += 2) {
    const index = Number(parts[i]);
    const content = parts[i + 1]?.trim() || '';
    if (Number.isInteger(index) && content) {
      translations[index] = content;
    }
  }

  for (const item of batch) {
    if (!translations[item.index]?.trim()) {
      throw new Error(`missing translation for paragraph ${item.index}`);
    }
  }
}

async function main() {
  const { translate } = await import('@vitalets/google-translate-api');
  const articles = readArticles();
  const onlyId = process.argv[2] !== undefined ? Number(process.argv[2]) : null;

  fs.mkdirSync(translationsDir, { recursive: true });

  for (const [articleId, fileName] of docMap) {
    if (onlyId !== null && articleId !== onlyId) continue;

    const article = articles[articleId];
    const slug = slugFromDoc(fileName);
    const jsonPath = translationPath(slug);
    const existing = loadExisting(slug);
    const translations = [...existing];

    while (translations.length < article.paragraphs.length) {
      translations.push('');
    }

    const needed = article.paragraphs.filter((paragraph) => paragraph.kind !== 'image').length;
    const filled = translations.filter((value, index) => {
      const paragraph = article.paragraphs[index];
      return paragraph?.kind !== 'image' && String(value || '').trim();
    }).length;

    if (filled >= needed) {
      console.log(`skip ${slug} (${filled}/${needed})`);
      continue;
    }

    const batches = buildBatches(article.paragraphs, translations);
    if (!batches.length) {
      console.log(`skip ${slug} (no pending batches)`);
      continue;
    }

    console.log(`\n=== ${articleId}: ${article.title} (${filled}/${needed}, ${batches.length} batches) ===`);

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex += 1) {
      const batch = batches[batchIndex];
      const label = batch.map((item) => item.index + 1).join(',');
      process.stdout.write(`  batch ${batchIndex + 1}/${batches.length} [${label}] `);

      try {
        const payload = batch.map((item) => `[[PARA:${item.index}]]${item.html}`).join('');
        const translatedText = await translateGoogle(translate, payload);
        applyBatchResult(translations, batch, translatedText);
      } catch {
        for (const item of batch) {
          translations[item.index] = await translateWithFallback(translate, item.html);
          await sleep(1500);
        }
      }

      fs.writeFileSync(jsonPath, `${JSON.stringify(translations, null, 2)}\n`, 'utf8');
      process.stdout.write('ok\n');
      await sleep(3000);
    }

    console.log(`saved ${path.relative(root, jsonPath)}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

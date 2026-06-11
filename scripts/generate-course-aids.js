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

const termBank = [
  ['agent', '智能体', ['agent', 'agents']],
  ['workflow', '工作流', ['workflow', 'workflows']],
  ['orchestrator', '编排器', ['orchestrator', 'orchestrators', 'orchestration']],
  ['worker', '工作单元', ['worker', 'workers']],
  ['tool', '工具', ['tool', 'tools']],
  ['tool description', '工具描述', ['tool description', 'tool descriptions']],
  ['tool choice', '工具选择', ['tool choice', 'tool choices']],
  ['tool call', '工具调用', ['tool call', 'tool calls']],
  ['tool design', '工具设计', ['tool design']],
  ['error handling', '错误处理', ['error handling']],
  ['response format', '响应格式', ['response format', 'response formats']],
  ['example', '示例', ['example', 'examples']],
  ['prompt engineering', '提示词工程', ['prompt engineering']],
  ['prompt injection', '提示注入', ['prompt injection', 'prompt injections']],
  ['retrieval', '检索', ['retrieval']],
  ['memory', '记忆机制', ['memory']],
  ['augmented LLM', '增强型大语言模型', ['augmented LLM', 'augmented language model']],
  ['routing', '路由', ['routing']],
  ['parallelization', '并行化', ['parallelization', 'parallel']],
  ['evaluator-optimizer', '评估器-优化器模式', ['evaluator-optimizer', 'evaluator optimizer']],
  ['agent skills', '智能体技能', ['agent skills', 'skill', 'skills']],
  ['context window', '上下文窗口', ['context window']],
  ['progressive disclosure', '渐进式披露', ['progressive disclosure']],
  ['code execution', '代码执行', ['code execution']],
  ['frontmatter', '前置元数据', ['frontmatter']],
  ['metadata', '元数据', ['metadata']],
  ['deterministic', '确定性的', ['deterministic']],
  ['reliability', '可靠性', ['reliability', 'reliable']],
  ['evaluation', '评估', ['evaluation', 'evaluations', 'eval', 'evals']],
  ['capability', '能力', ['capability', 'capabilities']],
  ['context engineering', '上下文工程', ['context engineering']],
  ['context rot', '上下文腐化', ['context rot']],
  ['attention', '注意力', ['attention']],
  ['compaction', '压缩', ['compaction', 'compact']],
  ['scratchpad', '草稿区', ['scratchpad']],
  ['state', '状态', ['state']],
  ['auto mode', '自动模式', ['auto mode']],
  ['permission', '权限', ['permission', 'permissions']],
  ['allowlist', '允许列表', ['allowlist', 'allow list']],
  ['denylist', '拒绝列表', ['denylist', 'deny list']],
  ['trust', '信任', ['trust']],
  ['escape hatch', '逃生开关', ['escape hatch']],
  ['sandbox', '沙箱', ['sandbox', 'sandboxing']],
  ['approval', '审批', ['approval', 'approvals']],
  ['data exfiltration', '数据外传', ['data exfiltration', 'exfiltration']],
  ['least privilege', '最小权限', ['least privilege']],
  ['trust boundary', '信任边界', ['trust boundary', 'trust boundaries']],
  ['container', '容器', ['container', 'containers']],
  ['virtual machine', '虚拟机', ['virtual machine', 'vm']],
  ['threat model', '威胁模型', ['threat model']],
  ['network isolation', '网络隔离', ['network isolation']],
  ['filesystem isolation', '文件系统隔离', ['filesystem isolation']],
  ['network access', '网络访问', ['network access']],
  ['write access', '写入权限', ['write access']],
  ['untrusted code', '不可信代码', ['untrusted code']],
  ['secure defaults', '安全默认值', ['secure defaults']],
  ['harness', '运行框架', ['harness', 'harnesses']],
  ['long-running', '长周期运行', ['long-running', 'long running']],
  ['environment management', '环境管理', ['environment management']],
  ['testing', '测试', ['testing', 'tests']],
  ['feature list', '功能清单', ['feature list']],
  ['incremental progress', '增量进展', ['incremental progress']],
  ['long-running agent problem', '长周期智能体问题', ['long-running agent problem']],
  ['getting up to speed', '快速进入状态', ['getting up to speed']],
  ['future work', '未来工作', ['future work']],
  ['scaffolding', '脚手架', ['scaffolding', 'scaffold']],
  ['agent loop', '智能体循环', ['agent loop']],
  ['task state', '任务状态', ['task state']],
  ['persistent state', '持久化状态', ['persistent state']],
  ['checkpoint', '检查点', ['checkpoint', 'checkpoints']],
  ['observability', '可观测性', ['observability']],
  ['interruption', '中断处理', ['interruption', 'interruptions']],
  ['recovery', '恢复机制', ['recovery']],
  ['managed agents', '托管智能体', ['managed agents', 'managed agent']],
  ['decoupling', '解耦', ['decoupling', 'decouple', 'decoupled']],
  ['context anxiety', '上下文焦虑', ['context anxiety']],
  ['long-horizon agent work', '长周期智能体任务', ['long-horizon agent work', 'long horizon agent work']],
  ['stable interface', '稳定接口', ['stable interface', 'stable interfaces']],
  ['many brains', '多大脑协作', ['many brains']],
  ['many hands', '多执行端协作', ['many hands']],
  ['pet', '宠物式托管', ['pet', 'pets']],
  ['brain', '决策大脑', ['brain']],
  ['hands', '执行端', ['hands']],
  ['shell', '命令行环境', ['shell', 'shells']],
  ['browser', '浏览器环境', ['browser', 'browsers']],
  ['computer use', '计算机使用', ['computer use']],
  ['session', '会话', ['session', 'sessions']],
  ['queue', '队列', ['queue', 'queues']],
  ['containment', '隔离控制', ['containment', 'contain']],
  ['ephemeral container', '临时容器', ['ephemeral container']],
  ['human-in-the-loop', '人在环路', ['human-in-the-loop', 'human in the loop']],
  ['local VM', '本地虚拟机', ['local VM']],
  ['classifier', '分类器', ['classifier', 'classifiers']],
  ['policy', '策略', ['policy', 'policies']],
  ['risk', '风险', ['risk', 'risks']],
  ['safety', '安全性', ['safety']],
  ['grader', '评分器', ['grader', 'graders']],
  ['rubric', '评分标准', ['rubric', 'rubrics']],
  ['judge', '裁判模型', ['judge', 'judges']],
  ['binary grader', '二元评分器', ['binary grader', 'binary graders']],
  ['human review', '人工复核', ['human review']],
  ['capability eval', '能力评估', ['capability eval', 'capability evals']],
  ['golden dataset', '黄金数据集', ['golden dataset', 'golden set']],
  ['regression', '回归测试', ['regression', 'regressions']],
  ['benchmark', '基准测试', ['benchmark', 'benchmarks']],
  ['research system', '研究系统', ['research system']],
  ['lead agent', '主智能体', ['lead agent']],
  ['source', '来源材料', ['source', 'sources']],
  ['fan-out', '扇出分工', ['fan-out', 'fan out']],
  ['subagent', '子智能体', ['subagent', 'sub-agent', 'subagents']],
  ['citation', '引用', ['citation', 'citations']],
  ['synthesis', '综合归纳', ['synthesis']],
  ['supervisor', '监督者', ['supervisor']],
  ['compiler', '编译器', ['compiler', 'compilers']],
  ['C compiler', 'C 编译器', ['C compiler']],
  ['Rust-based C compiler', '基于 Rust 的 C 编译器', ['Rust-based C compiler', 'Rust based C compiler']],
  ['Linux kernel', 'Linux 内核', ['Linux kernel']],
  ['parser', '解析器', ['parser', 'parsers']],
  ['lexer', '词法分析器', ['lexer', 'lexers']],
  ['test suite', '测试套件', ['test suite']],
  ['codebase', '代码库', ['codebase', 'codebases']],
  ['shared codebase', '共享代码库', ['shared codebase']],
  ['multiple agent roles', '多智能体角色', ['multiple agent roles']],
  ['stress testing', '压力测试', ['stress testing']],
  ['human intervention', '人工干预', ['human intervention']],
  ['autonomous progress', '自主推进', ['autonomous progress']],
  ['test harness', '测试框架', ['test harness']],
  ['parallel Claude', '并行 Claude', ['parallel Claude', 'parallel Claudes']],
  ['assembly', '汇编', ['assembly']],
  ['debugging', '调试', ['debugging', 'debug']],
  ['tool search', '工具搜索', ['tool search']],
  ['programmatic tool calling', '程序化工具调用', ['programmatic tool calling']],
  ['defer loading', '延迟加载', ['defer loading', 'deferred loading']],
  ['tool definition', '工具定义', ['tool definition', 'tool definitions']],
  ['namespace', '命名空间', ['namespace', 'namespacing']],
  ['schema', '结构定义', ['schema', 'schemas']],
  ['input schema', '输入结构', ['input schema', 'input schemas']],
  ['output schema', '输出结构', ['output schema', 'output schemas']],
  ['token efficiency', 'Token 效率', ['token efficiency', 'token-efficient']],
  ['prompt', '提示词', ['prompt', 'prompts']],
  ['description', '描述字段', ['description', 'descriptions']],
  ['parameter', '参数', ['parameter', 'parameters']],
  ['JSON schema', 'JSON 结构定义', ['JSON schema']],
  ['API', '应用接口', ['API', 'APIs']],
  ['validation', '校验', ['validation', 'validate']],
  ['artifact', '产物', ['artifact', 'artifacts']],
  ['trajectory', '执行轨迹', ['trajectory', 'trajectories']],
  ['autonomy', '自主性', ['autonomy', 'autonomous']],
  ['autonomous execution', '自主执行', ['autonomous execution']],
  ['human oversight', '人工监督', ['human oversight']],
  ['guardrail', '安全护栏', ['guardrail', 'guardrails']],
  ['latency', '延迟', ['latency']],
  ['tradeoff', '取舍', ['tradeoff', 'trade-off', 'tradeoffs', 'trade-offs']],
  ['iteration', '迭代', ['iteration', 'iterations']],
  ['prototype', '原型', ['prototype', 'prototypes']],
  ['feedback loop', '反馈回路', ['feedback loop']],
  ['production', '生产环境', ['production']],
  ['scalability', '可扩展性', ['scalability', 'scalable']],
  ['decomposition', '任务拆解', ['decomposition', 'decompose']],
  ['handoff', '交接', ['handoff', 'hand-off']],
  ['planner', '规划器', ['planner', 'planning']],
  ['executor', '执行器', ['executor', 'execution']],
  ['agentic', '智能体式', ['agentic']],
  ['evaluation agent', '评估智能体', ['evaluation agent']],
  ['evaluation task', '评估任务', ['evaluation task', 'evaluation tasks']],
  ['held-out test set', '留出测试集', ['held-out test set', 'held out test set']],
  ['tool response', '工具响应', ['tool response', 'tool responses']],
  ['tool implementation', '工具实现', ['tool implementation', 'tool implementations']],
  ['MCP server', 'MCP 服务器', ['MCP server', 'MCP servers']],
  ['meaningful context', '有意义的上下文', ['meaningful context']],
  ['same output', '一致输出', ['same output']],
  ['right tools', '合适工具', ['right tools']],
  ['natural language', '自然语言', ['natural language']],
  ['clear interface', '清晰接口', ['clear interface', 'clear interfaces']],
];

const stopWords = new Set([
  'about',
  'after',
  'again',
  'also',
  'and',
  'are',
  'as',
  'at',
  'because',
  'before',
  'being',
  'between',
  'can',
  'could',
  'did',
  'does',
  'doing',
  'each',
  'for',
  'from',
  'have',
  'how',
  'in',
  'into',
  'is',
  'its',
  'more',
  'most',
  'only',
  'of',
  'on',
  'other',
  'over',
  'some',
  'such',
  'than',
  'the',
  'that',
  'their',
  'there',
  'these',
  'they',
  'this',
  'to',
  'through',
  'using',
  'was',
  'were',
  'when',
  'where',
  'which',
  'while',
  'with',
  'would',
  'your',
]);

const tagClasses = ['tag-pr', 'tag-wf', 'tag-ag'];

function readArticles() {
  const source = fs
    .readFileSync(articlesPath, 'utf8')
    .replace(/^import \{ buildingEffectiveAgentsZh \} from '\.\/building-effective-agents\.zh';\n\n/, '')
    .replace(/\nfor \(const \[index[\s\S]*$/, '');
  const context = {};
  vm.runInNewContext(source.replace(/^export const articles = /m, 'articles = '), context);
  return context.articles;
}

function writeArticles(articles) {
  fs.writeFileSync(articlesPath, `export const articles = ${JSON.stringify(articles, null, 2)};\n`, 'utf8');
}

function inlineMarkdownToHtml(text) {
  const codeSpans = [];
  let working = text.replace(/`([^`]+)`/g, (_, code) => {
    codeSpans.push(escapeHtml(code));
    return `\x00CODE${codeSpans.length - 1}\x00`;
  });

  const links = [];
  working = working.replace(/\[([^\]]+)]\(([^)]+)\)/g, (_, label, url) => {
    links.push({ label: escapeHtml(label), url: escapeHtml(url) });
    return `\x00LINK${links.length - 1}\x00`;
  });

  working = escapeHtml(working);
  working = working.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  working = working.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  working = working.replace(/\x00LINK(\d+)\x00/g, (_, index) => {
    const link = links[Number(index)];
    return `<a href="${link.url}" rel="noreferrer" target="_blank">${link.label}</a>`;
  });
  working = working.replace(/\x00CODE(\d+)\x00/g, (_, index) => `<code>${codeSpans[Number(index)]}</code>`);
  return working;
}

function markdownBlockToHtml(block) {
  switch (block.kind) {
    case 'heading': {
      const tag = `h${Math.min(Math.max(block.level, 2), 4)}`;
      return `<${tag}>${inlineMarkdownToHtml(block.text)}</${tag}>`;
    }
    case 'list': {
      const tag = block.ordered ? 'ol' : 'ul';
      const items = block.items
        .map((item) => `<li>${inlineMarkdownToHtml(item.replace(/\n• /g, '<br>• '))}</li>`)
        .join('');
      return `<${tag}>${items}</${tag}>`;
    }
    case 'image': {
      const alt = escapeHtml(block.alt || '');
      const url = escapeHtml(block.url);
      const caption = block.alt ? `<figcaption>${alt}</figcaption>` : '';
      return `<figure class="para-figure"><img alt="${alt}" src="${url}" loading="lazy" />${caption}</figure>`;
    }
    case 'code':
      return `<pre><code>${escapeHtml(block.text)}</code></pre>`;
    default:
      return `<p>${inlineMarkdownToHtml(block.text)}</p>`;
  }
}

function plainTextKey(html) {
  return String(html)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function parseMarkdownBlocks(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let skippedTitle = false;
  let textBuffer = [];
  let listBuffer = null;
  let codeBuffer = null;

  const flushText = () => {
    const text = textBuffer.join(' ').replace(/\s+/g, ' ').trim();
    textBuffer = [];
    if (text) blocks.push({ kind: 'text', text });
  };

  const flushList = () => {
    if (!listBuffer?.items.length) {
      listBuffer = null;
      return;
    }
    blocks.push({ kind: 'list', ordered: listBuffer.ordered, items: [...listBuffer.items] });
    listBuffer = null;
  };

  const flushAll = () => {
    flushText();
    flushList();
  };

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/g, '');

    if (codeBuffer !== null) {
      if (line.trim().startsWith('```')) {
        blocks.push({ kind: 'code', text: codeBuffer.join('\n') });
        codeBuffer = null;
      } else {
        codeBuffer.push(rawLine);
      }
      continue;
    }

    if (line.trim().startsWith('```')) {
      flushAll();
      codeBuffer = [];
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushAll();
      const level = heading[1].length;
      const text = heading[2].trim();
      if (level === 1 && !skippedTitle) {
        skippedTitle = true;
        continue;
      }
      blocks.push({ kind: 'heading', level, text });
      continue;
    }

    const image = line.match(/^!\[([^\]]*)]\(([^)]+)\)\s*$/);
    if (image) {
      flushAll();
      blocks.push({ kind: 'image', alt: image[1].trim(), url: image[2].trim() });
      continue;
    }

    const orderedItem = line.match(/^\d+\.\s+(.+)$/);
    if (orderedItem) {
      flushText();
      if (!listBuffer || !listBuffer.ordered) {
        flushList();
        listBuffer = { ordered: true, items: [] };
      }
      listBuffer.items.push(orderedItem[1].trim());
      continue;
    }

    const unorderedItem = line.match(/^(?:[-*]|\s{2,}[-*])\s+(.+)$/);
    if (unorderedItem) {
      flushText();
      if (!listBuffer || listBuffer.ordered) {
        flushList();
        listBuffer = { ordered: false, items: [] };
      }
      listBuffer.items.push(unorderedItem[1].trim());
      continue;
    }

    if (!line.trim()) {
      flushAll();
      continue;
    }

    if (/^Published\b/i.test(line.trim())) {
      continue;
    }

    flushList();
    textBuffer.push(line.trim());
  }

  if (codeBuffer !== null) {
    blocks.push({ kind: 'code', text: codeBuffer.join('\n') });
  }
  flushAll();
  return blocks;
}

function translationSlugFromDoc(fileName) {
  return fileName.replace(/\.md$/i, '');
}

function normalizeParagraphTranslations(raw) {
  if (Array.isArray(raw)) {
    const normalized = {};
    for (const [index, value] of raw.entries()) {
      if (typeof value === 'string' && value.trim()) {
        normalized[index] = value;
      }
    }
    return normalized;
  }
  if (raw && typeof raw === 'object') {
    return raw;
  }
  return {};
}

function loadParagraphTranslations(fileName) {
  const slug = translationSlugFromDoc(fileName);
  const jsPath = path.join(translationsDir, `${slug}.zh.js`);
  const jsonPath = path.join(translationsDir, `${slug}.zh.json`);

  if (fs.existsSync(jsPath)) {
    const context = {};
    const source = fs
      .readFileSync(jsPath, 'utf8')
      .replace(/^export const paragraphsZh\s*=\s*/m, 'paragraphsZh = ');
    vm.runInNewContext(source, context);
    return normalizeParagraphTranslations(context.paragraphsZh);
  }

  if (fs.existsSync(jsonPath)) {
    return normalizeParagraphTranslations(JSON.parse(fs.readFileSync(jsonPath, 'utf8')));
  }

  return {};
}

function applyParagraphTranslations(paragraphs, translations) {
  return paragraphs.map((paragraph, index) => {
    if (paragraph.kind === 'image') {
      return { ...paragraph, cn: '' };
    }
    const fromFile = translations[index];
    if (typeof fromFile === 'string' && fromFile.trim()) {
      return { ...paragraph, cn: fromFile };
    }
    return paragraph;
  });
}

function extractParagraphsFromMarkdown(markdown, previousParagraphs = [], translationFile = {}) {
  const cnByPlainEn = new Map();
  for (const paragraph of previousParagraphs) {
    if (paragraph.kind === 'image') continue;
    const key = plainTextKey(paragraph.en);
    if (paragraph.cn?.trim() && key) {
      cnByPlainEn.set(key, paragraph.cn);
    }
  }

  const paragraphs = parseMarkdownBlocks(markdown).map((block) => {
    const en = markdownBlockToHtml(block);
    const paragraph = {
      en,
      kind: block.kind,
      cn: '',
    };
    if (block.kind !== 'image') {
      paragraph.cn = cnByPlainEn.get(plainTextKey(en)) || '';
    }
    return paragraph;
  });

  return applyParagraphTranslations(paragraphs, translationFile);
}

function stripMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/<img[^>]*>/g, ' ')
    .replace(/\[[^\]]+]\([^)]+\)/g, (match) => match.match(/\[([^\]]+)]/)?.[1] || ' ')
    .replace(/[>*_`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function normalizeTerm(term) {
  return String(term)
    .toLowerCase()
    .replace(/['’]s\b/g, '')
    .replace(/[^a-z0-9+#.\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((token) => {
      if (token.length > 4 && token.endsWith('ies')) return `${token.slice(0, -3)}y`;
      if (token.length > 4 && token.endsWith('es') && !token.endsWith('ses')) return token.slice(0, -2);
      if (token.length > 4 && token.endsWith('s') && !token.endsWith('ss') && !token.endsWith('us')) return token.slice(0, -1);
      return token;
    })
    .join(' ');
}

const canonicalTermMap = new Map();
for (const [display, , aliases] of termBank) {
  const key = normalizeTerm(display);
  canonicalTermMap.set(key, key);
  for (const alias of aliases) {
    canonicalTermMap.set(normalizeTerm(alias), key);
  }
}

function canonicalTerm(term) {
  const key = normalizeTerm(term);
  return canonicalTermMap.get(key) || key;
}

function termRegex(term) {
  return new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
}

function extractHeadings(markdown) {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.match(/^(#{1,3})\s+(.+)$/))
    .filter(Boolean)
    .map((match) => ({
      level: match[1].length,
      text: match[2].trim(),
    }));
}

function extractSections(markdown) {
  const lines = markdown.split(/\r?\n/);
  const sections = [];
  let current = null;

  for (const line of lines) {
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      if (current) sections.push(current);
      current = {
        level: heading[1].length,
        title: heading[2].trim(),
        body: [],
      };
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current) sections.push(current);
  return sections;
}

function sentenceSplit(text) {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+(?=[A-Z"'])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 30);
}

function findExample(term, sentences) {
  return sentences.find((sentence) => termRegex(term).test(sentence)) || `${term} in practice`;
}

function sectionHint(title, body = '') {
  const lower = `${title} ${body}`.toLowerCase();
  if (lower.includes('security') || lower.includes('threat') || lower.includes('attack')) {
    return '重点看风险边界、攻击面和防护措施，读完后能说清楚为什么这样隔离';
  }
  if (lower.includes('evaluation') || lower.includes('eval') || lower.includes('measure')) {
    return '重点看指标、样例集和回归方式，判断作者如何证明方案有效';
  }
  if (lower.includes('architecture') || lower.includes('system') || lower.includes('design')) {
    return '梳理组件职责、数据流和控制流，画出它们如何协作';
  }
  if (lower.includes('tool') || lower.includes('api') || lower.includes('schema')) {
    return '抓住工具定义、参数设计和调用时机，思考如何迁移到自己的项目';
  }
  if (lower.includes('context') || lower.includes('memory')) {
    return '关注上下文如何被选择、压缩和保鲜，避免只堆更多文本';
  }
  if (lower.includes('permission') || lower.includes('sandbox') || lower.includes('policy')) {
    return '比较自动化效率和安全约束之间的取舍';
  }
  if (lower.includes('what')) return '先确定核心定义、适用范围和反例';
  if (lower.includes('why')) return '提炼作者给出的动机、痛点和价值判断';
  if (lower.includes('how')) return '关注具体做法、流程步骤和工程取舍';
  if (lower.includes('conclusion') || lower.includes('summary')) return '提炼能复用到其他项目的结论';
  return '抓住本节的主张、例子和工程启发';
}

function generateStructure(markdown) {
  const sections = extractSections(markdown)
    .filter((section) => section.level <= 3)
    .slice(0, 14);
  const rows = sections
    .map((section, index) => {
      const indent = section.level === 3 ? 24 : 12;
      const color = index === 0 ? ';color:var(--p)' : '';
      const body = stripMarkdown(section.body.join('\n')).slice(0, 360);
      return `<div style="padding:6px 0;font-weight:600${color}">${escapeHtml(
        section.title,
      )}</div><div style="padding:3px 0 3px ${indent}px;font-size:15px;color:var(--g)">-> ${sectionHint(
        section.title,
        body,
      )}</div>`;
    })
    .join('');
  return `<h3 style="color:var(--p);margin-bottom:14px">文章结构预览</h3><div style="padding-left:12px">${rows}</div>`;
}

function scoreKnownTerm(entry, text) {
  let score = 0;
  for (const alias of entry[2]) {
    const matches = text.match(new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'));
    if (matches) score += matches.length * (alias.includes(' ') ? 3 : 1);
  }
  return score;
}

function extractCandidateTerms(text, globallySeen, locallySeen) {
  const candidates = new Map();
  const clean = text.replace(/[^A-Za-z0-9+#\s-]/g, ' ').replace(/\s+/g, ' ');
  const tokens = clean
    .split(/\s+/)
    .map((token) => token.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, ''))
    .filter(Boolean);

  for (let size = 3; size >= 1; size -= 1) {
    for (let i = 0; i <= tokens.length - size; i += 1) {
      const words = tokens.slice(i, i + size);
      const lowerWords = words.map((word) => word.toLowerCase());
      if (lowerWords.every((word) => stopWords.has(word))) continue;
      if (lowerWords.some((word) => word.length < 3 || stopWords.has(word))) continue;
      const term = words.join(' ').replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, '');
      if (!/[A-Za-z]/.test(term)) continue;
      if (term.length < 5 || term.length > 36) continue;
      const key = canonicalTerm(term);
      if (!key || globallySeen.has(key) || locallySeen.has(key)) continue;

      const domainBoost = /(agent|tool|context|skill|eval|sandbox|code|claude|system|model|prompt|test|research|compiler|permission|security|workflow|memory|schema|api)/i.test(
        term,
      )
        ? 25
        : 0;
      const current = candidates.get(key) || { term, score: 0 };
      current.score += 1 + domainBoost + size * 8;
      candidates.set(key, current);
    }
  }

  return [...candidates.entries()]
    .sort((a, b) => b[1].score - a[1].score)
    .filter(([, value]) => {
      const words = value.term.toLowerCase().split(/\s+/);
      return words.length === 1 || (!stopWords.has(words[0]) && !stopWords.has(words.at(-1)));
    })
    .map(([key, value]) => ({ key, en: value.term.toLowerCase(), cn: '原文高频术语' }));
}

function generateVocab(markdown, globallySeen) {
  const text = stripMarkdown(markdown);
  const sentences = sentenceSplit(text);
  const selected = [];
  const locallySeen = new Set();

  const rankedKnownTerms = termBank
    .map((entry) => ({ entry, score: scoreKnownTerm(entry, text) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  function addTerm({ key, en, cn }) {
    const normalized = canonicalTerm(key || en);
    if (!normalized || globallySeen.has(normalized) || locallySeen.has(normalized)) return false;
    selected.push({
      en,
      cn,
      ex: findExample(en, sentences).slice(0, 120),
    });
    locallySeen.add(normalized);
    globallySeen.add(normalized);
    return true;
  }

  for (const { entry } of rankedKnownTerms) {
    if (selected.length >= 10) break;
    const [display, cn] = entry;
    addTerm({ key: display, en: display, cn });
  }

  for (const item of extractCandidateTerms(text, globallySeen, locallySeen)) {
    if (selected.length >= 10) break;
    addTerm(item);
  }

  return selected;
}

function sentenceScore(sentence) {
  const commas = (sentence.match(/,/g) || []).length;
  const semicolons = (sentence.match(/[;:]/g) || []).length;
  const termHits = termBank.reduce((sum, [term]) => sum + (termRegex(term).test(sentence) ? 1 : 0), 0);
  return sentence.length + commas * 20 + semicolons * 25 + termHits * 35;
}

function conceptLabel(index) {
  if (index < 2) return '基础';
  if (index < 4) return '模式';
  return '实践';
}

function generateConcepts(markdown, vocab) {
  const sections = extractSections(markdown)
    .filter((section) => section.level >= 2)
    .slice(0, 6);
  const concepts = sections.length
    ? sections.map((section) => ({ text: section.title, body: stripMarkdown(section.body.join('\n')).slice(0, 240) }))
    : vocab.slice(0, 6).map((word) => ({ text: word.en, body: word.ex }));

  const cards = concepts
    .slice(0, 6)
    .map((concept, index) => {
      const matched = vocab.find((word) => termRegex(word.en).test(concept.text) || termRegex(word.en).test(concept.body));
      const cn = matched?.cn || '关键概念';
      return `<div class="concept-card"><h4>${escapeHtml(concept.text)} <span class="en">${escapeHtml(
        cn,
      )}</span></h4><p>${sectionHint(concept.text, concept.body)}。复盘时补一句：它解决什么问题、依赖什么条件、带来什么取舍。</p><span class="concept-tag ${
        tagClasses[index % tagClasses.length]
      }">${conceptLabel(index)}</span></div>`;
    })
    .join('');

  return `<h3 style="color:var(--p);margin-bottom:14px">核心概念卡片</h3><div class="concept-grid concept-stack">${cards}</div>`;
}

function checklistItem(text) {
  return `<li onclick="toggleCheck(this)"><input type="checkbox"><label>${escapeHtml(text)}</label></li>`;
}

function generateTasks(article, vocab) {
  const terms = vocab
    .slice(0, 4)
    .map((word) => `${word.en}（${word.cn}）`)
    .join(' / ');
  return `<h3 style="color:var(--p);margin:24px 0 14px">学习任务清单</h3>
<h4 style="margin:12px 0 6px;font-size:16px">速读：10 分钟</h4>
<ul class="checklist">${checklistItem(`读完《${article.title}》，用一句话写出作者真正想解决的问题`)}</ul>
<h4 style="margin:12px 0 6px;font-size:16px">精读：25 分钟</h4>
<ul class="checklist">${checklistItem(`解释 ${terms} 在本文中的含义，不要只背中文翻译`)}${checklistItem('整理 3 条能迁移到自己项目的工程原则，并写出适用条件')}</ul>
<h4 style="margin:12px 0 6px;font-size:16px">输出：15 分钟</h4>
<ul class="checklist">${checklistItem('用英文写 3-5 句话总结本文观点')}${checklistItem(
    '结合自己的业务场景，设计一个可验证的小实验或检查清单',
  )}</ul>`;
}

function pickTeachingTerm(text, vocab = []) {
  const normalizedText = String(text).toLowerCase();
  const localMatch = vocab.find((word) => {
    const normalized = canonicalTerm(word.en);
    return termRegex(word.en).test(text) || normalizedText.includes(normalized) || normalizedText.includes(`${normalized}s`);
  });
  if (localMatch) return localMatch;
  const bankMatch = termBank.find(([term, , aliases]) => [term, ...aliases].some((alias) => {
    const normalized = canonicalTerm(alias);
    return termRegex(alias).test(text) || normalizedText.includes(normalized) || normalizedText.includes(`${normalized}s`);
  }));
  return bankMatch ? { en: bankMatch[0], cn: bankMatch[1] } : null;
}

function firstTeachingSentence(text, fallback) {
  return sentenceSplit(text).find((sentence) => sentence.length > 45 && sentence.length < 220) || fallback;
}

function readingNoteForConcept(title, body, matched) {
  if (matched) {
    return `英文表达：先把 ${matched.en} 理解成本文里的功能角色，而不是只背成“${matched.cn}”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。`;
  }
  if (/when|where|how|why/i.test(title)) {
    return '英文表达：标题里的疑问词就是阅读路标。when/where 通常限定适用边界，how 通常引出做法，why 通常解释判断依据。';
  }
  return '英文表达：先抓标题名词，再回到段落里找作者给它安排的动作、条件和结果。这样比逐词翻译更稳定。';
}

function engineeringNoteForText(title, body = '') {
  const lower = `${title} ${body}`.toLowerCase();
  if (lower.includes('security') || lower.includes('sandbox') || lower.includes('permission')) {
    return '重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。';
  }
  if (lower.includes('evaluation') || lower.includes('eval') || lower.includes('test')) {
    return '判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。';
  }
  if (lower.includes('tool') || lower.includes('schema') || lower.includes('api')) {
    return '工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。';
  }
  if (lower.includes('context') || lower.includes('memory')) {
    return '上下文不是越多越好，关键是把当前任务真正需要的信息放进模型能稳定使用的位置。';
  }
  if (lower.includes('workflow') || lower.includes('routing') || lower.includes('parallel') || lower.includes('orchestrator')) {
    return '这类模式的核心是拆分任务和控制流程，先判断任务是否可预测，再决定用固定流程还是动态分工。';
  }
  if (lower.includes('agent')) {
    return '智能体的价值来自可观察的环境反馈和清晰停止条件，不是把所有步骤都交给模型自由发挥。';
  }
  return '把这一节当成一个设计判断来读：它适合什么场景，牺牲了什么，又提升了什么。';
}

function readingStepLabel(title, body = '') {
  const lower = `${title} ${body}`.toLowerCase();
  if (/what|definition|anatomy|introduction/.test(lower)) return '定义问题';
  if (/why|challenge|problem|risk|security|threat/.test(lower)) return '解释动机';
  if (/when|where|choose|use case|trade/.test(lower)) return '判断边界';
  if (/how|workflow|pattern|architecture|design|building|implementation|solution/.test(lower)) return '讲做法';
  if (/example|practice|case|customer|prototype/.test(lower)) return '看例子';
  if (/evaluation|eval|measure|test|benchmark/.test(lower)) return '验证效果';
  if (/summary|conclusion|future|principle/.test(lower)) return '提炼结论';
  return '推进主线';
}

function sectionGuide(title, body = '') {
  const titleLower = title.toLowerCase();
  const cleanTitle = title.replace(/^(workflow|building block):\s*/i, '').trim();
  if (titleLower.includes('framework')) {
    return '说明框架能降低上手成本，但也可能遮住底层提示词、响应和调试细节，所以不能一开始就依赖复杂框架。';
  }
  if (titleLower === 'how it works') {
    return '解释 auto mode 的整体运行流程：用户发起操作后，系统如何判断是否可以跳过权限确认。';
  }
  if (titleLower === 'threat model') {
    return '列出 auto mode 需要防住的风险，尤其是恶意提示、数据外传和越权执行。';
  }
  if (titleLower.includes('permission decisions')) {
    return '说明权限决策如何产生：哪些信号会影响系统放行、拦截或要求用户确认。';
  }
  if (titleLower.includes('classifier decision criteria')) {
    return '拆解分类器的判断标准，说明它如何识别安全操作和高风险操作。';
  }
  if (titleLower.includes('fixed template')) {
    return '说明固定模板负责约束分类器输入，让权限判断保持一致，减少随意解释。';
  }
  if (titleLower.includes('customizable slots')) {
    return '说明可定制字段如何把产品场景、工具信息和用户设置补进权限判断里。';
  }
  if (titleLower === 'results') {
    return '展示 auto mode 的实际效果，重点看它减少了多少确认步骤，以及安全拦截是否仍然有效。';
  }
  if (titleLower.includes('anatomy of a skill')) {
    return '拆开一个 Skill 的组成部分：说明文件、渐进加载内容，以及必要时可以执行的脚本。';
  }
  if (titleLower.includes('what are agents')) {
    return '先给 agent 划边界：workflow 是预设好的执行路径，agent 则会根据任务动态决定步骤和工具。';
  }
  if (titleLower.includes('when') && titleLower.includes('agent')) {
    return '解释什么时候该用 agent：只有任务表现真的需要灵活决策时，额外的成本、延迟和复杂度才值得。';
  }
  if (titleLower.includes('augmented llm')) {
    return '把 augmented LLM 当作基础积木：在模型之外接入检索、工具和记忆，为后面的工作流与 agent 做准备。';
  }
  if (titleLower.includes('prompt chaining')) {
    return '说明 prompt chaining 的思路：把任务拆成前后相接的小步骤，并在中间结果上加检查。';
  }
  if (titleLower.includes('routing')) {
    return '说明 routing 的作用：先判断输入类型，再交给更合适的提示、模型或下游流程处理。';
  }
  if (titleLower.includes('parallelization')) {
    return '概括 parallelization 的两种用法：独立子任务并行处理，或多次尝试后投票选择结果。';
  }
  if (titleLower.includes('orchestrator')) {
    return '说明 orchestrator-workers：中心模型负责拆任务、分派 worker，再把多个结果合成最终答案。';
  }
  if (titleLower.includes('evaluator') || titleLower.includes('optimizer')) {
    return '介绍 evaluator-optimizer：一个模型生成结果，另一个模型评价并推动下一轮修改。';
  }
  if (titleLower === 'agents') {
    return '把真正的 agent 放在最后展开：适合开放式任务，但需要环境反馈、工具边界和停止条件。';
  }
  if (titleLower.includes('skills and the context window')) {
    return '说明 Skill 如何分层进入上下文：先加载少量元数据，等任务触发时再补充具体说明。';
  }
  if (titleLower.includes('skills and code execution')) {
    return '说明 Skill 不只是说明文档，也可以带可执行代码，让 Claude 在需要时调用。';
  }
  if (titleLower.includes('developing and evaluating skills')) {
    return '说明开发 Skill 的方式：从真实任务中的失败点出发，逐步补充说明、脚本和评估。';
  }
  if (titleLower.includes('security considerations')) {
    return '提醒 Skill 会带来新的安全风险，尤其是外部内容、代码执行和网络访问。';
  }
  if (titleLower.includes('future of skills')) {
    return '说明 Skills 正在成为跨平台能力格式，不只服务单个产品，也能迁移到更多 agent 场景。';
  }
  if (titleLower.includes('keeping users secure')) {
    return '说明 Claude Code 的安全目标：既要让代理能做事，也要保护用户文件、命令和网络环境。';
  }
  if (titleLower.includes('sandboxing')) {
    return '介绍 sandboxing 如何限制 Claude Code 的执行环境，让更多操作可以安全自动化。';
  }
  if (titleLower.includes('getting started')) {
    return '给出启用或试用相关功能的入口，让读者知道如何把前面的设计落到本地使用。';
  }
  if (titleLower.includes('long-running agent problem')) {
    return '说明长周期 agent 的核心难题：任务时间长、状态多、环境会变，单次 prompt 很难稳定覆盖。';
  }
  if (titleLower.includes('environment management')) {
    return '说明 harness 需要管理运行环境，让 agent 能复现状态、执行命令并保存进度。';
  }
  if (titleLower.includes('feature list')) {
    return '把 harness 需要提供的能力列出来，方便理解长任务 agent 缺哪些基础设施。';
  }
  if (titleLower.includes('incremental progress')) {
    return '强调长任务要能持续留下可检查的中间成果，而不是等到最后才知道是否失败。';
  }
  if (titleLower === 'testing') {
    return '说明测试如何成为长任务 agent 的反馈来源，让系统能发现错误并继续修正。';
  }
  if (titleLower.includes('getting up to speed')) {
    return '说明 agent 重新进入任务时如何快速恢复上下文，知道之前做到哪里、下一步该做什么。';
  }
  if (titleLower.includes('future work')) {
    return '指出 harness 还可以继续改进的方向，包括更强的恢复、调度和可观察性。';
  }
  if (titleLower.includes("don't adopt a pet")) {
    return '用“不要养宠物”类比说明：不要把每个 agent 当成需要人盯着的长期会话。';
  }
  if (titleLower.includes('decouple the brain')) {
    return '解释 brain 和 hands 分离：规划逻辑保持稳定，执行环境可以被替换、排队或恢复。';
  }
  if (titleLower.includes("session is not claude")) {
    return '说明会话窗口不等于 Claude 的全部记忆，任务状态应该由外部系统稳定保存。';
  }
  if (titleLower.includes('many brains')) {
    return '说明多个决策端和多个执行端如何组合，让托管 agent 能并行处理更多任务。';
  }
  if (titleLower.includes('three types of risk')) {
    return '把 agent 风险拆成几类，并对应到产品需要提供的防护组件。';
  }
  if (titleLower.includes('patterns for containing agents')) {
    return '比较几种隔离 agent 的产品模式，从临时容器到人工确认沙箱再到本地虚拟机。';
  }
  if (titleLower.includes('ephemeral container')) {
    return '介绍临时容器模式：任务结束后环境销毁，降低持久化风险。';
  }
  if (titleLower.includes('human-in-the-loop')) {
    return '介绍人工在环沙箱：Claude 可以准备操作，但关键动作仍需要用户确认。';
  }
  if (titleLower.includes('local vm')) {
    return '介绍本地虚拟机模式：把高权限操作隔离在受控环境里，减少对主机的直接影响。';
  }
  if (titleLower === 'introduction') {
    return '引入本文要解决的问题和评估对象，为后面的结构、方法和例子做铺垫。';
  }
  if (titleLower.includes('structure of an evaluation')) {
    return '说明一次 eval 由任务样例、期望结果、评分方式和分析流程组成。';
  }
  if (titleLower.includes('why build evaluations')) {
    return '解释为什么要做 eval：它帮助团队发现能力边界、追踪回归并比较不同方案。';
  }
  if (titleLower.includes('how to evaluate ai agents')) {
    return '说明评估 agent 时要看任务完成度、工具调用、稳定性和失败模式。';
  }
  if (titleLower.includes('types of graders')) {
    return '区分不同评分器类型，例如规则判断、模型裁判和人工复核。';
  }
  if (titleLower.includes('capability vs. regression')) {
    return '区分能力评估和回归评估：前者看能不能做，后者看改动后有没有退步。';
  }
  if (titleLower.includes('coding agents')) {
    return '说明评估 coding agent 时，测试、代码审查和任务完成标准都要纳入判断。';
  }
  if (titleLower.includes('conversational agents')) {
    return '说明评估对话型 agent 时，要关注回答质量、指令遵循和多轮一致性。';
  }
  if (titleLower.includes('context engineering vs. prompt engineering')) {
    return '区分 prompt engineering 和 context engineering：前者改提示词，后者管理模型完成任务时能看到的全部信息。';
  }
  if (titleLower.includes('why context engineering')) {
    return '解释为什么长任务更需要 context engineering：模型会因为上下文过多、过旧或无关而失焦。';
  }
  if (titleLower.includes('anatomy of effective context')) {
    return '拆解有效上下文由哪些部分组成，包括指令、工具、外部资料、历史记录和当前任务状态。';
  }
  if (titleLower.includes('context retrieval')) {
    return '说明检索和 agentic search 如何帮助模型主动找到当前任务需要的信息。';
  }
  if (titleLower.includes('tool search tool')) {
    return '介绍 Tool Search Tool：不预先加载所有工具定义，而是在需要时动态查找相关工具。';
  }
  if (titleLower === 'the challenge') {
    return '提出本节要解决的主要障碍，让读者先知道后面的方案针对什么问题。';
  }
  if (titleLower === 'our solution') {
    return '给出作者的解决方案，并说明它如何缓解前面提出的问题。';
  }
  if (titleLower.includes('programmatic tool calling')) {
    return '介绍 Programmatic Tool Calling：把多步工具处理放进代码执行，只把最终结果交给模型。';
  }
  if (titleLower.includes('how the tool search tool works')) {
    return '说明 Tool Search Tool 的具体流程：先搜索相关工具，再只加载这次任务需要的定义。';
  }
  if (titleLower.includes('when to use the tool search tool')) {
    return '说明 Tool Search Tool 适合工具很多、上下文紧张、但每次任务只需要少量工具的场景。';
  }
  if (titleLower.includes('how programmatic tool calling works')) {
    return '说明程序化工具调用的流程：用代码批量调用工具、处理中间结果，再返回精简输出。';
  }
  if (titleLower.includes('when to use programmatic tool calling')) {
    return '说明什么时候该把工具调用放进代码执行，尤其是大量数据处理和多步依赖调用。';
  }
  if (titleLower.includes('what is a tool')) {
    return '重新定义 tool：它不是普通 API 包装，而是 agent 感知和操作外部世界的接口。';
  }
  if (titleLower.includes('how to write tools')) {
    return '说明如何和 agent 一起写工具：先做原型，再通过实际任务观察工具是否好用。';
  }
  if (titleLower.includes('running an evaluation')) {
    return '说明如何评估工具质量：用任务样例检查 agent 是否理解工具目的并正确调用。';
  }
  if (titleLower.includes('namespacing')) {
    return '说明工具命名空间的重要性：清晰的服务名和资源名能帮助 agent 选对工具。';
  }
  if (titleLower.includes('summary') || titleLower.includes('conclusion')) {
    return '收束全文，把前面的小节整理成可以迁移到项目设计中的判断原则。';
  }
  const sentence = firstTeachingSentence(body, '');
  if (sentence) {
    return `${cleanTitle}：概括这一部分的关键观点，并说明它和前后章节之间的关系。`;
  }
  return `${cleanTitle}：补充这一部分的背景、做法或结论。`;
}

function isUsefulStructureSection(section) {
  const title = section.title.trim();
  const lower = title.toLowerCase();
  if (!title || lower === 'acknowledgements' || lower === 'references') return false;
  if (/[{}=;]/.test(title)) return false;
  if (title.length > 90) return false;
  return true;
}

function articleThesis(title, sections) {
  const lowerTitle = title.toLowerCase();
  const thesisByTitle = [
    [
      'building effective agents',
      '构建 agent 不应该从复杂框架开始，而要从简单方案开始；只有任务真的需要自主决策、工具使用和反馈循环时，才逐步升级到 workflow 或 agent。文章先区分 workflow 与 agent，再介绍 prompt chaining、routing、parallelization、orchestrator-workers 等常见模式。',
    ],
    [
      'agent skills',
      'Claude Agent Skills 把专业知识、操作步骤和代码打包成可按需加载的技能，让 agent 在不撑爆上下文的情况下完成真实工作。阅读重点是 Skill 的结构、加载时机、代码执行方式，以及它带来的安全边界。',
    ],
    [
      'context engineering',
      '长任务 agent 不能只靠 prompt engineering。这里的重点是 context engineering：管理模型完成任务时能看到的全部信息，包括系统指令、工具、外部资料、历史记录和当前任务状态。',
    ],
    [
      'auto mode',
      'Claude Code auto mode 试图减少频繁权限确认，同时避免把危险操作完全放开。阅读重点是哪些操作可以自动执行，哪些操作仍要拦截，以及这种设计如何在效率和安全之间取平衡。',
    ],
    [
      'permission prompts',
      '只靠权限弹窗不能保证 Claude Code 安全。更可靠的安全设计需要结合隔离环境、风险策略、权限边界，以及对高风险操作的控制。',
    ],
    [
      'harnesses for long-running agents',
      '长时间运行的 agent 不能只靠一个好 prompt，还需要一套 harness 来管理环境、任务状态、检查点、恢复和测试。阅读重点是如何让 agent 在长任务中持续推进而不失控。',
    ],
    [
      'managed agents',
      'Managed Agents 的核心思想是把负责思考和规划的 brain，与负责执行工具和操作环境的 hands 分离。这样可以让长周期任务更稳定，也方便排队、恢复和扩展。',
    ],
    [
      'contain claude',
      'Anthropic 在不同产品里隔离 Claude 的执行能力。阅读重点是当模型能运行代码、访问文件或使用浏览器时，产品如何用容器、虚拟机和网络限制来控制风险。',
    ],
    [
      'demystifying evals',
      'Eval 不是神秘的分数，而是一套帮助团队判断模型能力、发现回归和比较方案的工程流程。阅读重点是样例集、评分标准、人工复核和自动化评估各自解决什么问题。',
    ],
    [
      'multi-agent research system',
      '多 agent 研究系统的运行方式是：主 agent 负责规划和综合，多个子 agent 并行查找资料、做独立分析，最后把结果合成带引用的研究答案。',
    ],
    [
      'c compiler',
      '一组并行 Claude 可以参与构建 C 编译器，把复杂工程任务拆成测试、实现、调试和文档等子任务。阅读重点是并行 agent 团队如何协作，以及测试体系如何约束结果质量。',
    ],
    [
      'advanced tool use',
      'Claude Developer Platform 提供两种高级工具使用方式：Tool Search Tool 用来按需查找工具，Programmatic Tool Calling 用代码处理中间步骤，只把关键结果交给模型。',
    ],
    [
      'writing effective tools',
      '为 agent 写好工具，关键不只是包装 API。工具名称、参数、返回值、错误提示和命名空间都会影响 agent 能否理解并正确使用它。',
    ],
  ];
  const matched = thesisByTitle.find(([key]) => lowerTitle.includes(key));
  if (matched) return matched[1];

  const intro = firstTeachingSentence(stripMarkdown(sections[0]?.body.join('\n') || ''), '');
  const sectionTitles = sections
    .filter((section) => section.level === 2)
    .slice(0, 5)
    .map((section) => section.title.replace(/\s+/g, ' '));
  const pathText = sectionTitles.length ? `文章大致按“${sectionTitles.join(' / ')}”推进。` : '';
  const introText = intro ? `开篇主要信息是：“${intro}”。` : '';
  return `本文围绕《${title}》展开。${introText}${pathText}`;
}

function generateStructure(markdown) {
  const sections = extractSections(markdown)
    .filter((section) => section.level <= 3)
    .filter(isUsefulStructureSection)
    .slice(0, 12);
  const title = sections[0]?.title || 'Untitled article';
  const guideSections = sections.slice(1);
  const rows = guideSections
    .map((section) => {
      const depthClass = section.level === 3 ? ' structure-row-sub' : '';
      return `<div class="structure-row${depthClass}"><div class="structure-row-head"><span class="structure-step">${escapeHtml(
        readingStepLabel(section.title, section.body.join('\n')),
      )}</span><strong>${escapeHtml(section.title)}</strong></div><p>${escapeHtml(
        sectionGuide(section.title, stripMarkdown(section.body.join('\n')).slice(0, 900)),
      )}</p></div>`;
    })
    .join('');
  return `<h3 style="color:var(--p);margin-bottom:14px">文章结构预览</h3><div class="structure-summary"><strong>文章主旨：</strong>${escapeHtml(
    articleThesis(title, sections),
  )}</div><div class="structure-guide-list">${rows}</div>`;
}

function generateConcepts(markdown, vocab) {
  const sections = extractSections(markdown)
    .filter((section) => section.level >= 2)
    .slice(0, 6);
  const concepts = sections.length
    ? sections.map((section) => ({ text: section.title, body: stripMarkdown(section.body.join('\n')).slice(0, 800) }))
    : vocab.slice(0, 6).map((word) => ({ text: word.en, body: word.ex }));

  const cards = concepts
    .slice(0, 6)
    .map((concept, index) => {
      const matched = pickTeachingTerm(concept.text, vocab) || pickTeachingTerm(concept.body, vocab);
      const cn = matched?.cn || '关键概念';
      const context = firstTeachingSentence(concept.body, sectionHint(concept.text, concept.body));
      return `<div class="concept-card"><h4>${escapeHtml(concept.text)} <span class="en">${escapeHtml(
        cn,
      )}</span></h4><p><strong>本文语境：</strong>${escapeHtml(context)}</p><p><strong>${escapeHtml(
        readingNoteForConcept(concept.text, concept.body, matched),
      )}</strong></p><p><strong>${escapeHtml(
        engineeringNoteForText(concept.text, concept.body),
      )}</strong></p><span class="concept-tag ${tagClasses[index % tagClasses.length]}">${conceptLabel(index)}</span></div>`;
    })
    .join('');

  return `<h3 style="color:var(--p);margin-bottom:14px">核心概念卡片</h3><div class="concept-grid concept-stack">${cards}</div>`;
}

function applyGeneratedAids() {
  const articles = readArticles();
  const globallySeen = new Set();

  for (const [articleId, fileName] of docMap) {
    const article = articles[articleId];
    const markdown = fs.readFileSync(path.join(root, 'docs', fileName), 'utf8');
    const vocab = generateVocab(markdown, globallySeen);

    article.vocab = vocab;
    article.structure = generateStructure(markdown);
    delete article.sentences;
    article.concepts = generateConcepts(markdown, vocab);
    delete article.quotes;
    article.tasks = generateTasks(article, vocab);
    article.paragraphs = extractParagraphsFromMarkdown(
      markdown,
      article.paragraphs,
      loadParagraphTranslations(fileName),
    );
  }
  writeArticles(articles);
  return articles;
}

const articles = applyGeneratedAids();
const seen = new Set();
for (const article of articles) {
  const duplicated = article.vocab.filter((word) => {
    const key = canonicalTerm(word.en);
    if (seen.has(key)) return true;
    seen.add(key);
    return false;
  });
  console.log(`${article.id}\tvocab=${article.vocab.length}\tduplicates=${duplicated.length}\t${article.title}`);
}

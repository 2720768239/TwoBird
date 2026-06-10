const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const articlesPath = path.join(root, 'src', 'data', 'articles.js');

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
    .replace(/import \{ buildingEffectiveAgentsZh \} from '\.\/building-effective-agents\.zh';\n\n/, '')
    .replace(/\nfor \(const \[index[\s\S]*$/, '');
  const context = {};
  vm.runInNewContext(source.replace(/^export const articles = /m, 'articles = '), context);
  return context.articles;
}

function writeArticles(articles) {
  fs.writeFileSync(
    articlesPath,
    `import { buildingEffectiveAgentsZh } from './building-effective-agents.zh';\n\nexport const articles = ${JSON.stringify(
      articles,
      null,
      2,
    )};\n\nfor (const [index, translation] of buildingEffectiveAgentsZh.entries()) {\n  if (articles[0].paragraphs[index]) {\n    articles[0].paragraphs[index].cn = translation;\n  }\n}\n`,
    'utf8',
  );
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

function generateSentenceTranslation(sentence, vocab) {
  const terms = vocab.filter((word) => termRegex(word.en).test(sentence)).slice(0, 4);
  if (!terms.length) {
    return '参考译法：这句话信息密度较高，先抓主语和核心谓语，再把补充说明拆成条件、目的或结果。';
  }
  return `参考译法：这句话围绕 ${terms.map((word) => `${word.en}（${word.cn}）`).join('、')} 展开，重点是在说明它们如何影响系统设计或工程落地。`;
}

function generateGrammar(sentence) {
  if (sentence.includes(' where ')) return '语法提示：where 引导补充说明，通常解释前面系统、场景或阶段的具体条件。';
  if (sentence.includes(' when ')) return '语法提示：when 引导时间或条件状语，先判断它限制的是动作发生时机还是适用边界。';
  if (sentence.includes(' while ')) return '语法提示：while 常用于对比或让步，注意前后两个分句的立场差异。';
  if (sentence.includes(' that ')) return '语法提示：that 可能引导定语从句或宾语从句，先判断它修饰的对象。';
  return '语法提示：先找主句，再把插入语、从句和介词短语逐层拆开。';
}

function generateSentences(markdown, vocab) {
  const text = stripMarkdown(markdown);
  const sentences = sentenceSplit(text)
    .filter((sentence) => sentence.length > 105 && sentence.length < 340)
    .sort((a, b) => sentenceScore(b) - sentenceScore(a))
    .slice(0, 4);

  const cards = sentences
    .map((sentence) => {
      const tags = vocab
        .filter((word) => termRegex(word.en).test(sentence))
        .slice(0, 4)
        .map(
          (word) =>
            `<span class="word-tag"><span class="w-en">${escapeHtml(word.en)}</span> <span class="w-cn">${escapeHtml(
              word.cn,
            )}</span></span>`,
        )
        .join('');
      return `<div class="sentence-card"><div class="sentence-original">"${escapeHtml(
        sentence,
      )}"</div><div class="sentence-words">${tags}</div><div class="sentence-translation"><strong>翻译：</strong>${generateSentenceTranslation(
        sentence,
        vocab,
      )}</div><div class="sentence-grammar"><strong>${generateGrammar(sentence)}</strong></div></div>`;
    })
    .join('');

  return `<h3 style="color:var(--p);margin-bottom:14px">长难句拆解</h3>${cards}`;
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

  return `<h3 style="color:var(--p);margin-bottom:14px">核心概念卡片</h3><div class="concept-grid">${cards}</div>`;
}

function generateQuotes(markdown) {
  const text = stripMarkdown(markdown);
  const quotes = sentenceSplit(text)
    .filter((sentence) => sentence.length > 80 && sentence.length < 240)
    .filter((sentence) => /(should|must|need|important|key|core|recommend|best|effective|reliable|success|security|build|design|use)/i.test(sentence))
    .sort((a, b) => sentenceScore(b) - sentenceScore(a))
    .slice(0, 4);

  const cards = quotes
    .map((quote) => {
      const focus = sectionHint(quote);
      return `<div class="quote-card"><div class="quote-en">"${escapeHtml(
        quote,
      )}"</div><div class="quote-cn">要点：这句话适合用来复述文章主张，核心在于 ${escapeHtml(
        focus,
      )}。</div><div class="quote-why">复盘：把其中的条件、取舍和工程原则改写成自己的项目检查项。</div></div>`;
    })
    .join('');
  return `<h3 style="color:var(--p);margin-bottom:14px">金句摘录</h3>${cards}`;
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
<ul class="checklist">${checklistItem(`解释 ${terms} 在本文中的含义，不要只背中文翻译`)}${checklistItem(
    '选 3 个长难句，拆出主句、从句和关键修饰语',
  )}${checklistItem('整理 3 条能迁移到自己项目的工程原则，并写出适用条件')}</ul>
<h4 style="margin:12px 0 6px;font-size:16px">输出：15 分钟</h4>
<ul class="checklist">${checklistItem('用英文写 3-5 句话总结本文观点')}${checklistItem(
    '结合自己的业务场景，设计一个可验证的小实验或检查清单',
  )}</ul>`;
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
    article.sentences = generateSentences(markdown, vocab);
    article.concepts = generateConcepts(markdown, vocab);
    article.quotes = generateQuotes(markdown);
    article.tasks = generateTasks(article, vocab);
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

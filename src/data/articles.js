export const articles = [
  {
    "id": 0,
    "title": "Building effective agents",
    "date": "2024-12-19",
    "diff": "★★☆",
    "time": "25分钟",
    "author": "Erik S. & Barry Zhang",
    "url": "https://www.anthropic.com/engineering/building-effective-agents",
    "vocab": [
      {
        "en": "agent",
        "cn": "智能体",
        "ex": "\"Agent\" can be defined in several ways."
      },
      {
        "en": "workflow",
        "cn": "工作流",
        "ex": "For many applications, however, optimizing single LLM calls with retrieval and in-context examples is usually enough. ##"
      },
      {
        "en": "tool",
        "cn": "工具",
        "ex": "At Anthropic, we categorize all these variations as agentic systems , but draw an important architectural distinction be"
      },
      {
        "en": "prompt",
        "cn": "提示词",
        "ex": "For the remainder of this post, we'll assume each LLM call has access to these augmented capabilities. ### Workflow: Pro"
      },
      {
        "en": "example",
        "cn": "示例",
        "ex": "When to use this workflow: This workflow is well-suited for complex tasks where you can't predict the subtasks needed (i"
      },
      {
        "en": "agentic",
        "cn": "智能体式",
        "ex": "At Anthropic, we categorize all these variations as agentic systems , but draw an important architectural distinction be"
      },
      {
        "en": "augmented LLM",
        "cn": "增强型大语言模型",
        "ex": "We'll start with our foundational building block—the augmented LLM—and progressively increase complexity, from simple co"
      },
      {
        "en": "parallelization",
        "cn": "并行化",
        "ex": "Examples where routing is useful: - Directing different types of customer service queries (general questions, refund req"
      },
      {
        "en": "routing",
        "cn": "路由",
        "ex": "Examples where prompt chaining is useful: - Generating Marketing copy, then translating it into a different language. - "
      },
      {
        "en": "orchestrator",
        "cn": "编排器",
        "ex": "This tends to perform better than having the same LLM call handle both guardrails and the core response. - Automating ev"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>构建 agent 不应该从复杂框架开始，而要从简单方案开始；只有任务真的需要自主决策、工具使用和反馈循环时，才逐步升级到 workflow 或 agent。文章先区分 workflow 与 agent，再介绍 prompt chaining、routing、parallelization、orchestrator-workers 等常见模式。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>What are agents?</strong></div><p>先给 agent 划边界：workflow 是预设好的执行路径，agent 则会根据任务动态决定步骤和工具。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>When (and when not) to use agents</strong></div><p>解释什么时候该用 agent：只有任务表现真的需要灵活决策时，额外的成本、延迟和复杂度才值得。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>When and how to use frameworks</strong></div><p>说明框架能降低上手成本，但也可能遮住底层提示词、响应和调试细节，所以不能一开始就依赖复杂框架。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>Building blocks, workflows, and agents</strong></div><p>Building blocks, workflows, and agents：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Building block: The augmented LLM</strong></div><p>把 augmented LLM 当作基础积木：在模型之外接入检索、工具和记忆，为后面的工作流与 agent 做准备。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Workflow: Prompt chaining</strong></div><p>说明 prompt chaining 的思路：把任务拆成前后相接的小步骤，并在中间结果上加检查。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Workflow: Routing</strong></div><p>说明 routing 的作用：先判断输入类型，再交给更合适的提示、模型或下游流程处理。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Workflow: Parallelization</strong></div><p>概括 parallelization 的两种用法：独立子任务并行处理，或多次尝试后投票选择结果。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Workflow: Orchestrator-workers</strong></div><p>说明 orchestrator-workers：中心模型负责拆任务、分派 worker，再把多个结果合成最终答案。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Workflow: Evaluator-optimizer</strong></div><p>介绍 evaluator-optimizer：一个模型生成结果，另一个模型评价并推动下一轮修改。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Agents</strong></div><p>把真正的 agent 放在最后展开：适合开放式任务，但需要环境反馈、工具边界和停止条件。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>What are agents? <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>Some customers define agents as fully autonomous systems that operate independently over extended periods, using various tools to accomplish complex tasks.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>When (and when not) to use agents <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>When building applications with LLMs, we recommend finding the simplest solution possible, and only increasing complexity when needed.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>When and how to use frameworks <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>These frameworks make it easy to get started by simplifying standard low-level tasks like calling LLMs, defining and parsing tools, and chaining calls together.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Building blocks, workflows, and agents <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>In this section, we'll explore the common patterns for agentic systems we've seen in production.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>这类模式的核心是拆分任务和控制流程，先判断任务是否可预测，再决定用固定流程还是动态分工。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Building block: The augmented LLM <span class=\"en\">增强型大语言模型</span></h4><p><strong>本文语境：</strong>The basic building block of agentic systems is an LLM enhanced with augmentations such as retrieval, tools, and memory.</p><p><strong>英文表达：先把 augmented LLM 理解成本文里的功能角色，而不是只背成“增强型大语言模型”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>Workflow: Prompt chaining <span class=\"en\">工作流</span></h4><p><strong>本文语境：</strong>Prompt chaining decomposes a task into a sequence of steps, where each LLM call processes the output of the previous one.</p><p><strong>英文表达：先把 workflow 理解成本文里的功能角色，而不是只背成“工作流”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>这类模式的核心是拆分任务和控制流程，先判断任务是否可预测，再决定用固定流程还是动态分工。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Building effective agents》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 agent（智能体） / workflow（工作流） / tool（工具） / prompt（提示词） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>We've worked with dozens of teams building LLM agents across industries. Consistently, the most successful implementations use simple, composable patterns rather than complex frameworks.</p>",
        "kind": "text",
        "cn": "<p>我们与数十个团队在不同行业构建 LLM 智能体合作。一致的经验是：最成功的实现往往采用简单、可组合的模式，而不是复杂框架。</p>"
      },
      {
        "en": "<p>Over the past year, we've worked with dozens of teams building large language model (LLM) agents across industries. Consistently, the most successful implementations weren't using complex frameworks or specialized libraries. Instead, they were building with simple, composable patterns.</p>",
        "kind": "text",
        "cn": "<p>过去一年里，我们与数十个团队在不同行业构建大语言模型（LLM）智能体。一致的经验是：最成功的实现并没有使用复杂框架或专用库，而是用简单、可组合的模式来构建。</p>"
      },
      {
        "en": "<p>In this post, we share what we've learned from working with our customers and building agents ourselves, and give practical advice for developers on building effective agents.</p>",
        "kind": "text",
        "cn": "<p>在这篇文章中，我们分享与客户合作以及亲自构建智能体的经验，并为开发者提供构建高效智能体的实用建议。</p>"
      },
      {
        "en": "<h2>What are agents?</h2>",
        "kind": "heading",
        "cn": "<h2>什么是智能体？</h2>"
      },
      {
        "en": "<p>&quot;Agent&quot; can be defined in several ways. Some customers define agents as fully autonomous systems that operate independently over extended periods, using various tools to accomplish complex tasks. Others use the term to describe more prescriptive implementations that follow predefined workflows. At Anthropic, we categorize all these variations as <strong>agentic systems</strong>, but draw an important architectural distinction between <strong>workflows</strong> and <strong>agents</strong>:</p>",
        "kind": "text",
        "cn": "<p>「智能体（Agent）」可以有多种定义。有些客户把智能体定义为能长期独立运行、使用各种工具完成复杂任务的完全自主系统；也有人用这个词描述遵循预定义工作流的、更具规定性的实现。在 Anthropic，我们将这些变体都归类为<strong>智能体式系统（agentic systems）</strong>，但在架构上区分<strong>工作流（workflows）</strong>与<strong>智能体（agents）</strong>：</p>"
      },
      {
        "en": "<ul><li><strong>Workflows</strong> are systems where LLMs and tools are orchestrated through predefined code paths.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>工作流</strong>是通过预定义代码路径编排 LLM 与工具的系统。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Agents</strong>, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>智能体</strong>则相反：LLM 动态主导自身流程与工具使用，掌控任务完成方式。</li></ul>"
      },
      {
        "en": "<p>Below, we will explore both types of agentic systems in detail. In Appendix 1 (&quot;Agents in Practice&quot;), we describe two domains where customers have found particular value in using these kinds of systems.</p>",
        "kind": "text",
        "cn": "<p>下文将详细探讨这两类智能体式系统。在附录 1（「实践中的智能体」）中，我们描述客户认为这类系统特别有价值的两个领域。</p>"
      },
      {
        "en": "<h2>When (and when not) to use agents</h2>",
        "kind": "heading",
        "cn": "<h2>何时（以及何时不）使用智能体</h2>"
      },
      {
        "en": "<p>When building applications with LLMs, we recommend finding the simplest solution possible, and only increasing complexity when needed. This might mean not building agentic systems at all. Agentic systems often trade latency and cost for better task performance, and you should consider when this tradeoff makes sense.</p>",
        "kind": "text",
        "cn": "<p>用 LLM 构建应用时，我们建议尽可能选择最简单的方案，只在必要时增加复杂度。这可能意味着根本不构建智能体式系统。智能体式系统常以延迟和成本换取更好的任务表现，你需要判断这种权衡是否值得。</p>"
      },
      {
        "en": "<p>When more complexity is warranted, workflows offer predictability and consistency for well-defined tasks, whereas agents are the better option when flexibility and model-driven decision-making are needed at scale. For many applications, however, optimizing single LLM calls with retrieval and in-context examples is usually enough.</p>",
        "kind": "text",
        "cn": "<p>当确实需要更高复杂度时，工作流为定义明确的任务提供可预测性与一致性；而当需要灵活性以及由模型驱动的大规模决策时，智能体更合适。对许多应用而言，优化单次 LLM 调用（结合检索与上下文示例）通常已足够。</p>"
      },
      {
        "en": "<h2>When and how to use frameworks</h2>",
        "kind": "heading",
        "cn": "<h2>何时以及如何使用框架</h2>"
      },
      {
        "en": "<p>There are many frameworks that make agentic systems easier to implement, including:</p>",
        "kind": "text",
        "cn": "<p>有许多框架能让智能体式系统更易实现，包括：</p>"
      },
      {
        "en": "<ul><li>The <a href=\"https://platform.claude.com/docs/en/agent-sdk/overview\" rel=\"noreferrer\" target=\"_blank\">Claude Agent SDK</a>;</li></ul>",
        "kind": "list",
        "cn": "<ul><li><a href=\"https://platform.claude.com/docs/en/agent-sdk/overview\" rel=\"noreferrer\" target=\"_blank\">Claude Agent SDK</a>；</li></ul>"
      },
      {
        "en": "<ul><li><a href=\"https://strandsagents.com/latest/\" rel=\"noreferrer\" target=\"_blank\">Strands Agents SDK by AWS</a>;</li></ul>",
        "kind": "list",
        "cn": "<ul><li><a href=\"https://strandsagents.com/latest/\" rel=\"noreferrer\" target=\"_blank\">AWS 的 Strands Agents SDK</a>；</li></ul>"
      },
      {
        "en": "<ul><li><a href=\"https://rivet.ironcladapp.com/\" rel=\"noreferrer\" target=\"_blank\">Rivet</a>, a drag and drop GUI LLM workflow builder; and</li></ul>",
        "kind": "list",
        "cn": "<ul><li><a href=\"https://rivet.ironcladapp.com/\" rel=\"noreferrer\" target=\"_blank\">Rivet</a>——拖放式 GUI LLM 工作流构建器；以及</li></ul>"
      },
      {
        "en": "<ul><li><a href=\"https://www.vellum.ai/\" rel=\"noreferrer\" target=\"_blank\">Vellum</a>, another GUI tool for building and testing complex workflows.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><a href=\"https://www.vellum.ai/\" rel=\"noreferrer\" target=\"_blank\">Vellum</a>——另一款用于构建和测试复杂工作流的 GUI 工具。</li></ul>"
      },
      {
        "en": "<p>These frameworks make it easy to get started by simplifying standard low-level tasks like calling LLMs, defining and parsing tools, and chaining calls together. However, they often create extra layers of abstraction that can obscure the underlying prompts and responses, making them harder to debug. They can also make it tempting to add complexity when a simpler setup would suffice.</p>",
        "kind": "text",
        "cn": "<p>这些框架通过简化调用 LLM、定义与解析工具、串联调用等底层任务，降低了上手门槛。但它们也常增加抽象层，掩盖底层提示词与响应，使调试更难；也可能诱使你增加复杂度，而更简单方案本已够用。</p>"
      },
      {
        "en": "<p>We suggest that developers start by using LLM APIs directly: many patterns can be implemented in a few lines of code. If you do use a framework, ensure you understand the underlying code. Incorrect assumptions about what's under the hood are a common source of customer error.</p>",
        "kind": "text",
        "cn": "<p>我们建议开发者先直接使用 LLM API：许多模式几行代码即可实现。若使用框架，务必理解底层代码；对「黑盒」的错误假设是客户出错的常见来源。</p>"
      },
      {
        "en": "<p>See our <a href=\"https://platform.claude.com/cookbook/patterns-agents-basic-workflows\" rel=\"noreferrer\" target=\"_blank\">cookbook</a> for some sample implementations.</p>",
        "kind": "text",
        "cn": "<p>示例实现可参见我们的<a href=\"https://platform.claude.com/cookbook/patterns-agents-basic-workflows\" rel=\"noreferrer\" target=\"_blank\">cookbook</a>。</p>"
      },
      {
        "en": "<h2>Building blocks, workflows, and agents</h2>",
        "kind": "heading",
        "cn": "<h2>构建块、工作流与智能体</h2>"
      },
      {
        "en": "<p>In this section, we'll explore the common patterns for agentic systems we've seen in production. We'll start with our foundational building block—the augmented LLM—and progressively increase complexity, from simple compositional workflows to autonomous agents.</p>",
        "kind": "text",
        "cn": "<p>本节探讨我们在生产环境中常见的智能体式系统模式。我们从基础构建块——增强型 LLM——出发，逐步增加复杂度，从简单组合式工作流到自主智能体。</p>"
      },
      {
        "en": "<h3>Building block: The augmented LLM</h3>",
        "kind": "heading",
        "cn": "<h3>构建块：增强型 LLM</h3>"
      },
      {
        "en": "<p>The basic building block of agentic systems is an LLM enhanced with augmentations such as retrieval, tools, and memory. Our current models can actively use these capabilities—generating their own search queries, selecting appropriate tools, and determining what information to retain.</p>",
        "kind": "text",
        "cn": "<p>智能体式系统的基础构建块，是配备检索、工具、记忆等增强能力的 LLM。当前模型能主动运用这些能力——生成自己的搜索查询、选择合适工具、决定保留哪些信息。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"The augmented LLM\" src=\"https://aka.doubaocdn.com/s/AuzZ1wZqUC\" loading=\"lazy\" /><figcaption>The augmented LLM</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>We recommend focusing on two key aspects of the implementation: tailoring these capabilities to your specific use case and ensuring they provide an easy, well-documented interface for your LLM. While there are many ways to implement these augmentations, one approach is through our recently released <a href=\"https://www.anthropic.com/news/model-context-protocol\" rel=\"noreferrer\" target=\"_blank\">Model Context Protocol</a>, which allows developers to integrate with a growing ecosystem of third-party tools with a simple <a href=\"https://modelcontextprotocol.io/tutorials/building-a-client#building-mcp-clients\" rel=\"noreferrer\" target=\"_blank\">client implementation</a>.</p>",
        "kind": "text",
        "cn": "<p>实现时建议关注两点：按用例定制这些能力，并确保为 LLM 提供易用、文档完善的接口。实现方式很多，其一是我们近期发布的<a href=\"https://www.anthropic.com/news/model-context-protocol\" rel=\"noreferrer\" target=\"_blank\">Model Context Protocol</a>，开发者可通过简单的<a href=\"https://modelcontextprotocol.io/tutorials/building-a-client#building-mcp-clients\" rel=\"noreferrer\" target=\"_blank\">客户端实现</a>接入不断增长的第三方工具生态。</p>"
      },
      {
        "en": "<p>For the remainder of this post, we'll assume each LLM call has access to these augmented capabilities.</p>",
        "kind": "text",
        "cn": "<p>下文假定每次 LLM 调用都能使用这些增强能力。</p>"
      },
      {
        "en": "<h3>Workflow: Prompt chaining</h3>",
        "kind": "heading",
        "cn": "<h3>工作流：提示链（Prompt chaining）</h3>"
      },
      {
        "en": "<p>Prompt chaining decomposes a task into a sequence of steps, where each LLM call processes the output of the previous one. You can add programmatic checks (see &quot;gate&quot; in the diagram below) on any intermediate steps to ensure that the process is still on track.</p>",
        "kind": "text",
        "cn": "<p>提示链将任务分解为一系列步骤，每一步 LLM 调用处理上一步输出。可在中间步骤加入程序化检查（下图中的「gate」），确保流程仍在正轨。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"The prompt chaining workflow\" src=\"https://aka.doubaocdn.com/s/auLg1wZqUC\" loading=\"lazy\" /><figcaption>The prompt chaining workflow</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p><strong>When to use this workflow:</strong> This workflow is ideal for situations where the task can be easily and cleanly decomposed into fixed subtasks. The main goal is to trade off latency for higher accuracy, by making each LLM call an easier task.</p>",
        "kind": "text",
        "cn": "<p><strong>何时使用此工作流：</strong>任务能清晰、干净地拆成固定子任务时最理想。主要目标是以更高延迟换取更高准确率——让每次 LLM 调用面对更简单的子任务。</p>"
      },
      {
        "en": "<p><strong>Examples where prompt chaining is useful:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>提示链适用示例：</strong></p>"
      },
      {
        "en": "<ul><li>Generating Marketing copy, then translating it into a different language.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>生成营销文案，再翻译成另一种语言。</li></ul>"
      },
      {
        "en": "<ul><li>Writing an outline of a document, checking that the outline meets certain criteria, then writing the document based on the outline.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>写文档大纲，检查大纲是否满足特定标准，再按大纲写正文。</li></ul>"
      },
      {
        "en": "<h3>Workflow: Routing</h3>",
        "kind": "heading",
        "cn": "<h3>工作流：路由（Routing）</h3>"
      },
      {
        "en": "<p>Routing classifies an input and directs it to a specialized followup task. This workflow allows for separation of concerns, and building more specialized prompts. Without this workflow, optimizing for one kind of input can hurt performance on other inputs.</p>",
        "kind": "text",
        "cn": "<p>路由对输入分类，并导向专门的后继任务。这有助于关注点分离，构建更专门的提示词。若无此工作流，针对某一类输入的优化可能损害其他输入的表现。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"The routing workflow\" src=\"https://aka.doubaocdn.com/s/hBhK1wZqUC\" loading=\"lazy\" /><figcaption>The routing workflow</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p><strong>When to use this workflow:</strong> Routing works well for complex tasks where there are distinct categories that are better handled separately, and where classification can be handled accurately, either by an LLM or a more traditional classification model/algorithm.</p>",
        "kind": "text",
        "cn": "<p><strong>何时使用此工作流：</strong>任务复杂且存在宜分开处理的不同类别，且分类可由 LLM 或传统分类模型/算法准确完成时，路由效果很好。</p>"
      },
      {
        "en": "<p><strong>Examples where routing is useful:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>路由适用示例：</strong></p>"
      },
      {
        "en": "<ul><li>Directing different types of customer service queries (general questions, refund requests, technical support) into different downstream processes, prompts, and tools.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>将不同类型的客服查询（一般问题、退款、技术支持）导向不同下游流程、提示词与工具。</li></ul>"
      },
      {
        "en": "<ul><li>Routing easy/common questions to smaller, cost-efficient models like Claude Haiku 4.5 and hard/unusual questions to more capable models like Claude Sonnet 4.5 to optimize for best performance.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>将简单/常见问题路由到 Claude Haiku 4.5 等更小、更省成本的模型，将困难/罕见问题路由到 Claude Sonnet 4.5 等更强模型，以优化性价比。</li></ul>"
      },
      {
        "en": "<h3>Workflow: Parallelization</h3>",
        "kind": "heading",
        "cn": "<h3>工作流：并行化（Parallelization）</h3>"
      },
      {
        "en": "<p>LLMs can sometimes work simultaneously on a task and have their outputs aggregated programmatically. This workflow, parallelization, manifests in two key variations:</p>",
        "kind": "text",
        "cn": "<p>LLM 有时可同时处理任务，再程序化聚合输出。这种并行化工作流有两种主要变体：</p>"
      },
      {
        "en": "<ul><li><strong>Sectioning</strong>: Breaking a task into independent subtasks run in parallel.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>分段（Sectioning）</strong>：将任务拆成可并行运行的独立子任务。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Voting:</strong> Running the same task multiple times to get diverse outputs.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>投票（Voting）</strong>：对同一任务多次运行以获得多样化输出。</li></ul>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"The parallelization workflow\" src=\"https://aka.doubaocdn.com/s/ApIv1wZqUC\" loading=\"lazy\" /><figcaption>The parallelization workflow</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p><strong>When to use this workflow:</strong> Parallelization is effective when the divided subtasks can be parallelized for speed, or when multiple perspectives or attempts are needed for higher confidence results. For complex tasks with multiple considerations, LLMs generally perform better when each consideration is handled by a separate LLM call, allowing focused attention on each specific aspect.</p>",
        "kind": "text",
        "cn": "<p><strong>何时使用此工作流：</strong>子任务可并行以提速，或需要多视角/多次尝试以提高置信度时，并行化有效。对有多重考量的复杂任务，LLM 通常在每个考量由单独 LLM 调用处理时表现更好，从而更专注。</p>"
      },
      {
        "en": "<p><strong>Examples where parallelization is useful:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>并行化适用示例：</strong></p>"
      },
      {
        "en": "<ul><li><strong>Sectioning</strong>:</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>分段：</strong></li></ul>"
      },
      {
        "en": "<ul><li>Implementing guardrails where one model instance processes user queries while another screens them for inappropriate content or requests. This tends to perform better than having the same LLM call handle both guardrails and the core response.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>实现护栏：一个模型实例处理用户查询，另一个筛查不当内容或请求——往往优于同一 LLM 调用同时处理护栏与核心响应。</li></ul>"
      },
      {
        "en": "<ul><li>Automating evals for evaluating LLM performance, where each LLM call evaluates a different aspect of the model's performance on a given prompt.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>自动化评估 LLM 表现：每个 LLM 调用评估模型在给定提示上某一方面的表现。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Voting</strong>:</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>投票：</strong></li></ul>"
      },
      {
        "en": "<ul><li>Reviewing a piece of code for vulnerabilities, where several different prompts review and flag the code if they find a problem.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>审查代码漏洞：多个不同提示审查代码，发现问题则标记。</li></ul>"
      },
      {
        "en": "<ul><li>Evaluating whether a given piece of content is inappropriate, with multiple prompts evaluating different aspects or requiring different vote thresholds to balance false positives and negatives.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>评估内容是否不当：多个提示评估不同方面，或采用不同投票阈值以平衡误报与漏报。</li></ul>"
      },
      {
        "en": "<h3>Workflow: Orchestrator-workers</h3>",
        "kind": "heading",
        "cn": "<h3>工作流：编排者-工作者（Orchestrator-workers）</h3>"
      },
      {
        "en": "<p>In the orchestrator-workers workflow, a central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results.</p>",
        "kind": "text",
        "cn": "<p>在编排者-工作者工作流中，中心 LLM 动态拆分任务、委派给工作者 LLM，并综合其结果。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"The orchestrator-workers workflow\" src=\"https://aka.doubaocdn.com/s/6UnG1wZqUC\" loading=\"lazy\" /><figcaption>The orchestrator-workers workflow</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p><strong>When to use this workflow:</strong> This workflow is well-suited for complex tasks where you can't predict the subtasks needed (in coding, for example, the number of files that need to be changed and the nature of the change in each file likely depend on the task). Whereas it's topographically similar, the key difference from parallelization is its flexibility—subtasks aren't pre-defined, but determined by the orchestrator based on the specific input.</p>",
        "kind": "text",
        "cn": "<p><strong>何时使用此工作流：</strong>适合无法预知所需子任务的复杂任务（例如编码时，需修改的文件数量与每文件改动性质往往取决于任务）。拓扑上与并行化相似，但关键区别在于灵活性——子任务不是预定义的，而是由编排者根据具体输入决定。</p>"
      },
      {
        "en": "<p><strong>Example where orchestrator-workers is useful:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>编排者-工作者适用示例：</strong></p>"
      },
      {
        "en": "<ul><li>Coding products that make complex changes to multiple files each time.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>每次需对多个文件做复杂改动的编码产品。</li></ul>"
      },
      {
        "en": "<ul><li>Search tasks that involve gathering and analyzing information from multiple sources for possible relevant information.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>需从多来源收集并分析信息以寻找相关内容的搜索任务。</li></ul>"
      },
      {
        "en": "<h3>Workflow: Evaluator-optimizer</h3>",
        "kind": "heading",
        "cn": "<h3>工作流：评估器-优化器（Evaluator-optimizer）</h3>"
      },
      {
        "en": "<p>In the evaluator-optimizer workflow, one LLM call generates a response while another provides evaluation and feedback in a loop.</p>",
        "kind": "text",
        "cn": "<p>在评估器-优化器工作流中，一次 LLM 调用生成响应，另一次提供评估与反馈，形成循环。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"The evaluator-optimizer workflow\" src=\"https://aka.doubaocdn.com/s/GasW1wZqUC\" loading=\"lazy\" /><figcaption>The evaluator-optimizer workflow</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p><strong>When to use this workflow:</strong> This workflow is particularly effective when we have clear evaluation criteria, and when iterative refinement provides measurable value. The two signs of good fit are, first, that LLM responses can be demonstrably improved when a human articulates their feedback; and second, that the LLM can provide such feedback. This is analogous to the iterative writing process a human writer might go through when producing a polished document.</p>",
        "kind": "text",
        "cn": "<p><strong>何时使用此工作流：</strong>有明确评估标准，且迭代打磨能带来可衡量价值时尤其有效。两个适配图景：其一，人类明确反馈能 demonstrably 改进 LLM 响应；其二，LLM 能提供此类反馈。类似人类写作者打磨成稿的迭代过程。</p>"
      },
      {
        "en": "<p><strong>Examples where evaluator-optimizer is useful:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>评估器-优化器适用示例：</strong></p>"
      },
      {
        "en": "<ul><li>Literary translation where there are nuances that the translator LLM might not capture initially, but where an evaluator LLM can provide useful critiques.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>文学翻译：译者 LLM 初译可能遗漏细微之处，评估器 LLM 可提供有用批评。</li></ul>"
      },
      {
        "en": "<ul><li>Complex search tasks that require multiple rounds of searching and analysis to gather comprehensive information, where the evaluator decides whether further searches are warranted.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>需多轮搜索与分析以收集全面信息的复杂搜索任务，由评估器判断是否继续搜索。</li></ul>"
      },
      {
        "en": "<h3>Agents</h3>",
        "kind": "heading",
        "cn": "<h3>智能体（Agents）</h3>"
      },
      {
        "en": "<p>Agents are emerging in production as LLMs mature in key capabilities—understanding complex inputs, engaging in reasoning and planning, using tools reliably, and recovering from errors. Agents begin their work with either a command from, or interactive discussion with, the human user. Once the task is clear, agents plan and operate independently, potentially returning to the human for further information or judgement. During execution, it's crucial for the agents to gain &quot;ground truth&quot; from the environment at each step (such as tool call results or code execution) to assess its progress. Agents can then pause for human feedback at checkpoints or when encountering blockers. The task often terminates upon completion, but it's also common to include stopping conditions (such as a maximum number of iterations) to maintain control.</p>",
        "kind": "text",
        "cn": "<p>随着 LLM 在理解复杂输入、推理与规划、可靠使用工具、从错误恢复等关键能力上成熟，智能体正进入生产。智能体通常从用户指令或交互讨论开始；任务明确后自主规划与执行，必要时向人类索取更多信息或判断。执行中，智能体需在每一步从环境获得「地面真相」（如工具调用结果或代码执行）以评估进展；可在检查点或遇阻时暂停征求人类反馈。任务常在完成时结束，也常设停止条件（如最大迭代次数）以维持控制。</p>"
      },
      {
        "en": "<p>Agents can handle sophisticated tasks, but their implementation is often straightforward. They are typically just LLMs using tools based on environmental feedback in a loop. It is therefore crucial to design toolsets and their documentation clearly and thoughtfully. We expand on best practices for tool development in Appendix 2 (&quot;Prompt Engineering your Tools&quot;).</p>",
        "kind": "text",
        "cn": "<p>智能体能处理复杂任务，但实现往往并不复杂——通常只是 LLM 在循环中根据环境反馈使用工具。因此清晰、周到地设计工具集及其文档至关重要。工具开发最佳实践见附录 2（「为工具做提示词工程」）。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Autonomous agent\" src=\"https://aka.doubaocdn.com/s/bqHt1wZqUC\" loading=\"lazy\" /><figcaption>Autonomous agent</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p><strong>When to use agents:</strong> Agents can be used for open-ended problems where it's difficult or impossible to predict the required number of steps, and where you can't hardcode a fixed path. The LLM will potentially operate for many turns, and you must have some level of trust in its decision-making. Agents' autonomy makes them ideal for scaling tasks in trusted environments.</p>",
        "kind": "text",
        "cn": "<p><strong>何时使用智能体：</strong>适用于开放式问题——难以或无法预知所需步骤数，且无法硬编码固定路径。LLM 可能运行多轮，你需要对其决策有一定信任。自主性使智能体适合在可信环境中扩展任务。</p>"
      },
      {
        "en": "<p>The autonomous nature of agents means higher costs, and the potential for compounding errors. We recommend extensive testing in sandboxed environments, along with the appropriate guardrails.</p>",
        "kind": "text",
        "cn": "<p>智能体的自主性也意味着更高成本与错误叠加风险。建议在沙箱环境中充分测试，并配合适当护栏。</p>"
      },
      {
        "en": "<p><strong>Examples where agents are useful:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>智能体适用示例：</strong></p>"
      },
      {
        "en": "<p>The following examples are from our own implementations:</p>",
        "kind": "text",
        "cn": "<p>以下示例来自我们自身实现：</p>"
      },
      {
        "en": "<ul><li>A coding Agent to resolve <a href=\"https://www.anthropic.com/research/swe-bench-sonnet\" rel=\"noreferrer\" target=\"_blank\">SWE-bench tasks</a>, which involve edits to many files based on a task description;</li></ul>",
        "kind": "list",
        "cn": "<ul><li>用于解决<a href=\"https://www.anthropic.com/research/swe-bench-sonnet\" rel=\"noreferrer\" target=\"_blank\">SWE-bench 任务</a>的编码智能体——根据任务描述编辑多个文件；</li></ul>"
      },
      {
        "en": "<ul><li>Our <a href=\"https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo\" rel=\"noreferrer\" target=\"_blank\">&quot;computer use&quot; reference implementation</a>, where Claude uses a computer to accomplish tasks.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>我们的<a href=\"https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo\" rel=\"noreferrer\" target=\"_blank\">「计算机使用」参考实现</a>——Claude 使用计算机完成任务。</li></ul>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"High-level flow of a coding agent\" src=\"https://aka.doubaocdn.com/s/XVBB1wZqUC\" loading=\"lazy\" /><figcaption>High-level flow of a coding agent</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Combining and customizing these patterns</h2>",
        "kind": "heading",
        "cn": "<h2>组合与定制这些模式</h2>"
      },
      {
        "en": "<p>These building blocks aren't prescriptive. They're common patterns that developers can shape and combine to fit different use cases. The key to success, as with any LLM features, is measuring performance and iterating on implementations. To repeat: you should consider adding complexity <em>only</em> when it demonstrably improves outcomes.</p>",
        "kind": "text",
        "cn": "<p>这些构建块并非教条，而是开发者可按用例塑造、组合的常见模式。与任何 LLM 功能一样，成功的关键是衡量表现并迭代实现。再次强调：仅当复杂度能 demonstrably 改善结果时，才应考虑增加复杂度。</p>"
      },
      {
        "en": "<h2>Summary</h2>",
        "kind": "heading",
        "cn": "<h2>总结</h2>"
      },
      {
        "en": "<p>Success in the LLM space isn't about building the most sophisticated system. It's about building the <em>right</em> system for your needs. Start with simple prompts, optimize them with comprehensive evaluation, and add multi-step agentic systems only when simpler solutions fall short.</p>",
        "kind": "text",
        "cn": "<p>在 LLM 领域取得成功，不在于构建最复杂的系统，而在于构建<strong>适合你需求</strong>的系统。从简单提示开始，用全面评估优化，仅当更简单方案不足时再增加多步智能体式系统。</p>"
      },
      {
        "en": "<p>When implementing agents, we try to follow three core principles:</p>",
        "kind": "text",
        "cn": "<p>实现智能体时，我们尽量遵循三条核心原则：</p>"
      },
      {
        "en": "<ol><li>Maintain <strong>simplicity</strong> in your agent's design.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>保持智能体设计的<strong>简洁</strong>。</li></ol>"
      },
      {
        "en": "<ol><li>Prioritize <strong>transparency</strong> by explicitly showing the agent's planning steps.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>通过明确展示智能体的规划步骤，优先<strong>透明</strong>。</li></ol>"
      },
      {
        "en": "<ol><li>Carefully craft your agent-computer interface (ACI) through thorough tool <strong>documentation and testing</strong>.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>通过完善的工具<strong>文档与测试</strong>，精心打造智能体-计算机接口（ACI）。</li></ol>"
      },
      {
        "en": "<p>Frameworks can help you get started quickly, but don't hesitate to reduce abstraction layers and build with basic components as you move to production. By following these principles, you can create agents that are not only powerful but also reliable, maintainable, and trusted by their users.</p>",
        "kind": "text",
        "cn": "<p>框架有助于快速起步，但进入生产时不要犹豫减少抽象层、用基础组件构建。遵循这些原则，可打造不仅强大，而且可靠、可维护、受用户信任的智能体。</p>"
      },
      {
        "en": "<h3>Acknowledgements</h3>",
        "kind": "heading",
        "cn": "<h3>致谢</h3>"
      },
      {
        "en": "<p>Written by Erik S. and Barry Zhang. This work draws upon our experiences building agents at Anthropic and the valuable insights shared by our customers, for which we're deeply grateful.</p>",
        "kind": "text",
        "cn": "<p>作者：Erik S. 与 Barry Zhang。本文基于我们在 Anthropic 构建智能体的经验以及客户分享的宝贵见解，深表感谢。</p>"
      },
      {
        "en": "<h2>Appendix 1: Agents in practice</h2>",
        "kind": "heading",
        "cn": "<h2>附录 1：实践中的智能体</h2>"
      }
    ]
  },
  {
    "id": 1,
    "title": "Equipping agents for the real world with Agent Skills",
    "date": "2025-10-16",
    "diff": "★★★",
    "time": "30分钟",
    "author": "Barry Zhang, Keith Lazuka, Mahesh Murag",
    "url": "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
    "vocab": [
      {
        "en": "agent skills",
        "cn": "智能体技能",
        "ex": "# Equipping agents for the real world with Agent Skills Published Oct 16, 2025 Claude is powerful, but real work require"
      },
      {
        "en": "context window",
        "cn": "上下文窗口",
        "ex": "Like a well-organized manual that starts with a table of contents, then specific chapters, and finally a detailed append"
      },
      {
        "en": "code execution",
        "cn": "代码执行",
        "ex": "Claude Code, for example, can accomplish complex tasks across domains using local code execution and filesystems."
      },
      {
        "en": "capability",
        "cn": "能力",
        "ex": "capability in practice"
      },
      {
        "en": "progressive disclosure",
        "cn": "渐进式披露",
        "ex": "This metadata is the first level of progressive disclosure : it provides just enough information for Claude to know when"
      },
      {
        "en": "executor",
        "cn": "执行器",
        "ex": "executor in practice"
      },
      {
        "en": "metadata",
        "cn": "元数据",
        "ex": "This file must start with YAML frontmatter that contains some required metadata: name and description ."
      },
      {
        "en": "attention",
        "cn": "注意力",
        "ex": "Pay special attention to the name and description of your skill."
      },
      {
        "en": "source",
        "cn": "来源材料",
        "ex": "When installing a skill from a less-trusted source, thoroughly audit it before use."
      },
      {
        "en": "description",
        "cn": "描述字段",
        "ex": "This file must start with YAML frontmatter that contains some required metadata: name and description ."
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>Claude Agent Skills 把专业知识、操作步骤和代码打包成可按需加载的技能，让 agent 在不撑爆上下文的情况下完成真实工作。阅读重点是 Skill 的结构、加载时机、代码执行方式，以及它带来的安全边界。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The anatomy of a skill</strong></div><p>拆开一个 Skill 的组成部分：说明文件、渐进加载内容，以及必要时可以执行的脚本。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Skills and the context window</strong></div><p>说明 Skill 如何分层进入上下文：先加载少量元数据，等任务触发时再补充具体说明。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>Skills and code execution</strong></div><p>说明 Skill 不只是说明文档，也可以带可执行代码，让 Claude 在需要时调用。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Developing and evaluating skills</strong></div><p>说明开发 Skill 的方式：从真实任务中的失败点出发，逐步补充说明、脚本和评估。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Security considerations when using Skills</strong></div><p>提醒 Skill 会带来新的安全风险，尤其是外部内容、代码执行和网络访问。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The future of Skills</strong></div><p>说明 Skills 正在成为跨平台能力格式，不只服务单个产品，也能迁移到更多 agent 场景。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>The anatomy of a skill <span class=\"en\">智能体技能</span></h4><p><strong>本文语境：</strong>To see Skills in action, let's walk through a real example: one of the skills that powers Claude's recently launched document editing abilities.</p><p><strong>英文表达：先把 agent skills 理解成本文里的功能角色，而不是只背成“智能体技能”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>智能体的价值来自可观察的环境反馈和清晰停止条件，不是把所有步骤都交给模型自由发挥。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Skills and the context window <span class=\"en\">上下文窗口</span></h4><p><strong>本文语境：</strong>The following diagram shows how the context window changes when a skill is triggered by a user's message.</p><p><strong>英文表达：先把 context window 理解成本文里的功能角色，而不是只背成“上下文窗口”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Skills and code execution <span class=\"en\">代码执行</span></h4><p><strong>本文语境：</strong>Skills can also include code for Claude to execute as tools at its discretion.</p><p><strong>英文表达：先把 code execution 理解成本文里的功能角色，而不是只背成“代码执行”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Developing and evaluating skills <span class=\"en\">智能体技能</span></h4><p><strong>本文语境：</strong>Then build skills incrementally to address these shortcomings. - Structure for scale: When the SKILL.md file becomes unwieldy, split its content into separate files and reference them.</p><p><strong>英文表达：先把 agent skills 理解成本文里的功能角色，而不是只背成“智能体技能”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Security considerations when using Skills <span class=\"en\">智能体技能</span></h4><p><strong>本文语境：</strong>Skills provide Claude with new capabilities through instructions and code.</p><p><strong>英文表达：先把 agent skills 理解成本文里的功能角色，而不是只背成“智能体技能”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>The future of Skills <span class=\"en\">智能体技能</span></h4><p><strong>本文语境：</strong>Agent Skills are supported today across Claude.ai, Claude Code, the Claude Agent SDK, and the Claude Developer Platform.</p><p><strong>英文表达：先把 agent skills 理解成本文里的功能角色，而不是只背成“智能体技能”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Equipping agents for the real world with Agent Skills》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 agent skills（智能体技能） / context window（上下文窗口） / code execution（代码执行） / capability（能力） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>Claude is powerful, but real work requires procedural knowledge and organizational context. Introducing Agent Skills, a new way to build specialized agents using files and folders.</p>",
        "kind": "text",
        "cn": "<p>克劳德很强大，但真正的工作需要程序知识和组织背景。推出代理技能，这是一种使用文件和文件夹构建专业代理的新方法。</p>"
      },
      {
        "en": "<p><em>Update: We've published <a href=\"https://agentskills.io/\" rel=\"noreferrer\" target=\"_blank\">Agent Skills</a> as an open standard for cross-platform portability. (December 18, 2025)</em></p>",
        "kind": "text",
        "cn": "<p><em>更新：我们已发布<a href=\"https://agentskills.io/\" rel=\"noreferrer\" target=\"_blank\">代理技能</a>作为跨平台可移植性的开放标准。 （2025 年 12 月 18 日）</em></p>"
      },
      {
        "en": "<p>As model capabilities improve, we can now build general-purpose agents that interact with full-fledged computing environments. <a href=\"https://claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a>, for example, can accomplish complex tasks across domains using local code execution and filesystems. But as these agents become more powerful, we need more composable, scalable, and portable ways to equip them with domain-specific expertise.</p>",
        "kind": "text",
        "cn": "<p>随着模型功能的改进，我们现在可以构建与成熟的计算环境交互的通用代理。例如，<a href=\"https://claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> 可以使用本地代码执行和文件系统完成跨域的复杂任务。但随着这些代理变得更加强大，我们需要更多可组合、可扩展和可移植的方法来为它们配备特定领域的专业知识。</p>"
      },
      {
        "en": "<p>This led us to create <a href=\"https://www.anthropic.com/news/skills\" rel=\"noreferrer\" target=\"_blank\">**Agent Skills**</a>: organized folders of instructions, scripts, and resources that agents can discover and load dynamically to perform better at specific tasks. Skills extend Claude's capabilities by packaging your expertise into composable resources for Claude, transforming general-purpose agents into specialized agents that fit your needs.</p>",
        "kind": "text",
        "cn": "<p>这促使我们创建<a href=\"https://www.anthropic.com/news/skills\" rel=\"noreferrer\" target=\"_blank\">**代理技能**</a>：有组织的指令、脚本和资源文件夹，代理可以动态发现和加载这些文件夹，以更好地执行特定任务。技能通过将您的专业知识打包成 Claude 的可组合资源，将通用代理转变为适合您需求的专业代理，从而扩展了 Claude 的能力。</p>"
      },
      {
        "en": "<p>Building a skill for an agent is like putting together an onboarding guide for a new hire. Instead of building fragmented, custom-designed agents for each use case, anyone can now specialize their agents with composable capabilities by capturing and sharing their procedural knowledge. In this article, we explain what Skills are, show how they work, and share best practices for building your own.</p>",
        "kind": "text",
        "cn": "<p>培养客服人员的技能就像为新员工编写入职指南一样。现在，任何人都可以通过捕获和共享其程序知识来专门化具有可组合功能的代理，而不是为每个用例构建分散的、定制设计的代理。在本文中，我们将解释什么是技能、展示它们的工作原理，并分享构建您自己的技能的最佳实践。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"A skill is a directory containing a SKILL.md file that contains organized folders of instructions, scripts, and resources that give agents additional capabilities.\" src=\"https://aka.doubaocdn.com/s/Cq501wZqTM\" loading=\"lazy\" /><figcaption>A skill is a directory containing a SKILL.md file that contains organized folders of instructions, scripts, and resources that give agents additional capabilities.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>The anatomy of a skill</h2>",
        "kind": "heading",
        "cn": "<h2>技能剖析</h2>"
      },
      {
        "en": "<p>To see Skills in action, let's walk through a real example: one of the skills that powers <a href=\"https://www.anthropic.com/news/create-files\" rel=\"noreferrer\" target=\"_blank\">Claude's recently launched document editing abilities</a>. Claude already knows a lot about understanding PDFs, but is limited in its ability to manipulate them directly (e.g. to fill out a form). This <a href=\"https://github.com/anthropics/skills/tree/main/document-skills/pdf\" rel=\"noreferrer\" target=\"_blank\">PDF skill</a> lets us give Claude these new abilities.</p>",
        "kind": "text",
        "cn": "<p>要了解技能的实际应用，让我们来看一个真实的示例：<a href=\"https://www.anthropic.com/news/create-files\" rel=\"noreferrer\" target=\"_blank\">Claude 最近推出的文档编辑功能</a>的一项技能。 Claude 已经了解很多关于理解 PDF 的知识，但直接操作 PDF 的能力有限（例如填写表格）。这项 <a href=\"https://github.com/anthropics/skills/tree/main/document-skills/pdf\" rel=\"noreferrer\" target=\"_blank\">PDF 技能</a>让我们赋予 Claude 这些新能力。</p>"
      },
      {
        "en": "<p>At its simplest, a skill is a directory that contains a <code>SKILL.md file</code>. This file must start with YAML frontmatter that contains some required metadata: <code>name</code> and <code>description</code>. At startup, the agent pre-loads the <code>name</code> and <code>description</code> of every installed skill into its system prompt.</p>",
        "kind": "text",
        "cn": "<p>最简单的说，技能是一个包含<code>SKILL.md 文件</code>的目录。该文件必须以 YAML frontmatter 开头，其中包含一些必需的元数据：<code>name</code> 和 <code>description</code>。启动时，代理会将每个已安装技能的<code>名称</code>和<code>描述</code>预加载到其系统提示符中。</p>"
      },
      {
        "en": "<p>This metadata is the <strong>first level</strong> of <em>progressive disclosure</em>: it provides just enough information for Claude to know when each skill should be used without loading all of it into context. The actual body of this file is the <strong>second level</strong> of detail. If Claude thinks the skill is relevant to the current task, it will load the skill by reading its full <code>SKILL.md</code> into context.</p>",
        "kind": "text",
        "cn": "<p>此元数据是渐进式披露的<strong>第一级</strong>：它为 Claude 提供了足够的信息，让他知道何时应该使用每种技能，而无需将所有技能加载到上下文中。该文件的实际正文是<strong>第二级</strong>详细信息。如果 Claude 认为该技能与当前任务相关，它将通过将完整的 <code>SKILL.md</code> 读取到上下文中来加载该技能。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"A SKILL.md file must begin with YAML Frontmatter that contains a file name and description, which is loaded into its system prompt at startup.\" src=\"https://aka.doubaocdn.com/s/5J2p1wZqTM\" loading=\"lazy\" /><figcaption>A SKILL.md file must begin with YAML Frontmatter that contains a file name and description, which is loaded into its system prompt at startup.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>As skills grow in complexity, they may contain too much context to fit into a single <code>SKILL.md</code>, or context that's relevant only in specific scenarios. In these cases, skills can bundle additional files within the skill directory and reference them by name from <code>SKILL.md</code>. These additional linked files are the <strong>third level</strong> (and beyond) of detail, which Claude can choose to navigate and discover only as needed.</p>",
        "kind": "text",
        "cn": "<p>随着技能变得越来越复杂，它们可能包含太多上下文而无法放入单个 <code>SKILL.md</code> 中，或者上下文仅与特定场景相关。在这些情况下，技能可以将其他文件捆绑在技能目录中，并通过 <code>SKILL.md</code> 中的名称引用它们。这些额外的链接文件是<strong>第三级</strong>（及更高级别）的详细信息，克劳德可以选择仅根据需要进行导航和发现。</p>"
      },
      {
        "en": "<p>In the PDF skill shown below, the <code>SKILL.md</code> refers to two additional files (<code>reference.md</code> and <code>forms.md</code>) that the skill author chooses to bundle alongside the core <code>SKILL.md</code>. By moving the form-filling instructions to a separate file (<code>forms.md</code>), the skill author is able to keep the core of the skill lean, trusting that Claude will read <code>forms.md</code> only when filling out a form.</p>",
        "kind": "text",
        "cn": "<p>在下面显示的 PDF 技能中，<code>SKILL.md</code> 指的是技能作者选择与核心 <code>SKILL.md</code> 捆绑在一起的两个附加文件（<code>reference.md</code> 和 <code>forms.md</code>）。通过将表单填写说明移至单独的文件 (<code>forms.md</code>)，技能作者能够保持技能的核心精益，相信 Claude 仅在填写表单时才会读取 <code>forms.md</code>。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"You can incorporate more context (via additional files) into your skill that can then be triggered by Claude based on the system prompt.\" src=\"https://aka.doubaocdn.com/s/Ef7P1wZqTM\" loading=\"lazy\" /><figcaption>You can incorporate more context (via additional files) into your skill that can then be triggered by Claude based on the system prompt.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Progressive disclosure is the core design principle that makes Agent Skills flexible and scalable. Like a well-organized manual that starts with a table of contents, then specific chapters, and finally a detailed appendix, skills let Claude load information only as needed:</p>",
        "kind": "text",
        "cn": "<p>渐进式披露是使代理技能灵活且可扩展的核心设计原则。就像一本组织良好的手册一样，首先是目录，然后是具体章节，最后是详细的附录，技能让 Claude 仅根据需要加载信息：</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Progressive disclosure levels\" src=\"https://aka.doubaocdn.com/s/etRN1wZqTM\" loading=\"lazy\" /><figcaption>Progressive disclosure levels</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Agents with a filesystem and code execution tools don't need to read the entirety of a skill into their context window when working on a particular task. This means that the amount of context that can be bundled into a skill is effectively unbounded.</p>",
        "kind": "text",
        "cn": "<p>具有文件系统和代码执行工具的代理在处理特定任务时不需要将全部技能读取到上下文窗口中。这意味着可以捆绑到技能中的上下文数量实际上是无限的。</p>"
      },
      {
        "en": "<h3>Skills and the context window</h3>",
        "kind": "heading",
        "cn": "<h3>技能和上下文窗口</h3>"
      },
      {
        "en": "<p>The following diagram shows how the context window changes when a skill is triggered by a user's message.</p>",
        "kind": "text",
        "cn": "<p>下图显示了当用户消息触发技能时上下文窗口如何变化。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Skills are triggered in the context window via your system prompt.\" src=\"https://aka.doubaocdn.com/s/4cBr1wZqTM\" loading=\"lazy\" /><figcaption>Skills are triggered in the context window via your system prompt.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>The sequence of operations shown:</p>",
        "kind": "text",
        "cn": "<p>显示的操作顺序：</p>"
      },
      {
        "en": "<ol><li>To start, the context window has the core system prompt and the metadata for each of the installed skills, along with the user's initial message;</li></ol>",
        "kind": "list",
        "cn": "<ol><li>首先，上下文窗口包含核心系统提示和每个已安装技能的元数据，以及用户的初始消息；</li></ol>"
      },
      {
        "en": "<ol><li>Claude triggers the PDF skill by invoking a Bash tool to read the contents of <code>pdf/SKILL.md</code>;</li></ol>",
        "kind": "list",
        "cn": "<ol><li>Claude通过调用Bash工具读取<code>pdf/SKILL.md</code>内容来触发PDF技能；</li></ol>"
      },
      {
        "en": "<ol><li>Claude chooses to read the <code>forms.md</code> file bundled with the skill;</li></ol>",
        "kind": "list",
        "cn": "<ol><li>Claude 选择读取与技能捆绑的 <code>forms.md</code> 文件；</li></ol>"
      },
      {
        "en": "<ol><li>Finally, Claude proceeds with the user's task now that it has loaded relevant instructions from the PDF skill.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>最后，Claude 会继续执行用户的任务，因为它已从 PDF 技能加载了相关说明。</li></ol>"
      },
      {
        "en": "<h3>Skills and code execution</h3>",
        "kind": "heading",
        "cn": "<h3>技能和代码执行</h3>"
      },
      {
        "en": "<p>Skills can also include code for Claude to execute as tools at its discretion.</p>",
        "kind": "text",
        "cn": "<p>技能还可以包括 Claude 自行决定作为工具执行的代码。</p>"
      },
      {
        "en": "<p>Large language models excel at many tasks, but certain operations are better suited for traditional code execution. For example, sorting a list via token generation is far more expensive than simply running a sorting algorithm. Beyond efficiency concerns, many applications require the deterministic reliability that only code can provide.</p>",
        "kind": "text",
        "cn": "<p>大型语言模型在许多任务上表现出色，但某些操作更适合传统代码执行。例如，通过令牌生成对列表进行排序比简单地运行排序算法要昂贵得多。除了效率问题之外，许多应用程序还需要只有代码才能提供的确定性可靠性。</p>"
      },
      {
        "en": "<p>In our example, the PDF skill includes a pre-written Python script that reads a PDF and extracts all form fields. Claude can run this script without loading either the script or the PDF into context. And because code is deterministic, this workflow is consistent and repeatable.</p>",
        "kind": "text",
        "cn": "<p>在我们的示例中，PDF 技能包括一个预先编写的 Python 脚本，用于读取 PDF 并提取所有表单字段。 Claude 可以运行此脚本，而无需将脚本或 PDF 加载到上下文中。而且由于代码是确定性的，因此该工作流程是一致且可重复的。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Skills can also include code for Claude to execute as tools at its discretion based on the nature of the task.\" src=\"https://aka.doubaocdn.com/s/CrcD1wZqTM\" loading=\"lazy\" /><figcaption>Skills can also include code for Claude to execute as tools at its discretion based on the nature of the task.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Developing and evaluating skills</h2>",
        "kind": "heading",
        "cn": "<h2>开发和评估技能</h2>"
      },
      {
        "en": "<p>Here are some helpful guidelines for getting started with authoring and testing skills:</p>",
        "kind": "text",
        "cn": "<p>以下是一些有关编写和测试技能入门的有用指南：</p>"
      },
      {
        "en": "<ul><li><strong>Start with evaluation:</strong> Identify specific gaps in your agents' capabilities by running them on representative tasks and observing where they struggle or require additional context. Then build skills incrementally to address these shortcomings.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>从评估开始</strong>：通过在代表性任务上运行代理并观察他们在哪些方面遇到困难或需要额外的背景信息来确定代理能力中的具体差距。然后逐步培养技能来解决这些缺点。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Structure for scale:</strong> When the <code>SKILL.md</code> file becomes unwieldy, split its content into separate files and reference them. If certain contexts are mutually exclusive or rarely used together, keeping the paths separate will reduce the token usage. Finally, code can serve as both executable tools and as documentation. It should be clear whether Claude should run scripts directly or read them into context as reference.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>规模结构：</strong>当<code>SKILL.md</code>文件变得难以使用时，将其内容拆分为单独的文件并引用它们。如果某些上下文是互斥的或很少一起使用，则保持路径分离将减少令牌的使用。最后，代码既可以充当可执行工具，也可以充当文档。应该清楚克劳德是否应该直接运行脚本或将它们读入上下文作为参考。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Think from Claude's perspective:</strong> Monitor how Claude uses your skill in real scenarios and iterate based on observations: watch for unexpected trajectories or overreliance on certain contexts. Pay special attention to the <code>name</code> and <code>description</code> of your skill. Claude will use these when deciding whether to trigger the skill in response to its current task.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>从 Claude 的角度思考</strong>：监控 Claude 如何在真实场景中使用您的技能，并根据观察进行迭代：注意意外的轨迹或对某些上下文的过度依赖。请特别注意您技能的<code>名称</code>和<code>描述</code>。克劳德在决定是否触发技能以响应当前任务时会使用这些。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Iterate with Claude:</strong> As you work on a task with Claude, ask Claude to capture its successful approaches and common mistakes into reusable context and code within a skill. If it goes off track when using a skill to complete a task, ask it to self-reflect on what went wrong. This process will help you discover what context Claude actually needs, instead of trying to anticipate it upfront.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>与 Claude 一起迭代：</strong>当您与 Claude 一起完成一项任务时，请 Claude 将其成功方法和常见错误捕获到技能中的可重用上下文和代码中。如果它在使用技能完成任务时偏离了轨道，请它自我反思哪里出了问题。此过程将帮助您发现 Claude 实际需要的上下文，而不是试图预先预测它。</li></ul>"
      },
      {
        "en": "<h3>Security considerations when using Skills</h3>",
        "kind": "heading",
        "cn": "<h3>使用技能时的安全注意事项</h3>"
      },
      {
        "en": "<p>Skills provide Claude with new capabilities through instructions and code. While this makes them powerful, it also means that malicious skills may introduce vulnerabilities in the environment where they're used or direct Claude to exfiltrate data and take unintended actions.</p>",
        "kind": "text",
        "cn": "<p>技能通过指令和代码为克劳德提供新的能力。虽然这使它们变得强大，但也意味着恶意技能可能会在使用它们的环境中引入漏洞，或者引导 Claude 窃取数据并采取意外的操作。</p>"
      },
      {
        "en": "<p>We recommend installing skills only from trusted sources. When installing a skill from a less-trusted source, thoroughly audit it before use. Start by reading the contents of the files bundled in the skill to understand what it does, paying particular attention to code dependencies and bundled resources like images or scripts. Similarly, pay attention to instructions or code within the skill that instruct Claude to connect to potentially untrusted external network sources.</p>",
        "kind": "text",
        "cn": "<p>我们建议仅从可信来源安装技能。从不太受信任的来源安装技能时，请在使用前对其进行彻底审核。首先阅读技能中捆绑的文件内容以了解其用途，特别注意代码依赖性和捆绑资源（例如图像或脚本）。同样，请注意技能中指示 Claude 连接到潜在不受信任的外部网络源的指令或代码。</p>"
      },
      {
        "en": "<h2>The future of Skills</h2>",
        "kind": "heading",
        "cn": "<h2>技能的未来</h2>"
      },
      {
        "en": "<p>Agent Skills are <a href=\"https://www.anthropic.com/news/skills\" rel=\"noreferrer\" target=\"_blank\">supported today</a> across <a href=\"http://claude.ai/redirect/website.v1.5946a4f9-79a9-42fa-bd15-f9594f1f85d4\" rel=\"noreferrer\" target=\"_blank\">Claude.ai</a>, Claude Code, the Claude Agent SDK, and the Claude Developer Platform.</p>",
        "kind": "text",
        "cn": "<p><a href=\"https://www.anthropic.com/news/skills\" rel=\"noreferrer\" target=\"_blank\">今天</a>支持<a href=\"http://claude.ai/redirect/website.v1.5946a4f9-79a9-42fa-bd15-f9594f1f85d4\" rel=\"noreferrer\" 的代理技能target=\"_blank\">Claude.ai</a>、Claude 代码、Claude Agent SDK 和 Claude 开发者平台。</p>"
      },
      {
        "en": "<p>In the coming weeks, we'll continue to add features that support the full lifecycle of creating, editing, discovering, sharing, and using Skills. We're especially excited about the opportunity for Skills to help organizations and individuals share their context and workflows with Claude. We'll also explore how Skills can complement <a href=\"https://modelcontextprotocol.io/\" rel=\"noreferrer\" target=\"_blank\">Model Context Protocol</a> (MCP) servers by teaching agents more complex workflows that involve external tools and software.</p>",
        "kind": "text",
        "cn": "<p>在接下来的几周内，我们将继续添加支持创建、编辑、发现、共享和使用技能的整个生命周期的功能。我们对技能有机会帮助组织和个人与 Claude 分享他们的背景和工作流程感到特别兴奋。我们还将探讨 Skills 如何通过向代理教授涉及外部工具和软件的更复杂的工作流程来补充<a href=\"https://modelcontextprotocol.io/\" rel=\"noreferrer\" target=\"_blank\">模型上下文协议</a> (MCP) 服务器。</p>"
      },
      {
        "en": "<p>Looking further ahead, we hope to enable agents to create, edit, and evaluate Skills on their own, letting them codify their own patterns of behavior into reusable capabilities.</p>",
        "kind": "text",
        "cn": "<p>展望未来，我们希望让代理能够自行创建、编辑和评估技能，让他们将自己的行为模式编码为可重用的功能。</p>"
      },
      {
        "en": "<p>Skills are a simple concept with a correspondingly simple format. This simplicity makes it easier for organizations, developers, and end users to build customized agents and give them new capabilities.</p>",
        "kind": "text",
        "cn": "<p>技能是一个简单的概念，其格式也相应简单。这种简单性使组织、开发人员和最终用户可以更轻松地构建定制代理并为其提供新功能。</p>"
      },
      {
        "en": "<p>We're excited to see what people build with Skills. Get started today by checking out our Skills <a href=\"https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview\" rel=\"noreferrer\" target=\"_blank\">docs</a> and <a href=\"https://github.com/anthropics/claude-cookbooks/tree/main/skills\" rel=\"noreferrer\" target=\"_blank\">cookbook</a>.</p>",
        "kind": "text",
        "cn": "<p>我们很高兴看到人们利用技能构建了什么。今天就开始查看我们的技能<a href=\"https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview\" rel=\"noreferrer\" target=\"_blank\">文档</a>和<a href=\"https://github.com/anthropics/claude-cookbooks/tree/main/skills\" rel=\"noreferrer\" target=\"_blank\">食谱</a>。</p>"
      },
      {
        "en": "<h2>Acknowledgements</h2>",
        "kind": "heading",
        "cn": "<h2>致谢</h2>"
      },
      {
        "en": "<p>Written by Barry Zhang, Keith Lazuka, and Mahesh Murag, who all really like folders. Special thanks to the many others across Anthropic who championed, supported, and built Skills.</p>",
        "kind": "text",
        "cn": "<p>由 Barry 张、Keith Lazuka 和 Mahesh Murag 撰写，他们都非常喜欢文件夹。特别感谢 Anthropic 中支持、支持和培养技能的许多其他人。</p>"
      }
    ]
  },
  {
    "id": 2,
    "title": "Effective context engineering for AI agents",
    "date": "2025-09-29",
    "diff": "★★★",
    "time": "30分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
    "vocab": [
      {
        "en": "context engineering",
        "cn": "上下文工程",
        "ex": "# Effective context engineering for AI agents Published Sep 29, 2025 Context is a critical but finite resource for AI ag"
      },
      {
        "en": "prompt engineering",
        "cn": "提示词工程",
        "ex": "After a few years of prompt engineering being the focus of attention in applied AI, a new term has come to prominence: c"
      },
      {
        "en": "compaction",
        "cn": "压缩",
        "ex": "To enable agents to work effectively across extended time horizons, we've developed a few techniques that address these "
      },
      {
        "en": "retrieval",
        "cn": "检索",
        "ex": "These factors create a performance gradient rather than a hard cliff: models remain highly capable at longer contexts bu"
      },
      {
        "en": "context rot",
        "cn": "上下文腐化",
        "ex": "Studies on needle-in-a-haystackstyle benchmarking have uncovered the concept of context rot: as the number of tokens in "
      },
      {
        "en": "state",
        "cn": "状态",
        "ex": "Effectively wrangling LLMs often requires thinking in context — in other words: considering the holistic state available"
      },
      {
        "en": "testing",
        "cn": "测试",
        "ex": "Regardless of how you decide to structure your system prompt, you should be striving for the minimal set of information "
      },
      {
        "en": "autonomy",
        "cn": "自主性",
        "ex": "As the underlying models become more capable, the level of autonomy of agents can scale: smarter models allow agents to "
      },
      {
        "en": "right tools",
        "cn": "合适工具",
        "ex": "Not only that, but opinionated and thoughtful engineering is required to ensure that an LLM has the right tools and heur"
      },
      {
        "en": "memory",
        "cn": "记忆机制",
        "ex": "Like humans, who have limited working memory capacity, LLMs have an \"attention budget\" that they draw on when parsing la"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>长任务 agent 不能只靠 prompt engineering。这里的重点是 context engineering：管理模型完成任务时能看到的全部信息，包括系统指令、工具、外部资料、历史记录和当前任务状态。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Context engineering vs. prompt engineering</strong></div><p>区分 prompt engineering 和 context engineering：前者改提示词，后者管理模型完成任务时能看到的全部信息。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Why context engineering is important to building capable agents</strong></div><p>解释为什么长任务更需要 context engineering：模型会因为上下文过多、过旧或无关而失焦。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The anatomy of effective context</strong></div><p>拆解有效上下文由哪些部分组成，包括指令、工具、外部资料、历史记录和当前任务状态。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Context retrieval and agentic search</strong></div><p>说明检索和 agentic search 如何帮助模型主动找到当前任务需要的信息。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Context engineering for long-horizon tasks</strong></div><p>Context engineering for long-horizon tasks：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>Context engineering vs. prompt engineering <span class=\"en\">上下文工程</span></h4><p><strong>本文语境：</strong>At Anthropic, we view context engineering as the natural progression of prompt engineering.</p><p><strong>英文表达：先把 context engineering 理解成本文里的功能角色，而不是只背成“上下文工程”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>上下文不是越多越好，关键是把当前任务真正需要的信息放进模型能稳定使用的位置。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Why context engineering is important to building capable agents <span class=\"en\">上下文工程</span></h4><p><strong>本文语境：</strong>Despite their speed and ability to manage larger and larger volumes of data, we've observed that LLMs, like humans, lose focus or experience confusion at a certain point.</p><p><strong>英文表达：先把 context engineering 理解成本文里的功能角色，而不是只背成“上下文工程”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>上下文不是越多越好，关键是把当前任务真正需要的信息放进模型能稳定使用的位置。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>The anatomy of effective context <span class=\"en\">上下文工程</span></h4><p><strong>本文语境：</strong>Given that LLMs are constrained by a finite attention budget, good context engineering means finding the smallest possible set of high-signal tokens that maximize the likelihood of some desired outcome.</p><p><strong>英文表达：先把 context engineering 理解成本文里的功能角色，而不是只背成“上下文工程”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>上下文不是越多越好，关键是把当前任务真正需要的信息放进模型能稳定使用的位置。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Context retrieval and agentic search <span class=\"en\">检索</span></h4><p><strong>本文语境：</strong>In Building effective AI agents, we highlighted the differences between LLM-based workflows and agents.</p><p><strong>英文表达：先把 retrieval 理解成本文里的功能角色，而不是只背成“检索”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Context engineering for long-horizon tasks <span class=\"en\">上下文工程</span></h4><p><strong>本文语境：</strong>Long-horizon tasks require agents to maintain coherence, context, and goal-directed behavior over sequences of actions where the token count exceeds the LLM's context window.</p><p><strong>英文表达：先把 context engineering 理解成本文里的功能角色，而不是只背成“上下文工程”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>上下文不是越多越好，关键是把当前任务真正需要的信息放进模型能稳定使用的位置。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Effective context engineering for AI agents》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 context engineering（上下文工程） / prompt engineering（提示词工程） / compaction（压缩） / retrieval（检索） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>Context is a critical but finite resource for AI agents. In this post, we explore strategies for effectively curating and managing the context that powers them.</p>",
        "kind": "text",
        "cn": "<p>上下文对于人工智能代理来说是至关重要但有限的资源。在这篇文章中，我们探讨了有效策划和管理为其提供动力的环境的策略。</p>"
      },
      {
        "en": "<p>After a few years of prompt engineering being the focus of attention in applied AI, a new term has come to prominence: <strong>context engineering</strong>. Building with language models is becoming less about finding the right words and phrases for your prompts, and more about answering the broader question of &quot;what configuration of context is most likely to generate our model's desired behavior?&quot;</p>",
        "kind": "text",
        "cn": "<p>在即时工程成为应用人工智能领域关注的焦点几年之后，一个新术语开始受到关注：<strong>上下文工程</strong>。使用语言模型构建不再是为提示找到正确的单词和短语，而是更多地回答更广泛的问题：“哪种上下文配置最有可能生成我们模型所需的行为？”</p>"
      },
      {
        "en": "<p><strong>Context</strong> refers to the set of tokens included when sampling from a large-language model (LLM). The <strong>engineering</strong> problem at hand is optimizing the utility of those tokens against the inherent constraints of LLMs in order to consistently achieve a desired outcome. Effectively wrangling LLMs often requires <em>thinking in context</em> — in other words: considering the holistic state available to the LLM at any given time and what potential behaviors that state might yield.</p>",
        "kind": "text",
        "cn": "<p><strong>上下文</strong>是指从大语言模型 (LLM) 采样时包含的标记集。当前的<strong>工程</strong>问题是根据法学硕士的固有限制优化这些代币的效用，以便始终如一地实现预期结果。有效地争论法学硕士通常需要<em>结合上下文思考</em> - 换句话说：考虑法学硕士在任何给定时间可用的整体状态以及该状态可能产生的潜在行为。</p>"
      },
      {
        "en": "<p>In this post, we'll explore the emerging art of context engineering and offer a refined mental model for building steerable, effective agents.</p>",
        "kind": "text",
        "cn": "<p>在这篇文章中，我们将探索情境工程的新兴艺术，并提供用于构建可操纵、有效代理的精炼心智模型。</p>"
      },
      {
        "en": "<h2>Context engineering vs. prompt engineering</h2>",
        "kind": "heading",
        "cn": "<h2>上下文工程与提示工程</h2>"
      },
      {
        "en": "<p>At Anthropic, we view context engineering as the natural progression of prompt engineering. Prompt engineering refers to methods for writing and organizing LLM instructions for optimal outcomes (see <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview\" rel=\"noreferrer\" target=\"_blank\">our docs</a> for an overview and useful prompt engineering strategies). <strong>Context engineering</strong> refers to the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference, including all the other information that may land there outside of the prompts.</p>",
        "kind": "text",
        "cn": "<p>在 Anthropic，我们将情境工程视为即时工程的自然发展。即时工程是指编写和组织 LLM 指令以获得最佳结果的方法（请参阅<a href=\"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview\" rel=\"noreferrer\" target=\"_blank\">我们的文档</a>了解概述和有用的即时工程策略）。 <strong>上下文工程</strong>是指在LLM推理期间策划和维护最佳标记（信息）集的策略集，包括提示之外可能出现的所有其他信息。</p>"
      },
      {
        "en": "<p>In the early days of engineering with LLMs, prompting was the biggest component of AI engineering work, as the majority of use cases outside of everyday chat interactions required prompts optimized for one-shot classification or text generation tasks. As the term implies, the primary focus of prompt engineering is how to write effective prompts, particularly system prompts. However, as we move towards engineering more capable agents that operate over multiple turns of inference and longer time horizons, we need strategies for managing the entire context state (system instructions, tools, <a href=\"https://modelcontextprotocol.io/docs/getting-started/intro\" rel=\"noreferrer\" target=\"_blank\">Model Context Protocol</a> (MCP), external data, message history, etc).</p>",
        "kind": "text",
        "cn": "<p>在法学硕士工程的早期，提示是人工智能工程工作的最大组成部分，因为日常聊天交互之外的大多数用例都需要针对一次性分类或文本生成任务进行优化的提示。顾名思义，提示工程的主要关注点是如何编写有效的提示，特别是系统提示。然而，随着我们朝着设计在多轮推理和更长的时间范围内运行的能力更强的代理的方向发展，我们需要管理整个上下文状态的策略（系统指令、工具、<a href=\"https://modelcontextprotocol.io/docs/getting-started/intro\" rel=\"noreferrer\" target=\"_blank\">模型上下文协议</a>（MCP）、外部数据、消息历史记录等）。</p>"
      },
      {
        "en": "<p>An agent running in a loop generates more and more data that <em>could</em> be relevant for the next turn of inference, and this information must be cyclically refined. Context engineering is the <a href=\"https://x.com/karpathy/status/1937902205765607626?lang=en\" rel=\"noreferrer\" target=\"_blank\">art and science</a> of curating what will go into the limited context window from that constantly evolving universe of possible information.</p>",
        "kind": "text",
        "cn": "<p>在循环中运行的代理会生成越来越多的数据，这些数据可能与下一轮推理相关，并且必须循环地完善这些信息。情境工程是一门<a href=\"https://x.com/karpathy/status/1937902205765607626?lang=en\" rel=\"noreferrer\" target=\"_blank\">艺术和科学</a>，它从不断发展的可能信息宇宙中策划进入有限情境窗口的内容。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"In contrast to the discrete task of writing a prompt, context engineering is iterative and the curation phase happens each time we decide what to pass to the model.\" src=\"https://aka.doubaocdn.com/s/2FNq1wZqTN\" loading=\"lazy\" /><figcaption>In contrast to the discrete task of writing a prompt, context engineering is iterative and the curation phase happens each time we decide what to pass to the model.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Why context engineering is important to building capable agents</h2>",
        "kind": "heading",
        "cn": "<h2>为什么上下文工程对于构建有能力的代理很重要</h2>"
      },
      {
        "en": "<p>Despite their speed and ability to manage larger and larger volumes of data, we've observed that LLMs, like humans, lose focus or experience confusion at a certain point. Studies on needle-in-a-haystackstyle benchmarking have uncovered the concept of <a href=\"https://research.trychroma.com/context-rot\" rel=\"noreferrer\" target=\"_blank\">context rot</a>: as the number of tokens in the context window increases, the model's ability to accurately recall information from that context decreases.</p>",
        "kind": "text",
        "cn": "<p>尽管法学硕士管理越来越多的数据的速度和能力很高，但我们观察到，法学硕士和人类一样，在某个时刻会失去注意力或感到困惑。对 Needle-in-a-haystackstyle 基准测试的研究揭示了<a href=\"https://research.trychroma.com/context-rot\" rel=\"noreferrer\" target=\"_blank\">上下文腐烂</a>的概念：随着上下文窗口中标记数量的增加，模型从该上下文中准确回忆信息的能力会下降。</p>"
      },
      {
        "en": "<p>While some models exhibit more gentle degradation than others, this characteristic emerges across all models. Context, therefore, must be treated as a finite resource with diminishing marginal returns. Like humans, who have <a href=\"https://journals.sagepub.com/doi/abs/10.1177/0963721409359277\" rel=\"noreferrer\" target=\"_blank\">limited working memory capacity</a>, LLMs have an &quot;attention budget&quot; that they draw on when parsing large volumes of context. Every new token introduced depletes this budget by some amount, increasing the need to carefully curate the tokens available to the LLM.</p>",
        "kind": "text",
        "cn": "<p>虽然某些模型比其他模型表现出更温和的退化，但这一特征在所有模型中都出现。因此，背景必须被视为边际收益递减的有限资源。就像人类的<a href=\"https://journals.sagepub.com/doi/abs/10.1177/0963721409359277\" rel=\"noreferrer\" target=\"_blank\">工作记忆容量有限</a>一样，法学硕士在解析大量上下文时也有一个“注意力预算”。引入的每个新代币都会在一定程度上消耗该预算，从而增加了仔细策划可供 LLM 使用的代币的需要。</p>"
      },
      {
        "en": "<p>This attention scarcity stems from architectural constraints of LLMs. LLMs are based on the <a href=\"https://arxiv.org/abs/1706.03762\" rel=\"noreferrer\" target=\"_blank\">transformer architecture</a>, which enables every token to <a href=\"https://huggingface.co/blog/Esmail-AGumaan/attention-is-all-you-need\" rel=\"noreferrer\" target=\"_blank\">attend to every other token</a> across the entire context. This results in n² pairwise relationships for n tokens.</p>",
        "kind": "text",
        "cn": "<p>这种注意力稀缺源于法学硕士的架构限制。 LLM 基于<a href=\"https://arxiv.org/abs/1706.03762\" rel=\"noreferrer\" target=\"_blank\">transformer 架构</a>，它使每个令牌能够<a href=\"https://huggingface.co/blog/Esmail-AGumaan/attention-is-all-you-need\" rel=\"noreferrer\" target=\"_blank\">参与到其他令牌中整个上下文中的令牌</a>。这会导致 n 个标记的 n² 成对关系。</p>"
      },
      {
        "en": "<p>As its context length increases, a model's ability to capture these pairwise relationships gets stretched thin, creating a natural tension between context size and attention focus. Additionally, models develop their attention patterns from training data distributions where shorter sequences are typically more common than longer ones. This means models have less experience with, and fewer specialized parameters for, context-wide dependencies.</p>",
        "kind": "text",
        "cn": "<p>随着上下文长度的增加，模型捕捉这些成对关系的能力会被削弱，从而在上下文大小和注意力焦点之间产生自然的张力。此外，模型根据训练数据分布发展其注意力模式，其中较短的序列通常比较长的序列更常见。这意味着模型对上下文范围依赖关系的经验较少，并且专用参数也较少。</p>"
      },
      {
        "en": "<p>Techniques like <a href=\"https://arxiv.org/pdf/2306.15595\" rel=\"noreferrer\" target=\"_blank\">position encoding interpolation</a> allow models to handle longer sequences by adapting them to the originally trained smaller context, though with some degradation in token position understanding. These factors create a performance gradient rather than a hard cliff: models remain highly capable at longer contexts but may show reduced precision for information retrieval and long-range reasoning compared to their performance on shorter contexts.</p>",
        "kind": "text",
        "cn": "<p>像<a href=\"https://arxiv.org/pdf/2306.15595\" rel=\"noreferrer\" target=\"_blank\">位置编码插值</a>这样的技术允许模型通过使模型适应最初训练的较小上下文来处理更长的序列，尽管在标记位置理解方面会有所退化。这些因素造成了性能梯度而不是悬崖：模型在较长上下文中仍然具有很强的能力，但与较短上下文中的性能相比，信息检索和远程推理的精度可能会降低。</p>"
      },
      {
        "en": "<p>These realities mean that thoughtful context engineering is essential for building capable agents.</p>",
        "kind": "text",
        "cn": "<p>这些现实意味着深思熟虑的上下文工程对于构建有能力的代理至关重要。</p>"
      },
      {
        "en": "<h2>The anatomy of effective context</h2>",
        "kind": "heading",
        "cn": "<h2>有效情境剖析</h2>"
      },
      {
        "en": "<p>Given that LLMs are constrained by a finite attention budget, <em>good</em> context engineering means finding the <em>smallest</em> <em>possible</em> set of high-signal tokens that maximize the likelihood of some desired outcome. Implementing this practice is much easier said than done, but in the following section, we outline what this guiding principle means in practice across the different components of context.</p>",
        "kind": "text",
        "cn": "<p>鉴于法学硕士受到有限注意力预算的限制，<em>良好</em>的上下文工程意味着找到<em>最小</em><em>可能</em>一组高信号标记，从而最大限度地提高某些期望结果的可能性。实施这一实践说起来容易做起来难，但在下一节中，我们概述了这一指导原则在不同上下文组成部分的实践中的含义。</p>"
      },
      {
        "en": "<p><strong>System prompts</strong> should be extremely clear and use simple, direct language that presents ideas at the <em>right altitude</em> for the agent. The right altitude is the Goldilocks zone between two common failure modes. At one extreme, we see engineers hardcoding complex, brittle logic in their prompts to elicit exact agentic behavior. This approach creates fragility and increases maintenance complexity over time. At the other extreme, engineers sometimes provide vague, high-level guidance that fails to give the LLM concrete signals for desired outputs or falsely assumes shared context. The optimal altitude strikes a balance: specific enough to guide behavior effectively, yet flexible enough to provide the model with strong heuristics to guide behavior.</p>",
        "kind": "text",
        "cn": "<p><strong>系统提示</strong>应该非常清晰，并使用简单、直接的语言，在<em>正确的高度</em>为座席提供想法。正确的高度是两种常见故障模式之间的金发姑娘区。在一种极端情况下，我们看到工程师在提示中硬编码复杂、脆弱的逻辑，以引发精确的代理行为。随着时间的推移，这种方法会造成脆弱性并增加维护复杂性。在另一个极端，工程师有时会提供模糊的高级指导，无法为法学硕士提供所需输出的具体信号，或者错误地假设共享上下文。最佳高度达到了平衡：足够具体以有效指导行为，但又足够灵活以向模型提供强大的启发式方法来指导行为。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"At one end of the spectrum, we see brittle if-else hardcoded prompts, and at the other end we see prompts that are overly general or falsely assume shared context.\" src=\"https://aka.doubaocdn.com/s/E7Ll1wZqTN\" loading=\"lazy\" /><figcaption>At one end of the spectrum, we see brittle if-else hardcoded prompts, and at the other end we see prompts that are overly general or falsely assume shared context.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>We recommend organizing prompts into distinct sections (like <code>&lt;background_information&gt;</code>, <code>&lt;instructions&gt;</code>, <code>## Tool guidance</code>, <code>## Output description</code>, etc) and using techniques like XML tagging or Markdown headers to delineate these sections, although the exact formatting of prompts is likely becoming less important as models become more capable.</p>",
        "kind": "text",
        "cn": "<p>我们建议将提示组织到不同的部分（例如 <code><background_information></code>、<code><instructions></code>、<code>## 工具指南</code>、<code>## 输出描述</code>等），并使用 XML 标记或 Markdown 标头等技术来描述这些部分，尽管随着模型变得更加强大，提示的精确格式可能变得不那么重要。</p>"
      },
      {
        "en": "<p>Regardless of how you decide to structure your system prompt, you should be striving for the minimal set of information that fully outlines your expected behavior. (Note that minimal does not necessarily mean short; you still need to give the agent sufficient information up front to ensure it adheres to the desired behavior.) It's best to start by testing a minimal prompt with the best model available to see how it performs on your task, and then add clear instructions and examples to improve performance based on failure modes found during initial testing.</p>",
        "kind": "text",
        "cn": "<p>无论您决定如何构建系统提示，您都应该努力获得完整概述您的预期行为的最少信息集。 （请注意，最小并不一定意味着短；您仍然需要预先向代理提供足够的信息，以确保其遵循所需的行为。）最好首先使用可用的最佳模型测试最小提示，以了解它在您的任务中的执行情况，然后添加明确的说明和示例，以根据初始测试期间发现的故障模式来提高性能。</p>"
      },
      {
        "en": "<p><strong>Tools</strong> allow agents to operate with their environment and pull in new, additional context as they work. Because tools define the contract between agents and their information/action space, it's extremely important that tools promote efficiency, both by returning information that is token efficient and by encouraging efficient agent behaviors.</p>",
        "kind": "text",
        "cn": "<p><strong>工具</strong>允许代理在其环境中进行操作，并在工作时引入新的附加上下文。由于工具定义了代理及其信息/操作空间之间的契约，因此工具通过返回令牌有效的信息和鼓励有效的代理行为来提高效率非常重要。</p>"
      },
      {
        "en": "<p>In <a href=\"https://www.anthropic.com/engineering/writing-tools-for-agents\" rel=\"noreferrer\" target=\"_blank\">Writing tools for AI agents – with AI agents</a>, we discussed building tools that are well understood by LLMs and have minimal overlap in functionality. Similar to the functions of a well-designed codebase, tools should be self-contained, robust to error, and extremely clear with respect to their intended use. Input parameters should similarly be descriptive, unambiguous, and play to the inherent strengths of the model.</p>",
        "kind": "text",
        "cn": "<p>在<a href=\"https://www.anthropic.com/engineering/writing-tools-for-agents\" rel=\"noreferrer\" target=\"_blank\">为 AI 代理编写工具 - 使用 AI 代理</a>中，我们讨论了构建法学硕士可以很好理解且功能重叠最小的工具。与精心设计的代码库的功能类似，工具应该是独立的，对错误具有鲁棒性，并且对其预期用途非常清晰。输入参数同样应该是描述性的、明确的，并发挥模型的固有优势。</p>"
      },
      {
        "en": "<p>One of the most common failure modes we see is bloated tool sets that cover too much functionality or lead to ambiguous decision points about which tool to use. If a human engineer can't definitively say which tool should be used in a given situation, an AI agent can't be expected to do better. As we'll discuss later, curating a minimal viable set of tools for the agent can also lead to more reliable maintenance and pruning of context over long interactions.</p>",
        "kind": "text",
        "cn": "<p>我们看到的最常见的故障模式之一是臃肿的工具集，它们涵盖了太多的功能或导致关于使用哪个工具的决策点不明确。如果人类工程师不能明确地说出在给定情况下应该使用哪种工具，那么就不能指望人工智能代理能做得更好。正如我们稍后将讨论的，为代理策划一套最小可行的工具还可以在长时间交互中实现更可靠的上下文维护和修剪。</p>"
      },
      {
        "en": "<p>Providing examples, otherwise known as few-shot prompting, is a well known best practice that we continue to strongly advise. However, teams will often stuff a laundry list of edge cases into a prompt in an attempt to articulate every possible rule the LLM should follow for a particular task. We do not recommend this. Instead, we recommend working to curate a set of diverse, canonical examples that effectively portray the expected behavior of the agent. For an LLM, examples are the &quot;pictures&quot; worth a thousand words.</p>",
        "kind": "text",
        "cn": "<p>提供示例（也称为少量提示）是众所周知的最佳实践，我们将继续强烈建议这样做。然而，团队通常会在提示中填入一系列边缘情况，试图阐明法学硕士在执行特定任务时应遵循的每条可能的规则。我们不推荐这样做。相反，我们建议努力策划一组多样化的规范示例，以有效地描绘代理的预期行为。对于法学硕士来说，例子就是价值一千字的“图片”。</p>"
      },
      {
        "en": "<p>Our overall guidance across the different components of context (system prompts, tools, examples, message history, etc) is to be thoughtful and keep your context informative, yet tight. Now let's dive into dynamically retrieving context at runtime.</p>",
        "kind": "text",
        "cn": "<p>我们对上下文不同组成部分（系统提示、工具、示例、消息历史记录等）的总体指导是深思熟虑，让您的上下文内容丰富但又紧凑。现在让我们深入研究在运行时动态检索上下文。</p>"
      },
      {
        "en": "<h2>Context retrieval and agentic search</h2>",
        "kind": "heading",
        "cn": "<h2>上下文检索和代理搜索</h2>"
      },
      {
        "en": "<p>In <a href=\"https://www.anthropic.com/research/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">Building effective AI agents</a>, we highlighted the differences between LLM-based workflows and agents. Since we wrote that post, we've gravitated towards a <a href=\"https://simonwillison.net/2025/Sep/18/agents/\" rel=\"noreferrer\" target=\"_blank\">simple definition</a> for agents: LLMs autonomously using tools in a loop.</p>",
        "kind": "text",
        "cn": "<p>在<a href=\"https://www.anthropic.com/research/building- effective-agents\" rel=\"noreferrer\" target=\"_blank\">构建有效的 AI 代理</a>中，我们强调了基于 LLM 的工作流程和代理之间的差异。自从我们写那篇文章以来，我们倾向于对代理进行<a href=\"https://simonwillison.net/2025/Sep/18/agents/\" rel=\"noreferrer\" target=\"_blank\">简单定义</a>：LLM 在循环中自主使用工具。</p>"
      },
      {
        "en": "<p>Working alongside our customers, we've seen the field converging on this simple paradigm. As the underlying models become more capable, the level of autonomy of agents can scale: smarter models allow agents to independently navigate nuanced problem spaces and recover from errors.</p>",
        "kind": "text",
        "cn": "<p>与我们的客户一起工作，我们看到该领域正在向这个简单的范式靠拢。随着底层模型变得更加强大，智能体的自主水平可以扩展：更智能的模型允许智能体独立地导航微妙的问题空间并从错误中恢复。</p>"
      },
      {
        "en": "<p>We're now seeing a shift in how engineers think about designing context for agents. Today, many AI-native applications employ some form of embedding-based pre-inference time retrieval to surface important context for the agent to reason over. As the field transitions to more agentic approaches, we increasingly see teams augmenting these retrieval systems with &quot;just in time&quot; context strategies.</p>",
        "kind": "text",
        "cn": "<p>我们现在看到工程师在为代理设计环境时的思考方式发生了转变。如今，许多人工智能原生应用程序采用某种形式的基于嵌入的预推理时间检索来呈现重要的上下文，供代理进行推理。随着该领域转向更加代理的方法，我们越来越多地看到团队通过“及时”上下文策略来增强这些检索系统。</p>"
      },
      {
        "en": "<p>Rather than pre-processing all relevant data up front, agents built with the &quot;just in time&quot; approach maintain lightweight identifiers (file paths, stored queries, web links, etc.) and use these references to dynamically load data into context at runtime using tools. Anthropic's agentic coding solution <a href=\"https://www.anthropic.com/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> uses this approach to perform complex data analysis over large databases. The model can write targeted queries, store results, and leverage Bash commands like head and tail to analyze large volumes of data without ever loading the full data objects into context. This approach mirrors human cognition: we generally don't memorize entire corpuses of information, but rather introduce external organization and indexing systems like file systems, inboxes, and bookmarks to retrieve relevant information on demand.</p>",
        "kind": "text",
        "cn": "<p>使用“及时”方法构建的代理不是预先预处理所有相关数据，而是维护轻量级标识符（文件路径、存储的查询、Web 链接等），并使用这些引用在运行时使用工具将数据动态加载到上下文中。 Anthropic 的代理编码解决方案 <a href=\"https://www.anthropic.com/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> 使用这种方法对大型数据库执行复杂的数据分析。该模型可以编写有针对性的查询、存储结果，并利用 head 和 tail 等 Bash 命令来分析大量数据，而无需将完整的数据对象加载到上下文中。这种方法反映了人类的认知：我们通常不会记住整个信息库，而是引入外部组织和索引系统（例如文件系统、收件箱和书签）来按需检索相关信息。</p>"
      },
      {
        "en": "<p>Beyond storage efficiency, the metadata of these references provides a mechanism to efficiently refine behavior, whether explicitly provided or intuitive. To an agent operating in a file system, the presence of a file named <code>test_utils.py</code> in a <code>tests</code> folder implies a different purpose than a file with the same name located in <code>src/core_logic/</code> Folder hierarchies, naming conventions, and timestamps all provide important signals that help both humans and agents understand how and when to utilize information.</p>",
        "kind": "text",
        "cn": "<p>除了存储效率之外，这些引用的元数据还提供了一种有效细化行为的机制，无论是明确提供的还是直观的。对于在文件系统中运行的代理来说，<code>tests</code> 文件夹中名为 <code>test_utils.py</code> 的文件的存在与位于 <code>src/core_logic/</code> 中的同名文件意味着不同的用途。文件夹层次结构、命名约定和时间戳都提供了重要信号，帮助人类和代理了解如何以及何时使用信息。</p>"
      },
      {
        "en": "<p>Letting agents navigate and retrieve data autonomously also enables progressive disclosure—in other words, allows agents to incrementally discover relevant context through exploration. Each interaction yields context that informs the next decision: file sizes suggest complexity; naming conventions hint at purpose; timestamps can be a proxy for relevance. Agents can assemble understanding layer by layer, maintaining only what's necessary in working memory and leveraging note-taking strategies for additional persistence. This self-managed context window keeps the agent focused on relevant subsets rather than drowning in exhaustive but potentially irrelevant information.</p>",
        "kind": "text",
        "cn": "<p>让代理自主导航和检索数据还可以实现渐进式披露，换句话说，允许代理通过探索逐步发现相关上下文。每次交互都会产生上下文，为下一个决策提供信息：文件大小表明复杂性；命名约定暗示目的；时间戳可以作为相关性的代理。智能体可以逐层组合理解，仅保留工作记忆中必要的内容，并利用笔记策略来获得额外的持久性。这种自我管理的上下文窗口使代理专注于相关子集，而不是淹没在详尽但可能不相关的信息中。</p>"
      },
      {
        "en": "<p>Of course, there's a trade-off: runtime exploration is slower than retrieving pre-computed data. Not only that, but opinionated and thoughtful engineering is required to ensure that an LLM has the right tools and heuristics for effectively navigating its information landscape. Without proper guidance, an agent can waste context by misusing tools, chasing dead-ends, or failing to identify key information.</p>",
        "kind": "text",
        "cn": "<p>当然，这是一个权衡：运行时探索比检索预先计算的数据慢。不仅如此，还需要固执己见和深思熟虑的工程，以确保法学硕士拥有正确的工具和启发法来有效地驾驭其信息环境。如果没有适当的指导，代理可能会因滥用工具、陷入死胡同或无法识别关键信息而浪费上下文。</p>"
      },
      {
        "en": "<p>In certain settings, the most effective agents might employ a hybrid strategy, retrieving some data up front for speed, and pursuing further autonomous exploration at its discretion. The decision boundary for the 'right' level of autonomy depends on the task. Claude Code is an agent that employs this hybrid model: <a href=\"http://claude.md/\" rel=\"noreferrer\" target=\"_blank\">CLAUDE.md</a> files are naively dropped into context up front, while primitives like glob and grep allow it to navigate its environment and retrieve files just-in-time, effectively bypassing the issues of stale indexing and complex syntax trees.</p>",
        "kind": "text",
        "cn": "<p>在某些情况下，最有效的代理可能会采用混合策略，预先检索一些数据以提高速度，并自行决定进行进一步的自主探索。 “正确”自主级别的决策边界取决于任务。 Claude Code 是一个采用这种混合模型的代理：<a href=\"http://claude.md/\" rel=\"noreferrer\" target=\"_blank\">CLAUDE.md</a> 文件被天真地预先放入上下文中，而 glob 和 grep 等原语允许它导航其环境并及时检索文件，从而有效地绕过陈旧索引和复杂语法树的问题。</p>"
      },
      {
        "en": "<p>The hybrid strategy might be better suited for contexts with less dynamic content, such as legal or finance work. As model capabilities improve, agentic design will trend towards letting intelligent models act intelligently, with progressively less human curation. Given the rapid pace of progress in the field, &quot;do the simplest thing that works&quot; will likely remain our best advice for teams building agents on top of Claude.</p>",
        "kind": "text",
        "cn": "<p>混合策略可能更适合动态内容较少的环境，例如法律或财务工作。随着模型能力的提高，代理设计将趋向于让智能模型智能地行动，逐渐减少人工管理。鉴于该领域的快速进展，“做最简单、有效的事情”可能仍然是我们对 Claude 之上的团队建设代理的最佳建议。</p>"
      },
      {
        "en": "<h3>Context engineering for long-horizon tasks</h3>",
        "kind": "heading",
        "cn": "<h3>长期任务的上下文工程</h3>"
      },
      {
        "en": "<p>Long-horizon tasks require agents to maintain coherence, context, and goal-directed behavior over sequences of actions where the token count exceeds the LLM's context window. For tasks that span tens of minutes to multiple hours of continuous work, like large codebase migrations or comprehensive research projects, agents require specialized techniques to work around the context window size limitation.</p>",
        "kind": "text",
        "cn": "<p>长期任务要求代理在令牌计数超过 LLM 上下文窗口的操作序列中保持连贯性、上下文和目标导向的行为。对于需要持续工作数十分钟到多个小时的任务（例如大型代码库迁移或综合研究项目），代理需要专门的技术来解决上下文窗口大小限制。</p>"
      },
      {
        "en": "<p>Waiting for larger context windows might seem like an obvious tactic. But it's likely that for the foreseeable future, context windows of all sizes will be subject to context pollution and information relevance concerns—at least for situations where the strongest agent performance is desired. To enable agents to work effectively across extended time horizons, we've developed a few techniques that address these context pollution constraints directly: compaction, structured note-taking, and multi-agent architectures.</p>",
        "kind": "text",
        "cn": "<p>等待更大的上下文窗口似乎是一个显而易见的策略。但在可预见的未来，各种大小的上下文窗口很可能会受到上下文污染和信息相关性问题的影响——至少对于需要最强代理性能的情况来说是这样。为了使代理能够在较长的时间范围内有效工作，我们开发了一些直接解决这些上下文污染约束的技术：压缩、结构化笔记和多代理架构。</p>"
      },
      {
        "en": "<p><strong>Compaction</strong></p>",
        "kind": "text",
        "cn": "<p><strong>压缩</strong></p>"
      },
      {
        "en": "<p>Compaction is the practice of taking a conversation nearing the context window limit, summarizing its contents, and reinitiating a new context window with the summary. Compaction typically serves as the first lever in context engineering to drive better long-term coherence. At its core, compaction distills the contents of a context window in a high-fidelity manner.</p>",
        "kind": "text",
        "cn": "<p>压缩是在接近上下文窗口限制的情况下进行对话、总结其内容并使用摘要重新启动新的上下文窗口的做法。压缩通常是上下文工程中的第一个杠杆，以推动更好的长期一致性。压缩的核心是以高保真方式提取上下文窗口的内容。</p>"
      }
    ]
  },
  {
    "id": 3,
    "title": "How we built Claude Code auto mode: a safer way to skip permissions",
    "date": "2026-03-25",
    "diff": "★★☆",
    "time": "20分钟",
    "author": "Boris Cherny",
    "url": "https://www.anthropic.com/engineering/claude-code-auto-mode",
    "vocab": [
      {
        "en": "auto mode",
        "cn": "自动模式",
        "ex": "# How we built Claude Code auto mode: a safer way to skip permissions Published Mar 25, 2026 Claude Code users approve 9"
      },
      {
        "en": "classifier",
        "cn": "分类器",
        "ex": "At the output layer, the transcript classifier (running on Sonnet 4.6) evaluates each action against a set of decision c"
      },
      {
        "en": "data exfiltration",
        "cn": "数据外传",
        "ex": "This is blocked as data exfiltration since the user may consider the contents to be confidential and not appropriate to "
      },
      {
        "en": "permission",
        "cn": "权限",
        "ex": "# How we built Claude Code auto mode: a safer way to skip permissions Published Mar 25, 2026 Claude Code users approve 9"
      },
      {
        "en": "approval",
        "cn": "审批",
        "ex": "We built classifiers to automate some decisions, increasing safety while reducing approval fatigue."
      },
      {
        "en": "tool call",
        "cn": "工具调用",
        "ex": "tool call in practice"
      },
      {
        "en": "trust boundary",
        "cn": "信任边界",
        "ex": "The template includes a step-by-step classification process, in which it checks the action against block rules, then all"
      },
      {
        "en": "shell",
        "cn": "命令行环境",
        "ex": "At the input layer, a server-side prompt-injection probe scans tool outputs (file reads, web fetches, shell output, exte"
      },
      {
        "en": "session",
        "cn": "会话",
        "ex": "The default is narrow, including installing packages already declared in the repo's manifest, standard credential flows,"
      },
      {
        "en": "prompt injection",
        "cn": "提示注入",
        "ex": "prompt injection in practice"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>Claude Code auto mode 试图减少频繁权限确认，同时避免把危险操作完全放开。阅读重点是哪些操作可以自动执行，哪些操作仍要拦截，以及这种设计如何在效率和安全之间取平衡。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>How it works</strong></div><p>解释 auto mode 的整体运行流程：用户发起操作后，系统如何判断是否可以跳过权限确认。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Threat model</strong></div><p>列出 auto mode 需要防住的风险，尤其是恶意提示、数据外传和越权执行。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>How permission decisions work</strong></div><p>说明权限决策如何产生：哪些信号会影响系统放行、拦截或要求用户确认。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The classifier decision criteria</strong></div><p>拆解分类器的判断标准，说明它如何识别安全操作和高风险操作。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The fixed template</strong></div><p>说明固定模板负责约束分类器输入，让权限判断保持一致，减少随意解释。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>The customizable slots</strong></div><p>说明可定制字段如何把产品场景、工具信息和用户设置补进权限判断里。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Results</strong></div><p>展示 auto mode 的实际效果，重点看它减少了多少确认步骤，以及安全拦截是否仍然有效。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>How it works <span class=\"en\">自动模式</span></h4><p><strong>本文语境：</strong>Auto mode uses two layers of defense: one for what Claude reads, one for what Claude does.</p><p><strong>英文表达：先把 auto mode 理解成本文里的功能角色，而不是只背成“自动模式”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Threat model <span class=\"en\">威胁模型</span></h4><p><strong>本文语境：</strong>An agent might take a dangerous action for four reasons: 1.</p><p><strong>英文表达：先把 threat model 理解成本文里的功能角色，而不是只背成“威胁模型”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>How permission decisions work <span class=\"en\">权限</span></h4><p><strong>本文语境：</strong>All of the examples above would reach the classifier, but most actions are allowed prior to that step by the standard Claude Code allow rules: Tier 1: Built-in safe-tool allowlist and user settings.</p><p><strong>英文表达：先把 permission 理解成本文里的功能角色，而不是只背成“权限”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>The classifier decision criteria <span class=\"en\">分类器</span></h4><p><strong>本文语境：</strong>The classifier's prompt is a fixed template we ship, with three customizable slots inserted into the middle.</p><p><strong>英文表达：先把 classifier 理解成本文里的功能角色，而不是只背成“分类器”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>把这一节当成一个设计判断来读：它适合什么场景，牺牲了什么，又提升了什么。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>The fixed template <span class=\"en\">分类器</span></h4><p><strong>本文语境：</strong>Evaluation rules tell the classifier how to look for dangerous commands .</p><p><strong>英文表达：先把 classifier 理解成本文里的功能角色，而不是只背成“分类器”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>The customizable slots <span class=\"en\">分类器</span></h4><p><strong>本文语境：</strong>Users can customize this in settings so the classifier can identify their trusted infrastructure (e.g.</p><p><strong>英文表达：先把 classifier 理解成本文里的功能角色，而不是只背成“分类器”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《How we built Claude Code auto mode: a safer way to skip permissions》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 auto mode（自动模式） / classifier（分类器） / data exfiltration（数据外传） / permission（权限） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>Claude Code users approve 93% of permission prompts. We built classifiers to automate some decisions, increasing safety while reducing approval fatigue. Here's what it catches, and what it misses.</p>",
        "kind": "text",
        "cn": "<p>Claude Code 用户批准了 93% 的权限提示。我们构建了分类器来自动化一些决策，提高安全性，同时减少审批疲劳。以下是它捕捉到的内容和错过的内容。</p>"
      },
      {
        "en": "<p>By default, Claude Code asks users for approval before running commands or modifying files. This keeps users safe, but it also means a lot of clicking &quot;approve.&quot; Over time that leads to approval fatigue, where people stop paying close attention to what they're approving.</p>",
        "kind": "text",
        "cn": "<p>默认情况下，Claude Code 在运行命令或修改文件之前会要求用户批准。这可以保证用户的安全，但也意味着需要多次点击\"批准\"。随着时间的推移，这会导致审批疲劳，人们不再密切关注他们正在审批的内容。</p>"
      },
      {
        "en": "<p>Users have two solutions for avoiding this fatigue: a built-in sandbox where tools are isolated to prevent dangerous actions, or the <code>--dangerously-skip-permissions</code> flag that disables all permission prompts and lets Claude act freely, which is unsafe in most situations. Figure 1 lays out the tradeoff space. Sandboxing is safe but high-maintenance: each new capability needs configuring, and anything requiring network or host access breaks isolation. Bypassing permissions is zero-maintenance but offers no protection. Manual prompts sit in the middle, and in practice users accept 93% of them anyway.</p>",
        "kind": "text",
        "cn": "<p>用户有两种解决方案可以避免这种疲劳：内置沙箱，其中工具被隔离以防止危险操作，或者 <code>--dangerously-skip-permissions</code> 标志禁用所有权限提示并让 Claude 自由行动，这在大多数情况下是不安全的。图 1 列出了权衡空间。沙盒安全但维护成本高：每项新功能都需要配置，并且任何需要网络或主机访问的内容都会破坏隔离。绕过权限是零维护，但不提供任何保护。手动提示位于中间，实际上用户无论如何都会接受其中的 93%。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Figure 1. The permission modes available in Claude Code, positioned by task autonomy and security. Dot colour indicates maintenance friction. Auto mode targets high autonomy at low maintenance cost; the dashed arrow shows security improvement over time as classifier coverage and model judgment get better.\" src=\"https://aka.doubaocdn.com/s/cIlC1wZqTO\" loading=\"lazy\" /><figcaption>Figure 1. The permission modes available in Claude Code, positioned by task autonomy and security. Dot colour indicates maintenance friction. Auto mode targets high autonomy at low maintenance cost; the dashed arrow shows security improvement over time as classifier coverage and model judgment get better.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>We keep an internal incident log focused on agentic misbehaviors. Past examples include deleting remote git branches from a misinterpreted instruction, uploading an engineer's GitHub auth token to an internal compute cluster, and attempting migrations against a production database. Each of these was the result of the model being overeager, taking initiative in a way the user didn't intend. We documented this pattern in the <a href=\"https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf\" rel=\"noreferrer\" target=\"_blank\">Claude Opus 4.6 system card</a> (§6.2.1 and §6.2.3.3).</p>",
        "kind": "text",
        "cn": "<p>我们保留一份内部事件日志，重点关注代理不当行为。过去的示例包括从错误解释的指令中删除远程 git 分支、将工程师的 GitHub 身份验证令牌上传到内部计算集群以及尝试针对生产数据库进行迁移。所有这些都是模型过于渴望的结果，以用户不希望的方式采取主动。我们在 <a href=\"https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf\" rel=\"noreferrer\" target=\"_blank\">Claude Opus 4.6 系统卡</a>（§6.2.1 和 §6.2.3.3）中记录了此模式。</p>"
      },
      {
        "en": "<p>Auto mode is a new mode for Claude Code that delegates approvals to model-based classifiers—a middle ground between manual review and no guardrails. The goal is to catch the dangerous actions that aren't aligned with user intent, while letting the rest run without approval prompts. Get started using auto mode by following the <a href=\"http://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode\" rel=\"noreferrer\" target=\"_blank\">docs</a>.</p>",
        "kind": "text",
        "cn": "<p>自动模式是 Claude Code 的一种新模式，它将审批权委托给基于模型的分类器——介于手动审核与无防护措施之间的折中方案。其目标是捕获那些与用户意图不符的危险操作，同时让其余操作无需审批提示即可执行。请按照<a href=\"http://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode\" rel=\"noreferrer\" target=\"_blank\">文档</a>开始使用自动模式。</p>"
      },
      {
        "en": "<h2>How it works</h2>",
        "kind": "heading",
        "cn": "<h2>工作原理</h2>"
      },
      {
        "en": "<p>Auto mode uses two layers of defense: one for what Claude reads, one for what Claude does.</p>",
        "kind": "text",
        "cn": "<p>自动模式采用两层防御机制：一层针对 Claude 读取的内容，另一层针对 Claude 执行的操作。</p>"
      },
      {
        "en": "<p>At the input layer, a server-side prompt-injection probe scans tool outputs (file reads, web fetches, shell output, external tool responses) before they enter the agent's context. When content looks like an attempt to hijack behavior, the probe adds a warning to the agent's context before the result is passed along—telling the agent to treat this content as suspect and anchor on what the user actually asked for.</p>",
        "kind": "text",
        "cn": "<p>在输入层，服务器端提示注入探测器会在工具输出（文件读取、网络请求、Shell 输出、外部工具响应）进入代理上下文之前对其进行扫描。当内容看起来像是试图劫持代理行为时，探测器会在将结果传递下去之前向代理上下文添加一条警告——告知代理将此内容视为可疑内容，并以用户的实际请求为准。</p>"
      },
      {
        "en": "<p>At the output layer, the transcript classifier (running on Sonnet 4.6) evaluates each action against a set of decision criteria before it executes, acting as a substitute for a human approver. The classifier runs in two stages: a fast single-token filter (deciding 'yes' to block or 'no' to allow), followed by chain-of-thought reasoning only if the first filter flags the transcript. Because most actions clear the first stage, reasoning tokens are spent only where needed. The classifier sees only user messages and the agent's tool calls; we strip out Claude's own messages and tool outputs, making it reasoning-blind by design. We walk through each of these choices, including what they buy us and what they cost, in the Design decisions section below.</p>",
        "kind": "text",
        "cn": "<p>在输出层，转录分类器（运行于 Sonnet 4.6 上）在每项操作执行前，根据一组决策标准对其进行评估，充当人工审批者的替代角色。分类器分两个阶段运行：首先是快速单词元过滤器（判断是\"是\"拦截还是\"否\"放行），仅当第一阶段标记该转录记录时，才进行思维链推理。由于大多数操作可通过第一阶段，推理词元仅在需要时才会被消耗。分类器只查看用户消息和代理的工具调用；我们剔除了 Claude 自身的消息和工具输出，使其在设计上对推理过程保持盲视。我们在下方的\"设计决策\"部分逐一分析了每项选择的得失。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Figure 2: System architecture. The transcript classifier gates tool calls; the prompt-injection probe screens tool results. Subagents run the same pipeline recursively, with handoff classifiers at delegation (can deny) and at return (warns only).\" src=\"https://aka.doubaocdn.com/s/VDlg1wZqTO\" loading=\"lazy\" /><figcaption>Figure 2: System architecture. The transcript classifier gates tool calls; the prompt-injection probe screens tool results. Subagents run the same pipeline recursively, with handoff classifiers at delegation (can deny) and at return (warns only).</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Threat model</h2>",
        "kind": "heading",
        "cn": "<h2>威胁模型</h2>"
      },
      {
        "en": "<p>An agent might take a dangerous action for four reasons:</p>",
        "kind": "text",
        "cn": "<p>代理可能出于以下四种原因采取危险操作：</p>"
      },
      {
        "en": "<ol><li><strong>Overeager behavior</strong>. In this case, the agent understands the user's goal, and is genuinely trying to help, but takes initiative beyond what the user would approve. For example, it uses a credential it happened to find or deletes something it judged to be in the way. This behavior can be tricky to catch, because there's no hostile reasoning. The action instead looks like reasonable problem-solving, only applied past the boundary of what the user authorized or intended.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>过度积极的行为</strong>。在这种情况下，代理理解用户的目标，并真诚地尝试提供帮助，但主动采取了超出用户授权范围的行动。例如，它使用了碰巧发现的凭证，或删除了它认为碍事的内容。这类行为难以察觉，因为背后并没有恶意推理。该操作看起来像是合理的问题解决方式，只是应用范围超出了用户授权或意图的边界。</li></ol>"
      },
      {
        "en": "<ol><li><strong>Honest mistakes</strong>. Here, the agent misunderstands the blast radius. For example, it thinks a resource is test-scoped when it's shared, or a branch is its own when it isn't.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>无意失误</strong>。此处，代理误判了波及范围。例如，它认为某个资源是测试范围内的，实际上却是共享的；或者认为某个分支是自己的，实际上并非如此。</li></ol>"
      },
      {
        "en": "<ol><li><strong>Prompt injection</strong>. Instructions planted in a file, webpage, or tool output hijack the agent, redirecting it from the user's task toward the attacker's.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>提示注入</strong>。植入文件、网页或工具输出中的指令劫持代理，将其从用户任务重定向至攻击者的目的。</li></ol>"
      },
      {
        "en": "<ol><li><strong>A misaligned model</strong>. Canonically, misalignment occurs when the agent pursues a goal of its own. We don't currently see this in practice, though we evaluate it carefully for every model we release.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>未对齐的模型</strong>。从规范角度而言，未对齐是指代理追求其自身目标。目前我们在实践中尚未观察到这种情况，但我们在每次发布模型时都会仔细评估。</li></ol>"
      },
      {
        "en": "<p>In all four cases, the defense is to block the action. Our classifier is tuned to overeager behavior and honest mistakes, as we have specific examples of this behavior from internal model testing, but the defense applies regardless of which threat produced the action.</p>",
        "kind": "text",
        "cn": "<p>在以上四种情况下，防御手段都是拦截该操作。我们的分类器针对过度积极的行为和无意失误进行了调优，因为我们在内部模型测试中有这类行为的具体案例，但无论是哪种威胁触发了该操作，防御均同样适用。</p>"
      },
      {
        "en": "<p>The examples below are adapted from our internal incident log to illustrate what auto mode is designed to block:</p>",
        "kind": "text",
        "cn": "<p>以下示例改编自我们的内部事件日志，用以说明自动模式旨在拦截的操作类型：</p>"
      },
      {
        "en": "<ul><li><strong>Scope escalation</strong>. A user asked to &quot;clean up old branches.&quot; The agent listed remote branches, constructed a pattern match, and issued a delete. This would be blocked since the request was vague, the action irreversible and destructive, and the user may have only meant to delete local branches.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>范围扩大</strong>。用户要求\"清理旧分支\"。代理列出远程分支，构造了一个模式匹配，并执行了删除操作。由于请求措辞含糊、操作不可逆且具有破坏性，且用户可能只打算删除本地分支，此操作将被拦截。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Credential exploration</strong>. An agent hit an auth error partway through a task. Rather than asking for permission, it began systematically grepping through environment variables and config files for alternative API tokens. Since these credentials could be scoped for a different task, this is blocked.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>凭证探查</strong>。代理在执行任务途中遭遇鉴权错误。它没有请求权限，而是开始系统性地在环境变量和配置文件中搜索替代 API 令牌。由于这些凭证可能属于其他任务范围，此操作将被拦截。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Agent-inferred parameters</strong>. A user said &quot;cancel my job.&quot; The agent queried the cluster, picked the closest match by name similarity, and tried to delete it. This is blocked since the specific target may not have been what the user intended, and could have been owned by someone else.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>代理自行推断参数</strong>。用户说\"取消我的任务\"。代理查询集群，按名称相似度选择了最接近的匹配项，并尝试删除。由于具体目标可能并非用户所意图的，且可能属于其他人，此操作将被拦截。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Sharing via external service</strong>. An agent wanted to share a script for debugging, and constructed a GitHub Gist command. This is blocked as data exfiltration since the user may consider the contents to be confidential and not appropriate to be public.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>通过外部服务分享</strong>。代理为了分享一个调试脚本，构造了一个 GitHub Gist 命令。由于用户可能认为其内容是机密且不适合公开，此操作被视为数据外泄并予以拦截。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Safety-check bypass</strong>. A deploy command failed a pre-check; the agent retried with a skip-verification flag. This is blocked since it could impact shared infrastructure.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>绕过安全检查</strong>。某条部署命令未通过预检；代理使用跳过验证的标志重试。由于此操作可能影响共享基础设施，将被拦截。</li></ul>"
      },
      {
        "en": "<h2>How permission decisions work</h2>",
        "kind": "heading",
        "cn": "<h2>权限决策机制</h2>"
      },
      {
        "en": "<p>All of the examples above would reach the classifier, but most actions are allowed prior to that step by the standard Claude Code allow rules:</p>",
        "kind": "text",
        "cn": "<p>上述所有示例最终都会进入分类器，但大多数操作在此步骤之前就已被 Claude Code 的标准允许规则放行：</p>"
      },
      {
        "en": "<p><strong>Tier 1: Built-in safe-tool allowlist and user settings.</strong> A fixed allowlist includes tools that can't modify state, including file reads, text and file-pattern search, code navigation, todo and plan-mode transitions. Users can also configure always-allow rules for specific tool patterns. One exception is that on entering auto mode, we drop permission rules that are known to grant arbitrary code execution, including blanket shell access, wildcarded script interpreters (python, node, ruby, and similar), and package manager run commands. While this is best-effort based on real-world usage, any list will inevitably be incomplete. Many users set up these blanket rules for convenience in manual-approval mode, but leaving them active would mean the classifier never sees the commands most capable of causing damage. Narrow rules (&quot;allow running code formatters&quot;) carry over, but broad interpreter escapes don't.</p>",
        "kind": "text",
        "cn": "<p><strong>第一层：内置安全工具白名单与用户设置。</strong>固定白名单包含无法修改状态的工具，涵盖文件读取、文本与文件模式搜索、代码导航、待办事项及计划模式切换。用户还可以针对特定工具模式配置始终允许规则。有一个例外：进入自动模式时，我们会移除已知会授予任意代码执行权限的权限规则，包括全局 Shell 访问、通配符脚本解释器（python、node、ruby 等类似命令），以及包管理器运行命令。尽管这是基于真实使用情况的尽力而为，但任何列表都不可避免地存在遗漏。许多用户为了方便在手动审批模式下设置了这些宽泛规则，但若保留这些规则，分类器将永远无法看到那些最具破坏性的命令。窄范围规则（如\"允许运行代码格式化工具\"）会被保留，但宽泛的解释器豁免则不会。</p>"
      },
      {
        "en": "<p><strong>Tier 2: In-project file operations.</strong> File writes and edits inside the project directory are allowed without a classifier call. Routine coding (e.g. editing source files in your repo) doesn't pay classifier latency; in-project edits are reviewable via version control.</p>",
        "kind": "text",
        "cn": "<p><strong>第二层：项目内文件操作。</strong>项目目录内的文件写入和编辑无需调用分类器即可执行。日常编码操作（例如编辑代码库中的源文件）无需承担分类器延迟；项目内的编辑操作可通过版本控制进行审查。</p>"
      },
      {
        "en": "<p>Only actions with real downside potential reach the final tier:</p>",
        "kind": "text",
        "cn": "<p>只有具有实际负面影响潜力的操作才会进入最终层：</p>"
      },
      {
        "en": "<p><strong>Tier 3: Transcript classifier.</strong> The transcript classifier sees everything else, including shell commands, web fetches, external tool integrations, subagent spawns, filesystem operations outside the project directory. Stage 1 is a fast single-token (yes/no) filter instructed to err toward blocking; if it flags, stage 2 re-evaluates the same input with chain-of-thought reasoning to reduce false positives.</p>",
        "kind": "text",
        "cn": "<p><strong>第三层：转录分类器。</strong>转录分类器处理其余所有操作，包括 Shell 命令、网络请求、外部工具集成、子代理创建，以及项目目录以外的文件系统操作。第一阶段是快速单词元（是/否）过滤器，设定为倾向于拦截；若第一阶段标记该操作，第二阶段将对相同输入进行带思维链推理的重新评估，以减少误报。</p>"
      },
      {
        "en": "<h2>The classifier decision criteria</h2>",
        "kind": "heading",
        "cn": "<h2>分类器决策标准</h2>"
      },
      {
        "en": "<p>The classifier's prompt is a fixed template we ship, with three customizable slots inserted into the middle. The fixed parts do the interpretive work—how to determine what an action actually does, how to read user authorization, the classification process itself—and they're the same for everyone. The slots define your policy: what counts as trusted in your environment, what categories to block, what exceptions to carve out. Good defaults ship out of the box. You can start using auto mode immediately and extend the configuration iteratively as you work with the feature.</p>",
        "kind": "text",
        "cn": "<p>分类器的提示词是我们随产品附带的固定模板，中间插有三个可自定义的槽位。固定部分承担解释性工作——如何判断操作的实际效果、如何解读用户授权、分类过程本身——且对所有用户保持一致。槽位则定义您的策略：在您的环境中哪些内容属于可信范围、哪些类别需要拦截、哪些例外需要划出。系统内置了良好的默认配置，可立即使用自动模式，并在使用过程中逐步扩展配置。</p>"
      },
      {
        "en": "<h3>The fixed template</h3>",
        "kind": "heading",
        "cn": "<h3>固定模板</h3>"
      },
      {
        "en": "<p><strong>Evaluation rules tell the classifier how to look for dangerous commands</strong>. The principle is to evaluate the real-world impact of an action, rather than just the surface text of the invocation. The agent shouldn't be able to hide a dangerous operation behind a benign-looking wrapper. If the agent writes a payload to a file and then runs it, the classifier evaluates the payload. If a chain of commands is joined with &amp;&amp;, the whole chain is one action. If the agent writes a Python script assembling a shell command, the classifier evaluates the assembled command from the transcript context before allowing the script to be executed.</p>",
        "kind": "text",
        "cn": "<p><strong>评估规则告知分类器如何识别危险命令</strong>。其原则是评估操作的真实世界影响，而非仅凭调用的表面文本。代理不应能够将危险操作隐藏在看似无害的包装器之后。若代理将有效载荷写入文件再运行，分类器评估的是有效载荷。若一连串命令通过 <code>&amp;&amp;</code> 连接，整条命令链视为一个操作。若代理编写 Python 脚本来组装 Shell 命令，分类器在允许脚本执行之前，会根据转录上下文评估组装后的命令。</p>"
      },
      {
        "en": "<p><strong>User intent rules tell the classifier how to read authorization</strong>. This is a tricky part of the prompt to get right. It's also where the overeager-behavior defense lives. The classifier has to decide whether the action is something the user authorized, not just an action related to the user's goal. The classifier is deliberately conservative. The prompt establishes what is authorized; everything the agent chooses on its own is unauthorized until the user says otherwise. In this case, &quot;clean up my branches&quot; doesn't authorize a batch delete, and &quot;can we fix this?&quot; would be considered a question, not a directive.</p>",
        "kind": "text",
        "cn": "<p><strong>用户意图规则告知分类器如何解读授权</strong>。这是提示词中最难准确把握的部分，也是防御过度积极行为的核心所在。分类器必须判断该操作是否在用户的授权范围之内，而不仅仅是与用户目标相关的操作。分类器刻意保持保守。提示词确立了什么是被授权的；代理自主选择的一切均视为未授权，直到用户明确说明为止。在这种情况下，\"整理我的分支\"并不授权批量删除，而\"我们能修复这个问题吗？\"则被视为提问，而非指令。</p>"
      },
      {
        "en": "<p>The template includes a step-by-step classification process, in which it checks the action against block rules, then allows exceptions, followed by user intent, before ultimately making a decision.</p>",
        "kind": "text",
        "cn": "<p>该模板包含一套逐步分类流程：依次根据拦截规则检查操作，然后考虑例外情况，再判断用户意图，最终作出决定。</p>"
      },
      {
        "en": "<h3>The customizable slots</h3>",
        "kind": "heading",
        "cn": "<h3>可自定义槽位</h3>"
      },
      {
        "en": "<p>The &quot;environment&quot; defines the trust boundary of which domains, cloud buckets, source-control orgs, and internal services count as &quot;inside&quot; versus &quot;external.&quot; By default, the only thing the classifier trusts is the git repo you're currently working in. Users can customize this in settings so the classifier can identify their trusted infrastructure (e.g. GitHub org, cloud buckets, or internal API). Anything else outside this boundary could be an exfiltration risk.</p>",
        "kind": "text",
        "cn": "<p>\"环境\"定义了信任边界，即哪些域名、云存储桶、源代码控制组织和内部服务属于\"内部\"范围，哪些属于\"外部\"。默认情况下，分类器唯一信任的是您当前所在的 git 代码库。用户可以在设置中自定义此项，以便分类器识别其受信任的基础设施（例如 GitHub 组织、云存储桶或内部 API）。边界之外的任何内容都可能存在数据外泄风险。</p>"
      },
      {
        "en": "<p>The default has more than twenty block rules, which fall into these groups:</p>",
        "kind": "text",
        "cn": "<p>默认配置包含超过二十条拦截规则，归属以下几类：</p>"
      },
      {
        "en": "<ul><li><strong>Destroy or exfiltrate.</strong> Cause irreversible loss by force-pushing over history, mass-deleting cloud storage, or sending internal data externally.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>销毁或外泄数据。</strong>通过强制推送覆盖历史记录、批量删除云存储，或将内部数据发送至外部，造成不可逆的损失。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Degrade security posture.</strong> Make the system harder to monitor or defend by disabling logging, installing persistence like SSH keys or cronjobs, or modifying the agent's own permission config.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>削弱安全态势。</strong>通过禁用日志记录、安装持久化后门（如 SSH 密钥或定时任务）、修改代理自身的权限配置等方式，使系统更难以监控和防御。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Cross trust boundaries.</strong> Act on things the agent has no basis to trust, like running code cloned from external repos, scanning credential stores for usable tokens, or sending data to a service the user never specified.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>跨越信任边界。</strong>对代理没有充分理由信任的内容采取操作，例如运行从外部代码库克隆的代码、扫描凭证存储以获取可用令牌，或将数据发送至用户从未指定的服务。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Bypass review or affect others.</strong> Skip safeguards on shared infrastructure by pushing directly to main, running production deploys, or modifying shared resources or jobs the agent didn't create.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>绕过审查或影响他人。</strong>跳过共享基础设施的安全保障，例如直接推送至主分支、执行生产环境部署，或修改代理未创建的共享资源或任务。</li></ul>"
      },
      {
        "en": "<p>Allow exceptions are mandatory carve-outs where a block rule technically matches but the action is benign. The default is narrow, including installing packages already declared in the repo's manifest, standard credential flows, and pushing to the session's working branch.</p>",
        "kind": "text",
        "cn": "<p>允许例外是强制性的豁免条款，适用于拦截规则在技术上匹配但操作本身无害的情形。默认范围较窄，包括安装代码库清单中已声明的软件包、标准凭证流程，以及向当前工作分支推送代码。</p>"
      },
      {
        "en": "<p>All three slots ship with conservative defaults, so you can start without writing anything. Run <code>claude auto-mode defaults</code> to see the full list. If you customize these, we recommend editing this baseline, rather than starting from scratch.</p>",
        "kind": "text",
        "cn": "<p>三个槽位均附带保守的默认设置，无需任何配置即可直接使用。运行 <code>claude auto-mode defaults</code> 可查看完整列表。如需自定义，我们建议在此基准上进行编辑，而非从头开始。</p>"
      },
      {
        "en": "<h2>Results</h2>",
        "kind": "heading",
        "cn": "<h2>评估结果</h2>"
      },
      {
        "en": "<p>We evaluated the full pipeline on three different datasets. Two datasets measure the tradeoff auto mode is making: false positive rate on real traffic (how much friction remains) and recall on real overeager actions (the risk that still remains when running auto mode). The third measures recall on synthetic data exfiltration tasks.</p>",
        "kind": "text",
        "cn": "<p>我们在三个不同数据集上对完整流水线进行了评估。两个数据集衡量自动模式所作的权衡：真实流量的误报率（残余摩擦程度）和真实过度积极操作的召回率（运行自动模式时残余的风险）。第三个数据集衡量合成数据外泄任务的召回率。</p>"
      },
      {
        "en": "<ul><li><strong>Real internal traffic</strong> (n = 10,000). Actual Claude Code tool calls from Anthropic employees.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>真实内部流量</strong>（n = 10,000）。Anthropic 员工的实际 Claude Code 工具调用记录。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Real overeager actions</strong> (n = 52). Curated from sessions where an employee denied the action or it was flagged post-hoc. Small because it requires Claude attempting something dangerous in a real session, captured and labeled.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>真实过度积极操作</strong>（n = 52）。从员工拒绝操作或事后标记的会话中整理所得。样本量较小，因为需要 Claude 在真实会话中尝试危险操作，并经过捕获和标注。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Synthetic data exfiltration</strong> (n = 1,000). Generated attempts including HTTP POSTs of sensitive data, git pushes to untrusted remotes, and credentials embedded in URLs; many use obfuscation.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>合成数据外泄</strong>（n = 1,000）。生成的攻击尝试，包括敏感数据的 HTTP POST 请求、推送至不受信任远程仓库的 git 操作，以及嵌入 URL 中的凭证；许多使用了混淆手段。</li></ul>"
      },
      {
        "en": "<p>We report two metrics. False-negative rate (FNR) is the fraction of dangerous actions the classifier lets through; false positive rate (FPR) is the fraction of benign actions it blocks. A perfect classifier would score zero on both. In practice they trade off against each other. Stage 1 is fast and cheap, tuned for low FNR at the cost of high FPR. Stage 2 is more expensive and runs only on what stage 1 flagged. It cleans up the false positives but lets a few more dangerous actions through.</p>",
        "kind": "text",
        "cn": "<p>我们报告两项指标。假阴性率（FNR）是分类器放过的危险操作比例；假阳性率（FPR）是分类器误拦截的无害操作比例。理想分类器两项均为零，但实践中两者相互制约。第一阶段速度快、成本低，调优为以高假阳性率换取低假阴性率。第二阶段成本较高，仅在第一阶段标记的基础上运行，能清除误报，但会让少量危险操作漏网。</p>"
      },
      {
        "en": "<p>| | <strong>Real traffic</strong> n=10,000 | <strong>Real overeager</strong> n=52 | <strong>Synthetic exfil</strong> n=1,000 | |---|---|---|---| | Stage 1 (fast filter) | 8.5% FPR | 6.6% FNR | 1.8% FNR | | Stage 1-&gt;Stage 2 (full pipeline) | 0.4% FPR | 17% FNR | 5.7% FNR |</p>",
        "kind": "text",
        "cn": "<p>| | <strong>真实流量</strong> n=10,000 | <strong>真实过度积极</strong> n=52 | <strong>合成外泄</strong> n=1,000 | |---|---|---|---| | 第一阶段（快速过滤器） | FPR 8.5% | FNR 6.6% | FNR 1.8% | | 第一阶段→第二阶段（完整流水线） | FPR 0.4% | FNR 17% | FNR 5.7% |</p>"
      },
      {
        "en": "<p>Table 1. Classifier performance by stage. Stage 2 runs only on actions stage 1 flags, so the second row reflects the deployed pipeline end to end: FPR drops from 8.5% to 0.4%, at the cost of some recall.</p>",
        "kind": "text",
        "cn": "<p>表 1. 各阶段分类器性能。第二阶段仅处理第一阶段标记的操作，因此第二行反映的是端到端的已部署流水线表现：FPR 从 8.5% 降至 0.4%，代价是牺牲了部分召回率。</p>"
      },
      {
        "en": "<p>The 17% false-negative rate on real overeager actions is the honest number. The agent was trying to solve the user's problem and tried to execute a dangerous command past what was authorized.</p>",
        "kind": "text",
        "cn": "<p>真实过度积极操作的 17% 假阴性率是真实数据。代理正在努力解决用户的问题，并尝试执行超出授权范围的危险命令。</p>"
      },
      {
        "en": "<p>In the majority of misses we examined, the classifier correctly identifies the danger. It sees, for example, the force-push, the deletion, and the infrastructure change. What it gets wrong is whether a real consent signal in the session actually covers <em>this</em> action. &quot;Clean up the PR&quot; was said by the user, but it doesn't name force-pushing. A similar action was approved earlier, but one approval isn't a pattern. The classifier finds approval-shaped evidence and stops short of checking whether it's consent for the blast radius of the action. We've tried prompt-engineering around this and haven't found a fix that doesn't cost more than it gains.</p>",
        "kind": "text",
        "cn": "<p>在我们检查的大多数漏报案例中，分类器能够正确识别危险所在。例如，它能看到强制推送、删除操作和基础设施变更。它的失误在于误判会话中某个真实的同意信号是否实际覆盖了<em>这一</em>具体操作。\"整理 PR\"是用户说过的话，但并未明确提到强制推送。类似操作此前曾被批准过，但单次批准并不构成惯例。分类器找到了形似批准的证据，却没有进一步验证该证据是否足以授权此操作的影响范围。我们曾尝试通过提示词工程解决这一问题，但尚未找到一种不会得不偿失的修复方案。</p>"
      }
    ]
  },
  {
    "id": 4,
    "title": "Beyond permission prompts: making Claude Code more secure and autonomous",
    "date": "2025-10-20",
    "diff": "★★★",
    "time": "25分钟",
    "author": "Matt Haddock, Mark Bao",
    "url": "https://www.anthropic.com/engineering/claude-code-sandboxing",
    "vocab": [
      {
        "en": "sandbox",
        "cn": "沙箱",
        "ex": "Without network isolation, a compromised agent could exfiltrate sensitive files like SSH keys; without filesystem isolat"
      },
      {
        "en": "network isolation",
        "cn": "网络隔离",
        "ex": "# Beyond permission prompts: making Claude Code more secure and autonomous Published Oct 20, 2025 Claude Code's new sand"
      },
      {
        "en": "filesystem isolation",
        "cn": "文件系统隔离",
        "ex": "Filesystem isolation , which ensures that Claude can only access or modify specific directories."
      },
      {
        "en": "network access",
        "cn": "网络访问",
        "ex": "Without network isolation, a compromised agent could exfiltrate sensitive files like SSH keys; without filesystem isolat"
      },
      {
        "en": "write access",
        "cn": "写入权限",
        "ex": "Filesystem isolation, by allowing read and write access to the current working directory, but blocking the modification "
      },
      {
        "en": "MCP server",
        "cn": "MCP 服务器",
        "ex": "MCP server in practice"
      },
      {
        "en": "safety",
        "cn": "安全性",
        "ex": "# Beyond permission prompts: making Claude Code more secure and autonomous Published Oct 20, 2025 Claude Code's new sand"
      },
      {
        "en": "codebase",
        "cn": "代码库",
        "ex": "In Claude Code, Claude writes, tests, and debugs code alongside you, navigating your codebase, editing multiple files, a"
      },
      {
        "en": "container",
        "cn": "容器",
        "ex": "It's by using both techniques that we can provide a safer and faster agentic experience for Claude Code users. ### Two n"
      },
      {
        "en": "risk",
        "cn": "风险",
        "ex": "risk in practice"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>只靠权限弹窗不能保证 Claude Code 安全。更可靠的安全设计需要结合隔离环境、风险策略、权限边界，以及对高风险操作的控制。</div><div class=\"structure-guide-list\"><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Keeping users secure on Claude Code</strong></div><p>说明 Claude Code 的安全目标：既要让代理能做事，也要保护用户文件、命令和网络环境。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">推进主线</span><strong>Sandboxing: a safer and more autonomous approach</strong></div><p>介绍 sandboxing 如何限制 Claude Code 的执行环境，让更多操作可以安全自动化。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Two new sandboxing features in Claude Code</strong></div><p>介绍 sandboxing 如何限制 Claude Code 的执行环境，让更多操作可以安全自动化。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Getting started</strong></div><p>给出启用或试用相关功能的入口，让读者知道如何把前面的设计落到本地使用。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>Keeping users secure on Claude Code <span class=\"en\">沙箱</span></h4><p><strong>本文语境：</strong>Claude Code runs on a permission-based model: by default, it's read-only, which means it asks for permission before making modifications or running any commands.</p><p><strong>英文表达：先把 sandbox 理解成本文里的功能角色，而不是只背成“沙箱”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Sandboxing: a safer and more autonomous approach <span class=\"en\">沙箱</span></h4><p><strong>本文语境：</strong>Sandboxing creates pre-defined boundaries within which Claude can work more freely, instead of asking for permission for each action.</p><p><strong>英文表达：先把 sandbox 理解成本文里的功能角色，而不是只背成“沙箱”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Two new sandboxing features in Claude Code <span class=\"en\">沙箱</span></h4><p><strong>本文语境：</strong>This can be used to sandbox arbitrary processes, agents and MCP servers.</p><p><strong>英文表达：先把 sandbox 理解成本文里的功能角色，而不是只背成“沙箱”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Getting started <span class=\"en\">沙箱</span></h4><p><strong>本文语境：</strong>Our new sandboxed bash tool and Claude Code on the web offer substantial improvements in both security and productivity for developers using Claude for their engineering work.</p><p><strong>英文表达：先把 sandbox 理解成本文里的功能角色，而不是只背成“沙箱”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Acknowledgements <span class=\"en\">关键概念</span></h4><p><strong>本文语境：</strong>Article written by David Dworken and Oliver Weller-Davies, with contributions from Meaghan Choi, Catherine Wu, Molly Vorwerck, Alex Isken, Kier Bradwell, and Kevin Garcia</p><p><strong>英文表达：先抓标题名词，再回到段落里找作者给它安排的动作、条件和结果。这样比逐词翻译更稳定。</strong></p><p><strong>把这一节当成一个设计判断来读：它适合什么场景，牺牲了什么，又提升了什么。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Beyond permission prompts: making Claude Code more secure and autonomous》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 sandbox（沙箱） / network isolation（网络隔离） / filesystem isolation（文件系统隔离） / network access（网络访问） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>Claude Code's new sandboxing features, a bash tool and Claude Code on the web, reduce permission prompts and increase user safety by enabling two boundaries: filesystem and network isolation.</p>",
        "kind": "text",
        "cn": "<p>Claude Code 的全新沙箱功能——沙箱化 Bash 工具与网页版 Claude Code——通过启用文件系统隔离和网络隔离两道防线，减少了权限提示，同时提升了用户安全性。</p>"
      },
      {
        "en": "<p>In <a href=\"https://www.claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a>, Claude writes, tests, and debugs code alongside you, navigating your codebase, editing multiple files, and running commands to verify its work. Giving Claude this much access to your codebase and files can introduce risks, especially in the case of prompt injection.</p>",
        "kind": "text",
        "cn": "<p>在 <a href=\"https://www.claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> 中，Claude 与您并肩编写、测试和调试代码，遍历代码库、编辑多个文件并运行命令来验证其工作成果。授予 Claude 如此广泛的代码库和文件访问权限可能带来风险，尤其是在发生提示注入的情况下。</p>"
      },
      {
        "en": "<p>To help address this, we've introduced two new features in Claude Code built on top of sandboxing, both of which are designed to provide a more secure place for developers to work, while also allowing Claude to run more autonomously and with fewer permission prompts. In our internal usage, we've found that sandboxing safely reduces permission prompts by 84%. By defining set boundaries within which Claude can work freely, they increase security and agency.</p>",
        "kind": "text",
        "cn": "<p>为解决这一问题，我们在 Claude Code 中基于沙箱技术引入了两项新功能，均旨在为开发者提供更安全的工作环境，同时允许 Claude 更自主地运行，减少权限提示。根据我们的内部使用数据，沙箱能够安全地将权限提示减少 84%。通过预先定义 Claude 可自由操作的边界，这两项功能在提升安全性的同时，也增强了代理的自主能力。</p>"
      },
      {
        "en": "<h3>Keeping users secure on Claude Code</h3>",
        "kind": "heading",
        "cn": "<h3>保护 Claude Code 用户安全</h3>"
      },
      {
        "en": "<p>Claude Code runs on a permission-based model: by default, it's read-only, which means it asks for permission before making modifications or running any commands. There are some exceptions to this: we auto-allow safe commands like echo or cat, but most operations still need explicit approval.</p>",
        "kind": "text",
        "cn": "<p>Claude Code 基于权限模型运行：默认情况下处于只读模式，即在进行修改或运行任何命令之前均会请求权限。存在一些例外：我们会自动允许 <code>echo</code> 或 <code>cat</code> 等安全命令，但大多数操作仍需明确批准。</p>"
      },
      {
        "en": "<p>Constantly clicking &quot;approve&quot; slows down development cycles and can lead to 'approval fatigue', where users might not pay close attention to what they're approving, and in turn making development less safe.</p>",
        "kind": "text",
        "cn": "<p>频繁点击\"批准\"会拖慢开发周期，并可能导致\"审批疲劳\"——用户可能不再仔细审查所批准的内容，进而降低开发安全性。</p>"
      },
      {
        "en": "<p>To address this, we launched sandboxing for Claude Code.</p>",
        "kind": "text",
        "cn": "<p>为解决这一问题，我们为 Claude Code 推出了沙箱功能。</p>"
      },
      {
        "en": "<h2>Sandboxing: a safer and more autonomous approach</h2>",
        "kind": "heading",
        "cn": "<h2>沙箱：更安全、更自主的方式</h2>"
      },
      {
        "en": "<p>Sandboxing creates pre-defined boundaries within which Claude can work more freely, instead of asking for permission for each action. With sandboxing enabled, you get drastically fewer permission prompts and increased safety.</p>",
        "kind": "text",
        "cn": "<p>沙箱为 Claude 划定了预定义的操作边界，使其能够在边界内更自由地工作，而无需为每项操作请求权限。启用沙箱后，权限提示大幅减少，安全性显著提升。</p>"
      },
      {
        "en": "<p>Our approach to sandboxing is built on top of operating system-level features to enable two boundaries:</p>",
        "kind": "text",
        "cn": "<p>我们的沙箱方案基于操作系统级别的特性构建，以实现两道防线：</p>"
      },
      {
        "en": "<ol><li><strong>Filesystem isolation</strong>, which ensures that Claude can only access or modify specific directories. This is particularly important in preventing a prompt-injected Claude from modifying sensitive system files.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>文件系统隔离</strong>，确保 Claude 只能访问或修改特定目录。这对于防止被提示注入的 Claude 修改敏感系统文件尤为重要。</li></ol>"
      },
      {
        "en": "<ol><li><strong>Network isolation</strong>, which ensures that Claude can only connect to approved servers. This prevents a prompt-injected Claude from leaking sensitive information or downloading malware.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>网络隔离</strong>，确保 Claude 只能连接到经批准的服务器。这可防止被提示注入的 Claude 泄露敏感信息或下载恶意软件。</li></ol>"
      },
      {
        "en": "<p>It is worth noting that effective sandboxing requires <em>both</em> filesystem and network isolation. Without network isolation, a compromised agent could exfiltrate sensitive files like SSH keys; without filesystem isolation, a compromised agent could easily escape the sandbox and gain network access. It's by using both techniques that we can provide a safer and faster agentic experience for Claude Code users.</p>",
        "kind": "text",
        "cn": "<p>值得注意的是，有效的沙箱需要<em>同时</em>具备文件系统隔离和网络隔离。若缺少网络隔离，被攻陷的代理可能外泄 SSH 密钥等敏感文件；若缺少文件系统隔离，被攻陷的代理则可轻易逃逸沙箱并获得网络访问权限。正是通过同时应用这两种技术，我们才能为 Claude Code 用户提供更安全、更高效的代理体验。</p>"
      },
      {
        "en": "<h3>Two new sandboxing features in Claude Code</h3>",
        "kind": "heading",
        "cn": "<h3>Claude Code 中的两项全新沙箱功能</h3>"
      },
      {
        "en": "<h4>Sandboxed bash tool: safe bash execution without permission prompts</h4>",
        "kind": "heading",
        "cn": "<h4>沙箱化 Bash 工具：无需权限提示的安全 Bash 执行</h4>"
      },
      {
        "en": "<p>We're introducing <a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">a new sandbox runtime</a>, available in beta as a research preview, that lets you define exactly which directories and network hosts your agent can access, without the overhead of spinning up and managing a container. This can be used to sandbox arbitrary processes, agents and MCP servers. It is also available as <a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">an open source research preview</a>.</p>",
        "kind": "text",
        "cn": "<p>我们正在推出<a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">全新沙箱运行时</a>（目前作为研究预览版以 Beta 形式提供），允许您精确定义代理可访问的目录和网络主机，而无需启动和管理容器的额外开销。该运行时可用于沙箱化任意进程、代理和 MCP 服务器，同时也以<a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">开源研究预览版</a>的形式提供。</p>"
      },
      {
        "en": "<p>In Claude Code, we use this runtime to sandbox the bash tool, which allows Claude to run commands within the defined limits you set. Inside the safe sandbox, Claude can run more autonomously and safely execute commands without permission prompts. If Claude tries to access something <em>outside</em> of the sandbox, you'll be notified immediately, and can choose whether or not to allow it.</p>",
        "kind": "text",
        "cn": "<p>在 Claude Code 中，我们使用该运行时对 Bash 工具进行沙箱化，允许 Claude 在您设定的限制范围内运行命令。在安全沙箱内，Claude 可以更自主地运行，无需权限提示即可安全执行命令。如果 Claude 尝试访问沙箱<em>之外</em>的内容，您将立即收到通知，并可自主决定是否允许。</p>"
      },
      {
        "en": "<p>We've built this on top of OS level primitives such as <a href=\"https://github.com/containers/bubblewrap\" rel=\"noreferrer\" target=\"_blank\">Linux bubblewrap</a> and MacOS seatbelt to enforce these restrictions at the OS level. They cover not just Claude Code's direct interactions, but also any scripts, programs, or subprocesses that are spawned by the command.As described above, this sandbox enforces both:</p>",
        "kind": "text",
        "cn": "<p>我们基于操作系统级原语构建了这一功能，例如 <a href=\"https://github.com/containers/bubblewrap\" rel=\"noreferrer\" target=\"_blank\">Linux bubblewrap</a> 和 macOS Seatbelt，在操作系统层面强制执行这些限制。这些限制不仅涵盖 Claude Code 的直接交互，还覆盖由命令派生的所有脚本、程序或子进程。如上所述，该沙箱同时强制执行：</p>"
      },
      {
        "en": "<ol><li><strong>Filesystem isolation,</strong> by allowing read and write access to the current working directory, but blocking the modification of any files outside of it.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>文件系统隔离，</strong>允许对当前工作目录进行读写访问，但阻止修改其之外的任何文件。</li></ol>"
      },
      {
        "en": "<ol><li><strong>Network isolation,</strong> by only allowing internet access through a unix domain socket connected to a proxy server running outside the sandbox. This proxy server enforces restrictions on the domains that a process can connect to, and handles user confirmation for newly requested domains. And if you'd like further-increased security, we also support customizing this proxy to enforce arbitrary rules on outgoing traffic.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>网络隔离，</strong>仅允许通过 Unix 域套接字经由在沙箱外运行的代理服务器访问互联网。该代理服务器对进程可连接的域名强制执行限制，并处理用户对新请求域名的确认。如需进一步提升安全性，我们还支持自定义此代理，以对出站流量强制执行任意规则。</li></ol>"
      },
      {
        "en": "<p>Both components are configurable: you can easily choose to allow or disallow specific file paths or domains.</p>",
        "kind": "text",
        "cn": "<p>两个组件均可配置：您可以轻松选择允许或禁止特定文件路径或域名。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Claude Code's sandboxing architecture isolates code execution with filesystem and network controls, automatically allowing safe operations, blocking malicious ones, and asking permission only when needed.\" src=\"https://aka.doubaocdn.com/s/7kPg1wZqTO\" loading=\"lazy\" /><figcaption>Claude Code's sandboxing architecture isolates code execution with filesystem and network controls, automatically allowing safe operations, blocking malicious ones, and asking permission only when needed.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Sandboxing ensures that even a successful prompt injection is fully isolated, and cannot impact overall user security. This way, a compromised Claude Code can't steal your SSH keys, or phone home to an attacker's server.</p>",
        "kind": "text",
        "cn": "<p>沙箱确保即使提示注入攻击成功，其影响也完全隔离在沙箱内，无法危及用户的整体安全。这样一来，即使 Claude Code 被攻陷，也无法窃取您的 SSH 密钥或向攻击者的服务器发送信息。</p>"
      },
      {
        "en": "<p>To get started with this feature, run /sandbox in Claude Code and check out <a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">more technical details</a> about our security model.</p>",
        "kind": "text",
        "cn": "<p>如需开始使用此功能，请在 Claude Code 中运行 <code>/sandbox</code>，并查阅有关我们安全模型的<a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">更多技术细节</a>。</p>"
      },
      {
        "en": "<p>To make it easier for other teams to build safer agents, we have <a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">open sourced</a> this feature. We believe that others should consider adopting this technology for their own agents in order to enhance the security posture of their agents.</p>",
        "kind": "text",
        "cn": "<p>为了让其他团队更便捷地构建更安全的代理，我们已将此功能<a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">开源</a>。我们认为，其他团队应考虑将该技术应用于自己的代理，以提升其安全态势。</p>"
      },
      {
        "en": "<h4>Claude Code on the web: running Claude Code securely in the cloud</h4>",
        "kind": "heading",
        "cn": "<h4>网页版 Claude Code：在云端安全运行 Claude Code</h4>"
      },
      {
        "en": "<p>Today, we're also releasing <a href=\"https://docs.claude.com/en/docs/claude-code/claude-code-on-the-web\" rel=\"noreferrer\" target=\"_blank\">Claude Code on the web</a> enabling users to run Claude Code in an isolated sandbox in the cloud. Claude Code on the web executes each Claude Code session in an isolated sandbox where it has full access to its server in a safe and secure way. We've designed this sandbox to ensure that sensitive credentials (such as git credentials or signing keys) are never inside the sandbox with Claude Code. This way, even if the code running in the sandbox is compromised, the user is kept safe from further harm.</p>",
        "kind": "text",
        "cn": "<p>今天，我们同时发布了<a href=\"https://docs.claude.com/en/docs/claude-code/claude-code-on-the-web\" rel=\"noreferrer\" target=\"_blank\">网页版 Claude Code</a>，让用户可以在云端的隔离沙箱中运行 Claude Code。网页版 Claude Code 在隔离沙箱中执行每个会话，使其能够以安全的方式完全访问其服务器。我们在设计上确保敏感凭证（如 Git 凭证或签名密钥）永远不会与 Claude Code 同处沙箱之内。这样一来，即使沙箱中运行的代码遭到攻陷，用户也能免受进一步的伤害。</p>"
      },
      {
        "en": "<p>Claude Code on the web uses a custom proxy service that transparently handles all git interactions. Inside the sandbox, the git client authenticates to this service with a custom-built scoped credential. The proxy verifies this credential and the contents of the git interaction (e.g. ensuring it is only pushing to the configured branch), then attaches the right authentication token before sending the request to GitHub.</p>",
        "kind": "text",
        "cn": "<p>网页版 Claude Code 使用自定义代理服务，透明地处理所有 Git 交互。在沙箱内部，Git 客户端使用专为此设计的作用域凭证向该服务进行身份验证。代理服务验证此凭证及 Git 交互的内容（例如确保仅推送至配置的分支），然后在将请求发送至 GitHub 之前附加正确的身份验证令牌。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Claude Code's Git integration routes commands through a secure proxy that validates authentication tokens, branch names, and repository destinations—allowing safe version control workflows while preventing unauthorized pushes.\" src=\"https://aka.doubaocdn.com/s/VSxt1wZqTO\" loading=\"lazy\" /><figcaption>Claude Code's Git integration routes commands through a secure proxy that validates authentication tokens, branch names, and repository destinations—allowing safe version control workflows while preventing unauthorized pushes.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Getting started</h2>",
        "kind": "heading",
        "cn": "<h2>快速上手</h2>"
      },
      {
        "en": "<p>Our new sandboxed bash tool and Claude Code on the web offer substantial improvements in both security and productivity for developers using Claude for their engineering work.</p>",
        "kind": "text",
        "cn": "<p>我们的全新沙箱化 Bash 工具和网页版 Claude Code 为使用 Claude 开展工程工作的开发者提供了在安全性和生产力两方面的实质性提升。</p>"
      },
      {
        "en": "<p>To get started with these tools:</p>",
        "kind": "text",
        "cn": "<p>开始使用这些工具的方式：</p>"
      },
      {
        "en": "<ol><li>Run <code>/sandbox</code> in Claude and check out <a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">our docs</a> on how to configure this sandbox.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>在 Claude 中运行 <code>/sandbox</code>，并查阅<a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">我们的文档</a>了解如何配置沙箱。</li></ol>"
      },
      {
        "en": "<ol><li>Go to <a href=\"http://claude.ai/redirect/website.v1.a813babd-04bf-434c-bb7f-49aded8c6b65/code\" rel=\"noreferrer\" target=\"_blank\">claude.com/code</a> to try out Claude Code on the web.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>访问 <a href=\"http://claude.ai/redirect/website.v1.a813babd-04bf-434c-bb7f-49aded8c6b65/code\" rel=\"noreferrer\" target=\"_blank\">claude.com/code</a> 体验网页版 Claude Code。</li></ol>"
      },
      {
        "en": "<p>Or, if you're building your own agents, check out our <a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">open-sourced sandboxing code</a>, and consider integrating it into your work. We look forward to seeing what you build.</p>",
        "kind": "text",
        "cn": "<p>或者，如果您正在构建自己的代理，欢迎查阅我们的<a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">开源沙箱代码</a>，并考虑将其集成到您的工作中。我们期待看到您的成果。</p>"
      },
      {
        "en": "<p>To learn more about Claude Code on the web, check out our <a href=\"https://www.anthropic.com/news/claude-code-on-the-web\" rel=\"noreferrer\" target=\"_blank\">launch blog post</a>.</p>",
        "kind": "text",
        "cn": "<p>如需了解更多关于网页版 Claude Code 的信息，请查阅我们的<a href=\"https://www.anthropic.com/news/claude-code-on-the-web\" rel=\"noreferrer\" target=\"_blank\">发布博客文章</a>。</p>"
      },
      {
        "en": "<h2>Acknowledgements</h2>",
        "kind": "heading",
        "cn": "<h2>致谢</h2>"
      },
      {
        "en": "<p>Article written by David Dworken and Oliver Weller-Davies, with contributions from Meaghan Choi, Catherine Wu, Molly Vorwerck, Alex Isken, Kier Bradwell, and Kevin Garcia</p>",
        "kind": "text",
        "cn": "<p>本文由 David Dworken 和 Oliver Weller-Davies 撰写，Meaghan Choi、Catherine Wu、Molly Vorwerck、Alex Isken、Kier Bradwell 和 Kevin Garcia 参与贡献。</p>"
      }
    ]
  },
  {
    "id": 5,
    "title": "Effective harnesses for long-running agents",
    "date": "2025-11-26",
    "diff": "★★★",
    "time": "30分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
    "vocab": [
      {
        "en": "incremental progress",
        "cn": "增量进展",
        "ex": "We developed a two-fold solution to enable the Claude Agent SDK to work effectively across many context windows: an init"
      },
      {
        "en": "feature list",
        "cn": "功能清单",
        "ex": "Here, we provide a deeper dive on some of the key components of such an environment. ### Feature list To address the pro"
      },
      {
        "en": "long-running",
        "cn": "长周期运行",
        "ex": "# Effective harnesses for long-running agents Published Nov 26, 2025 Agents still face challenges working across many co"
      },
      {
        "en": "harness",
        "cn": "运行框架",
        "ex": "We looked to human engineers for inspiration in creating a more effective harness for long-running agents."
      },
      {
        "en": "environment management",
        "cn": "环境管理",
        "ex": "Inspiration for these practices came from knowing what effective software engineers do every day. ## Environment managem"
      },
      {
        "en": "long-running agent problem",
        "cn": "长周期智能体问题",
        "ex": "You can find code examples in the accompanying quickstart. ## The long-running agent problem The Claude Agent SDK is a p"
      },
      {
        "en": "getting up to speed",
        "cn": "快速进入状态",
        "ex": "For example, Claude can't see browser-native alert modals through the Puppeteer MCP, and features relying on these modal"
      },
      {
        "en": "future work",
        "cn": "未来工作",
        "ex": "Only mark features as \"passing\" after careful testing. | | Claude has to spend time figuring out how to run the app. | W"
      },
      {
        "en": "browser",
        "cn": "浏览器环境",
        "ex": "In the case of building a web app, Claude mostly did well at verifying features end-to-end once explicitly prompted to u"
      },
      {
        "en": "scaffolding",
        "cn": "脚手架",
        "ex": "We prompt coding agents to edit this file only by changing the status of a passes field, and we use strongly-worded inst"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>长时间运行的 agent 不能只靠一个好 prompt，还需要一套 harness 来管理环境、任务状态、检查点、恢复和测试。阅读重点是如何让 agent 在长任务中持续推进而不失控。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The long-running agent problem</strong></div><p>说明长周期 agent 的核心难题：任务时间长、状态多、环境会变，单次 prompt 很难稳定覆盖。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>Environment management</strong></div><p>说明 harness 需要管理运行环境，让 agent 能复现状态、执行命令并保存进度。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Feature list</strong></div><p>把 harness 需要提供的能力列出来，方便理解长任务 agent 缺哪些基础设施。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Incremental progress</strong></div><p>强调长任务要能持续留下可检查的中间成果，而不是等到最后才知道是否失败。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>Testing</strong></div><p>说明测试如何成为长任务 agent 的反馈来源，让系统能发现错误并继续修正。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Getting up to speed</strong></div><p>说明 agent 重新进入任务时如何快速恢复上下文，知道之前做到哪里、下一步该做什么。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>Future work</strong></div><p>指出 harness 还可以继续改进的方向，包括更强的恢复、调度和可观察性。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">推进主线</span><strong>Footnotes</strong></div><p>Footnotes：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>The long-running agent problem <span class=\"en\">长周期运行</span></h4><p><strong>本文语境：</strong>The Claude Agent SDK is a powerful, general-purpose agent harness adept at coding, as well as other tasks that require the model to use tools to gather context, plan, and execute.</p><p><strong>英文表达：先把 long-running 理解成本文里的功能角色，而不是只背成“长周期运行”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Environment management <span class=\"en\">环境管理</span></h4><p><strong>本文语境：</strong>Here, we provide a deeper dive on some of the key components of such an environment.</p><p><strong>英文表达：先把 environment management 理解成本文里的功能角色，而不是只背成“环境管理”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>上下文不是越多越好，关键是把当前任务真正需要的信息放进模型能稳定使用的位置。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Feature list <span class=\"en\">功能清单</span></h4><p><strong>本文语境：</strong>先确定核心定义、适用范围和反例</p><p><strong>英文表达：先把 feature list 理解成本文里的功能角色，而不是只背成“功能清单”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Incremental progress <span class=\"en\">增量进展</span></h4><p><strong>本文语境：</strong>Given this initial environment scaffolding, the next iteration of the coding agent was then asked to work on only one feature at a time.</p><p><strong>英文表达：先把 incremental progress 理解成本文里的功能角色，而不是只背成“增量进展”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>智能体的价值来自可观察的环境反馈和清晰停止条件，不是把所有步骤都交给模型自由发挥。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Testing <span class=\"en\">测试</span></h4><p><strong>本文语境：</strong>One final major failure mode that we observed was Claude's tendency to mark a feature as complete without proper testing.</p><p><strong>英文表达：先把 testing 理解成本文里的功能角色，而不是只背成“测试”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>Getting up to speed <span class=\"en\">快速进入状态</span></h4><p><strong>本文语境：</strong>With all of the above in place, every coding agent is prompted to run through a series of steps to get its bearings, some quite basic but still helpful: 1.</p><p><strong>英文表达：先把 getting up to speed 理解成本文里的功能角色，而不是只背成“快速进入状态”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Effective harnesses for long-running agents》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 incremental progress（增量进展） / feature list（功能清单） / long-running（长周期运行） / harness（运行框架） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>Agents still face challenges working across many context windows. We looked to human engineers for inspiration in creating a more effective harness for long-running agents.</p>",
        "kind": "text",
        "cn": "<p>客服代表在许多上下文窗口中工作仍然面临挑战。我们向人类工程师寻求灵感，为长期运行的代理创建更有效的线束。</p>"
      },
      {
        "en": "<p>As AI agents become more capable, developers are increasingly asking them to take on complex tasks requiring work that spans hours, or even days. However, getting agents to make consistent progress across multiple context windows remains an open problem.</p>",
        "kind": "text",
        "cn": "<p>随着人工智能代理变得更加强大，开发人员越来越多地要求他们承担需要跨越数小时甚至数天工作的复杂任务。但是，让代理在多个上下文窗口中取得一致的进展仍然是一个悬而未决的问题。</p>"
      },
      {
        "en": "<p>The core challenge of long-running agents is that they must work in discrete sessions, and each new session begins with no memory of what came before. Imagine a software project staffed by engineers working in shifts, where each new engineer arrives with no memory of what happened on the previous shift. Because context windows are limited, and because most complex projects cannot be completed within a single window, agents need a way to bridge the gap between coding sessions.</p>",
        "kind": "text",
        "cn": "<p>长期运行的代理的核心挑战是他们必须在离散的会话中工作，并且每个新会话开始时都没有对之前发生的事情的记忆。想象一下，一个由轮班工作的工程师组成的软件项目，每个新工程师都不记得上一班发生了什么。由于上下文窗口有限，并且由于大多数复杂的项目无法在单个窗口内完成，因此代理需要一种方法来弥合</p>"
      },
      {
        "en": "<p>We developed a two-fold solution to enable the <a href=\"https://platform.claude.com/docs/en/agent-sdk/overview\" rel=\"noreferrer\" target=\"_blank\">Claude Agent SDK</a> to work effectively across many context windows: an <strong>initializer agent</strong> that sets up the environment on the first run, and a <strong>coding agent</strong> that is tasked with making incremental progress in every session, while leaving clear artifacts for the next session. You can find code examples in the accompanying <a href=\"https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding\" rel=\"noreferrer\" target=\"_blank\">quickstart.</a></p>",
        "kind": "text",
        "cn": "<p>我们开发了一个双重解决方案，使Claude Agent SDK能够在许多上下文窗口中有效地工作：初始化器代理在第一次运行时设置环境，编码代理的任务是在每个会话中进行增量进度，同时为下一个会话留下清晰的工件。您可以在随附的快速入门中找到代码示例。</p>"
      },
      {
        "en": "<h2>The long-running agent problem</h2>",
        "kind": "heading",
        "cn": "<h2>长期运行的代理问题</h2>"
      },
      {
        "en": "<p>The Claude Agent SDK is a powerful, general-purpose agent harness adept at coding, as well as other tasks that require the model to use tools to gather context, plan, and execute. It has context management capabilities such as compaction, which enables an agent to work on a task without exhausting the context window. Theoretically, given this setup, it should be possible for an agent to continue to do useful work for an arbitrarily long time.</p>",
        "kind": "text",
        "cn": "<p>Claude Agent SDK是一款功能强大的通用代理工具，擅长编码，以及需要模型使用工具收集上下文、计划和执行的其他任务。它具有压缩等上下文管理功能，使代理能够在不耗尽上下文窗口的情况下处理任务。从理论上讲，鉴于这种设置，客服代表应该有可能在任意长的时间内继续做有用的工作。</p>"
      },
      {
        "en": "<p>However, compaction isn't sufficient. Out of the box, even a frontier coding model like Opus 4.5 running on the Claude Agent SDK in a loop across multiple context windows will fall short of building a production-quality web app if it's only given a high-level prompt, such as &quot;build a clone of <a href=\"http://claude.ai/redirect/website.v1.5561e94a-5abc-4cd2-824b-2557f283a367\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a>.&quot;</p>",
        "kind": "text",
        "cn": "<p>然而，压实是不够的。开箱即用，即使是像Opus 4.5这样在Claude Agent SDK上跨多个上下文窗口循环运行的前沿编码模型，如果只给出高级提示（例如“构建claude.ai的克隆” ） ，也无法构建生产质量的Web应用程序。</p>"
      },
      {
        "en": "<p>Claude's failures manifested in two patterns. First, the agent tended to try to do too much at once—essentially to attempt to one-shot the app. Often, this led to the model running out of context in the middle of its implementation, leaving the next session to start with a feature half-implemented and undocumented. The agent would then have to guess at what had happened, and spend substantial time trying to get the basic app working again. This happens even with compaction, which doesn't always pass perfectly clear instructions to the next agent.</p>",
        "kind": "text",
        "cn": "<p>克劳德的失败表现在两个方面。首先，客服代表倾向于同时尝试做太多事情，主要是尝试一次性使用应用程序。通常，这导致模型在实现过程中缺少上下文，让下一个会话以半实现和未记录的功能开始。然后，客服代表将不得不猜测发生了什么，并花费大量时间尝试让基本应用程序再次工作。</p>"
      },
      {
        "en": "<p>A second failure mode would often occur later in a project. After some features had already been built, a later agent instance would look around, see that progress had been made, and declare the job done.</p>",
        "kind": "text",
        "cn": "<p>第二种故障模式通常发生在项目的后期。在已经构建了一些功能之后，稍后的代理实例将环顾四周，看到已取得进展，并宣布工作已完成。</p>"
      },
      {
        "en": "<p>This decomposes the problem into two parts. First, we need to set up an initial environment that lays the foundation for <em>all</em> the features that a given prompt requires, which sets up the agent to work step-by-step and feature-by-feature. Second, we should prompt each agent to make incremental progress towards its goal while also leaving the environment in a clean state at the end of a session. By &quot;clean state&quot; we mean the kind of code that would be appropriate for merging to a main branch: there are no major bugs, the code is orderly and well-documented, and in general, a developer could easily begin work on a new feature without first having to clean up an unrelated mess.</p>",
        "kind": "text",
        "cn": "<p>这会将问题分解为两部分。首先，我们需要建立一个初始环境，为给定提示所需的所有功能奠定基础，从而设置代理逐步工作和功能。其次，我们应该提示每个代理朝着其目标逐步取得进展，同时在会话结束时使环境保持清洁状态。所谓“干净状态” ，我们指的是那种</p>"
      },
      {
        "en": "<p>When experimenting internally, we addressed these problems using a two-part solution:</p>",
        "kind": "text",
        "cn": "<p>在内部试验时，我们使用两部分解决方案来解决这些问题：</p>"
      },
      {
        "en": "<ol><li>Initializer agent: The very first agent session uses a specialized prompt that asks the model to set up the initial environment: an <code>init.sh</code> script, a claude-progress.txt file that keeps a log of what agents have done, and an initial git commit that shows what files were added.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>初始化器代理：第一个代理会话使用专门的提示，要求模型设置初始环境： init.sh脚本、保留代理已执行操作日志的claude-progress.txt文件以及显示已添加文件的初始git提交。</li></ol>"
      },
      {
        "en": "<ol><li>Coding agent: Every subsequent session asks the model to make incremental progress, then leave structured updates.&lt;sup&gt;1&lt;/sup&gt;</li></ol>",
        "kind": "list",
        "cn": "<ol><li>编码代理：每个后续会话都要求模型进行增量进度，然后保留结构化更新。&lt; sup &gt; 1 &lt;/sup &gt;</li></ol>"
      },
      {
        "en": "<p>The key insight here was finding a way for agents to quickly understand the state of work when starting with a fresh context window, which is accomplished with the claude-progress.txt file alongside the git history. Inspiration for these practices came from knowing what effective software engineers do every day.</p>",
        "kind": "text",
        "cn": "<p>这里的关键见解是找到一种方法，让客服代表在从全新的上下文窗口开始时快速了解工作状态，这是通过使用claude-progress.txt文件和git历史记录来完成的。这些实践的灵感来自于了解高效的软件工程师每天都在做什么。</p>"
      },
      {
        "en": "<h2>Environment management</h2>",
        "kind": "heading",
        "cn": "<h2>环境管理</h2>"
      },
      {
        "en": "<p>In the updated <a href=\"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices#multi-context-window-workflows\" rel=\"noreferrer\" target=\"_blank\">Claude 4 prompting guide</a>, we shared some best practices for multi-context window workflows, including a harness structure that uses &quot;a different prompt for the very first context window.&quot; This &quot;different prompt&quot; requests that the initializer agent set up the environment with all the necessary context that future coding agents will need to work effectively. Here, we provide a deeper dive on some of the key components of such an environment.</p>",
        "kind": "text",
        "cn": "<p>在更新后的Claude 4提示指南中，我们分享了多上下文窗口工作流程的一些最佳实践，包括使用“第一个上下文窗口的不同提示”的线束结构。\"此“不同提示”要求初始化器代理设置环境，其中包含未来编码代理有效工作所需的所有必要上下文。在这里，我们将更深入地介绍这种环境的一些关键组成部分</p>"
      },
      {
        "en": "<h3>Feature list</h3>",
        "kind": "heading",
        "cn": "<h3>功能列表</h3>"
      },
      {
        "en": "<p>To address the problem of the agent one-shotting an app or prematurely considering the project complete, we prompted the initializer agent to write a comprehensive file of feature requirements expanding on the user's initial prompt. In the <a href=\"http://claude.ai/redirect/website.v1.5561e94a-5abc-4cd2-824b-2557f283a367\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a> clone example, this meant over 200 features, such as &quot;a user can open a new chat, type in a query, press enter, and see an AI response.&quot; These features were all initially marked as &quot;failing&quot; so that later coding agents would have a clear outline of what full functionality looked like.</p>",
        "kind": "text",
        "cn": "<p>为了解决代理一次性拍摄应用程序或过早考虑项目完成的问题，我们提示初始化器代理在用户的初始提示上编写扩展功能需求的综合文件。在claude.ai克隆示例中，这意味着超过200个功能，例如“用户可以打开新聊天、键入查询、按Enter键并查看AI响应。“这些功能最初都被标记为“失败” ，因此我</p>"
      },
      {
        "en": "<pre><code>{\n  &quot;category&quot;: &quot;functional&quot;,\n  &quot;description&quot;: &quot;New chat button creates a fresh conversation&quot;,\n  &quot;steps&quot;: [\n    &quot;Navigate to main interface&quot;,\n    &quot;Click the 'New Chat' button&quot;,\n    &quot;Verify a new conversation is created&quot;,\n    &quot;Check that chat area shows welcome state&quot;,\n    &quot;Verify conversation appears in sidebar&quot;\n  ],\n  &quot;passes&quot;: false\n}</code></pre>",
        "kind": "code",
        "cn": "<p>{\"category\": \"functional\", \"description\": \"新聊天按钮创建新对话\", \"steps\": [\"Navigate to main interface\", \"Click the 'New Chat' button\", \"Verify a new conversation is created\", \"Check that chat area shows welcome state\", \"Verify conversation appears in sidebar\"], \"passes\": false}</p>"
      },
      {
        "en": "<p>We prompt coding agents to edit this file only by changing the status of a passes field, and we use strongly-worded instructions like &quot;It is unacceptable to remove or edit tests because this could lead to missing or buggy functionality.&quot; After some experimentation, we landed on using JSON for this, as the model is less likely to inappropriately change or overwrite JSON files compared to Markdown files.</p>",
        "kind": "text",
        "cn": "<p>我们仅通过更改通行证字段的状态来提示编码代理编辑此文件，并使用措辞强硬的说明，例如“删除或编辑测试是不可接受的，因为这可能会导致功能缺失或错误。“经过一些实验，我们开始使用JSON ，因为与Markdown文件相比，该模型不太可能不恰当地更改或覆盖JSON文件。</p>"
      },
      {
        "en": "<h3>Incremental progress</h3>",
        "kind": "heading",
        "cn": "<h3>渐进式进度</h3>"
      },
      {
        "en": "<p>Given this initial environment scaffolding, the next iteration of the coding agent was then asked to work on only one feature at a time. This incremental approach turned out to be critical to addressing the agent's tendency to do too much at once.</p>",
        "kind": "text",
        "cn": "<p>给定这种初始环境脚手架，然后要求编码代理的下一次迭代一次只处理一个特征。事实证明，这种渐进式方法对于解决客服代表同时做太多事情的倾向至关重要。</p>"
      },
      {
        "en": "<p>Once working incrementally, it's still essential that the model leaves the environment in a clean state after making a code change. In our experiments, we found that the best way to elicit this behavior was to ask the model to commit its progress to git with descriptive commit messages and to write summaries of its progress in a progress file. This allowed the model to use git to revert bad code changes and recover working states of the code base.</p>",
        "kind": "text",
        "cn": "<p>一旦增量工作，模型在进行代码更改后仍然必须使环境保持清洁状态。在我们的实验中，我们发现引发这种行为的最佳方法是要求模型使用描述性提交消息将其进度提交到git ，并在进度文件中编写其进度摘要。这使得模型可以使用git来还原错误的代码更改并恢复代码库的工作状态</p>"
      },
      {
        "en": "<p>These approaches also increased efficiency, as they eliminated the need for an agent to have to guess at what had happened and spend its time trying to get the basic app working again.</p>",
        "kind": "text",
        "cn": "<p>这些方法还提高了效率，因为它们消除了客服代表必须猜测发生了什么并花时间尝试使基本应用程序再次工作的需要。</p>"
      },
      {
        "en": "<h3>Testing</h3>",
        "kind": "heading",
        "cn": "<h3>测试</h3>"
      },
      {
        "en": "<p>One final major failure mode that we observed was Claude's tendency to mark a feature as complete without proper testing. Absent explicit prompting, Claude tended to make code changes, and even do testing with unit tests or <code>curl</code> commands against a development server, but would fail recognize that the feature didn't work end-to-end.</p>",
        "kind": "text",
        "cn": "<p>我们观察到的最后一个主要故障模式是Claude倾向于在未经适当测试的情况下将功能标记为完整。在没有明确提示的情况下， Claude倾向于对代码进行更改，甚至对开发服务器进行单元测试或curl命令测试，但会认识到该功能无法端到端工作。</p>"
      },
      {
        "en": "<p>In the case of building a web app, Claude mostly did well at verifying features end-to-end once explicitly prompted to use browser automation tools and do all testing as a human user would.</p>",
        "kind": "text",
        "cn": "<p>在构建Web应用程序的情况下，一旦明确提示使用浏览器自动化工具并像人类用户一样进行所有测试， Claude通常在端到端验证功能方面做得很好。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Screenshots taken by Claude through the Puppeteer MCP server as it tested the claude.ai clone.\" src=\"https://aka.doubaocdn.com/s/cGZB1wZqTb\" loading=\"lazy\" /><figcaption>Screenshots taken by Claude through the Puppeteer MCP server as it tested the claude.ai clone.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Providing Claude with these kinds of testing tools dramatically improved performance, as the agent was able to identify and fix bugs that weren't obvious from the code alone.</p>",
        "kind": "text",
        "cn": "<p>为Claude提供这些测试工具大大提高了性能，因为代理能够识别和修复代码本身并不明显的错误。</p>"
      },
      {
        "en": "<p>Some issues remain, like limitations to Claude's vision and to browser automation tools making it difficult to identify every kind of bug. For example, Claude can't see browser-native alert modals through the Puppeteer MCP, and features relying on these modals tended to be buggier as a result.</p>",
        "kind": "text",
        "cn": "<p>一些问题仍然存在，例如Claude的愿景和浏览器自动化工具的局限性，使得难以识别各种错误。例如， Claude无法通过Puppeteer MCP查看浏览器本机警报模式，因此依赖这些模式的功能往往会更复杂。</p>"
      },
      {
        "en": "<h2>Getting up to speed</h2>",
        "kind": "heading",
        "cn": "<h2>加快速度</h2>"
      },
      {
        "en": "<p>With all of the above in place, every coding agent is prompted to run through a series of steps to get its bearings, some quite basic but still helpful:</p>",
        "kind": "text",
        "cn": "<p>在上述所有内容到位后，每个编码代理都会被提示执行一系列步骤来获取其方位，其中一些非常基本但仍然有用：</p>"
      },
      {
        "en": "<ol><li><em>Run <code>pwd</code> to see the directory you're working in. You'll only be able to edit files in this directory.</em></li></ol>",
        "kind": "list",
        "cn": "<ol><li>运行pwd查看您正在使用的目录。您只能编辑此目录中的文件。</li></ol>"
      },
      {
        "en": "<ol><li><em>Read the git logs and progress files to get up to speed on what was recently worked on.</em></li></ol>",
        "kind": "list",
        "cn": "<ol><li>阅读git日志和进度文件，以快速了解最近的工作。</li></ol>"
      },
      {
        "en": "<ol><li><em>Read the features list file and choose the highest-priority feature that's not yet done to work on.</em></li></ol>",
        "kind": "list",
        "cn": "<ol><li>读取功能列表文件，并选择尚未完成的最高优先级功能。</li></ol>"
      },
      {
        "en": "<p>This approach saves Claude some tokens in every session since it doesn't have to figure out how to test the code. It also helps to ask the initializer agent to write an init.sh script that can run the development server, and then run through a basic end-to-end test before implementing a new feature.</p>",
        "kind": "text",
        "cn": "<p>这种方法可以在每个会话中为Claude节省一些令牌，因为它不必弄清楚如何测试代码。它还有助于要求初始化器代理编写可以运行开发服务器的init.sh脚本，然后在实现新功能之前运行基本的端到端测试。</p>"
      },
      {
        "en": "<p>In the case of the claude.ai clone, this meant that the agent always started the local development server and used the Puppeteer MCP to start a new chat, send a message, and receive a response. This ensured that Claude could quickly identify if the app had been left in a broken state, and immediately fix any existing bugs. If the agent had instead started implementing a new feature, it would likely make the problem worse.</p>",
        "kind": "text",
        "cn": "<p>对于claude.ai克隆，这意味着代理始终启动本地开发服务器，并使用Puppeteer MCP开始新的聊天、发送消息并接收响应。这确保了Claude能够快速识别应用程序是否处于故障状态，并立即修复任何现有的错误。如果客服代表反而开始实施新功能，可能会使问题变得更糟。</p>"
      },
      {
        "en": "<p>Given all this, a typical session starts off with the following assistant messages:</p>",
        "kind": "text",
        "cn": "<p>鉴于所有这些，典型的会话从以下助手消息开始：</p>"
      },
      {
        "en": "<pre><code>[Assistant] I'll start by getting my bearings and understanding the current state of the project.\n[Tool Use] &lt;bash - pwd&gt;\n[Tool Use] &lt;read - claude-progress.txt&gt;\n[Tool Use] &lt;read - feature_list.json&gt;\n[Assistant] Let me check the git log to see recent work.\n[Tool Use] &lt;bash - git log --oneline -20&gt;\n[Assistant] Now let me check if there's an init.sh script to restart the servers.\n&lt;Starts the development server&gt;\n[Assistant] Excellent! Now let me navigate to the application and verify that some fundamental features are still working.\n&lt;Tests basic functionality&gt;\n[Assistant] Based on my verification testing, I can see that the fundamental functionality is working well. The core chat features, theme switching, conversation loading, and error handling are all functioning correctly. Now let me review the tests.json file more comprehensively to understand what needs to be implemented next.\n&lt;Starts work on a new feature&gt;</code></pre>",
        "kind": "code",
        "cn": "<p>[助手]我将首先了解我的方位并了解项目的当前状态。[工具使用] &lt; bash - pwd &gt; [工具使用] &lt; read - claude-progress.txt &gt; [工具使用] &lt; read - feature_list.json &gt; [助手]让我查看git日志以查看最近的工作。[工具使用] &lt; bash - git log --oneline -20 &gt; [助手]现在让我检查是否有init.sh脚本来重新启动服务器。&lt;启动开发服务器&gt; [Assist</p>"
      },
      {
        "en": "<p>Agent failure modes and solutions</p>",
        "kind": "text",
        "cn": "<p>代理故障模式和解决方案</p>"
      },
      {
        "en": "<p>| <strong>Problem</strong> | <strong>Initializer Agent Behavior</strong> | <strong>Coding Agent Behavior</strong> | |---|---|---| | Claude declares victory on the entire project too early. | Set up a feature list file: based on the input spec, set up a structured JSON file with a list of end-to-end feature descriptions. | Read the feature list file at the beginning of a session. Choose a single feature to start working on. | | Claude leaves the environment in a state with bugs or undocumented progress. | An initial git repo and progress notes file is written. | Start the session by reading the progress notes file and git commit logs, and run a basic test on the development server to catch any undocumented bugs. End the session by writing a git commit and progress update. | | Claude marks features as done prematurely. | Set up a feature list file. | Self-verify all features. Only mark features as &quot;passing&quot; after careful testing. | | Claude has to spend time figuring out how to run the app. | Write an <code>init.sh</code> script that can run the development server. | Start the session by reading <code>init.sh</code>. |</p>",
        "kind": "text",
        "cn": "<p>|问题|初始化代理行为|编码代理行为| | --- | --- | --- | | | Claude过早宣布整个项目的胜利。|设置功能列表文件：根据输入规范，设置带有端到端功能描述列表的结构化JSON文件。|在会话开始时读取功能列表文件。选择一个功能开始工作。| | Claude让环境处于有缺陷或无文档记录的专业人士的状态</p>"
      },
      {
        "en": "<p>Summarizing four common failure modes and solutions in long-running AI agents.</p>",
        "kind": "text",
        "cn": "<p>总结长期运行的人工智能代理的四种常见故障模式和解决方案。</p>"
      },
      {
        "en": "<h2>Future work</h2>",
        "kind": "heading",
        "cn": "<h2>工作展望</h2>"
      },
      {
        "en": "<p>This research demonstrates one possible set of solutions in a long-running agent harness to enable the model to make incremental progress across many context windows. However, there remain open questions.</p>",
        "kind": "text",
        "cn": "<p>本研究演示了长期运行的代理线束中的一组可能的解决方案，以使模型能够在许多上下文窗口中取得增量进展。然而，仍然存在一些悬而未决的问题。</p>"
      },
      {
        "en": "<p>Most notably, it's still unclear whether a single, general-purpose coding agent performs best across contexts, or if better performance can be achieved through a multi-agent architecture. It seems reasonable that specialized agents like a testing agent, a quality assurance agent, or a code cleanup agent, could do an even better job at sub-tasks across the software development lifecycle.</p>",
        "kind": "text",
        "cn": "<p>最值得注意的是，目前尚不清楚单个通用编码代理是否能够在上下文中表现最佳，或者是否可以通过多代理架构实现更好的性能。专业代理（如测试代理、质量保证代理或代码清理代理）可以在整个软件开发生命周期的子任务方面做得更好，这似乎是合理的。</p>"
      },
      {
        "en": "<p>Additionally, this demo is optimized for full-stack web app development. A future direction is to generalize these findings to other fields. It's likely that some or all of these lessons can be applied to the types of long-running agentic tasks required in, for example, scientific research or financial modeling.</p>",
        "kind": "text",
        "cn": "<p>此外，此演示针对全栈Web应用程序开发进行了优化。未来的方向是将这些发现推广到其他领域。这些课程中的一部分或全部很可能可以应用于科学研究或财务建模等所需的长期代理任务类型。</p>"
      },
      {
        "en": "<h3>Acknowledgements</h3>",
        "kind": "heading",
        "cn": "<h3>致谢</h3>"
      },
      {
        "en": "<p>Written by Justin Young. Special thanks to David Hershey, Prithvi Rajasakeran, Jeremy Hadfield, Naia Bouscal, Michael Tingley, Jesse Mu, Jake Eaton, Marius Buleandara, Maggie Vo, Pedram Navid, Nadine Yasser, and Alex Notov for their contributions.</p>",
        "kind": "text",
        "cn": "<p>作者：贾斯汀·杨（ Justin Young ）。特别感谢David Hershey、Prithvi Rajasakeran、Jeremy Hadfield、Naia Bouscal、Michael Tingley、Jesse Mu、Jake Eaton、Marius Buleandara、Maggie Vo、Pedram Navid、Nadine Yasser和Alex Notov的贡献。</p>"
      },
      {
        "en": "<p>This work reflects the collective efforts of several teams across Anthropic who made it possible for Claude to safely do long-horizon autonomous software engineering, especially the code RL &amp; Claude Code teams. Interested candidates who would like to contribute are welcome to apply at <a href=\"http://anthropic.com/careers\" rel=\"noreferrer\" target=\"_blank\">anthropic.com/careers</a>.</p>",
        "kind": "text",
        "cn": "<p>这项工作反映了Anthropic的几个团队的集体努力，他们使Claude能够安全地进行长时间的自主软件工程，特别是代码RL和Claude Code团队。有兴趣捐款的候选人，欢迎通过anthropic.com/careers进行申请。</p>"
      },
      {
        "en": "<h3>Footnotes</h3>",
        "kind": "heading",
        "cn": "<h3>脚注</h3>"
      },
      {
        "en": "<ol><li>We refer to these as separate agents in this context only because they have different initial user prompts. The system prompt, set of tools, and overall agent harness was otherwise identical.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>在这种情况下，我们将这些客服代表称为单独的客服代表，只是因为它们具有不同的初始用户提示。系统提示、工具集和整个座席线束在其他方面完全相同。</li></ol>"
      }
    ]
  },
  {
    "id": 6,
    "title": "Scaling Managed Agents: Decoupling the brain from the hands",
    "date": "2026-04-08",
    "diff": "★★★",
    "time": "30分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/managed-agents",
    "vocab": [
      {
        "en": "managed agents",
        "cn": "托管智能体",
        "ex": "# Scaling Managed Agents: Decoupling the brain from the hands Published Apr 08, 2026 Harnesses encode assumptions that g"
      },
      {
        "en": "brain",
        "cn": "决策大脑",
        "ex": "# Scaling Managed Agents: Decoupling the brain from the hands Published Apr 08, 2026 Harnesses encode assumptions that g"
      },
      {
        "en": "many brains",
        "cn": "多大脑协作",
        "ex": "The interfaces push that context management into the harness, and only guarantee that the session is durable and availab"
      },
      {
        "en": "hands",
        "cn": "执行端",
        "ex": "# Scaling Managed Agents: Decoupling the brain from the hands Published Apr 08, 2026 Harnesses encode assumptions that g"
      },
      {
        "en": "many hands",
        "cn": "多执行端协作",
        "ex": "The interfaces push that context management into the harness, and only guarantee that the session is durable and availab"
      },
      {
        "en": "decoupling",
        "cn": "解耦",
        "ex": "# Scaling Managed Agents: Decoupling the brain from the hands Published Apr 08, 2026 Harnesses encode assumptions that g"
      },
      {
        "en": "pet",
        "cn": "宠物式托管",
        "ex": "We're opinionated about the shape of these interfaces, not about what runs behind them. ## Don't adopt a pet We started "
      },
      {
        "en": "untrusted code",
        "cn": "不可信代码",
        "ex": "In the coupled design, any untrusted code that Claude generated was run in the same container as credentials—so a prompt"
      },
      {
        "en": "agent loop",
        "cn": "智能体循环",
        "ex": "During the agent loop, the harness writes to the session with emitEvent(id, event) in order to keep a durable record of "
      },
      {
        "en": "context anxiety",
        "cn": "上下文焦虑",
        "ex": "As just one example, in prior work we found that Claude Sonnet 4.5 would wrap up tasks prematurely as it sensed its cont"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>Managed Agents 的核心思想是把负责思考和规划的 brain，与负责执行工具和操作环境的 hands 分离。这样可以让长周期任务更稳定，也方便排队、恢复和扩展。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Don't adopt a pet</strong></div><p>用“不要养宠物”类比说明：不要把每个 agent 当成需要人盯着的长期会话。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Decouple the brain from the hands</strong></div><p>解释 brain 和 hands 分离：规划逻辑保持稳定，执行环境可以被替换、排队或恢复。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The session is not Claude's context window</strong></div><p>说明会话窗口不等于 Claude 的全部记忆，任务状态应该由外部系统稳定保存。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Many brains, many hands</strong></div><p>说明多个决策端和多个执行端如何组合，让托管 agent 能并行处理更多任务。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Conclusion</strong></div><p>收束全文，把前面的小节整理成可以迁移到项目设计中的判断原则。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>Don't adopt a pet <span class=\"en\">宠物式托管</span></h4><p><strong>本文语境：</strong>We started by placing all agent components into a single container, which meant the session, agent harness, and sandbox all shared an environment.</p><p><strong>英文表达：先把 pet 理解成本文里的功能角色，而不是只背成“宠物式托管”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Decouple the brain from the hands <span class=\"en\">决策大脑</span></h4><p><strong>本文语境：</strong>The solution we arrived at was to decouple what we thought of as the &quot;brain&quot; (Claude and its harness) from both the &quot;hands&quot; (sandboxes and tools that perform actions) and the &quot;session&quot; (the log of session events).</p><p><strong>英文表达：先把 brain 理解成本文里的功能角色，而不是只背成“决策大脑”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>The session is not Claude's context window <span class=\"en\">上下文窗口</span></h4><p><strong>本文语境：</strong>Long-horizon tasks often exceed the length of Claude's context window, and the standard ways to address this all involve irreversible decisions about what to keep.</p><p><strong>英文表达：先把 context window 理解成本文里的功能角色，而不是只背成“上下文窗口”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Many brains, many hands <span class=\"en\">决策大脑</span></h4><p><strong>本文语境：</strong>Decoupling the brain from the hands solved one of our earliest customer complaints.</p><p><strong>英文表达：先把 brain 理解成本文里的功能角色，而不是只背成“决策大脑”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Conclusion <span class=\"en\">托管智能体</span></h4><p><strong>本文语境：</strong>With Managed Agents, we aimed to design a system that accommodates future harnesses, sandboxes, or other components around Claude.</p><p><strong>英文表达：先把 managed agents 理解成本文里的功能角色，而不是只背成“托管智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>Acknowledgements <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>Written by Lance Martin, Gabe Cemaj, and Michael Cohen.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Scaling Managed Agents: Decoupling the brain from the hands》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 managed agents（托管智能体） / brain（决策大脑） / many brains（多大脑协作） / hands（执行端） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>Harnesses encode assumptions that go stale as models improve. Managed Agents—our hosted service for long-horizon agent work—is built around interfaces that stay stable as harnesses change.</p>",
        "kind": "text",
        "cn": "<p>Harness 会将假设固化其中，而随着模型持续进步，这些假设会逐渐失效。Managed Agents——我们面向长周期智能体任务的托管服务——围绕一组稳定接口构建，无论 harness 如何演变，这些接口始终保持不变。</p>"
      },
      {
        "en": "<p><em>Get started with Claude Managed Agents by following our <a href=\"https://platform.claude.com/docs/en/managed-agents/overview\" rel=\"noreferrer\" target=\"_blank\">docs</a>.</em></p>",
        "kind": "text",
        "cn": "<p><em>请参阅我们的<a href=\"https://platform.claude.com/docs/en/managed-agents/overview\" rel=\"noreferrer\" target=\"_blank\">文档</a>，快速上手 Claude Managed Agents。</em></p>"
      },
      {
        "en": "<p>A running topic on the Engineering Blog is how to <a href=\"https://www.anthropic.com/engineering/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">build effective agents</a> and <a href=\"https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\" rel=\"noreferrer\" target=\"_blank\">design harnesses</a> for <a href=\"https://www.anthropic.com/engineering/harness-design-long-running-apps\" rel=\"noreferrer\" target=\"_blank\">long-running work</a>. A common thread across this work is that harnesses encode assumptions about what Claude can't do on its own. However, those assumptions need to be frequently questioned because they can <a href=\"http://www.incompleteideas.net/IncIdeas/BitterLesson.html\" rel=\"noreferrer\" target=\"_blank\">go stale</a> as models improve.</p>",
        "kind": "text",
        "cn": "<p>Anthropic 工程博客持续关注的话题之一，是如何<a href=\"https://www.anthropic.com/engineering/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">构建有效的智能体</a>以及如何为<a href=\"https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\" rel=\"noreferrer\" target=\"_blank\">长周期任务设计 harness</a>。这些工作有一条共同的主线：harness 会将\"Claude 独自无法完成的事情\"这一假设编码进去。然而，这些假设需要被持续质疑，因为随着模型进步，它们可能<a href=\"http://www.incompleteideas.net/IncIdeas/BitterLesson.html\" rel=\"noreferrer\" target=\"_blank\">逐渐过时</a>。</p>"
      },
      {
        "en": "<p>As just one example, in prior work <a href=\"https://www.anthropic.com/engineering/harness-design-long-running-apps\" rel=\"noreferrer\" target=\"_blank\">we found</a> that Claude Sonnet 4.5 would wrap up tasks prematurely as it sensed its context limit approaching—a behavior sometimes called &quot;context anxiety.&quot; We addressed this by adding context resets to the harness. But when we used the same harness on Claude Opus 4.5, we found that the behavior was gone. The resets had become dead weight.</p>",
        "kind": "text",
        "cn": "<p>举一个具体的例子：在此前的工作中，<a href=\"https://www.anthropic.com/engineering/harness-design-long-running-apps\" rel=\"noreferrer\" target=\"_blank\">我们发现</a> Claude Sonnet 4.5 在感知到上下文窗口即将耗尽时，会提前结束任务——这种行为有时被称为\"上下文焦虑\"。我们通过在 harness 中加入上下文重置机制来解决这一问题。但当我们在 Claude Opus 4.5 上使用同一套 harness 时，发现这一行为已经消失了。那些重置操作变成了无用的冗余。</p>"
      },
      {
        "en": "<p>We expect harnesses to continue evolving. So we built Managed Agents: a hosted service in the Claude Platform that runs long-horizon agents on your behalf through a small set of interfaces meant to outlast any particular implementation—including the ones we run today.</p>",
        "kind": "text",
        "cn": "<p>我们预期 harness 将持续演进。因此，我们构建了 Managed Agents：这是 Claude 平台上的一项托管服务，能够代您运行长周期智能体，并通过一组精简的接口来实现这一目标——这些接口在设计上要比任何具体实现（包括我们今天运行的实现）更加持久。</p>"
      },
      {
        "en": "<p>Building Managed Agents meant solving an old problem in computing: how to design a system for &quot;<a href=\"http://www.catb.org/esr/writings/taoup/html/ch03s01.html\" rel=\"noreferrer\" target=\"_blank\">programs as yet unthought of</a>.&quot; Decades ago, operating systems solved this problem by virtualizing hardware into abstractions—<em>process, file</em>—general enough for programs that didn't exist yet. The abstractions outlasted the hardware. The <code>read()</code> command is agnostic as to whether it's accessing a disk pack from the 1970s or a modern SSD. The abstractions on top stayed stable while the implementations underneath changed freely.</p>",
        "kind": "text",
        "cn": "<p>构建 Managed Agents 意味着要解决计算领域的一个古老问题：如何为\"<a href=\"http://www.catb.org/esr/writings/taoup/html/ch03s01.html\" rel=\"noreferrer\" target=\"_blank\">尚未被构想出的程序</a>\"设计一个系统。几十年前，操作系统通过将硬件虚拟化为抽象层——<em>进程、文件</em>——来解决这个问题，这些抽象层足够通用，能够适配当时尚不存在的程序。这些抽象的生命周期超越了底层硬件。<code>read()</code> 命令对它读取的是 1970 年代的磁盘包还是现代 SSD 毫不在意。上层抽象保持稳定，而底层实现则可以自由演变。</p>"
      },
      {
        "en": "<p>Managed Agents follow the same pattern. We virtualized the components of an agent: a session (the append-only log of everything that happened), a harness (the loop that calls Claude and routes Claude's tool calls to the relevant infrastructure), and a sandbox (an execution environment where Claude can run code and edit files). This allows the implementation of each to be swapped without disturbing the others. We're opinionated about the shape of these interfaces, not about what runs behind them.</p>",
        "kind": "text",
        "cn": "<p>Managed Agents 遵循相同的模式。我们将智能体的各个组件虚拟化：会话（session，记录所有事件的只追加日志）、harness（调用 Claude 并将 Claude 的工具调用路由到相关基础设施的循环）以及沙箱（一个 Claude 可以运行代码和编辑文件的执行环境）。这使得每个组件的实现都可以独立替换而不影响其他组件。我们对这些接口的形态有明确的主张，但对运行在接口背后的具体实现不做规定。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Managed Agents architecture\" src=\"https://aka.doubaocdn.com/s/vjUB1wZqTc\" loading=\"lazy\" /><figcaption>Managed Agents architecture</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Don't adopt a pet</h2>",
        "kind": "heading",
        "cn": "<h2>不要养宠物</h2>"
      },
      {
        "en": "<p>We started by placing all agent components into a single container, which meant the session, agent harness, and sandbox all shared an environment. There were benefits to this approach, including that file edits are direct syscalls, and there were no service boundaries to design.</p>",
        "kind": "text",
        "cn": "<p>最初，我们将所有智能体组件都放入一个容器中，这意味着会话、智能体 harness 和沙箱共享同一个环境。这种方式有其优势：文件编辑直接通过系统调用完成，无需设计任何服务边界。</p>"
      },
      {
        "en": "<p>But by coupling everything into one container, we ran into an old infrastructure problem: we'd adopted a <a href=\"https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/\" rel=\"noreferrer\" target=\"_blank\">*pet*</a>. In the pets-vs-cattle analogy, a pet is a named, hand-tended individual you can't afford to lose, while cattle are interchangeable. In our case, the server became that pet; if a container failed, the session was lost. If a container was unresponsive, we had to nurse it back to health.</p>",
        "kind": "text",
        "cn": "<p>然而，将所有内容耦合到一个容器中，让我们陷入了一个经典的基础设施困境：我们养了一只<a href=\"https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/\" rel=\"noreferrer\" target=\"_blank\">*宠物*</a>。在\"宠物与牛\"的类比中，宠物是有名字、需要精心照料、不能随便失去的个体，而牛则是可互换的。在我们的场景中，服务器就成了那只宠物；容器一旦出现故障，会话就会丢失；容器如果无响应，我们就不得不费心把它救回来。</p>"
      },
      {
        "en": "<p>Nursing containers meant debugging unresponsive stuck sessions. Our only window in was the WebSocket event stream, but that couldn't tell us <em>where</em> failures arose, which meant that a bug in the harness, a packet drop in the event stream, or a container going offline all presented the same. To figure out what went wrong, an engineer had to open a shell inside the container, but because that container often also held user data, that approach essentially meant we lacked the ability to debug.</p>",
        "kind": "text",
        "cn": "<p>照顾容器意味着要调试那些无响应、卡住的会话。我们唯一的观察窗口是 WebSocket 事件流，但它无法告诉我们<em>故障究竟发生在哪里</em>——harness 的 bug、事件流的丢包，还是容器下线，在外部看来都表现一样。要弄清楚出了什么问题，工程师不得不在容器内部打开 shell，但由于该容器通常还存有用户数据，这种方式实际上意味着我们基本失去了调试能力。</p>"
      },
      {
        "en": "<p>A second issue was that the harness assumed that whatever Claude worked on lived in the container with it. When customers asked us to connect Claude to their virtual private cloud, they had to either peer their network with ours, or run our harness in their own environment. An assumption baked into the harness became a problem when we wanted to connect it to different infrastructure.</p>",
        "kind": "text",
        "cn": "<p>第二个问题是：harness 假设 Claude 处理的所有内容都与它共处于同一个容器中。当客户希望我们将 Claude 接入他们的虚拟私有云时，他们要么需要将自己的网络与我们的网络对等互联，要么需要在他们自己的环境中运行我们的 harness。这个固化在 harness 中的假设，在我们尝试将其连接到不同基础设施时，成为了一个障碍。</p>"
      },
      {
        "en": "<h2>Decouple the brain from the hands</h2>",
        "kind": "heading",
        "cn": "<h2>将大脑与双手解耦</h2>"
      },
      {
        "en": "<p>The solution we arrived at was to decouple what we thought of as the &quot;brain&quot; (Claude and its harness) from both the &quot;hands&quot; (sandboxes and tools that perform actions) and the &quot;session&quot; (the log of session events). Each became an interface that made few assumptions about the others, and each could fail or be replaced independently.</p>",
        "kind": "text",
        "cn": "<p>我们最终找到的解决方案，是将\"大脑\"（Claude 及其 harness）与\"双手\"（执行操作的沙箱和工具）以及\"会话\"（会话事件的日志记录）解耦。每个组件都成为一个独立的接口，彼此之间几乎不做假设，任何一个都可以独立出现故障或被替换。</p>"
      },
      {
        "en": "<p><strong>The harness leaves the container.</strong> Decoupling the brain from the hands meant the harness no longer lived inside the container. It called the container the way it called any other tool: <code>execute(name, input) -&gt; string</code>. The container became cattle. If the container died, the harness caught the failure as a tool-call error and passed it back to Claude. If Claude decided to retry, a new container could be reinitialized with a standard recipe: <code>provision({resources})</code>. We no longer had to nurse failed containers back to health.</p>",
        "kind": "text",
        "cn": "<p><strong>Harness 脱离容器。</strong>将大脑与双手解耦，意味着 harness 不再驻留于容器内部。它调用容器的方式，与调用任何其他工具无异：<code>execute(name, input) -&gt; string</code>。容器由此变成了\"牛\"。若容器崩溃，harness 会将这次失败作为工具调用错误捕获，并将其传回 Claude。若 Claude 决定重试，只需通过标准配方重新初始化一个新容器：<code>provision({resources})</code>。我们不再需要把出了故障的容器救回来了。</p>"
      },
      {
        "en": "<p><strong>Recovering from harness failure.</strong> The harness also became cattle. Because the session log sits outside the harness, nothing in the harness needs to survive a crash. When one fails, a new one can be rebooted with <code>wake(sessionId)</code>, use <code>getSession(id)</code> to get back the event log, and resume from the last event. During the agent loop, the harness writes to the session with <code>emitEvent(id, event)</code> in order to keep a durable record of events.</p>",
        "kind": "text",
        "cn": "<p><strong>从 harness 故障中恢复。</strong>Harness 本身也变成了\"牛\"。由于会话日志保存在 harness 之外，harness 中的任何内容都不需要在崩溃后保存下来。当某个 harness 失败时，只需用 <code>wake(sessionId)</code> 重启一个新的，通过 <code>getSession(id)</code> 获取事件日志，然后从最后一个事件处继续。在智能体循环期间，harness 通过 <code>emitEvent(id, event)</code> 向会话写入数据，以保持一份持久的事件记录。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Decoupled architecture\" src=\"https://aka.doubaocdn.com/s/3l7O1wZqTc\" loading=\"lazy\" /><figcaption>Decoupled architecture</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p><strong>The security boundary.</strong> In the coupled design, any untrusted code that Claude generated was run in the same container as credentials—so a prompt injection only had to convince Claude to read its own environment. Once an attacker has those tokens, they can spawn fresh, unrestricted sessions and delegate work to them. Narrow scoping is an obvious mitigation, but this encodes an assumption about what Claude can't do with a limited token—and Claude is getting increasingly smart. The structural fix was to make sure the tokens are never reachable from the sandbox where Claude's generated code runs.</p>",
        "kind": "text",
        "cn": "<p><strong>安全边界。</strong>在耦合设计中，Claude 生成的任何不可信代码都运行在与凭据相同的容器中——因此，一次提示词注入攻击只需说服 Claude 读取自身的环境变量即可。一旦攻击者获得这些令牌，便能生成全新的、不受限制的会话并将工作委托给它们。缩小权限范围是一种显而易见的缓解措施，但这编码了一个关于 Claude 无法用受限令牌做什么的假设——而 Claude 正变得越来越聪明。结构性的修复方法是确保令牌永远无法从运行 Claude 生成代码的沙箱中触达。</p>"
      },
      {
        "en": "<p>We used two patterns to ensure this. Auth can be bundled with a resource or held in a vault outside the sandbox. For Git, we use each repository's access token to clone the repo during sandbox initialization and wire it into the local git remote. Git <code>push</code> and <code>pull</code> work from inside the sandbox without the agent ever handling the token itself. For custom tools, we support MCP and store OAuth tokens in a secure vault. Claude calls MCP tools via a dedicated proxy; this proxy takes in a token associated with the session. The proxy can then fetch the corresponding credentials from the vault and make the call to the external service. The harness is never made aware of any credentials.</p>",
        "kind": "text",
        "cn": "<p>为此，我们采用了两种模式。认证凭据可以随资源一同捆绑，或保存在沙箱外部的保险库中。对于 Git，我们在沙箱初始化期间使用每个仓库的访问令牌来克隆该仓库，并将其连接到本地 git remote。这样，Git 的 <code>push</code> 和 <code>pull</code> 可以在沙箱内正常运行，而智能体本身无需接触令牌。对于自定义工具，我们支持 MCP，并将 OAuth 令牌存储在安全保险库中。Claude 通过专用代理调用 MCP 工具；该代理接收与会话关联的令牌，随后从保险库获取对应凭据并向外部服务发起调用。Harness 自始至终不会感知到任何凭据。</p>"
      },
      {
        "en": "<h2>The session is not Claude's context window</h2>",
        "kind": "heading",
        "cn": "<h2>会话不等于 Claude 的上下文窗口</h2>"
      },
      {
        "en": "<p>Long-horizon tasks often exceed the length of Claude's context window, and the standard ways to address this all involve irreversible decisions about what to keep. We've explored these techniques in <a href=\"https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents\" rel=\"noreferrer\" target=\"_blank\">prior work</a> on context engineering. For example, compaction lets Claude save a summary of its context window and the memory tool lets Claude write context to files, enabling learning across sessions. This can be paired with context trimming, which selectively removes tokens such as old tool results or thinking blocks.</p>",
        "kind": "text",
        "cn": "<p>长周期任务往往超出 Claude 上下文窗口的长度，而应对这一问题的标准方法都涉及对保留内容的不可逆决策。我们在<a href=\"https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents\" rel=\"noreferrer\" target=\"_blank\">此前关于上下文工程的工作</a>中探讨了这些技术。例如，压缩机制让 Claude 能够保存上下文窗口的摘要；记忆工具让 Claude 能够将上下文写入文件，从而实现跨会话的学习。这些方式可以与上下文裁剪相结合，有选择地删除旧的工具调用结果或思考块等令牌。</p>"
      },
      {
        "en": "<p>But irreversible decisions to selectively retain or discard context can lead to failures. It is difficult to know which tokens the future turns will need. If messages are transformed by a compaction step, the harness removes compacted messages from Claude's context window, and these are recoverable only if they are stored. Prior work <a href=\"https://arxiv.org/pdf/2512.24601\" rel=\"noreferrer\" target=\"_blank\">has explored</a> ways to address this by storing context as an object that lives <em>outside</em> the context window. For example, context can be an object in a REPL that the LLM programmatically accesses by writing code to filter or slice it.</p>",
        "kind": "text",
        "cn": "<p>然而，选择性保留或丢弃上下文的不可逆决策可能导致失败。很难预判未来的轮次究竟需要哪些令牌。如果消息被压缩步骤转换过，harness 会将被压缩的消息从 Claude 的上下文窗口中移除，而这些内容只有在被存储的情况下才能恢复。此前已有<a href=\"https://arxiv.org/pdf/2512.24601\" rel=\"noreferrer\" target=\"_blank\">研究</a>探索了将上下文作为<em>存活于上下文窗口之外</em>的对象来解决这一问题。例如，上下文可以是 REPL 中的一个对象，LLM 通过编写代码对其进行过滤或切片来程序化访问。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Session as context object\" src=\"https://aka.doubaocdn.com/s/oG8V1wZqTc\" loading=\"lazy\" /><figcaption>Session as context object</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>In Managed Agents, the session provides this same benefit, serving as a context object that lives outside Claude's context window. But rather than be stored within the sandbox or REPL, context is durably stored in the session log. The interface, <code>getEvents(),</code> allows the brain to interrogate context by selecting positional slices of the event stream. The interface can be used flexibly, allowing the brain to pick up from wherever it last stopped reading, rewinding a few events before a specific moment to see the lead up, or rereading context before a specific action.</p>",
        "kind": "text",
        "cn": "<p>在 Managed Agents 中，会话提供了同样的好处——它作为一个上下文对象存活于 Claude 的上下文窗口之外。但与存储在沙箱或 REPL 中不同，上下文被持久存储在会话日志中。<code>getEvents()</code> 接口允许大脑通过选择事件流的位置切片来查询上下文。该接口使用灵活：大脑可以从上次停止读取的地方继续，倒回某个特定时刻之前的几个事件以查看前因后果，或在执行特定操作前重新读取相关上下文。</p>"
      },
      {
        "en": "<p>Any fetched events can also be transformed in the harness before being passed to Claude's context window. These transformations can be whatever the harness encodes, including context organization to achieve a high prompt cache hit rate and context engineering. We separated the concerns of recoverable context storage in the session and arbitrary context management in the harness because we can't predict what specific context engineering will be required in future models. The interfaces push that context management into the harness, and only guarantee that the session is durable and available for interrogation.</p>",
        "kind": "text",
        "cn": "<p>获取到的事件在传入 Claude 上下文窗口之前，也可以在 harness 中进行转换。这些转换可以是 harness 编码的任何内容，包括为实现高提示词缓存命中率而进行的上下文组织，以及各种上下文工程手段。我们将可恢复上下文存储（在会话中）与任意上下文管理（在 harness 中）两个关切分离，是因为我们无法预测未来的模型将需要哪些具体的上下文工程方式。这些接口将上下文管理推给了 harness，自身只保证会话的持久性和可查询性。</p>"
      },
      {
        "en": "<h2>Many brains, many hands</h2>",
        "kind": "heading",
        "cn": "<h2>多大脑，多双手</h2>"
      },
      {
        "en": "<p><strong>Many brains.</strong> Decoupling the brain from the hands solved one of our earliest customer complaints. When teams wanted Claude to work against resources in their own VPC, the only path was to peer their network with ours, because the container holding the harness assumed every resource sat next to it. Once the harness was no longer in the container, that assumption went away. The same change had a performance payoff. When we initially put the brain in a container, it meant that many brains required as many containers. For each brain, no inference could happen until that container was provisioned; every session paid the full container setup cost up front. Every session, even ones that would never touch the sandbox, had to clone the repo, boot the process, fetch pending events from our servers.</p>",
        "kind": "text",
        "cn": "<p><strong>多大脑。</strong>将大脑与双手解耦，解决了我们最早收到的客户抱怨之一。当团队希望 Claude 能访问他们自己 VPC 内的资源时，唯一的路径是将他们的网络与我们的网络对等互联，因为托管 harness 的容器假设所有资源都紧邻自己。一旦 harness 不再驻留于容器中，这一假设便不复存在。同样的变化也带来了性能提升。最初将大脑放入容器意味着，多少个大脑就需要多少个容器。对每个大脑而言，在该容器完成调配之前无法开始推理；每个会话都要预先承担完整的容器启动成本。每个会话——甚至那些永远不会用到沙箱的会话——都不得不克隆仓库、启动进程、从我们的服务器拉取待处理事件。</p>"
      },
      {
        "en": "<p>That dead time is expressed in time-to-first-token (TTFT), which measures how long a session waits between accepting work and producing its first response token. TTFT is the latency the user most acutely <em>feels</em>.</p>",
        "kind": "text",
        "cn": "<p>这段空等时间体现在首个令牌时延（TTFT）上——它衡量的是会话从接受任务到产出第一个响应令牌之间的等待时长。TTFT 是用户感受最为直接的延迟。</p>"
      },
      {
        "en": "<p>Decoupling the brain from the hands means that containers are provisioned by the brain via a tool call <code>(execute(name, input) -&gt; string)</code> only if they are needed. So a session that didn't need a container right away didn't wait for one. Inference could start as soon as the orchestration layer pulled pending events from the session log. Using this architecture, our p50 TTFT dropped roughly 60% and p95 dropped over 90%. Scaling to many brains just meant starting many stateless harnesses, and connecting them to hands only if needed.</p>",
        "kind": "text",
        "cn": "<p>将大脑与双手解耦后，容器仅在需要时才由大脑通过工具调用 <code>(execute(name, input) -&gt; string)</code> 来调配。因此，不需要立即使用容器的会话无需等待。只要编排层从会话日志中拉取到待处理事件，推理便可立即开始。采用这种架构后，我们的 p50 TTFT 下降了约 60%，p95 下降了超过 90%。扩展到多大脑，只意味着启动多个无状态的 harness，并仅在需要时才将它们与双手相连。</p>"
      },
      {
        "en": "<p><strong>Many hands.</strong> We also wanted the ability to connect each brain to many hands. In practice, this means Claude must reason about many execution environments and decide where to send work—a harder cognitive task than operating in a single shell. We started with the brain in a single container because earlier models weren't capable of this. As intelligence scaled, the single container became the limitation instead: when that container failed, we lost state for every hand that the brain was reaching into.</p>",
        "kind": "text",
        "cn": "<p><strong>多双手。</strong>我们还希望能让每个大脑连接多双手。在实践中，这意味着 Claude 必须在多个执行环境中进行推理，并决定将工作发送到哪里——这比在单一 shell 中操作的认知负担要重得多。最初将大脑放入单个容器，是因为早期模型还没有这种能力。随着智能水平的提升，单个容器反而成为了瓶颈：一旦该容器出现故障，大脑正在操控的所有双手的状态都会一并丢失。</p>"
      },
      {
        "en": "<p>Decoupling the brain from the hands makes each hand a tool, <code>execute(name, input) -&gt; string</code>: a name and input go in, and a string is returned. That interface supports any custom tool, any MCP server, and our own tools. The harness doesn't know whether the sandbox is a container, a phone, or a Pokemon emulator. And because no hand is coupled to any brain, brains can pass hands to one another.</p>",
        "kind": "text",
        "cn": "<p>将大脑与双手解耦，使得每双手都成为一个工具：<code>execute(name, input) -&gt; string</code>——名称和输入传入，字符串返回。这一接口支持任何自定义工具、任何 MCP 服务器，以及我们自己的工具。Harness 不会知道沙箱究竟是一个容器、一台手机，还是一个 Pokemon 模拟器。而且由于没有任何一双手与某个大脑耦合，大脑之间可以相互传递双手。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Many brains, many hands\" src=\"https://aka.doubaocdn.com/s/OonN1wZqTc\" loading=\"lazy\" /><figcaption>Many brains, many hands</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Conclusion</h2>",
        "kind": "heading",
        "cn": "<h2>结论</h2>"
      },
      {
        "en": "<p>The challenge we faced is an old one: how to design a system for &quot;programs as yet unthought of.&quot; Operating systems have lasted decades by virtualizing the hardware into abstractions general enough for programs that didn't exist yet. With Managed Agents, we aimed to design a system that accommodates future harnesses, sandboxes, or other components around Claude.</p>",
        "kind": "text",
        "cn": "<p>我们面临的挑战是一个古老的问题：如何为\"尚未被构想出的程序\"设计一个系统。操作系统之所以能延续数十年，正是因为它将硬件虚拟化为足够通用的抽象层，能够适配当时尚不存在的程序。对于 Managed Agents，我们的目标是设计一个能够容纳未来 harness、沙箱或 Claude 周围其他组件的系统。</p>"
      },
      {
        "en": "<p>Managed Agents is a meta-harness in the same spirit, unopinionated about the <em>specific</em> harness that Claude will need in the future. Rather, it is a system with general interfaces that allow many different harnesses. For example, Claude Code is an excellent harness that we use widely across tasks. We've also shown that task-specific agent harnesses excel in narrow domains. Managed Agents can accommodate any of these, matching Claude's intelligence over time.</p>",
        "kind": "text",
        "cn": "<p>Managed Agents 是同样精神下的一个元 harness，它对未来 Claude 所需的<em>具体</em> harness 形态不做主张，而是一个提供通用接口、能容纳多种不同 harness 的系统。例如，Claude Code 是一个我们在各类任务中广泛使用的优秀 harness；我们也已证明，面向特定任务的专用智能体 harness 在垂直领域表现出色。Managed Agents 可以容纳上述任何一种，并随着 Claude 智能水平的提升持续匹配。</p>"
      },
      {
        "en": "<p>Meta-harness design means being opinionated about the interfaces around Claude: we expect that Claude will need the ability to manipulate state (the session) and perform computation (the sandbox). We also expect that Claude will require the ability to scale to many brains and many hands. We designed the interfaces so that these can be run reliably and securely over long time horizons. But we make no assumptions about the number or location of brains or hands that Claude will need.</p>",
        "kind": "text",
        "cn": "<p>元 harness 的设计意味着对 Claude 周围接口有明确主张：我们预期 Claude 将需要操控状态（会话）和执行计算（沙箱）的能力，也将需要扩展到多大脑和多双手的能力。我们设计这些接口，使其能够在长时间跨度上可靠、安全地运行。但对于 Claude 将需要多少大脑或双手，以及它们将位于何处，我们不做任何假设。</p>"
      },
      {
        "en": "<h2>Acknowledgements</h2>",
        "kind": "heading",
        "cn": "<h2>致谢</h2>"
      },
      {
        "en": "<p>Written by Lance Martin, Gabe Cemaj, and Michael Cohen. Thanks to Nodir Turakulov and Jeremy Fox for helpful conversations on these topics. Special thanks to the Agents API team and Jake Eaton for their contributions.</p>",
        "kind": "text",
        "cn": "<p>作者：Lance Martin、Gabe Cemaj 和 Michael Cohen。感谢 Nodir Turakulov 和 Jeremy Fox 在相关话题上的宝贵交流。特别感谢 Agents API 团队和 Jake Eaton 的贡献。</p>"
      }
    ]
  },
  {
    "id": 7,
    "title": "How we contain Claude across products",
    "date": "2026-05-25",
    "diff": "★★★",
    "time": "25分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/how-we-contain-claude",
    "vocab": [
      {
        "en": "virtual machine",
        "cn": "虚拟机",
        "ex": "To enable this, our first version of Claude Cowork ran inside a full virtual machine using the platform's vendor hypervi"
      },
      {
        "en": "containment",
        "cn": "隔离控制",
        "ex": "Here's what we've learned building containment for claude.ai, Claude Code, and Cowork."
      },
      {
        "en": "trust",
        "cn": "信任",
        "ex": "And as users move to multi-agent systems, this approach is also much less likely to be an effective oversight strategy. "
      },
      {
        "en": "human-in-the-loop",
        "cn": "人在环路",
        "ex": "The first is to supervise the agent's behavior via a human-in-the-loop."
      },
      {
        "en": "threat model",
        "cn": "威胁模型",
        "ex": "This also makes claude.ai subject to a more traditional threat model."
      },
      {
        "en": "ephemeral container",
        "cn": "临时容器",
        "ex": "We arrived at each design gradually, after finding the balance between the capabilities we need from the agent and the d"
      },
      {
        "en": "local VM",
        "cn": "本地虚拟机",
        "ex": "In a world where agents read everything, the investigation tooling is also an attack surface.) ### Pattern 3: The local "
      },
      {
        "en": "Linux kernel",
        "cn": "Linux 内核",
        "ex": "The VM has its own Linux kernel, its own filesystem, and its own process table."
      },
      {
        "en": "benchmark",
        "cn": "基准测试",
        "ex": "At Anthropic, we've seen Claude models \"helpfully\" escape a sandbox in order to complete a task, examine git history to "
      },
      {
        "en": "worker",
        "cn": "工作单元",
        "ex": "As a result, the human-in-the-loop sandbox strategy may not transfer; a non-technical knowledge worker shouldn't be expe"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>Anthropic 在不同产品里隔离 Claude 的执行能力。阅读重点是当模型能运行代码、访问文件或使用浏览器时，产品如何用容器、虚拟机和网络限制来控制风险。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Three types of risk, three components of defense</strong></div><p>把 agent 风险拆成几类，并对应到产品需要提供的防护组件。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>Patterns for containing agents</strong></div><p>比较几种隔离 agent 的产品模式，从临时容器到人工确认沙箱再到本地虚拟机。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Pattern 1: The ephemeral container (claude.ai code execution)</strong></div><p>介绍临时容器模式：任务结束后环境销毁，降低持久化风险。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Pattern 2: The human-in-the-loop sandbox (Claude Code)</strong></div><p>介绍人工在环沙箱：Claude 可以准备操作，但关键动作仍需要用户确认。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Pattern 3: The local VM (Claude Cowork)</strong></div><p>介绍本地虚拟机模式：把高权限操作隔离在受控环境里，减少对主机的直接影响。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>Three types of risk, three components of defense <span class=\"en\">风险</span></h4><p><strong>本文语境：</strong>Security risks to agents fall into one of three categories: User misuse: A user—either maliciously or through carelessness—directs the agent to do something harmful.</p><p><strong>英文表达：先把 risk 理解成本文里的功能角色，而不是只背成“风险”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Patterns for containing agents <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>Focusing on the environment layer, we describe three isolation patterns and how they're tailored for each Claude platform—claude.ai, Claude Code, and Cowork.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>智能体的价值来自可观察的环境反馈和清晰停止条件，不是把所有步骤都交给模型自由发挥。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Pattern 1: The ephemeral container (claude.ai code execution) <span class=\"en\">临时容器</span></h4><p><strong>本文语境：</strong>Though best known as a chat interface, claude.ai also writes and runs code, generates files, and calls connectors.</p><p><strong>英文表达：先把 ephemeral container 理解成本文里的功能角色，而不是只背成“临时容器”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Pattern 2: The human-in-the-loop sandbox (Claude Code) <span class=\"en\">人在环路</span></h4><p><strong>本文语境：</strong>Claude Code runs on a user's machine and has access to their filesystem, shell, and network.</p><p><strong>英文表达：先把 human-in-the-loop 理解成本文里的功能角色，而不是只背成“人在环路”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Pattern 3: The local VM (Claude Cowork) <span class=\"en\">本地虚拟机</span></h4><p><strong>本文语境：</strong>Claude Cowork runs on a user's desktop with access to a workspace folder selected by the user.</p><p><strong>英文表达：先把 local VM 理解成本文里的功能角色，而不是只背成“本地虚拟机”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《How we contain Claude across products》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 virtual machine（虚拟机） / containment（隔离控制） / trust（信任） / human-in-the-loop（人在环路） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>As agents grow more capable, so does their potential blast radius. The engineering question is how to cap it. Here's what we've learned building containment for claude.ai, Claude Code, and Cowork.</p>",
        "kind": "text",
        "cn": "<p>随着智能体能力的增强，其潜在的影响范围也随之扩大。工程上的核心问题在于如何为其划定上限。以下是我们在为 claude.ai、Claude Code 和 Cowork 构建隔离控制系统过程中积累的经验。</p>"
      },
      {
        "en": "<p>Twelve months ago, we'd have rejected out of hand the idea of granting Claude access sufficient to take down an internal Anthropic service. Today that level of access is routine, and Anthropic developers are more productive for it. The risk of these deployments has two components: how likely a failure is, and how much damage one could do. Progress on safeguards and model training has steadily driven down the first; the second—the theoretical blast radius—only grows as capabilities and access expand. Yet as agents become capable of doing work that once required a person or even a team, the cost of <em>not</em> deploying grows large enough that the risk-reward calculation tips heavily toward adoption, as long as products can be made safe. The engineering question becomes how to cap the blast radius.</p>",
        "kind": "text",
        "cn": "<p>一年前，我们还会断然拒绝向 Claude 授予足以破坏 Anthropic 内部服务的访问权限。如今，这种级别的访问已是家常便饭，Anthropic 的开发者也因此获得了更高的生产效率。此类部署的风险由两个维度构成：故障的发生概率，以及故障可能造成的破坏程度。安全保障和模型训练的持续进步，正在稳步压低前者；而后者——理论上的影响范围——则随着能力和访问权限的扩大而只增不减。然而，随着智能体能够完成过去需要一个人甚至一个团队才能承担的工作，<em>不</em>部署的代价也变得高昂，足以让风险收益的计算结果大幅倒向采纳——前提是产品本身能够足够安全。工程问题由此转化为：如何为影响范围划定上限。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"When bounds can be placed on the relative damage of an autonomous agent—such as through control over its environment—high-utility capabilities can motivate deployment. Claude Mythos Preview is an example of a model whose blast radius was deemed too high to ship in April 2026. However, we expect broader release of models with similar levels of capability to become appropriate as defenders harden critical systems and safeguards mature—even though some risk will always remain. Model capability is an important factor in the total risk of an agent's deployment.\" src=\"https://aka.doubaocdn.com/s/wsSB1wZqTc\" loading=\"lazy\" /><figcaption>When bounds can be placed on the relative damage of an autonomous agent—such as through control over its environment—high-utility capabilities can motivate deployment. Claude Mythos Preview is an example of a model whose blast radius was deemed too high to ship in April 2026. However, we expect broader release of models with similar levels of capability to become appropriate as defenders harden critical systems and safeguards mature—even though some risk will always remain. Model capability is an important factor in the total risk of an agent's deployment.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>There are broadly two ways to do this.</p>",
        "kind": "text",
        "cn": "<p>大体上有两种方式来实现这一目标。</p>"
      },
      {
        "en": "<p>The first is to supervise the agent's behavior via a human-in-the-loop. Claude Code previously protected against agents taking unintended actions by asking users for permission at each turn. Theoretically that works, but we've found the approach to be fallible. Our telemetry showed users approved roughly 93% of permission prompts. The more approvals a user sees, the less attention they pay to each, becoming over time much less diligent in their supervision. We recently built Claude Code auto mode, which <a href=\"https://www.anthropic.com/engineering/claude-code-auto-mode\" rel=\"noreferrer\" target=\"_blank\">automates safer approvals</a> in order to reduce this approval fatigue. Still, vulnerabilities remain—any probabilistic defense has a non-zero miss rate.&lt;sup&gt;1&lt;/sup&gt;</p>",
        "kind": "text",
        "cn": "<p>第一种是通过人在环路（human-in-the-loop）来监督智能体的行为。Claude Code 此前通过在每一步操作前向用户申请权限来防止智能体执行非预期操作。理论上这行得通，但我们发现这种方法存在漏洞。我们的遥测数据显示，用户批准了约 93% 的权限提示。用户看到的批准请求越多，对每一条的关注就越少，随着时间推移，监督的严格程度会逐渐下降。为此，我们近期构建了 Claude Code 自动模式，通过<a href=\"https://www.anthropic.com/engineering/claude-code-auto-mode\" rel=\"noreferrer\" target=\"_blank\">自动化处理更安全的审批</a>来缓解批准疲劳。尽管如此，漏洞依然存在——任何概率性防御都有非零的漏报率。<sup>1</sup></p>"
      },
      {
        "en": "<p>The second approach to capping the blast radius—and the focus of much of this post—is containment. Rather than supervising what the agent does, we supervise what it's <em>able</em> to do by enforcing access boundaries through, for example, sandboxes, virtual machines, and egress controls. This is where Anthropic engineering has devoted the most effort, and also where many of the most surprising security failures have occurred.</p>",
        "kind": "text",
        "cn": "<p>限制影响范围的第二种方法——也是本文重点讨论的——是隔离控制（containment）。我们不是监督智能体<em>做了什么</em>，而是通过沙箱、虚拟机和出口控制等手段，约束它<em>能够</em>做什么，从而在访问边界层面施加管控。这也是 Anthropic 工程团队投入最多精力的地方，同时也是发生过最多意外安全故障的地方。</p>"
      },
      {
        "en": "<p>Over the past two years, we've shipped three primary agentic products: <a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a>, Claude Code, and Claude Cowork. Each serves a different audience, requiring a different containment architecture. This article shares what's held up, what's broken, and what we've learned about agent security along the way.</p>",
        "kind": "text",
        "cn": "<p>过去两年，我们推出了三款主要的智能体产品：<a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a>、Claude Code 和 Claude Cowork。每款产品面向不同的用户群体，因而需要不同的隔离架构。本文将分享哪些方法经受住了考验、哪些出现了问题，以及我们在智能体安全领域积累的经验。</p>"
      },
      {
        "en": "<h2>Three types of risk, three components of defense</h2>",
        "kind": "heading",
        "cn": "<h2>三类风险，三层防御组件</h2>"
      },
      {
        "en": "<p>Security risks to agents fall into one of three categories:</p>",
        "kind": "text",
        "cn": "<p>智能体面临的安全风险可归为三类：</p>"
      },
      {
        "en": "<p><strong>User misuse:</strong> A user—either maliciously or through carelessness—directs the agent to do something harmful. This includes everything from asking the agent to bypass a check they find annoying, to running a destructive command they don't understand, to specifying intentional harm.</p>",
        "kind": "text",
        "cn": "<p><strong>用户滥用：</strong>用户——无论出于恶意还是疏忽——指使智能体执行有害操作。这涵盖了从要求智能体绕过某个令其不便的检查，到执行一条用户并不理解的破坏性命令，乃至明确出于恶意的指令，各种情形。</p>"
      },
      {
        "en": "<p><strong>Model misbehavior:</strong> The agent takes a harmful action no one asked for. As our models have improved, they have become more aligned on most behavior evaluations, but this doesn't mean risk necessarily shrinks. Less capable models are more likely to misread a situation and make obvious errors. More capable models make fewer mistakes, but they're also better at finding unexpected paths to a goal, often by routing around restrictions nobody thought to write down.</p>",
        "kind": "text",
        "cn": "<p><strong>模型失控行为：</strong>智能体在没有任何人要求的情况下，自行采取了有害操作。随着我们的模型持续改进，它们在大多数行为评估上的对齐程度不断提高，但这并不意味着风险一定随之缩小。能力较弱的模型更容易误判情况并犯下明显错误；能力更强的模型虽然失误更少，但它们同样更擅长寻找实现目标的出人意料的路径，往往能绕过那些没人想到要写下来的限制。</p>"
      },
      {
        "en": "<p>At Anthropic, we've seen Claude models <a href=\"https://red.anthropic.com/2026/mythos-preview/\" rel=\"noreferrer\" target=\"_blank\">&quot;helpfully&quot; escape a sandbox</a> in order to complete a task, examine git history to <a href=\"https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf\" rel=\"noreferrer\" target=\"_blank\">find answers to a coding test</a>, and spontaneously identify the benchmark it was being run on in order to <a href=\"https://www.anthropic.com/engineering/eval-awareness-browsecomp\" rel=\"noreferrer\" target=\"_blank\">decrypt its answer key</a>. Each model brings a new set of capabilities that are sometimes put to work in unexpected ways.</p>",
        "kind": "text",
        "cn": "<p>在 Anthropic 内部，我们曾见到 Claude 模型为了完成任务而<a href=\"https://red.anthropic.com/2026/mythos-preview/\" rel=\"noreferrer\" target=\"_blank\">\"热心地\"逃出沙箱</a>，通过查阅 git 历史记录来<a href=\"https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf\" rel=\"noreferrer\" target=\"_blank\">寻找编程题答案</a>，以及自主识别出正在运行的基准测试，进而<a href=\"https://www.anthropic.com/engineering/eval-awareness-browsecomp\" rel=\"noreferrer\" target=\"_blank\">解密其答案键</a>。每个新模型都会带来一套新的能力，这些能力有时会以出人意料的方式被调用。</p>"
      },
      {
        "en": "<p><strong>External attackers:</strong> The agent is attacked through external vectors such as tools, files, or network access. This category includes both prompt injection and conventional attacks on the agent's runtime, orchestration layer, or proxy.</p>",
        "kind": "text",
        "cn": "<p><strong>外部攻击者：</strong>智能体通过工具、文件或网络访问等外部向量遭受攻击。这一类别涵盖提示词注入攻击，以及针对智能体运行时环境、编排层或代理的传统攻击手段。</p>"
      },
      {
        "en": "<p>When building containment and defense systems, we apply defenses to three main components:</p>",
        "kind": "text",
        "cn": "<p>在构建隔离控制和防御系统时，我们将防御措施应用于三个主要组件：</p>"
      },
      {
        "en": "<p><strong>The environment in which the agent runs.</strong> We constrain where and how an agent can act with process sandboxes, VMs, filesystem boundaries, and egress controls. The goal is to set a hard boundary on what an agent can reach. For example, if credentials never enter the sandbox, they can't be exfiltrated, regardless of whether the cause is a user, a model finding a &quot;creative&quot; path, or an attacker.</p>",
        "kind": "text",
        "cn": "<p><strong>智能体运行所在的环境。</strong>我们通过进程沙箱、虚拟机、文件系统边界和出口控制来约束智能体的行为范围。目标是为智能体的可触达范围划定一道硬边界。例如，一旦凭据从不进入沙箱，无论原因是用户行为、模型找到了\"创意性\"路径，还是攻击者的介入，凭据都无法被窃取。</p>"
      },
      {
        "en": "<p>A tight perimeter also means you can relax oversight. Claude Code's <a href=\"https://code.claude.com/docs/en/devcontainer\" rel=\"noreferrer\" target=\"_blank\">reference devcontainer</a> exists precisely so that the agent can run unattended, without per-action approvals.</p>",
        "kind": "text",
        "cn": "<p>严格的边界也意味着可以放宽监督力度。Claude Code 的<a href=\"https://code.claude.com/docs/en/devcontainer\" rel=\"noreferrer\" target=\"_blank\">参考开发容器</a>正是为此而设计，让智能体能够无人值守地运行，无需对每步操作逐一审批。</p>"
      },
      {
        "en": "<p><strong>The model the agent consults.</strong> The mechanisms here include system prompts, classifiers, probes, and training modifications. Because models are probabilistic, these shape only what the agent <em>tends</em> to do, not what it is theoretically capable of doing.</p>",
        "kind": "text",
        "cn": "<p><strong>智能体所使用的模型。</strong>这一层的防御机制包括系统提示词、分类器、探针和训练层面的修改。由于模型具有概率性，这些手段只能影响智能体<em>倾向于</em>做什么，而无法约束它理论上<em>能够</em>做什么。</p>"
      },
      {
        "en": "<p>These defenses are strong. On Gray Swan's Agent Red Teaming benchmark, which tests susceptibility to prompt injection, <a href=\"https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf\" rel=\"noreferrer\" target=\"_blank\">Claude Opus 4.7</a> holds attack success to roughly 0.1% on single attempts, and around 5–6% after 100 adaptive attempts. Claude Code auto mode catches roughly 83% of overeager behaviors <a href=\"https://www.anthropic.com/engineering/claude-code-auto-mode\" rel=\"noreferrer\" target=\"_blank\">before they execute</a>. Yet even with best-in-class defenses, protection in the model layer will never be 100% effective, which is why it can't stand alone.</p>",
        "kind": "text",
        "cn": "<p>这些防御措施效果显著。在 Gray Swan 的智能体红队测试基准（测试对提示词注入的抵抗能力）上，<a href=\"https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf\" rel=\"noreferrer\" target=\"_blank\">Claude Opus 4.7</a> 在单次尝试中将攻击成功率控制在约 0.1%，经过 100 次自适应攻击后约为 5–6%。Claude Code 自动模式在执行前捕获了约 83% 的过度积极行为。然而即便是业界领先的防御，模型层面的保护也永远无法达到 100% 的有效率，这正是它不能单独依赖的原因。</p>"
      },
      {
        "en": "<p><strong>The external content the agent can reach.</strong> MCP servers, third-party plugins, and web search tools all feed content into the agent's context from sources you don't control. An audited connector isn't the same as audited data—a GitHub connector, for instance, can load a poisoned README straight into the model's context despite passing malware checks. Granularly limiting tool permissions can help limit the blast radius. An agent with read-only DB access, for instance, can be deployed far more broadly than one that writes to prod.</p>",
        "kind": "text",
        "cn": "<p><strong>智能体可以访问的外部内容。</strong>MCP 服务器、第三方插件和网络搜索工具都会将来自不受你控制的来源的内容注入智能体的上下文。经过审计的连接器并不等同于经过审计的数据——例如，一个 GitHub 连接器可以将一个包含恶意注入内容的 README 直接加载到模型上下文中，尽管它通过了恶意软件检查。对工具权限进行细粒度限制，有助于缩小影响范围。例如，一个只有数据库只读访问权限的智能体，其部署安全范围远比有写入生产库权限的智能体宽泛得多。</p>"
      },
      {
        "en": "<p>Defenses should overlap and complement each other. When environmental defenses aren't available, the model layer has to pick up the slack (this is precisely what Claude Code's <a href=\"https://claude.com/blog/auto-mode\" rel=\"noreferrer\" target=\"_blank\">auto mode</a> is designed for). Locally, the environment and model defenses can guard against malicious tool outputs, but defenses can be added higher up the chain by limiting the tool's capabilities and access.</p>",
        "kind": "text",
        "cn": "<p>各层防御应相互叠加、互为补充。当环境层防御不可用时，模型层就必须承担起这部分职责（这正是 Claude Code <a href=\"https://claude.com/blog/auto-mode\" rel=\"noreferrer\" target=\"_blank\">自动模式</a>的设计初衷）。在本地，环境层和模型层防御可以共同抵御恶意工具输出；而通过限制工具的能力和访问范围，也可以在更高层次上加筑防线。</p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Three components to defend: the model, the environment in which it runs, and the external content the agent can reach.\" src=\"https://aka.doubaocdn.com/s/Y4QO1wZqTc\" loading=\"lazy\" /><figcaption>Three components to defend: the model, the environment in which it runs, and the external content the agent can reach.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Patterns for containing agents</h2>",
        "kind": "heading",
        "cn": "<h2>智能体隔离模式</h2>"
      },
      {
        "en": "<p>Focusing on the environment layer, we describe three isolation patterns and how they're tailored for each Claude platform—<a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a>, Claude Code, and Cowork. We arrived at each design gradually, after finding the balance between the capabilities we need from the agent and the degree of intervention required from the user.</p>",
        "kind": "text",
        "cn": "<p>聚焦于环境层，我们描述三种隔离模式，以及它们如何针对各个 Claude 平台——<a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a>、Claude Code 和 Cowork——进行定制化设计。我们是在逐步摸索中形成每种设计的，关键在于找到智能体所需能力与用户需要介入程度之间的平衡。</p>"
      },
      {
        "en": "<h3>Pattern 1: The ephemeral container (claude.ai code execution)</h3>",
        "kind": "heading",
        "cn": "<h3>模式一：临时容器（claude.ai 代码执行）</h3>"
      },
      {
        "en": "<p>Though best known as a chat interface, claude.ai also writes and runs code, generates files, and calls connectors. When Claude runs code inside claude.ai, it does so in a <a href=\"https://en.wikipedia.org/wiki/GVisor\" rel=\"noreferrer\" target=\"_blank\">gVisor</a> container on isolated infrastructure. The agent is entirely server-side; no code runs on the local machine, and the filesystem is ephemeral (per-session). The blast radius is minimal, but so is the ceiling on what Claude can do—there's no persistent workspace and no access to the user's filesystem.</p>",
        "kind": "text",
        "cn": "<p>尽管 claude.ai 最广为人知的是聊天界面，但它同样支持编写和运行代码、生成文件以及调用连接器。当 Claude 在 claude.ai 中运行代码时，它在隔离基础设施上的 <a href=\"https://en.wikipedia.org/wiki/GVisor\" rel=\"noreferrer\" target=\"_blank\">gVisor</a> 容器内执行。智能体完全运行于服务端；没有任何代码在本地机器上执行，文件系统是临时的（每个会话独立）。影响范围极小，但 Claude 的能力上限也因此受限——没有持久化工作区，也无法访问用户的本地文件系统。</p>"
      },
      {
        "en": "<p>This also makes <a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a> subject to a more traditional threat model. We're not protecting user machines from agents; we're protecting our own infrastructure and each tenant from one another. Our pre-launch work for <a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a> was dominated by traditional security work like network configuration, internal service auth, and orchestration.</p>",
        "kind": "text",
        "cn": "<p>这也使得 <a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a> 面对的是更传统意义上的威胁模型。我们保护的不是用户机器免遭智能体侵害，而是保护我们自己的基础设施以及租户之间的相互隔离。claude.ai 上线前的大量工作都集中在传统安全领域，如网络配置、内部服务鉴权和编排层安全。</p>"
      },
      {
        "en": "<p>That work reinforced the oldest lesson in security: the weakest layer is the one you built yourself. gVisor and <a href=\"https://en.wikipedia.org/wiki/Seccomp\" rel=\"noreferrer\" target=\"_blank\">seccomp</a> have been hardened against well-resourced adversaries for far longer than agentic AI has existed, so the review effort went into the newer pieces we'd built around them. We'll come back to this later, since our custom proxy is also the piece that broke in our most consequential incident.</p>",
        "kind": "text",
        "cn": "<p>这些工作印证了安全领域最古老的教训：最薄弱的环节永远是你自己构建的那层。gVisor 和 <a href=\"https://en.wikipedia.org/wiki/Seccomp\" rel=\"noreferrer\" target=\"_blank\">seccomp</a> 在应对资源充裕的攻击者方面已经历了远比智能体 AI 更长时间的磨砺，因此评审工作的重点放在了我们在它们之上构建的新组件上。这一点值得特别提及，因为我们的自定义代理恰恰也是在最严重的一次安全事件中出了问题的地方。</p>"
      },
      {
        "en": "<h3>Pattern 2: The human-in-the-loop sandbox (Claude Code)</h3>",
        "kind": "heading",
        "cn": "<h3>模式二：人在环路沙箱（Claude Code）</h3>"
      },
      {
        "en": "<p>Claude Code runs on a user's machine and has access to their filesystem, shell, and network. Without this, coding agents have limited usefulness, so it's imperative to find a way to grant that access safely.</p>",
        "kind": "text",
        "cn": "<p>Claude Code 运行在用户自己的机器上，能够访问其文件系统、shell 和网络。若无法实现这一点，编程智能体的实用价值将大打折扣，因此找到一种安全授权的方式至关重要。</p>"
      },
      {
        "en": "<p>One approach is to rely on a human-in-the-loop. This is only a tractable solution for Claude Code because the average user is a developer who's familiar with coding environments: they can read bash, they understand what rm -rf does, and they already run npm install from untrusted sources several times a week. All that means that when an &quot;allow this&quot; dialog pops up, they are highly likely to have the expertise to accurately evaluate what the agent is attempting to do and the risk involved. Given this, Claude Code launched with the simplest possible defense: allow reads, require approval for write, bash, and network access.</p>",
        "kind": "text",
        "cn": "<p>一种方案是依赖人在环路。这种方案对于 Claude Code 而言之所以可行，是因为其典型用户是开发者，对编程环境已非常熟悉：他们能看懂 bash 脚本，清楚 <code>rm -rf</code> 意味着什么，并且每周都会从不可信来源多次运行 <code>npm install</code>。这意味着当弹出\"是否允许此操作\"的对话框时，他们极有可能具备正确评估智能体操作意图及其风险所需的专业知识。基于此，Claude Code 以最简单的防御策略发布：允许读取操作，对写入、bash 和网络访问要求审批。</p>"
      },
      {
        "en": "<p>However, as mentioned, approval fatigue showed <a href=\"https://www.reddit.com/r/ClaudeAI/comments/1rru8zw/just_picked_up_a_new_keyboard_cant_wait_to_write/\" rel=\"noreferrer\" target=\"_blank\">up within weeks.</a> Ironically, this meant that a feature originally designed to provide oversight could arguably have the opposite effect—some users might simply stop paying attention. As a first step to mitigate incautious approvals, we shipped an OS-level sandbox (Seatbelt on macOS, bubblewrap on Linux) that hardens the boundary: reads are allowed, writes are allowed inside the workspace, but network is denied by default. Within the sandbox, the agent runs largely without interruption. The result was an 84% reduction in permission prompts, and we <a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">open-sourced the runtime</a>, so the boundary is auditable.</p>",
        "kind": "text",
        "cn": "<p>然而，如前所述，批准疲劳在上线后数周内便<a href=\"https://www.reddit.com/r/ClaudeAI/comments/1rru8zw/just_picked_up_a_new_keyboard_cant_wait_to_write/\" rel=\"noreferrer\" target=\"_blank\">出现了</a>。讽刺的是，这意味着一个原本旨在提供监督的功能，反而可能产生相反的效果——部分用户可能根本不再关注自己批准的内容。作为第一步缓解措施，我们上线了操作系统级沙箱（macOS 上的 Seatbelt，Linux 上的 bubblewrap），从而强化边界：允许读取操作，允许在工作区内写入，但默认禁止网络访问。在沙箱内，智能体基本可以不受中断地运行。结果是权限提示减少了 84%，同时我们<a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">开源了该运行时</a>，使边界的实现完全可审计。</p>"
      },
      {
        "en": "<p>Our <a href=\"https://www.anthropic.com/news/measuring-agent-autonomy\" rel=\"noreferrer\" target=\"_blank\">anonymized usage data</a> also showed that experienced users auto-approve roughly twice as often as new users, but they also interrupt the agent mid-execution more frequently. Instead of gating individual steps, experienced users are more likely to supervise the agent only when it goes off track. While this may be a natural evolution in how people prefer to work with agents, this too is fallible, requiring users to be technical and attentive enough to notice drift in the first place. As model capabilities improve and agents begin writing increasingly ambitious bash, it becomes harder to notice any such drift. And as users move to multi-agent systems, this approach is also much less likely to be an effective oversight strategy.</p>",
        "kind": "text",
        "cn": "<p>我们的<a href=\"https://www.anthropic.com/news/measuring-agent-autonomy\" rel=\"noreferrer\" target=\"_blank\">匿名化使用数据</a>还显示，有经验的用户自动批准的频率约为新用户的两倍，但他们也更频繁地在执行过程中中断智能体。经验丰富的用户更倾向于只在智能体偏离轨道时才介入监督，而非对每个步骤设门槛。尽管这可能是人们与智能体协作方式的自然演变，但这种方式同样存在缺陷——它要求用户既具备技术能力又足够专注，才能察觉到偏离。随着模型能力的提升，智能体开始编写越来越复杂的 bash 脚本，察觉这类偏离变得愈发困难。而随着用户迁移到多智能体系统，这种监督策略的有效性也将大打折扣。</p>"
      },
      {
        "en": "<h4>Risk we missed: Everything before the trust dialog</h4>",
        "kind": "heading",
        "cn": "<h4>我们忽略的风险：信任对话框之前的一切</h4>"
      },
      {
        "en": "<p>Between mid-2025 and January 2026, we received reports of vulnerabilities in Claude Code through our responsible disclosure program. Three of these vulnerabilities targeted code that executes <em>before</em> the user has consented to anything. To understand how this is possible, consider the most direct case: a developer clones a repository to review a pull request, and that repository contains a .claude/settings.json which defines a hook. Because Claude Code reads project settings during startup—before presenting the standard &quot;Do you trust this folder?&quot; prompt—the hook the attacker had authored and committed would execute automatically. The remaining cases looked structurally similar, in which input from the not-yet-trusted directory was parsed before the trust boundary had been established.</p>",
        "kind": "text",
        "cn": "<p>2025 年中至 2026 年 1 月期间，我们通过负责任披露计划收到了多份 Claude Code 安全漏洞报告。其中三个漏洞针对的是用户尚未同意任何操作<em>之前</em>就会执行的代码。要理解这是如何发生的，不妨看最直接的案例：开发者克隆了一个代码仓库以审查一个 Pull Request，而该仓库中包含一个 .claude/settings.json 文件，其中定义了一个钩子。由于 Claude Code 在启动时——在呈现标准的\"是否信任此文件夹？\"提示<em>之前</em>——就会读取项目配置，攻击者事先编写并提交的钩子就会被自动执行。其余几个案例在结构上与此类似：来自尚不受信任目录的输入在信任边界建立之前就已被解析。</p>"
      },
      {
        "en": "<p>The fix in each case had the same shape: defer parsing and execution of project-local configuration until after the user accepts the trust prompt. If you're building something similar, treat project-open, config-load, and localhost listeners the way you'd treat any inbound request from the internet. They shouldn't be implicitly trusted just because they feel local and arrive before the user has consented.</p>",
        "kind": "text",
        "cn": "<p>每个案例的修复方案都遵循同一思路：将项目本地配置的解析和执行推迟到用户接受信任提示之后。如果你在构建类似的系统，请以对待任何来自互联网的入站请求的方式来对待项目打开、配置加载和 localhost 监听器——不要因为它们\"感觉像本地操作\"且在用户同意之前就已到达，就对其隐式信任。</p>"
      },
      {
        "en": "<h4>Risk we missed: The user as an injection vector</h4>",
        "kind": "heading",
        "cn": "<h4>我们忽略的风险：用户作为注入向量</h4>"
      },
      {
        "en": "<p>In February 2026, during a controlled internal red-team exercise, a researcher successfully phished an employee into launching Claude Code with a malicious prompt. The phish looked like ordinary collaboration—a &quot;can you run this for me?&quot; email with a ready-to-paste prompt attached—and the prompt itself read like routine task instructions. But somewhere among the setup steps, it gently asked Claude to read ~/.aws/credentials, encode the contents, and POST them to an external endpoint. Across 25 retries of that prompt, Claude completed the exfiltration 24 times.</p>",
        "kind": "text",
        "cn": "<p>2026 年 2 月，在一次受控的内部红队演练中，一名研究员成功通过钓鱼攻击诱骗一名员工，使其启动了携有恶意提示词的 Claude Code。这次钓鱼攻击看起来就像普通的协作请求——一封\"能帮我运行这个吗？\"的邮件，附带一段可直接粘贴的提示词——而提示词本身读起来也像是例行任务指令。但在一系列准备步骤中，它不动声色地要求 Claude 读取 ~/.aws/credentials，对内容进行编码，然后 POST 到一个外部端点。在对该提示词进行 25 次重试的测试中，Claude 有 24 次完成了数据泄露操作。</p>"
      },
      {
        "en": "<p>This is a <em>direct</em> prompt injection—the attacker's instructions arrived through the user, not through tool output or fetched content. Our model-layer defenses anchor on user intent—when the user is the one typing the instruction, there's nothing anomalous for a classifier to catch. A human contractor handed the same script would have done the same thing.</p>",
        "kind": "text",
        "cn": "<p>这是一次<em>直接</em>提示词注入——攻击者的指令通过用户传递，而非来自工具输出或获取的内容。我们的模型层防御以用户意图为基准——当用户本人就是打字输入指令的那个人时，分类器没有任何异常可捕获。一个拿到相同脚本的人类承包商，也会做出同样的事情。</p>"
      },
      {
        "en": "<p>The only defense that holds in this situation is the environment, specifically egress controls that block the POST regardless of intent and filesystem boundaries that keep ~/.aws out of reach in the first place.</p>",
        "kind": "text",
        "cn": "<p>在这种情况下，唯一有效的防御是环境层，具体而言是出口控制——无论意图如何，拦截那个 POST 请求——以及文件系统边界——从一开始就将 ~/.aws 置于不可触达之处。</p>"
      },
      {
        "en": "<p>(When we shared the working prompt in internal Slack for discussion, someone pointed out that some internal agents <em>read</em> Slack. The payload was now ambient. We added a <a href=\"https://www.fortinet.com/resources/cyberglossary/what-is-canary-in-cybersecurity\" rel=\"noreferrer\" target=\"_blank\">canary string</a> to the thread so we'd notice if anything picked it up. In a world where agents read everything, the investigation tooling is also an attack surface.)</p>",
        "kind": "text",
        "cn": "<p>（当我们在内部 Slack 上分享这个可复现的提示词供讨论时，有人指出某些内部智能体会<em>读取</em> Slack。有效载荷就此在环境中扩散。我们在帖子里加入了一个<a href=\"https://www.fortinet.com/resources/cyberglossary/what-is-canary-in-cybersecurity\" rel=\"noreferrer\" target=\"_blank\">金丝雀字符串</a>，以便在任何内容被拾取时能够察觉。在一个智能体无处不在的世界里，调查工具本身也是攻击面。）</p>"
      },
      {
        "en": "<h3>Pattern 3: The local VM (Claude Cowork)</h3>",
        "kind": "heading",
        "cn": "<h3>模式三：本地虚拟机（Claude Cowork）</h3>"
      },
      {
        "en": "<p>Claude Cowork runs on a user's desktop with access to a workspace folder selected by the user. Because the platform is built for general knowledge work, not software engineering, the average user is much less likely to be fluent in bash.</p>",
        "kind": "text",
        "cn": "<p>Claude Cowork 运行在用户的桌面端，能够访问用户选定的工作区文件夹。由于该平台面向通用知识工作，而非软件工程，其典型用户对 bash 命令往往并不熟悉。</p>"
      },
      {
        "en": "<p>As a result, the human-in-the-loop sandbox strategy may not transfer; a non-technical knowledge worker shouldn't be expected to judge bash incantations such as find . -name &quot;*.tmp&quot; -exec rm {} \\;. When approving an exception requires expertise the typical user doesn't have, admins should set a boundary that is absolute and always-on.</p>",
        "kind": "text",
        "cn": "<p>因此，人在环路沙箱策略在此可能并不适用；不能指望一位非技术背景的知识工作者去判断诸如 <code>find . -name \"*.tmp\" -exec rm {} \\;</code> 这样的 bash 命令。当批准例外情况所需的专业知识超出了普通用户的能力范围时，管理员应该设置一道绝对的、始终生效的边界。</p>"
      },
      {
        "en": "<p>To enable this, our first version of Claude Cowork ran inside a full virtual machine using the platform's vendor hypervisor (Apple's Virtualization framework on macOS, HCS on Windows). The VM has its own Linux kernel, its own filesystem, and its own process table. The user's selected workspace and .claude folder are mounted; nothing else on the host is visible. Credentials stay in the host's keychain and never enter the guest machine. This design protects against the possibility that Claude will, at some point, behave in a misaligned manner. A compromised Claude could still damage what's inside the workspace folder, so the architecture is designed to make sure that's the <em>only</em> thing it can reach (until the user adds connectors), and that the user controls what's mounted there.</p>",
        "kind": "text",
        "cn": "<p>为实现这一目标，我们第一版 Claude Cowork 在完整的虚拟机内运行，使用平台厂商的 hypervisor（macOS 上为 Apple 的虚拟化框架，Windows 上为 HCS）。该虚拟机有自己的 Linux 内核、独立的文件系统和进程表。用户选定的工作区以及 .claude 文件夹被挂载进来；主机上的其他内容一概不可见。凭据保存在主机的密钥链中，从不进入客户机。这一设计考虑到了 Claude 在某个时刻可能出现失对齐行为的可能性。即便是被攻破的 Claude 也仍然可能破坏工作区文件夹内的内容，因此整个架构的设计目标是确保那是它<em>唯一能够触达的地方</em>（直到用户主动添加连接器为止），并且由用户掌控挂载内容。</p>"
      }
    ]
  },
  {
    "id": 8,
    "title": "Demystifying evals for AI agents",
    "date": "2026-01-09",
    "diff": "★★★",
    "time": "25分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents",
    "vocab": [
      {
        "en": "evaluation",
        "cn": "评估",
        "ex": "Here's what's worked across a range of agent architectures and use cases in real-world deployment. ## The structure of a"
      },
      {
        "en": "grader",
        "cn": "评分器",
        "ex": "In a simple eval, an agent processes a prompt, and a grader checks if the output matches expectations."
      },
      {
        "en": "regression",
        "cn": "回归测试",
        "ex": "They evolved from manual grading to LLM graders with criteria defined by the product team and periodic human calibration"
      },
      {
        "en": "capability eval",
        "cn": "能力评估",
        "ex": "capability eval in practice"
      },
      {
        "en": "rubric",
        "cn": "评分标准",
        "ex": "Code-based graders | Methods | Strengths | Weaknesses | |---|---|---| | • String match checks (exact, regex, fuzzy, etc."
      },
      {
        "en": "computer use",
        "cn": "计算机使用",
        "ex": "Their compounding value is easy to miss given that costs are visible upfront while benefits accumulate later. ## How to "
      },
      {
        "en": "test suite",
        "cn": "测试套件",
        "ex": "SWE-bench Verified gives agents GitHub issues from popular Python repositories and grades solutions by running the test "
      },
      {
        "en": "debugging",
        "cn": "调试",
        "ex": "Absent evals, debugging is reactive: wait for complaints, reproduce manually, fix the bug, and hope nothing else regress"
      },
      {
        "en": "production",
        "cn": "生产环境",
        "ex": "Without them, it's easy to get stuck in reactive loops—catching issues only in production, where fixing one failure crea"
      },
      {
        "en": "judge",
        "cn": "裁判模型",
        "ex": "Code-based graders | Methods | Strengths | Weaknesses | |---|---|---| | • String match checks (exact, regex, fuzzy, etc."
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>Eval 不是神秘的分数，而是一套帮助团队判断模型能力、发现回归和比较方案的工程流程。阅读重点是样例集、评分标准、人工复核和自动化评估各自解决什么问题。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Introduction</strong></div><p>引入本文要解决的问题和评估对象，为后面的结构、方法和例子做铺垫。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The structure of an evaluation</strong></div><p>说明一次 eval 由任务样例、期望结果、评分方式和分析流程组成。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Why build evaluations?</strong></div><p>解释为什么要做 eval：它帮助团队发现能力边界、追踪回归并比较不同方案。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>How to evaluate AI agents</strong></div><p>说明评估 agent 时要看任务完成度、工具调用、稳定性和失败模式。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Types of graders for agents</strong></div><p>区分不同评分器类型，例如规则判断、模型裁判和人工复核。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Capability vs. regression evals</strong></div><p>区分能力评估和回归评估：前者看能不能做，后者看改动后有没有退步。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Evaluating coding agents</strong></div><p>说明评估 coding agent 时，测试、代码审查和任务完成标准都要纳入判断。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Evaluating conversational agents</strong></div><p>说明评估对话型 agent 时，要关注回答质量、指令遵循和多轮一致性。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>Introduction <span class=\"en\">评估</span></h4><p><strong>本文语境：</strong>Good evaluations help teams ship AI agents more confidently.</p><p><strong>英文表达：先把 evaluation 理解成本文里的功能角色，而不是只背成“评估”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>The structure of an evaluation <span class=\"en\">评估</span></h4><p><strong>本文语境：</strong>An evaluation (&quot;eval&quot;) is a test for an AI system: give an AI an input, then apply grading logic to its output to measure success.</p><p><strong>英文表达：先把 evaluation 理解成本文里的功能角色，而不是只背成“评估”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Why build evaluations? <span class=\"en\">评估</span></h4><p><strong>本文语境：</strong>When teams first start building agents, they can get surprisingly far through a combination of manual testing, dogfooding, and intuition.</p><p><strong>英文表达：先把 evaluation 理解成本文里的功能角色，而不是只背成“评估”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>How to evaluate AI agents <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>We see several common types of agents deployed at scale today, including coding agents, research agents, computer use agents, and conversational agents.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Types of graders for agents <span class=\"en\">评分器</span></h4><p><strong>本文语境：</strong>Agent evaluations typically combine three types of graders: code-based, model-based, and human.</p><p><strong>英文表达：先把 grader 理解成本文里的功能角色，而不是只背成“评分器”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>Capability vs. regression evals <span class=\"en\">回归测试</span></h4><p><strong>本文语境：</strong>Capability or &quot;quality&quot; evals ask, &quot;What can this agent do well?&quot; They should start at a low pass rate, targeting tasks the agent struggles with and giving teams a hill to climb.</p><p><strong>英文表达：先把 regression 理解成本文里的功能角色，而不是只背成“回归测试”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Demystifying evals for AI agents》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 evaluation（评估） / grader（评分器） / regression（回归测试） / capability eval（能力评估） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p><a href=\"https://www.anthropic.com/engineering\" rel=\"noreferrer\" target=\"_blank\">Engineering at Anthropic</a></p>",
        "kind": "text",
        "cn": "<p><a href=\"https://www.anthropic.com/engineering\" rel=\"noreferrer\" target=\"_blank\">Anthropic 工程团队</a></p>"
      },
      {
        "en": "<p>The capabilities that make agents useful also make them difficult to evaluate. The strategies that work across deployments combine techniques to match the complexity of the systems they measure.</p>",
        "kind": "text",
        "cn": "<p>让智能体变得有用的能力，同样使其难以评估。在各类部署中行之有效的评估策略，往往需要综合运用多种技术，以匹配被测系统本身的复杂程度。</p>"
      },
      {
        "en": "<h2>Introduction</h2>",
        "kind": "heading",
        "cn": "<h2>引言</h2>"
      },
      {
        "en": "<p>Good evaluations help teams ship AI agents more confidently. Without them, it's easy to get stuck in reactive loops—catching issues only in production, where fixing one failure creates others. Evals make problems and behavioral changes visible before they affect users, and their value compounds over the lifecycle of an agent.</p>",
        "kind": "text",
        "cn": "<p>良好的评估帮助团队更有信心地交付 AI 智能体。若缺乏评估，团队很容易陷入被动循环——只有在生产环境中问题暴露出来时才能发现，而修复一个故障往往又会引发其他问题。评估使问题和行为变化在影响用户之前就变得可见，其价值会随智能体生命周期的延伸持续复利累积。</p>"
      },
      {
        "en": "<p>As we described in <a href=\"https://www.anthropic.com/engineering/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">Building effective agents</a>, agents operate over many turns: calling tools, modifying state, and adapting based on intermediate results. These same capabilities that make AI agents useful—autonomy, intelligence, and flexibility—also make them harder to evaluate.</p>",
        "kind": "text",
        "cn": "<p>正如我们在<a href=\"https://www.anthropic.com/engineering/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">《构建有效的智能体》</a>中所描述的，智能体会跨越多个轮次进行操作：调用工具、修改状态，并根据中间结果动态调整。这些令 AI 智能体变得有用的能力——自主性、智能和灵活性——同样使其更难以评估。</p>"
      },
      {
        "en": "<p>Through our internal work and with customers at the frontier of agent development, we've learned how to design more rigorous and useful evals for agents. Here's what's worked across a range of agent architectures and use cases in real-world deployment.</p>",
        "kind": "text",
        "cn": "<p>通过我们的内部实践以及与智能体开发前沿客户的合作，我们学会了如何为智能体设计更严谨、更实用的评估方案。以下是在真实部署中，跨越各类智能体架构和应用场景经过验证的有效方法。</p>"
      },
      {
        "en": "<h2>The structure of an evaluation</h2>",
        "kind": "heading",
        "cn": "<h2>评估的结构</h2>"
      },
      {
        "en": "<p>An <strong>evaluation</strong> (&quot;eval&quot;) is a test for an AI system: give an AI an input, then apply grading logic to its output to measure success. In this post, we focus on <strong>automated evals</strong> that can be run during development without real users.</p>",
        "kind": "text",
        "cn": "<p><strong>评估</strong>（\"eval\"）是对 AI 系统的一种测试：向 AI 输入一个内容，然后对其输出应用评分逻辑来衡量成功与否。本文重点关注可以在开发过程中无需真实用户参与就能运行的<strong>自动化评估</strong>。</p>"
      },
      {
        "en": "<p><strong>Single-turn evaluations</strong> are straightforward: a prompt, a response, and grading logic. For earlier LLMs, single-turn, non-agentic evals were the main evaluation method. As AI capabilities have advanced, <strong>multi-turn evaluations</strong> have become increasingly common.</p>",
        "kind": "text",
        "cn": "<p><strong>单轮评估</strong>相对简单：一个提示词、一个响应，以及评分逻辑。对于早期的 LLM，单轮、非智能体式的评估是主要评估手段。随着 AI 能力的提升，<strong>多轮评估</strong>变得日益普遍。</p>"
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/ZRKO1wZqw7)In a simple eval, an agent processes a prompt, and a grader checks if the output matches expectations. For a more complex multi-turn eval, a coding agent receives tools, a task (building an MCP server in this case), and an environment, executes an &quot;agent loop&quot; (tool calls and reasoning), and updates the environment with the implementation. Grading then uses unit tests to verify the working MCP server.</p>",
        "kind": "text",
        "cn": "<p>![](https://aka.doubaocdn.com/s/ZRKO1wZqw7)在简单的评估中，智能体处理一个提示词，评分器检查输出是否符合预期。在更复杂的多轮评估中，编程智能体接收工具、任务（此例为构建一个 MCP 服务器）和运行环境，执行\"智能体循环\"（工具调用与推理），并将实现结果更新到环境中。评分阶段则通过单元测试来验证 MCP 服务器是否正常工作。</p>"
      },
      {
        "en": "<p><strong>Agent evaluations</strong> are even more complex. Agents use tools across many turns, modifying state in the environment and adapting as they go—which means mistakes can propagate and compound. Frontier models can also find creative solutions that surpass the limits of static evals. For instance, Opus 4.5 solved a <a href=\"https://github.com/sierra-research/tau2-bench\" rel=\"noreferrer\" target=\"_blank\">𝜏2-bench</a> problem about booking a flight by <a href=\"https://www.anthropic.com/news/claude-opus-4-5\" rel=\"noreferrer\" target=\"_blank\">discovering</a> a loophole in the policy. It &quot;failed&quot; the evaluation as written, but actually came up with a better solution for the user.</p>",
        "kind": "text",
        "cn": "<p><strong>智能体评估</strong>更为复杂。智能体会在多个轮次中使用工具，修改环境中的状态并随之自适应调整——这意味着错误可以传播并持续累积。前沿模型还能够找到超出静态评估预期的创造性解决方案。例如，Opus 4.5 在解决一个关于机票预订的 <a href=\"https://github.com/sierra-research/tau2-bench\" rel=\"noreferrer\" target=\"_blank\">τ2-bench</a> 题目时，<a href=\"https://www.anthropic.com/news/claude-opus-4-5\" rel=\"noreferrer\" target=\"_blank\">发现</a>了政策中的一个漏洞。它\"未通过\"按字面设计的评估，但实际上为用户找到了更优的解决方案。</p>"
      },
      {
        "en": "<p>When building agent evaluations, we use the following definitions:</p>",
        "kind": "text",
        "cn": "<p>在构建智能体评估时，我们使用如下定义：</p>"
      },
      {
        "en": "<ul><li>A <strong>task</strong> (a.k.a <strong>problem</strong>  or <strong>test case</strong> ) is a single test with defined inputs and success criteria.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>任务</strong>（又称<strong>问题</strong>或<strong>测试用例</strong>）是一个具有明确输入和成功标准的单次测试。</li></ul>"
      },
      {
        "en": "<ul><li>Each attempt at a task is a <strong>trial</strong> . Because model outputs vary between runs, we run multiple trials to produce more consistent results.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>每次对任务的尝试称为一次<strong>试验</strong>。由于模型输出在每次运行间存在差异，我们会进行多次试验以获得更稳定的结果。</li></ul>"
      },
      {
        "en": "<ul><li>A <strong>grader</strong> is logic that scores some aspect of the agent's performance. A task can have multiple graders, each containing multiple assertions (sometimes called <strong>checks</strong> )<strong>.</strong></li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>评分器</strong>是对智能体某一方面性能进行评分的逻辑。一个任务可以有多个评分器，每个评分器包含多个断言（有时称为<strong>检查项</strong>）。</li></ul>"
      },
      {
        "en": "<ul><li>A <strong>transcript</strong> (also called a <strong>trace</strong> or <strong>trajectory</strong> ) is the complete record of a trial, including outputs, tool calls, reasoning, intermediate results, and any other interactions. For the Anthropic API, this is the full messages array at the end of an eval run - containing all the calls to the API and all of the returned responses during the evaluation.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>记录</strong>（也称<strong>轨迹</strong>或<strong>轨迹路径</strong>）是一次试验的完整记录，包括输出、工具调用、推理过程、中间结果以及任何其他交互。对于 Anthropic API，这是评估运行结束时完整的 messages 数组——包含评估过程中对 API 的所有调用及其返回的所有响应。</li></ul>"
      },
      {
        "en": "<ul><li>The <strong>outcome</strong>  is the final state in the environment at the end of the trial. A flight-booking agent might say &quot;Your flight has been booked&quot; at the end of the transcript, but the outcome is whether a reservation exists in the environment's SQL database.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>结果</strong>是试验结束时环境的最终状态。一个机票预订智能体可能在记录末尾显示\"您的机票已预订\"，但真正的结果是环境的 SQL 数据库中是否确实存在一条预订记录。</li></ul>"
      },
      {
        "en": "<ul><li>An <strong>evaluation harness</strong>  is the infrastructure that runs evals end-to-end. It provides instructions and tools, runs tasks concurrently, records all the steps, grades outputs, and aggregates results.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>评估框架</strong>是端到端运行评估的基础设施。它负责提供指令和工具、并发运行任务、记录所有步骤、为输出评分，并汇总结果。</li></ul>"
      },
      {
        "en": "<ul><li>An <strong>agent harness</strong> (or <strong>scaffold</strong> ) is the system that enables a model to act as an agent: it processes inputs, orchestrates tool calls, and returns results. When we evaluate &quot;an agent,&quot; we're evaluating the harness <em>and</em> the model working together. For example, <a href=\"https://claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> is a flexible agent harness, and we used its core primitives through the <a href=\"https://platform.claude.com/docs/en/agent-sdk/overview\" rel=\"noreferrer\" target=\"_blank\">Agent SDK</a> to build our <a href=\"https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\" rel=\"noreferrer\" target=\"_blank\">long-running agent harness</a>.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>智能体框架</strong>（或<strong>脚手架</strong>）是使模型能够作为智能体运行的系统：它处理输入、编排工具调用并返回结果。当我们评估\"一个智能体\"时，我们实际上是在评估框架<em>与</em>模型协同工作的整体表现。例如，<a href=\"https://claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> 是一个灵活的智能体框架，我们通过 <a href=\"https://platform.claude.com/docs/en/agent-sdk/overview\" rel=\"noreferrer\" target=\"_blank\">Agent SDK</a> 使用其核心原语构建了我们的<a href=\"https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\" rel=\"noreferrer\" target=\"_blank\">长周期智能体框架</a>。</li></ul>"
      },
      {
        "en": "<ul><li>An <strong>evaluation suite</strong>  is a collection of tasks designed to measure specific capabilities or behaviors. Tasks in a suite typically share a broad goal. For instance, a customer support eval suite might test refunds, cancellations, and escalations.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>评估套件</strong>是一组旨在衡量特定能力或行为的任务集合。套件中的任务通常共享一个宏观目标。例如，一个客服评估套件可能包含退款、取消和升级处理等测试。</li></ul>"
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/o7XK1wZqw7)Components of evaluations for agents.</p>",
        "kind": "text",
        "cn": "<p>![](https://aka.doubaocdn.com/s/o7XK1wZqw7)智能体评估的各组成部分。</p>"
      },
      {
        "en": "<h2>Why build evaluations?</h2>",
        "kind": "heading",
        "cn": "<h2>为什么要构建评估？</h2>"
      },
      {
        "en": "<p>When teams first start building agents, they can get surprisingly far through a combination of manual testing, <a href=\"https://en.wikipedia.org/wiki/Eating_your_own_dog_food\" rel=\"noreferrer\" target=\"_blank\">dogfooding</a>, and intuition. More rigorous evaluation may even seem like overhead that slows down shipping. But after the early prototyping stages, once an agent is in production and has started scaling, building without evals starts to break down.</p>",
        "kind": "text",
        "cn": "<p>团队在刚开始构建智能体时，往往能通过人工测试、<a href=\"https://en.wikipedia.org/wiki/Eating_your_own_dog_food\" rel=\"noreferrer\" target=\"_blank\">内部试用</a>和直觉判断走得相当远。更严格的评估甚至可能显得是一种拖慢交付节奏的额外负担。但在早期原型阶段结束后，一旦智能体正式上线并开始规模化，没有评估的开发就会开始出现问题。</p>"
      },
      {
        "en": "<p>The breaking point often comes when users report the agent feels worse after changes, and the team is &quot;flying blind&quot; with no way to verify except to guess and check. Absent evals, debugging is reactive: wait for complaints, reproduce manually, fix the bug, and hope nothing else regressed. Teams can't distinguish real regressions from noise, automatically test changes against hundreds of scenarios before shipping, or measure improvements.</p>",
        "kind": "text",
        "cn": "<p>崩溃点往往出现在用户反馈智能体在改动后体验变差，而团队却处于\"盲飞\"状态，除了靠猜测和检验之外毫无验证手段。没有评估，调试就是被动的：等待投诉、人工复现、修复 bug，然后祈祷没有其他东西退化。团队无法分辨真正的退化和随机噪声，无法在发布前自动针对数百个场景测试改动，也无法衡量改进效果。</p>"
      },
      {
        "en": "<p>We've seen this progression play out many times. For instance, Claude Code started with fast iteration based on feedback from Anthropic employees and external users. Later, we added evals—first for narrow areas like concision and file edits, and then for more complex behaviors like over-engineering. These evals helped identify issues, guide improvements, and focus research-product collaborations. Combined with production monitoring, A/B tests, user research, and more, evals provide signals to continue improving Claude Code as it scales.</p>",
        "kind": "text",
        "cn": "<p>我们见证过这一过程一次次上演。例如，Claude Code 最初通过 Anthropic 员工和外部用户的反馈进行快速迭代。后来，我们逐步添加了评估——首先针对简洁性和文件编辑等较窄的领域，然后扩展到过度工程化等更复杂的行为。这些评估帮助我们发现问题、指导改进，并聚焦研究与产品团队的协作。结合生产监控、A/B 测试、用户研究等手段，评估为 Claude Code 随规模增长而持续改进提供了信号来源。</p>"
      },
      {
        "en": "<p>Writing evals is useful at any stage in the agent lifecycle. Early on, evals force product teams to specify what success means for the agent, while later they help uphold a consistent quality bar.</p>",
        "kind": "text",
        "cn": "<p>在智能体生命周期的任何阶段编写评估都是有价值的。在早期，评估能够倒逼产品团队明确智能体的成功标准；到了后期，则帮助维护一贯的质量基线。</p>"
      },
      {
        "en": "<p><a href=\"https://www.descript.com/\" rel=\"noreferrer\" target=\"_blank\">Descript</a>'s agent helps users edit videos, so they built evals around three dimensions of a successful editing workflow: don't break things, do what I asked, and do it well. They evolved from manual grading to LLM graders with criteria defined by the product team and periodic human calibration, and now regularly run two separate suites for quality benchmarking and regression testing. The <a href=\"https://bolt.new/\" rel=\"noreferrer\" target=\"_blank\">Bolt</a> AI team started building evals later, after they already had a widely used agent. In 3 months, they built an eval system that runs their agent and grades outputs with static analysis, uses browser agents to test apps, and employs LLM judges for behaviors like instruction following.</p>",
        "kind": "text",
        "cn": "<p><a href=\"https://www.descript.com/\" rel=\"noreferrer\" target=\"_blank\">Descript</a> 的智能体帮助用户剪辑视频，因此他们围绕成功编辑工作流的三个维度构建评估：不破坏原有内容、完成用户指令、做得足够好。他们从人工评分起步，逐步演进为由产品团队定义标准、定期由人工校准的 LLM 评分器，如今定期运行两套独立套件分别用于质量基准测试和回归测试。<a href=\"https://bolt.new/\" rel=\"noreferrer\" target=\"_blank\">Bolt</a> 的 AI 团队则起步较晚，在智能体已被广泛使用之后才开始构建评估。用了 3 个月时间，他们搭建了一套评估系统：运行智能体并通过静态分析对输出评分，用浏览器智能体测试应用，并使用 LLM 裁判评估指令遵循等行为。</p>"
      },
      {
        "en": "<p>Some teams create evals at the start of development; others add them once at scale when evals become a bottleneck for improving the agent. Evals are especially useful at the start of agent development to explicitly encode expected behavior. Two engineers reading the same initial spec could come away with different interpretations on how the AI should handle edge cases. An eval suite resolves this ambiguity. Regardless of when they're created, evals help accelerate development.</p>",
        "kind": "text",
        "cn": "<p>有些团队在开发之初就构建评估；另一些团队则在规模化后评估成为改进瓶颈时才引入它。在智能体开发初期，评估尤其有价值，能够明确编码预期行为。两名工程师阅读同一份初始规格说明，可能对 AI 应如何处理边缘案例产生截然不同的理解。一套评估套件能够消除这种歧义。无论何时创建，评估都有助于加速开发。</p>"
      },
      {
        "en": "<p>Evals also shape how quickly you can adopt new models. When more powerful models come out, teams without evals face weeks of testing while competitors with evals can quickly determine the model's strengths, tune their prompts, and upgrade in days.</p>",
        "kind": "text",
        "cn": "<p>评估还决定了你能多快采用新模型。当更强大的模型发布时，没有评估的团队需要花数周时间测试，而有评估的团队则能够迅速判断模型的优势，调整提示词，并在数天内完成升级。</p>"
      },
      {
        "en": "<p>Once evals exist, you get baselines and regression tests for free: latency, token usage, cost per task, and error rates can be tracked on a static bank of tasks. Evals can also become the highest-bandwidth communication channel between product and research teams, defining metrics researchers can optimize against. Clearly, evals have wide-ranging benefits beyond tracking regressions and improvements. Their compounding value is easy to miss given that costs are visible upfront while benefits accumulate later.</p>",
        "kind": "text",
        "cn": "<p>一旦评估体系建立，基线和回归测试便随之而来：延迟、令牌用量、每任务成本和错误率都可以在固定任务集上持续追踪。评估还可以成为产品团队与研究团队之间带宽最高的沟通渠道，定义研究人员可以据此优化的指标。评估的价值远超追踪退化和改进，其影响范围广泛而深远。由于成本在前期可见，而收益随时间慢慢积累，这种复利价值很容易被忽视。</p>"
      },
      {
        "en": "<h2>How to evaluate AI agents</h2>",
        "kind": "heading",
        "cn": "<h2>如何评估 AI 智能体</h2>"
      },
      {
        "en": "<p>We see several common types of agents deployed at scale today, including coding agents, research agents, computer use agents, and conversational agents. Each type may be deployed across a wide variety of industries, but they can be evaluated using similar techniques. You don't need to invent an evaluation from scratch. The sections below describe proven techniques for several agent types. Use these methods as a foundation, then extend them to your domain.</p>",
        "kind": "text",
        "cn": "<p>当前我们观察到多种常见类型的智能体正在规模化部署，包括编程智能体、研究智能体、计算机使用智能体以及对话型智能体。每种类型可能被部署于各类行业，但可以采用相似的技术进行评估。你无需从零构建评估体系。以下各节描述了针对若干智能体类型的成熟技术。以这些方法为基础，再根据你的具体领域进行扩展即可。</p>"
      },
      {
        "en": "<h3>Types of graders for agents</h3>",
        "kind": "heading",
        "cn": "<h3>智能体的评分器类型</h3>"
      },
      {
        "en": "<p>Agent evaluations typically combine three types of graders: code-based, model-based, and human. Each grader evaluates some portion of either the transcript or the outcome. An essential component of effective evaluation design is to choose the right graders for the job.</p>",
        "kind": "text",
        "cn": "<p>智能体评估通常综合使用三类评分器：基于代码的、基于模型的和人工的。每种评分器对记录或结果的某个部分进行评估。选择合适的评分器是有效评估设计的关键要素。</p>"
      },
      {
        "en": "<p>Code-based graders</p>",
        "kind": "text",
        "cn": "<p>基于代码的评分器</p>"
      },
      {
        "en": "<p>| <strong>Methods</strong> | <strong>Strengths</strong> | <strong>Weaknesses</strong> | |---|---|---| | • String match checks (exact, regex, fuzzy, etc.) • Binary tests (fail-to-pass, pass-to-pass) • Static analysis (lint, type, security) • Outcome verification • Tool calls verification (tools used, parameters) • Transcript analysis (turns taken, token usage) | • Fast • Cheap • Objective • Reproducible • Easy to debug • Verify specific conditions | • Brittle to valid variations that don't match expected patterns exactly • Lacking in nuance • Limited for evaluating some more subjective tasks |</p>",
        "kind": "text",
        "cn": "<p>| <strong>方法</strong> | <strong>优势</strong> | <strong>劣势</strong> | |---|---|---| | • 字符串匹配检查（精确、正则、模糊等）• 二元测试（失败转通过、通过转通过）• 静态分析（lint、类型检查、安全扫描）• 结果验证 • 工具调用验证（使用的工具、参数）• 记录分析（轮次数、令牌用量）| • 快速 • 成本低 • 客观 • 可复现 • 易调试 • 可验证特定条件 | • 对不完全匹配预期模式的有效变体较为脆弱 • 缺乏细粒度判断 • 对部分主观性任务的评估能力有限 |</p>"
      },
      {
        "en": "<p>Model-based graders</p>",
        "kind": "text",
        "cn": "<p>基于模型的评分器</p>"
      },
      {
        "en": "<p>| <strong>Methods</strong> | <strong>Strengths</strong> | <strong>Weaknesses</strong> | |---|---|---| | Rubric-based scoringNatural language assertionsPairwise comparisonReference-based evaluationMulti-judge consensus | FlexibleScalableCaptures nuanceHandles open-ended tasksHandles freeform output | Non-deterministicMore expensive than codeRequires calibration with human graders for accuracy |</p>",
        "kind": "text",
        "cn": "<p>| <strong>方法</strong> | <strong>优势</strong> | <strong>劣势</strong> | |---|---|---| | 基于评分标准的打分、自然语言断言、成对比较、基于参考答案的评估、多裁判共识 | 灵活、可扩展、能捕捉细微差异、适用于开放式任务、可处理自由形式输出 | 不确定性、成本高于代码、需要与人工评分器进行校准 |</p>"
      },
      {
        "en": "<p>Human graders</p>",
        "kind": "text",
        "cn": "<p>人工评分器</p>"
      },
      {
        "en": "<p>| <strong>Methods</strong> | <strong>Strengths</strong> | <strong>Weaknesses</strong> | |---|---|---| | SME reviewCrowdsourced judgmentSpot-check samplingA/B testingInter-annotator agreement | Gold standard qualityMatches expert user judgmentUsed to calibrate model-based graders | ExpensiveSlowOften requires access to human experts at scale |</p>",
        "kind": "text",
        "cn": "<p>| <strong>方法</strong> | <strong>优势</strong> | <strong>劣势</strong> | |---|---|---| | 领域专家审查、众包判断、抽样抽查、A/B 测试、标注者间一致性 | 黄金标准质量、与专家用户判断一致、用于校准基于模型的评分器 | 成本高、速度慢、往往需要在大规模情况下获得人类专家的参与 |</p>"
      },
      {
        "en": "<p>For each task, scoring can be weighted (combined grader scores must hit a threshold), binary (all graders must pass), or a hybrid.</p>",
        "kind": "text",
        "cn": "<p>对于每个任务，评分可以是加权型（各评分器综合得分须达到阈值）、二元型（所有评分器须全部通过），或两者的混合形式。</p>"
      },
      {
        "en": "<h3>Capability vs. regression evals</h3>",
        "kind": "heading",
        "cn": "<h3>能力评估与回归评估</h3>"
      },
      {
        "en": "<p><strong>Capability or &quot;quality&quot; evals</strong> ask, &quot;What can this agent do well?&quot; They should start at a low pass rate, targeting tasks the agent struggles with and giving teams a hill to climb.</p>",
        "kind": "text",
        "cn": "<p><strong>能力评估</strong>（或称\"质量\"评估）回答的是\"这个智能体擅长做什么？\"它们应当从较低的通过率起步，聚焦于智能体尚有困难的任务，为团队提供一个可以持续攀登的目标。</p>"
      },
      {
        "en": "<p><strong>Regression evals</strong> ask, &quot;Does the agent still handle all the tasks it used to?&quot; and should have a nearly 100% pass rate. They protect against backsliding, as a decline in score signals that something is broken and needs to be improved. As teams hill-climb on capability evals, it's important to also run regression evals to make sure changes don't cause issues elsewhere.</p>",
        "kind": "text",
        "cn": "<p><strong>回归评估</strong>回答的是\"智能体是否仍能处理曾经能够处理的所有任务？\"其通过率应接近 100%。它们能防止能力退步——评分下降即是某处出现问题的信号，需要改进。随着团队在能力评估上持续优化，同时运行回归评估至关重要，以确保改动不会在其他地方引发问题。</p>"
      },
      {
        "en": "<p>After an agent is launched and optimized, capability evals with high pass rates can &quot;graduate&quot; to become a regression suite that is run continuously to catch any drift. Tasks that once measured &quot;Can we do this at all?&quot; then measure &quot;Can we still do this reliably?&quot;</p>",
        "kind": "text",
        "cn": "<p>智能体上线并经过优化后，通过率已很高的能力评估可以\"毕业\"转为持续运行的回归测试套件，以捕捉任何潜在的漂移。那些曾经衡量\"我们到底能不能做到这件事？\"的任务，随即转变为衡量\"我们还能可靠地做到这件事吗？\"</p>"
      },
      {
        "en": "<h3>Evaluating coding agents</h3>",
        "kind": "heading",
        "cn": "<h3>评估编程智能体</h3>"
      },
      {
        "en": "<p><strong>Coding agents</strong> write, test, and debug code, navigating codebases and running commands much like a human developer. Effective evals for modern coding agents usually rely on well-specified tasks, stable test environments, and thorough tests for the generated code.</p>",
        "kind": "text",
        "cn": "<p><strong>编程智能体</strong>负责编写、测试和调试代码，像人类开发者一样浏览代码库、运行命令。对现代编程智能体的有效评估通常依赖于明确的任务规格、稳定的测试环境，以及针对生成代码的全面测试。</p>"
      },
      {
        "en": "<p>Deterministic graders are natural for coding agents because software is generally straightforward to evaluate: does the code run and do the tests pass? Two widely used coding agent benchmarks, <a href=\"https://www.swebench.com/SWE-bench/\" rel=\"noreferrer\" target=\"_blank\">SWE-bench Verified</a> and <a href=\"https://www.tbench.ai/\" rel=\"noreferrer\" target=\"_blank\">Terminal-Bench</a>, follow this approach. SWE-bench Verified gives agents GitHub issues from popular Python repositories and grades solutions by running the test suite; a solution passes only if it fixes the failing tests without breaking existing ones. LLMs have progressed from 40% to &gt;80% on this eval in just one year. Terminal-Bench takes a different track: it tests end-to-end technical tasks, such as building a Linux kernel from source or training an ML model.</p>",
        "kind": "text",
        "cn": "<p>确定性评分器对于编程智能体而言十分自然，因为软件的评估通常直截了当：代码能否运行？测试是否通过？两个广泛使用的编程智能体基准 <a href=\"https://www.swebench.com/SWE-bench/\" rel=\"noreferrer\" target=\"_blank\">SWE-bench Verified</a> 和 <a href=\"https://www.tbench.ai/\" rel=\"noreferrer\" target=\"_blank\">Terminal-Bench</a> 都遵循这一思路。SWE-bench Verified 向智能体提供来自热门 Python 仓库的 GitHub issue，通过运行测试套件来评分：只有在修复了失败测试且不破坏现有测试的情况下，解决方案才算通过。LLM 在这一评估上已从 40% 进步到超过 80%，仅用了一年时间。Terminal-Bench 则另辟蹊径，测试端到端的技术任务，例如从源码编译 Linux 内核或训练机器学习模型。</p>"
      },
      {
        "en": "<p>Once you have a set of pass-or-fail tests for validating the key <em>outcomes</em> of a coding task, it's often useful to also grade the transcript<em>.</em> For instance, heuristics-based code quality rules can evaluate the generated code based on more than passing tests, and model-based graders with clear rubrics can assess behaviors like how the agent calls tools or interacts with the user.</p>",
        "kind": "text",
        "cn": "<p>一旦拥有一组用于验证编程任务关键<em>结果</em>的通过/失败测试，对<em>记录</em>的评分往往也很有价值。例如，基于启发式规则的代码质量评分器可以从通过测试以外的维度评估生成的代码，而配备清晰评分标准的基于模型的评分器则可以评估智能体调用工具或与用户交互等行为。</p>"
      },
      {
        "en": "<p><strong>Example: Theoretical evaluation for a coding agent</strong></p>",
        "kind": "text",
        "cn": "<p><strong>示例：针对编程智能体的理论评估</strong></p>"
      },
      {
        "en": "<p>Consider a coding task where the agent must fix an authentication bypass vulnerability. As shown in the illustrative YAML file below, one could evaluate this agent using both graders and metrics.</p>",
        "kind": "text",
        "cn": "<p>考虑这样一个编程任务：智能体需要修复一个身份验证绕过漏洞。如下面的示例 YAML 文件所示，可以同时使用评分器和指标来评估这个智能体。</p>"
      },
      {
        "en": "<pre><code>task:\n id: &quot;fix-auth-bypass_1&quot;\n desc: &quot;Fix authentication bypass when password field is empty and ...&quot;\n graders:\n - type: deterministic_tests\n required: [test_empty_pw_rejected.py, test_null_pw_rejected.py]\n - type: llm_rubric\n rubric: prompts/code_quality.md\n - type: static_analysis\n commands: [ruff, mypy, bandit]\n - type: state_check\n expect:\n security_logs: {event_type: &quot;auth_blocked&quot;}\n - type: tool_calls\n required:\n - {tool: read_file, params: {path: &quot;src/auth/*&quot;}}\n - {tool: edit_file}\n - {tool: run_tests}\n tracked_metrics:\n - type: transcript\n metrics:\n - n_turns\n - n_toolcalls\n - n_total_tokens\n - type: latency\n metrics:\n - time_to_first_token\n - output_tokens_per_sec\n - time_to_last_token</code></pre>",
        "kind": "code",
        "cn": "<pre><code>task:\n id: &quot;fix-auth-bypass_1&quot;\n desc: &quot;Fix authentication bypass when password field is empty and ...&quot;\n graders:\n - type: deterministic_tests\n required: [test_empty_pw_rejected.py, test_null_pw_rejected.py]\n - type: llm_rubric\n rubric: prompts/code_quality.md\n - type: static_analysis\n commands: [ruff, mypy, bandit]\n - type: state_check\n expect:\n security_logs: {event_type: &quot;auth_blocked&quot;}\n - type: tool_calls\n required:\n - {tool: read_file, params: {path: &quot;src/auth/*&quot;}}\n - {tool: edit_file}\n - {tool: run_tests}\n tracked_metrics:\n - type: transcript\n metrics:\n - n_turns\n - n_toolcalls\n - n_total_tokens\n - type: latency\n metrics:\n - time_to_first_token\n - output_tokens_per_sec\n - time_to_last_token</code></pre>"
      },
      {
        "en": "<p>Note that this example showcases the full range of available graders for illustration. In practice, coding evaluations typically rely on unit tests for correctness verification and an LLM rubric for assessing overall code quality, with additional graders and metrics added only as needed.</p>",
        "kind": "text",
        "cn": "<p>请注意，此示例展示了所有可用评分器的完整范围，仅供参考说明。在实际编程评估中，通常依赖单元测试进行正确性验证，以及 LLM 评分标准评估整体代码质量，其他评分器和指标仅在有需要时才额外添加。</p>"
      },
      {
        "en": "<h3>Evaluating conversational agents</h3>",
        "kind": "heading",
        "cn": "<h3>评估对话型智能体</h3>"
      },
      {
        "en": "<p><strong>Conversational agents</strong> interact with users in domains like support, sales, or coaching. Unlike traditional chatbots, they maintain state, use tools, and take actions mid-conversation. While coding and research agents can also involve many turns of interaction with the user, conversational agents present a distinct challenge: the quality of the interaction itself is part of what you're evaluating. Effective evals for conversational agents usually rely on verifiable end-state outcomes and rubrics that capture both task completion and interaction quality. Unlike most other evals, they often require a second LLM to simulate the user. We use this approach in our <a href=\"https://alignment.anthropic.com/2025/automated-auditing/\" rel=\"noreferrer\" target=\"_blank\">alignment auditing agents</a> to stress-test models through extended, adversarial conversations.</p>",
        "kind": "text",
        "cn": "<p><strong>对话型智能体</strong>在支持、销售或辅导等领域与用户进行交互。与传统聊天机器人不同，它们能够维护状态、使用工具并在对话过程中采取行动。虽然编程和研究智能体也可能涉及与用户的多轮交互，但对话型智能体面临独特的挑战：交互过程本身的质量是评估对象的一部分。对话型智能体的有效评估通常依赖可验证的最终状态结果，以及能够捕捉任务完成度和交互质量的评分标准。与大多数其他评估不同，这类评估往往需要第二个 LLM 来模拟用户。我们在<a href=\"https://alignment.anthropic.com/2025/automated-auditing/\" rel=\"noreferrer\" target=\"_blank\">对齐审计智能体</a>中采用了这种方法，通过延伸性对抗对话对模型进行压力测试。</p>"
      },
      {
        "en": "<p>Success for conversational agents can be multidimensional: is the ticket resolved (state check), did it finish in &lt;10 turns (transcript constraint), and was the tone appropriate (LLM rubric)? Two benchmarks that incorporate multidimensionality are <a href=\"https://arxiv.org/abs/2406.12045\" rel=\"noreferrer\" target=\"_blank\">𝜏-Bench</a> and its successor, <a href=\"https://arxiv.org/abs/2506.07982\" rel=\"noreferrer\" target=\"_blank\">τ2-Bench</a>. These simulate multi-turn interactions across domains like retail support and airline booking, where one model plays a user persona while the agent navigates realistic scenarios.</p>",
        "kind": "text",
        "cn": "<p>对话型智能体的成功可以是多维度的：票单是否已解决（状态检查）、是否在 10 轮内完成（记录约束），以及语气是否得当（LLM 评分标准）？两个纳入多维度评估的基准是 <a href=\"https://arxiv.org/abs/2406.12045\" rel=\"noreferrer\" target=\"_blank\">τ-Bench</a> 及其后继版本 <a href=\"https://arxiv.org/abs/2506.07982\" rel=\"noreferrer\" target=\"_blank\">τ2-Bench</a>。这些基准在零售客服和航空订票等场景中模拟多轮交互，其中一个模型扮演用户角色，而智能体则需要应对各类真实场景。</p>"
      },
      {
        "en": "<p><strong>Example: Theoretical evaluation for a conversational agent</strong></p>",
        "kind": "text",
        "cn": "<p><strong>示例：针对对话型智能体的理论评估</strong></p>"
      }
    ]
  },
  {
    "id": 9,
    "title": "How we built our multi-agent research system",
    "date": "2025-06-13",
    "diff": "★★★",
    "time": "30分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/multi-agent-research-system",
    "vocab": [
      {
        "en": "lead agent",
        "cn": "主智能体",
        "ex": "We found that a multi-agent system with Claude Opus 4 as the lead agent and Claude Sonnet 4 subagents outperformed singl"
      },
      {
        "en": "subagent",
        "cn": "子智能体",
        "ex": "Each subagent also provides separation of concerns—distinct tools, prompts, and exploration trajectories—which reduces p"
      },
      {
        "en": "tool design",
        "cn": "工具设计",
        "ex": "The journey of this multi-agent system from prototype to production taught us critical lessons about system architecture"
      },
      {
        "en": "tool description",
        "cn": "工具描述",
        "ex": "We even created a tool-testing agent—when given a flawed MCP tool, it attempts to use the tool and then rewrites the too"
      },
      {
        "en": "research system",
        "cn": "研究系统",
        "ex": "We've found that multi-agent systems excel at valuable tasks that involve heavy parallelization, information that exceed"
      },
      {
        "en": "reliability",
        "cn": "可靠性",
        "ex": "Systems with multiple agents introduce new challenges in agent coordination, evaluation, and reliability."
      },
      {
        "en": "observability",
        "cn": "可观测性",
        "ex": "Finally, we focused on a fast iteration loop with observability and test cases. ### Effective evaluation of agents Good "
      },
      {
        "en": "persistent state",
        "cn": "持久化状态",
        "ex": "Evaluating agents that modify persistent state across multi-turn conversations presents unique challenges."
      },
      {
        "en": "citation",
        "cn": "引用",
        "ex": "We used an LLM judge that evaluated each output against criteria in a rubric: factual accuracy (do claims match sources?"
      },
      {
        "en": "deterministic",
        "cn": "确定性的",
        "ex": "We combine the adaptability of AI agents built on Claude with deterministic safeguards like retry logic and regular chec"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>本文围绕《Benefits of a multi-agent system》展开。开篇主要信息是：“Research work involves open-ended problems where it's very difficult to predict the required steps in advance.”。文章大致按“Appendix”推进。</div><div class=\"structure-guide-list\"><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Architecture overview for Research</strong></div><p>Architecture overview for Research：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Prompt engineering and evaluations for research agents</strong></div><p>Prompt engineering and evaluations for research agents：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Effective evaluation of agents</strong></div><p>Effective evaluation of agents：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Production reliability and engineering challenges</strong></div><p>Production reliability and engineering challenges：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Conclusion</strong></div><p>收束全文，把前面的小节整理成可以迁移到项目设计中的判断原则。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">推进主线</span><strong>Acknowlegements</strong></div><p>Acknowlegements：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Appendix</strong></div><p>Appendix：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>Benefits of a multi-agent system <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>Research work involves open-ended problems where it's very difficult to predict the required steps in advance.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>智能体的价值来自可观察的环境反馈和清晰停止条件，不是把所有步骤都交给模型自由发挥。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Architecture overview for Research <span class=\"en\">主智能体</span></h4><p><strong>本文语境：</strong>Our Research system uses a multi-agent architecture with an orchestrator-worker pattern, where a lead agent coordinates the process while delegating to specialized subagents that operate in parallel.</p><p><strong>英文表达：先把 lead agent 理解成本文里的功能角色，而不是只背成“主智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Prompt engineering and evaluations for research agents <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>Multi-agent systems have key differences from single-agent systems, including a rapid growth in coordination complexity.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Effective evaluation of agents <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>Good evaluations are essential for building reliable AI applications, and agents are no different.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Production reliability and engineering challenges <span class=\"en\">可靠性</span></h4><p><strong>本文语境：</strong>In traditional software, a bug might break a feature, degrade performance, or cause outages.</p><p><strong>英文表达：先把 reliability 理解成本文里的功能角色，而不是只背成“可靠性”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>Conclusion <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>When building AI agents, the last mile often becomes most of the journey.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>智能体的价值来自可观察的环境反馈和清晰停止条件，不是把所有步骤都交给模型自由发挥。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《How we built our multi-agent research system》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 lead agent（主智能体） / subagent（子智能体） / tool design（工具设计） / tool description（工具描述） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p>Claude now has <a href=\"https://www.anthropic.com/news/research\" rel=\"noreferrer\" target=\"_blank\">Research capabilities</a> that allow it to search across the web, Google Workspace, and any integrations to accomplish complex tasks.</p>",
        "kind": "text",
        "cn": "<p>Claude 现已具备 <a href=\"https://www.anthropic.com/news/research\" rel=\"noreferrer\" target=\"_blank\">Research（研究）功能</a>，可跨网页、Google Workspace 及各类集成进行搜索，完成复杂任务。</p>"
      },
      {
        "en": "<p>The journey of this multi-agent system from prototype to production taught us critical lessons about system architecture, tool design, and prompt engineering. A multi-agent system consists of multiple agents (LLMs autonomously using tools in a loop) working together. Our Research feature involves an agent that plans a research process based on user queries, and then uses tools to create parallel agents that search for information simultaneously. Systems with multiple agents introduce new challenges in agent coordination, evaluation, and reliability.</p>",
        "kind": "text",
        "cn": "<p>将这套多智能体系统从原型推进到生产环境的过程，让我们深刻领悟了系统架构、工具设计和提示词工程方面的关键经验。多智能体系统由多个智能体（即在循环中自主使用工具的大语言模型）协同工作构成。我们的 Research 功能涉及一个智能体：它根据用户查询制定研究方案，再使用工具创建并行子智能体以同时检索信息。多智能体系统在智能体协调、评估和可靠性方面带来了新的挑战。</p>"
      },
      {
        "en": "<p>This post breaks down the principles that worked for us—we hope you'll find them useful to apply when building your own multi-agent systems.</p>",
        "kind": "text",
        "cn": "<p>本文将介绍对我们行之有效的原则——希望在你构建自己的多智能体系统时能有所借鉴。</p>"
      },
      {
        "en": "<h3>Benefits of a multi-agent system</h3>",
        "kind": "heading",
        "cn": "<h3>多智能体系统的优势</h3>"
      },
      {
        "en": "<p>Research work involves open-ended problems where it's very difficult to predict the required steps in advance. You can't hardcode a fixed path for exploring complex topics, as the process is inherently dynamic and path-dependent. When people conduct research, they tend to continuously update their approach based on discoveries, following leads that emerge during investigation.</p>",
        "kind": "text",
        "cn": "<p>研究工作涉及开放性问题，很难提前预测所需的步骤。你无法为探索复杂主题硬编码一条固定路径，因为这一过程本质上是动态的、路径依赖的。当人们进行研究时，往往会根据发现不断调整方向，追踪调查过程中涌现的线索。</p>"
      },
      {
        "en": "<p>This unpredictability makes AI agents particularly well-suited for research tasks. Research demands the flexibility to pivot or explore tangential connections as the investigation unfolds. The model must operate autonomously for many turns, making decisions about which directions to pursue based on intermediate findings. A linear, one-shot pipeline cannot handle these tasks.</p>",
        "kind": "text",
        "cn": "<p>这种不可预测性使得 AI 智能体尤其适合研究任务。研究要求具备随调查推进而灵活转向或探索相关关联的能力。模型必须在多个轮次中自主运行，根据中间发现决定追踪哪些方向。线性的一次性流水线无法胜任这类任务。</p>"
      },
      {
        "en": "<p>The essence of search is compression: distilling insights from a vast corpus. Subagents facilitate compression by operating in parallel with their own context windows, exploring different aspects of the question simultaneously before condensing the most important tokens for the lead research agent. Each subagent also provides separation of concerns—distinct tools, prompts, and exploration trajectories—which reduces path dependency and enables thorough, independent investigations.</p>",
        "kind": "text",
        "cn": "<p>搜索的本质是压缩：从海量语料库中提炼洞见。子智能体通过并行运行各自的上下文窗口来实现压缩——同时探索问题的不同维度，再将最关键的信息凝练给主研究智能体。每个子智能体还实现了关注点分离——各有独立的工具、提示词和探索路径——从而降低路径依赖，支持深入而独立的调查。</p>"
      },
      {
        "en": "<p>Once intelligence reaches a threshold, multi-agent systems become a vital way to scale performance. For instance, although individual humans have become more intelligent in the last 100,000 years, human societies have become <em>exponentially</em> more capable in the information age because of our <em>collective</em> intelligence and ability to coordinate. Even generally-intelligent agents face limits when operating as individuals; groups of agents can accomplish far more.</p>",
        "kind": "text",
        "cn": "<p>一旦智能达到某个阈值，多智能体系统便成为扩展性能的关键途径。例如，虽然过去十万年间个体人类的智力提升有限，但人类社会在信息时代借助<em>集体</em>智慧和协作能力，实现了<em>指数级</em>的能力跃升。即便是具备通用智能的智能体，单独运行时也面临局限；而一组智能体则能完成远超个体的任务。</p>"
      },
      {
        "en": "<p>Our internal evaluations show that multi-agent research systems excel especially for breadth-first queries that involve pursuing multiple independent directions simultaneously. We found that a multi-agent system with Claude Opus 4 as the lead agent and Claude Sonnet 4 subagents outperformed single-agent Claude Opus 4 by 90.2% on our internal research eval. For example, when asked to identify all the board members of the companies in the Information Technology S&amp;P 500, the multi-agent system found the correct answers by decomposing this into tasks for subagents, while the single agent system failed to find the answer with slow, sequential searches.</p>",
        "kind": "text",
        "cn": "<p>我们的内部评估表明，多智能体研究系统尤其擅长处理需要同时追踪多个独立方向的广度优先查询。我们发现，以 Claude Opus 4 为主智能体、Claude Sonnet 4 为子智能体的多智能体系统，在内部研究评测中表现比单智能体 Claude Opus 4 高出 90.2%。例如，当被要求识别标普 500 信息技术板块所有公司的董事会成员时，多智能体系统通过将任务拆分给子智能体找到了正确答案，而单智能体系统则因缓慢的串行搜索未能找到答案。</p>"
      },
      {
        "en": "<p>Multi-agent systems work mainly because they help spend enough tokens to solve the problem. In our analysis, three factors explained 95% of the performance variance in the <a href=\"https://openai.com/index/browsecomp/\" rel=\"noreferrer\" target=\"_blank\">BrowseComp</a> evaluation (which tests the ability of browsing agents to locate hard-to-find information). We found that token usage by itself explains 80% of the variance, with the number of tool calls and the model choice as the two other explanatory factors. This finding validates our architecture that distributes work across agents with separate context windows to add more capacity for parallel reasoning. The latest Claude models act as large efficiency multipliers on token use, as upgrading to Claude Sonnet 4 is a larger performance gain than doubling the token budget on Claude Sonnet 3.7. Multi-agent architectures effectively scale token usage for tasks that exceed the limits of single agents.</p>",
        "kind": "text",
        "cn": "<p>多智能体系统之所以有效，主要在于它们能消耗足够多的 token 来解决问题。在我们的分析中，三个因素解释了 <a href=\"https://openai.com/index/browsecomp/\" rel=\"noreferrer\" target=\"_blank\">BrowseComp</a> 评测中 95% 的性能方差。我们发现 token 用量本身解释了 80% 的方差，工具调用次数和模型选择是另外两个解释因素。这一发现验证了我们的架构——将工作分配给拥有独立上下文窗口的多个智能体，以增加并行推理的容量。最新的 Claude 模型对 token 使用具有巨大的效率倍增效果：升级到 Claude Sonnet 4 带来的性能提升，甚至超过了在 Claude Sonnet 3.7 上将 token 预算翻倍。多智能体架构能有效扩展超出单智能体限制的任务所需的 token 使用量。</p>"
      },
      {
        "en": "<p>There is a downside: in practice, these architectures burn through tokens fast. In our data, agents typically use about 4× more tokens than chat interactions, and multi-agent systems use about 15× more tokens than chats. For economic viability, multi-agent systems require tasks where the value of the task is high enough to pay for the increased performance. Further, some domains that require all agents to share the same context or involve many dependencies between agents are not a good fit for multi-agent systems today. For instance, most coding tasks involve fewer truly parallelizable tasks than research, and LLM agents are not yet great at coordinating and delegating to other agents in real time. We've found that multi-agent systems excel at valuable tasks that involve heavy parallelization, information that exceeds single context windows, and interfacing with numerous complex tools.</p>",
        "kind": "text",
        "cn": "<p>当然也有不足之处：这些架构在实际使用中消耗 token 非常快。根据我们的数据，智能体使用的 token 通常比聊天交互多约 4 倍，而多智能体系统使用的 token 比聊天多约 15 倍。为了在经济上可行，多智能体系统需要任务的价值足够高。此外，某些需要所有智能体共享同一上下文、或智能体间存在大量依赖关系的领域，目前并不适合使用多智能体系统。例如，大多数编程任务能够真正并行化的部分远少于研究任务，而 LLM 智能体在实时协调与委派方面也有所欠缺。我们发现，多智能体系统在涉及大量并行化、信息量超出单一上下文窗口以及需要与众多复杂工具交互的高价值任务中表现尤为出色。</p>"
      },
      {
        "en": "<h3>Architecture overview for Research</h3>",
        "kind": "heading",
        "cn": "<h3>Research 功能架构概览</h3>"
      },
      {
        "en": "<p>Our Research system uses a multi-agent architecture with an orchestrator-worker pattern, where a lead agent coordinates the process while delegating to specialized subagents that operate in parallel.</p>",
        "kind": "text",
        "cn": "<p>我们的 Research 系统采用多智能体架构，遵循编排者-工作者模式：主智能体负责协调整体流程，同时将任务委派给并行运行的专业子智能体。</p>"
      },
      {
        "en": "<p>&lt;img src='https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1198befc0b33726c45692ac40f764022f4de1bf2-4584x2579.png&amp;amp;w=3840&amp;amp;q=75' alt='' title='' width='4584' height='2579' /&gt;</p>",
        "kind": "text",
        "cn": "<p>&lt; img src = 'https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1198befc0b33726c45692ac40f764022f4de1bf2-4584x2579.png&amp;w=3840&amp;q=75' alt = '' title = '' width = '4584' height = '2579'/&gt;</p>"
      },
      {
        "en": "<p><em>The multi-agent architecture in action: user queries flow through a lead agent that creates specialized subagents to search for different aspects in parallel.</em></p>",
        "kind": "text",
        "cn": "<p><em>多智能体架构运作示意：用户查询流经主智能体，主智能体创建专业子智能体，并行搜索不同维度的信息。</em></p>"
      },
      {
        "en": "<p>When a user submits a query, the lead agent analyzes it, develops a strategy, and spawns subagents to explore different aspects simultaneously. As shown in the diagram above, the subagents act as intelligent filters by iteratively using search tools to gather information, in this case on AI agent companies in 2025, and then returning a list of companies to the lead agent so it can compile a final answer.</p>",
        "kind": "text",
        "cn": "<p>当用户提交查询时，主智能体对其进行分析、制定策略，并派生子智能体同时探索不同维度。如上图所示，子智能体通过迭代使用搜索工具收集信息（此处以 2025 年 AI 智能体公司为例），再将公司列表返回给主智能体，由其汇总最终答案。</p>"
      },
      {
        "en": "<p>Traditional approaches using Retrieval Augmented Generation (RAG) use static retrieval. That is, they fetch some set of chunks that are most similar to an input query and use these chunks to generate a response. In contrast, our architecture uses a multi-step search that dynamically finds relevant information, adapts to new findings, and analyzes results to formulate high-quality answers.</p>",
        "kind": "text",
        "cn": "<p>传统的检索增强生成（RAG）方法使用静态检索——获取与输入查询最相似的若干文本块并生成响应。相比之下，我们的架构采用多步骤搜索：动态发现相关信息，根据新发现自适应调整，并对结果进行分析以生成高质量答案。</p>"
      },
      {
        "en": "<p>&lt;img src='https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F3bde53c9578d74f6e05c3e515e20b910c5a8c20a-4584x4584.png&amp;amp;w=3840&amp;amp;q=75' alt='' title='' width='4584' height='4584' /&gt;</p>",
        "kind": "text",
        "cn": "<p>&lt; img src = 'https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F3bde53c9578d74f6e05c3e515e20b910c5a8c20a-4584x4584.png&amp;w=3840&amp;q=75' alt = '' title = '' width = '4584' height = '4584'/&gt;</p>"
      },
      {
        "en": "<p><em>Process diagram showing the complete workflow of our multi-agent Research system. When a user submits a query, the system creates a LeadResearcher agent that enters an iterative research process. The LeadResearcher begins by thinking through the approach and saving its plan to Memory to persist the context, since if the context window exceeds 200,000 tokens it will be truncated and it is important to retain the plan. It then creates specialized Subagents (two are shown here, but it can be any number) with specific research tasks. Each Subagent independently performs web searches, evaluates tool results using <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#interleaved-thinking\" rel=\"noreferrer\" target=\"_blank\">interleaved thinking</a>, and returns findings to the LeadResearcher. The LeadResearcher synthesizes these results and decides whether more research is needed—if so, it can create additional subagents or refine its strategy. Once sufficient information is gathered, the system exits the research loop and passes all findings to a CitationAgent, which processes the documents and research report to identify specific locations for citations. This ensures all claims are properly attributed to their sources. The final research results, complete with citations, are then returned to the user.</em></p>",
        "kind": "text",
        "cn": "<p><em>该图展示了多智能体 Research 系统的完整工作流。当用户提交查询时，系统创建 LeadResearcher（主研究员）智能体，进入迭代研究流程。LeadResearcher 首先思考研究方案，将计划保存到 Memory 中以持久化上下文——因为若上下文窗口超过 200,000 个 token 将被截断，保留计划至关重要。随后，它创建具有特定研究任务的专业 Subagents。每个 Subagent 独立执行网页搜索，使用<a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#interleaved-thinking\" rel=\"noreferrer\" target=\"_blank\">交错思考</a>评估工具结果，并将发现返回给 LeadResearcher。LeadResearcher 综合这些结果，判断是否需要进一步研究。信息收集充分后，系统退出研究循环，将所有发现传递给 CitationAgent，后者处理文档和研究报告以确定引用位置，确保所有声明均有据可查。最终带有引用的研究结果返回给用户。</em></p>"
      },
      {
        "en": "<h3>Prompt engineering and evaluations for research agents</h3>",
        "kind": "heading",
        "cn": "<h3>研究智能体的提示词工程与评估</h3>"
      },
      {
        "en": "<p>Multi-agent systems have key differences from single-agent systems, including a rapid growth in coordination complexity. Early agents made errors like spawning 50 subagents for simple queries, scouring the web endlessly for nonexistent sources, and distracting each other with excessive updates. Since each agent is steered by a prompt, prompt engineering was our primary lever for improving these behaviors. Below are some principles we learned for prompting agents:</p>",
        "kind": "text",
        "cn": "<p>多智能体系统与单智能体系统存在关键差异，其中最显著的是协调复杂度的迅速增长。早期智能体会犯诸如为简单查询派生 50 个子智能体、无休止地搜索不存在的信息源、以及用过度更新相互干扰等错误。由于每个智能体都由提示词驱动，提示词工程是我们改进这些行为的首要手段。以下是我们总结的一些提示智能体的原则：</p>"
      },
      {
        "en": "<ol><li><strong>Think like your agents.</strong> To iterate on prompts, you must understand their effects. To help us do this, we built simulations using our <a href=\"https://console.anthropic.com/\" rel=\"noreferrer\" target=\"_blank\">Console</a> with the exact prompts and tools from our system, then watched agents work step-by-step. This immediately revealed failure modes: agents continuing when they already had sufficient results, using overly verbose search queries, or selecting incorrect tools. Effective prompting relies on developing an accurate mental model of the agent, which can make the most impactful changes obvious.</li><li><strong>Teach the orchestrator how to delegate.</strong> In our system, the lead agent decomposes queries into subtasks and describes them to subagents. Each subagent needs an objective, an output format, guidance on the tools and sources to use, and clear task boundaries. Without detailed task descriptions, agents duplicate work, leave gaps, or fail to find necessary information. We started by allowing the lead agent to give simple, short instructions like 'research the semiconductor shortage,' but found these instructions often were vague enough that subagents misinterpreted the task or performed the exact same searches as other agents. For instance, one subagent explored the 2021 automotive chip crisis while 2 others duplicated work investigating current 2025 supply chains, without an effective division of labor.</li><li><strong>Scale effort to query complexity.</strong> Agents struggle to judge appropriate effort for different tasks, so we embedded scaling rules in the prompts. Simple fact-finding requires just 1 agent with 3-10 tool calls, direct comparisons might need 2-4 subagents with 10-15 calls each, and complex research might use more than 10 subagents with clearly divided responsibilities. These explicit guidelines help the lead agent allocate resources efficiently and prevent overinvestment in simple queries, which was a common failure mode in our early versions.</li><li><strong>Tool design and selection are critical.</strong> Agent-tool interfaces are as critical as human-computer interfaces. Using the right tool is efficient—often, it's strictly necessary. For instance, an agent searching the web for context that only exists in Slack is doomed from the start. With <a href=\"https://modelcontextprotocol.io/introduction\" rel=\"noreferrer\" target=\"_blank\">MCP servers</a> that give the model access to external tools, this problem compounds, as agents encounter unseen tools with descriptions of wildly varying quality. We gave our agents explicit heuristics: for example, examine all available tools first, match tool usage to user intent, search the web for broad external exploration, or prefer specialized tools over generic ones. Bad tool descriptions can send agents down completely wrong paths, so each tool needs a distinct purpose and a clear description.</li><li><strong>Let agents improve themselves</strong>. We found that the Claude 4 models can be excellent prompt engineers. When given a prompt and a failure mode, they are able to diagnose why the agent is failing and suggest improvements. We even created a tool-testing agent—when given a flawed MCP tool, it attempts to use the tool and then rewrites the tool description to avoid failures. By testing the tool dozens of times, this agent found key nuances and bugs. This process for improving tool ergonomics resulted in a 40% decrease in task completion time for future agents using the new description, because they were able to avoid most mistakes.</li><li><strong>Start wide, then narrow down.</strong> Search strategy should mirror expert human research: explore the landscape before drilling into specifics. Agents often default to overly long, specific queries that return few results. We counteracted this tendency by prompting agents to start with short, broad queries, evaluate what's available, then progressively narrow focus.</li><li><strong>Guide the thinking process.</strong> <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking\" rel=\"noreferrer\" target=\"_blank\">Extended thinking mode</a>, which leads Claude to output additional tokens in a visible thinking process, can serve as a controllable scratchpad. The lead agent uses thinking to plan its approach, assessing which tools fit the task, determining query complexity and subagent count, and defining each subagent's role. Our testing showed that extended thinking improved instruction-following, reasoning, and efficiency. Subagents also plan, then use <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#interleaved-thinking\" rel=\"noreferrer\" target=\"_blank\">interleaved thinking</a> after tool results to evaluate quality, identify gaps, and refine their next query. This makes subagents more effective in adapting to any task.</li><li><strong>Parallel tool calling transforms speed and performance.</strong> Complex research tasks naturally involve exploring many sources. Our early agents executed sequential searches, which was painfully slow. For speed, we introduced two kinds of parallelization: (1) the lead agent spins up 3-5 subagents in parallel rather than serially; (2) the subagents use 3+ tools in parallel. These changes cut research time by up to 90% for complex queries, allowing Research to do more work in minutes instead of hours while covering more information than other systems.</li></ol>",
        "kind": "list",
        "cn": "<ol><li><strong>像你的智能体一样思考。</strong>要迭代提示词，你必须理解其效果。为此，我们使用<a href=\"https://console.anthropic.com/\" rel=\"noreferrer\" target=\"_blank\">控制台</a>构建了模拟环境，使用系统中的精确提示词和工具，逐步观察智能体的工作过程。这立即揭示了失败模式：智能体在已有足够结果时仍继续运行、使用过于冗长的搜索查询，或选择错误的工具。有效的提示词工程依赖于建立对智能体准确的心智模型，这能让最有影响力的改动一目了然。</li><li><strong>教导编排者如何委派任务。</strong>在我们的系统中，主智能体将查询分解为子任务并描述给子智能体。每个子智能体都需要明确目标、输出格式、工具和信息源的使用指导，以及清晰的任务边界。若缺乏详细的任务描述，智能体会重复工作、留下盲区，或未能找到必要信息。我们最初允许主智能体给出简短指令（如「研究半导体短缺」），但发现这类指令往往过于模糊，导致子智能体误解任务或执行与其他智能体相同的搜索。</li><li><strong>根据查询复杂度调整投入力度。</strong>智能体难以判断不同任务所需的适当投入，因此我们在提示词中嵌入了规模化规则：简单事实查找只需 1 个智能体进行 3-10 次工具调用；直接比较可能需要 2-4 个子智能体各进行 10-15 次调用；复杂研究可能需要 10 个以上子智能体并明确划分职责。</li><li><strong>工具设计与选择至关重要。</strong>智能体与工具的接口和人机接口同样重要。使用正确的工具不仅高效，在很多情况下更是必要条件。我们为智能体提供了明确的启发式方法：先检查所有可用工具、将工具使用与用户意图匹配、用网页搜索进行广泛的外部探索，或优先使用专用工具而非通用工具。糟糕的工具描述会将智能体引向完全错误的路径，因此每个工具都需要清晰的用途和描述。</li><li><strong>让智能体自我改进。</strong>我们发现 Claude 4 系列模型能够成为出色的提示词工程师。给定提示词和失败模式后，它们能够诊断智能体失败的原因并提出改进建议。我们甚至创建了一个工具测试智能体——给定有缺陷的 MCP 工具后，它会尝试使用该工具，然后重写工具描述以避免失败。通过数十次测试，该智能体发现了关键细节和漏洞，使后续智能体的任务完成时间减少了 40%。</li><li><strong>先广后窄。</strong>搜索策略应模仿专业的人类研究方式：先探索全局，再深入细节。智能体往往默认使用过于具体的长查询，导致结果寥寥。我们通过提示词引导智能体以短小、宽泛的查询开始，评估可用信息后再逐步缩小焦点。</li><li><strong>引导思考过程。</strong><a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking\" rel=\"noreferrer\" target=\"_blank\">扩展思考模式</a>让 Claude 在可见的思考过程中输出额外 token，可作为可控的草稿本。主智能体利用思考来规划方法：评估哪些工具适合任务、判断查询复杂度和子智能体数量、定义每个子智能体的角色。测试表明，扩展思考改善了指令遵循、推理能力和效率。</li><li><strong>并行工具调用大幅提升速度与性能。</strong>复杂研究任务天然涉及多个信息源的探索。我们早期的智能体执行串行搜索，速度极慢。为了提速，我们引入了两种并行化：（1）主智能体并行派生 3-5 个子智能体而非逐个启动；（2）子智能体并行使用 3 个以上工具。这些改动将复杂查询的研究时间缩短了高达 90%。</li></ol>"
      },
      {
        "en": "<p>Our prompting strategy focuses on instilling good heuristics rather than rigid rules. We studied how skilled humans approach research tasks and encoded these strategies in our prompts—strategies like decomposing difficult questions into smaller tasks, carefully evaluating the quality of sources, adjusting search approaches based on new information, and recognizing when to focus on depth (investigating one topic in detail) vs. breadth (exploring many topics in parallel). We also proactively mitigated unintended side effects by setting explicit guardrails to prevent the agents from spiraling out of control. Finally, we focused on a fast iteration loop with observability and test cases.</p>",
        "kind": "text",
        "cn": "<p>我们的提示词策略侧重于培养良好的启发式方法，而非制定僵硬的规则。由于多智能体系统复杂且动态，依赖僵硬规则可能适得其反。我们发现，具备良好原则的智能体在应对新情况时表现往往优于受严格规则约束的智能体。这一认识来之不易——需要花费大量时间观察智能体的工作过程、理解其推理方式，并培养对优质启发式方法的直觉。</p>"
      },
      {
        "en": "<h3>Effective evaluation of agents</h3>",
        "kind": "heading",
        "cn": "<h3>智能体的有效评估</h3>"
      },
      {
        "en": "<p>Good evaluations are essential for building reliable AI applications, and agents are no different. However, evaluating multi-agent systems presents unique challenges. Traditional evaluations often assume that the AI follows the same steps each time: given input X, the system should follow path Y to produce output Z. But multi-agent systems don't work this way. Even with identical starting points, agents might take completely different valid paths to reach their goal. One agent might search three sources while another searches ten, or they might use different tools to find the same answer. Because we don't always know what the right steps are, we usually can't just check if agents followed the &quot;correct&quot; steps we prescribed in advance. Instead, we need flexible evaluation methods that judge whether agents achieved the right outcomes while also following a reasonable process.</p>",
        "kind": "text",
        "cn": "<p>优质的评估对构建可靠的 AI 应用至关重要，而智能体比普通应用更难评估。这是因为智能体需要执行一系列动作、与外部环境交互，并在更长的时间跨度内运行。这使得因果归因更加困难——成功究竟源于智能体的决策，还是仅凭运气？我们如何设计能够自动判断智能体是否实现目标的评估机制，而无需人工检查每一步？</p>"
      },
      {
        "en": "<p><strong>Start evaluating immediately with small samples</strong>. In early agent development, changes tend to have dramatic impacts because there is abundant low-hanging fruit. A prompt tweak might boost success rates from 30% to 80%. With effect sizes this large, you can spot changes with just a few test cases. We started with a set of about 20 queries representing real usage patterns. Testing these queries often allowed us to clearly see the impact of changes. We often hear that AI developer teams delay creating evals because they believe that only large evals with hundreds of test cases are useful. However, it's best to start with small-scale testing right away with a few examples, rather than delaying until you can build more thorough evals.</p>",
        "kind": "text",
        "cn": "<p><strong>从小样本开始，立即着手评估。</strong>在智能体开发早期，最重要的是尽快开始收集数据。即使只有 10-20 个样本，也能揭示系统性失败模式。随着开发推进，通过持续扩大数据集来提高统计可信度。对于 Research 等功能，先对一小批有代表性的查询运行评估，然后快速迭代，再扩展到更大的评测集。</p>"
      },
      {
        "en": "<p><strong>LLM-as-judge evaluation scales when done well.</strong> Research outputs are difficult to evaluate programmatically, since they are free-form text and rarely have a single correct answer. LLMs are a natural fit for grading outputs. We used an LLM judge that evaluated each output against criteria in a rubric: factual accuracy (do claims match sources?), citation accuracy (do the cited sources match the claims?), completeness (are all requested aspects covered?), source quality (did it use primary sources over lower-quality secondary sources?), and tool efficiency (did it use the right tools a reasonable number of times?). We experimented with multiple judges to evaluate each component, but found that a single LLM call with a single prompt outputting scores from 0.0-1.0 and a pass-fail grade was the most consistent and aligned with human judgements. This method was especially effective when the eval test cases <em>did</em> have a clear answer, and we could use the LLM judge to simply check if the answer was correct (i.e. did it accurately list the pharma companies with the top 3 largest R&amp;D budgets?). Using an LLM as a judge allowed us to scalably evaluate hundreds of outputs.</p>",
        "kind": "text",
        "cn": "<p><strong>做好 LLM 即评判者的评估。</strong>Research 的输出结果——往往是数千字的结构化分析报告——难以进行精确匹配或规则验证。因此，我们将 LLM 用作评判者。但 LLM 评判者若设计不当，会产生偏差和噪声。为了解决这一问题，我们构建了专门的评判提示词，包含明确的评估维度（如准确性、全面性、引用质量），并对一致的标准进行了大量测试。对于高风险决策，我们要求两个独立的评判智能体给出评分，只有在两者一致时才采用自动结果。</p>"
      },
      {
        "en": "<p><strong>Human evaluation catches what automation misses.</strong> People testing agents find edge cases that evals miss. These include hallucinated answers on unusual queries, system failures, or subtle source selection biases. In our case, human testers noticed that our early agents consistently chose SEO-optimized content farms over authoritative but less highly-ranked sources like academic PDFs or personal blogs. Adding source quality heuristics to our prompts helped resolve this issue. Even in a world of automated evaluations, manual testing remains essential.</p>",
        "kind": "text",
        "cn": "<p><strong>人工评估能捕捉自动化遗漏的问题。</strong>人们在测试时往往能发现模型的失败，这些失败源于模型的系统性弱点——不一定是罕见的边界情况，而是固有的误解或盲区。任何自动评估框架都无法取代人工检查，尤其是在早期开发阶段。在我们的工作流中，人工测试和自动化评估是互补的。</p>"
      },
      {
        "en": "<p>Multi-agent systems have emergent behaviors, which arise without specific programming. For instance, small changes to the lead agent can unpredictably change how subagents behave. Success requires understanding interaction patterns, not just individual agent behavior. Therefore, the best prompts for these agents are not just strict instructions, but frameworks for collaboration that define the division of labor, problem-solving approaches, and effort budgets. Getting this right relies on careful prompting and tool design, solid heuristics, observability, and tight feedback loops. See the <a href=\"https://platform.claude.com/cookbook/patterns-agents-basic-workflows\" rel=\"noreferrer\" target=\"_blank\">open-source prompts in our Cookbook</a> for example prompts from our system.</p>",
        "kind": "text",
        "cn": "<p>多智能体系统具有涌现行为，这些行为并非源于具体的编程设定。例如，对主智能体的微小改动可能以难以预测的方式改变子智能体的行为。要取得成功，需要理解交互模式，而不仅仅是单个智能体的行为。因此，这些智能体的最佳提示词不只是严格的指令，而是定义了分工、问题解决方式和投入预算的协作框架。做到这一点依赖于精心的提示词设计和工具设计、扎实的启发式方法、可观测性以及紧密的反馈循环。请参阅我们 <a href=\"https://platform.claude.com/cookbook/patterns-agents-basic-workflows\" rel=\"noreferrer\" target=\"_blank\">Cookbook 中的开源提示词</a>了解示例。</p>"
      },
      {
        "en": "<h3>Production reliability and engineering challenges</h3>",
        "kind": "heading",
        "cn": "<h3>生产可靠性与工程挑战</h3>"
      },
      {
        "en": "<p>In traditional software, a bug might break a feature, degrade performance, or cause outages. In agentic systems, minor changes cascade into large behavioral changes, which makes it remarkably difficult to write code for complex agents that must maintain state in a long-running process.</p>",
        "kind": "text",
        "cn": "<p>在传统软件中，一个 bug 可能导致某个功能失效、性能下降或服务中断。而在智能体系统中，细微的改动会级联成大规模的行为变化，这使得为必须在长时间运行过程中保持状态的复杂智能体编写代码异常困难。</p>"
      },
      {
        "en": "<p><strong>Agents are stateful and errors compound.</strong> Agents can run for long periods of time, maintaining state across many tool calls. This means we need to durably execute code and handle errors along the way. Without effective mitigations, minor system failures can be catastrophic for agents. When errors occur, we can't just restart from the beginning: restarts are expensive and frustrating for users. Instead, we built systems that can resume from where the agent was when the errors occurred. We also use the model's intelligence to handle issues gracefully: for instance, letting the agent know when a tool is failing and letting it adapt works surprisingly well. We combine the adaptability of AI agents built on Claude with deterministic safeguards like retry logic and regular checkpoints.</p>",
        "kind": "text",
        "cn": "<p><strong>智能体是有状态的，错误会叠加。</strong>智能体可以运行很长时间，跨越多次工具调用维护状态。这意味着我们需要持久化执行代码并在过程中处理错误。若缺乏有效的缓解措施，细小的系统故障对智能体可能是灾难性的。当错误发生时，我们无法从头重启：重启成本高昂，对用户也很烦扰。为此，我们构建了能够从错误发生处恢复的系统。我们还借助模型的智能来优雅地处理问题：例如，告知智能体工具正在失败并让其自行适应，效果出人意料地好。我们将基于 Claude 构建的 AI 智能体的自适应能力与重试逻辑、定期检查点等确定性保障结合起来。</p>"
      },
      {
        "en": "<p><strong>Debugging benefits from new approaches.</strong> Agents make dynamic decisions and are non-deterministic between runs, even with identical prompts. This makes debugging harder. For instance, users would report agents &quot;not finding obvious information,&quot; but we couldn't see why. Were the agents using bad search queries? Choosing poor sources? Hitting tool failures? Adding full production tracing let us diagnose why agents failed and fix issues systematically. Beyond standard observability, we monitor agent decision patterns and interaction structures—all without monitoring the contents of individual conversations, to maintain user privacy. This high-level observability helped us diagnose root causes, discover unexpected behaviors, and fix common failures.</p>",
        "kind": "text",
        "cn": "<p><strong>调试需要新方法。</strong>智能体的决策是动态的，即便使用相同的提示词，不同运行间的结果也不确定。这使调试更加困难。例如，用户会反映智能体「找不到显而易见的信息」，但我们看不出原因——是搜索查询质量差？信息来源选择不当？还是工具调用失败？加入完整的生产链路追踪后，我们终于能够诊断智能体失败的原因并系统性地修复问题。这种高层次的可观测性帮助我们诊断根因、发现意外行为、修复常见故障。</p>"
      },
      {
        "en": "<p><strong>Deployment needs careful coordination.</strong> Agent systems are highly stateful webs of prompts, tools, and execution logic that run almost continuously. This means that whenever we deploy updates, agents might be anywhere in their process. We therefore need to prevent our well-meaning code changes from breaking existing agents. We can't update every agent to the new version at the same time. Instead, we use <a href=\"https://brandon.dimcheff.com/2018/02/rainbow-deploys-with-kubernetes/\" rel=\"noreferrer\" target=\"_blank\">rainbow deployments</a> to avoid disrupting running agents, by gradually shifting traffic from old to new versions while keeping both running simultaneously.</p>",
        "kind": "text",
        "cn": "<p><strong>部署需要精心协调。</strong>智能体系统是由提示词、工具和执行逻辑构成的高度有状态网络，几乎持续不间断地运行。这意味着每次部署更新时，智能体可能处于流程的任意位置。因此，我们需要防止善意的代码改动破坏正在运行的智能体。我们使用<a href=\"https://brandon.dimcheff.com/2018/02/rainbow-deploys-with-kubernetes/\" rel=\"noreferrer\" target=\"_blank\">彩虹部署（rainbow deployments）</a>来避免中断正在运行的智能体——通过保持新旧版本同时运行，逐步将流量从旧版本迁移到新版本。</p>"
      },
      {
        "en": "<p><strong>Synchronous execution creates bottlenecks.</strong> Currently, our lead agents execute subagents synchronously, waiting for each set of subagents to complete before proceeding. This simplifies coordination, but creates bottlenecks in the information flow between agents. For instance, the lead agent can't steer subagents, subagents can't coordinate, and the entire system can be blocked while waiting for a single subagent to finish searching. Asynchronous execution would enable additional parallelism: agents working concurrently and creating new subagents when needed. But this asynchronicity adds challenges in result coordination, state consistency, and error propagation across the subagents. As models can handle longer and more complex research tasks, we expect the performance gains will justify the complexity.</p>",
        "kind": "text",
        "cn": "<p><strong>同步执行造成瓶颈。</strong>目前，我们的主智能体同步执行子智能体，等待每批子智能体完成后再继续。这简化了协调，但在智能体间的信息流中造成了瓶颈。例如，主智能体无法引导正在执行的子智能体，子智能体之间无法协调，整个系统可能因等待某个子智能体完成搜索而阻塞。异步执行将实现更多并行化，但会在结果协调、状态一致性和错误传播方面带来新挑战。随着模型能够处理更长、更复杂的研究任务，我们预期性能提升将证明这种复杂性的引入是值得的。</p>"
      },
      {
        "en": "<h3>Conclusion</h3>",
        "kind": "heading",
        "cn": "<h3>结语</h3>"
      },
      {
        "en": "<p>When building AI agents, the last mile often becomes most of the journey. Codebases that work on developer machines require significant engineering to become reliable production systems. The compound nature of errors in agentic systems means that minor issues for traditional software can derail agents entirely. One step failing can cause agents to explore entirely different trajectories, leading to unpredictable outcomes. For all the reasons described in this post, the gap between prototype and production is often wider than anticipated.</p>",
        "kind": "text",
        "cn": "<p>构建 AI 智能体时，「最后一公里」往往占据了大半旅程。在开发机器上运行良好的代码库，需要大量工程工作才能成为可靠的生产系统。智能体系统中错误的叠加特性意味着，传统软件中的小问题足以让智能体彻底出轨。一个步骤的失败可能导致智能体走向完全不同的轨迹，产生难以预料的结果。出于本文所述的种种原因，从原型到生产之间的鸿沟往往远比预期的要宽。</p>"
      },
      {
        "en": "<p>Despite these challenges, multi-agent systems have proven valuable for open-ended research tasks. Users have said that Claude helped them find business opportunities they hadn't considered, navigate complex healthcare options, resolve thorny technical bugs, and save up to days of work by uncovering research connections they wouldn't have found alone. Multi-agent research systems can operate reliably at scale with careful engineering, comprehensive testing, detail-oriented prompt and tool design, robust operational practices, and tight collaboration between research, product, and engineering teams who have a strong understanding of current agent capabilities. We're already seeing these systems transform how people solve complex problems.</p>",
        "kind": "text",
        "cn": "<p>尽管如此，多智能体系统已经在开放式研究任务中证明了自身价值。用户反映 Claude 帮助他们发现了未曾考虑过的商业机会、梳理了复杂的医疗保健选项、解决了棘手的技术 bug，并通过发现他们独自无法找到的研究关联节省了数天工作时间。多智能体研究系统可以在精心的工程设计、全面的测试、注重细节的提示词与工具设计、健壮的运营实践，以及充分理解当前智能体能力的团队紧密协作下，实现大规模可靠运行。</p>"
      },
      {
        "en": "<p>&lt;img src='https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F09a90e0aca54859553e93c18683e7fd33ff16d4c-2654x2148.png&amp;amp;w=3840&amp;amp;q=75' alt='' title='' width='2654' height='2148' /&gt;</p>",
        "kind": "text",
        "cn": "<p>&lt; img src = 'https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F09a90e0aca54859553e93c18683e7fd33ff16d4c-2654x2148.png&amp;w=3840&amp;q=75' alt = '' title = '' width = '2654' height = '2148'/&gt;</p>"
      },
      {
        "en": "<p><em>A <a href=\"https://www.anthropic.com/research/clio\" rel=\"noreferrer\" target=\"_blank\">Clio</a> embedding plot showing the most common ways people are using the Research feature today. The top use case categories are developing software systems across specialized domains (10%), develop and optimize professional and technical content (8%), develop business growth and revenue generation strategies (8%), assist with academic research and educational material development (7%), and research and verify information about people, places, or organizations (5%).</em></p>",
        "kind": "text",
        "cn": "<p><em><a href=\"https://www.anthropic.com/research/clio\" rel=\"noreferrer\" target=\"_blank\">Clio</a> 嵌入分布图，展示了人们当前使用 Research 功能最常见的方式。排名前五的使用场景类别依次为：跨专业领域开发软件系统（10%）、开发和优化专业技术内容（8%）、制定业务增长与创收策略（8%）、协助学术研究和教育材料开发（7%），以及研究和核实有关人物、地点或组织的信息（5%）。</em></p>"
      },
      {
        "en": "<h3>Acknowlegements</h3>",
        "kind": "heading",
        "cn": "<h3>致谢</h3>"
      },
      {
        "en": "<p>Written by Jeremy Hadfield, Barry Zhang, Kenneth Lien, Florian Scholz, Jeremy Fox, and Daniel Ford. This work reflects the collective efforts of several teams across Anthropic who made the Research feature possible. Special thanks go to the Anthropic apps engineering team, whose dedication brought this complex multi-agent system to production. We're also grateful to our early users for their excellent feedback.</p>",
        "kind": "text",
        "cn": "<p>本文由 Jeremy Hadfield、Barry Zhang、Kenneth Lien、Florian Scholz、Jeremy Fox 和 Daniel Ford 撰写。这项工作凝聚了 Anthropic 多个团队的共同努力。特别感谢 Anthropic 应用工程团队，他们的付出将这套复杂的多智能体系统推进到了生产环境。我们也对早期用户提供的宝贵反馈深表感谢。</p>"
      },
      {
        "en": "<h2>Appendix</h2>",
        "kind": "heading",
        "cn": "<h2>附录</h2>"
      },
      {
        "en": "<p>Below are some additional miscellaneous tips for multi-agent systems.</p>",
        "kind": "text",
        "cn": "<p>以下是关于多智能体系统的一些补充提示。</p>"
      },
      {
        "en": "<p><strong>End-state evaluation of agents that mutate state over many turns.</strong> Evaluating agents that modify persistent state across multi-turn conversations presents unique challenges. Unlike read-only research tasks, each action can change the environment for subsequent steps, creating dependencies that traditional evaluation methods struggle to handle. We found success focusing on end-state evaluation rather than turn-by-turn analysis. Instead of judging whether the agent followed a specific process, evaluate whether it achieved the correct final state. This approach acknowledges that agents may find alternative paths to the same goal while still ensuring they deliver the intended outcome. For complex workflows, break evaluation into discrete checkpoints where specific state changes should have occurred, rather than attempting to validate every intermediate step.</p>",
        "kind": "text",
        "cn": "<p><strong>对跨多轮次改变状态的智能体进行终态评估。</strong>评估在多轮对话中修改持久状态的智能体面临独特挑战。与只读的研究任务不同，每次操作都可能改变后续步骤的环境，形成传统评估方法难以处理的依赖关系。我们的经验是专注于终态评估，而非逐轮分析——不去判断智能体是否遵循了特定流程，而是评估它是否达到了正确的最终状态。对于复杂工作流，将评估分解为若干离散检查点，而非试图验证每个中间步骤。</p>"
      },
      {
        "en": "<p><strong>Long-horizon conversation management.</strong> Production agents often engage in conversations spanning hundreds of turns, requiring careful context management strategies. As conversations extend, standard context windows become insufficient, necessitating intelligent compression and memory mechanisms. We implemented patterns where agents summarize completed work phases and store essential information in external memory before proceeding to new tasks. When context limits approach, agents can spawn fresh subagents with clean contexts while maintaining continuity through careful handoffs. Further, they can retrieve stored context like the research plan from their memory rather than losing previous work when reaching the context limit. This distributed approach prevents context overflow while preserving conversation coherence across extended interactions.</p>",
        "kind": "text",
        "cn": "<p><strong>长周期对话管理。</strong>生产智能体通常需要进行跨越数百轮的对话，这需要精心的上下文管理策略。随着对话延伸，标准上下文窗口变得不够用，必须引入智能压缩和记忆机制。我们实现了如下模式：智能体在完成一个工作阶段后对其进行总结，并将关键信息存入外部记忆，再继续新任务。当上下文限制临近时，智能体可以派生具有全新上下文的子智能体，同时通过精心的交接保持连续性。这种分布式方式既能防止上下文溢出，又能在长时间交互中保持对话连贯性。</p>"
      },
      {
        "en": "<p><strong>Subagent output to a filesystem to minimize the 'game of telephone.'</strong> Direct subagent outputs can bypass the main coordinator for certain types of results, improving both fidelity and performance. Rather than requiring subagents to communicate everything through the lead agent, implement artifact systems where specialized agents can create outputs that persist independently. Subagents call tools to store their work in external systems, then pass lightweight references back to the coordinator. This prevents information loss during multi-stage processing and reduces token overhead from copying large outputs through conversation history. The pattern works particularly well for structured outputs like code, reports, or data visualizations where the subagent's specialized prompt produces better results than filtering through a general coordinator.</p>",
        "kind": "text",
        "cn": "<p><strong>将子智能体输出写入文件系统，减少「传话游戏」效应。</strong>对于某些类型的结果，子智能体的输出可以绕过主协调者直接传递，从而提高保真度和性能。不必要求子智能体将所有内容都通过主智能体传递，而是构建制品系统——专业智能体可以创建独立持久化的输出。子智能体调用工具将工作存入外部系统，再将轻量级引用传回协调者。这能防止多阶段处理中的信息损失，并减少在对话历史中复制大型输出所带来的 token 开销。</p>"
      }
    ]
  },
  {
    "id": 10,
    "title": "Building a C compiler with a team of parallel Claudes",
    "date": "2026-02-05",
    "diff": "★★★",
    "time": "30分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/building-c-compiler",
    "vocab": [
      {
        "en": "compiler",
        "cn": "编译器",
        "ex": "Engineering at Anthropic # Building a C compiler with a team of parallel Claudes Published Feb 05, 2026 We tasked Opus 4"
      },
      {
        "en": "C compiler",
        "cn": "C 编译器",
        "ex": "Engineering at Anthropic # Building a C compiler with a team of parallel Claudes Published Feb 05, 2026 We tasked Opus 4"
      },
      {
        "en": "test harness",
        "cn": "测试框架",
        "ex": "To address this, I built a continuous integration pipeline and implemented stricter enforcement that allowed Claude to b"
      },
      {
        "en": "stress testing",
        "cn": "压力测试",
        "ex": "Enabling long-running Claudes - Enabling long-running Claudes - Running Claude in parallel - Lessons from programming wi"
      },
      {
        "en": "parallel Claude",
        "cn": "并行 Claude",
        "ex": "My implementation of parallel Claude is bare-bones."
      },
      {
        "en": "Rust-based C compiler",
        "cn": "基于 Rust 的 C 编译器",
        "ex": "To stress test it, I tasked 16 agents with writing a Rust-based C compiler, from scratch, capable of compiling the Linux"
      },
      {
        "en": "shared codebase",
        "cn": "共享代码库",
        "ex": "I've been experimenting with a new approach to supervising language models that we're calling \"agent teams.\" With agent "
      },
      {
        "en": "multiple agent roles",
        "cn": "多智能体角色",
        "ex": "This let each agent work in parallel, fixing different bugs in different files, until Claude's compiler could eventually"
      },
      {
        "en": "human intervention",
        "cn": "人工干预",
        "ex": "I've been experimenting with a new approach to supervising language models that we're calling \"agent teams.\" With agent "
      },
      {
        "en": "autonomous progress",
        "cn": "自主推进",
        "ex": "To elicit sustained, autonomous progress, I built a harness that sticks Claude in a simple loop (if you've seen Ralph-lo"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>一组并行 Claude 可以参与构建 C 编译器，把复杂工程任务拆成测试、实现、调试和文档等子任务。阅读重点是并行 agent 团队如何协作，以及测试体系如何约束结果质量。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Enabling long-running Claudes</strong></div><p>Enabling long-running Claudes：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Running Claude in parallel</strong></div><p>Running Claude in parallel：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Lessons from programming with Claude agent teams</strong></div><p>Lessons from programming with Claude agent teams：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Write extremely high-quality tests</strong></div><p>Write extremely high-quality tests：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Put yourself in Claude's shoes</strong></div><p>Put yourself in Claude's shoes：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Make parallelism easy</strong></div><p>Make parallelism easy：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>Multiple agent roles</strong></div><p>Multiple agent roles：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Stress testing the limits of agent teams</strong></div><p>Stress testing the limits of agent teams：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Evaluation</strong></div><p>Evaluation：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">解释动机</span><strong>Looking forward</strong></div><p>Looking forward：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>Enabling long-running Claudes <span class=\"en\">长周期运行</span></h4><p><strong>本文语境：</strong>Existing agent scaffolds like Claude Code require an operator to be online and available to work jointly.</p><p><strong>英文表达：先把 long-running 理解成本文里的功能角色，而不是只背成“长周期运行”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>智能体的价值来自可观察的环境反馈和清晰停止条件，不是把所有步骤都交给模型自由发挥。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>Running Claude in parallel <span class=\"en\">并行化</span></h4><p><strong>本文语境：</strong>Running multiple instances in parallel can address two weaknesses of a single-agent harness: - One Claude Code session can only do one thing at a time.</p><p><strong>英文表达：先把 parallelization 理解成本文里的功能角色，而不是只背成“并行化”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>这类模式的核心是拆分任务和控制流程，先判断任务是否可预测，再决定用固定流程还是动态分工。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Lessons from programming with Claude agent teams <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>The scaffolding runs Claude in a loop, but that loop is only useful if Claude can tell how to make progress.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Write extremely high-quality tests <span class=\"en\">测试</span></h4><p><strong>本文语境：</strong>Claude will work autonomously to solve whatever problem I give it.</p><p><strong>英文表达：先把 testing 理解成本文里的功能角色，而不是只背成“测试”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Put yourself in Claude's shoes <span class=\"en\">测试框架</span></h4><p><strong>本文语境：</strong>I had to constantly remind myself that I was writing this test harness for Claude and not for myself, which meant rethinking many of my assumptions about how tests should communicate results.</p><p><strong>英文表达：先把 test harness 理解成本文里的功能角色，而不是只背成“测试框架”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>Make parallelism easy <span class=\"en\">编译器</span></h4><p><strong>本文语境：</strong>When there are many distinct failing tests, parallelization is trivial: each agent picks a different failing test to work on.</p><p><strong>英文表达：先把 compiler 理解成本文里的功能角色，而不是只背成“编译器”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Building a C compiler with a team of parallel Claudes》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 compiler（编译器） / C compiler（C 编译器） / test harness（测试框架） / stress testing（压力测试） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p><a href=\"https://www.anthropic.com/engineering\" rel=\"noreferrer\" target=\"_blank\">Engineering at Anthropic</a></p>",
        "kind": "text",
        "cn": "<p><a href=\"https://www.anthropic.com/engineering\" rel=\"noreferrer\" target=\"_blank\">Anthropic 工程博客</a></p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"\" src=\"https://aka.doubaocdn.com/s/kn4i1wZqw8\" loading=\"lazy\" /></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>We tasked Opus 4.6 using agent teams to build a C Compiler, and then (mostly) walked away. Here's what it taught us about the future of autonomous software development.</p>",
        "kind": "text",
        "cn": "<p>我们让 Opus 4.6 使用智能体团队来构建一个 C 编译器，然后（基本上）放手不管。以下是这次实验揭示的关于自主软件开发未来的思考。</p>"
      },
      {
        "en": "<p>Enabling long-running Claudes</p>",
        "kind": "text",
        "cn": "<p>让 Claude 持续长时间运行</p>"
      },
      {
        "en": "<ul><li>Enabling long-running Claudes</li></ul>",
        "kind": "list",
        "cn": "<ul><li>让 Claude 持续长时间运行</li></ul>"
      },
      {
        "en": "<ul><li>Running Claude in parallel</li></ul>",
        "kind": "list",
        "cn": "<ul><li>并行运行 Claude</li></ul>"
      },
      {
        "en": "<ul><li>Lessons from programming with Claude agent teams</li></ul>",
        "kind": "list",
        "cn": "<ul><li>与 Claude 智能体团队协作编程的经验教训</li></ul>"
      },
      {
        "en": "<ul><li>Stress testing the limits of agent teams</li></ul>",
        "kind": "list",
        "cn": "<ul><li>压力测试智能体团队的极限</li></ul>"
      },
      {
        "en": "<ul><li>Looking forward</li></ul>",
        "kind": "list",
        "cn": "<ul><li>展望未来</li></ul>"
      },
      {
        "en": "<p><em>Written by Nicholas Carlini, a researcher on our Safeguards team. </em></p>",
        "kind": "text",
        "cn": "<p><em>作者：Nicholas Carlini，Anthropic 安全团队研究员。</em></p>"
      },
      {
        "en": "<p>I've been experimenting with a new approach to supervising language models that we're calling &quot;agent teams.&quot;</p>",
        "kind": "text",
        "cn": "<p>我一直在试验一种新的语言模型监督方式，我们称之为「智能体团队」。</p>"
      },
      {
        "en": "<p>With agent teams, multiple Claude instances work in parallel on a shared codebase without active human intervention. This approach dramatically expands the scope of what's achievable with LLM agents.</p>",
        "kind": "text",
        "cn": "<p>在智能体团队中，多个 Claude 实例在共享代码库上并行工作，无需人工主动干预。这种方式极大地拓展了 LLM 智能体所能实现的范围。</p>"
      },
      {
        "en": "<p>To stress test it, I tasked 16 agents with writing a Rust-based C compiler, from scratch, capable of compiling the Linux kernel. Over nearly 2,000 Claude Code sessions and $20,000 in API costs, the agent team produced a 100,000-line compiler that can build Linux 6.9 on x86, ARM, and RISC-V.</p>",
        "kind": "text",
        "cn": "<p>为了压力测试这一方式，我让 16 个智能体从头编写一个基于 Rust 的 C 编译器，要求能够编译 Linux 内核。经过近 2,000 个 Claude Code 会话和 20,000 美元的 API 费用，智能体团队产出了一个能在 x86、ARM 和 RISC-V 上构建 Linux 6.9 的 10 万行编译器。</p>"
      },
      {
        "en": "<p><a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">The compiler is an interesting artifact</a> on its own, but I focus here on what I learned about designing harnesses for long-running autonomous agent teams: how to write tests that keep agents on track without human oversight, how to structure work so multiple agents can make progress in parallel, and where this approach hits its ceiling.</p>",
        "kind": "text",
        "cn": "<p><a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">这个编译器本身是个有趣的产物</a>，但我在这里主要关注的是我从中学到的关于为长时间运行的自主智能体团队设计执行框架的经验：如何编写在无人监督情况下让智能体保持正轨的测试、如何组织工作使多个智能体能并行推进，以及这种方式在哪里触碰到了天花板。</p>"
      },
      {
        "en": "<h2>Enabling long-running Claudes</h2>",
        "kind": "heading",
        "cn": "<h2>让 Claude 持续长时间运行</h2>"
      },
      {
        "en": "<p>Existing agent scaffolds like Claude Code require an operator to be online and available to work jointly. If you ask for a solution to a long and complex problem, the model may solve part of it, but eventually it will stop and wait for continued input—a question, a status update, or a request for clarification.</p>",
        "kind": "text",
        "cn": "<p>现有的智能体脚手架（如 Claude Code）需要操作员在线并协同工作。如果你要求模型解决一个漫长而复杂的问题，它可能会完成其中的一部分，但最终会停下来等待进一步输入——一个问题、一次状态更新或一个澄清请求。</p>"
      },
      {
        "en": "<p>To elicit sustained, autonomous progress, I built a harness that sticks Claude in a simple loop (if you've seen Ralph-loop, this should look familiar). When it finishes one task, it immediately picks up the next. <em>(Run this in a container, not your actual machine).</em></p>",
        "kind": "text",
        "cn": "<p>为了让模型持续自主地推进，我构建了一个将 Claude 置于简单循环中的执行框架（如果你见过 Ralph-loop，这看起来会很眼熟）。当它完成一个任务后，立即接取下一个。<em>（请在容器中运行，而不是在你的实际机器上。）</em></p>"
      },
      {
        "en": "<pre><code>#!/bin/bash\n\nwhile true; do\n COMMIT=$(git rev-parse --short=6 HEAD)\n LOGFILE=&quot;agent_logs/agent_${COMMIT}.log&quot;\n\n claude --dangerously-skip-permissions \\\n -p &quot;$(cat AGENT_PROMPT.md)&quot; \\\n --model claude-opus-X-Y &amp;&gt; &quot;$LOGFILE&quot;\ndone</code></pre>",
        "kind": "code",
        "cn": "<p>#!/bin/bash while true; do COMMIT = $ (git rev-parse --short = 6 HEAD) LOGFILE = \"agent_logs/agent_${COMMIT} .log\" claude --dangerously-skip-permissions\\ -p \"$ (cat AGENT_PROMPT.md)\"\\ --model claude-opus-X-Y & &gt; \"$ LOGFILE\"已完成</p>"
      },
      {
        "en": "<p>In the agent prompt, I tell Claude what problem to solve and ask it to approach the problem by breaking it into small pieces, tracking what it's working on, figuring out what to work on next, and to effectively keep going until it's perfect. (On this last point, Claude has no choice. The loop runs forever—although in one instance, I did see Claude <code>pkill -9 bash</code> on accident, thus killing itself and ending the loop. Whoops!).</p>",
        "kind": "text",
        "cn": "<p>在智能体提示词中，我告诉 Claude 要解决什么问题，并要求它通过将问题拆解成小块、追踪当前进展、判断下一步该做什么来推进，并持续工作直到做到完美。（关于最后一点，Claude 别无选择——循环永远运行。不过有一次，我确实看到 Claude 不小心执行了 <code>pkill -9 bash</code>，从而把自己杀死、终止了循环。哎！）</p>"
      },
      {
        "en": "<h2>Running Claude in parallel</h2>",
        "kind": "heading",
        "cn": "<h2>并行运行 Claude</h2>"
      },
      {
        "en": "<p>Running multiple instances in parallel can address two weaknesses of a single-agent harness:</p>",
        "kind": "text",
        "cn": "<p>并行运行多个实例可以弥补单智能体执行框架的两个弱点：</p>"
      },
      {
        "en": "<ul><li>One Claude Code session can only do one thing at a time. Especially as the scope of a project expands, debugging multiple issues in parallel is far more efficient.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>单个 Claude Code 会话一次只能做一件事。尤其是随着项目规模扩大，并行调试多个问题的效率要高得多。</li></ul>"
      },
      {
        "en": "<ul><li>Running multiple Claude agents allows for specialization. While a few agents are tasked to solve the actual problem at hand, other specialized agents can be invoked to (for example) maintain documentation, keep an eye on code quality, or solve specialized sub-tasks.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>运行多个 Claude 智能体可以实现专业化分工。在几个智能体专注于解决核心问题的同时，其他专业智能体可以被调用来（例如）维护文档、关注代码质量或解决专项子任务。</li></ul>"
      },
      {
        "en": "<p>My implementation of parallel Claude is bare-bones. A new bare git repo is created, and for each agent, a Docker container is spun up with the repo mounted to <code>/upstream</code>. Each agent clones a local copy to <code>/workspace</code>, and when it's done, pushes from its own local container to upstream.</p>",
        "kind": "text",
        "cn": "<p>我的并行 Claude 实现非常简单。先创建一个裸 Git 仓库，为每个智能体启动一个挂载该仓库到 <code>/upstream</code> 的 Docker 容器。每个智能体将仓库克隆到本地 <code>/workspace</code>，完成工作后从自己的容器推送到 upstream。</p>"
      },
      {
        "en": "<p>To prevent two agents from trying to solve the same problem at the same time, the harness uses a simple synchronization algorithm:</p>",
        "kind": "text",
        "cn": "<p>为防止两个智能体同时尝试解决同一问题，执行框架使用了一个简单的同步算法：</p>"
      },
      {
        "en": "<ol><li>Claude takes a &quot;lock&quot; on a task by writing a text file to current_tasks/ (e.g., one agent might lock current_tasks/parse_if_statement.txt, while another locks current_tasks/codegen_function_definition.txt). If two agents try to claim the same task, git's synchronization forces the second agent to pick a different one.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>Claude 通过向 current_tasks/ 写入文本文件来「锁定」一个任务（例如，一个智能体可能锁定 current_tasks/parse_if_statement.txt，另一个锁定 current_tasks/codegen_function_definition.txt）。如果两个智能体试图声明同一个任务，Git 的同步机制会迫使第二个智能体选择另一个任务。</li></ol>"
      },
      {
        "en": "<ol><li>Claude works on the task, then pulls from upstream, merges changes from other agents, pushes its changes, and removes the lock. Merge conflicts are frequent, but Claude is smart enough to figure that out.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>Claude 完成任务后，从 upstream 拉取最新代码、合并其他智能体的变更、推送自己的修改，并释放锁。合并冲突很常见，但 Claude 足够聪明，能够自行处理。</li></ol>"
      },
      {
        "en": "<ol><li>The infinite agent-generation-loop spawns a new Claude Code session in a fresh container, and the cycle repeats.</li></ol>",
        "kind": "list",
        "cn": "<ol><li>无限智能体生成循环在新容器中启动一个新的 Claude Code 会话，循环往复。</li></ol>"
      },
      {
        "en": "<p>This is a very early research prototype. I haven't yet implemented any other method for communication between agents, nor do I enforce any process for managing high-level goals. I don't use an orchestration agent.</p>",
        "kind": "text",
        "cn": "<p>这是一个非常早期的研究原型。我尚未实现智能体之间任何其他通信方式，也没有强制执行管理高层目标的任何流程，不使用编排智能体。</p>"
      },
      {
        "en": "<p>Instead, I leave it up to each Claude agent to decide how to act. In most cases, Claude picks up the &quot;next most obvious&quot; problem. When stuck on a bug, Claude will often maintain a running doc of failed approaches and remaining tasks. In the <a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">git repository</a> of the project, you can read through the history and watch it take out locks on various tasks.</p>",
        "kind": "text",
        "cn": "<p>相反，我把决策权交给每个 Claude 智能体。在大多数情况下，Claude 会自行找到「下一个最显而易见」的问题。遇到 bug 时，Claude 通常会维护一份记录已尝试方法和剩余任务的文档。在项目的 <a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">Git 仓库</a>中，你可以翻阅历史记录，观察它对各种任务加锁的过程。</p>"
      },
      {
        "en": "<h2>Lessons from programming with Claude agent teams</h2>",
        "kind": "heading",
        "cn": "<h2>与 Claude 智能体团队协作编程的经验教训</h2>"
      },
      {
        "en": "<p>The scaffolding runs Claude in a loop, but that loop is only useful if Claude can tell how to make progress. Most of my effort went into designing the environment around Claude—the tests, the environment, the feedback—so that it could orient itself without me. These are the approaches I've found most helpful when orchestrating multiple Claude instances.</p>",
        "kind": "text",
        "cn": "<p>脚手架将 Claude 置于循环中运行，但只有当 Claude 知道如何推进时，这个循环才有价值。我的大部分精力都花在了为 Claude 设计周围的环境上——测试、执行环境、反馈——让它无需我的介入就能自我定向。以下是我在编排多个 Claude 实例时发现最有效的方法。</p>"
      },
      {
        "en": "<h3>Write extremely high-quality tests</h3>",
        "kind": "heading",
        "cn": "<h3>编写极高质量的测试</h3>"
      },
      {
        "en": "<p>Claude will work autonomously to solve whatever problem I give it. So it's important that the task verifier is nearly perfect, otherwise Claude will solve the wrong problem. Improving the testing harness required finding high-quality compiler test suites, writing verifiers and build scripts for open-source software packages, and watching for mistakes Claude was making, then designing new tests as I identified those failure modes.</p>",
        "kind": "text",
        "cn": "<p>Claude 会自主地解决我交给它的任何问题。因此，任务验证器几乎必须无懈可击，否则 Claude 会解决错误的问题。改进测试框架需要找到高质量的编译器测试套件、为开源软件包编写验证器和构建脚本，并持续观察 Claude 所犯的错误，在发现失败模式后针对性地设计新测试。</p>"
      },
      {
        "en": "<p>For example, near the end of the project, Claude started to frequently break existing functionality each time it implemented a new feature. To address this, I built a continuous integration pipeline and implemented stricter enforcement that allowed Claude to better test its work so that new commits can't break existing code.</p>",
        "kind": "text",
        "cn": "<p>例如，在项目接近尾声时，Claude 每次实现新功能都会频繁地破坏已有功能。为此，我构建了一条持续集成流水线，并实施了更严格的约束，让 Claude 能更好地测试自己的工作，确保新提交不会破坏已有代码。</p>"
      },
      {
        "en": "<h3>Put yourself in Claude's shoes</h3>",
        "kind": "heading",
        "cn": "<h3>站在 Claude 的角度思考</h3>"
      },
      {
        "en": "<p>I had to constantly remind myself that I was writing this test harness for Claude and not for myself, which meant rethinking many of my assumptions about how tests should communicate results.</p>",
        "kind": "text",
        "cn": "<p>我必须不断提醒自己：这个测试框架是为 Claude 写的，不是为我写的。这意味着我需要重新审视很多关于测试应如何传递结果的假设。</p>"
      },
      {
        "en": "<p>For example, each agent is dropped into a fresh container with no context and will spend significant time orienting itself, especially on large projects. Before we even reach the tests, to help Claude help itself, I included instructions to maintain extensive READMEs and progress files that should be updated frequently with the current status.</p>",
        "kind": "text",
        "cn": "<p>例如，每个智能体都会被投入一个没有任何上下文的全新容器，尤其是在大型项目中，它会花费大量时间来定位自己。在进入测试之前，为了帮助 Claude 自助，我加入了维护详尽 README 和进度文件的指令，要求频繁更新当前状态。</p>"
      },
      {
        "en": "<p>I also kept in mind the fact that language models have inherent limitations, which, in this case, needed to be designed around. These include:</p>",
        "kind": "text",
        "cn": "<p>我还时刻牢记语言模型的固有局限性——在这个项目中，这些局限性需要在设计上加以规避。包括：</p>"
      },
      {
        "en": "<ul><li><strong>Context window pollution:</strong>  The test harness should not print thousands of useless bytes. At most, it should print a few lines of output and log all important information to a file so Claude can find it when needed. Logfiles should be easy to process automatically: if there are errors, Claude should write ERROR and put the reason on the same line so grep will find it. It helps to pre-compute aggregate summary statistics so Claude doesn't have to recompute them.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>上下文污染：</strong>测试框架不应打印数千字节的无用内容。最多只应输出几行，并将所有重要信息记录到文件中，以便 Claude 需要时查阅。日志文件应便于自动处理：如果有错误，Claude 应写入 ERROR 并在同一行写明原因，这样 grep 就能找到它。预先计算汇总统计数据也很有帮助，这样 Claude 就不需要重新计算。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Time blindness:</strong>  Claude can't tell time and, left alone, will happily spend hours running tests instead of making progress. The harness prints incremental progress infrequently (to avoid polluting context) and includes a default <code>--fast </code>option that runs a 1% or 10% random sample. This subsample is deterministic per-agent but random across VMs, so Claude still covers all files but each agent can perfectly identify regressions.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>时间盲视：</strong>Claude 无法感知时间，如果放任自流，它会心甘情愿地花好几个小时跑测试而不是推进功能。框架会低频输出增量进度（以避免污染上下文），并包含一个默认的 <code>--fast</code> 选项，随机抽取 1% 或 10% 的样本运行。这个子样本对每个智能体是确定性的，但在不同虚拟机间是随机的，因此 Claude 仍然能覆盖所有文件，而每个智能体又能精确识别回归问题。</li></ul>"
      },
      {
        "en": "<h3>Make parallelism easy</h3>",
        "kind": "heading",
        "cn": "<h3>让并行化变得简单</h3>"
      },
      {
        "en": "<p>When there are many distinct failing tests, parallelization is trivial: each agent picks a different failing test to work on. After the test suite reached a 99% pass rate, each agent worked on getting a different small open-source project (e.g., SQlite, Redis, libjpeg, MQuickJS, Lua) to compile.</p>",
        "kind": "text",
        "cn": "<p>当有大量不同的失败测试时，并行化非常直接：每个智能体选择一个不同的失败测试来攻克。在测试套件通过率达到 99% 后，每个智能体转而负责让一个不同的小型开源项目（如 SQLite、Redis、libjpeg、MQuickJS、Lua）成功编译。</p>"
      },
      {
        "en": "<p>But when agents started to compile the Linux kernel, they got stuck. Unlike a test suite with hundreds of independent tests, compiling the Linux kernel is one giant task. Every agent would hit the same bug, fix that bug, and then overwrite each other's changes. Having 16 agents running didn't help because each was stuck solving the same task.</p>",
        "kind": "text",
        "cn": "<p>但当智能体开始尝试编译 Linux 内核时，它们卡住了。与拥有数百个独立测试的测试套件不同，编译 Linux 内核是一个巨大的单一任务。每个智能体都会遇到相同的 bug，修复这个 bug，然后覆盖彼此的改动。16 个智能体同时运行却毫无帮助，因为每个都被困在同一个任务上。</p>"
      },
      {
        "en": "<p>The fix was to use <a href=\"https://gcc.gnu.org/\" rel=\"noreferrer\" target=\"_blank\">GCC </a>as an online known-good compiler oracle to compare against. I wrote a new test harness that randomly compiled most of the kernel using GCC, and only the remaining files with Claude's C Compiler. If the kernel worked, then the problem wasn't in Claude's subset of the files. If it broke, then it could further refine by re-compiling some of these files with GCC. This let each agent work in parallel, fixing different bugs in different files, until Claude's compiler could eventually compile all files. (After this worked, it was still necessary to apply delta debugging techniques to find pairs of files that failed together but worked independently.)</p>",
        "kind": "text",
        "cn": "<p>解决方案是将 <a href=\"https://gcc.gnu.org/\" rel=\"noreferrer\" target=\"_blank\">GCC</a> 作为在线的已知可靠编译器参照。我编写了一个新的测试框架，随机用 GCC 编译内核中的大部分文件，只用 Claude 的 C 编译器编译其余部分。如果内核能正常工作，说明问题不在 Claude 负责的文件中；如果出错，可以进一步将部分文件改回用 GCC 编译来缩小范围。这让每个智能体能并行工作，修复不同文件中的不同 bug，直到 Claude 的编译器最终能够编译所有文件。（即便如此，之后仍然需要使用 delta debugging 技术来找出那些单独可以工作但组合在一起会失败的文件对。）</p>"
      },
      {
        "en": "<h3>Multiple agent roles</h3>",
        "kind": "heading",
        "cn": "<h3>多种智能体角色</h3>"
      },
      {
        "en": "<p>Parallelism also enables specialization. LLM-written code frequently re-implements existing functionality, so I tasked one agent with coalescing any duplicate code it found. I put another in charge of improving the performance of the compiler itself, and a third I made responsible for outputting efficient compiled code. I asked another agent to critique the design of the project from the perspective of a Rust developer, and make structural changes to the project to improve the overall code quality, and another to work on documentation.</p>",
        "kind": "text",
        "cn": "<p>并行化还能实现专业化分工。LLM 编写的代码频繁地重新实现已有功能，因此我指定了一个智能体专门负责合并它发现的所有重复代码。另一个负责提升编译器自身的性能，第三个负责输出高效的编译产物。我还让一个智能体从 Rust 开发者的视角审视项目设计，对项目进行结构性改造以整体提升代码质量，另一个负责维护文档。</p>"
      },
      {
        "en": "<h2>Stress testing the limits of agent teams</h2>",
        "kind": "heading",
        "cn": "<h2>压力测试智能体团队的极限</h2>"
      },
      {
        "en": "<p>This project was designed as a capability benchmark. I am interested in stress-testing the limits of what LLMs can just <em>barely</em> achieve today in order to help us prepare for what models will reliably achieve in the future.</p>",
        "kind": "text",
        "cn": "<p>这个项目被设计为一个能力基准测试。我的兴趣在于压力测试大语言模型当前所能<em>勉强</em>实现的边界，以帮助我们为模型未来将可靠实现的目标做好准备。</p>"
      },
      {
        "en": "<p>I've been using the C Compiler project as a benchmark across the entire Claude 4 model series. As I did with prior projects, I started by drafting what I wanted: a from-scratch optimizing compiler with no dependencies, GCC-compatible, able to compile the Linux kernel, and designed to support multiple backends. While I specified some aspects of the design (e.g., that it should have an SSA IR to enable multiple optimization passes) I did not go into any detail on how to do so.</p>",
        "kind": "text",
        "cn": "<p>我一直将 C 编译器项目作为整个 Claude 4 模型系列的基准测试。和以往的项目一样，我从起草需求开始：一个从零开始的优化编译器，没有外部依赖，兼容 GCC，能够编译 Linux 内核，并支持多后端。虽然我指定了一些设计方面（例如应包含 SSA 中间表示以支持多次优化过程），但没有涉及任何具体实现细节。</p>"
      },
      {
        "en": "<p>Previous Opus 4 models were barely capable of producing a functional compiler. Opus 4.5 was the first to cross a threshold that allowed it to produce a functional compiler which could pass large test suites, but it was still incapable of compiling any real large projects. My goal with Opus 4.6 was to again test the limits.</p>",
        "kind": "text",
        "cn": "<p>早期的 Opus 4 模型几乎无法生成一个可用的编译器。Opus 4.5 是第一个跨越阈值的版本，能够生成通过大型测试套件的可用编译器，但仍无法编译任何真实的大型项目。我在 Opus 4.6 上的目标是再次挑战极限。</p>"
      },
      {
        "en": "<h3>Evaluation</h3>",
        "kind": "heading",
        "cn": "<h3>评估结果</h3>"
      },
      {
        "en": "<p>Over nearly 2,000 Claude Code sessions across two weeks, Opus 4.6 consumed 2 billion input tokens and generated 140 million output tokens, a total cost just under $20,000. Compared to even the most expensive Claude Max plans, this was an extremely expensive project. But that total is a fraction of what it would cost me to produce this myself—let alone an entire team.</p>",
        "kind": "text",
        "cn": "<p>在近两周、近 2,000 个 Claude Code 会话中，Opus 4.6 消耗了 20 亿输入 token 和 1.4 亿输出 token，总费用略低于 20,000 美元。与最贵的 Claude Max 计划相比，这仍然是一个极其昂贵的项目。但这一总费用只是我自己完成这项工作所需成本的一小部分——更别提整个团队了。</p>"
      },
      {
        "en": "<p>This was a clean-room implementation (Claude did not have internet access at any point during its development); it depends only on the Rust standard library. The 100,000-line compiler can build a bootable Linux 6.9 on x86, ARM, and RISC-V. It can also compile QEMU, FFmpeg, SQlite, postgres, redis, and has a 99% pass rate on most compiler test suites including the <a href=\"https://gcc.gnu.org/onlinedocs/gccint/Torture-Tests.html\" rel=\"noreferrer\" target=\"_blank\">GCC torture test suite</a>. It also passes the developer's ultimate litmus test: it can compile and run Doom.</p>",
        "kind": "text",
        "cn": "<p>这是一次净室实现（Claude 在整个开发过程中始终没有访问互联网）；它仅依赖 Rust 标准库。这个 10 万行的编译器能够在 x86、ARM 和 RISC-V 上构建可启动的 Linux 6.9，还能编译 QEMU、FFmpeg、SQLite、PostgreSQL、Redis，在大多数编译器测试套件（包括 <a href=\"https://gcc.gnu.org/onlinedocs/gccint/Torture-Tests.html\" rel=\"noreferrer\" target=\"_blank\">GCC torture 测试套件</a>）上通过率达 99%。它还通过了开发者的终极试金石：能够编译并运行 Doom。</p>"
      },
      {
        "en": "<p>The compiler, however, is not without limitations. These include:</p>",
        "kind": "text",
        "cn": "<p>然而，这个编译器并非没有局限性，包括：</p>"
      },
      {
        "en": "<ul><li>It lacks the 16-bit x86 compiler that is necessary to boot Linux out of real mode. For this, it calls out to GCC (the x86_32 and x86_64 compilers are its own).</li></ul>",
        "kind": "list",
        "cn": "<ul><li>它缺少将 Linux 从实模式启动所必需的 16 位 x86 编译器。为此，它调用了 GCC（x86_32 和 x86_64 编译器是它自己实现的）。</li></ul>"
      },
      {
        "en": "<ul><li>It does not have its own assembler and linker; these are the very last bits that Claude started automating and are still somewhat buggy. The demo video was produced with a GCC assembler and linker.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>它没有自己的汇编器和链接器；这是 Claude 最后才开始着手自动化的部分，仍存在一些 bug。演示视频使用的是 GCC 的汇编器和链接器。</li></ul>"
      },
      {
        "en": "<ul><li>The compiler successfully builds many projects, but not all. It's not yet a drop-in replacement for a real compiler.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>该编译器能成功构建很多项目，但并非所有项目。它还不是真实编译器的完全替代品。</li></ul>"
      },
      {
        "en": "<ul><li>The generated code is not very efficient. Even with all optimizations enabled, it outputs less efficient code than GCC with all optimizations <em>disabled.</em></li></ul>",
        "kind": "list",
        "cn": "<ul><li>生成的代码效率不高。即使开启所有优化，其输出也不如<em>关闭</em>所有优化的 GCC 高效。</li></ul>"
      },
      {
        "en": "<ul><li>The Rust code quality is reasonable, but is nowhere near the quality of what an expert Rust programmer might produce.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>Rust 代码质量尚可，但远不及专业 Rust 程序员可能产出的水平。</li></ul>"
      },
      {
        "en": "<p>The resulting compiler has nearly reached the limits of Opus's abilities. I tried (hard!) to fix several of the above limitations but wasn't fully successful. New features and bugfixes frequently broke existing functionality.</p>",
        "kind": "text",
        "cn": "<p>最终产出的编译器几乎已触及 Opus 能力的边界。我（努力地！）尝试修复上述若干局限，但未能完全成功。新功能和 bug 修复频繁地破坏已有功能。</p>"
      },
      {
        "en": "<p>As one particularly challenging example, Opus was unable to implement a 16-bit x86 code generator needed to boot into 16-bit real mode. While the compiler can output correct 16-bit x86 via the 66/67 opcode prefixes, the resulting compiled output is over 60kb, far exceeding the 32k code limit enforced by Linux. Instead, Claude simply cheats here and calls out to GCC for this phase (This is only the case for x86. For ARM or RISC-V, Claude's compiler can compile completely by itself.)</p>",
        "kind": "text",
        "cn": "<p>一个特别有挑战性的例子：Opus 无法实现 Linux 从 16 位实模式启动所需的 16 位 x86 代码生成器。虽然编译器可以通过 66/67 操作码前缀输出正确的 16 位 x86 代码，但生成的编译产物超过 60KB，远超 Linux 强制要求的 32KB 代码限制。为此，Claude 干脆在这一阶段直接调用 GCC（这仅适用于 x86；对于 ARM 或 RISC-V，Claude 的编译器可以完全独立完成编译）。</p>"
      },
      {
        "en": "<p>The <a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">source code for the compiler is available</a>. Download it, read through the code, and try it on your favorite C projects. I've consistently found the best way to understand what language models can do is to push them to their limits, and then study where they start to break down. Over the coming days, I'll continue having Claude push new changes if you want to follow along with Claude's continued attempts at addressing these limitations.</p>",
        "kind": "text",
        "cn": "<p>编译器的<a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">源代码已公开</a>。欢迎下载、阅读代码，并在你喜爱的 C 项目上试用。我一贯认为，理解语言模型能力的最佳方式是将其推至极限，然后研究它在哪里开始崩溃。未来几天，我会继续让 Claude 推送新的改动，如果你感兴趣，可以关注 Claude 持续尝试解决这些局限性的进展。</p>"
      },
      {
        "en": "<h2>Looking forward</h2>",
        "kind": "heading",
        "cn": "<h2>展望未来</h2>"
      },
      {
        "en": "<p>Each generation of language models opens up new ways of working with them. Early models were useful for tab-completion in IDEs. Before long, models could complete a function body from its docstring. The launch of Claude Code brought agents into the mainstream and enabled developers to pair-program with Claude. But each of these products operates under the assumption that a user defines a task, an LLM runs for a few seconds or minutes and returns an answer, and then the user provides a follow-up.</p>",
        "kind": "text",
        "cn": "<p>每一代语言模型都开启了与它们协作的新方式。早期模型适合在 IDE 中做代码补全。不久后，模型可以根据文档字符串补全整个函数体。Claude Code 的发布将智能体带入主流，让开发者能与 Claude 结对编程。但这些产品都基于同一假设：用户定义任务，大语言模型运行几秒或几分钟后返回答案，用户再提供后续指令。</p>"
      },
      {
        "en": "<p>Agent teams show the possibility of implementing entire, complex projects autonomously. This allows us, as users of these tools, to become more ambitious with our goals.</p>",
        "kind": "text",
        "cn": "<p>智能体团队展示了自主实现完整复杂项目的可能性。这让我们作为这些工具的用户，得以树立更宏大的目标。</p>"
      },
      {
        "en": "<p>We are still early, and fully autonomous development comes with real risks. When a human sits with Claude during development, they can ensure consistent quality and catch errors in real time. For autonomous systems, it is easy to see tests pass and assume the job is done, when this is rarely the case. I used to work in penetration testing, exploiting vulnerabilities in products produced by large companies, and the thought of programmers deploying software they've never personally verified is a real concern.</p>",
        "kind": "text",
        "cn": "<p>我们仍处于早期阶段，完全自主的开发带来了真实的风险。当人类陪伴 Claude 进行开发时，可以实时确保质量、捕获错误。而对于自主系统，很容易看到测试通过就认为大功告成，但实际上远非如此。我曾从事渗透测试工作，专门利用大型公司产品中的漏洞——程序员部署从未亲手验证过的软件，这一想法让我真的感到忧虑。</p>"
      },
      {
        "en": "<p>So, while this experiment excites me, it also leaves me feeling uneasy. Building this compiler has been some of the most fun I've had recently, but I did not expect this to be anywhere near possible so early in 2026. The rapid progress in both language models and the scaffolds we use to interact with them opens the door to writing an enormous amount of new code. I expect the positive applications to outweigh the negative, but we're entering a new world which will require new strategies to navigate safely.</p>",
        "kind": "text",
        "cn": "<p>所以，这个实验让我兴奋，也让我感到不安。构建这个编译器是我近来最有趣的经历之一，但我没有预料到这会在 2026 年初就变得如此可能。语言模型和我们与之交互的脚手架的快速进步，为编写大量新代码打开了大门。我预计积极的应用会超过消极的，但我们正在进入一个需要新策略来安全驾驭的新世界。</p>"
      },
      {
        "en": "<h3>Acknowledgements</h3>",
        "kind": "heading",
        "cn": "<h3>致谢</h3>"
      },
      {
        "en": "<p>Special thanks to Josef Bacik, Edwin Chen, Bernardo Meurer Costa, Jake Eaton, Dan Kelley, Felix Klock, Jannet Park, Steve Weis, and many other people across Anthropic for their assistance and contributions.</p>",
        "kind": "text",
        "cn": "<p>特别感谢 Josef Bacik、Edwin Chen、Bernardo Meurer Costa、Jake Eaton、Dan Kelley、Felix Klock、Jannet Park、Steve Weis 以及 Anthropic 众多同事的协助与贡献。</p>"
      }
    ]
  },
  {
    "id": 11,
    "title": "Introducing advanced tool use on the Claude Developer Platform",
    "date": "2025-11-24",
    "diff": "★★★☆",
    "time": "25分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/advanced-tool-use",
    "vocab": [
      {
        "en": "tool search",
        "cn": "工具搜索",
        "ex": "Today, we're releasing three features that make this possible: - Tool Search Tool, which allows Claude to use search too"
      },
      {
        "en": "programmatic tool calling",
        "cn": "程序化工具调用",
        "ex": "Today, we're releasing three features that make this possible: - Tool Search Tool, which allows Claude to use search too"
      },
      {
        "en": "tool definition",
        "cn": "工具定义",
        "ex": "tool definition in practice"
      },
      {
        "en": "natural language",
        "cn": "自然语言",
        "ex": "When using natural language tool calling, each invocation requires a full inference pass, and intermediate results pile "
      },
      {
        "en": "defer loading",
        "cn": "延迟加载",
        "ex": "You provide all your tool definitions to the API, but mark tools with defer loading: true to make them discoverable on-d"
      },
      {
        "en": "API",
        "cn": "应用接口",
        "ex": "JSON schemas define what's structurally valid, but can't express usage patterns: when to include optional parameters, wh"
      },
      {
        "en": "error handling",
        "cn": "错误处理",
        "ex": "Loops, conditionals, data transformations, and error handling are all explicit in code rather than implicit in Claude's "
      },
      {
        "en": "latency",
        "cn": "延迟",
        "ex": "The feature adds a search step before tool invocation, so it delivers the best ROI when the context savings and accuracy"
      },
      {
        "en": "schema",
        "cn": "结构定义",
        "ex": "Agents also need to learn correct tool usage from examples, not just schema definitions."
      },
      {
        "en": "parameter",
        "cn": "参数",
        "ex": "parameter in practice"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>Claude Developer Platform 提供两种高级工具使用方式：Tool Search Tool 用来按需查找工具，Programmatic Tool Calling 用代码处理中间步骤，只把关键结果交给模型。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">推进主线</span><strong>Tool Search Tool</strong></div><p>介绍 Tool Search Tool：不预先加载所有工具定义，而是在需要时动态查找相关工具。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The challenge</strong></div><p>提出本节要解决的主要障碍，让读者先知道后面的方案针对什么问题。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Our solution</strong></div><p>给出作者的解决方案，并说明它如何缓解前面提出的问题。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>How the Tool Search Tool works</strong></div><p>介绍 Tool Search Tool：不预先加载所有工具定义，而是在需要时动态查找相关工具。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>When to use the Tool Search Tool</strong></div><p>介绍 Tool Search Tool：不预先加载所有工具定义，而是在需要时动态查找相关工具。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">推进主线</span><strong>Programmatic Tool Calling</strong></div><p>介绍 Programmatic Tool Calling：把多步工具处理放进代码执行，只把最终结果交给模型。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>The challenge</strong></div><p>提出本节要解决的主要障碍，让读者先知道后面的方案针对什么问题。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Our solution</strong></div><p>给出作者的解决方案，并说明它如何缓解前面提出的问题。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">推进主线</span><strong>Fetch budgets for each unique level</strong></div><p>Fetch budgets for each unique level：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">推进主线</span><strong>Fetch all expenses in parallel</strong></div><p>Fetch all expenses in parallel：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Find employees who exceeded their travel budget</strong></div><p>Find employees who exceeded their travel budget：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>Tool Search Tool <span class=\"en\">工具搜索</span></h4><p><strong>本文语境：</strong>抓住工具定义、参数设计和调用时机，思考如何迁移到自己的项目</p><p><strong>英文表达：先把 tool search 理解成本文里的功能角色，而不是只背成“工具搜索”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>The challenge <span class=\"en\">工具定义</span></h4><p><strong>本文语境：</strong>MCP tool definitions provide important context, but as more servers connect, those tokens can add up.</p><p><strong>英文表达：先把 tool definition 理解成本文里的功能角色，而不是只背成“工具定义”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Our solution <span class=\"en\">工具搜索</span></h4><p><strong>本文语境：</strong>Instead of loading all tool definitions upfront, the Tool Search Tool discovers tools on-demand.</p><p><strong>英文表达：先把 tool search 理解成本文里的功能角色，而不是只背成“工具搜索”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>How the Tool Search Tool works <span class=\"en\">工具搜索</span></h4><p><strong>本文语境：</strong>The Tool Search Tool lets Claude dynamically discover tools instead of loading all definitions upfront.</p><p><strong>英文表达：先把 tool search 理解成本文里的功能角色，而不是只背成“工具搜索”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>When to use the Tool Search Tool <span class=\"en\">工具搜索</span></h4><p><strong>本文语境：</strong>Like any architectural decision, enabling the Tool Search Tool involves trade-offs.</p><p><strong>英文表达：先把 tool search 理解成本文里的功能角色，而不是只背成“工具搜索”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>Programmatic Tool Calling <span class=\"en\">程序化工具调用</span></h4><p><strong>本文语境：</strong>抓住工具定义、参数设计和调用时机，思考如何迁移到自己的项目</p><p><strong>英文表达：先把 programmatic tool calling 理解成本文里的功能角色，而不是只背成“程序化工具调用”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Introducing advanced tool use on the Claude Developer Platform》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 tool search（工具搜索） / programmatic tool calling（程序化工具调用） / tool definition（工具定义） / natural language（自然语言） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p><a href=\"https://www.anthropic.com/engineering\" rel=\"noreferrer\" target=\"_blank\">Engineering at Anthropic</a></p>",
        "kind": "text",
        "cn": "<p><a href=\"https://www.anthropic.com/engineering\" rel=\"noreferrer\" target=\"_blank\">Anthropic 工程团队</a></p>"
      },
      {
        "en": "<p>We've added three new beta features that let Claude discover, learn, and execute tools dynamically. Here's how they work.</p>",
        "kind": "text",
        "cn": "<p>我们新增了三项 Beta 功能，让 Claude 能动态发现、学习并执行工具。以下是它们的工作原理。</p>"
      },
      {
        "en": "<p>The future of AI agents is one where models work seamlessly across hundreds or thousands of tools. An IDE assistant that integrates git operations, file manipulation, package managers, testing frameworks, and deployment pipelines. An operations coordinator that connects Slack, GitHub, Google Drive, Jira, company databases, and dozens of MCP servers simultaneously.</p>",
        "kind": "text",
        "cn": "<p>AI 智能体的未来，在于模型能无缝跨越数百乃至数千个工具协作。设想一个集成了 git 操作、文件管理、包管理器、测试框架和部署流水线的 IDE 助手；或是一个同时连接 Slack、GitHub、Google Drive、Jira、公司数据库以及数十个 MCP 服务器的运营协调者。</p>"
      },
      {
        "en": "<p>To <a href=\"https://www.anthropic.com/research/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">build effective agents</a>, they need to work with unlimited tool libraries without stuffing every definition into context upfront. Our blog article on using <a href=\"https://www.anthropic.com/engineering/code-execution-with-mcp\" rel=\"noreferrer\" target=\"_blank\">code execution with MCP</a> discussed how tool results and definitions can sometimes consume 50,000+ tokens before an agent reads a request. Agents should discover and load tools on-demand, keeping only what's relevant for the current task.</p>",
        "kind": "text",
        "cn": "<p>要<a href=\"https://www.anthropic.com/research/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">构建高效智能体</a>，它们需要能在无限规模的工具库中工作，而不必在上下文中预先塞入所有工具定义。我们关于<a href=\"https://www.anthropic.com/engineering/code-execution-with-mcp\" rel=\"noreferrer\" target=\"_blank\">MCP 代码执行</a>的博文指出，在智能体读取请求之前，工具结果和定义有时会消耗 50,000+ tokens。智能体应按需发现并加载工具，只保留当前任务所需的内容。</p>"
      },
      {
        "en": "<p>Agents also need the ability to call tools from code. When using natural language tool calling, each invocation requires a full inference pass, and intermediate results pile up in context whether they're useful or not. Code is a natural fit for orchestration logic, such as loops, conditionals, and data transformations. Agents need the flexibility to choose between code execution and inference based on the task at hand.</p>",
        "kind": "text",
        "cn": "<p>智能体还需要从代码中调用工具的能力。使用自然语言工具调用时，每次调用都需要完整的推理过程，中间结果会不断堆积在上下文中，不论是否有用。代码天然适合编排逻辑，如循环、条件判断和数据变换。智能体需要能根据当前任务灵活选择代码执行还是推理调用。</p>"
      },
      {
        "en": "<p>Agents also need to learn correct tool usage from examples, not just schema definitions. JSON schemas define what's structurally valid, but can't express usage patterns: when to include optional parameters, which combinations make sense, or what conventions your API expects.</p>",
        "kind": "text",
        "cn": "<p>智能体还需要从示例中学习正确的工具使用方式，而不仅仅依靠结构定义（schema）。JSON schema 只定义结构上的合法性，无法表达使用模式：何时需要包含可选参数、哪些组合有意义，以及 API 的惯例约定。</p>"
      },
      {
        "en": "<p>Today, we're releasing three features that make this possible:</p>",
        "kind": "text",
        "cn": "<p>今天，我们发布了三项让上述设想成为现实的功能：</p>"
      },
      {
        "en": "<ul><li><strong>Tool Search Tool,</strong> which allows Claude to use search tools to access thousands of tools without consuming its context window</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>工具搜索工具（Tool Search Tool），</strong>允许 Claude 使用搜索工具按需访问数千个工具，而不消耗上下文窗口</li></ul>"
      },
      {
        "en": "<ul><li><strong>Programmatic Tool Calling</strong> , which allows Claude to invoke tools in a code execution environment reducing the impact on the model's context window</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>程序化工具调用（Programmatic Tool Calling）</strong>，允许 Claude 在代码执行环境中调用工具，减少对模型上下文窗口的影响</li></ul>"
      },
      {
        "en": "<ul><li><strong>Tool Use Examples</strong> , which provides a universal standard for demonstrating how to effectively use a given tool</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>工具使用示例（Tool Use Examples）</strong>，提供一套通用标准，用于演示如何有效使用给定工具</li></ul>"
      },
      {
        "en": "<p>In internal testing, we've found these features have helped us build things that wouldn't have been possible with conventional tool use patterns. For example, <a href=\"https://www.claude.com/claude-for-excel\" rel=\"noreferrer\" target=\"_blank\">**Claude for Excel**</a> uses Programmatic Tool Calling to read and modify spreadsheets with thousands of rows without overloading the model's context window.</p>",
        "kind": "text",
        "cn": "<p>在内部测试中，我们发现这些功能帮助我们构建了以往常规工具使用模式下无法实现的产品。例如，<a href=\"https://www.claude.com/claude-for-excel\" rel=\"noreferrer\" target=\"_blank\">**Claude for Excel**</a> 就使用程序化工具调用来读取和修改包含数千行的电子表格，而不会让模型的上下文窗口超载。</p>"
      },
      {
        "en": "<p>Based on our experience, we believe these features open up new possibilities for what you can build with Claude.</p>",
        "kind": "text",
        "cn": "<p>基于我们的经验，我们相信这些功能为你用 Claude 构建产品开辟了全新的可能性。</p>"
      },
      {
        "en": "<h2>Tool Search Tool</h2>",
        "kind": "heading",
        "cn": "<h2>工具搜索工具（Tool Search Tool）</h2>"
      },
      {
        "en": "<h3>The challenge</h3>",
        "kind": "heading",
        "cn": "<h3>面临的挑战</h3>"
      },
      {
        "en": "<p>MCP tool definitions provide important context, but as more servers connect, those tokens can add up. Consider a five-server setup:</p>",
        "kind": "text",
        "cn": "<p>MCP 工具定义提供了重要上下文，但随着连接服务器数量的增加，这些 tokens 会迅速累积。以五个服务器的配置为例：</p>"
      },
      {
        "en": "<ul><li>GitHub: 35 tools (~26K tokens)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>GitHub：35 个工具（约 26K tokens）</li></ul>"
      },
      {
        "en": "<ul><li>Slack: 11 tools (~21K tokens)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>Slack：11 个工具（约 21K tokens）</li></ul>"
      },
      {
        "en": "<ul><li>Sentry: 5 tools (~3K tokens)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>Sentry：5 个工具（约 3K tokens）</li></ul>"
      },
      {
        "en": "<ul><li>Grafana: 5 tools (~3K tokens)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>Grafana：5 个工具（约 3K tokens）</li></ul>"
      },
      {
        "en": "<ul><li>Splunk: 2 tools (~2K tokens)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>Splunk：2 个工具（约 2K tokens）</li></ul>"
      },
      {
        "en": "<p>That's 58 tools consuming approximately 55K tokens before the conversation even starts. Add more servers like Jira (which alone uses ~17K tokens) and you're quickly approaching 100K+ token overhead. At Anthropic, we've seen tool definitions consume 134K tokens before optimization.</p>",
        "kind": "text",
        "cn": "<p>这就是在对话开始之前，58 个工具就已消耗约 55K tokens。如果再加入像 Jira（仅其本身就占约 17K tokens）这样的服务器，token 开销很快就会突破 100K+。在 Anthropic，我们见过工具定义在优化前消耗高达 134K tokens 的案例。</p>"
      },
      {
        "en": "<p>But token cost isn't the only issue. The most common failures are wrong tool selection and incorrect parameters, especially when tools have similar names like <code>notification-send-user</code> vs. <code>notification-send-channel</code>.</p>",
        "kind": "text",
        "cn": "<p>但 token 开销还不是唯一的问题。最常见的错误是工具选择错误和参数填写不当，尤其是当工具名称相似时，例如 <code>notification-send-user</code> 与 <code>notification-send-channel</code>。</p>"
      },
      {
        "en": "<h3>Our solution</h3>",
        "kind": "heading",
        "cn": "<h3>我们的解决方案</h3>"
      },
      {
        "en": "<p>Instead of loading all tool definitions upfront, the Tool Search Tool discovers tools on-demand. Claude only sees the tools it actually needs for the current task.</p>",
        "kind": "text",
        "cn": "<p>工具搜索工具不再预先加载所有工具定义，而是按需发现工具。Claude 只会看到当前任务真正需要的工具。</p>"
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/OxNt1wZqw9)<em>Tool Search Tool preserves 191,300 tokens of context compared to 122,800 with Claude's traditional approach.</em></p>",
        "kind": "text",
        "cn": "<p>![](https://aka.doubaocdn.com/s/OxNt1wZqw9)<em>工具搜索工具可保留 191,300 tokens 的上下文，而 Claude 的传统方式仅保留 122,800 tokens。</em></p>"
      },
      {
        "en": "<p>Traditional approach:</p>",
        "kind": "text",
        "cn": "<p>传统方式：</p>"
      },
      {
        "en": "<ul><li>All tool definitions loaded upfront (~72K tokens for 50+ MCP tools)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>预先加载所有工具定义（50+ MCP 工具约占 72K tokens）</li></ul>"
      },
      {
        "en": "<ul><li>Conversation history and system prompt compete for remaining space</li></ul>",
        "kind": "list",
        "cn": "<ul><li>对话历史与系统提示词争夺剩余上下文空间</li></ul>"
      },
      {
        "en": "<ul><li>Total context consumption: ~77K tokens before any work begins</li></ul>",
        "kind": "list",
        "cn": "<ul><li>总上下文消耗：任何工作开始前就已约 77K tokens</li></ul>"
      },
      {
        "en": "<p>With the Tool Search Tool:</p>",
        "kind": "text",
        "cn": "<p>使用工具搜索工具：</p>"
      },
      {
        "en": "<ul><li>Only the Tool Search Tool loaded upfront (~500 tokens)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>预先只加载工具搜索工具本身（约 500 tokens）</li></ul>"
      },
      {
        "en": "<ul><li>Tools discovered on-demand as needed (3-5 relevant tools, ~3K tokens)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>按需发现所需工具（3-5 个相关工具，约 3K tokens）</li></ul>"
      },
      {
        "en": "<ul><li>Total context consumption: ~8.7K tokens, preserving 95% of context window</li></ul>",
        "kind": "list",
        "cn": "<ul><li>总上下文消耗：约 8.7K tokens，保留了 95% 的上下文窗口空间</li></ul>"
      },
      {
        "en": "<p>This represents an 85% reduction in token usage while maintaining access to your full tool library. Internal testing showed significant accuracy improvements on MCP evaluations when working with large tool libraries. Opus 4 improved from 49% to 74%, and Opus 4.5 improved from 79.5% to 88.1% with Tool Search Tool enabled.</p>",
        "kind": "text",
        "cn": "<p>这意味着 token 用量减少了 85%，同时仍可访问完整工具库。内部测试显示，在使用大型工具库的 MCP 评估中，准确率显著提升。启用工具搜索工具后，Opus 4 从 49% 提升至 74%，Opus 4.5 从 79.5% 提升至 88.1%。</p>"
      },
      {
        "en": "<h3>How the Tool Search Tool works</h3>",
        "kind": "heading",
        "cn": "<h3>工具搜索工具的工作原理</h3>"
      },
      {
        "en": "<p>The Tool Search Tool lets Claude dynamically discover tools instead of loading all definitions upfront. You provide all your tool definitions to the API, but mark tools with <code>defer_loading: true</code> to make them discoverable on-demand. Deferred tools aren't loaded into Claude's context initially. Claude only sees the Tool Search Tool itself plus any tools with <code>defer_loading: false</code> (your most critical, frequently-used tools).</p>",
        "kind": "text",
        "cn": "<p>工具搜索工具让 Claude 能动态发现工具，而不是预先加载所有定义。你向 API 提供所有工具定义，但将工具标记为 <code>defer_loading: true</code>，使其可按需被发现。延迟加载的工具不会在初始时进入 Claude 的上下文。Claude 只会看到工具搜索工具本身，以及任何标记为 <code>defer_loading: false</code> 的工具（你最关键、最常用的工具）。</p>"
      },
      {
        "en": "<p>When Claude needs specific capabilities, it searches for relevant tools. The Tool Search Tool returns references to matching tools, which get expanded into full definitions in Claude's context.</p>",
        "kind": "text",
        "cn": "<p>当 Claude 需要某项特定能力时，它会搜索相关工具。工具搜索工具返回匹配工具的引用，这些引用随后被展开为 Claude 上下文中的完整定义。</p>"
      },
      {
        "en": "<p>For example, if Claude needs to interact with GitHub, it searches for &quot;github,&quot; and only <code>github.createPullRequest</code> and <code>github.listIssues</code> get loaded—not your other 50+ tools from Slack, Jira, and Google Drive.</p>",
        "kind": "text",
        "cn": "<p>例如，如果 Claude 需要与 GitHub 交互，它会搜索「github」，结果只有 <code>github.createPullRequest</code> 和 <code>github.listIssues</code> 被加载——而不是 Slack、Jira 和 Google Drive 的其他 50+ 个工具。</p>"
      },
      {
        "en": "<p>This way, Claude has access to your full tool library while only paying the token cost for tools it actually needs.</p>",
        "kind": "text",
        "cn": "<p>这样，Claude 可以访问完整工具库，但只为实际需要的工具支付 token 成本。</p>"
      },
      {
        "en": "<p><strong>Prompt caching note:</strong> Tool Search Tool doesn't break prompt caching because deferred tools are excluded from the initial prompt entirely. They're only added to context after Claude searches for them, so your system prompt and core tool definitions remain cacheable.</p>",
        "kind": "text",
        "cn": "<p><strong>提示词缓存说明：</strong>工具搜索工具不会破坏提示词缓存，因为延迟加载的工具完全不会出现在初始提示词中。它们只在 Claude 搜索后才被加入上下文，因此系统提示词和核心工具定义仍可被缓存。</p>"
      },
      {
        "en": "<p><strong>Implementation:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>实现方式：</strong></p>"
      },
      {
        "en": "<pre><code>{\n &quot;tools&quot;: [\n // Include a tool search tool (regex, BM25, or custom)\n {&quot;type&quot;: &quot;tool_search_tool_regex_20251119&quot;, &quot;name&quot;: &quot;tool_search_tool_regex&quot;},\n\n // Mark tools for on-demand discovery\n {\n &quot;name&quot;: &quot;github.createPullRequest&quot;,\n &quot;description&quot;: &quot;Create a pull request&quot;,\n &quot;input_schema&quot;: {...},\n &quot;defer_loading&quot;: true\n }\n // ... hundreds more deferred tools with defer_loading: true\n ]\n}</code></pre>",
        "kind": "code",
        "cn": "<p>{\"tools\": [//包括工具搜索工具（正则表达式、BM25或自定义） {\"type\": \"tool_search_tool_regex_20251119\", \"name\": \"tool_search_tool_regex\"},//标记按需发现工具{\"name\": \"github.createPullRequest\", \"description\": \"Create a pull request\", \"input_schema\": {...}, \"defer_loading\": true}//...还有数百个带有defer_loading的延迟工具： true]}</p>"
      },
      {
        "en": "<p>For MCP servers, you can defer loading entire servers while keeping specific high-use tools loaded:</p>",
        "kind": "text",
        "cn": "<p>对于 MCP 服务器，你可以延迟加载整个服务器，同时保留特定高频工具的加载：</p>"
      },
      {
        "en": "<pre><code>{\n &quot;type&quot;: &quot;mcp_toolset&quot;,\n &quot;mcp_server_name&quot;: &quot;google-drive&quot;,\n &quot;default_config&quot;: {&quot;defer_loading&quot;: true}, # defer loading the entire server\n &quot;configs&quot;: {\n &quot;search_files&quot;: {\n&quot;defer_loading&quot;: false\n } // Keep most used tool loaded\n }\n}</code></pre>",
        "kind": "code",
        "cn": "<p>{\"type\": \"mcp_toolset\", \"mcp_server_name\": \"google-drive\", \"default_config\": {\"defer_loading\": true}, # defer加载整个服务器\"configs\": {\"search_files\": {\"defer_loading\": false}//保持最常用的工具加载}}</p>"
      },
      {
        "en": "<p>The Claude Developer Platform provides regex-based and BM25-based search tools out of the box, but you can also implement custom search tools using embeddings or other strategies.</p>",
        "kind": "text",
        "cn": "<p>Claude 开发者平台开箱即提供基于正则表达式和 BM25 的搜索工具，但你也可以使用 embedding 或其他策略实现自定义搜索工具。</p>"
      },
      {
        "en": "<h3>When to use the Tool Search Tool</h3>",
        "kind": "heading",
        "cn": "<h3>何时使用工具搜索工具</h3>"
      },
      {
        "en": "<p>Like any architectural decision, enabling the Tool Search Tool involves trade-offs. The feature adds a search step before tool invocation, so it delivers the best ROI when the context savings and accuracy improvements outweigh additional latency.</p>",
        "kind": "text",
        "cn": "<p>与任何架构决策一样，启用工具搜索工具涉及权衡取舍。该功能在工具调用前增加了一个搜索步骤，因此只有当上下文节省和准确率提升超过额外延迟时，才能获得最佳收益。</p>"
      },
      {
        "en": "<p><strong>Use it when:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>适合使用的场景：</strong></p>"
      },
      {
        "en": "<ul><li>Tool definitions consuming &gt;10K tokens</li></ul>",
        "kind": "list",
        "cn": "<ul><li>工具定义消耗超过 10K tokens</li></ul>"
      },
      {
        "en": "<ul><li>Experiencing tool selection accuracy issues</li></ul>",
        "kind": "list",
        "cn": "<ul><li>遭遇工具选择准确率问题</li></ul>"
      },
      {
        "en": "<ul><li>Building MCP-powered systems with multiple servers</li></ul>",
        "kind": "list",
        "cn": "<ul><li>构建具有多个服务器的 MCP 驱动系统</li></ul>"
      },
      {
        "en": "<ul><li>10+ tools available</li></ul>",
        "kind": "list",
        "cn": "<ul><li>可用工具超过 10 个</li></ul>"
      },
      {
        "en": "<p><strong>Less beneficial when:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>收益较小的场景：</strong></p>"
      },
      {
        "en": "<ul><li>Small tool library (&lt;10 tools)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>工具库较小（少于 10 个工具）</li></ul>"
      },
      {
        "en": "<ul><li>All tools used frequently in every session</li></ul>",
        "kind": "list",
        "cn": "<ul><li>所有工具在每次会话中都频繁使用</li></ul>"
      },
      {
        "en": "<ul><li>Tool definitions are compact</li></ul>",
        "kind": "list",
        "cn": "<ul><li>工具定义本身体积很小</li></ul>"
      },
      {
        "en": "<h2>Programmatic Tool Calling</h2>",
        "kind": "heading",
        "cn": "<h2>程序化工具调用（Programmatic Tool Calling）</h2>"
      },
      {
        "en": "<h3>The challenge</h3>",
        "kind": "heading",
        "cn": "<h3>面临的挑战</h3>"
      },
      {
        "en": "<p>Traditional tool calling creates two fundamental problems as workflows become more complex:</p>",
        "kind": "text",
        "cn": "<p>随着工作流变得更加复杂，传统工具调用会产生两个根本性问题：</p>"
      },
      {
        "en": "<ul><li><strong>Context pollution from intermediate results</strong> : When Claude analyzes a 10MB log file for error patterns, the entire file enters its context window, even though Claude only needs a summary of error frequencies. When fetching customer data across multiple tables, every record accumulates in context regardless of relevance. These intermediate results consume massive token budgets and can push important information out of the context window entirely.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>中间结果污染上下文</strong>：当 Claude 分析 10MB 的日志文件以查找错误模式时，整个文件都会进入其上下文窗口，即使 Claude 只需要错误频率的摘要。在跨多张表查询客户数据时，每条记录都会累积在上下文中，不论是否相关。这些中间结果会消耗大量 token 预算，甚至可能将重要信息挤出上下文窗口。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Inference overhead and manual synthesis</strong> : Each tool call requires a full model inference pass. After receiving results, Claude must &quot;eyeball&quot; the data to extract relevant information, reason about how pieces fit together, and decide what to do next—all through natural language processing. A five tool workflow means five inference passes plus Claude parsing each result, comparing values, and synthesizing conclusions. This is both slow and error-prone.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>推理开销与手动综合</strong>：每次工具调用都需要完整的模型推理过程。收到结果后，Claude 必须通过自然语言处理&quot;目视&quot;数据，提取相关信息，推断各部分之间的关系，再决定下一步——这整个过程既慢又容易出错。一个五步工具工作流意味着五次推理过程，加上 Claude 解析每个结果、比较数值和综合结论的时间。</li></ul>"
      },
      {
        "en": "<h3>Our solution</h3>",
        "kind": "heading",
        "cn": "<h3>我们的解决方案</h3>"
      },
      {
        "en": "<p>Programmatic Tool Calling enables Claude to orchestrate tools through code rather than through individual API round-trips. Instead of Claude requesting tools one at a time with each result being returned to its context, Claude writes code that calls multiple tools, processes their outputs, and controls what information actually enters its context window.</p>",
        "kind": "text",
        "cn": "<p>程序化工具调用使 Claude 能通过代码编排工具，而不是通过单次 API 往返。Claude 不再逐个请求工具并将每个结果返回到其上下文，而是编写代码来调用多个工具、处理输出结果，并控制哪些信息真正进入上下文窗口。</p>"
      },
      {
        "en": "<p>Claude excels at writing code and by letting it express orchestration logic in Python rather than through natural language tool invocations, you get more reliable, precise control flow. Loops, conditionals, data transformations, and error handling are all explicit in code rather than implicit in Claude's reasoning.</p>",
        "kind": "text",
        "cn": "<p>Claude 擅长编写代码，通过让它用 Python 表达编排逻辑（而不是自然语言工具调用），你可以获得更可靠、更精确的控制流。循环、条件判断、数据变换和错误处理都在代码中明确表达，而不是隐含在 Claude 的推理中。</p>"
      },
      {
        "en": "<h4>Example: Budget compliance check</h4>",
        "kind": "heading",
        "cn": "<h4>示例：预算合规检查</h4>"
      },
      {
        "en": "<p>Consider a common business task: &quot;Which team members exceeded their Q3 travel budget?&quot;</p>",
        "kind": "text",
        "cn": "<p>以一个常见的业务任务为例：&quot;哪些团队成员超出了 Q3 差旅预算？&quot;</p>"
      },
      {
        "en": "<p>You have three tools available:</p>",
        "kind": "text",
        "cn": "<p>你有三个可用工具：</p>"
      },
      {
        "en": "<ul><li><code>get_team_members(department)</code> - Returns team member list with IDs and levels</li></ul>",
        "kind": "list",
        "cn": "<ul><li><code>get_team_members(department)</code> - 返回包含 ID 和级别的团队成员列表</li></ul>"
      },
      {
        "en": "<ul><li><code>get_expenses(user_id, quarter)</code> - Returns expense line items for a user</li></ul>",
        "kind": "list",
        "cn": "<ul><li><code>get_expenses(user_id, quarter)</code> - 返回用户的费用明细</li></ul>"
      },
      {
        "en": "<ul><li><code>get_budget_by_level(level)</code> - Returns budget limits for an employee level</li></ul>",
        "kind": "list",
        "cn": "<ul><li><code>get_budget_by_level(level)</code> - 返回某员工级别的预算上限</li></ul>"
      },
      {
        "en": "<p><strong>Traditional approach</strong> :</p>",
        "kind": "text",
        "cn": "<p><strong>传统方式</strong>：</p>"
      },
      {
        "en": "<ul><li>Fetch team members → 20 people</li></ul>",
        "kind": "list",
        "cn": "<ul><li>获取团队成员 → 20 人</li></ul>"
      },
      {
        "en": "<ul><li>For each person, fetch their Q3 expenses → 20 tool calls, each returning 50-100 line items (flights, hotels, meals, receipts)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>为每人获取 Q3 费用 → 20 次工具调用，每次返回 50-100 条明细（机票、酒店、餐饮、收据）</li></ul>"
      },
      {
        "en": "<ul><li>Fetch budget limits by employee level</li></ul>",
        "kind": "list",
        "cn": "<ul><li>按员工级别获取预算上限</li></ul>"
      },
      {
        "en": "<ul><li>All of this enters Claude's context: 2,000+ expense line items (50 KB+)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>所有内容进入 Claude 的上下文：2,000+ 条费用明细（50 KB+）</li></ul>"
      },
      {
        "en": "<ul><li>Claude manually sums each person's expenses, looks up their budget, compares expenses against budget limits</li></ul>",
        "kind": "list",
        "cn": "<ul><li>Claude 手动汇总每人的费用，查找其预算，将费用与预算上限进行比较</li></ul>"
      },
      {
        "en": "<ul><li>More round-trips to the model, significant context consumption</li></ul>",
        "kind": "list",
        "cn": "<ul><li>更多模型往返次数，显著的上下文消耗</li></ul>"
      },
      {
        "en": "<p><strong>With Programmatic Tool Calling</strong> :</p>",
        "kind": "text",
        "cn": "<p><strong>使用程序化工具调用</strong>：</p>"
      },
      {
        "en": "<p>Instead of each tool result returning to Claude, Claude writes a Python script that orchestrates the entire workflow. The script runs in the Code Execution tool (a sandboxed environment), pausing when it needs results from your tools. When you return tool results via the API, they're processed by the script rather than consumed by the model. The script continues executing, and Claude only sees the final output.</p>",
        "kind": "text",
        "cn": "<p>每个工具结果不再返回给 Claude，而是由 Claude 编写一个 Python 脚本来编排整个工作流。脚本在代码执行工具（一个沙箱环境）中运行，当需要工具返回结果时暂停。当你通过 API 返回工具结果时，它们由脚本处理，而不是被模型消耗。脚本继续执行，Claude 只看到最终输出。</p>"
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/Xcgh1wZqw9)Programmatic Tool Calling enables Claude to orchestrate tools through code rather than through individual API round-trips, allowing for parallel tool execution.</p>",
        "kind": "text",
        "cn": "<p>![](https://aka.doubaocdn.com/s/Xcgh1wZqw9)程序化工具调用让 Claude 能通过代码而非单次 API 往返编排工具，从而实现并行工具执行。</p>"
      },
      {
        "en": "<p>Here's what Claude's orchestration code looks like for the budget compliance task:</p>",
        "kind": "text",
        "cn": "<p>以下是 Claude 为预算合规任务编写的编排代码示例：</p>"
      },
      {
        "en": "<pre><code>team = await get_team_members(&quot;engineering&quot;)\n\n# Fetch budgets for each unique level\nlevels = list(set(m[&quot;level&quot;] for m in team))\nbudget_results = await asyncio.gather(*[\n get_budget_by_level(level) for level in levels\n])\n\n# Create a lookup dictionary: {&quot;junior&quot;: budget1, &quot;senior&quot;: budget2, ...}\nbudgets = {level: budget for level, budget in zip(levels, budget_results)}\n\n# Fetch all expenses in parallel\nexpenses = await asyncio.gather(*[\n get_expenses(m[&quot;id&quot;], &quot;Q3&quot;) for m in team\n])\n\n# Find employees who exceeded their travel budget\nexceeded = []\nfor member, exp in zip(team, expenses):\n budget = budgets[member[&quot;level&quot;]]\n total = sum(e[&quot;amount&quot;] for e in exp)\n if total &gt; budget[&quot;travel_limit&quot;]:\n exceeded.append({\n &quot;name&quot;: member[&quot;name&quot;],\n &quot;spent&quot;: total,\n &quot;limit&quot;: budget[&quot;travel_limit&quot;]\n })\n\nprint(json.dumps(exceeded))</code></pre>",
        "kind": "code",
        "cn": "<p>team = await get_team_members (\"engineering\") #获取每个唯一级别级别的预算= list (set (m [\"level\"] for m in team)) budget_results = await asyncio.gather (* [get_budget_by_level (level) for level in levels]) #创建查找字典： {\"junior\": budget1, \"senior\": budget2,...} budgets = {level: budget for level, budget in zip (levels, budget_results)} #获取并行费用中的所有费用= await asyncio.gather (* [get_expenses (m</p>"
      },
      {
        "en": "<p>Claude's context receives only the final result: the two to three people who exceeded their budget. The 2,000+ line items, the intermediate sums, and the budget lookups do not affect Claude's context, reducing consumption from 200KB of raw expense data to just 1KB of results.</p>",
        "kind": "text",
        "cn": "<p>Claude 的上下文只接收最终结果：两到三名超出预算的人员。2,000+ 条明细、中间汇总值以及预算查询结果都不会影响 Claude 的上下文，从原始 200KB 的费用数据缩减为仅 1KB 的结果。</p>"
      },
      {
        "en": "<p>The efficiency gains are substantial:</p>",
        "kind": "text",
        "cn": "<p>效率提升相当显著：</p>"
      },
      {
        "en": "<ul><li><strong>Token savings</strong> : By keeping intermediate results out of Claude's context, PTC dramatically reduces token consumption. Average usage dropped from 43,588 to 27,297 tokens, a 37% reduction on complex research tasks.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>节省 Token</strong>：通过将中间结果排除在 Claude 上下文之外，程序化工具调用（PTC）大幅减少了 token 消耗。在复杂研究任务中，平均用量从 43,588 tokens 降至 27,297 tokens，减少了 37%。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Reduced latency</strong> : Each API round-trip requires model inference (hundreds of milliseconds to seconds). When Claude orchestrates 20+ tool calls in a single code block, you eliminate 19+ inference passes. The API handles tool execution without returning to the model each time.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>降低延迟</strong>：每次 API 往返都需要模型推理（耗时数百毫秒到数秒）。当 Claude 在单个代码块中编排 20+ 次工具调用时，可消除 19+ 次推理过程。API 直接处理工具执行，无需每次都返回给模型。</li></ul>"
      },
      {
        "en": "<ul><li><strong>Improved accuracy</strong> : By writing explicit orchestration logic, Claude makes fewer errors than when juggling multiple tool results in natural language. Internal knowledge retrieval improved from 25.6% to 28.5%; <a href=\"https://arxiv.org/abs/2311.12983\" rel=\"noreferrer\" target=\"_blank\">GIA benchmarks</a> from 46.5% to 51.2%.</li></ul>",
        "kind": "list",
        "cn": "<ul><li><strong>提升准确率</strong>：通过编写明确的编排逻辑，Claude 比用自然语言处理多个工具结果时出错更少。内部知识检索从 25.6% 提升至 28.5%；<a href=\"https://arxiv.org/abs/2311.12983\" rel=\"noreferrer\" target=\"_blank\">GIA 基准测试</a>从 46.5% 提升至 51.2%。</li></ul>"
      },
      {
        "en": "<p>Production workflows involve messy data, conditional logic, and operations that need to scale. Programmatic Tool Calling lets Claude handle that complexity programmatically while keeping its focus on actionable results rather than raw data processing.</p>",
        "kind": "text",
        "cn": "<p>生产环境的工作流涉及杂乱的数据、条件逻辑以及需要扩展的操作。程序化工具调用让 Claude 以编程方式处理这些复杂性，同时专注于可操作的结果，而非原始数据处理。</p>"
      },
      {
        "en": "<h3>How Programmatic Tool Calling works</h3>",
        "kind": "heading",
        "cn": "<h3>程序化工具调用的工作原理</h3>"
      },
      {
        "en": "<h4>1. Mark tools as callable from code</h4>",
        "kind": "heading",
        "cn": "<h4>1. 将工具标记为可从代码调用</h4>"
      },
      {
        "en": "<p>Add code_execution to tools, and set allowed_callers to opt-in tools for programmatic execution:</p>",
        "kind": "text",
        "cn": "<p>将 code_execution 添加到工具中，并设置 allowed_callers 以将工具纳入程序化执行：</p>"
      },
      {
        "en": "<pre><code>{\n &quot;tools&quot;: [\n {\n &quot;type&quot;: &quot;code_execution_20250825&quot;,\n &quot;name&quot;: &quot;code_execution&quot;\n },\n {\n &quot;name&quot;: &quot;get_team_members&quot;,\n &quot;description&quot;: &quot;Get all members of a department...&quot;,\n &quot;input_schema&quot;: {...},\n &quot;allowed_callers&quot;: [&quot;code_execution_20250825&quot;] # opt-in to programmatic tool calling\n },\n {\n &quot;name&quot;: &quot;get_expenses&quot;,\n \t...\n },\n {\n &quot;name&quot;: &quot;get_budget_by_level&quot;,\n\t...\n }\n ]\n}</code></pre>",
        "kind": "code",
        "cn": "<p>{\"tools\": [{\"type\": \"code_execution_20250825\", \"name\": \"code_execution\"}, {\"name\": \"get_team_members\", \"description\": \"获取部门的所有成员...\", \"input_schema\": {...}, \"allowed_callers\": [\"code_execution_20250825\"] #选择加入编程工具调用}, {\"name\": \"get_expenses\",...}, {\"name\": \"get_budget_by_level\",...}]}</p>"
      },
      {
        "en": "<p>The API converts these tool definitions into Python functions that Claude can call.</p>",
        "kind": "text",
        "cn": "<p>API 会将这些工具定义转换为 Claude 可以调用的 Python 函数。</p>"
      },
      {
        "en": "<h4>2. Claude writes orchestration code</h4>",
        "kind": "heading",
        "cn": "<h4>2. Claude 编写编排代码</h4>"
      },
      {
        "en": "<p>Instead of requesting tools one at a time, Claude generates Python code:</p>",
        "kind": "text",
        "cn": "<p>Claude 不再逐个请求工具，而是生成 Python 代码：</p>"
      },
      {
        "en": "<pre><code>{\n &quot;type&quot;: &quot;server_tool_use&quot;,\n &quot;id&quot;: &quot;srvtoolu_abc&quot;,\n &quot;name&quot;: &quot;code_execution&quot;,\n &quot;input&quot;: {\n &quot;code&quot;: &quot;team = get_team_members('engineering')\\n...&quot; # the code example above\n }\n}</code></pre>",
        "kind": "code",
        "cn": "<p>{\"type\": \"server_tool_use\", \"id\": \"srvtoolu_abc\", \"name\": \"code_execution\", \"input\": {\"code\": \"team = get_team_members ('engineering')\\ n...\" #上面的代码示例}}</p>"
      },
      {
        "en": "<h4>3. Tools execute without hitting Claude's context</h4>",
        "kind": "heading",
        "cn": "<h4>3. 工具执行不进入 Claude 的上下文</h4>"
      },
      {
        "en": "<p>When the code calls get_expenses(), you receive a tool request with a caller field:</p>",
        "kind": "text",
        "cn": "<p>当代码调用 get_expenses() 时，你会收到一个包含 caller 字段的工具请求：</p>"
      },
      {
        "en": "<pre><code>{\n &quot;type&quot;: &quot;tool_use&quot;,\n &quot;id&quot;: &quot;toolu_xyz&quot;,\n &quot;name&quot;: &quot;get_expenses&quot;,\n &quot;input&quot;: {&quot;user_id&quot;: &quot;emp_123&quot;, &quot;quarter&quot;: &quot;Q3&quot;},\n &quot;caller&quot;: {\n &quot;type&quot;: &quot;code_execution_20250825&quot;,\n &quot;tool_id&quot;: &quot;srvtoolu_abc&quot;\n }\n}</code></pre>",
        "kind": "code",
        "cn": "<p>{\"type\": \"tool_use\", \"id\": \"toolu_xyz\", \"name\": \"get_expenses\", \"input\": {\"user_id\": \"emp_123\", \"quarter\": \"Q3\"}, \"caller\": {\"type\": \"code_execution_20250825\", \"tool_id\": \"srvtoolu_abc\"}}</p>"
      },
      {
        "en": "<p>You provide the result, which is processed in the Code Execution environment rather than Claude's context. This request-response cycle repeats for each tool call in the code.</p>",
        "kind": "text",
        "cn": "<p>你提供结果，结果在代码执行环境中处理，而非进入 Claude 的上下文。此请求-响应循环对代码中的每次工具调用重复执行。</p>"
      },
      {
        "en": "<h4>4. Only final output enters context</h4>",
        "kind": "heading",
        "cn": "<h4>4. 只有最终输出进入上下文</h4>"
      },
      {
        "en": "<p>When the code finishes running, only the results of the code are returned to Claude:</p>",
        "kind": "text",
        "cn": "<p>代码执行完毕后，只有代码的运行结果被返回给 Claude：</p>"
      },
      {
        "en": "<pre><code>{\n &quot;type&quot;: &quot;code_execution_tool_result&quot;,\n &quot;tool_use_id&quot;: &quot;srvtoolu_abc&quot;,\n &quot;content&quot;: {\n &quot;stdout&quot;: &quot;[\\n{\\&quot;name\\&quot;: \\&quot;Alice\\&quot;, \\&quot;spent\\&quot;: 12500, \\&quot;limit\\&quot;: 10000}...]&quot;\n }\n}</code></pre>",
        "kind": "code",
        "cn": "<p>{\"type\": \"code_execution_tool_result\", \"tool_use_id\": \"srvtoolu_abc\", \"content\": {\"stdout\": \"[\\ n {\\\" name\\ \":\\\" Alice\\ \",\\\" spent\\ \": 12500,\\\" limit\\ \": 10000}...]}}</p>"
      },
      {
        "en": "<p>This is all Claude sees, not the 2000+ expense line items processed along the way.</p>",
        "kind": "text",
        "cn": "<p>这就是 Claude 看到的全部内容，而不是处理过程中产生的 2000+ 条费用明细。</p>"
      },
      {
        "en": "<h3>When to use Programmatic Tool Calling</h3>",
        "kind": "heading",
        "cn": "<h3>何时使用程序化工具调用</h3>"
      },
      {
        "en": "<p>Programmatic Tool Calling adds a code execution step to your workflow. This extra overhead pays off when the token savings, latency improvements, and accuracy gains are substantial.</p>",
        "kind": "text",
        "cn": "<p>程序化工具调用为工作流增加了代码执行步骤。当 token 节省、延迟改善和准确率提升都很显著时，这一额外开销是值得的。</p>"
      },
      {
        "en": "<p><strong>Most beneficial when:</strong></p>",
        "kind": "text",
        "cn": "<p><strong>最适合的场景：</strong></p>"
      },
      {
        "en": "<ul><li>Processing large datasets where you only need aggregates or summaries</li></ul>",
        "kind": "list",
        "cn": "<ul><li>处理大型数据集且只需要汇总或摘要时</li></ul>"
      },
      {
        "en": "<ul><li>Running multi-step workflows with three or more dependent tool calls</li></ul>",
        "kind": "list",
        "cn": "<ul><li>运行包含三个或更多依赖工具调用的多步工作流时</li></ul>"
      },
      {
        "en": "<ul><li>Filtering, sorting, or transforming tool results before Claude sees them</li></ul>",
        "kind": "list",
        "cn": "<ul><li>在 Claude 看到结果之前需要对工具结果进行过滤、排序或转换时</li></ul>"
      }
    ]
  },
  {
    "id": 12,
    "title": "Writing effective tools for agents - with agents",
    "date": "2025-09-11",
    "diff": "★★★",
    "time": "30分钟",
    "author": "Anthropic",
    "url": "https://www.anthropic.com/engineering/writing-tools-for-agents",
    "vocab": [
      {
        "en": "evaluation task",
        "cn": "评估任务",
        "ex": "Use simple agentic loops ( while -loops wrapping alternating LLM API and tool calls): one loop for each evaluation task."
      },
      {
        "en": "tool response",
        "cn": "工具响应",
        "ex": "tool response in practice"
      },
      {
        "en": "tool implementation",
        "cn": "工具实现",
        "ex": "tool implementation in practice"
      },
      {
        "en": "held-out test set",
        "cn": "留出测试集",
        "ex": "Held-out test set performance of our internal Slack tools Generating evaluation tasks With your early prototype, Claude "
      },
      {
        "en": "namespace",
        "cn": "命名空间",
        "ex": "namespace in practice"
      },
      {
        "en": "prototype",
        "cn": "原型",
        "ex": "Start by standing up a quick prototype of your tools and testing them locally."
      },
      {
        "en": "token efficiency",
        "cn": "Token 效率",
        "ex": "We begin by covering how you can: - Build and test prototypes of your tools - Create and run comprehensive evaluations o"
      },
      {
        "en": "evaluation agent",
        "cn": "评估智能体",
        "ex": "Each evaluation agent should be given a single task prompt and your tools."
      },
      {
        "en": "meaningful context",
        "cn": "有意义的上下文",
        "ex": "We begin by covering how you can: - Build and test prototypes of your tools - Create and run comprehensive evaluations o"
      },
      {
        "en": "same output",
        "cn": "一致输出",
        "ex": "In computing, deterministic systems produce the same output every time given identical inputs, while non-deterministic s"
      }
    ],
    "structure": "<h3 style=\"color:var(--p);margin-bottom:14px\">文章结构预览</h3><div class=\"structure-summary\"><strong>文章主旨：</strong>为 agent 写好工具，关键不只是包装 API。工具名称、参数、返回值、错误提示和命名空间都会影响 agent 能否理解并正确使用它。</div><div class=\"structure-guide-list\"><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>What is a tool?</strong></div><p>重新定义 tool：它不是普通 API 包装，而是 agent 感知和操作外部世界的接口。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>How to write tools</strong></div><p>说明如何和 agent 一起写工具：先做原型，再通过实际任务观察工具是否好用。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">讲做法</span><strong>Building a prototype</strong></div><p>Building a prototype：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Running an evaluation</strong></div><p>说明如何评估工具质量：用任务样例检查 agent 是否理解工具目的并正确调用。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">定义问题</span><strong>Collaborating with agents</strong></div><p>Collaborating with agents：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row\"><div class=\"structure-row-head\"><span class=\"structure-step\">提炼结论</span><strong>Principles for writing effective tools</strong></div><p>Principles for writing effective tools：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Choosing the right tools for agents</strong></div><p>Choosing the right tools for agents：概括这一部分的关键观点，并说明它和前后章节之间的关系。</p></div><div class=\"structure-row structure-row-sub\"><div class=\"structure-row-head\"><span class=\"structure-step\">判断边界</span><strong>Namespacing your tools</strong></div><p>说明工具命名空间的重要性：清晰的服务名和资源名能帮助 agent 选对工具。</p></div></div>",
    "concepts": "<h3 style=\"color:var(--p);margin-bottom:14px\">核心概念卡片</h3><div class=\"concept-grid concept-stack\"><div class=\"concept-card\"><h4>What is a tool? <span class=\"en\">工具</span></h4><p><strong>本文语境：</strong>In computing, deterministic systems produce the same output every time given identical inputs, while non-deterministic systems—like agents—can generate varied responses even with the same starting conditions.</p><p><strong>英文表达：先把 tool 理解成本文里的功能角色，而不是只背成“工具”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-pr\">基础</span></div><div class=\"concept-card\"><h4>How to write tools <span class=\"en\">工具</span></h4><p><strong>本文语境：</strong>In this section, we describe how you can collaborate with agents both to write and to improve the tools you give them.</p><p><strong>英文表达：先把 tool 理解成本文里的功能角色，而不是只背成“工具”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">基础</span></div><div class=\"concept-card\"><h4>Building a prototype <span class=\"en\">原型</span></h4><p><strong>本文语境：</strong>It can be difficult to anticipate which tools agents will find ergonomic and which tools they won't without getting hands-on yourself.</p><p><strong>英文表达：先把 prototype 理解成本文里的功能角色，而不是只背成“原型”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-ag\">模式</span></div><div class=\"concept-card\"><h4>Running an evaluation <span class=\"en\">评估</span></h4><p><strong>本文语境：</strong>Next, you need to measure how well Claude uses your tools by running an evaluation.</p><p><strong>英文表达：先把 evaluation 理解成本文里的功能角色，而不是只背成“评估”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>重点不是“能不能自动做”，而是权限边界、失败兜底和人工确认点是否清楚。</strong></p><span class=\"concept-tag tag-pr\">模式</span></div><div class=\"concept-card\"><h4>Collaborating with agents <span class=\"en\">智能体</span></h4><p><strong>本文语境：</strong>You can even let agents analyze your results and improve your tools for you.</p><p><strong>英文表达：先把 agent 理解成本文里的功能角色，而不是只背成“智能体”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>判断方案是否可靠，要看它如何设计样例、指标和回归检查，而不是只看一次演示效果。</strong></p><span class=\"concept-tag tag-wf\">实践</span></div><div class=\"concept-card\"><h4>Principles for writing effective tools <span class=\"en\">工具</span></h4><p><strong>本文语境：</strong>In this section, we distill our learnings into a few guiding principles for writing effective tools.</p><p><strong>英文表达：先把 tool 理解成本文里的功能角色，而不是只背成“工具”。读到它时，判断作者是在讲定义、使用条件，还是工程后果。</strong></p><p><strong>工具是否好用，取决于名称、参数、返回值和错误信息是否让模型容易选对、用对、改对。</strong></p><span class=\"concept-tag tag-ag\">实践</span></div></div>",
    "tasks": "<h3 style=\"color:var(--p);margin:24px 0 14px\">学习任务清单</h3>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">速读：10 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>读完《Writing effective tools for agents - with agents》，用一句话写出作者真正想解决的问题</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">精读：25 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>解释 evaluation task（评估任务） / tool response（工具响应） / tool implementation（工具实现） / held-out test set（留出测试集） 在本文中的含义，不要只背中文翻译</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>整理 3 条能迁移到自己项目的工程原则，并写出适用条件</label></li></ul>\n<h4 style=\"margin:12px 0 6px;font-size:16px\">输出：15 分钟</h4>\n<ul class=\"checklist\"><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>用英文写 3-5 句话总结本文观点</label></li><li onclick=\"toggleCheck(this)\"><input type=\"checkbox\"><label>结合自己的业务场景，设计一个可验证的小实验或检查清单</label></li></ul>",
    "paragraphs": [
      {
        "en": "<p><a href=\"https://www.anthropic.com/engineering\" rel=\"noreferrer\" target=\"_blank\">Engineering at Anthropic</a></p>",
        "kind": "text",
        "cn": "<p><a href=\"https://www.anthropic.com/engineering\" rel=\"noreferrer\" target=\"_blank\">Anthropic 工程团队</a></p>"
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"\" src=\"https://aka.doubaocdn.com/s/gkpU1wZqw9\" loading=\"lazy\" /></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Agents are only as effective as the tools we give them. We share how to write high-quality tools and evaluations, and how you can boost performance by using Claude to optimize its tools for itself.</p>",
        "kind": "text",
        "cn": "<p>智能体的效能上限，取决于我们赋予它们的工具质量。本文分享如何编写高质量工具和评估方案，以及如何借助 Claude 自我优化工具来提升性能。</p>"
      },
      {
        "en": "<p>The <a href=\"https://modelcontextprotocol.io/docs/getting-started/intro\" rel=\"noreferrer\" target=\"_blank\">Model Context Protocol (MCP)</a> can empower LLM agents with potentially hundreds of tools to solve real-world tasks. But how do we make those tools maximally effective?</p>",
        "kind": "text",
        "cn": "<p><a href=\"https://modelcontextprotocol.io/docs/getting-started/intro\" rel=\"noreferrer\" target=\"_blank\">模型上下文协议（MCP）</a>可以为 LLM 智能体提供数百个工具来解决现实任务。但我们如何让这些工具发挥最大效用？</p>"
      },
      {
        "en": "<p>In this post, we describe our most effective techniques for improving performance in a variety of agentic AI systems&lt;sup&gt;1&lt;/sup&gt;.</p>",
        "kind": "text",
        "cn": "<p>在本文中，我们描述了在各类智能体 AI 系统中提升性能最有效的技术<sup>1</sup>。</p>"
      },
      {
        "en": "<p>We begin by covering how you can:</p>",
        "kind": "text",
        "cn": "<p>我们首先介绍如何：</p>"
      },
      {
        "en": "<ul><li>Build and test prototypes of your tools</li></ul>",
        "kind": "list",
        "cn": "<ul><li>构建并测试工具原型</li></ul>"
      },
      {
        "en": "<ul><li>Create and run comprehensive evaluations of your tools with agents</li></ul>",
        "kind": "list",
        "cn": "<ul><li>与智能体协作，创建并运行对工具的全面评估</li></ul>"
      },
      {
        "en": "<ul><li>Collaborate with agents like Claude Code to automatically increase the performance of your tools</li></ul>",
        "kind": "list",
        "cn": "<ul><li>与 Claude Code 等智能体协作，自动提升工具性能</li></ul>"
      },
      {
        "en": "<p>We conclude with key principles for writing high-quality tools we've identified along the way:</p>",
        "kind": "text",
        "cn": "<p>最后，我们总结了在此过程中发现的编写高质量工具的关键原则：</p>"
      },
      {
        "en": "<ul><li>Choosing the right tools to implement (and not to implement)</li></ul>",
        "kind": "list",
        "cn": "<ul><li>选择正确的工具来实现（以及哪些工具不该实现）</li></ul>"
      },
      {
        "en": "<ul><li>Namespacing tools to define clear boundaries in functionality</li></ul>",
        "kind": "list",
        "cn": "<ul><li>使用命名空间明确定义功能边界</li></ul>"
      },
      {
        "en": "<ul><li>Returning meaningful context from tools back to agents</li></ul>",
        "kind": "list",
        "cn": "<ul><li>从工具返回有意义的上下文给智能体</li></ul>"
      },
      {
        "en": "<ul><li>Optimizing tool responses for token efficiency</li></ul>",
        "kind": "list",
        "cn": "<ul><li>优化工具响应以提升 token 效率</li></ul>"
      },
      {
        "en": "<ul><li>Prompt-engineering tool descriptions and specs</li></ul>",
        "kind": "list",
        "cn": "<ul><li>对工具描述和规格进行提示词工程优化</li></ul>"
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/idZ01wZqw9)Building an evaluation allows you to systematically measure the performance of your tools. You can use Claude Code to automatically optimize your tools against this evaluation.</p>",
        "kind": "text",
        "cn": "<p>![](https://aka.doubaocdn.com/s/idZ01wZqw9)构建评估方案让你能系统地衡量工具性能。你可以使用 Claude Code 针对此评估方案自动优化工具。</p>"
      },
      {
        "en": "<h2>What is a tool?</h2>",
        "kind": "heading",
        "cn": "<h2>什么是工具？</h2>"
      },
      {
        "en": "<p>In computing, deterministic systems produce the same output every time given identical inputs, while <em>non-deterministic</em> systems—like agents—can generate varied responses even with the same starting conditions.</p>",
        "kind": "text",
        "cn": "<p>在计算领域，确定性系统对相同输入始终产生相同输出，而<em>非确定性</em>系统——如智能体——即便在相同初始条件下也可能产生不同的响应。</p>"
      },
      {
        "en": "<p>When we traditionally write software, we're establishing a contract between deterministic systems. For instance, a function call like <code>getWeather(&quot;NYC&quot;)</code> will always fetch the weather in New York City in the exact same manner every time it is called.</p>",
        "kind": "text",
        "cn": "<p>传统软件开发中，我们建立的是确定性系统之间的契约。例如，函数调用 <code>getWeather(\"NYC\")</code> 每次都会以完全相同的方式获取纽约的天气。</p>"
      },
      {
        "en": "<p>Tools are a new kind of software which reflects a contract between deterministic systems and non-deterministic agents. When a user asks &quot;Should I bring an umbrella today?,&quot; an agent might call the weather tool, answer from general knowledge, or even ask a clarifying question about location first. Occasionally, an agent might hallucinate or even fail to grasp how to use a tool.</p>",
        "kind": "text",
        "cn": "<p>工具是一种新型软件，它反映了确定性系统与非确定性智能体之间的契约。当用户问&quot;我今天需要带伞吗？&quot;时，智能体可能调用天气工具、凭通用知识回答，甚至先询问位置。有时，智能体可能产生幻觉，甚至无法理解如何使用某个工具。</p>"
      },
      {
        "en": "<p>This means fundamentally rethinking our approach when writing software for agents: instead of writing tools and <a href=\"https://modelcontextprotocol.io/\" rel=\"noreferrer\" target=\"_blank\">MCP servers</a> the way we'd write functions and APIs for other developers or systems, we need to design them for agents.</p>",
        "kind": "text",
        "cn": "<p>这意味着在为智能体编写软件时需要从根本上重新思考我们的方法：不能像为其他开发者或系统编写函数和 API 那样编写工具和 <a href=\"https://modelcontextprotocol.io/\" rel=\"noreferrer\" target=\"_blank\">MCP 服务器</a>，而必须专门为智能体而设计。</p>"
      },
      {
        "en": "<p>Our goal is to increase the surface area over which agents can be effective in solving a wide range of tasks by using tools to pursue a variety of successful strategies. Fortunately, in our experience, the tools that are most &quot;ergonomic&quot; for agents also end up being surprisingly intuitive to grasp as humans.</p>",
        "kind": "text",
        "cn": "<p>我们的目标是扩大智能体能有效解决各类任务的覆盖面，使其能通过工具采取多样化的成功策略。幸运的是，根据我们的经验，对智能体最&quot;符合人机工程学&quot;的工具，往往对人类来说也出人意料地直观易懂。</p>"
      },
      {
        "en": "<h2>How to write tools</h2>",
        "kind": "heading",
        "cn": "<h2>如何编写工具</h2>"
      },
      {
        "en": "<p>In this section, we describe how you can collaborate with agents both to write and to improve the tools you give them. Start by standing up a quick prototype of your tools and testing them locally. Next, run a comprehensive evaluation to measure subsequent changes. Working alongside agents, you can repeat the process of evaluating and improving your tools until your agents achieve strong performance on real-world tasks.</p>",
        "kind": "text",
        "cn": "<p>本节介绍如何与智能体协作，共同编写和改进提供给它们的工具。首先快速搭建工具原型并在本地测试。接着运行全面评估以衡量后续变化。与智能体协同工作，反复进行评估和改进，直到智能体在真实任务上取得出色表现。</p>"
      },
      {
        "en": "<h3>Building a prototype</h3>",
        "kind": "heading",
        "cn": "<h3>构建原型</h3>"
      },
      {
        "en": "<p>It can be difficult to anticipate which tools agents will find ergonomic and which tools they won't without getting hands-on yourself. Start by standing up a quick prototype of your tools. If you're using <a href=\"https://www.anthropic.com/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> to write your tools (potentially in one-shot), it helps to give Claude documentation for any software libraries, APIs, or SDKs (including potentially the <a href=\"https://modelcontextprotocol.io/docs/sdk\" rel=\"noreferrer\" target=\"_blank\">MCP SDK</a>) your tools will rely on. LLM-friendly documentation can commonly be found in flat <code>llms.txt</code> files on official documentation sites (here's our <a href=\"https://docs.anthropic.com/llms.txt\" rel=\"noreferrer\" target=\"_blank\">API's</a>).</p>",
        "kind": "text",
        "cn": "<p>不亲自动手，很难预料哪些工具对智能体来说顺手，哪些不顺手。先快速搭建工具原型。如果你在使用 <a href=\"https://www.anthropic.com/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> 编写工具（可能是一次性完成），给 Claude 提供工具所依赖的软件库、API 或 SDK（包括 <a href=\"https://modelcontextprotocol.io/docs/sdk\" rel=\"noreferrer\" target=\"_blank\">MCP SDK</a>）的文档会很有帮助。适合 LLM 阅读的文档通常以扁平的 <code>llms.txt</code> 文件形式出现在官方文档网站上（这是我们 <a href=\"https://docs.anthropic.com/llms.txt\" rel=\"noreferrer\" target=\"_blank\">API 的 llms.txt</a>）。</p>"
      },
      {
        "en": "<p>Wrapping your tools in a <a href=\"https://modelcontextprotocol.io/docs/develop/connect-local-servers\" rel=\"noreferrer\" target=\"_blank\">local MCP server</a> or <a href=\"https://www.anthropic.com/engineering/desktop-extensions\" rel=\"noreferrer\" target=\"_blank\">Desktop extension</a> (DXT) will allow you to connect and test your tools in Claude Code or the Claude Desktop app.</p>",
        "kind": "text",
        "cn": "<p>将工具封装在<a href=\"https://modelcontextprotocol.io/docs/develop/connect-local-servers\" rel=\"noreferrer\" target=\"_blank\">本地 MCP 服务器</a>或<a href=\"https://www.anthropic.com/engineering/desktop-extensions\" rel=\"noreferrer\" target=\"_blank\">桌面扩展</a>（DXT）中，可以让你在 Claude Code 或 Claude Desktop 应用中连接并测试工具。</p>"
      },
      {
        "en": "<p>To connect your local MCP server to Claude Code, run <code>claude mcp add &lt;name&gt; &lt;command&gt; [args...]</code>.</p>",
        "kind": "text",
        "cn": "<p>要将本地 MCP 服务器连接到 Claude Code，运行 <code>claude mcp add &lt;name&gt; &lt;command&gt; [args...]</code>。</p>"
      },
      {
        "en": "<p>To connect your local MCP server or DXT to the Claude Desktop app, navigate to <code>Settings &gt; Developer</code> or <code>Settings &gt; Extensions</code>, respectively.</p>",
        "kind": "text",
        "cn": "<p>要将本地 MCP 服务器或 DXT 连接到 Claude Desktop 应用，分别导航到 <code>Settings &gt; Developer</code> 或 <code>Settings &gt; Extensions</code>。</p>"
      },
      {
        "en": "<p>Tools can also be passed directly into <a href=\"https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview\" rel=\"noreferrer\" target=\"_blank\">Anthropic API</a> calls for programmatic testing.</p>",
        "kind": "text",
        "cn": "<p>工具也可以直接传入 <a href=\"https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview\" rel=\"noreferrer\" target=\"_blank\">Anthropic API</a> 调用，用于程序化测试。</p>"
      },
      {
        "en": "<p>Test the tools yourself to identify any rough edges. Collect feedback from your users to build an intuition around the use-cases and prompts you expect your tools to enable.</p>",
        "kind": "text",
        "cn": "<p>亲自测试工具，发现不顺手的地方。收集用户反馈，培养对工具预期支持的使用场景和提示词的直觉。</p>"
      },
      {
        "en": "<h3>Running an evaluation</h3>",
        "kind": "heading",
        "cn": "<h3>运行评估</h3>"
      },
      {
        "en": "<p>Next, you need to measure how well Claude uses your tools by running an evaluation. Start by generating lots of evaluation tasks, grounded in real world uses. We recommend collaborating with an agent to help analyze your results and determine how to improve your tools. See this process end-to-end in our <a href=\"https://platform.claude.com/cookbook/tool-evaluation-tool-evaluation\" rel=\"noreferrer\" target=\"_blank\">tool evaluation cookbook</a>.</p>",
        "kind": "text",
        "cn": "<p>接下来，你需要通过运行评估来衡量 Claude 对工具的使用效果。从生成大量基于真实使用场景的评估任务开始。我们建议与智能体协作，帮助分析结果并确定如何改进工具。请参阅我们的<a href=\"https://platform.claude.com/cookbook/tool-evaluation-tool-evaluation\" rel=\"noreferrer\" target=\"_blank\">工具评估 cookbook</a>，了解端到端的完整流程。</p>"
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/gG2V1wZqw9)Held-out test set performance of our internal Slack tools</p>",
        "kind": "text",
        "cn": "<p>![](https://aka.doubaocdn.com/s/gG2V1wZqw9)内部 Slack 工具的留出测试集性能表现</p>"
      },
      {
        "en": "<p><strong>Generating evaluation tasks</strong></p>",
        "kind": "text",
        "cn": "<p><strong>生成评估任务</strong></p>"
      },
      {
        "en": "<p>With your early prototype, Claude Code can quickly explore your tools and create dozens of prompt and response pairs. Prompts should be inspired by real-world uses and be based on realistic data sources and services (for example, internal knowledge bases and microservices). We recommend you avoid overly simplistic or superficial &quot;sandbox&quot; environments that don't stress-test your tools with sufficient complexity. Strong evaluation tasks might require multiple tool calls—potentially dozens.</p>",
        "kind": "text",
        "cn": "<p>有了早期原型，Claude Code 可以快速探索你的工具并创建数十个提示词与响应对。提示词应从真实使用场景中汲取灵感，基于真实的数据源和服务（例如内部知识库和微服务）。我们建议避免过于简单或肤浅的&quot;沙盒&quot;环境，这类环境无法以足够的复杂度对工具进行压力测试。强有力的评估任务可能需要多次工具调用——甚至多达数十次。</p>"
      },
      {
        "en": "<p>Here are some examples of strong tasks:</p>",
        "kind": "text",
        "cn": "<p>以下是一些优质任务示例：</p>"
      },
      {
        "en": "<ul><li>Schedule a meeting with Jane next week to discuss our latest Acme Corp project. Attach the notes from our last project planning meeting and reserve a conference room.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>安排下周与 Jane 的会议，讨论我们最新的 Acme Corp 项目。附上上次项目规划会议的纪要，并预订会议室。</li></ul>"
      },
      {
        "en": "<ul><li>Customer ID 9182 reported that they were charged three times for a single purchase attempt. Find all relevant log entries and determine if any other customers were affected by the same issue.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>客户 ID 9182 反映单次购买操作被收费三次。查找所有相关日志条目，并判断是否有其他客户受到同一问题的影响。</li></ul>"
      },
      {
        "en": "<ul><li>Customer Sarah Chen just submitted a cancellation request. Prepare a retention offer. Determine: (1) why they're leaving, (2) what retention offer would be most compelling, and (3) any risk factors we should be aware of before making an offer.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>客户 Sarah Chen 刚刚提交了取消申请。准备一份留客方案。需要确定：（1）她离开的原因，（2）什么样的留客优惠最有吸引力，（3）在提出方案前需要注意哪些风险因素。</li></ul>"
      },
      {
        "en": "<p>And here are some weaker tasks:</p>",
        "kind": "text",
        "cn": "<p>以下是一些较弱的任务示例：</p>"
      },
      {
        "en": "<ul><li>Schedule a meeting with jane@acme.corp next week.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>安排下周与 jane@acme.corp 的会议。</li></ul>"
      },
      {
        "en": "<ul><li>Search the payment logs for <code>purchase_complete</code> and <code>customer_id=9182</code>.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>在支付日志中搜索 <code>purchase_complete</code> 和 <code>customer_id=9182</code>。</li></ul>"
      },
      {
        "en": "<ul><li>Find the cancellation request by Customer ID 45892.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>查找客户 ID 45892 的取消申请。</li></ul>"
      },
      {
        "en": "<p>Each evaluation prompt should be paired with a verifiable response or outcome. Your verifier can be as simple as an exact string comparison between ground truth and sampled responses, or as advanced as enlisting Claude to judge the response. Avoid overly strict verifiers that reject correct responses due to spurious differences like formatting, punctuation, or valid alternative phrasings.</p>",
        "kind": "text",
        "cn": "<p>每个评估提示词都应与可验证的响应或结果配对。验证器可以简单到对比标准答案与采样响应的精确字符串匹配，也可以复杂到让 Claude 来评判响应。避免过于严格的验证器，因为它会因格式、标点或有效的替代措辞等无关差异而拒绝正确的响应。</p>"
      },
      {
        "en": "<p>For each prompt-response pair, you can optionally also specify the tools you expect an agent to call in solving the task, to measure whether or not agents are successful in grasping each tool's purpose during evaluation. However, because there might be multiple valid paths to solving tasks correctly, try to avoid overspecifying or overfitting to strategies.</p>",
        "kind": "text",
        "cn": "<p>对于每个提示词-响应对，你还可以选择性地指定解决任务时预期智能体会调用的工具，以衡量智能体在评估中是否成功理解了每个工具的用途。但由于可能存在多条正确解决任务的有效路径，应尽量避免过度指定或过拟合到特定策略。</p>"
      },
      {
        "en": "<p><strong>Running the evaluation</strong></p>",
        "kind": "text",
        "cn": "<p><strong>执行评估</strong></p>"
      },
      {
        "en": "<p>We recommend running your evaluation programmatically with direct LLM API calls. Use simple agentic loops (<code>while</code>-loops wrapping alternating LLM API and tool calls): one loop for each evaluation task. Each evaluation agent should be given a single task prompt and your tools.</p>",
        "kind": "text",
        "cn": "<p>我们建议通过直接的 LLM API 调用以程序化方式运行评估。使用简单的智能体循环（<code>while</code> 循环交替包装 LLM API 调用和工具调用）：每个评估任务对应一个循环。每个评估智能体应获得单个任务提示词和你的工具。</p>"
      },
      {
        "en": "<p>In your evaluation agents' system prompts, we recommend instructing agents to output not just structured response blocks (for verification), but also reasoning and feedback blocks. Instructing agents to output these <em>before</em> tool call and response blocks may increase LLMs' effective intelligence by triggering chain-of-thought (CoT) behaviors.</p>",
        "kind": "text",
        "cn": "<p>在评估智能体的系统提示词中，我们建议指示智能体不仅输出结构化响应块（用于验证），还要输出推理和反馈块。指示智能体在工具调用和响应块<em>之前</em>输出这些内容，可能通过触发思维链（CoT）行为来提升 LLM 的有效智能。</p>"
      },
      {
        "en": "<p>If you're running your evaluation with Claude, you can turn on <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#interleaved-thinking\" rel=\"noreferrer\" target=\"_blank\">interleaved thinking</a> for similar functionality &quot;off-the-shelf&quot;. This will help you probe why agents do or don't call certain tools and highlight specific areas of improvement in tool descriptions and specs.</p>",
        "kind": "text",
        "cn": "<p>如果使用 Claude 运行评估，可以开启<a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#interleaved-thinking\" rel=\"noreferrer\" target=\"_blank\">交错思考</a>功能，开箱即可获得类似效果。这将帮助你探究智能体调用或不调用某些工具的原因，并指出工具描述和规格中需要改进的具体方面。</p>"
      },
      {
        "en": "<p>As well as top-level accuracy, we recommend collecting other metrics like the total runtime of individual tool calls and tasks, the total number of tool calls, the total token consumption, and tool errors. Tracking tool calls can help reveal common workflows that agents pursue and offer some opportunities for tools to consolidate.</p>",
        "kind": "text",
        "cn": "<p>除了顶层准确率外，我们还建议收集其他指标，如单次工具调用和任务的总运行时间、工具调用总次数、总 token 消耗以及工具错误。追踪工具调用有助于揭示智能体常用的工作流，并为工具整合提供机会。</p>"
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/MHMG1wZqw9)Held-out test set performance of our internal Asana tools</p>",
        "kind": "text",
        "cn": "<p>![](https://aka.doubaocdn.com/s/MHMG1wZqw9)内部 Asana 工具的留出测试集性能表现</p>"
      },
      {
        "en": "<p><strong>Analyzing results</strong></p>",
        "kind": "text",
        "cn": "<p><strong>分析结果</strong></p>"
      },
      {
        "en": "<p>Agents are your helpful partners in spotting issues and providing feedback on everything from contradictory tool descriptions to inefficient tool implementations and confusing tool schemas. However, keep in mind that what agents omit in their feedback and responses can often be more important than what they include. LLMs don't always <a href=\"https://www.anthropic.com/research/tracing-thoughts-language-model\" rel=\"noreferrer\" target=\"_blank\">say what they mean</a>.</p>",
        "kind": "text",
        "cn": "<p>智能体是发现问题和提供反馈的好帮手，涵盖从矛盾的工具描述到低效的工具实现和令人困惑的工具结构定义。但请记住，智能体在反馈和响应中<em>省略</em>的内容往往比<em>包含</em>的内容更重要。LLM 并不总是<a href=\"https://www.anthropic.com/research/tracing-thoughts-language-model\" rel=\"noreferrer\" target=\"_blank\">言出所意</a>。</p>"
      },
      {
        "en": "<p>Observe where your agents get stumped or confused. Read through your evaluation agents' reasoning and feedback (or CoT) to identify rough edges. Review the raw transcripts (including tool calls and tool responses) to catch any behavior not explicitly described in the agent's CoT. Read between the lines; remember that your evaluation agents don't necessarily know the correct answers and strategies.</p>",
        "kind": "text",
        "cn": "<p>观察智能体在哪里受阻或感到困惑。仔细阅读评估智能体的推理和反馈（或思维链），找出不顺手的地方。审查原始对话记录（包括工具调用和工具响应），捕捉智能体思维链中未明确描述的行为。读懂言外之意；记住，你的评估智能体未必知道正确的答案和策略。</p>"
      },
      {
        "en": "<p>Analyze your tool calling metrics. Lots of redundant tool calls might suggest some rightsizing of pagination or token limit parameters is warranted; lots of tool errors for invalid parameters might suggest tools could use clearer descriptions or better examples. When we launched Claude's <a href=\"https://www.anthropic.com/news/web-search\" rel=\"noreferrer\" target=\"_blank\">web search tool</a>, we identified that Claude was needlessly appending <code>2025</code> to the tool's <code>query</code> parameter, biasing search results and degrading performance (we steered Claude in the right direction by improving the tool description).</p>",
        "kind": "text",
        "cn": "<p>分析工具调用指标。大量冗余的工具调用可能意味着需要调整分页或 token 限制参数的大小；大量因无效参数导致的工具错误可能意味着工具需要更清晰的描述或更好的示例。当我们推出 Claude 的<a href=\"https://www.anthropic.com/news/web-search\" rel=\"noreferrer\" target=\"_blank\">网络搜索工具</a>时，我们发现 Claude 会无谓地在工具的 <code>query</code> 参数中附加 <code>2025</code>，导致搜索结果有偏差、性能下降（我们通过改进工具描述引导 Claude 走向正确方向）。</p>"
      },
      {
        "en": "<h3>Collaborating with agents</h3>",
        "kind": "heading",
        "cn": "<h3>与智能体协作</h3>"
      },
      {
        "en": "<p>You can even let agents analyze your results and improve your tools for you. Simply concatenate the transcripts from your evaluation agents and paste them into Claude Code. Claude is an expert at analyzing transcripts and refactoring lots of tools all at once—for example, to ensure tool implementations and descriptions remain self-consistent when new changes are made.</p>",
        "kind": "text",
        "cn": "<p>你甚至可以让智能体为你分析结果并改进工具。只需将评估智能体的对话记录拼接起来，粘贴到 Claude Code 中。Claude 擅长分析对话记录并一次性重构大量工具——例如，确保在做出新变更时，工具实现和描述保持自洽。</p>"
      },
      {
        "en": "<p>In fact, most of the advice in this post came from repeatedly optimizing our internal tool implementations with Claude Code. Our evaluations were created on top of our internal workspace, mirroring the complexity of our internal workflows, including real projects, documents, and messages.</p>",
        "kind": "text",
        "cn": "<p>事实上，本文中的大多数建议都来自使用 Claude Code 反复优化我们内部工具实现的过程。我们的评估是在内部工作空间基础上构建的，反映了内部工作流的复杂性，包括真实的项目、文档和消息。</p>"
      },
      {
        "en": "<p>We relied on held-out test sets to ensure we did not overfit to our &quot;training&quot; evaluations. These test sets revealed that we could extract additional performance improvements even beyond what we achieved with &quot;expert&quot; tool implementations—whether those tools were manually written by our researchers or generated by Claude itself.</p>",
        "kind": "text",
        "cn": "<p>我们依靠留出测试集来确保不会过拟合到&quot;训练&quot;评估中。这些测试集表明，即使超越了&quot;专家级&quot;工具实现所达到的水平，我们仍能获得额外的性能提升——无论这些工具是由研究人员手动编写的，还是由 Claude 本身生成的。</p>"
      },
      {
        "en": "<p>In the next section, we'll share some of what we learned from this process.</p>",
        "kind": "text",
        "cn": "<p>在下一节中，我们将分享从这一过程中学到的一些经验。</p>"
      },
      {
        "en": "<h2>Principles for writing effective tools</h2>",
        "kind": "heading",
        "cn": "<h2>编写高效工具的原则</h2>"
      },
      {
        "en": "<p>In this section, we distill our learnings into a few guiding principles for writing effective tools.</p>",
        "kind": "text",
        "cn": "<p>本节将我们的经验提炼为几条编写高效工具的指导原则。</p>"
      },
      {
        "en": "<h3>Choosing the right tools for agents</h3>",
        "kind": "heading",
        "cn": "<h3>为智能体选择合适的工具</h3>"
      },
      {
        "en": "<p>More tools don't always lead to better outcomes. A common error we've observed is tools that merely wrap existing software functionality or API endpoints—whether or not the tools are appropriate for agents. This is because agents have distinct &quot;affordances&quot; to traditional software—that is, they have different ways of perceiving the potential actions they can take with those tools</p>",
        "kind": "text",
        "cn": "<p>工具越多并不意味着结果越好。我们观察到一个常见错误：工具只是简单包装现有软件功能或 API 端点，而不管这些工具是否适合智能体使用。这是因为智能体与传统软件相比有不同的&quot;可供性（affordances）&quot;——也就是说，它们对工具所能执行的潜在操作有不同的感知方式。</p>"
      },
      {
        "en": "<p>LLM agents have limited &quot;context&quot; (that is, there are limits to how much information they can process at once), whereas computer memory is cheap and abundant. Consider the task of searching for a contact in an address book. Traditional software programs can efficiently store and process a list of contacts one at a time, checking each one before moving on.</p>",
        "kind": "text",
        "cn": "<p>LLM 智能体的&quot;上下文&quot;有限（即一次能处理的信息量存在上限），而计算机内存则廉价且充裕。以在通讯录中搜索联系人为例。传统软件程序可以高效地逐一存储和处理联系人列表，逐个检查后再继续。</p>"
      },
      {
        "en": "<p>However, if an LLM agent uses a tool that returns ALL contacts and then has to read through each one token-by-token, it's wasting its limited context space on irrelevant information (imagine searching for a contact in your address book by reading each page from top-to-bottom—that is, via brute-force search). The better and more natural approach (for agents and humans alike) is to skip to the relevant page first (perhaps finding it alphabetically).</p>",
        "kind": "text",
        "cn": "<p>然而，如果 LLM 智能体使用的工具返回<em>所有</em>联系人，它就必须逐个 token 读取每一条，这会将有限的上下文空间浪费在无关信息上（想象一下从头到尾逐页阅读通讯录来查找联系人——即暴力搜索）。更好、更自然的方法（对智能体和人类都适用）是先跳到相关页面（例如按字母顺序查找）。</p>"
      },
      {
        "en": "<p>We recommend building a few thoughtful tools targeting specific high-impact workflows, which match your evaluation tasks and scaling up from there. In the address book case, you might choose to implement a <code>search_contacts</code> or <code>message_contact</code> tool instead of a <code>list_contacts</code> tool.</p>",
        "kind": "text",
        "cn": "<p>我们建议针对特定高影响力工作流构建少量经过深思熟虑的工具，使其与评估任务相匹配，然后再逐步扩展。以通讯录为例，你可以选择实现 <code>search_contacts</code>（搜索联系人）或 <code>message_contact</code>（发送消息给联系人）工具，而不是 <code>list_contacts</code>（列出所有联系人）工具。</p>"
      },
      {
        "en": "<p>Tools can consolidate functionality, handling potentially <em>multiple</em> discrete operations (or API calls) under the hood. For example, tools can enrich tool responses with related metadata or handle frequently chained, multi-step tasks in a single tool call.</p>",
        "kind": "text",
        "cn": "<p>工具可以整合功能，在底层处理潜在的<em>多个</em>独立操作（或 API 调用）。例如，工具可以用相关元数据丰富工具响应，或在单次工具调用中处理频繁串联的多步任务。</p>"
      },
      {
        "en": "<p>Here are some examples:</p>",
        "kind": "text",
        "cn": "<p>以下是一些示例：</p>"
      },
      {
        "en": "<ul><li>Instead of implementing a <code>list_users</code>, <code>list_events</code>, and <code>create_event</code> tools, consider implementing a <code>schedule_event</code> tool which finds availability and schedules an event.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>与其分别实现 <code>list_users</code>、<code>list_events</code> 和 <code>create_event</code> 工具，不如考虑实现一个 <code>schedule_event</code> 工具，它能自动查找空闲时间并安排活动。</li></ul>"
      },
      {
        "en": "<ul><li>Instead of implementing a <code>read_logs</code> tool, consider implementing a <code>search_logs</code> tool which only returns relevant log lines and some surrounding context.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>与其实现 <code>read_logs</code> 工具，不如实现一个 <code>search_logs</code> 工具，它只返回相关日志行及周围少量上下文。</li></ul>"
      },
      {
        "en": "<ul><li>Instead of implementing <code>get_customer_by_id</code>, <code>list_transactions</code>, and <code>list_notes</code> tools, implement a <code>get_customer_context</code> tool which compiles all of a customer's recent &amp; relevant information all at once.</li></ul>",
        "kind": "list",
        "cn": "<ul><li>与其分别实现 <code>get_customer_by_id</code>、<code>list_transactions</code> 和 <code>list_notes</code> 工具，不如实现一个 <code>get_customer_context</code> 工具，一次性汇编某客户所有近期相关信息。</li></ul>"
      },
      {
        "en": "<p>Make sure each tool you build has a clear, distinct purpose. Tools should enable agents to subdivide and solve tasks in much the same way that a human would, given access to the same underlying resources, and simultaneously reduce the context that would have otherwise been consumed by intermediate outputs.</p>",
        "kind": "text",
        "cn": "<p>确保你构建的每个工具都有清晰且独特的目的。工具应能让智能体以与人类大致相同的方式拆解和解决任务——前提是能访问相同的底层资源——同时减少原本会被中间输出消耗的上下文。</p>"
      },
      {
        "en": "<p>Too many tools or overlapping tools can also distract agents from pursuing efficient strategies. Careful, selective planning of the tools you build (or don't build) can really pay off.</p>",
        "kind": "text",
        "cn": "<p>过多或功能重叠的工具也会分散智能体追求高效策略的注意力。对构建（或不构建）的工具进行审慎、有选择性的规划，往往能带来显著回报。</p>"
      },
      {
        "en": "<h3>Namespacing your tools</h3>",
        "kind": "heading",
        "cn": "<h3>为工具设置命名空间</h3>"
      },
      {
        "en": "<p>Your AI agents will potentially gain access to dozens of MCP servers and hundreds of different tools–including those by other developers. When tools overlap in function or have a vague purpose, agents can get confused about which ones to use.</p>",
        "kind": "text",
        "cn": "<p>你的 AI 智能体可能需要访问数十个 MCP 服务器和数百个不同工具——包括其他开发者的工具。当工具功能重叠或目的模糊时，智能体可能会在选择上产生混乱。</p>"
      },
      {
        "en": "<p>Namespacing (grouping related tools under common prefixes) can help delineate boundaries between lots of tools; MCP clients sometimes do this by default. For example, namespacing tools by service (e.g., <code>asana_search</code>, <code>jira_search</code>) and by resource (e.g., <code>asana_projects_search</code>, <code>asana_users_search</code>), can help agents select the right tools at the right time.</p>",
        "kind": "text",
        "cn": "<p>命名空间（将相关工具归组到公共前缀下）有助于划定大量工具之间的边界；MCP 客户端有时会默认执行此操作。例如，按服务命名（如 <code>asana_search</code>、<code>jira_search</code>）和按资源命名（如 <code>asana_projects_search</code>、<code>asana_users_search</code>），可以帮助智能体在正确的时机选择正确的工具。</p>"
      },
      {
        "en": "<p>We have found selecting between prefix- and suffix-based namespacing to have non-trivial effects on our tool-use evaluations. Effects vary by LLM and we encourage you to choose a naming scheme according to your own evaluations.</p>",
        "kind": "text",
        "cn": "<p>我们发现在前缀式和后缀式命名空间之间的选择，对工具使用评估结果有不可忽视的影响。不同 LLM 的效果各有差异，我们鼓励你根据自己的评估结果选择合适的命名方案。</p>"
      },
      {
        "en": "<p>Agents might call the wrong tools, call the right tools with the wrong parameters, call too few tools, or process tool responses incorrectly. By selectively implementing tools whose names reflect natural subdivisions of tasks,</p>",
        "kind": "text",
        "cn": "<p>智能体可能会调用错误的工具、以错误的参数调用正确的工具、调用工具次数不足，或错误处理工具响应。通过有选择地实现名称反映任务自然细分的工具，</p>"
      }
    ]
  }
];

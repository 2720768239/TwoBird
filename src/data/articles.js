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
        "cn": ""
      },
      {
        "en": "<p><em>Update: We've published <a href=\"https://agentskills.io/\" rel=\"noreferrer\" target=\"_blank\">Agent Skills</a> as an open standard for cross-platform portability. (December 18, 2025)</em></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>As model capabilities improve, we can now build general-purpose agents that interact with full-fledged computing environments. <a href=\"https://claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a>, for example, can accomplish complex tasks across domains using local code execution and filesystems. But as these agents become more powerful, we need more composable, scalable, and portable ways to equip them with domain-specific expertise.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This led us to create <a href=\"https://www.anthropic.com/news/skills\" rel=\"noreferrer\" target=\"_blank\">**Agent Skills**</a>: organized folders of instructions, scripts, and resources that agents can discover and load dynamically to perform better at specific tasks. Skills extend Claude's capabilities by packaging your expertise into composable resources for Claude, transforming general-purpose agents into specialized agents that fit your needs.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Building a skill for an agent is like putting together an onboarding guide for a new hire. Instead of building fragmented, custom-designed agents for each use case, anyone can now specialize their agents with composable capabilities by capturing and sharing their procedural knowledge. In this article, we explain what Skills are, show how they work, and share best practices for building your own.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"A skill is a directory containing a SKILL.md file that contains organized folders of instructions, scripts, and resources that give agents additional capabilities.\" src=\"https://aka.doubaocdn.com/s/Cq501wZqTM\" loading=\"lazy\" /><figcaption>A skill is a directory containing a SKILL.md file that contains organized folders of instructions, scripts, and resources that give agents additional capabilities.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>The anatomy of a skill</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>To see Skills in action, let's walk through a real example: one of the skills that powers <a href=\"https://www.anthropic.com/news/create-files\" rel=\"noreferrer\" target=\"_blank\">Claude's recently launched document editing abilities</a>. Claude already knows a lot about understanding PDFs, but is limited in its ability to manipulate them directly (e.g. to fill out a form). This <a href=\"https://github.com/anthropics/skills/tree/main/document-skills/pdf\" rel=\"noreferrer\" target=\"_blank\">PDF skill</a> lets us give Claude these new abilities.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>At its simplest, a skill is a directory that contains a <code>SKILL.md file</code>. This file must start with YAML frontmatter that contains some required metadata: <code>name</code> and <code>description</code>. At startup, the agent pre-loads the <code>name</code> and <code>description</code> of every installed skill into its system prompt.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This metadata is the <strong>first level</strong> of <em>progressive disclosure</em>: it provides just enough information for Claude to know when each skill should be used without loading all of it into context. The actual body of this file is the <strong>second level</strong> of detail. If Claude thinks the skill is relevant to the current task, it will load the skill by reading its full <code>SKILL.md</code> into context.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"A SKILL.md file must begin with YAML Frontmatter that contains a file name and description, which is loaded into its system prompt at startup.\" src=\"https://aka.doubaocdn.com/s/5J2p1wZqTM\" loading=\"lazy\" /><figcaption>A SKILL.md file must begin with YAML Frontmatter that contains a file name and description, which is loaded into its system prompt at startup.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>As skills grow in complexity, they may contain too much context to fit into a single <code>SKILL.md</code>, or context that's relevant only in specific scenarios. In these cases, skills can bundle additional files within the skill directory and reference them by name from <code>SKILL.md</code>. These additional linked files are the <strong>third level</strong> (and beyond) of detail, which Claude can choose to navigate and discover only as needed.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In the PDF skill shown below, the <code>SKILL.md</code> refers to two additional files (<code>reference.md</code> and <code>forms.md</code>) that the skill author chooses to bundle alongside the core <code>SKILL.md</code>. By moving the form-filling instructions to a separate file (<code>forms.md</code>), the skill author is able to keep the core of the skill lean, trusting that Claude will read <code>forms.md</code> only when filling out a form.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"You can incorporate more context (via additional files) into your skill that can then be triggered by Claude based on the system prompt.\" src=\"https://aka.doubaocdn.com/s/Ef7P1wZqTM\" loading=\"lazy\" /><figcaption>You can incorporate more context (via additional files) into your skill that can then be triggered by Claude based on the system prompt.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Progressive disclosure is the core design principle that makes Agent Skills flexible and scalable. Like a well-organized manual that starts with a table of contents, then specific chapters, and finally a detailed appendix, skills let Claude load information only as needed:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Progressive disclosure levels\" src=\"https://aka.doubaocdn.com/s/etRN1wZqTM\" loading=\"lazy\" /><figcaption>Progressive disclosure levels</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Agents with a filesystem and code execution tools don't need to read the entirety of a skill into their context window when working on a particular task. This means that the amount of context that can be bundled into a skill is effectively unbounded.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Skills and the context window</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>The following diagram shows how the context window changes when a skill is triggered by a user's message.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Skills are triggered in the context window via your system prompt.\" src=\"https://aka.doubaocdn.com/s/4cBr1wZqTM\" loading=\"lazy\" /><figcaption>Skills are triggered in the context window via your system prompt.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>The sequence of operations shown:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li>To start, the context window has the core system prompt and the metadata for each of the installed skills, along with the user's initial message;</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li>Claude triggers the PDF skill by invoking a Bash tool to read the contents of <code>pdf/SKILL.md</code>;</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li>Claude chooses to read the <code>forms.md</code> file bundled with the skill;</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li>Finally, Claude proceeds with the user's task now that it has loaded relevant instructions from the PDF skill.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<h3>Skills and code execution</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Skills can also include code for Claude to execute as tools at its discretion.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Large language models excel at many tasks, but certain operations are better suited for traditional code execution. For example, sorting a list via token generation is far more expensive than simply running a sorting algorithm. Beyond efficiency concerns, many applications require the deterministic reliability that only code can provide.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In our example, the PDF skill includes a pre-written Python script that reads a PDF and extracts all form fields. Claude can run this script without loading either the script or the PDF into context. And because code is deterministic, this workflow is consistent and repeatable.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Skills can also include code for Claude to execute as tools at its discretion based on the nature of the task.\" src=\"https://aka.doubaocdn.com/s/CrcD1wZqTM\" loading=\"lazy\" /><figcaption>Skills can also include code for Claude to execute as tools at its discretion based on the nature of the task.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Developing and evaluating skills</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Here are some helpful guidelines for getting started with authoring and testing skills:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Start with evaluation:</strong> Identify specific gaps in your agents' capabilities by running them on representative tasks and observing where they struggle or require additional context. Then build skills incrementally to address these shortcomings.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Structure for scale:</strong> When the <code>SKILL.md</code> file becomes unwieldy, split its content into separate files and reference them. If certain contexts are mutually exclusive or rarely used together, keeping the paths separate will reduce the token usage. Finally, code can serve as both executable tools and as documentation. It should be clear whether Claude should run scripts directly or read them into context as reference.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Think from Claude's perspective:</strong> Monitor how Claude uses your skill in real scenarios and iterate based on observations: watch for unexpected trajectories or overreliance on certain contexts. Pay special attention to the <code>name</code> and <code>description</code> of your skill. Claude will use these when deciding whether to trigger the skill in response to its current task.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Iterate with Claude:</strong> As you work on a task with Claude, ask Claude to capture its successful approaches and common mistakes into reusable context and code within a skill. If it goes off track when using a skill to complete a task, ask it to self-reflect on what went wrong. This process will help you discover what context Claude actually needs, instead of trying to anticipate it upfront.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<h3>Security considerations when using Skills</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Skills provide Claude with new capabilities through instructions and code. While this makes them powerful, it also means that malicious skills may introduce vulnerabilities in the environment where they're used or direct Claude to exfiltrate data and take unintended actions.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We recommend installing skills only from trusted sources. When installing a skill from a less-trusted source, thoroughly audit it before use. Start by reading the contents of the files bundled in the skill to understand what it does, paying particular attention to code dependencies and bundled resources like images or scripts. Similarly, pay attention to instructions or code within the skill that instruct Claude to connect to potentially untrusted external network sources.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>The future of Skills</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Agent Skills are <a href=\"https://www.anthropic.com/news/skills\" rel=\"noreferrer\" target=\"_blank\">supported today</a> across <a href=\"http://claude.ai/redirect/website.v1.5946a4f9-79a9-42fa-bd15-f9594f1f85d4\" rel=\"noreferrer\" target=\"_blank\">Claude.ai</a>, Claude Code, the Claude Agent SDK, and the Claude Developer Platform.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In the coming weeks, we'll continue to add features that support the full lifecycle of creating, editing, discovering, sharing, and using Skills. We're especially excited about the opportunity for Skills to help organizations and individuals share their context and workflows with Claude. We'll also explore how Skills can complement <a href=\"https://modelcontextprotocol.io/\" rel=\"noreferrer\" target=\"_blank\">Model Context Protocol</a> (MCP) servers by teaching agents more complex workflows that involve external tools and software.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Looking further ahead, we hope to enable agents to create, edit, and evaluate Skills on their own, letting them codify their own patterns of behavior into reusable capabilities.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Skills are a simple concept with a correspondingly simple format. This simplicity makes it easier for organizations, developers, and end users to build customized agents and give them new capabilities.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We're excited to see what people build with Skills. Get started today by checking out our Skills <a href=\"https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview\" rel=\"noreferrer\" target=\"_blank\">docs</a> and <a href=\"https://github.com/anthropics/claude-cookbooks/tree/main/skills\" rel=\"noreferrer\" target=\"_blank\">cookbook</a>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Acknowledgements</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Written by Barry Zhang, Keith Lazuka, and Mahesh Murag, who all really like folders. Special thanks to the many others across Anthropic who championed, supported, and built Skills.</p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p>After a few years of prompt engineering being the focus of attention in applied AI, a new term has come to prominence: <strong>context engineering</strong>. Building with language models is becoming less about finding the right words and phrases for your prompts, and more about answering the broader question of &quot;what configuration of context is most likely to generate our model's desired behavior?&quot;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Context</strong> refers to the set of tokens included when sampling from a large-language model (LLM). The <strong>engineering</strong> problem at hand is optimizing the utility of those tokens against the inherent constraints of LLMs in order to consistently achieve a desired outcome. Effectively wrangling LLMs often requires <em>thinking in context</em> — in other words: considering the holistic state available to the LLM at any given time and what potential behaviors that state might yield.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In this post, we'll explore the emerging art of context engineering and offer a refined mental model for building steerable, effective agents.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Context engineering vs. prompt engineering</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>At Anthropic, we view context engineering as the natural progression of prompt engineering. Prompt engineering refers to methods for writing and organizing LLM instructions for optimal outcomes (see <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview\" rel=\"noreferrer\" target=\"_blank\">our docs</a> for an overview and useful prompt engineering strategies). <strong>Context engineering</strong> refers to the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference, including all the other information that may land there outside of the prompts.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In the early days of engineering with LLMs, prompting was the biggest component of AI engineering work, as the majority of use cases outside of everyday chat interactions required prompts optimized for one-shot classification or text generation tasks. As the term implies, the primary focus of prompt engineering is how to write effective prompts, particularly system prompts. However, as we move towards engineering more capable agents that operate over multiple turns of inference and longer time horizons, we need strategies for managing the entire context state (system instructions, tools, <a href=\"https://modelcontextprotocol.io/docs/getting-started/intro\" rel=\"noreferrer\" target=\"_blank\">Model Context Protocol</a> (MCP), external data, message history, etc).</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>An agent running in a loop generates more and more data that <em>could</em> be relevant for the next turn of inference, and this information must be cyclically refined. Context engineering is the <a href=\"https://x.com/karpathy/status/1937902205765607626?lang=en\" rel=\"noreferrer\" target=\"_blank\">art and science</a> of curating what will go into the limited context window from that constantly evolving universe of possible information.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"In contrast to the discrete task of writing a prompt, context engineering is iterative and the curation phase happens each time we decide what to pass to the model.\" src=\"https://aka.doubaocdn.com/s/2FNq1wZqTN\" loading=\"lazy\" /><figcaption>In contrast to the discrete task of writing a prompt, context engineering is iterative and the curation phase happens each time we decide what to pass to the model.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Why context engineering is important to building capable agents</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Despite their speed and ability to manage larger and larger volumes of data, we've observed that LLMs, like humans, lose focus or experience confusion at a certain point. Studies on needle-in-a-haystackstyle benchmarking have uncovered the concept of <a href=\"https://research.trychroma.com/context-rot\" rel=\"noreferrer\" target=\"_blank\">context rot</a>: as the number of tokens in the context window increases, the model's ability to accurately recall information from that context decreases.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>While some models exhibit more gentle degradation than others, this characteristic emerges across all models. Context, therefore, must be treated as a finite resource with diminishing marginal returns. Like humans, who have <a href=\"https://journals.sagepub.com/doi/abs/10.1177/0963721409359277\" rel=\"noreferrer\" target=\"_blank\">limited working memory capacity</a>, LLMs have an &quot;attention budget&quot; that they draw on when parsing large volumes of context. Every new token introduced depletes this budget by some amount, increasing the need to carefully curate the tokens available to the LLM.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This attention scarcity stems from architectural constraints of LLMs. LLMs are based on the <a href=\"https://arxiv.org/abs/1706.03762\" rel=\"noreferrer\" target=\"_blank\">transformer architecture</a>, which enables every token to <a href=\"https://huggingface.co/blog/Esmail-AGumaan/attention-is-all-you-need\" rel=\"noreferrer\" target=\"_blank\">attend to every other token</a> across the entire context. This results in n² pairwise relationships for n tokens.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>As its context length increases, a model's ability to capture these pairwise relationships gets stretched thin, creating a natural tension between context size and attention focus. Additionally, models develop their attention patterns from training data distributions where shorter sequences are typically more common than longer ones. This means models have less experience with, and fewer specialized parameters for, context-wide dependencies.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Techniques like <a href=\"https://arxiv.org/pdf/2306.15595\" rel=\"noreferrer\" target=\"_blank\">position encoding interpolation</a> allow models to handle longer sequences by adapting them to the originally trained smaller context, though with some degradation in token position understanding. These factors create a performance gradient rather than a hard cliff: models remain highly capable at longer contexts but may show reduced precision for information retrieval and long-range reasoning compared to their performance on shorter contexts.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>These realities mean that thoughtful context engineering is essential for building capable agents.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>The anatomy of effective context</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Given that LLMs are constrained by a finite attention budget, <em>good</em> context engineering means finding the <em>smallest</em> <em>possible</em> set of high-signal tokens that maximize the likelihood of some desired outcome. Implementing this practice is much easier said than done, but in the following section, we outline what this guiding principle means in practice across the different components of context.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>System prompts</strong> should be extremely clear and use simple, direct language that presents ideas at the <em>right altitude</em> for the agent. The right altitude is the Goldilocks zone between two common failure modes. At one extreme, we see engineers hardcoding complex, brittle logic in their prompts to elicit exact agentic behavior. This approach creates fragility and increases maintenance complexity over time. At the other extreme, engineers sometimes provide vague, high-level guidance that fails to give the LLM concrete signals for desired outputs or falsely assumes shared context. The optimal altitude strikes a balance: specific enough to guide behavior effectively, yet flexible enough to provide the model with strong heuristics to guide behavior.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"At one end of the spectrum, we see brittle if-else hardcoded prompts, and at the other end we see prompts that are overly general or falsely assume shared context.\" src=\"https://aka.doubaocdn.com/s/E7Ll1wZqTN\" loading=\"lazy\" /><figcaption>At one end of the spectrum, we see brittle if-else hardcoded prompts, and at the other end we see prompts that are overly general or falsely assume shared context.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>We recommend organizing prompts into distinct sections (like <code>&lt;background_information&gt;</code>, <code>&lt;instructions&gt;</code>, <code>## Tool guidance</code>, <code>## Output description</code>, etc) and using techniques like XML tagging or Markdown headers to delineate these sections, although the exact formatting of prompts is likely becoming less important as models become more capable.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Regardless of how you decide to structure your system prompt, you should be striving for the minimal set of information that fully outlines your expected behavior. (Note that minimal does not necessarily mean short; you still need to give the agent sufficient information up front to ensure it adheres to the desired behavior.) It's best to start by testing a minimal prompt with the best model available to see how it performs on your task, and then add clear instructions and examples to improve performance based on failure modes found during initial testing.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Tools</strong> allow agents to operate with their environment and pull in new, additional context as they work. Because tools define the contract between agents and their information/action space, it's extremely important that tools promote efficiency, both by returning information that is token efficient and by encouraging efficient agent behaviors.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In <a href=\"https://www.anthropic.com/engineering/writing-tools-for-agents\" rel=\"noreferrer\" target=\"_blank\">Writing tools for AI agents – with AI agents</a>, we discussed building tools that are well understood by LLMs and have minimal overlap in functionality. Similar to the functions of a well-designed codebase, tools should be self-contained, robust to error, and extremely clear with respect to their intended use. Input parameters should similarly be descriptive, unambiguous, and play to the inherent strengths of the model.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>One of the most common failure modes we see is bloated tool sets that cover too much functionality or lead to ambiguous decision points about which tool to use. If a human engineer can't definitively say which tool should be used in a given situation, an AI agent can't be expected to do better. As we'll discuss later, curating a minimal viable set of tools for the agent can also lead to more reliable maintenance and pruning of context over long interactions.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Providing examples, otherwise known as few-shot prompting, is a well known best practice that we continue to strongly advise. However, teams will often stuff a laundry list of edge cases into a prompt in an attempt to articulate every possible rule the LLM should follow for a particular task. We do not recommend this. Instead, we recommend working to curate a set of diverse, canonical examples that effectively portray the expected behavior of the agent. For an LLM, examples are the &quot;pictures&quot; worth a thousand words.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Our overall guidance across the different components of context (system prompts, tools, examples, message history, etc) is to be thoughtful and keep your context informative, yet tight. Now let's dive into dynamically retrieving context at runtime.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Context retrieval and agentic search</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>In <a href=\"https://www.anthropic.com/research/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">Building effective AI agents</a>, we highlighted the differences between LLM-based workflows and agents. Since we wrote that post, we've gravitated towards a <a href=\"https://simonwillison.net/2025/Sep/18/agents/\" rel=\"noreferrer\" target=\"_blank\">simple definition</a> for agents: LLMs autonomously using tools in a loop.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Working alongside our customers, we've seen the field converging on this simple paradigm. As the underlying models become more capable, the level of autonomy of agents can scale: smarter models allow agents to independently navigate nuanced problem spaces and recover from errors.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We're now seeing a shift in how engineers think about designing context for agents. Today, many AI-native applications employ some form of embedding-based pre-inference time retrieval to surface important context for the agent to reason over. As the field transitions to more agentic approaches, we increasingly see teams augmenting these retrieval systems with &quot;just in time&quot; context strategies.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Rather than pre-processing all relevant data up front, agents built with the &quot;just in time&quot; approach maintain lightweight identifiers (file paths, stored queries, web links, etc.) and use these references to dynamically load data into context at runtime using tools. Anthropic's agentic coding solution <a href=\"https://www.anthropic.com/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> uses this approach to perform complex data analysis over large databases. The model can write targeted queries, store results, and leverage Bash commands like head and tail to analyze large volumes of data without ever loading the full data objects into context. This approach mirrors human cognition: we generally don't memorize entire corpuses of information, but rather introduce external organization and indexing systems like file systems, inboxes, and bookmarks to retrieve relevant information on demand.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Beyond storage efficiency, the metadata of these references provides a mechanism to efficiently refine behavior, whether explicitly provided or intuitive. To an agent operating in a file system, the presence of a file named <code>test_utils.py</code> in a <code>tests</code> folder implies a different purpose than a file with the same name located in <code>src/core_logic/</code> Folder hierarchies, naming conventions, and timestamps all provide important signals that help both humans and agents understand how and when to utilize information.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Letting agents navigate and retrieve data autonomously also enables progressive disclosure—in other words, allows agents to incrementally discover relevant context through exploration. Each interaction yields context that informs the next decision: file sizes suggest complexity; naming conventions hint at purpose; timestamps can be a proxy for relevance. Agents can assemble understanding layer by layer, maintaining only what's necessary in working memory and leveraging note-taking strategies for additional persistence. This self-managed context window keeps the agent focused on relevant subsets rather than drowning in exhaustive but potentially irrelevant information.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Of course, there's a trade-off: runtime exploration is slower than retrieving pre-computed data. Not only that, but opinionated and thoughtful engineering is required to ensure that an LLM has the right tools and heuristics for effectively navigating its information landscape. Without proper guidance, an agent can waste context by misusing tools, chasing dead-ends, or failing to identify key information.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In certain settings, the most effective agents might employ a hybrid strategy, retrieving some data up front for speed, and pursuing further autonomous exploration at its discretion. The decision boundary for the 'right' level of autonomy depends on the task. Claude Code is an agent that employs this hybrid model: <a href=\"http://claude.md/\" rel=\"noreferrer\" target=\"_blank\">CLAUDE.md</a> files are naively dropped into context up front, while primitives like glob and grep allow it to navigate its environment and retrieve files just-in-time, effectively bypassing the issues of stale indexing and complex syntax trees.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The hybrid strategy might be better suited for contexts with less dynamic content, such as legal or finance work. As model capabilities improve, agentic design will trend towards letting intelligent models act intelligently, with progressively less human curation. Given the rapid pace of progress in the field, &quot;do the simplest thing that works&quot; will likely remain our best advice for teams building agents on top of Claude.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Context engineering for long-horizon tasks</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Long-horizon tasks require agents to maintain coherence, context, and goal-directed behavior over sequences of actions where the token count exceeds the LLM's context window. For tasks that span tens of minutes to multiple hours of continuous work, like large codebase migrations or comprehensive research projects, agents require specialized techniques to work around the context window size limitation.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Waiting for larger context windows might seem like an obvious tactic. But it's likely that for the foreseeable future, context windows of all sizes will be subject to context pollution and information relevance concerns—at least for situations where the strongest agent performance is desired. To enable agents to work effectively across extended time horizons, we've developed a few techniques that address these context pollution constraints directly: compaction, structured note-taking, and multi-agent architectures.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Compaction</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Compaction is the practice of taking a conversation nearing the context window limit, summarizing its contents, and reinitiating a new context window with the summary. Compaction typically serves as the first lever in context engineering to drive better long-term coherence. At its core, compaction distills the contents of a context window in a high-fidelity manner.</p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p>By default, Claude Code asks users for approval before running commands or modifying files. This keeps users safe, but it also means a lot of clicking &quot;approve.&quot; Over time that leads to approval fatigue, where people stop paying close attention to what they're approving.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Users have two solutions for avoiding this fatigue: a built-in sandbox where tools are isolated to prevent dangerous actions, or the <code>--dangerously-skip-permissions</code> flag that disables all permission prompts and lets Claude act freely, which is unsafe in most situations. Figure 1 lays out the tradeoff space. Sandboxing is safe but high-maintenance: each new capability needs configuring, and anything requiring network or host access breaks isolation. Bypassing permissions is zero-maintenance but offers no protection. Manual prompts sit in the middle, and in practice users accept 93% of them anyway.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Figure 1. The permission modes available in Claude Code, positioned by task autonomy and security. Dot colour indicates maintenance friction. Auto mode targets high autonomy at low maintenance cost; the dashed arrow shows security improvement over time as classifier coverage and model judgment get better.\" src=\"https://aka.doubaocdn.com/s/cIlC1wZqTO\" loading=\"lazy\" /><figcaption>Figure 1. The permission modes available in Claude Code, positioned by task autonomy and security. Dot colour indicates maintenance friction. Auto mode targets high autonomy at low maintenance cost; the dashed arrow shows security improvement over time as classifier coverage and model judgment get better.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>We keep an internal incident log focused on agentic misbehaviors. Past examples include deleting remote git branches from a misinterpreted instruction, uploading an engineer's GitHub auth token to an internal compute cluster, and attempting migrations against a production database. Each of these was the result of the model being overeager, taking initiative in a way the user didn't intend. We documented this pattern in the <a href=\"https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf\" rel=\"noreferrer\" target=\"_blank\">Claude Opus 4.6 system card</a> (§6.2.1 and §6.2.3.3).</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Auto mode is a new mode for Claude Code that delegates approvals to model-based classifiers—a middle ground between manual review and no guardrails. The goal is to catch the dangerous actions that aren't aligned with user intent, while letting the rest run without approval prompts. Get started using auto mode by following the <a href=\"http://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode\" rel=\"noreferrer\" target=\"_blank\">docs</a>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>How it works</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Auto mode uses two layers of defense: one for what Claude reads, one for what Claude does.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>At the input layer, a server-side prompt-injection probe scans tool outputs (file reads, web fetches, shell output, external tool responses) before they enter the agent's context. When content looks like an attempt to hijack behavior, the probe adds a warning to the agent's context before the result is passed along—telling the agent to treat this content as suspect and anchor on what the user actually asked for.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>At the output layer, the transcript classifier (running on Sonnet 4.6) evaluates each action against a set of decision criteria before it executes, acting as a substitute for a human approver. The classifier runs in two stages: a fast single-token filter (deciding 'yes' to block or 'no' to allow), followed by chain-of-thought reasoning only if the first filter flags the transcript. Because most actions clear the first stage, reasoning tokens are spent only where needed. The classifier sees only user messages and the agent's tool calls; we strip out Claude's own messages and tool outputs, making it reasoning-blind by design. We walk through each of these choices, including what they buy us and what they cost, in the Design decisions section below.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Figure 2: System architecture. The transcript classifier gates tool calls; the prompt-injection probe screens tool results. Subagents run the same pipeline recursively, with handoff classifiers at delegation (can deny) and at return (warns only).\" src=\"https://aka.doubaocdn.com/s/VDlg1wZqTO\" loading=\"lazy\" /><figcaption>Figure 2: System architecture. The transcript classifier gates tool calls; the prompt-injection probe screens tool results. Subagents run the same pipeline recursively, with handoff classifiers at delegation (can deny) and at return (warns only).</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Threat model</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>An agent might take a dangerous action for four reasons:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>Overeager behavior</strong>. In this case, the agent understands the user's goal, and is genuinely trying to help, but takes initiative beyond what the user would approve. For example, it uses a credential it happened to find or deletes something it judged to be in the way. This behavior can be tricky to catch, because there's no hostile reasoning. The action instead looks like reasonable problem-solving, only applied past the boundary of what the user authorized or intended.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>Honest mistakes</strong>. Here, the agent misunderstands the blast radius. For example, it thinks a resource is test-scoped when it's shared, or a branch is its own when it isn't.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>Prompt injection</strong>. Instructions planted in a file, webpage, or tool output hijack the agent, redirecting it from the user's task toward the attacker's.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>A misaligned model</strong>. Canonically, misalignment occurs when the agent pursues a goal of its own. We don't currently see this in practice, though we evaluate it carefully for every model we release.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>In all four cases, the defense is to block the action. Our classifier is tuned to overeager behavior and honest mistakes, as we have specific examples of this behavior from internal model testing, but the defense applies regardless of which threat produced the action.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The examples below are adapted from our internal incident log to illustrate what auto mode is designed to block:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Scope escalation</strong>. A user asked to &quot;clean up old branches.&quot; The agent listed remote branches, constructed a pattern match, and issued a delete. This would be blocked since the request was vague, the action irreversible and destructive, and the user may have only meant to delete local branches.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Credential exploration</strong>. An agent hit an auth error partway through a task. Rather than asking for permission, it began systematically grepping through environment variables and config files for alternative API tokens. Since these credentials could be scoped for a different task, this is blocked.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Agent-inferred parameters</strong>. A user said &quot;cancel my job.&quot; The agent queried the cluster, picked the closest match by name similarity, and tried to delete it. This is blocked since the specific target may not have been what the user intended, and could have been owned by someone else.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Sharing via external service</strong>. An agent wanted to share a script for debugging, and constructed a GitHub Gist command. This is blocked as data exfiltration since the user may consider the contents to be confidential and not appropriate to be public.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Safety-check bypass</strong>. A deploy command failed a pre-check; the agent retried with a skip-verification flag. This is blocked since it could impact shared infrastructure.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<h2>How permission decisions work</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>All of the examples above would reach the classifier, but most actions are allowed prior to that step by the standard Claude Code allow rules:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Tier 1: Built-in safe-tool allowlist and user settings.</strong> A fixed allowlist includes tools that can't modify state, including file reads, text and file-pattern search, code navigation, todo and plan-mode transitions. Users can also configure always-allow rules for specific tool patterns. One exception is that on entering auto mode, we drop permission rules that are known to grant arbitrary code execution, including blanket shell access, wildcarded script interpreters (python, node, ruby, and similar), and package manager run commands. While this is best-effort based on real-world usage, any list will inevitably be incomplete. Many users set up these blanket rules for convenience in manual-approval mode, but leaving them active would mean the classifier never sees the commands most capable of causing damage. Narrow rules (&quot;allow running code formatters&quot;) carry over, but broad interpreter escapes don't.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Tier 2: In-project file operations.</strong> File writes and edits inside the project directory are allowed without a classifier call. Routine coding (e.g. editing source files in your repo) doesn't pay classifier latency; in-project edits are reviewable via version control.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Only actions with real downside potential reach the final tier:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Tier 3: Transcript classifier.</strong> The transcript classifier sees everything else, including shell commands, web fetches, external tool integrations, subagent spawns, filesystem operations outside the project directory. Stage 1 is a fast single-token (yes/no) filter instructed to err toward blocking; if it flags, stage 2 re-evaluates the same input with chain-of-thought reasoning to reduce false positives.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>The classifier decision criteria</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>The classifier's prompt is a fixed template we ship, with three customizable slots inserted into the middle. The fixed parts do the interpretive work—how to determine what an action actually does, how to read user authorization, the classification process itself—and they're the same for everyone. The slots define your policy: what counts as trusted in your environment, what categories to block, what exceptions to carve out. Good defaults ship out of the box. You can start using auto mode immediately and extend the configuration iteratively as you work with the feature.</p>",
        "kind": "text",
        "cn": "（参见原文）"
      },
      {
        "en": "<h3>The fixed template</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p><strong>Evaluation rules tell the classifier how to look for dangerous commands</strong>. The principle is to evaluate the real-world impact of an action, rather than just the surface text of the invocation. The agent shouldn't be able to hide a dangerous operation behind a benign-looking wrapper. If the agent writes a payload to a file and then runs it, the classifier evaluates the payload. If a chain of commands is joined with &amp;&amp;, the whole chain is one action. If the agent writes a Python script assembling a shell command, the classifier evaluates the assembled command from the transcript context before allowing the script to be executed.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>User intent rules tell the classifier how to read authorization</strong>. This is a tricky part of the prompt to get right. It's also where the overeager-behavior defense lives. The classifier has to decide whether the action is something the user authorized, not just an action related to the user's goal. The classifier is deliberately conservative. The prompt establishes what is authorized; everything the agent chooses on its own is unauthorized until the user says otherwise. In this case, &quot;clean up my branches&quot; doesn't authorize a batch delete, and &quot;can we fix this?&quot; would be considered a question, not a directive.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The template includes a step-by-step classification process, in which it checks the action against block rules, then allows exceptions, followed by user intent, before ultimately making a decision.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>The customizable slots</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>The &quot;environment&quot; defines the trust boundary of which domains, cloud buckets, source-control orgs, and internal services count as &quot;inside&quot; versus &quot;external.&quot; By default, the only thing the classifier trusts is the git repo you're currently working in. Users can customize this in settings so the classifier can identify their trusted infrastructure (e.g. GitHub org, cloud buckets, or internal API). Anything else outside this boundary could be an exfiltration risk.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The default has more than twenty block rules, which fall into these groups:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Destroy or exfiltrate.</strong> Cause irreversible loss by force-pushing over history, mass-deleting cloud storage, or sending internal data externally.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Degrade security posture.</strong> Make the system harder to monitor or defend by disabling logging, installing persistence like SSH keys or cronjobs, or modifying the agent's own permission config.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Cross trust boundaries.</strong> Act on things the agent has no basis to trust, like running code cloned from external repos, scanning credential stores for usable tokens, or sending data to a service the user never specified.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Bypass review or affect others.</strong> Skip safeguards on shared infrastructure by pushing directly to main, running production deploys, or modifying shared resources or jobs the agent didn't create.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>Allow exceptions are mandatory carve-outs where a block rule technically matches but the action is benign. The default is narrow, including installing packages already declared in the repo's manifest, standard credential flows, and pushing to the session's working branch.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>All three slots ship with conservative defaults, so you can start without writing anything. Run <code>claude auto-mode defaults</code> to see the full list. If you customize these, we recommend editing this baseline, rather than starting from scratch.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Results</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>We evaluated the full pipeline on three different datasets. Two datasets measure the tradeoff auto mode is making: false positive rate on real traffic (how much friction remains) and recall on real overeager actions (the risk that still remains when running auto mode). The third measures recall on synthetic data exfiltration tasks.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Real internal traffic</strong> (n = 10,000). Actual Claude Code tool calls from Anthropic employees.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Real overeager actions</strong> (n = 52). Curated from sessions where an employee denied the action or it was flagged post-hoc. Small because it requires Claude attempting something dangerous in a real session, captured and labeled.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Synthetic data exfiltration</strong> (n = 1,000). Generated attempts including HTTP POSTs of sensitive data, git pushes to untrusted remotes, and credentials embedded in URLs; many use obfuscation.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>We report two metrics. False-negative rate (FNR) is the fraction of dangerous actions the classifier lets through; false positive rate (FPR) is the fraction of benign actions it blocks. A perfect classifier would score zero on both. In practice they trade off against each other. Stage 1 is fast and cheap, tuned for low FNR at the cost of high FPR. Stage 2 is more expensive and runs only on what stage 1 flagged. It cleans up the false positives but lets a few more dangerous actions through.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>| | <strong>Real traffic</strong> n=10,000 | <strong>Real overeager</strong> n=52 | <strong>Synthetic exfil</strong> n=1,000 | |---|---|---|---| | Stage 1 (fast filter) | 8.5% FPR | 6.6% FNR | 1.8% FNR | | Stage 1-&gt;Stage 2 (full pipeline) | 0.4% FPR | 17% FNR | 5.7% FNR |</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Table 1. Classifier performance by stage. Stage 2 runs only on actions stage 1 flags, so the second row reflects the deployed pipeline end to end: FPR drops from 8.5% to 0.4%, at the cost of some recall.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The 17% false-negative rate on real overeager actions is the honest number. The agent was trying to solve the user's problem and tried to execute a dangerous command past what was authorized.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In the majority of misses we examined, the classifier correctly identifies the danger. It sees, for example, the force-push, the deletion, and the infrastructure change. What it gets wrong is whether a real consent signal in the session actually covers <em>this</em> action. &quot;Clean up the PR&quot; was said by the user, but it doesn't name force-pushing. A similar action was approved earlier, but one approval isn't a pattern. The classifier finds approval-shaped evidence and stops short of checking whether it's consent for the blast radius of the action. We've tried prompt-engineering around this and haven't found a fix that doesn't cost more than it gains.</p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p>In <a href=\"https://www.claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a>, Claude writes, tests, and debugs code alongside you, navigating your codebase, editing multiple files, and running commands to verify its work. Giving Claude this much access to your codebase and files can introduce risks, especially in the case of prompt injection.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To help address this, we've introduced two new features in Claude Code built on top of sandboxing, both of which are designed to provide a more secure place for developers to work, while also allowing Claude to run more autonomously and with fewer permission prompts. In our internal usage, we've found that sandboxing safely reduces permission prompts by 84%. By defining set boundaries within which Claude can work freely, they increase security and agency.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Keeping users secure on Claude Code</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Claude Code runs on a permission-based model: by default, it's read-only, which means it asks for permission before making modifications or running any commands. There are some exceptions to this: we auto-allow safe commands like echo or cat, but most operations still need explicit approval.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Constantly clicking &quot;approve&quot; slows down development cycles and can lead to 'approval fatigue', where users might not pay close attention to what they're approving, and in turn making development less safe.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To address this, we launched sandboxing for Claude Code.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Sandboxing: a safer and more autonomous approach</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Sandboxing creates pre-defined boundaries within which Claude can work more freely, instead of asking for permission for each action. With sandboxing enabled, you get drastically fewer permission prompts and increased safety.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Our approach to sandboxing is built on top of operating system-level features to enable two boundaries:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>Filesystem isolation</strong>, which ensures that Claude can only access or modify specific directories. This is particularly important in preventing a prompt-injected Claude from modifying sensitive system files.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>Network isolation</strong>, which ensures that Claude can only connect to approved servers. This prevents a prompt-injected Claude from leaking sensitive information or downloading malware.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>It is worth noting that effective sandboxing requires <em>both</em> filesystem and network isolation. Without network isolation, a compromised agent could exfiltrate sensitive files like SSH keys; without filesystem isolation, a compromised agent could easily escape the sandbox and gain network access. It's by using both techniques that we can provide a safer and faster agentic experience for Claude Code users.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Two new sandboxing features in Claude Code</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<h4>Sandboxed bash tool: safe bash execution without permission prompts</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>We're introducing <a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">a new sandbox runtime</a>, available in beta as a research preview, that lets you define exactly which directories and network hosts your agent can access, without the overhead of spinning up and managing a container. This can be used to sandbox arbitrary processes, agents and MCP servers. It is also available as <a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">an open source research preview</a>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In Claude Code, we use this runtime to sandbox the bash tool, which allows Claude to run commands within the defined limits you set. Inside the safe sandbox, Claude can run more autonomously and safely execute commands without permission prompts. If Claude tries to access something <em>outside</em> of the sandbox, you'll be notified immediately, and can choose whether or not to allow it.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We've built this on top of OS level primitives such as <a href=\"https://github.com/containers/bubblewrap\" rel=\"noreferrer\" target=\"_blank\">Linux bubblewrap</a> and MacOS seatbelt to enforce these restrictions at the OS level. They cover not just Claude Code's direct interactions, but also any scripts, programs, or subprocesses that are spawned by the command.As described above, this sandbox enforces both:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>Filesystem isolation,</strong> by allowing read and write access to the current working directory, but blocking the modification of any files outside of it.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>Network isolation,</strong> by only allowing internet access through a unix domain socket connected to a proxy server running outside the sandbox. This proxy server enforces restrictions on the domains that a process can connect to, and handles user confirmation for newly requested domains. And if you'd like further-increased security, we also support customizing this proxy to enforce arbitrary rules on outgoing traffic.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>Both components are configurable: you can easily choose to allow or disallow specific file paths or domains.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Claude Code's sandboxing architecture isolates code execution with filesystem and network controls, automatically allowing safe operations, blocking malicious ones, and asking permission only when needed.\" src=\"https://aka.doubaocdn.com/s/7kPg1wZqTO\" loading=\"lazy\" /><figcaption>Claude Code's sandboxing architecture isolates code execution with filesystem and network controls, automatically allowing safe operations, blocking malicious ones, and asking permission only when needed.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Sandboxing ensures that even a successful prompt injection is fully isolated, and cannot impact overall user security. This way, a compromised Claude Code can't steal your SSH keys, or phone home to an attacker's server.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To get started with this feature, run /sandbox in Claude Code and check out <a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">more technical details</a> about our security model.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To make it easier for other teams to build safer agents, we have <a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">open sourced</a> this feature. We believe that others should consider adopting this technology for their own agents in order to enhance the security posture of their agents.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h4>Claude Code on the web: running Claude Code securely in the cloud</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Today, we're also releasing <a href=\"https://docs.claude.com/en/docs/claude-code/claude-code-on-the-web\" rel=\"noreferrer\" target=\"_blank\">Claude Code on the web</a> enabling users to run Claude Code in an isolated sandbox in the cloud. Claude Code on the web executes each Claude Code session in an isolated sandbox where it has full access to its server in a safe and secure way. We've designed this sandbox to ensure that sensitive credentials (such as git credentials or signing keys) are never inside the sandbox with Claude Code. This way, even if the code running in the sandbox is compromised, the user is kept safe from further harm.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Claude Code on the web uses a custom proxy service that transparently handles all git interactions. Inside the sandbox, the git client authenticates to this service with a custom-built scoped credential. The proxy verifies this credential and the contents of the git interaction (e.g. ensuring it is only pushing to the configured branch), then attaches the right authentication token before sending the request to GitHub.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Claude Code's Git integration routes commands through a secure proxy that validates authentication tokens, branch names, and repository destinations—allowing safe version control workflows while preventing unauthorized pushes.\" src=\"https://aka.doubaocdn.com/s/VSxt1wZqTO\" loading=\"lazy\" /><figcaption>Claude Code's Git integration routes commands through a secure proxy that validates authentication tokens, branch names, and repository destinations—allowing safe version control workflows while preventing unauthorized pushes.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Getting started</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Our new sandboxed bash tool and Claude Code on the web offer substantial improvements in both security and productivity for developers using Claude for their engineering work.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To get started with these tools:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li>Run <code>/sandbox</code> in Claude and check out <a href=\"https://docs.claude.com/en/docs/claude-code/sandboxing\" rel=\"noreferrer\" target=\"_blank\">our docs</a> on how to configure this sandbox.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li>Go to <a href=\"http://claude.ai/redirect/website.v1.a813babd-04bf-434c-bb7f-49aded8c6b65/code\" rel=\"noreferrer\" target=\"_blank\">claude.com/code</a> to try out Claude Code on the web.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>Or, if you're building your own agents, check out our <a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">open-sourced sandboxing code</a>, and consider integrating it into your work. We look forward to seeing what you build.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To learn more about Claude Code on the web, check out our <a href=\"https://www.anthropic.com/news/claude-code-on-the-web\" rel=\"noreferrer\" target=\"_blank\">launch blog post</a>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Acknowledgements</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Article written by David Dworken and Oliver Weller-Davies, with contributions from Meaghan Choi, Catherine Wu, Molly Vorwerck, Alex Isken, Kier Bradwell, and Kevin Garcia</p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p>As AI agents become more capable, developers are increasingly asking them to take on complex tasks requiring work that spans hours, or even days. However, getting agents to make consistent progress across multiple context windows remains an open problem.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The core challenge of long-running agents is that they must work in discrete sessions, and each new session begins with no memory of what came before. Imagine a software project staffed by engineers working in shifts, where each new engineer arrives with no memory of what happened on the previous shift. Because context windows are limited, and because most complex projects cannot be completed within a single window, agents need a way to bridge the gap between coding sessions.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We developed a two-fold solution to enable the <a href=\"https://platform.claude.com/docs/en/agent-sdk/overview\" rel=\"noreferrer\" target=\"_blank\">Claude Agent SDK</a> to work effectively across many context windows: an <strong>initializer agent</strong> that sets up the environment on the first run, and a <strong>coding agent</strong> that is tasked with making incremental progress in every session, while leaving clear artifacts for the next session. You can find code examples in the accompanying <a href=\"https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding\" rel=\"noreferrer\" target=\"_blank\">quickstart.</a></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>The long-running agent problem</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>The Claude Agent SDK is a powerful, general-purpose agent harness adept at coding, as well as other tasks that require the model to use tools to gather context, plan, and execute. It has context management capabilities such as compaction, which enables an agent to work on a task without exhausting the context window. Theoretically, given this setup, it should be possible for an agent to continue to do useful work for an arbitrarily long time.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>However, compaction isn't sufficient. Out of the box, even a frontier coding model like Opus 4.5 running on the Claude Agent SDK in a loop across multiple context windows will fall short of building a production-quality web app if it's only given a high-level prompt, such as &quot;build a clone of <a href=\"http://claude.ai/redirect/website.v1.5561e94a-5abc-4cd2-824b-2557f283a367\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a>.&quot;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Claude's failures manifested in two patterns. First, the agent tended to try to do too much at once—essentially to attempt to one-shot the app. Often, this led to the model running out of context in the middle of its implementation, leaving the next session to start with a feature half-implemented and undocumented. The agent would then have to guess at what had happened, and spend substantial time trying to get the basic app working again. This happens even with compaction, which doesn't always pass perfectly clear instructions to the next agent.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>A second failure mode would often occur later in a project. After some features had already been built, a later agent instance would look around, see that progress had been made, and declare the job done.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This decomposes the problem into two parts. First, we need to set up an initial environment that lays the foundation for <em>all</em> the features that a given prompt requires, which sets up the agent to work step-by-step and feature-by-feature. Second, we should prompt each agent to make incremental progress towards its goal while also leaving the environment in a clean state at the end of a session. By &quot;clean state&quot; we mean the kind of code that would be appropriate for merging to a main branch: there are no major bugs, the code is orderly and well-documented, and in general, a developer could easily begin work on a new feature without first having to clean up an unrelated mess.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>When experimenting internally, we addressed these problems using a two-part solution:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li>Initializer agent: The very first agent session uses a specialized prompt that asks the model to set up the initial environment: an <code>init.sh</code> script, a claude-progress.txt file that keeps a log of what agents have done, and an initial git commit that shows what files were added.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li>Coding agent: Every subsequent session asks the model to make incremental progress, then leave structured updates.&lt;sup&gt;1&lt;/sup&gt;</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>The key insight here was finding a way for agents to quickly understand the state of work when starting with a fresh context window, which is accomplished with the claude-progress.txt file alongside the git history. Inspiration for these practices came from knowing what effective software engineers do every day.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Environment management</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>In the updated <a href=\"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices#multi-context-window-workflows\" rel=\"noreferrer\" target=\"_blank\">Claude 4 prompting guide</a>, we shared some best practices for multi-context window workflows, including a harness structure that uses &quot;a different prompt for the very first context window.&quot; This &quot;different prompt&quot; requests that the initializer agent set up the environment with all the necessary context that future coding agents will need to work effectively. Here, we provide a deeper dive on some of the key components of such an environment.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Feature list</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>To address the problem of the agent one-shotting an app or prematurely considering the project complete, we prompted the initializer agent to write a comprehensive file of feature requirements expanding on the user's initial prompt. In the <a href=\"http://claude.ai/redirect/website.v1.5561e94a-5abc-4cd2-824b-2557f283a367\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a> clone example, this meant over 200 features, such as &quot;a user can open a new chat, type in a query, press enter, and see an AI response.&quot; These features were all initially marked as &quot;failing&quot; so that later coding agents would have a clear outline of what full functionality looked like.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>{\n  &quot;category&quot;: &quot;functional&quot;,\n  &quot;description&quot;: &quot;New chat button creates a fresh conversation&quot;,\n  &quot;steps&quot;: [\n    &quot;Navigate to main interface&quot;,\n    &quot;Click the 'New Chat' button&quot;,\n    &quot;Verify a new conversation is created&quot;,\n    &quot;Check that chat area shows welcome state&quot;,\n    &quot;Verify conversation appears in sidebar&quot;\n  ],\n  &quot;passes&quot;: false\n}</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>We prompt coding agents to edit this file only by changing the status of a passes field, and we use strongly-worded instructions like &quot;It is unacceptable to remove or edit tests because this could lead to missing or buggy functionality.&quot; After some experimentation, we landed on using JSON for this, as the model is less likely to inappropriately change or overwrite JSON files compared to Markdown files.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Incremental progress</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Given this initial environment scaffolding, the next iteration of the coding agent was then asked to work on only one feature at a time. This incremental approach turned out to be critical to addressing the agent's tendency to do too much at once.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Once working incrementally, it's still essential that the model leaves the environment in a clean state after making a code change. In our experiments, we found that the best way to elicit this behavior was to ask the model to commit its progress to git with descriptive commit messages and to write summaries of its progress in a progress file. This allowed the model to use git to revert bad code changes and recover working states of the code base.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>These approaches also increased efficiency, as they eliminated the need for an agent to have to guess at what had happened and spend its time trying to get the basic app working again.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Testing</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>One final major failure mode that we observed was Claude's tendency to mark a feature as complete without proper testing. Absent explicit prompting, Claude tended to make code changes, and even do testing with unit tests or <code>curl</code> commands against a development server, but would fail recognize that the feature didn't work end-to-end.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In the case of building a web app, Claude mostly did well at verifying features end-to-end once explicitly prompted to use browser automation tools and do all testing as a human user would.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Screenshots taken by Claude through the Puppeteer MCP server as it tested the claude.ai clone.\" src=\"https://aka.doubaocdn.com/s/cGZB1wZqTb\" loading=\"lazy\" /><figcaption>Screenshots taken by Claude through the Puppeteer MCP server as it tested the claude.ai clone.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Providing Claude with these kinds of testing tools dramatically improved performance, as the agent was able to identify and fix bugs that weren't obvious from the code alone.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Some issues remain, like limitations to Claude's vision and to browser automation tools making it difficult to identify every kind of bug. For example, Claude can't see browser-native alert modals through the Puppeteer MCP, and features relying on these modals tended to be buggier as a result.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Getting up to speed</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>With all of the above in place, every coding agent is prompted to run through a series of steps to get its bearings, some quite basic but still helpful:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li><em>Run <code>pwd</code> to see the directory you're working in. You'll only be able to edit files in this directory.</em></li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li><em>Read the git logs and progress files to get up to speed on what was recently worked on.</em></li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li><em>Read the features list file and choose the highest-priority feature that's not yet done to work on.</em></li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>This approach saves Claude some tokens in every session since it doesn't have to figure out how to test the code. It also helps to ask the initializer agent to write an init.sh script that can run the development server, and then run through a basic end-to-end test before implementing a new feature.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In the case of the claude.ai clone, this meant that the agent always started the local development server and used the Puppeteer MCP to start a new chat, send a message, and receive a response. This ensured that Claude could quickly identify if the app had been left in a broken state, and immediately fix any existing bugs. If the agent had instead started implementing a new feature, it would likely make the problem worse.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Given all this, a typical session starts off with the following assistant messages:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>[Assistant] I'll start by getting my bearings and understanding the current state of the project.\n[Tool Use] &lt;bash - pwd&gt;\n[Tool Use] &lt;read - claude-progress.txt&gt;\n[Tool Use] &lt;read - feature_list.json&gt;\n[Assistant] Let me check the git log to see recent work.\n[Tool Use] &lt;bash - git log --oneline -20&gt;\n[Assistant] Now let me check if there's an init.sh script to restart the servers.\n&lt;Starts the development server&gt;\n[Assistant] Excellent! Now let me navigate to the application and verify that some fundamental features are still working.\n&lt;Tests basic functionality&gt;\n[Assistant] Based on my verification testing, I can see that the fundamental functionality is working well. The core chat features, theme switching, conversation loading, and error handling are all functioning correctly. Now let me review the tests.json file more comprehensively to understand what needs to be implemented next.\n&lt;Starts work on a new feature&gt;</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>Agent failure modes and solutions</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>| <strong>Problem</strong> | <strong>Initializer Agent Behavior</strong> | <strong>Coding Agent Behavior</strong> | |---|---|---| | Claude declares victory on the entire project too early. | Set up a feature list file: based on the input spec, set up a structured JSON file with a list of end-to-end feature descriptions. | Read the feature list file at the beginning of a session. Choose a single feature to start working on. | | Claude leaves the environment in a state with bugs or undocumented progress. | An initial git repo and progress notes file is written. | Start the session by reading the progress notes file and git commit logs, and run a basic test on the development server to catch any undocumented bugs. End the session by writing a git commit and progress update. | | Claude marks features as done prematurely. | Set up a feature list file. | Self-verify all features. Only mark features as &quot;passing&quot; after careful testing. | | Claude has to spend time figuring out how to run the app. | Write an <code>init.sh</code> script that can run the development server. | Start the session by reading <code>init.sh</code>. |</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Summarizing four common failure modes and solutions in long-running AI agents.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Future work</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>This research demonstrates one possible set of solutions in a long-running agent harness to enable the model to make incremental progress across many context windows. However, there remain open questions.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Most notably, it's still unclear whether a single, general-purpose coding agent performs best across contexts, or if better performance can be achieved through a multi-agent architecture. It seems reasonable that specialized agents like a testing agent, a quality assurance agent, or a code cleanup agent, could do an even better job at sub-tasks across the software development lifecycle.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Additionally, this demo is optimized for full-stack web app development. A future direction is to generalize these findings to other fields. It's likely that some or all of these lessons can be applied to the types of long-running agentic tasks required in, for example, scientific research or financial modeling.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Acknowledgements</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Written by Justin Young. Special thanks to David Hershey, Prithvi Rajasakeran, Jeremy Hadfield, Naia Bouscal, Michael Tingley, Jesse Mu, Jake Eaton, Marius Buleandara, Maggie Vo, Pedram Navid, Nadine Yasser, and Alex Notov for their contributions.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This work reflects the collective efforts of several teams across Anthropic who made it possible for Claude to safely do long-horizon autonomous software engineering, especially the code RL &amp; Claude Code teams. Interested candidates who would like to contribute are welcome to apply at <a href=\"http://anthropic.com/careers\" rel=\"noreferrer\" target=\"_blank\">anthropic.com/careers</a>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Footnotes</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<ol><li>We refer to these as separate agents in this context only because they have different initial user prompts. The system prompt, set of tools, and overall agent harness was otherwise identical.</li></ol>",
        "kind": "list",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p><em>Get started with Claude Managed Agents by following our <a href=\"https://platform.claude.com/docs/en/managed-agents/overview\" rel=\"noreferrer\" target=\"_blank\">docs</a>.</em></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>A running topic on the Engineering Blog is how to <a href=\"https://www.anthropic.com/engineering/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">build effective agents</a> and <a href=\"https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\" rel=\"noreferrer\" target=\"_blank\">design harnesses</a> for <a href=\"https://www.anthropic.com/engineering/harness-design-long-running-apps\" rel=\"noreferrer\" target=\"_blank\">long-running work</a>. A common thread across this work is that harnesses encode assumptions about what Claude can't do on its own. However, those assumptions need to be frequently questioned because they can <a href=\"http://www.incompleteideas.net/IncIdeas/BitterLesson.html\" rel=\"noreferrer\" target=\"_blank\">go stale</a> as models improve.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>As just one example, in prior work <a href=\"https://www.anthropic.com/engineering/harness-design-long-running-apps\" rel=\"noreferrer\" target=\"_blank\">we found</a> that Claude Sonnet 4.5 would wrap up tasks prematurely as it sensed its context limit approaching—a behavior sometimes called &quot;context anxiety.&quot; We addressed this by adding context resets to the harness. But when we used the same harness on Claude Opus 4.5, we found that the behavior was gone. The resets had become dead weight.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We expect harnesses to continue evolving. So we built Managed Agents: a hosted service in the Claude Platform that runs long-horizon agents on your behalf through a small set of interfaces meant to outlast any particular implementation—including the ones we run today.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Building Managed Agents meant solving an old problem in computing: how to design a system for &quot;<a href=\"http://www.catb.org/esr/writings/taoup/html/ch03s01.html\" rel=\"noreferrer\" target=\"_blank\">programs as yet unthought of</a>.&quot; Decades ago, operating systems solved this problem by virtualizing hardware into abstractions—<em>process, file</em>—general enough for programs that didn't exist yet. The abstractions outlasted the hardware. The <code>read()</code> command is agnostic as to whether it's accessing a disk pack from the 1970s or a modern SSD. The abstractions on top stayed stable while the implementations underneath changed freely.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Managed Agents follow the same pattern. We virtualized the components of an agent: a session (the append-only log of everything that happened), a harness (the loop that calls Claude and routes Claude's tool calls to the relevant infrastructure), and a sandbox (an execution environment where Claude can run code and edit files). This allows the implementation of each to be swapped without disturbing the others. We're opinionated about the shape of these interfaces, not about what runs behind them.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Managed Agents architecture\" src=\"https://aka.doubaocdn.com/s/vjUB1wZqTc\" loading=\"lazy\" /><figcaption>Managed Agents architecture</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Don't adopt a pet</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>We started by placing all agent components into a single container, which meant the session, agent harness, and sandbox all shared an environment. There were benefits to this approach, including that file edits are direct syscalls, and there were no service boundaries to design.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>But by coupling everything into one container, we ran into an old infrastructure problem: we'd adopted a <a href=\"https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/\" rel=\"noreferrer\" target=\"_blank\">*pet*</a>. In the pets-vs-cattle analogy, a pet is a named, hand-tended individual you can't afford to lose, while cattle are interchangeable. In our case, the server became that pet; if a container failed, the session was lost. If a container was unresponsive, we had to nurse it back to health.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Nursing containers meant debugging unresponsive stuck sessions. Our only window in was the WebSocket event stream, but that couldn't tell us <em>where</em> failures arose, which meant that a bug in the harness, a packet drop in the event stream, or a container going offline all presented the same. To figure out what went wrong, an engineer had to open a shell inside the container, but because that container often also held user data, that approach essentially meant we lacked the ability to debug.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>A second issue was that the harness assumed that whatever Claude worked on lived in the container with it. When customers asked us to connect Claude to their virtual private cloud, they had to either peer their network with ours, or run our harness in their own environment. An assumption baked into the harness became a problem when we wanted to connect it to different infrastructure.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Decouple the brain from the hands</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>The solution we arrived at was to decouple what we thought of as the &quot;brain&quot; (Claude and its harness) from both the &quot;hands&quot; (sandboxes and tools that perform actions) and the &quot;session&quot; (the log of session events). Each became an interface that made few assumptions about the others, and each could fail or be replaced independently.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>The harness leaves the container.</strong> Decoupling the brain from the hands meant the harness no longer lived inside the container. It called the container the way it called any other tool: <code>execute(name, input) -&gt; string</code>. The container became cattle. If the container died, the harness caught the failure as a tool-call error and passed it back to Claude. If Claude decided to retry, a new container could be reinitialized with a standard recipe: <code>provision({resources})</code>. We no longer had to nurse failed containers back to health.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Recovering from harness failure.</strong> The harness also became cattle. Because the session log sits outside the harness, nothing in the harness needs to survive a crash. When one fails, a new one can be rebooted with <code>wake(sessionId)</code>, use <code>getSession(id)</code> to get back the event log, and resume from the last event. During the agent loop, the harness writes to the session with <code>emitEvent(id, event)</code> in order to keep a durable record of events.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Decoupled architecture\" src=\"https://aka.doubaocdn.com/s/3l7O1wZqTc\" loading=\"lazy\" /><figcaption>Decoupled architecture</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p><strong>The security boundary.</strong> In the coupled design, any untrusted code that Claude generated was run in the same container as credentials—so a prompt injection only had to convince Claude to read its own environment. Once an attacker has those tokens, they can spawn fresh, unrestricted sessions and delegate work to them. Narrow scoping is an obvious mitigation, but this encodes an assumption about what Claude can't do with a limited token—and Claude is getting increasingly smart. The structural fix was to make sure the tokens are never reachable from the sandbox where Claude's generated code runs.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We used two patterns to ensure this. Auth can be bundled with a resource or held in a vault outside the sandbox. For Git, we use each repository's access token to clone the repo during sandbox initialization and wire it into the local git remote. Git <code>push</code> and <code>pull</code> work from inside the sandbox without the agent ever handling the token itself. For custom tools, we support MCP and store OAuth tokens in a secure vault. Claude calls MCP tools via a dedicated proxy; this proxy takes in a token associated with the session. The proxy can then fetch the corresponding credentials from the vault and make the call to the external service. The harness is never made aware of any credentials.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>The session is not Claude's context window</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Long-horizon tasks often exceed the length of Claude's context window, and the standard ways to address this all involve irreversible decisions about what to keep. We've explored these techniques in <a href=\"https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents\" rel=\"noreferrer\" target=\"_blank\">prior work</a> on context engineering. For example, compaction lets Claude save a summary of its context window and the memory tool lets Claude write context to files, enabling learning across sessions. This can be paired with context trimming, which selectively removes tokens such as old tool results or thinking blocks.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>But irreversible decisions to selectively retain or discard context can lead to failures. It is difficult to know which tokens the future turns will need. If messages are transformed by a compaction step, the harness removes compacted messages from Claude's context window, and these are recoverable only if they are stored. Prior work <a href=\"https://arxiv.org/pdf/2512.24601\" rel=\"noreferrer\" target=\"_blank\">has explored</a> ways to address this by storing context as an object that lives <em>outside</em> the context window. For example, context can be an object in a REPL that the LLM programmatically accesses by writing code to filter or slice it.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Session as context object\" src=\"https://aka.doubaocdn.com/s/oG8V1wZqTc\" loading=\"lazy\" /><figcaption>Session as context object</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>In Managed Agents, the session provides this same benefit, serving as a context object that lives outside Claude's context window. But rather than be stored within the sandbox or REPL, context is durably stored in the session log. The interface, <code>getEvents(),</code> allows the brain to interrogate context by selecting positional slices of the event stream. The interface can be used flexibly, allowing the brain to pick up from wherever it last stopped reading, rewinding a few events before a specific moment to see the lead up, or rereading context before a specific action.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Any fetched events can also be transformed in the harness before being passed to Claude's context window. These transformations can be whatever the harness encodes, including context organization to achieve a high prompt cache hit rate and context engineering. We separated the concerns of recoverable context storage in the session and arbitrary context management in the harness because we can't predict what specific context engineering will be required in future models. The interfaces push that context management into the harness, and only guarantee that the session is durable and available for interrogation.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Many brains, many hands</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p><strong>Many brains.</strong> Decoupling the brain from the hands solved one of our earliest customer complaints. When teams wanted Claude to work against resources in their own VPC, the only path was to peer their network with ours, because the container holding the harness assumed every resource sat next to it. Once the harness was no longer in the container, that assumption went away. The same change had a performance payoff. When we initially put the brain in a container, it meant that many brains required as many containers. For each brain, no inference could happen until that container was provisioned; every session paid the full container setup cost up front. Every session, even ones that would never touch the sandbox, had to clone the repo, boot the process, fetch pending events from our servers.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>That dead time is expressed in time-to-first-token (TTFT), which measures how long a session waits between accepting work and producing its first response token. TTFT is the latency the user most acutely <em>feels</em>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Decoupling the brain from the hands means that containers are provisioned by the brain via a tool call <code>(execute(name, input) -&gt; string)</code> only if they are needed. So a session that didn't need a container right away didn't wait for one. Inference could start as soon as the orchestration layer pulled pending events from the session log. Using this architecture, our p50 TTFT dropped roughly 60% and p95 dropped over 90%. Scaling to many brains just meant starting many stateless harnesses, and connecting them to hands only if needed.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Many hands.</strong> We also wanted the ability to connect each brain to many hands. In practice, this means Claude must reason about many execution environments and decide where to send work—a harder cognitive task than operating in a single shell. We started with the brain in a single container because earlier models weren't capable of this. As intelligence scaled, the single container became the limitation instead: when that container failed, we lost state for every hand that the brain was reaching into.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Decoupling the brain from the hands makes each hand a tool, <code>execute(name, input) -&gt; string</code>: a name and input go in, and a string is returned. That interface supports any custom tool, any MCP server, and our own tools. The harness doesn't know whether the sandbox is a container, a phone, or a Pokemon emulator. And because no hand is coupled to any brain, brains can pass hands to one another.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Many brains, many hands\" src=\"https://aka.doubaocdn.com/s/OonN1wZqTc\" loading=\"lazy\" /><figcaption>Many brains, many hands</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Conclusion</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>The challenge we faced is an old one: how to design a system for &quot;programs as yet unthought of.&quot; Operating systems have lasted decades by virtualizing the hardware into abstractions general enough for programs that didn't exist yet. With Managed Agents, we aimed to design a system that accommodates future harnesses, sandboxes, or other components around Claude.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Managed Agents is a meta-harness in the same spirit, unopinionated about the <em>specific</em> harness that Claude will need in the future. Rather, it is a system with general interfaces that allow many different harnesses. For example, Claude Code is an excellent harness that we use widely across tasks. We've also shown that task-specific agent harnesses excel in narrow domains. Managed Agents can accommodate any of these, matching Claude's intelligence over time.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Meta-harness design means being opinionated about the interfaces around Claude: we expect that Claude will need the ability to manipulate state (the session) and perform computation (the sandbox). We also expect that Claude will require the ability to scale to many brains and many hands. We designed the interfaces so that these can be run reliably and securely over long time horizons. But we make no assumptions about the number or location of brains or hands that Claude will need.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Acknowledgements</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Written by Lance Martin, Gabe Cemaj, and Michael Cohen. Thanks to Nodir Turakulov and Jeremy Fox for helpful conversations on these topics. Special thanks to the Agents API team and Jake Eaton for their contributions.</p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p>Twelve months ago, we'd have rejected out of hand the idea of granting Claude access sufficient to take down an internal Anthropic service. Today that level of access is routine, and Anthropic developers are more productive for it. The risk of these deployments has two components: how likely a failure is, and how much damage one could do. Progress on safeguards and model training has steadily driven down the first; the second—the theoretical blast radius—only grows as capabilities and access expand. Yet as agents become capable of doing work that once required a person or even a team, the cost of <em>not</em> deploying grows large enough that the risk-reward calculation tips heavily toward adoption, as long as products can be made safe. The engineering question becomes how to cap the blast radius.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"When bounds can be placed on the relative damage of an autonomous agent—such as through control over its environment—high-utility capabilities can motivate deployment. Claude Mythos Preview is an example of a model whose blast radius was deemed too high to ship in April 2026. However, we expect broader release of models with similar levels of capability to become appropriate as defenders harden critical systems and safeguards mature—even though some risk will always remain. Model capability is an important factor in the total risk of an agent's deployment.\" src=\"https://aka.doubaocdn.com/s/wsSB1wZqTc\" loading=\"lazy\" /><figcaption>When bounds can be placed on the relative damage of an autonomous agent—such as through control over its environment—high-utility capabilities can motivate deployment. Claude Mythos Preview is an example of a model whose blast radius was deemed too high to ship in April 2026. However, we expect broader release of models with similar levels of capability to become appropriate as defenders harden critical systems and safeguards mature—even though some risk will always remain. Model capability is an important factor in the total risk of an agent's deployment.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>There are broadly two ways to do this.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The first is to supervise the agent's behavior via a human-in-the-loop. Claude Code previously protected against agents taking unintended actions by asking users for permission at each turn. Theoretically that works, but we've found the approach to be fallible. Our telemetry showed users approved roughly 93% of permission prompts. The more approvals a user sees, the less attention they pay to each, becoming over time much less diligent in their supervision. We recently built Claude Code auto mode, which <a href=\"https://www.anthropic.com/engineering/claude-code-auto-mode\" rel=\"noreferrer\" target=\"_blank\">automates safer approvals</a> in order to reduce this approval fatigue. Still, vulnerabilities remain—any probabilistic defense has a non-zero miss rate.&lt;sup&gt;1&lt;/sup&gt;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The second approach to capping the blast radius—and the focus of much of this post—is containment. Rather than supervising what the agent does, we supervise what it's <em>able</em> to do by enforcing access boundaries through, for example, sandboxes, virtual machines, and egress controls. This is where Anthropic engineering has devoted the most effort, and also where many of the most surprising security failures have occurred.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Over the past two years, we've shipped three primary agentic products: <a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a>, Claude Code, and Claude Cowork. Each serves a different audience, requiring a different containment architecture. This article shares what's held up, what's broken, and what we've learned about agent security along the way.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Three types of risk, three components of defense</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Security risks to agents fall into one of three categories:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>User misuse:</strong> A user—either maliciously or through carelessness—directs the agent to do something harmful. This includes everything from asking the agent to bypass a check they find annoying, to running a destructive command they don't understand, to specifying intentional harm.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Model misbehavior:</strong> The agent takes a harmful action no one asked for. As our models have improved, they have become more aligned on most behavior evaluations, but this doesn't mean risk necessarily shrinks. Less capable models are more likely to misread a situation and make obvious errors. More capable models make fewer mistakes, but they're also better at finding unexpected paths to a goal, often by routing around restrictions nobody thought to write down.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>At Anthropic, we've seen Claude models <a href=\"https://red.anthropic.com/2026/mythos-preview/\" rel=\"noreferrer\" target=\"_blank\">&quot;helpfully&quot; escape a sandbox</a> in order to complete a task, examine git history to <a href=\"https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf\" rel=\"noreferrer\" target=\"_blank\">find answers to a coding test</a>, and spontaneously identify the benchmark it was being run on in order to <a href=\"https://www.anthropic.com/engineering/eval-awareness-browsecomp\" rel=\"noreferrer\" target=\"_blank\">decrypt its answer key</a>. Each model brings a new set of capabilities that are sometimes put to work in unexpected ways.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>External attackers:</strong> The agent is attacked through external vectors such as tools, files, or network access. This category includes both prompt injection and conventional attacks on the agent's runtime, orchestration layer, or proxy.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>When building containment and defense systems, we apply defenses to three main components:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>The environment in which the agent runs.</strong> We constrain where and how an agent can act with process sandboxes, VMs, filesystem boundaries, and egress controls. The goal is to set a hard boundary on what an agent can reach. For example, if credentials never enter the sandbox, they can't be exfiltrated, regardless of whether the cause is a user, a model finding a &quot;creative&quot; path, or an attacker.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>A tight perimeter also means you can relax oversight. Claude Code's <a href=\"https://code.claude.com/docs/en/devcontainer\" rel=\"noreferrer\" target=\"_blank\">reference devcontainer</a> exists precisely so that the agent can run unattended, without per-action approvals.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>The model the agent consults.</strong> The mechanisms here include system prompts, classifiers, probes, and training modifications. Because models are probabilistic, these shape only what the agent <em>tends</em> to do, not what it is theoretically capable of doing.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>These defenses are strong. On Gray Swan's Agent Red Teaming benchmark, which tests susceptibility to prompt injection, <a href=\"https://cdn.sanity.io/files/4zrzovbb/website/037f06850df7fbe871e206dad004c3db5fd50340.pdf\" rel=\"noreferrer\" target=\"_blank\">Claude Opus 4.7</a> holds attack success to roughly 0.1% on single attempts, and around 5–6% after 100 adaptive attempts. Claude Code auto mode catches roughly 83% of overeager behaviors <a href=\"https://www.anthropic.com/engineering/claude-code-auto-mode\" rel=\"noreferrer\" target=\"_blank\">before they execute</a>. Yet even with best-in-class defenses, protection in the model layer will never be 100% effective, which is why it can't stand alone.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>The external content the agent can reach.</strong> MCP servers, third-party plugins, and web search tools all feed content into the agent's context from sources you don't control. An audited connector isn't the same as audited data—a GitHub connector, for instance, can load a poisoned README straight into the model's context despite passing malware checks. Granularly limiting tool permissions can help limit the blast radius. An agent with read-only DB access, for instance, can be deployed far more broadly than one that writes to prod.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Defenses should overlap and complement each other. When environmental defenses aren't available, the model layer has to pick up the slack (this is precisely what Claude Code's <a href=\"https://claude.com/blog/auto-mode\" rel=\"noreferrer\" target=\"_blank\">auto mode</a> is designed for). Locally, the environment and model defenses can guard against malicious tool outputs, but defenses can be added higher up the chain by limiting the tool's capabilities and access.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"Three components to defend: the model, the environment in which it runs, and the external content the agent can reach.\" src=\"https://aka.doubaocdn.com/s/Y4QO1wZqTc\" loading=\"lazy\" /><figcaption>Three components to defend: the model, the environment in which it runs, and the external content the agent can reach.</figcaption></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<h2>Patterns for containing agents</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Focusing on the environment layer, we describe three isolation patterns and how they're tailored for each Claude platform—<a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a>, Claude Code, and Cowork. We arrived at each design gradually, after finding the balance between the capabilities we need from the agent and the degree of intervention required from the user.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Pattern 1: The ephemeral container (claude.ai code execution)</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Though best known as a chat interface, claude.ai also writes and runs code, generates files, and calls connectors. When Claude runs code inside claude.ai, it does so in a <a href=\"https://en.wikipedia.org/wiki/GVisor\" rel=\"noreferrer\" target=\"_blank\">gVisor</a> container on isolated infrastructure. The agent is entirely server-side; no code runs on the local machine, and the filesystem is ephemeral (per-session). The blast radius is minimal, but so is the ceiling on what Claude can do—there's no persistent workspace and no access to the user's filesystem.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This also makes <a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a> subject to a more traditional threat model. We're not protecting user machines from agents; we're protecting our own infrastructure and each tenant from one another. Our pre-launch work for <a href=\"http://claude.ai/redirect/website.v1.769e9b82-d674-469c-9f50-cd65cb625d36\" rel=\"noreferrer\" target=\"_blank\">claude.ai</a> was dominated by traditional security work like network configuration, internal service auth, and orchestration.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>That work reinforced the oldest lesson in security: the weakest layer is the one you built yourself. gVisor and <a href=\"https://en.wikipedia.org/wiki/Seccomp\" rel=\"noreferrer\" target=\"_blank\">seccomp</a> have been hardened against well-resourced adversaries for far longer than agentic AI has existed, so the review effort went into the newer pieces we'd built around them. We'll come back to this later, since our custom proxy is also the piece that broke in our most consequential incident.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Pattern 2: The human-in-the-loop sandbox (Claude Code)</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Claude Code runs on a user's machine and has access to their filesystem, shell, and network. Without this, coding agents have limited usefulness, so it's imperative to find a way to grant that access safely.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>One approach is to rely on a human-in-the-loop. This is only a tractable solution for Claude Code because the average user is a developer who's familiar with coding environments: they can read bash, they understand what rm -rf does, and they already run npm install from untrusted sources several times a week. All that means that when an &quot;allow this&quot; dialog pops up, they are highly likely to have the expertise to accurately evaluate what the agent is attempting to do and the risk involved. Given this, Claude Code launched with the simplest possible defense: allow reads, require approval for write, bash, and network access.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>However, as mentioned, approval fatigue showed <a href=\"https://www.reddit.com/r/ClaudeAI/comments/1rru8zw/just_picked_up_a_new_keyboard_cant_wait_to_write/\" rel=\"noreferrer\" target=\"_blank\">up within weeks.</a> Ironically, this meant that a feature originally designed to provide oversight could arguably have the opposite effect—some users might simply stop paying attention. As a first step to mitigate incautious approvals, we shipped an OS-level sandbox (Seatbelt on macOS, bubblewrap on Linux) that hardens the boundary: reads are allowed, writes are allowed inside the workspace, but network is denied by default. Within the sandbox, the agent runs largely without interruption. The result was an 84% reduction in permission prompts, and we <a href=\"https://github.com/anthropic-experimental/sandbox-runtime\" rel=\"noreferrer\" target=\"_blank\">open-sourced the runtime</a>, so the boundary is auditable.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Our <a href=\"https://www.anthropic.com/news/measuring-agent-autonomy\" rel=\"noreferrer\" target=\"_blank\">anonymized usage data</a> also showed that experienced users auto-approve roughly twice as often as new users, but they also interrupt the agent mid-execution more frequently. Instead of gating individual steps, experienced users are more likely to supervise the agent only when it goes off track. While this may be a natural evolution in how people prefer to work with agents, this too is fallible, requiring users to be technical and attentive enough to notice drift in the first place. As model capabilities improve and agents begin writing increasingly ambitious bash, it becomes harder to notice any such drift. And as users move to multi-agent systems, this approach is also much less likely to be an effective oversight strategy.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h4>Risk we missed: Everything before the trust dialog</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Between mid-2025 and January 2026, we received reports of vulnerabilities in Claude Code through our responsible disclosure program. Three of these vulnerabilities targeted code that executes <em>before</em> the user has consented to anything. To understand how this is possible, consider the most direct case: a developer clones a repository to review a pull request, and that repository contains a .claude/settings.json which defines a hook. Because Claude Code reads project settings during startup—before presenting the standard &quot;Do you trust this folder?&quot; prompt—the hook the attacker had authored and committed would execute automatically. The remaining cases looked structurally similar, in which input from the not-yet-trusted directory was parsed before the trust boundary had been established.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The fix in each case had the same shape: defer parsing and execution of project-local configuration until after the user accepts the trust prompt. If you're building something similar, treat project-open, config-load, and localhost listeners the way you'd treat any inbound request from the internet. They shouldn't be implicitly trusted just because they feel local and arrive before the user has consented.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h4>Risk we missed: The user as an injection vector</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>In February 2026, during a controlled internal red-team exercise, a researcher successfully phished an employee into launching Claude Code with a malicious prompt. The phish looked like ordinary collaboration—a &quot;can you run this for me?&quot; email with a ready-to-paste prompt attached—and the prompt itself read like routine task instructions. But somewhere among the setup steps, it gently asked Claude to read ~/.aws/credentials, encode the contents, and POST them to an external endpoint. Across 25 retries of that prompt, Claude completed the exfiltration 24 times.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This is a <em>direct</em> prompt injection—the attacker's instructions arrived through the user, not through tool output or fetched content. Our model-layer defenses anchor on user intent—when the user is the one typing the instruction, there's nothing anomalous for a classifier to catch. A human contractor handed the same script would have done the same thing.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The only defense that holds in this situation is the environment, specifically egress controls that block the POST regardless of intent and filesystem boundaries that keep ~/.aws out of reach in the first place.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>(When we shared the working prompt in internal Slack for discussion, someone pointed out that some internal agents <em>read</em> Slack. The payload was now ambient. We added a <a href=\"https://www.fortinet.com/resources/cyberglossary/what-is-canary-in-cybersecurity\" rel=\"noreferrer\" target=\"_blank\">canary string</a> to the thread so we'd notice if anything picked it up. In a world where agents read everything, the investigation tooling is also an attack surface.)</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Pattern 3: The local VM (Claude Cowork)</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Claude Cowork runs on a user's desktop with access to a workspace folder selected by the user. Because the platform is built for general knowledge work, not software engineering, the average user is much less likely to be fluent in bash.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>As a result, the human-in-the-loop sandbox strategy may not transfer; a non-technical knowledge worker shouldn't be expected to judge bash incantations such as find . -name &quot;*.tmp&quot; -exec rm {} \\;. When approving an exception requires expertise the typical user doesn't have, admins should set a boundary that is absolute and always-on.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To enable this, our first version of Claude Cowork ran inside a full virtual machine using the platform's vendor hypervisor (Apple's Virtualization framework on macOS, HCS on Windows). The VM has its own Linux kernel, its own filesystem, and its own process table. The user's selected workspace and .claude folder are mounted; nothing else on the host is visible. Credentials stay in the host's keychain and never enter the guest machine. This design protects against the possibility that Claude will, at some point, behave in a misaligned manner. A compromised Claude could still damage what's inside the workspace folder, so the architecture is designed to make sure that's the <em>only</em> thing it can reach (until the user adds connectors), and that the user controls what's mounted there.</p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p>The capabilities that make agents useful also make them difficult to evaluate. The strategies that work across deployments combine techniques to match the complexity of the systems they measure.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Introduction</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Good evaluations help teams ship AI agents more confidently. Without them, it's easy to get stuck in reactive loops—catching issues only in production, where fixing one failure creates others. Evals make problems and behavioral changes visible before they affect users, and their value compounds over the lifecycle of an agent.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>As we described in <a href=\"https://www.anthropic.com/engineering/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">Building effective agents</a>, agents operate over many turns: calling tools, modifying state, and adapting based on intermediate results. These same capabilities that make AI agents useful—autonomy, intelligence, and flexibility—also make them harder to evaluate.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Through our internal work and with customers at the frontier of agent development, we've learned how to design more rigorous and useful evals for agents. Here's what's worked across a range of agent architectures and use cases in real-world deployment.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>The structure of an evaluation</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>An <strong>evaluation</strong> (&quot;eval&quot;) is a test for an AI system: give an AI an input, then apply grading logic to its output to measure success. In this post, we focus on <strong>automated evals</strong> that can be run during development without real users.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Single-turn evaluations</strong> are straightforward: a prompt, a response, and grading logic. For earlier LLMs, single-turn, non-agentic evals were the main evaluation method. As AI capabilities have advanced, <strong>multi-turn evaluations</strong> have become increasingly common.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/ZRKO1wZqw7)In a simple eval, an agent processes a prompt, and a grader checks if the output matches expectations. For a more complex multi-turn eval, a coding agent receives tools, a task (building an MCP server in this case), and an environment, executes an &quot;agent loop&quot; (tool calls and reasoning), and updates the environment with the implementation. Grading then uses unit tests to verify the working MCP server.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Agent evaluations</strong> are even more complex. Agents use tools across many turns, modifying state in the environment and adapting as they go—which means mistakes can propagate and compound. Frontier models can also find creative solutions that surpass the limits of static evals. For instance, Opus 4.5 solved a <a href=\"https://github.com/sierra-research/tau2-bench\" rel=\"noreferrer\" target=\"_blank\">𝜏2-bench</a> problem about booking a flight by <a href=\"https://www.anthropic.com/news/claude-opus-4-5\" rel=\"noreferrer\" target=\"_blank\">discovering</a> a loophole in the policy. It &quot;failed&quot; the evaluation as written, but actually came up with a better solution for the user.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>When building agent evaluations, we use the following definitions:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>A <strong>task</strong> (a.k.a <strong>problem</strong>  or <strong>test case</strong> ) is a single test with defined inputs and success criteria.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Each attempt at a task is a <strong>trial</strong> . Because model outputs vary between runs, we run multiple trials to produce more consistent results.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>A <strong>grader</strong> is logic that scores some aspect of the agent's performance. A task can have multiple graders, each containing multiple assertions (sometimes called <strong>checks</strong> )<strong>.</strong></li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>A <strong>transcript</strong> (also called a <strong>trace</strong> or <strong>trajectory</strong> ) is the complete record of a trial, including outputs, tool calls, reasoning, intermediate results, and any other interactions. For the Anthropic API, this is the full messages array at the end of an eval run - containing all the calls to the API and all of the returned responses during the evaluation.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>The <strong>outcome</strong>  is the final state in the environment at the end of the trial. A flight-booking agent might say &quot;Your flight has been booked&quot; at the end of the transcript, but the outcome is whether a reservation exists in the environment's SQL database.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>An <strong>evaluation harness</strong>  is the infrastructure that runs evals end-to-end. It provides instructions and tools, runs tasks concurrently, records all the steps, grades outputs, and aggregates results.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>An <strong>agent harness</strong> (or <strong>scaffold</strong> ) is the system that enables a model to act as an agent: it processes inputs, orchestrates tool calls, and returns results. When we evaluate &quot;an agent,&quot; we're evaluating the harness <em>and</em> the model working together. For example, <a href=\"https://claude.com/product/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> is a flexible agent harness, and we used its core primitives through the <a href=\"https://platform.claude.com/docs/en/agent-sdk/overview\" rel=\"noreferrer\" target=\"_blank\">Agent SDK</a> to build our <a href=\"https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\" rel=\"noreferrer\" target=\"_blank\">long-running agent harness</a>.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>An <strong>evaluation suite</strong>  is a collection of tasks designed to measure specific capabilities or behaviors. Tasks in a suite typically share a broad goal. For instance, a customer support eval suite might test refunds, cancellations, and escalations.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/o7XK1wZqw7)Components of evaluations for agents.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Why build evaluations?</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>When teams first start building agents, they can get surprisingly far through a combination of manual testing, <a href=\"https://en.wikipedia.org/wiki/Eating_your_own_dog_food\" rel=\"noreferrer\" target=\"_blank\">dogfooding</a>, and intuition. More rigorous evaluation may even seem like overhead that slows down shipping. But after the early prototyping stages, once an agent is in production and has started scaling, building without evals starts to break down.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The breaking point often comes when users report the agent feels worse after changes, and the team is &quot;flying blind&quot; with no way to verify except to guess and check. Absent evals, debugging is reactive: wait for complaints, reproduce manually, fix the bug, and hope nothing else regressed. Teams can't distinguish real regressions from noise, automatically test changes against hundreds of scenarios before shipping, or measure improvements.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We've seen this progression play out many times. For instance, Claude Code started with fast iteration based on feedback from Anthropic employees and external users. Later, we added evals—first for narrow areas like concision and file edits, and then for more complex behaviors like over-engineering. These evals helped identify issues, guide improvements, and focus research-product collaborations. Combined with production monitoring, A/B tests, user research, and more, evals provide signals to continue improving Claude Code as it scales.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Writing evals is useful at any stage in the agent lifecycle. Early on, evals force product teams to specify what success means for the agent, while later they help uphold a consistent quality bar.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><a href=\"https://www.descript.com/\" rel=\"noreferrer\" target=\"_blank\">Descript</a>'s agent helps users edit videos, so they built evals around three dimensions of a successful editing workflow: don't break things, do what I asked, and do it well. They evolved from manual grading to LLM graders with criteria defined by the product team and periodic human calibration, and now regularly run two separate suites for quality benchmarking and regression testing. The <a href=\"https://bolt.new/\" rel=\"noreferrer\" target=\"_blank\">Bolt</a> AI team started building evals later, after they already had a widely used agent. In 3 months, they built an eval system that runs their agent and grades outputs with static analysis, uses browser agents to test apps, and employs LLM judges for behaviors like instruction following.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Some teams create evals at the start of development; others add them once at scale when evals become a bottleneck for improving the agent. Evals are especially useful at the start of agent development to explicitly encode expected behavior. Two engineers reading the same initial spec could come away with different interpretations on how the AI should handle edge cases. An eval suite resolves this ambiguity. Regardless of when they're created, evals help accelerate development.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Evals also shape how quickly you can adopt new models. When more powerful models come out, teams without evals face weeks of testing while competitors with evals can quickly determine the model's strengths, tune their prompts, and upgrade in days.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Once evals exist, you get baselines and regression tests for free: latency, token usage, cost per task, and error rates can be tracked on a static bank of tasks. Evals can also become the highest-bandwidth communication channel between product and research teams, defining metrics researchers can optimize against. Clearly, evals have wide-ranging benefits beyond tracking regressions and improvements. Their compounding value is easy to miss given that costs are visible upfront while benefits accumulate later.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>How to evaluate AI agents</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>We see several common types of agents deployed at scale today, including coding agents, research agents, computer use agents, and conversational agents. Each type may be deployed across a wide variety of industries, but they can be evaluated using similar techniques. You don't need to invent an evaluation from scratch. The sections below describe proven techniques for several agent types. Use these methods as a foundation, then extend them to your domain.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Types of graders for agents</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Agent evaluations typically combine three types of graders: code-based, model-based, and human. Each grader evaluates some portion of either the transcript or the outcome. An essential component of effective evaluation design is to choose the right graders for the job.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Code-based graders</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>| <strong>Methods</strong> | <strong>Strengths</strong> | <strong>Weaknesses</strong> | |---|---|---| | • String match checks (exact, regex, fuzzy, etc.) • Binary tests (fail-to-pass, pass-to-pass) • Static analysis (lint, type, security) • Outcome verification • Tool calls verification (tools used, parameters) • Transcript analysis (turns taken, token usage) | • Fast • Cheap • Objective • Reproducible • Easy to debug • Verify specific conditions | • Brittle to valid variations that don't match expected patterns exactly • Lacking in nuance • Limited for evaluating some more subjective tasks |</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Model-based graders</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>| <strong>Methods</strong> | <strong>Strengths</strong> | <strong>Weaknesses</strong> | |---|---|---| | Rubric-based scoringNatural language assertionsPairwise comparisonReference-based evaluationMulti-judge consensus | FlexibleScalableCaptures nuanceHandles open-ended tasksHandles freeform output | Non-deterministicMore expensive than codeRequires calibration with human graders for accuracy |</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Human graders</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>| <strong>Methods</strong> | <strong>Strengths</strong> | <strong>Weaknesses</strong> | |---|---|---| | SME reviewCrowdsourced judgmentSpot-check samplingA/B testingInter-annotator agreement | Gold standard qualityMatches expert user judgmentUsed to calibrate model-based graders | ExpensiveSlowOften requires access to human experts at scale |</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>For each task, scoring can be weighted (combined grader scores must hit a threshold), binary (all graders must pass), or a hybrid.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Capability vs. regression evals</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p><strong>Capability or &quot;quality&quot; evals</strong> ask, &quot;What can this agent do well?&quot; They should start at a low pass rate, targeting tasks the agent struggles with and giving teams a hill to climb.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Regression evals</strong> ask, &quot;Does the agent still handle all the tasks it used to?&quot; and should have a nearly 100% pass rate. They protect against backsliding, as a decline in score signals that something is broken and needs to be improved. As teams hill-climb on capability evals, it's important to also run regression evals to make sure changes don't cause issues elsewhere.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>After an agent is launched and optimized, capability evals with high pass rates can &quot;graduate&quot; to become a regression suite that is run continuously to catch any drift. Tasks that once measured &quot;Can we do this at all?&quot; then measure &quot;Can we still do this reliably?&quot;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Evaluating coding agents</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p><strong>Coding agents</strong> write, test, and debug code, navigating codebases and running commands much like a human developer. Effective evals for modern coding agents usually rely on well-specified tasks, stable test environments, and thorough tests for the generated code.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Deterministic graders are natural for coding agents because software is generally straightforward to evaluate: does the code run and do the tests pass? Two widely used coding agent benchmarks, <a href=\"https://www.swebench.com/SWE-bench/\" rel=\"noreferrer\" target=\"_blank\">SWE-bench Verified</a> and <a href=\"https://www.tbench.ai/\" rel=\"noreferrer\" target=\"_blank\">Terminal-Bench</a>, follow this approach. SWE-bench Verified gives agents GitHub issues from popular Python repositories and grades solutions by running the test suite; a solution passes only if it fixes the failing tests without breaking existing ones. LLMs have progressed from 40% to &gt;80% on this eval in just one year. Terminal-Bench takes a different track: it tests end-to-end technical tasks, such as building a Linux kernel from source or training an ML model.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Once you have a set of pass-or-fail tests for validating the key <em>outcomes</em> of a coding task, it's often useful to also grade the transcript<em>.</em> For instance, heuristics-based code quality rules can evaluate the generated code based on more than passing tests, and model-based graders with clear rubrics can assess behaviors like how the agent calls tools or interacts with the user.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Example: Theoretical evaluation for a coding agent</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Consider a coding task where the agent must fix an authentication bypass vulnerability. As shown in the illustrative YAML file below, one could evaluate this agent using both graders and metrics.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>task:\n id: &quot;fix-auth-bypass_1&quot;\n desc: &quot;Fix authentication bypass when password field is empty and ...&quot;\n graders:\n - type: deterministic_tests\n required: [test_empty_pw_rejected.py, test_null_pw_rejected.py]\n - type: llm_rubric\n rubric: prompts/code_quality.md\n - type: static_analysis\n commands: [ruff, mypy, bandit]\n - type: state_check\n expect:\n security_logs: {event_type: &quot;auth_blocked&quot;}\n - type: tool_calls\n required:\n - {tool: read_file, params: {path: &quot;src/auth/*&quot;}}\n - {tool: edit_file}\n - {tool: run_tests}\n tracked_metrics:\n - type: transcript\n metrics:\n - n_turns\n - n_toolcalls\n - n_total_tokens\n - type: latency\n metrics:\n - time_to_first_token\n - output_tokens_per_sec\n - time_to_last_token</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>Note that this example showcases the full range of available graders for illustration. In practice, coding evaluations typically rely on unit tests for correctness verification and an LLM rubric for assessing overall code quality, with additional graders and metrics added only as needed.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Evaluating conversational agents</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p><strong>Conversational agents</strong> interact with users in domains like support, sales, or coaching. Unlike traditional chatbots, they maintain state, use tools, and take actions mid-conversation. While coding and research agents can also involve many turns of interaction with the user, conversational agents present a distinct challenge: the quality of the interaction itself is part of what you're evaluating. Effective evals for conversational agents usually rely on verifiable end-state outcomes and rubrics that capture both task completion and interaction quality. Unlike most other evals, they often require a second LLM to simulate the user. We use this approach in our <a href=\"https://alignment.anthropic.com/2025/automated-auditing/\" rel=\"noreferrer\" target=\"_blank\">alignment auditing agents</a> to stress-test models through extended, adversarial conversations.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Success for conversational agents can be multidimensional: is the ticket resolved (state check), did it finish in &lt;10 turns (transcript constraint), and was the tone appropriate (LLM rubric)? Two benchmarks that incorporate multidimensionality are <a href=\"https://arxiv.org/abs/2406.12045\" rel=\"noreferrer\" target=\"_blank\">𝜏-Bench</a> and its successor, <a href=\"https://arxiv.org/abs/2506.07982\" rel=\"noreferrer\" target=\"_blank\">τ2-Bench</a>. These simulate multi-turn interactions across domains like retail support and airline booking, where one model plays a user persona while the agent navigates realistic scenarios.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Example: Theoretical evaluation for a conversational agent</strong></p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p>The journey of this multi-agent system from prototype to production taught us critical lessons about system architecture, tool design, and prompt engineering. A multi-agent system consists of multiple agents (LLMs autonomously using tools in a loop) working together. Our Research feature involves an agent that plans a research process based on user queries, and then uses tools to create parallel agents that search for information simultaneously. Systems with multiple agents introduce new challenges in agent coordination, evaluation, and reliability.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This post breaks down the principles that worked for us—we hope you'll find them useful to apply when building your own multi-agent systems.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Benefits of a multi-agent system</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Research work involves open-ended problems where it's very difficult to predict the required steps in advance. You can't hardcode a fixed path for exploring complex topics, as the process is inherently dynamic and path-dependent. When people conduct research, they tend to continuously update their approach based on discoveries, following leads that emerge during investigation.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This unpredictability makes AI agents particularly well-suited for research tasks. Research demands the flexibility to pivot or explore tangential connections as the investigation unfolds. The model must operate autonomously for many turns, making decisions about which directions to pursue based on intermediate findings. A linear, one-shot pipeline cannot handle these tasks.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The essence of search is compression: distilling insights from a vast corpus. Subagents facilitate compression by operating in parallel with their own context windows, exploring different aspects of the question simultaneously before condensing the most important tokens for the lead research agent. Each subagent also provides separation of concerns—distinct tools, prompts, and exploration trajectories—which reduces path dependency and enables thorough, independent investigations.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Once intelligence reaches a threshold, multi-agent systems become a vital way to scale performance. For instance, although individual humans have become more intelligent in the last 100,000 years, human societies have become <em>exponentially</em> more capable in the information age because of our <em>collective</em> intelligence and ability to coordinate. Even generally-intelligent agents face limits when operating as individuals; groups of agents can accomplish far more.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Our internal evaluations show that multi-agent research systems excel especially for breadth-first queries that involve pursuing multiple independent directions simultaneously. We found that a multi-agent system with Claude Opus 4 as the lead agent and Claude Sonnet 4 subagents outperformed single-agent Claude Opus 4 by 90.2% on our internal research eval. For example, when asked to identify all the board members of the companies in the Information Technology S&amp;P 500, the multi-agent system found the correct answers by decomposing this into tasks for subagents, while the single agent system failed to find the answer with slow, sequential searches.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Multi-agent systems work mainly because they help spend enough tokens to solve the problem. In our analysis, three factors explained 95% of the performance variance in the <a href=\"https://openai.com/index/browsecomp/\" rel=\"noreferrer\" target=\"_blank\">BrowseComp</a> evaluation (which tests the ability of browsing agents to locate hard-to-find information). We found that token usage by itself explains 80% of the variance, with the number of tool calls and the model choice as the two other explanatory factors. This finding validates our architecture that distributes work across agents with separate context windows to add more capacity for parallel reasoning. The latest Claude models act as large efficiency multipliers on token use, as upgrading to Claude Sonnet 4 is a larger performance gain than doubling the token budget on Claude Sonnet 3.7. Multi-agent architectures effectively scale token usage for tasks that exceed the limits of single agents.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>There is a downside: in practice, these architectures burn through tokens fast. In our data, agents typically use about 4× more tokens than chat interactions, and multi-agent systems use about 15× more tokens than chats. For economic viability, multi-agent systems require tasks where the value of the task is high enough to pay for the increased performance. Further, some domains that require all agents to share the same context or involve many dependencies between agents are not a good fit for multi-agent systems today. For instance, most coding tasks involve fewer truly parallelizable tasks than research, and LLM agents are not yet great at coordinating and delegating to other agents in real time. We've found that multi-agent systems excel at valuable tasks that involve heavy parallelization, information that exceeds single context windows, and interfacing with numerous complex tools.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Architecture overview for Research</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Our Research system uses a multi-agent architecture with an orchestrator-worker pattern, where a lead agent coordinates the process while delegating to specialized subagents that operate in parallel.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>&lt;img src='https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1198befc0b33726c45692ac40f764022f4de1bf2-4584x2579.png&amp;amp;w=3840&amp;amp;q=75' alt='' title='' width='4584' height='2579' /&gt;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><em>The multi-agent architecture in action: user queries flow through a lead agent that creates specialized subagents to search for different aspects in parallel.</em></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>When a user submits a query, the lead agent analyzes it, develops a strategy, and spawns subagents to explore different aspects simultaneously. As shown in the diagram above, the subagents act as intelligent filters by iteratively using search tools to gather information, in this case on AI agent companies in 2025, and then returning a list of companies to the lead agent so it can compile a final answer.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Traditional approaches using Retrieval Augmented Generation (RAG) use static retrieval. That is, they fetch some set of chunks that are most similar to an input query and use these chunks to generate a response. In contrast, our architecture uses a multi-step search that dynamically finds relevant information, adapts to new findings, and analyzes results to formulate high-quality answers.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>&lt;img src='https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F3bde53c9578d74f6e05c3e515e20b910c5a8c20a-4584x4584.png&amp;amp;w=3840&amp;amp;q=75' alt='' title='' width='4584' height='4584' /&gt;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><em>Process diagram showing the complete workflow of our multi-agent Research system. When a user submits a query, the system creates a LeadResearcher agent that enters an iterative research process. The LeadResearcher begins by thinking through the approach and saving its plan to Memory to persist the context, since if the context window exceeds 200,000 tokens it will be truncated and it is important to retain the plan. It then creates specialized Subagents (two are shown here, but it can be any number) with specific research tasks. Each Subagent independently performs web searches, evaluates tool results using <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#interleaved-thinking\" rel=\"noreferrer\" target=\"_blank\">interleaved thinking</a>, and returns findings to the LeadResearcher. The LeadResearcher synthesizes these results and decides whether more research is needed—if so, it can create additional subagents or refine its strategy. Once sufficient information is gathered, the system exits the research loop and passes all findings to a CitationAgent, which processes the documents and research report to identify specific locations for citations. This ensures all claims are properly attributed to their sources. The final research results, complete with citations, are then returned to the user.</em></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Prompt engineering and evaluations for research agents</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Multi-agent systems have key differences from single-agent systems, including a rapid growth in coordination complexity. Early agents made errors like spawning 50 subagents for simple queries, scouring the web endlessly for nonexistent sources, and distracting each other with excessive updates. Since each agent is steered by a prompt, prompt engineering was our primary lever for improving these behaviors. Below are some principles we learned for prompting agents:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li><strong>Think like your agents.</strong> To iterate on prompts, you must understand their effects. To help us do this, we built simulations using our <a href=\"https://console.anthropic.com/\" rel=\"noreferrer\" target=\"_blank\">Console</a> with the exact prompts and tools from our system, then watched agents work step-by-step. This immediately revealed failure modes: agents continuing when they already had sufficient results, using overly verbose search queries, or selecting incorrect tools. Effective prompting relies on developing an accurate mental model of the agent, which can make the most impactful changes obvious.</li><li><strong>Teach the orchestrator how to delegate.</strong> In our system, the lead agent decomposes queries into subtasks and describes them to subagents. Each subagent needs an objective, an output format, guidance on the tools and sources to use, and clear task boundaries. Without detailed task descriptions, agents duplicate work, leave gaps, or fail to find necessary information. We started by allowing the lead agent to give simple, short instructions like 'research the semiconductor shortage,' but found these instructions often were vague enough that subagents misinterpreted the task or performed the exact same searches as other agents. For instance, one subagent explored the 2021 automotive chip crisis while 2 others duplicated work investigating current 2025 supply chains, without an effective division of labor.</li><li><strong>Scale effort to query complexity.</strong> Agents struggle to judge appropriate effort for different tasks, so we embedded scaling rules in the prompts. Simple fact-finding requires just 1 agent with 3-10 tool calls, direct comparisons might need 2-4 subagents with 10-15 calls each, and complex research might use more than 10 subagents with clearly divided responsibilities. These explicit guidelines help the lead agent allocate resources efficiently and prevent overinvestment in simple queries, which was a common failure mode in our early versions.</li><li><strong>Tool design and selection are critical.</strong> Agent-tool interfaces are as critical as human-computer interfaces. Using the right tool is efficient—often, it's strictly necessary. For instance, an agent searching the web for context that only exists in Slack is doomed from the start. With <a href=\"https://modelcontextprotocol.io/introduction\" rel=\"noreferrer\" target=\"_blank\">MCP servers</a> that give the model access to external tools, this problem compounds, as agents encounter unseen tools with descriptions of wildly varying quality. We gave our agents explicit heuristics: for example, examine all available tools first, match tool usage to user intent, search the web for broad external exploration, or prefer specialized tools over generic ones. Bad tool descriptions can send agents down completely wrong paths, so each tool needs a distinct purpose and a clear description.</li><li><strong>Let agents improve themselves</strong>. We found that the Claude 4 models can be excellent prompt engineers. When given a prompt and a failure mode, they are able to diagnose why the agent is failing and suggest improvements. We even created a tool-testing agent—when given a flawed MCP tool, it attempts to use the tool and then rewrites the tool description to avoid failures. By testing the tool dozens of times, this agent found key nuances and bugs. This process for improving tool ergonomics resulted in a 40% decrease in task completion time for future agents using the new description, because they were able to avoid most mistakes.</li><li><strong>Start wide, then narrow down.</strong> Search strategy should mirror expert human research: explore the landscape before drilling into specifics. Agents often default to overly long, specific queries that return few results. We counteracted this tendency by prompting agents to start with short, broad queries, evaluate what's available, then progressively narrow focus.</li><li><strong>Guide the thinking process.</strong> <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking\" rel=\"noreferrer\" target=\"_blank\">Extended thinking mode</a>, which leads Claude to output additional tokens in a visible thinking process, can serve as a controllable scratchpad. The lead agent uses thinking to plan its approach, assessing which tools fit the task, determining query complexity and subagent count, and defining each subagent's role. Our testing showed that extended thinking improved instruction-following, reasoning, and efficiency. Subagents also plan, then use <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#interleaved-thinking\" rel=\"noreferrer\" target=\"_blank\">interleaved thinking</a> after tool results to evaluate quality, identify gaps, and refine their next query. This makes subagents more effective in adapting to any task.</li><li><strong>Parallel tool calling transforms speed and performance.</strong> Complex research tasks naturally involve exploring many sources. Our early agents executed sequential searches, which was painfully slow. For speed, we introduced two kinds of parallelization: (1) the lead agent spins up 3-5 subagents in parallel rather than serially; (2) the subagents use 3+ tools in parallel. These changes cut research time by up to 90% for complex queries, allowing Research to do more work in minutes instead of hours while covering more information than other systems.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>Our prompting strategy focuses on instilling good heuristics rather than rigid rules. We studied how skilled humans approach research tasks and encoded these strategies in our prompts—strategies like decomposing difficult questions into smaller tasks, carefully evaluating the quality of sources, adjusting search approaches based on new information, and recognizing when to focus on depth (investigating one topic in detail) vs. breadth (exploring many topics in parallel). We also proactively mitigated unintended side effects by setting explicit guardrails to prevent the agents from spiraling out of control. Finally, we focused on a fast iteration loop with observability and test cases.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Effective evaluation of agents</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Good evaluations are essential for building reliable AI applications, and agents are no different. However, evaluating multi-agent systems presents unique challenges. Traditional evaluations often assume that the AI follows the same steps each time: given input X, the system should follow path Y to produce output Z. But multi-agent systems don't work this way. Even with identical starting points, agents might take completely different valid paths to reach their goal. One agent might search three sources while another searches ten, or they might use different tools to find the same answer. Because we don't always know what the right steps are, we usually can't just check if agents followed the &quot;correct&quot; steps we prescribed in advance. Instead, we need flexible evaluation methods that judge whether agents achieved the right outcomes while also following a reasonable process.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Start evaluating immediately with small samples</strong>. In early agent development, changes tend to have dramatic impacts because there is abundant low-hanging fruit. A prompt tweak might boost success rates from 30% to 80%. With effect sizes this large, you can spot changes with just a few test cases. We started with a set of about 20 queries representing real usage patterns. Testing these queries often allowed us to clearly see the impact of changes. We often hear that AI developer teams delay creating evals because they believe that only large evals with hundreds of test cases are useful. However, it's best to start with small-scale testing right away with a few examples, rather than delaying until you can build more thorough evals.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>LLM-as-judge evaluation scales when done well.</strong> Research outputs are difficult to evaluate programmatically, since they are free-form text and rarely have a single correct answer. LLMs are a natural fit for grading outputs. We used an LLM judge that evaluated each output against criteria in a rubric: factual accuracy (do claims match sources?), citation accuracy (do the cited sources match the claims?), completeness (are all requested aspects covered?), source quality (did it use primary sources over lower-quality secondary sources?), and tool efficiency (did it use the right tools a reasonable number of times?). We experimented with multiple judges to evaluate each component, but found that a single LLM call with a single prompt outputting scores from 0.0-1.0 and a pass-fail grade was the most consistent and aligned with human judgements. This method was especially effective when the eval test cases <em>did</em> have a clear answer, and we could use the LLM judge to simply check if the answer was correct (i.e. did it accurately list the pharma companies with the top 3 largest R&amp;D budgets?). Using an LLM as a judge allowed us to scalably evaluate hundreds of outputs.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Human evaluation catches what automation misses.</strong> People testing agents find edge cases that evals miss. These include hallucinated answers on unusual queries, system failures, or subtle source selection biases. In our case, human testers noticed that our early agents consistently chose SEO-optimized content farms over authoritative but less highly-ranked sources like academic PDFs or personal blogs. Adding source quality heuristics to our prompts helped resolve this issue. Even in a world of automated evaluations, manual testing remains essential.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Multi-agent systems have emergent behaviors, which arise without specific programming. For instance, small changes to the lead agent can unpredictably change how subagents behave. Success requires understanding interaction patterns, not just individual agent behavior. Therefore, the best prompts for these agents are not just strict instructions, but frameworks for collaboration that define the division of labor, problem-solving approaches, and effort budgets. Getting this right relies on careful prompting and tool design, solid heuristics, observability, and tight feedback loops. See the <a href=\"https://platform.claude.com/cookbook/patterns-agents-basic-workflows\" rel=\"noreferrer\" target=\"_blank\">open-source prompts in our Cookbook</a> for example prompts from our system.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Production reliability and engineering challenges</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>In traditional software, a bug might break a feature, degrade performance, or cause outages. In agentic systems, minor changes cascade into large behavioral changes, which makes it remarkably difficult to write code for complex agents that must maintain state in a long-running process.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Agents are stateful and errors compound.</strong> Agents can run for long periods of time, maintaining state across many tool calls. This means we need to durably execute code and handle errors along the way. Without effective mitigations, minor system failures can be catastrophic for agents. When errors occur, we can't just restart from the beginning: restarts are expensive and frustrating for users. Instead, we built systems that can resume from where the agent was when the errors occurred. We also use the model's intelligence to handle issues gracefully: for instance, letting the agent know when a tool is failing and letting it adapt works surprisingly well. We combine the adaptability of AI agents built on Claude with deterministic safeguards like retry logic and regular checkpoints.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Debugging benefits from new approaches.</strong> Agents make dynamic decisions and are non-deterministic between runs, even with identical prompts. This makes debugging harder. For instance, users would report agents &quot;not finding obvious information,&quot; but we couldn't see why. Were the agents using bad search queries? Choosing poor sources? Hitting tool failures? Adding full production tracing let us diagnose why agents failed and fix issues systematically. Beyond standard observability, we monitor agent decision patterns and interaction structures—all without monitoring the contents of individual conversations, to maintain user privacy. This high-level observability helped us diagnose root causes, discover unexpected behaviors, and fix common failures.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Deployment needs careful coordination.</strong> Agent systems are highly stateful webs of prompts, tools, and execution logic that run almost continuously. This means that whenever we deploy updates, agents might be anywhere in their process. We therefore need to prevent our well-meaning code changes from breaking existing agents. We can't update every agent to the new version at the same time. Instead, we use <a href=\"https://brandon.dimcheff.com/2018/02/rainbow-deploys-with-kubernetes/\" rel=\"noreferrer\" target=\"_blank\">rainbow deployments</a> to avoid disrupting running agents, by gradually shifting traffic from old to new versions while keeping both running simultaneously.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Synchronous execution creates bottlenecks.</strong> Currently, our lead agents execute subagents synchronously, waiting for each set of subagents to complete before proceeding. This simplifies coordination, but creates bottlenecks in the information flow between agents. For instance, the lead agent can't steer subagents, subagents can't coordinate, and the entire system can be blocked while waiting for a single subagent to finish searching. Asynchronous execution would enable additional parallelism: agents working concurrently and creating new subagents when needed. But this asynchronicity adds challenges in result coordination, state consistency, and error propagation across the subagents. As models can handle longer and more complex research tasks, we expect the performance gains will justify the complexity.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Conclusion</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>When building AI agents, the last mile often becomes most of the journey. Codebases that work on developer machines require significant engineering to become reliable production systems. The compound nature of errors in agentic systems means that minor issues for traditional software can derail agents entirely. One step failing can cause agents to explore entirely different trajectories, leading to unpredictable outcomes. For all the reasons described in this post, the gap between prototype and production is often wider than anticipated.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Despite these challenges, multi-agent systems have proven valuable for open-ended research tasks. Users have said that Claude helped them find business opportunities they hadn't considered, navigate complex healthcare options, resolve thorny technical bugs, and save up to days of work by uncovering research connections they wouldn't have found alone. Multi-agent research systems can operate reliably at scale with careful engineering, comprehensive testing, detail-oriented prompt and tool design, robust operational practices, and tight collaboration between research, product, and engineering teams who have a strong understanding of current agent capabilities. We're already seeing these systems transform how people solve complex problems.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>&lt;img src='https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F09a90e0aca54859553e93c18683e7fd33ff16d4c-2654x2148.png&amp;amp;w=3840&amp;amp;q=75' alt='' title='' width='2654' height='2148' /&gt;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><em>A <a href=\"https://www.anthropic.com/research/clio\" rel=\"noreferrer\" target=\"_blank\">Clio</a> embedding plot showing the most common ways people are using the Research feature today. The top use case categories are developing software systems across specialized domains (10%), develop and optimize professional and technical content (8%), develop business growth and revenue generation strategies (8%), assist with academic research and educational material development (7%), and research and verify information about people, places, or organizations (5%).</em></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Acknowlegements</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Written by Jeremy Hadfield, Barry Zhang, Kenneth Lien, Florian Scholz, Jeremy Fox, and Daniel Ford. This work reflects the collective efforts of several teams across Anthropic who made the Research feature possible. Special thanks go to the Anthropic apps engineering team, whose dedication brought this complex multi-agent system to production. We're also grateful to our early users for their excellent feedback.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Appendix</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Below are some additional miscellaneous tips for multi-agent systems.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>End-state evaluation of agents that mutate state over many turns.</strong> Evaluating agents that modify persistent state across multi-turn conversations presents unique challenges. Unlike read-only research tasks, each action can change the environment for subsequent steps, creating dependencies that traditional evaluation methods struggle to handle. We found success focusing on end-state evaluation rather than turn-by-turn analysis. Instead of judging whether the agent followed a specific process, evaluate whether it achieved the correct final state. This approach acknowledges that agents may find alternative paths to the same goal while still ensuring they deliver the intended outcome. For complex workflows, break evaluation into discrete checkpoints where specific state changes should have occurred, rather than attempting to validate every intermediate step.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Long-horizon conversation management.</strong> Production agents often engage in conversations spanning hundreds of turns, requiring careful context management strategies. As conversations extend, standard context windows become insufficient, necessitating intelligent compression and memory mechanisms. We implemented patterns where agents summarize completed work phases and store essential information in external memory before proceeding to new tasks. When context limits approach, agents can spawn fresh subagents with clean contexts while maintaining continuity through careful handoffs. Further, they can retrieve stored context like the research plan from their memory rather than losing previous work when reaching the context limit. This distributed approach prevents context overflow while preserving conversation coherence across extended interactions.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Subagent output to a filesystem to minimize the 'game of telephone.'</strong> Direct subagent outputs can bypass the main coordinator for certain types of results, improving both fidelity and performance. Rather than requiring subagents to communicate everything through the lead agent, implement artifact systems where specialized agents can create outputs that persist independently. Subagents call tools to store their work in external systems, then pass lightweight references back to the coordinator. This prevents information loss during multi-stage processing and reduces token overhead from copying large outputs through conversation history. The pattern works particularly well for structured outputs like code, reports, or data visualizations where the subagent's specialized prompt produces better results than filtering through a general coordinator.</p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"\" src=\"https://aka.doubaocdn.com/s/kn4i1wZqw8\" loading=\"lazy\" /></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>We tasked Opus 4.6 using agent teams to build a C Compiler, and then (mostly) walked away. Here's what it taught us about the future of autonomous software development.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Enabling long-running Claudes</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Enabling long-running Claudes</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Running Claude in parallel</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Lessons from programming with Claude agent teams</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Stress testing the limits of agent teams</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Looking forward</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p><em>Written by Nicholas Carlini, a researcher on our Safeguards team. </em></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>I've been experimenting with a new approach to supervising language models that we're calling &quot;agent teams.&quot;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>With agent teams, multiple Claude instances work in parallel on a shared codebase without active human intervention. This approach dramatically expands the scope of what's achievable with LLM agents.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To stress test it, I tasked 16 agents with writing a Rust-based C compiler, from scratch, capable of compiling the Linux kernel. Over nearly 2,000 Claude Code sessions and $20,000 in API costs, the agent team produced a 100,000-line compiler that can build Linux 6.9 on x86, ARM, and RISC-V.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">The compiler is an interesting artifact</a> on its own, but I focus here on what I learned about designing harnesses for long-running autonomous agent teams: how to write tests that keep agents on track without human oversight, how to structure work so multiple agents can make progress in parallel, and where this approach hits its ceiling.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Enabling long-running Claudes</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Existing agent scaffolds like Claude Code require an operator to be online and available to work jointly. If you ask for a solution to a long and complex problem, the model may solve part of it, but eventually it will stop and wait for continued input—a question, a status update, or a request for clarification.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To elicit sustained, autonomous progress, I built a harness that sticks Claude in a simple loop (if you've seen Ralph-loop, this should look familiar). When it finishes one task, it immediately picks up the next. <em>(Run this in a container, not your actual machine).</em></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>#!/bin/bash\n\nwhile true; do\n COMMIT=$(git rev-parse --short=6 HEAD)\n LOGFILE=&quot;agent_logs/agent_${COMMIT}.log&quot;\n\n claude --dangerously-skip-permissions \\\n -p &quot;$(cat AGENT_PROMPT.md)&quot; \\\n --model claude-opus-X-Y &amp;&gt; &quot;$LOGFILE&quot;\ndone</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>In the agent prompt, I tell Claude what problem to solve and ask it to approach the problem by breaking it into small pieces, tracking what it's working on, figuring out what to work on next, and to effectively keep going until it's perfect. (On this last point, Claude has no choice. The loop runs forever—although in one instance, I did see Claude <code>pkill -9 bash</code> on accident, thus killing itself and ending the loop. Whoops!).</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Running Claude in parallel</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Running multiple instances in parallel can address two weaknesses of a single-agent harness:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>One Claude Code session can only do one thing at a time. Especially as the scope of a project expands, debugging multiple issues in parallel is far more efficient.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Running multiple Claude agents allows for specialization. While a few agents are tasked to solve the actual problem at hand, other specialized agents can be invoked to (for example) maintain documentation, keep an eye on code quality, or solve specialized sub-tasks.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>My implementation of parallel Claude is bare-bones. A new bare git repo is created, and for each agent, a Docker container is spun up with the repo mounted to <code>/upstream</code>. Each agent clones a local copy to <code>/workspace</code>, and when it's done, pushes from its own local container to upstream.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To prevent two agents from trying to solve the same problem at the same time, the harness uses a simple synchronization algorithm:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ol><li>Claude takes a &quot;lock&quot; on a task by writing a text file to current_tasks/ (e.g., one agent might lock current_tasks/parse_if_statement.txt, while another locks current_tasks/codegen_function_definition.txt). If two agents try to claim the same task, git's synchronization forces the second agent to pick a different one.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li>Claude works on the task, then pulls from upstream, merges changes from other agents, pushes its changes, and removes the lock. Merge conflicts are frequent, but Claude is smart enough to figure that out.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ol><li>The infinite agent-generation-loop spawns a new Claude Code session in a fresh container, and the cycle repeats.</li></ol>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>This is a very early research prototype. I haven't yet implemented any other method for communication between agents, nor do I enforce any process for managing high-level goals. I don't use an orchestration agent.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Instead, I leave it up to each Claude agent to decide how to act. In most cases, Claude picks up the &quot;next most obvious&quot; problem. When stuck on a bug, Claude will often maintain a running doc of failed approaches and remaining tasks. In the <a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">git repository</a> of the project, you can read through the history and watch it take out locks on various tasks.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Lessons from programming with Claude agent teams</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>The scaffolding runs Claude in a loop, but that loop is only useful if Claude can tell how to make progress. Most of my effort went into designing the environment around Claude—the tests, the environment, the feedback—so that it could orient itself without me. These are the approaches I've found most helpful when orchestrating multiple Claude instances.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Write extremely high-quality tests</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Claude will work autonomously to solve whatever problem I give it. So it's important that the task verifier is nearly perfect, otherwise Claude will solve the wrong problem. Improving the testing harness required finding high-quality compiler test suites, writing verifiers and build scripts for open-source software packages, and watching for mistakes Claude was making, then designing new tests as I identified those failure modes.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>For example, near the end of the project, Claude started to frequently break existing functionality each time it implemented a new feature. To address this, I built a continuous integration pipeline and implemented stricter enforcement that allowed Claude to better test its work so that new commits can't break existing code.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Put yourself in Claude's shoes</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>I had to constantly remind myself that I was writing this test harness for Claude and not for myself, which meant rethinking many of my assumptions about how tests should communicate results.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>For example, each agent is dropped into a fresh container with no context and will spend significant time orienting itself, especially on large projects. Before we even reach the tests, to help Claude help itself, I included instructions to maintain extensive READMEs and progress files that should be updated frequently with the current status.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>I also kept in mind the fact that language models have inherent limitations, which, in this case, needed to be designed around. These include:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Context window pollution:</strong>  The test harness should not print thousands of useless bytes. At most, it should print a few lines of output and log all important information to a file so Claude can find it when needed. Logfiles should be easy to process automatically: if there are errors, Claude should write ERROR and put the reason on the same line so grep will find it. It helps to pre-compute aggregate summary statistics so Claude doesn't have to recompute them.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Time blindness:</strong>  Claude can't tell time and, left alone, will happily spend hours running tests instead of making progress. The harness prints incremental progress infrequently (to avoid polluting context) and includes a default <code>--fast </code>option that runs a 1% or 10% random sample. This subsample is deterministic per-agent but random across VMs, so Claude still covers all files but each agent can perfectly identify regressions.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<h3>Make parallelism easy</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>When there are many distinct failing tests, parallelization is trivial: each agent picks a different failing test to work on. After the test suite reached a 99% pass rate, each agent worked on getting a different small open-source project (e.g., SQlite, Redis, libjpeg, MQuickJS, Lua) to compile.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>But when agents started to compile the Linux kernel, they got stuck. Unlike a test suite with hundreds of independent tests, compiling the Linux kernel is one giant task. Every agent would hit the same bug, fix that bug, and then overwrite each other's changes. Having 16 agents running didn't help because each was stuck solving the same task.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The fix was to use <a href=\"https://gcc.gnu.org/\" rel=\"noreferrer\" target=\"_blank\">GCC </a>as an online known-good compiler oracle to compare against. I wrote a new test harness that randomly compiled most of the kernel using GCC, and only the remaining files with Claude's C Compiler. If the kernel worked, then the problem wasn't in Claude's subset of the files. If it broke, then it could further refine by re-compiling some of these files with GCC. This let each agent work in parallel, fixing different bugs in different files, until Claude's compiler could eventually compile all files. (After this worked, it was still necessary to apply delta debugging techniques to find pairs of files that failed together but worked independently.)</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Multiple agent roles</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Parallelism also enables specialization. LLM-written code frequently re-implements existing functionality, so I tasked one agent with coalescing any duplicate code it found. I put another in charge of improving the performance of the compiler itself, and a third I made responsible for outputting efficient compiled code. I asked another agent to critique the design of the project from the perspective of a Rust developer, and make structural changes to the project to improve the overall code quality, and another to work on documentation.</p>",
        "kind": "text",
        "cn": "（参见原文）"
      },
      {
        "en": "<h2>Stress testing the limits of agent teams</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>This project was designed as a capability benchmark. I am interested in stress-testing the limits of what LLMs can just <em>barely</em> achieve today in order to help us prepare for what models will reliably achieve in the future.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>I've been using the C Compiler project as a benchmark across the entire Claude 4 model series. As I did with prior projects, I started by drafting what I wanted: a from-scratch optimizing compiler with no dependencies, GCC-compatible, able to compile the Linux kernel, and designed to support multiple backends. While I specified some aspects of the design (e.g., that it should have an SSA IR to enable multiple optimization passes) I did not go into any detail on how to do so.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Previous Opus 4 models were barely capable of producing a functional compiler. Opus 4.5 was the first to cross a threshold that allowed it to produce a functional compiler which could pass large test suites, but it was still incapable of compiling any real large projects. My goal with Opus 4.6 was to again test the limits.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Evaluation</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Over nearly 2,000 Claude Code sessions across two weeks, Opus 4.6 consumed 2 billion input tokens and generated 140 million output tokens, a total cost just under $20,000. Compared to even the most expensive Claude Max plans, this was an extremely expensive project. But that total is a fraction of what it would cost me to produce this myself—let alone an entire team.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This was a clean-room implementation (Claude did not have internet access at any point during its development); it depends only on the Rust standard library. The 100,000-line compiler can build a bootable Linux 6.9 on x86, ARM, and RISC-V. It can also compile QEMU, FFmpeg, SQlite, postgres, redis, and has a 99% pass rate on most compiler test suites including the <a href=\"https://gcc.gnu.org/onlinedocs/gccint/Torture-Tests.html\" rel=\"noreferrer\" target=\"_blank\">GCC torture test suite</a>. It also passes the developer's ultimate litmus test: it can compile and run Doom.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The compiler, however, is not without limitations. These include:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>It lacks the 16-bit x86 compiler that is necessary to boot Linux out of real mode. For this, it calls out to GCC (the x86_32 and x86_64 compilers are its own).</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>It does not have its own assembler and linker; these are the very last bits that Claude started automating and are still somewhat buggy. The demo video was produced with a GCC assembler and linker.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>The compiler successfully builds many projects, but not all. It's not yet a drop-in replacement for a real compiler.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>The generated code is not very efficient. Even with all optimizations enabled, it outputs less efficient code than GCC with all optimizations <em>disabled.</em></li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>The Rust code quality is reasonable, but is nowhere near the quality of what an expert Rust programmer might produce.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>The resulting compiler has nearly reached the limits of Opus's abilities. I tried (hard!) to fix several of the above limitations but wasn't fully successful. New features and bugfixes frequently broke existing functionality.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>As one particularly challenging example, Opus was unable to implement a 16-bit x86 code generator needed to boot into 16-bit real mode. While the compiler can output correct 16-bit x86 via the 66/67 opcode prefixes, the resulting compiled output is over 60kb, far exceeding the 32k code limit enforced by Linux. Instead, Claude simply cheats here and calls out to GCC for this phase (This is only the case for x86. For ARM or RISC-V, Claude's compiler can compile completely by itself.)</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The <a href=\"https://github.com/anthropics/claudes-c-compiler\" rel=\"noreferrer\" target=\"_blank\">source code for the compiler is available</a>. Download it, read through the code, and try it on your favorite C projects. I've consistently found the best way to understand what language models can do is to push them to their limits, and then study where they start to break down. Over the coming days, I'll continue having Claude push new changes if you want to follow along with Claude's continued attempts at addressing these limitations.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Looking forward</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Each generation of language models opens up new ways of working with them. Early models were useful for tab-completion in IDEs. Before long, models could complete a function body from its docstring. The launch of Claude Code brought agents into the mainstream and enabled developers to pair-program with Claude. But each of these products operates under the assumption that a user defines a task, an LLM runs for a few seconds or minutes and returns an answer, and then the user provides a follow-up.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Agent teams show the possibility of implementing entire, complex projects autonomously. This allows us, as users of these tools, to become more ambitious with our goals.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We are still early, and fully autonomous development comes with real risks. When a human sits with Claude during development, they can ensure consistent quality and catch errors in real time. For autonomous systems, it is easy to see tests pass and assume the job is done, when this is rarely the case. I used to work in penetration testing, exploiting vulnerabilities in products produced by large companies, and the thought of programmers deploying software they've never personally verified is a real concern.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>So, while this experiment excites me, it also leaves me feeling uneasy. Building this compiler has been some of the most fun I've had recently, but I did not expect this to be anywhere near possible so early in 2026. The rapid progress in both language models and the scaffolds we use to interact with them opens the door to writing an enormous amount of new code. I expect the positive applications to outweigh the negative, but we're entering a new world which will require new strategies to navigate safely.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Acknowledgements</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Special thanks to Josef Bacik, Edwin Chen, Bernardo Meurer Costa, Jake Eaton, Dan Kelley, Felix Klock, Jannet Park, Steve Weis, and many other people across Anthropic for their assistance and contributions.</p>",
        "kind": "text",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<p>We've added three new beta features that let Claude discover, learn, and execute tools dynamically. Here's how they work.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The future of AI agents is one where models work seamlessly across hundreds or thousands of tools. An IDE assistant that integrates git operations, file manipulation, package managers, testing frameworks, and deployment pipelines. An operations coordinator that connects Slack, GitHub, Google Drive, Jira, company databases, and dozens of MCP servers simultaneously.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To <a href=\"https://www.anthropic.com/research/building-effective-agents\" rel=\"noreferrer\" target=\"_blank\">build effective agents</a>, they need to work with unlimited tool libraries without stuffing every definition into context upfront. Our blog article on using <a href=\"https://www.anthropic.com/engineering/code-execution-with-mcp\" rel=\"noreferrer\" target=\"_blank\">code execution with MCP</a> discussed how tool results and definitions can sometimes consume 50,000+ tokens before an agent reads a request. Agents should discover and load tools on-demand, keeping only what's relevant for the current task.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Agents also need the ability to call tools from code. When using natural language tool calling, each invocation requires a full inference pass, and intermediate results pile up in context whether they're useful or not. Code is a natural fit for orchestration logic, such as loops, conditionals, and data transformations. Agents need the flexibility to choose between code execution and inference based on the task at hand.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Agents also need to learn correct tool usage from examples, not just schema definitions. JSON schemas define what's structurally valid, but can't express usage patterns: when to include optional parameters, which combinations make sense, or what conventions your API expects.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Today, we're releasing three features that make this possible:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Tool Search Tool,</strong> which allows Claude to use search tools to access thousands of tools without consuming its context window</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Programmatic Tool Calling</strong> , which allows Claude to invoke tools in a code execution environment reducing the impact on the model's context window</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Tool Use Examples</strong> , which provides a universal standard for demonstrating how to effectively use a given tool</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>In internal testing, we've found these features have helped us build things that wouldn't have been possible with conventional tool use patterns. For example, <a href=\"https://www.claude.com/claude-for-excel\" rel=\"noreferrer\" target=\"_blank\">**Claude for Excel**</a> uses Programmatic Tool Calling to read and modify spreadsheets with thousands of rows without overloading the model's context window.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Based on our experience, we believe these features open up new possibilities for what you can build with Claude.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Tool Search Tool</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<h3>The challenge</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>MCP tool definitions provide important context, but as more servers connect, those tokens can add up. Consider a five-server setup:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>GitHub: 35 tools (~26K tokens)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Slack: 11 tools (~21K tokens)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Sentry: 5 tools (~3K tokens)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Grafana: 5 tools (~3K tokens)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Splunk: 2 tools (~2K tokens)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>That's 58 tools consuming approximately 55K tokens before the conversation even starts. Add more servers like Jira (which alone uses ~17K tokens) and you're quickly approaching 100K+ token overhead. At Anthropic, we've seen tool definitions consume 134K tokens before optimization.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>But token cost isn't the only issue. The most common failures are wrong tool selection and incorrect parameters, especially when tools have similar names like <code>notification-send-user</code> vs. <code>notification-send-channel</code>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Our solution</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Instead of loading all tool definitions upfront, the Tool Search Tool discovers tools on-demand. Claude only sees the tools it actually needs for the current task.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/OxNt1wZqw9)<em>Tool Search Tool preserves 191,300 tokens of context compared to 122,800 with Claude's traditional approach.</em></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Traditional approach:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>All tool definitions loaded upfront (~72K tokens for 50+ MCP tools)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Conversation history and system prompt compete for remaining space</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Total context consumption: ~77K tokens before any work begins</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>With the Tool Search Tool:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Only the Tool Search Tool loaded upfront (~500 tokens)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Tools discovered on-demand as needed (3-5 relevant tools, ~3K tokens)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Total context consumption: ~8.7K tokens, preserving 95% of context window</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>This represents an 85% reduction in token usage while maintaining access to your full tool library. Internal testing showed significant accuracy improvements on MCP evaluations when working with large tool libraries. Opus 4 improved from 49% to 74%, and Opus 4.5 improved from 79.5% to 88.1% with Tool Search Tool enabled.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>How the Tool Search Tool works</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>The Tool Search Tool lets Claude dynamically discover tools instead of loading all definitions upfront. You provide all your tool definitions to the API, but mark tools with <code>defer_loading: true</code> to make them discoverable on-demand. Deferred tools aren't loaded into Claude's context initially. Claude only sees the Tool Search Tool itself plus any tools with <code>defer_loading: false</code> (your most critical, frequently-used tools).</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>When Claude needs specific capabilities, it searches for relevant tools. The Tool Search Tool returns references to matching tools, which get expanded into full definitions in Claude's context.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>For example, if Claude needs to interact with GitHub, it searches for &quot;github,&quot; and only <code>github.createPullRequest</code> and <code>github.listIssues</code> get loaded—not your other 50+ tools from Slack, Jira, and Google Drive.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This way, Claude has access to your full tool library while only paying the token cost for tools it actually needs.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Prompt caching note:</strong> Tool Search Tool doesn't break prompt caching because deferred tools are excluded from the initial prompt entirely. They're only added to context after Claude searches for them, so your system prompt and core tool definitions remain cacheable.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Implementation:</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>{\n &quot;tools&quot;: [\n // Include a tool search tool (regex, BM25, or custom)\n {&quot;type&quot;: &quot;tool_search_tool_regex_20251119&quot;, &quot;name&quot;: &quot;tool_search_tool_regex&quot;},\n\n // Mark tools for on-demand discovery\n {\n &quot;name&quot;: &quot;github.createPullRequest&quot;,\n &quot;description&quot;: &quot;Create a pull request&quot;,\n &quot;input_schema&quot;: {...},\n &quot;defer_loading&quot;: true\n }\n // ... hundreds more deferred tools with defer_loading: true\n ]\n}</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>For MCP servers, you can defer loading entire servers while keeping specific high-use tools loaded:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>{\n &quot;type&quot;: &quot;mcp_toolset&quot;,\n &quot;mcp_server_name&quot;: &quot;google-drive&quot;,\n &quot;default_config&quot;: {&quot;defer_loading&quot;: true}, # defer loading the entire server\n &quot;configs&quot;: {\n &quot;search_files&quot;: {\n&quot;defer_loading&quot;: false\n } // Keep most used tool loaded\n }\n}</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>The Claude Developer Platform provides regex-based and BM25-based search tools out of the box, but you can also implement custom search tools using embeddings or other strategies.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>When to use the Tool Search Tool</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Like any architectural decision, enabling the Tool Search Tool involves trade-offs. The feature adds a search step before tool invocation, so it delivers the best ROI when the context savings and accuracy improvements outweigh additional latency.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Use it when:</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Tool definitions consuming &gt;10K tokens</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Experiencing tool selection accuracy issues</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Building MCP-powered systems with multiple servers</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>10+ tools available</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p><strong>Less beneficial when:</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Small tool library (&lt;10 tools)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>All tools used frequently in every session</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Tool definitions are compact</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<h2>Programmatic Tool Calling</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<h3>The challenge</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Traditional tool calling creates two fundamental problems as workflows become more complex:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Context pollution from intermediate results</strong> : When Claude analyzes a 10MB log file for error patterns, the entire file enters its context window, even though Claude only needs a summary of error frequencies. When fetching customer data across multiple tables, every record accumulates in context regardless of relevance. These intermediate results consume massive token budgets and can push important information out of the context window entirely.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Inference overhead and manual synthesis</strong> : Each tool call requires a full model inference pass. After receiving results, Claude must &quot;eyeball&quot; the data to extract relevant information, reason about how pieces fit together, and decide what to do next—all through natural language processing. A five tool workflow means five inference passes plus Claude parsing each result, comparing values, and synthesizing conclusions. This is both slow and error-prone.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<h3>Our solution</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Programmatic Tool Calling enables Claude to orchestrate tools through code rather than through individual API round-trips. Instead of Claude requesting tools one at a time with each result being returned to its context, Claude writes code that calls multiple tools, processes their outputs, and controls what information actually enters its context window.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Claude excels at writing code and by letting it express orchestration logic in Python rather than through natural language tool invocations, you get more reliable, precise control flow. Loops, conditionals, data transformations, and error handling are all explicit in code rather than implicit in Claude's reasoning.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h4>Example: Budget compliance check</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Consider a common business task: &quot;Which team members exceeded their Q3 travel budget?&quot;</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>You have three tools available:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><code>get_team_members(department)</code> - Returns team member list with IDs and levels</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><code>get_expenses(user_id, quarter)</code> - Returns expense line items for a user</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><code>get_budget_by_level(level)</code> - Returns budget limits for an employee level</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p><strong>Traditional approach</strong> :</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Fetch team members → 20 people</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>For each person, fetch their Q3 expenses → 20 tool calls, each returning 50-100 line items (flights, hotels, meals, receipts)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Fetch budget limits by employee level</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>All of this enters Claude's context: 2,000+ expense line items (50 KB+)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Claude manually sums each person's expenses, looks up their budget, compares expenses against budget limits</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>More round-trips to the model, significant context consumption</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p><strong>With Programmatic Tool Calling</strong> :</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Instead of each tool result returning to Claude, Claude writes a Python script that orchestrates the entire workflow. The script runs in the Code Execution tool (a sandboxed environment), pausing when it needs results from your tools. When you return tool results via the API, they're processed by the script rather than consumed by the model. The script continues executing, and Claude only sees the final output.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/Xcgh1wZqw9)Programmatic Tool Calling enables Claude to orchestrate tools through code rather than through individual API round-trips, allowing for parallel tool execution.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Here's what Claude's orchestration code looks like for the budget compliance task:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>team = await get_team_members(&quot;engineering&quot;)\n\n# Fetch budgets for each unique level\nlevels = list(set(m[&quot;level&quot;] for m in team))\nbudget_results = await asyncio.gather(*[\n get_budget_by_level(level) for level in levels\n])\n\n# Create a lookup dictionary: {&quot;junior&quot;: budget1, &quot;senior&quot;: budget2, ...}\nbudgets = {level: budget for level, budget in zip(levels, budget_results)}\n\n# Fetch all expenses in parallel\nexpenses = await asyncio.gather(*[\n get_expenses(m[&quot;id&quot;], &quot;Q3&quot;) for m in team\n])\n\n# Find employees who exceeded their travel budget\nexceeded = []\nfor member, exp in zip(team, expenses):\n budget = budgets[member[&quot;level&quot;]]\n total = sum(e[&quot;amount&quot;] for e in exp)\n if total &gt; budget[&quot;travel_limit&quot;]:\n exceeded.append({\n &quot;name&quot;: member[&quot;name&quot;],\n &quot;spent&quot;: total,\n &quot;limit&quot;: budget[&quot;travel_limit&quot;]\n })\n\nprint(json.dumps(exceeded))</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>Claude's context receives only the final result: the two to three people who exceeded their budget. The 2,000+ line items, the intermediate sums, and the budget lookups do not affect Claude's context, reducing consumption from 200KB of raw expense data to just 1KB of results.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The efficiency gains are substantial:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Token savings</strong> : By keeping intermediate results out of Claude's context, PTC dramatically reduces token consumption. Average usage dropped from 43,588 to 27,297 tokens, a 37% reduction on complex research tasks.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Reduced latency</strong> : Each API round-trip requires model inference (hundreds of milliseconds to seconds). When Claude orchestrates 20+ tool calls in a single code block, you eliminate 19+ inference passes. The API handles tool execution without returning to the model each time.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li><strong>Improved accuracy</strong> : By writing explicit orchestration logic, Claude makes fewer errors than when juggling multiple tool results in natural language. Internal knowledge retrieval improved from 25.6% to 28.5%; <a href=\"https://arxiv.org/abs/2311.12983\" rel=\"noreferrer\" target=\"_blank\">GIA benchmarks</a> from 46.5% to 51.2%.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>Production workflows involve messy data, conditional logic, and operations that need to scale. Programmatic Tool Calling lets Claude handle that complexity programmatically while keeping its focus on actionable results rather than raw data processing.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>How Programmatic Tool Calling works</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<h4>1. Mark tools as callable from code</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Add code_execution to tools, and set allowed_callers to opt-in tools for programmatic execution:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>{\n &quot;tools&quot;: [\n {\n &quot;type&quot;: &quot;code_execution_20250825&quot;,\n &quot;name&quot;: &quot;code_execution&quot;\n },\n {\n &quot;name&quot;: &quot;get_team_members&quot;,\n &quot;description&quot;: &quot;Get all members of a department...&quot;,\n &quot;input_schema&quot;: {...},\n &quot;allowed_callers&quot;: [&quot;code_execution_20250825&quot;] # opt-in to programmatic tool calling\n },\n {\n &quot;name&quot;: &quot;get_expenses&quot;,\n \t...\n },\n {\n &quot;name&quot;: &quot;get_budget_by_level&quot;,\n\t...\n }\n ]\n}</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>The API converts these tool definitions into Python functions that Claude can call.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h4>2. Claude writes orchestration code</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Instead of requesting tools one at a time, Claude generates Python code:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>{\n &quot;type&quot;: &quot;server_tool_use&quot;,\n &quot;id&quot;: &quot;srvtoolu_abc&quot;,\n &quot;name&quot;: &quot;code_execution&quot;,\n &quot;input&quot;: {\n &quot;code&quot;: &quot;team = get_team_members('engineering')\\n...&quot; # the code example above\n }\n}</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<h4>3. Tools execute without hitting Claude's context</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>When the code calls get_expenses(), you receive a tool request with a caller field:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>{\n &quot;type&quot;: &quot;tool_use&quot;,\n &quot;id&quot;: &quot;toolu_xyz&quot;,\n &quot;name&quot;: &quot;get_expenses&quot;,\n &quot;input&quot;: {&quot;user_id&quot;: &quot;emp_123&quot;, &quot;quarter&quot;: &quot;Q3&quot;},\n &quot;caller&quot;: {\n &quot;type&quot;: &quot;code_execution_20250825&quot;,\n &quot;tool_id&quot;: &quot;srvtoolu_abc&quot;\n }\n}</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>You provide the result, which is processed in the Code Execution environment rather than Claude's context. This request-response cycle repeats for each tool call in the code.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h4>4. Only final output enters context</h4>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>When the code finishes running, only the results of the code are returned to Claude:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<pre><code>{\n &quot;type&quot;: &quot;code_execution_tool_result&quot;,\n &quot;tool_use_id&quot;: &quot;srvtoolu_abc&quot;,\n &quot;content&quot;: {\n &quot;stdout&quot;: &quot;[\\n{\\&quot;name\\&quot;: \\&quot;Alice\\&quot;, \\&quot;spent\\&quot;: 12500, \\&quot;limit\\&quot;: 10000}...]&quot;\n }\n}</code></pre>",
        "kind": "code",
        "cn": ""
      },
      {
        "en": "<p>This is all Claude sees, not the 2000+ expense line items processed along the way.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>When to use Programmatic Tool Calling</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Programmatic Tool Calling adds a code execution step to your workflow. This extra overhead pays off when the token savings, latency improvements, and accuracy gains are substantial.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Most beneficial when:</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Processing large datasets where you only need aggregates or summaries</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Running multi-step workflows with three or more dependent tool calls</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Filtering, sorting, or transforming tool results before Claude sees them</li></ul>",
        "kind": "list",
        "cn": ""
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
        "cn": ""
      },
      {
        "en": "<figure class=\"para-figure\"><img alt=\"\" src=\"https://aka.doubaocdn.com/s/gkpU1wZqw9\" loading=\"lazy\" /></figure>",
        "kind": "image",
        "cn": ""
      },
      {
        "en": "<p>Agents are only as effective as the tools we give them. We share how to write high-quality tools and evaluations, and how you can boost performance by using Claude to optimize its tools for itself.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>The <a href=\"https://modelcontextprotocol.io/docs/getting-started/intro\" rel=\"noreferrer\" target=\"_blank\">Model Context Protocol (MCP)</a> can empower LLM agents with potentially hundreds of tools to solve real-world tasks. But how do we make those tools maximally effective?</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In this post, we describe our most effective techniques for improving performance in a variety of agentic AI systems&lt;sup&gt;1&lt;/sup&gt;.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We begin by covering how you can:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Build and test prototypes of your tools</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Create and run comprehensive evaluations of your tools with agents</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Collaborate with agents like Claude Code to automatically increase the performance of your tools</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>We conclude with key principles for writing high-quality tools we've identified along the way:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Choosing the right tools to implement (and not to implement)</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Namespacing tools to define clear boundaries in functionality</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Returning meaningful context from tools back to agents</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Optimizing tool responses for token efficiency</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Prompt-engineering tool descriptions and specs</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/idZ01wZqw9)Building an evaluation allows you to systematically measure the performance of your tools. You can use Claude Code to automatically optimize your tools against this evaluation.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>What is a tool?</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>In computing, deterministic systems produce the same output every time given identical inputs, while <em>non-deterministic</em> systems—like agents—can generate varied responses even with the same starting conditions.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>When we traditionally write software, we're establishing a contract between deterministic systems. For instance, a function call like <code>getWeather(&quot;NYC&quot;)</code> will always fetch the weather in New York City in the exact same manner every time it is called.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Tools are a new kind of software which reflects a contract between deterministic systems and non-deterministic agents. When a user asks &quot;Should I bring an umbrella today?,&quot; an agent might call the weather tool, answer from general knowledge, or even ask a clarifying question about location first. Occasionally, an agent might hallucinate or even fail to grasp how to use a tool.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>This means fundamentally rethinking our approach when writing software for agents: instead of writing tools and <a href=\"https://modelcontextprotocol.io/\" rel=\"noreferrer\" target=\"_blank\">MCP servers</a> the way we'd write functions and APIs for other developers or systems, we need to design them for agents.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Our goal is to increase the surface area over which agents can be effective in solving a wide range of tasks by using tools to pursue a variety of successful strategies. Fortunately, in our experience, the tools that are most &quot;ergonomic&quot; for agents also end up being surprisingly intuitive to grasp as humans.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>How to write tools</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>In this section, we describe how you can collaborate with agents both to write and to improve the tools you give them. Start by standing up a quick prototype of your tools and testing them locally. Next, run a comprehensive evaluation to measure subsequent changes. Working alongside agents, you can repeat the process of evaluating and improving your tools until your agents achieve strong performance on real-world tasks.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Building a prototype</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>It can be difficult to anticipate which tools agents will find ergonomic and which tools they won't without getting hands-on yourself. Start by standing up a quick prototype of your tools. If you're using <a href=\"https://www.anthropic.com/claude-code\" rel=\"noreferrer\" target=\"_blank\">Claude Code</a> to write your tools (potentially in one-shot), it helps to give Claude documentation for any software libraries, APIs, or SDKs (including potentially the <a href=\"https://modelcontextprotocol.io/docs/sdk\" rel=\"noreferrer\" target=\"_blank\">MCP SDK</a>) your tools will rely on. LLM-friendly documentation can commonly be found in flat <code>llms.txt</code> files on official documentation sites (here's our <a href=\"https://docs.anthropic.com/llms.txt\" rel=\"noreferrer\" target=\"_blank\">API's</a>).</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Wrapping your tools in a <a href=\"https://modelcontextprotocol.io/docs/develop/connect-local-servers\" rel=\"noreferrer\" target=\"_blank\">local MCP server</a> or <a href=\"https://www.anthropic.com/engineering/desktop-extensions\" rel=\"noreferrer\" target=\"_blank\">Desktop extension</a> (DXT) will allow you to connect and test your tools in Claude Code or the Claude Desktop app.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To connect your local MCP server to Claude Code, run <code>claude mcp add &lt;name&gt; &lt;command&gt; [args...]</code>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>To connect your local MCP server or DXT to the Claude Desktop app, navigate to <code>Settings &gt; Developer</code> or <code>Settings &gt; Extensions</code>, respectively.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Tools can also be passed directly into <a href=\"https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview\" rel=\"noreferrer\" target=\"_blank\">Anthropic API</a> calls for programmatic testing.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Test the tools yourself to identify any rough edges. Collect feedback from your users to build an intuition around the use-cases and prompts you expect your tools to enable.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Running an evaluation</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Next, you need to measure how well Claude uses your tools by running an evaluation. Start by generating lots of evaluation tasks, grounded in real world uses. We recommend collaborating with an agent to help analyze your results and determine how to improve your tools. See this process end-to-end in our <a href=\"https://platform.claude.com/cookbook/tool-evaluation-tool-evaluation\" rel=\"noreferrer\" target=\"_blank\">tool evaluation cookbook</a>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/gG2V1wZqw9)Held-out test set performance of our internal Slack tools</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Generating evaluation tasks</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>With your early prototype, Claude Code can quickly explore your tools and create dozens of prompt and response pairs. Prompts should be inspired by real-world uses and be based on realistic data sources and services (for example, internal knowledge bases and microservices). We recommend you avoid overly simplistic or superficial &quot;sandbox&quot; environments that don't stress-test your tools with sufficient complexity. Strong evaluation tasks might require multiple tool calls—potentially dozens.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Here are some examples of strong tasks:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Schedule a meeting with Jane next week to discuss our latest Acme Corp project. Attach the notes from our last project planning meeting and reserve a conference room.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Customer ID 9182 reported that they were charged three times for a single purchase attempt. Find all relevant log entries and determine if any other customers were affected by the same issue.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Customer Sarah Chen just submitted a cancellation request. Prepare a retention offer. Determine: (1) why they're leaving, (2) what retention offer would be most compelling, and (3) any risk factors we should be aware of before making an offer.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>And here are some weaker tasks:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Schedule a meeting with jane@acme.corp next week.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Search the payment logs for <code>purchase_complete</code> and <code>customer_id=9182</code>.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Find the cancellation request by Customer ID 45892.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>Each evaluation prompt should be paired with a verifiable response or outcome. Your verifier can be as simple as an exact string comparison between ground truth and sampled responses, or as advanced as enlisting Claude to judge the response. Avoid overly strict verifiers that reject correct responses due to spurious differences like formatting, punctuation, or valid alternative phrasings.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>For each prompt-response pair, you can optionally also specify the tools you expect an agent to call in solving the task, to measure whether or not agents are successful in grasping each tool's purpose during evaluation. However, because there might be multiple valid paths to solving tasks correctly, try to avoid overspecifying or overfitting to strategies.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Running the evaluation</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We recommend running your evaluation programmatically with direct LLM API calls. Use simple agentic loops (<code>while</code>-loops wrapping alternating LLM API and tool calls): one loop for each evaluation task. Each evaluation agent should be given a single task prompt and your tools.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In your evaluation agents' system prompts, we recommend instructing agents to output not just structured response blocks (for verification), but also reasoning and feedback blocks. Instructing agents to output these <em>before</em> tool call and response blocks may increase LLMs' effective intelligence by triggering chain-of-thought (CoT) behaviors.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>If you're running your evaluation with Claude, you can turn on <a href=\"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#interleaved-thinking\" rel=\"noreferrer\" target=\"_blank\">interleaved thinking</a> for similar functionality &quot;off-the-shelf&quot;. This will help you probe why agents do or don't call certain tools and highlight specific areas of improvement in tool descriptions and specs.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>As well as top-level accuracy, we recommend collecting other metrics like the total runtime of individual tool calls and tasks, the total number of tool calls, the total token consumption, and tool errors. Tracking tool calls can help reveal common workflows that agents pursue and offer some opportunities for tools to consolidate.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>![](https://aka.doubaocdn.com/s/MHMG1wZqw9)Held-out test set performance of our internal Asana tools</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p><strong>Analyzing results</strong></p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Agents are your helpful partners in spotting issues and providing feedback on everything from contradictory tool descriptions to inefficient tool implementations and confusing tool schemas. However, keep in mind that what agents omit in their feedback and responses can often be more important than what they include. LLMs don't always <a href=\"https://www.anthropic.com/research/tracing-thoughts-language-model\" rel=\"noreferrer\" target=\"_blank\">say what they mean</a>.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Observe where your agents get stumped or confused. Read through your evaluation agents' reasoning and feedback (or CoT) to identify rough edges. Review the raw transcripts (including tool calls and tool responses) to catch any behavior not explicitly described in the agent's CoT. Read between the lines; remember that your evaluation agents don't necessarily know the correct answers and strategies.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Analyze your tool calling metrics. Lots of redundant tool calls might suggest some rightsizing of pagination or token limit parameters is warranted; lots of tool errors for invalid parameters might suggest tools could use clearer descriptions or better examples. When we launched Claude's <a href=\"https://www.anthropic.com/news/web-search\" rel=\"noreferrer\" target=\"_blank\">web search tool</a>, we identified that Claude was needlessly appending <code>2025</code> to the tool's <code>query</code> parameter, biasing search results and degrading performance (we steered Claude in the right direction by improving the tool description).</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Collaborating with agents</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>You can even let agents analyze your results and improve your tools for you. Simply concatenate the transcripts from your evaluation agents and paste them into Claude Code. Claude is an expert at analyzing transcripts and refactoring lots of tools all at once—for example, to ensure tool implementations and descriptions remain self-consistent when new changes are made.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In fact, most of the advice in this post came from repeatedly optimizing our internal tool implementations with Claude Code. Our evaluations were created on top of our internal workspace, mirroring the complexity of our internal workflows, including real projects, documents, and messages.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We relied on held-out test sets to ensure we did not overfit to our &quot;training&quot; evaluations. These test sets revealed that we could extract additional performance improvements even beyond what we achieved with &quot;expert&quot; tool implementations—whether those tools were manually written by our researchers or generated by Claude itself.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>In the next section, we'll share some of what we learned from this process.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h2>Principles for writing effective tools</h2>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>In this section, we distill our learnings into a few guiding principles for writing effective tools.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Choosing the right tools for agents</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>More tools don't always lead to better outcomes. A common error we've observed is tools that merely wrap existing software functionality or API endpoints—whether or not the tools are appropriate for agents. This is because agents have distinct &quot;affordances&quot; to traditional software—that is, they have different ways of perceiving the potential actions they can take with those tools</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>LLM agents have limited &quot;context&quot; (that is, there are limits to how much information they can process at once), whereas computer memory is cheap and abundant. Consider the task of searching for a contact in an address book. Traditional software programs can efficiently store and process a list of contacts one at a time, checking each one before moving on.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>However, if an LLM agent uses a tool that returns ALL contacts and then has to read through each one token-by-token, it's wasting its limited context space on irrelevant information (imagine searching for a contact in your address book by reading each page from top-to-bottom—that is, via brute-force search). The better and more natural approach (for agents and humans alike) is to skip to the relevant page first (perhaps finding it alphabetically).</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We recommend building a few thoughtful tools targeting specific high-impact workflows, which match your evaluation tasks and scaling up from there. In the address book case, you might choose to implement a <code>search_contacts</code> or <code>message_contact</code> tool instead of a <code>list_contacts</code> tool.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Tools can consolidate functionality, handling potentially <em>multiple</em> discrete operations (or API calls) under the hood. For example, tools can enrich tool responses with related metadata or handle frequently chained, multi-step tasks in a single tool call.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Here are some examples:</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<ul><li>Instead of implementing a <code>list_users</code>, <code>list_events</code>, and <code>create_event</code> tools, consider implementing a <code>schedule_event</code> tool which finds availability and schedules an event.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Instead of implementing a <code>read_logs</code> tool, consider implementing a <code>search_logs</code> tool which only returns relevant log lines and some surrounding context.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<ul><li>Instead of implementing <code>get_customer_by_id</code>, <code>list_transactions</code>, and <code>list_notes</code> tools, implement a <code>get_customer_context</code> tool which compiles all of a customer's recent &amp; relevant information all at once.</li></ul>",
        "kind": "list",
        "cn": ""
      },
      {
        "en": "<p>Make sure each tool you build has a clear, distinct purpose. Tools should enable agents to subdivide and solve tasks in much the same way that a human would, given access to the same underlying resources, and simultaneously reduce the context that would have otherwise been consumed by intermediate outputs.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Too many tools or overlapping tools can also distract agents from pursuing efficient strategies. Careful, selective planning of the tools you build (or don't build) can really pay off.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<h3>Namespacing your tools</h3>",
        "kind": "heading",
        "cn": ""
      },
      {
        "en": "<p>Your AI agents will potentially gain access to dozens of MCP servers and hundreds of different tools–including those by other developers. When tools overlap in function or have a vague purpose, agents can get confused about which ones to use.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Namespacing (grouping related tools under common prefixes) can help delineate boundaries between lots of tools; MCP clients sometimes do this by default. For example, namespacing tools by service (e.g., <code>asana_search</code>, <code>jira_search</code>) and by resource (e.g., <code>asana_projects_search</code>, <code>asana_users_search</code>), can help agents select the right tools at the right time.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>We have found selecting between prefix- and suffix-based namespacing to have non-trivial effects on our tool-use evaluations. Effects vary by LLM and we encourage you to choose a naming scheme according to your own evaluations.</p>",
        "kind": "text",
        "cn": ""
      },
      {
        "en": "<p>Agents might call the wrong tools, call the right tools with the wrong parameters, call too few tools, or process tool responses incorrectly. By selectively implementing tools whose names reflect natural subdivisions of tasks,</p>",
        "kind": "text",
        "cn": ""
      }
    ]
  }
];

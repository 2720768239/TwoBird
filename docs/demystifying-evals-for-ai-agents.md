[Engineering at Anthropic](https://www.anthropic.com/engineering)



# Demystifying evals for AI agents

Published Jan 09, 2026

The capabilities that make agents useful also make them difficult to evaluate. The strategies that work across deployments combine techniques to match the complexity of the systems they measure. 

## Introduction

Good evaluations help teams ship AI agents more confidently. Without them, it's easy to get stuck in reactive loops—catching issues only in production, where fixing one failure creates others. Evals make problems and behavioral changes visible before they affect users, and their value compounds over the lifecycle of an agent.

As we described in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), agents operate over many turns: calling tools, modifying state, and adapting based on intermediate results. These same capabilities that make AI agents useful—autonomy, intelligence, and flexibility—also make them harder to evaluate.

Through our internal work and with customers at the frontier of agent development, we've learned how to design more rigorous and useful evals for agents. Here's what's worked across a range of agent architectures and use cases in real-world deployment.

## The structure of an evaluation

An **evaluation** ("eval") is a test for an AI system: give an AI an input, then apply grading logic to its output to measure success. In this post, we focus on **automated evals** that can be run during development without real users.

**Single-turn evaluations**  are straightforward: a prompt, a response, and grading logic. For earlier LLMs, single-turn, non-agentic evals were the main evaluation method. As AI capabilities have advanced, **multi-turn evaluations**  have become increasingly common.

![](https://aka.doubaocdn.com/s/ZRKO1wZqw7)In a simple eval, an agent processes a prompt, and a grader checks if the output matches expectations. For a more complex multi-turn eval, a coding agent receives tools, a task (building an MCP server in this case), and an environment, executes an "agent loop" (tool calls and reasoning), and updates the environment with the implementation. Grading then uses unit tests to verify the working MCP server.

**Agent evaluations** are even more complex. Agents use tools across many turns, modifying state in the environment and adapting as they go—which means mistakes can propagate and compound. Frontier models can also find creative solutions that surpass the limits of static evals. For instance, Opus 4.5 solved a [𝜏2-bench](https://github.com/sierra-research/tau2-bench) problem about booking a flight by [discovering](https://www.anthropic.com/news/claude-opus-4-5) a loophole in the policy. It "failed" the evaluation as written, but actually came up with a better solution for the user.

When building agent evaluations, we use the following definitions:

- A **task** (a.k.a **problem**  or **test case** ) is a single test with defined inputs and success criteria.

- Each attempt at a task is a **trial** . Because model outputs vary between runs, we run multiple trials to produce more consistent results.

- A **grader** is logic that scores some aspect of the agent's performance. A task can have multiple graders, each containing multiple assertions (sometimes called **checks** )**.**

- A **transcript** (also called a **trace** or **trajectory** ) is the complete record of a trial, including outputs, tool calls, reasoning, intermediate results, and any other interactions. For the Anthropic API, this is the full messages array at the end of an eval run - containing all the calls to the API and all of the returned responses during the evaluation.

- The **outcome**  is the final state in the environment at the end of the trial. A flight-booking agent might say "Your flight has been booked" at the end of the transcript, but the outcome is whether a reservation exists in the environment's SQL database.

- An **evaluation harness**  is the infrastructure that runs evals end-to-end. It provides instructions and tools, runs tasks concurrently, records all the steps, grades outputs, and aggregates results.

- An **agent harness** (or **scaffold** ) is the system that enables a model to act as an agent: it processes inputs, orchestrates tool calls, and returns results. When we evaluate "an agent," we're evaluating the harness *and* the model working together. For example, [Claude Code](https://claude.com/product/claude-code) is a flexible agent harness, and we used its core primitives through the [Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview) to build our [long-running agent harness](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).

- An **evaluation suite**  is a collection of tasks designed to measure specific capabilities or behaviors. Tasks in a suite typically share a broad goal. For instance, a customer support eval suite might test refunds, cancellations, and escalations.

![](https://aka.doubaocdn.com/s/o7XK1wZqw7)Components of evaluations for agents.

## Why build evaluations?

When teams first start building agents, they can get surprisingly far through a combination of manual testing, [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food), and intuition. More rigorous evaluation may even seem like overhead that slows down shipping. But after the early prototyping stages, once an agent is in production and has started scaling, building without evals starts to break down.

The breaking point often comes when users report the agent feels worse after changes, and the team is "flying blind" with no way to verify except to guess and check. Absent evals, debugging is reactive: wait for complaints, reproduce manually, fix the bug, and hope nothing else regressed. Teams can't distinguish real regressions from noise, automatically test changes against hundreds of scenarios before shipping, or measure improvements.

We've seen this progression play out many times. For instance, Claude Code started with fast iteration based on feedback from Anthropic employees and external users. Later, we added evals—first for narrow areas like concision and file edits, and then for more complex behaviors like over-engineering. These evals helped identify issues, guide improvements, and focus research-product collaborations. Combined with production monitoring, A/B tests, user research, and more, evals provide signals to continue improving Claude Code as it scales.

Writing evals is useful at any stage in the agent lifecycle. Early on, evals force product teams to specify what success means for the agent, while later they help uphold a consistent quality bar.

[Descript](https://www.descript.com/)'s agent helps users edit videos, so they built evals around three dimensions of a successful editing workflow: don't break things, do what I asked, and do it well. They evolved from manual grading to LLM graders with criteria defined by the product team and periodic human calibration, and now regularly run two separate suites for quality benchmarking and regression testing. The [Bolt](https://bolt.new/) AI team started building evals later, after they already had a widely used agent. In 3 months, they built an eval system that runs their agent and grades outputs with static analysis, uses browser agents to test apps, and employs LLM judges for behaviors like instruction following.

Some teams create evals at the start of development; others add them once at scale when evals become a bottleneck for improving the agent. Evals are especially useful at the start of agent development to explicitly encode expected behavior. Two engineers reading the same initial spec could come away with different interpretations on how the AI should handle edge cases. An eval suite resolves this ambiguity. Regardless of when they're created, evals help accelerate development.

Evals also shape how quickly you can adopt new models. When more powerful models come out, teams without evals face weeks of testing while competitors with evals can quickly determine the model's strengths, tune their prompts, and upgrade in days. 

Once evals exist, you get baselines and regression tests for free: latency, token usage, cost per task, and error rates can be tracked on a static bank of tasks. Evals can also become the highest-bandwidth communication channel between product and research teams, defining metrics researchers can optimize against. Clearly, evals have wide-ranging benefits beyond tracking regressions and improvements. Their compounding value is easy to miss given that costs are visible upfront while benefits accumulate later.

## How to evaluate AI agents 

We see several common types of agents deployed at scale today, including coding agents, research agents, computer use agents, and conversational agents. Each type may be deployed across a wide variety of industries, but they can be evaluated using similar techniques. You don't need to invent an evaluation from scratch. The sections below describe proven techniques for several agent types. Use these methods as a foundation, then extend them to your domain.

### Types of graders for agents

Agent evaluations typically combine three types of graders: code-based, model-based, and human. Each grader evaluates some portion of either the transcript or the outcome. An essential component of effective evaluation design is to choose the right graders for the job.

Code-based graders

| **Methods** | **Strengths** | **Weaknesses** |
|---|---|---|
| • String match checks (exact, regex, fuzzy, etc.)
• Binary tests (fail-to-pass, pass-to-pass)
• Static analysis (lint, type, security)
• Outcome verification
• Tool calls verification (tools used, parameters)
• Transcript analysis (turns taken, token usage) | • Fast
• Cheap
• Objective
• Reproducible
• Easy to debug
• Verify specific conditions | • Brittle to valid variations that don't match expected patterns exactly
• Lacking in nuance
• Limited for evaluating some more subjective tasks |

Model-based graders

| **Methods** | **Strengths** | **Weaknesses** |
|---|---|---|
| Rubric-based scoringNatural language assertionsPairwise comparisonReference-based evaluationMulti-judge consensus | FlexibleScalableCaptures nuanceHandles open-ended tasksHandles freeform output | Non-deterministicMore expensive than codeRequires calibration with human graders for accuracy |

Human graders

| **Methods** | **Strengths** | **Weaknesses** |
|---|---|---|
| SME reviewCrowdsourced judgmentSpot-check samplingA/B testingInter-annotator agreement | Gold standard qualityMatches expert user judgmentUsed to calibrate model-based graders | ExpensiveSlowOften requires access to human experts at scale |

For each task, scoring can be weighted (combined grader scores must hit a threshold), binary (all graders must pass), or a hybrid.

### Capability vs. regression evals

**Capability or "quality" evals**  ask, "What can this agent do well?" They should start at a low pass rate, targeting tasks the agent struggles with and giving teams a hill to climb.

**Regression evals**  ask, "Does the agent still handle all the tasks it used to?" and should have a nearly 100% pass rate. They protect against backsliding, as a decline in score signals that something is broken and needs to be improved. As teams hill-climb on capability evals, it's important to also run regression evals to make sure changes don't cause issues elsewhere.

After an agent is launched and optimized, capability evals with high pass rates can "graduate" to become a regression suite that is run continuously to catch any drift. Tasks that once measured "Can we do this at all?" then measure "Can we still do this reliably?"

### Evaluating coding agents

**Coding agents**  write, test, and debug code, navigating codebases and running commands much like a human developer. Effective evals for modern coding agents usually rely on well-specified tasks, stable test environments, and thorough tests for the generated code.

Deterministic graders are natural for coding agents because software is generally straightforward to evaluate: does the code run and do the tests pass? Two widely used coding agent benchmarks, [SWE-bench Verified](https://www.swebench.com/SWE-bench/) and [Terminal-Bench](https://www.tbench.ai/), follow this approach. SWE-bench Verified gives agents GitHub issues from popular Python repositories and grades solutions by running the test suite; a solution passes only if it fixes the failing tests without breaking existing ones. LLMs have progressed from 40% to >80% on this eval in just one year. Terminal-Bench takes a different track: it tests end-to-end technical tasks, such as building a Linux kernel from source or training an ML model.

Once you have a set of pass-or-fail tests for validating the key *outcomes* of a coding task, it's often useful to also grade the transcript*.* For instance, heuristics-based code quality rules can evaluate the generated code based on more than passing tests, and model-based graders with clear rubrics can assess behaviors like how the agent calls tools or interacts with the user.

**Example: Theoretical evaluation for a coding agent**

Consider a coding task where the agent must fix an authentication bypass vulnerability. As shown in the illustrative YAML file below, one could evaluate this agent using both graders and metrics. 

```
task:
 id: "fix-auth-bypass_1"
 desc: "Fix authentication bypass when password field is empty and ..."
 graders:
 - type: deterministic_tests
 required: [test_empty_pw_rejected.py, test_null_pw_rejected.py]
 - type: llm_rubric
 rubric: prompts/code_quality.md
 - type: static_analysis
 commands: [ruff, mypy, bandit]
 - type: state_check
 expect:
 security_logs: {event_type: "auth_blocked"}
 - type: tool_calls
 required:
 - {tool: read_file, params: {path: "src/auth/*"}}
 - {tool: edit_file}
 - {tool: run_tests}
 tracked_metrics:
 - type: transcript
 metrics:
 - n_turns
 - n_toolcalls
 - n_total_tokens
 - type: latency
 metrics:
 - time_to_first_token
 - output_tokens_per_sec
 - time_to_last_token
```
Note that this example showcases the full range of available graders for illustration. In practice, coding evaluations typically rely on unit tests for correctness verification and an LLM rubric for assessing overall code quality, with additional graders and metrics added only as needed.

### Evaluating conversational agents

**Conversational agents** interact with users in domains like support, sales, or coaching. Unlike traditional chatbots, they maintain state, use tools, and take actions mid-conversation. While coding and research agents can also involve many turns of interaction with the user, conversational agents present a distinct challenge: the quality of the interaction itself is part of what you're evaluating. Effective evals for conversational agents usually rely on verifiable end-state outcomes and rubrics that capture both task completion and interaction quality. Unlike most other evals, they often require a second LLM to simulate the user. We use this approach in our [alignment auditing agents](https://alignment.anthropic.com/2025/automated-auditing/) to stress-test models through extended, adversarial conversations.

Success for conversational agents can be multidimensional: is the ticket resolved (state check), did it finish in <10 turns (transcript constraint), and was the tone appropriate (LLM rubric)? Two benchmarks that incorporate multidimensionality are [𝜏-Bench](https://arxiv.org/abs/2406.12045) and its successor, [τ2-Bench](https://arxiv.org/abs/2506.07982). These simulate multi-turn interactions across domains like retail support and airline booking, where one model plays a user persona while the agent navigates realistic scenarios.

**Example: Theoretical evaluation for a conversational agent**


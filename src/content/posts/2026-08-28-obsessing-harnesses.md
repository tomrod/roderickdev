---
title: Obsessing over AI agent harnesses
date: 2026-08-28
description: Obsessing over AI agent harnesses - or, the uphill battle agents face
category: AI, Economics, Information Theory
---

I spoke at a [recent panel on AI Adoption](https://www.rise8.us/prodacity) and presented part of Flamelit's AI operations playbook for governance. I enjoyed the experience -- Kent Beck (TDD & Extreme Programming) and Russell Miles (Learning Chaos Engineering / *A Software Enchiridion & Engineering Agents*) presented there, heavy tech like Anthropic, OpenAI, and Google sent reps. Folks were open about just how *weird* AI tools have become. The entire conference was invigorating to see the myriad of ideas of making things work with this mishmash of chaos LLMs have incorporated into our daily lives.

The experience has supercharged my desire to better understand something I was already evolving a bit for a few clients' workforce skills growth: **agent harnesses**.

When we make an improvement to an agent harness, ***how do we know the agent is actually getting better?***

# The problem I keep coming back to

A model is only one component of an AI agent. The system around it -- prompts, tools, memory, context, model routing, retries, evaluators, sub-agents, permissions, and orchestration -- increasingly determines what the agent can actually accomplish.

That surrounding system is generally called the harness.

And harnesses are becoming dynamic.

An agent may be able to:

- change its own prompts or operating instructions;
- write, revise, consolidate, or delete memory;
- change what information remains in its working context;
- select a different model for a task;
- create sub-agents using other models;
- alter how it routes work or evaluates results.

That creates a deceptively difficult question: ***How do we know the agent is actually getting better?***

The obvious answer is benchmark pre- and post-change. If the score increases, call it an improvement. 

Spoiler: I am beginning to think that is insufficient. Imagine an agent changes its memory strategy and improves benchmark performance by 5%. **Great** -- 5% can be a lot in context! But what if it also forgets information that allowed it to handle a class of problems the benchmark did not happen to sample? Or suppose it switches models and gets better average performance while becoming significantly less reliable on a subset of important tasks? Or its context-management system becomes much more efficient by aggressively removing information -- until three steps later, when something it discarded becomes important?

The benchmark says the system improved but it didn't!

# Improvement or optimization?

This distinction matters a lot beyond academic arguments about evaluation. Businesses are going to deploy agents that change their own operating state. And, frankly, I see cases where we want them to.

A useful agent should learn which tools work, remember relevant information, discard useless state, select appropriate models, and reorganize how it approaches recurring problems. But once we allow this, optimization and improvement stop being synonymous. An agent can optimize for the thing we measured while degrading something we did not.

Software engineering has dealt with versions of this problem for decades through regression testing, observability, testing, and controlled deployment. Often the manual processes many want to deploy agents into. Agentic systems make the problem harder because the thing being tested can increasingly modify the machinery that determines its own future behavior.

These exact things are what make harnesses something worth measuring.

# A different frame for the question

The research direction I am exploring starts with a simpler question: *When an agent changes, what did it retain, what did it lose, and what can it now do or distinguish that it could not before?*

That gives us three useful concepts:

1. Retention: Does the new agent still possess the capabilities and distinctions we previously established?
2. Loss: What previously observable behavior has disappeared or degraded?.
3. Gain: What genuinely new behavior or capability has appeared?

Conventional benchmarks are still useful in this. But the goal moves somewhat to become distinguishing: *this version scored higher* from *this version represents a demonstrably better state of the system.* I think it would surprise no one that are these not always the same thing.

There is some surprisingly old mathematics that may help here that may help, like Blackwell's theory of information from economics and decision theory. It lets us compare two information structures based on whether one structure preserves the useful distinctions available in another. I think that idea can be adapted to agent systems as a practical way to reason about whether a new harness state has genuinely improved upon the old one.

# Why engineers should care

For engineers, this could eventually lead to something analogous to regression testing for self-modifying agents. A harness update would not only need to beat the incumbent on a benchmark, but it would also need to demonstrate that it has not silently destroyed important behavior.

That becomes relevant to things like:
- memory compression
- context pruning
- model routing
- prompt evolution
- tool selection
- sub-agent architectures
- autonomous harness modification

Instead of asking only whether the change increased average success, we can ask whether it expanded the system's useful behavior without collapsing parts we deemed desirable in the old one.

I think that is a much stronger engineering claim.

# Why businesses should care

For businesses, the issue is governance and operational compliance. Organizations will increasingly have AI systems that change how they operate without someone manually deploying a new version every time. At that point, governance cannot mean freezing the system, because it has to mean knowing whether changes are beneficial. A useful measurement framework could help answer questions such as:

1. Did the agent actually improve, or merely improve on the metric we happened to watch?
2. Did a cheaper model-routing strategy preserve the capabilities we care about?
3. Did a memory optimization remove important institutional knowledge?
4. Can we safely promote an autonomously generated harness change?
5. Can we explain why the current agent configuration is preferable to the previous one?

That turns "AI governance" from a collection of policies into something much closer to an engineering discipline.

# Where I am going with this

There is already growing work in self-improving agents, dynamic memory, model routing, evolving harnesses, and multi-agent systems. What seems less settled is how we measure progress of the harness itself -- which is why I am obsessing over AI agent harnesses these past few days. Seriously -- the wee hours of the morning are spent digesting these ideas! *How do we measure whether a self-modifying agent is actually getting better, rather than just becoming different?* I suspect the answer sits somewhere between software measurement, economics, information theory, and a lot of practical experimentation. Which is, admittedly, exactly the kind of rabbit hole I enjoy falling into.

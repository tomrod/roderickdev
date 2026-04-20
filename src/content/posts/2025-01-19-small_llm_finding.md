---
title: Small LLM tricks
date: 2025-01-19
description: Short notes on useful things LLMs can do in practice -- a running list.
category: Applied ML
---

Today I report a few interesting things I have been able to get LLMs to do. These will be shorter posts in an effort to write more.

## Finding #1 -- Web tricks

LLMs have obviously taken the world by storm, and agentics are a major focus of interest for many that have yet to leave the lab in an ROI-useful way (adherents claim otherwise -- I'm still brushing up on product QA/control since that will be the liability Achilles heel for full deployments).

This list may be edited over time. Starting with shorter ones as I remember them.

1. **Search for location.** For LLMs that are web-enabled (e.g. ChatGPT, Perplexity), address search is silver- to gold-quality. My flow:
   1. Drop a document in for parsing. Specify tabular return, CSV, or MD for useful processing later.
   2. Prompt to extract all locations reported (usually names of offices).
   3. Web search to extract addresses.
   4. Web search to extract lat/lon of addresses.
   - *The good:* Samples seem to hit a 95% return when addresses exist. Web search is able to extract from Maps as part of the flow.
   - *The bad:* Drive time is all over the place, with no meaningful pattern. Suggests no drive time API capacity -- not unexpected since these are generally more expensive systems (Graphhopper included).

## Finding #2 -- Agents

Agents are LLMs that can plan and take sequences of actions rather than just respond to a single prompt. The model decides what to do next based on intermediate results. In practice this means a task like "pull this report, summarize the anomalies, and draft a Slack message" can run end-to-end without a human in the loop for each step.

The pattern that actually works in production is narrow scope with clear exit conditions. Broad open-ended agents still hallucinate their way into bad states. But a well-scoped agent -- do this specific thing, stop when done, flag if uncertain -- is genuinely useful and I've had good results deploying them for document review and structured data extraction pipelines.

The liability question I flagged in Finding #1 hasn't gone away. Agents that take actions (write to a database, send an email, call an API) need human review checkpoints until you have enough run history to trust the error rate. The ROI case gets easier once you can quantify that.

## Finding #3 -- Tool use

Tool use (also called function calling) is the mechanism that makes agents practical. You define a set of functions -- search a database, run a calculation, fetch a URL -- and the model decides when to call them and what to pass. The model doesn't execute the code; your system does, and returns the result back to the model.

The practical gain is that you stop trying to get the LLM to do things it's bad at (arithmetic, live data retrieval, precise formatting) and let it do what it's good at (reasoning about results, synthesizing outputs, deciding what to look up next). Separating those concerns improves reliability meaningfully.

Worth noting: tool definitions are prompt tokens. A large tool catalog adds latency and cost. I've had better results keeping the tool set small and purpose-specific per workflow rather than building one agent with 30 tools.

## Finding #4 -- Skills

Skills are reusable, composable prompt patterns -- essentially named procedures you can invoke by reference. The framing comes out of the Claude Code ecosystem but the concept generalizes. A skill might be "summarize this document in our house style" or "review this diff for security issues." You define it once, invoke it by name, and the behavior is consistent across uses.

The value is standardization. Instead of every team member writing their own prompt for the same task and getting different quality results, you define the skill centrally and everyone calls the same thing. It's the prompt engineering equivalent of a shared function library. Maintenance is also simpler -- update the skill definition once rather than hunting down every place a prompt was written inline.

## Finding #5 -- MCP

Model Context Protocol (MCP) is an open standard (Anthropic-originated, now broader) for connecting LLMs to external data sources and tools in a consistent way. Instead of writing custom integration code for every API or database you want an LLM to access, MCP provides a standard interface: an MCP server exposes resources and tools, and any MCP-compatible client (Claude, Cursor, others) can use them without bespoke wiring.

The practical effect is that context becomes modular. You can give an LLM access to your codebase, a database, a calendar, a Slack workspace -- each as a separate MCP server -- and compose them without rewriting the integration layer every time. For teams building internal AI tooling this is a meaningful reduction in plumbing work.

I'm still early in evaluating MCP for production use but the direction is right. The alternative -- custom tool integrations per model per workflow -- doesn't scale.

---
title: Thoughts and impressions on vibe coding
date: 2025-05-15
description: Notes on testing Vibe Coding after several months.
category: Applied ML
---

After testing Vibe Coding for a few months, some raw ideas:

1. SCAFFOLDING: Vibe Coding as an activity is a distinct form of coding. It doesn't handle complexity very well by itself - no silver bullet there - so it needs short, digestible tasks to accomplish, starting with project definition, moving to unit and integration tests, then finishing with individual code components. MVC pattern for backend and Component Generation for front end are bright spots and work well with scaffolding approaches. Leaving those patterns or using other code domains starts to cause some risk. 

2. SIZE: LLMs have a specific context window -- meaning the size of your code files, their system prompt, and your question can sometimes fall out of scope. The result is poor results. Google's Gemini has larger context windows, Anthropic's Claude has shorter context windows for the commonly used LLMs.

3. BIAS: LLMs are trained at a specific point in time and on a specific body of information. As a developer, this means it often chooses the popular answer on StackExchange versus the best approach for your domain. It also chooses library versions that often have CVEs and often aren't compatible. This flows down to available methods (e.g Pandas v1.x.x is commonly chosen in Python data work, which has different syntax and methods to Polars, DuckDB, and other dataframe options).

4. OPERATIONALIZATION: Test-driven development works very well. Perform load testing, integration testing, and security assessments in depth before pushing code into the wild.

NB (2026-04-21): Vibe coding continues to improve -- Claude Code and other tools have dramatically improved the developer experience and the output. This said, the `BIAS` and `OPERATIONALIZATION` points still remain elements that need work.
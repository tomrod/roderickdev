---
title: Domain AI
date: 2026-04-25
description: Why Applications of AI are a fruitful field
category: AI & Economics
---

The most commercially interesting AI work right now is not happening at the frontier. It's happening one layer down, where general-purpose models get pointed at specific domains and the hard work is figuring out what that actually means in practice.

I've spent the last several years doing this across healthcare, government, and technology. The pattern is consistent enough to be worth writing down.

## Why domain matters

A general model knows a lot about everything and not quite enough about anything in particular. That gap between "knows a lot" and "enough to be trusted" is where domain AI lives.

In healthcare, that gap shows up in terminology, regulatory context, liability sensitivity, and the fact that a confident wrong answer has different consequences than it does in most other fields. In government IT, it shows up in compliance requirements, data handling restrictions, and the procurement reality that shapes what can actually be deployed. In finance, it shows up in model risk management frameworks (SR 11-7 being the relevant one) and the auditability expectations that come with regulated decisions.

None of these constraints are exotic. They're just the conditions under which AI has to perform if it's going to be useful, and ignoring them is why a lot of AI projects fail to make it out of proof-of-concept.

## What makes domain applications fruitful

Specificity makes applications of AI fruitful. When you constrain the problem, you reduce the failure surface. A model that does one thing well in a known context is more deployable than a model that does many things adequately in unknown ones.

This is counterintuitive coming from the general capability framing that dominates AI discourse. More capable feels like it should mean more useful. In practice, "more capable" often means more ways to fail in ways that are hard to predict and harder to explain to stakeholders.

Domain applications also compound. The data, the vocabulary, the evaluation criteria, the trust (and this part takes time) build up over iterations in a way that general deployments don't. Teams that have been doing healthcare AI for three years have something that a team starting fresh doesn't, regardless of what foundation model they're using.

## The part that requires honesty

Domain AI is not a shortcut. The domain knowledge has to come from somewhere, and that usually means subject matter experts who need to be in the loop in a meaningful way (not just signing off at the end). It means evaluation frameworks that reflect how the system will actually be used, not just benchmark performance. It means deployment infrastructure that handles the edge cases the domain generates.

I've seen projects fail at each of those points. The ones that work treat the domain knowledge as the scarce resource, not the model.

That framing changes what the work looks like. The model is a starting point. The domain is the job.

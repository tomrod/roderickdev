# Introduction

Today I report in a few interesting things I have been able to get LLMs to do. These will be shorter blogposts in an effort to write more. With an astounding six blogposts over four years focused on personal tech findings, I can say that I need to up my game!

# Finding #1 - Web tricks

LLMs have obviously taken the world by storm, and agentics are a major focus of interest for many that have yet to leave the lab in an ROI-useful way (adherents claim otherwise -- I'm still brushing up on product QA/control since that will be the liability Achilles heel for full deployments).

This list may be edited over time. I'm starting with shorter ones as I remember this.

1. Search for location: For LLMs that are web-enabled (e.g ChatGPT, Perplexity), address search is silver- to gold-quality. My flow looks something like

    1. Drop a document in for parsing. Specify tabular return, CSV, or MD for useful processing later.
    2. Prompt to extract all locations reported (usually names of offices)
    3. Web search to extract addresses 
    4. Web search to extract lat/lon of addresses
    5. The good: Samples seem to hit a 95% return when addresses exist (caveat there). Web search is able to extract from Maps as part of search flow.
    6. The bad: drive time is all over the place, with no meaningful pattern. Suggests no drive time API capacity -- not unexpected since these are generally more expensive systems (Graphhopper included)

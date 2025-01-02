---
layout: post
title: The limiting factor for AI
---

`Megaface` is a dataset of scraped face images used by dozens if not hundreds of commercial projects. It was originally housed and maintained by the University of Washington and freely available, though it is now [permission-walled](http://megaface.cs.washington.edu/dataset/download.html).  <!--more-->

A recent discussion from [Exposing.AI](https://exposing.ai/megaface/) explores the licensing and legal problems associated with Megaface, such as not respecting terms of licenses from sources for commercial versus non-commercial use, and whether that is necessary remains to be clarified in the courts. (For example, web scraping of publicly facing information is commonly said to be fair game). The treatment of this dataset, and the dataset being subsequently considered toxic (e.g. [retracted from paperswithcode](https://paperswithcode.com/dataset/megaface)) mean that those who downloaded this data and built their models to date have a competitive advantage.

This suggests that AI's limiting factor will continue to be the economics of labeling and data collection. The Megaface experience shows the cost won't always be monotonically decreasing. If Megaface is representative and public datasets are taken private more in the future, I could see the perverse incentive for data product builders to hoard data despite GDPR and CCPA discouraging unnecessary collection and hoarding.

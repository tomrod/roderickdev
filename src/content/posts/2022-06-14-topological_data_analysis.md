---
title: Topology as a data science tool
date: 2022-06-14
description: Why UMAP deserves a place in your segmentation toolkit, and where TDA goes next.
category: Methods
---

Most clustering methods make assumptions about shape. K-means assumes blobs. DBSCAN assumes density. Gaussian mixture models assume, well, Gaussians. For a lot of real data -- especially high-dimensional data from messy domains like healthcare -- none of those assumptions hold, and you end up either forcing structure that isn't there or tuning hyperparameters until the result looks plausible.

UMAP (Uniform Manifold Approximation and Projection) takes a different angle. The core idea is that high-dimensional data lives on or near a lower-dimensional manifold, and UMAP tries to learn that manifold's structure and preserve it in the embedding. It's topologically motivated: it builds a weighted graph representing the local connectivity of points, then optimizes a low-dimensional layout that keeps that connectivity intact.

## What this looks like in practice

The practical payoff over PCA is significant. PCA preserves global variance. UMAP preserves local *and* global structure -- nearby points in the original space stay nearby, but clusters that are genuinely separated in high dimensions also separate in the embedding. For visualization this is immediately useful. For segmentation it's transformative.

In data I've used UMAP as both an exploratory lens and as a preprocessing step before clustering. Run UMAP to 2–3 dimensions, then cluster on the embedding rather than the raw feature space. The results are more interpretable, more stable, and -- importantly -- more meaningful to domain experts who can actually look at the picture and argue with it.

The structure you find this way tends to be real. Subpopulations that only appear when you look at the right combination of features. Flares off a main cluster that turn out to be clinically distinct. Bridges between groups that suggest a continuum rather than a hard boundary. None of that is visible to k-means running on 40 features.

## The caveats worth knowing

UMAP is not a distance-preserving method. The distances between points in a UMAP plot are not Euclidean distances in the original space, and the distances *between* clusters are especially unreliable. Treat the 2D picture as a navigational aid, not ground truth.

It also has hyperparameters -- `n_neighbors` and `min_dist` -- that meaningfully change the embedding. More neighbors pulls the global structure into focus; fewer emphasizes local clusters. Worth running a few configurations before settling on one.

## Where TDA goes further

UMAP is a gateway into a broader field called topological data analysis. If you like it, you should consider also learning about the Mapper algorithm. Rather than projecting to a fixed embedding, Mapper builds a graph that captures the shape of the data at multiple scales -- connected components, loops, voids. It can surface structure that even a good UMAP won't show. I haven't run it in production yet but the theory is compelling and the Python tooling (`giotto-tda`, `scikit-tda`) has gotten approachable enough to experiment with.

For now, UMAP alone earns its place in the toolkit. If you're still doing all your segmentation in raw feature space, start there.

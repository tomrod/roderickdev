### Relationships in data

One of the basic questions of analysis is "how are these two things related?" Most analysts are familiar with **Pearson** correlation, which describes how two continuous variables fit a line. But, there are other ways to assess model-free relationships. The table below identifies a handful of common metrics to know

| Name | Formula | Description | First variable type | Second variable type | 
| --- | --- | --- | --- | --- | 
| Pearson $r_p$ | $\rho_{X,Y} = \frac{cov(X,Y)}{\sigma_X \sigma_Y}$  | Measure of strength for linear relationship | Continuous | Continuous |
| Spearman $r_s$ | $\rho_{R(X),R(Y)} = \frac{cov(R(X),R(Y))}{\sigma_{R(X)} \sigma_{R(Y)}};\quad R(Z) = rank(Z) $| Measure of strength for monotonic relationship | Continuous  | Continuous  |
| Kendall's $\tau$ | $\tau = \frac{2}{n(n-1)} \sum_{i<j} sgn(x_i-x_j)sgn(y_i-y_j)$ | Measure of ordinal association | Ordinal | Ordinal  |
| Mutual Information |  |  |  |  |
| Transfer Entropy | $T_{X \rightarrow Y}$ = H(Y_t | Y_{t-1:t-L}) - H(Y_t | Y_{t-1:t-L}, X_{t-1:t-L}) | Non-parameteric measure of the amount of directed transfer of information between two random processes, generalization of Granger causality, and uses Shannon entropy $H$ | time-series | time-series |
| Cramér's V  |  | Measure of association between nominal variables | Nominal | Nominal |

Of course, one of the best ways to understand your data is to **plot** it. This gets harder in higher dimensions, and will be discussed in a future post, but it remains one of the simplest ways to observe relationships.
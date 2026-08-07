---
title: "Subqueries"
confluence_id: 26214402
source: "Subqueries_26214402.html"
---
Different reasons to use a sub-query:

1. For ease of understanding and modularity
   1. You don’t need it at all, but is nice to have.
   2. E.g. putting computations in sub-queries rather than a messy outer select. DuCharme’s book illustrates this.
2. For improved efficiency:
   1. You don’t need it on small data sets, but it can make all the difference for large ones.
   2. E.g. some of the Schneider queries
3. To get what you need, at all.
   1. It is impossible to get the result you want without it, ignoring scale or efficiency.
   2. E.g. when you need to do one operation first, get your hands on that data and do a separate operation after that.

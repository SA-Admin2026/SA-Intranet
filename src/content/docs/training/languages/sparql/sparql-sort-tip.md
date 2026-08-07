---
title: "SPARQL sort tip"
confluence_id: 2334523397
source: "SPARQL-sort-tip_2334523397.html"
---
Here is result ordering technique I've found useful at least twice now.

This allowed me to group all statements by subject but put the rdf:type at the top of each group:

```

SELECT  \*

WHERE

  { ?s  ?p  ?o

    BIND(if(( ?p = rdf:type ), 1, 2) AS ?p\_rank)

  }

ORDER BY ?s ?p\_rank

```

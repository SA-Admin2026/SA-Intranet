---
title: "Neo4j"
confluence_id: 2280554497
source: "Neo4j_2280554497.html"
---
## A few brief talking points about Neo4j.

Neo4j is very slick and great for creating siloed proprietary point solutions with no data semantics that are beautiful to look at. In particular,

1. There is no schema language. Apparently they regard the benefits of not being forced to have a schema all the time as justification for making it impossible to have a schema at any time.
2. There are no globally unique IRIs, so data integration is painful.
3. The Neo4j query language is proprietary.

The often-touted PRO of labeled property graphs in general and Neo4j in particular over RDF graphs is that you can put information on a link.  RDF\* and SPARQL\* address that concern and offer greater functionality than Neo4j does. In Neo4j, you can only put literals on a link. With RDF\* and SPARQL\*, you can connect a link to other IRIs. RDF\* and SPARQL\* are not formal standards yet, but are supported by a growing number of triple stores.

## So why is Neo4j so successful?

Standard practice is:

1. silos everywhere
2. data that no one know the meaning of
3. data integration is difficult or impossible
4. applications are not so beautiful

So Neo4j comes along and ignores 1-3 and does a spectacular job of 4, so in relative terms it’s a big step forward. They also spend a ton on sales & marketing. It has worked.  Most semantic web solutions focus on 1-3 and less so on 4. I think Neo4j dominates the knowledge graph space, from a commercial perspective.  Maybe 70% of all KG applications are Neo4j. Don’t quote me, but I’ve seen data along those lines.

## More details

Below is a much longer description of Neo4j based on my attending a seminar in March, 2015. No doubt, much has changed.

[![](https://semarts.atlassian.net/wiki/download/thumbnails/2280554497/Neo4j-vs.-TripleStores.docx?version=2&modificationDate=1660768022753&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/2280554497/2280292356.docx)

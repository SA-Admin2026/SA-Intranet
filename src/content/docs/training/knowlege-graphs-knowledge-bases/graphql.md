---
title: "GraphQL"
confluence_id: 738623592
source: "GraphQL_738623592.html"
---

If you prefer to consume your introduction as video as opposed to reading a spec, [Introduction to GraphQL](https://www.youtube.com/watch?v=v-JC7TAr4mQ) does a pretty good job.

NOTE: There is a lot of junk, start watching at 17:00. The whole video is 2h 14 min long. It's hands-on, getting you to follow along and use the tooling.

# GraphQL vs. RDF

This is from Boris in response to Fernando (from Platts) not wanting to be locked into RDF and interest in GraphQL.

Well, GraphQL, in spite of the misleading ‘graph’ in the title, is just a structured way to ask a question. The server is free to use a graph DB, or a relational DB, or NoSQL, or tea leaves and goat entrails to answer said question – as long as the return shape is compliant to the query shape, the user doesn’t care. GraphQL has several advantages over SPARQL:

1. Its inherent hierarchical nature is very compatible with how people perceive their data. The fact that the hierarchy is preserved during the return can save client-side effort to ‘unroll’ aggregations or reduce the size of the result set by removing duplicates.
2. The format is very intuitive when rolling by hand, and is actually structured data (as opposed to a string SPARQL query) when generating via a tool. So friendly both towards ad hoc querying and automatically built queries. (as a matter of fact, one of the wishes on the SPARQL 1.2 CG is to create a JSON format to express SPARQL queries)

GraphQL falls short when your query needs grow more complex”

1. its linear hierarchy is unable to express more complex graph patterns
2. there is no concept of named graph as such
3. it has no way to handle  variable-length paths unless the server mucks with how the query is evaluated
4. There is no standard support for namespaces (though some vendors have added it in query options)

Basically, there is no GraphQL query that can’t be expressed as RDF, but the reverse is not true. If GraphQL *can* cover all your needs, then sure, it’s an easy way to pull that data. But if you build your system on an inherently limited foundation and then find yourself running into the limitations, the refactoring cost would be significant.

# Grasp

[Grasp](https://github.com/dbcls/grasp) is an ontology-based mapper of GraphQL queries into SPARQL. It is written as a JavaScript npm application, so it can be run server-side in a docker container or inside the browser.

# GraphQL support by Stardog

Stardog web site describes their support this way:

**GraphQL Business Benefit**

More developers know and are learning GraphQL than all the graph query languages combined. Which is ironic since GraphQL isn’t really a graph query language. Yes, we know, software is weird! GraphQL in Stardog is the easiest and most gentle learning curve to the Enterprise Knowledge Graph and all the attendant data unification benefits it provides.

This will benefit our enterprise customers both now and in the future in several ways:

1. Gentler learning curve means faster to production with existing developers and technical staff
2. More developer tooling that just works with Stardog means increased productivity of developers and technical staff
3. No need to couple some *au courant* Javascript framework directly to Stardog…GraphQL acts as a loose coupling between the front-end and all the enterprise data
4. Loose coupling is important but so are short sight lines, and GraphQL fronting Stardog’s Knowledge Graph capabilities means shorter sight lines between the concerns of enterprise and data architects and UX/front-end developers. Everybody wins.

<https://www.stardog.com/blog/graphql-and-paths/>

Boris commented:

Stardog supports graphql by translating it to rdf, because graphql is less powerful,  and not really intended to interact with graph databases- it's just a more efficient way to query a REST API. Fernando talked a lot more about Neo4J, because he, and I quote,  "loves Cipher ". Which is a different dichotomy altogether,  one that may be resolved by the efforts to bridge property graphs with RDF like the Berlin workshop.

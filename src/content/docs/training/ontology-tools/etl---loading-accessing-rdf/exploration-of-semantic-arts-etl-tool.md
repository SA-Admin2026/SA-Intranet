---
title: "Exploration of Semantic Arts ETL Tool"
confluence_id: 3190915073
source: "Exploration-of-Semantic-Arts-ETL-Tool_3190915073.html"
---

# Why?

- Performance problems with TARQL, SPARQL Anything
- Performance problems using SERVICE clause
- Bulky syntax and unknown support reduce client adoption
- Improve maintainability of mappings

# Requirements

- Production-level **performance** ETL tool
- Mapping language accessible to ontologist
- Clean syntax for complex mappings

  - Reduce repetition of destination RDF (i.e TARQL construct-clause)
  - Reduce repetition of transformation steps (i.e TARQL where-clause)
  - Keep (or possibly improve) TARQLs easy to read modeling patterns
- Need to be able to fetch from SPARQL endpoint (batch)
- Access data directly from source (i.e doesn’t need to export to csv file first)

# Tool Options

1. One of the below existing tools meets all of the requirements
2. One of the below existing tools meets a lot of the requirements and to meet the rest of the requirements we can:

   1. extend the syntax
   2. implement a more performant processing engine
3. Create our own syntax and ETL processing engine

# Evaluate existing tools

- OTTR (ottr.xyz)

  - Existing syntax is better for adoption
  - Existing syntax is better for production environments
  - We could build performant engine around
- R2RML

  - Are there engines separate from triple store?

    - R2RML-F (Ontotext)
    - Ontop
    - Morph-RDB
    - D2RQ (partial R2RML)
- YARRRML

  - Are there engines separate from triple store?

    - RMLMapper
    - RMLStreamer
    - RMLMapper Docker Image
    - RMLMapper Web App
    - YARRRML Parser

# Next Steps

- Create complex csv data example to compare the three existing tools ([Irina Filitovich](https://semarts.atlassian.net/wiki/people/638e7b93f6c85b343c0cc019?ref=confluence))

- 2 fields mapped to 1 field
- 1 field mapped to 2 fields
- Same RDF object mapped in different ways

- Create examples using above tools

- OTTR ([Katherine Studzinski](https://semarts.atlassian.net/wiki/people/712020:80ad6b98-6899-43fa-a4b9-928733c11e6c?ref=confluence))
- R2RML ([Irina Filitovich](https://semarts.atlassian.net/wiki/people/638e7b93f6c85b343c0cc019?ref=confluence))
- YARRRML ([Neil Graham](https://semarts.atlassian.net/wiki/people/5a904d0a6ac8fb5278d298ac?ref=confluence))

- Evaluate if examples meet requirements

# Questions

- Is there a way to avoid post processing?

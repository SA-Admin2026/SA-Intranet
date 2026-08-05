---
title: "Production-grade ETL Approach - ideas"
confluence_id: 3085697026
source: "Production-grade-ETL-Approach---ideas_3085697026.html"
---

### SPARQL-based POC ETL approach - generalization

```
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
CONSTRUCT {
?subject_iri skos:prefLabel ?label .
}
WHERE {
BIND("IRI forming logic" AS ?subject_iri)
BIND("label forming logic" AS ?label)
}
```

TARQL, SPARQL Anything, etc. are great tools to develop POC ETL pipelines, however when it comes to transitioning the project from POC to production they are not providing the required performance, or they are limited to tabular source data, and the code is not easy for clients to maintain without specialists due to most data manipulation logic being implemented using a niche syntax of SPARQL.

Below is the description of the evolving approach to production-grade ETL that aims to:

- support the performance needs of a production knowledge graph product
- flexibly work with a range of source data formats (tables, json, etc.)
- implement data manipulation logic in a widely used programming language
- preserve the insight into the graph structure that SPARQL-based methods provide

### Production-grade ETL approach conceptual outline

1. Each mapping is a `.py`, `.jl`, or other suitable programming language file that generates RDF for a portion of the knowledge graph, just like a TARQL mapping would.
2. Using the capabilities of the selected programming language we will be able to iterate over tabular source data rows, json objects, or other most other iterable structured elements that the source data might be represented as.
3. All the variables we typically define in the `WHERE` clause of a TARQL mapping will be defined using the capabilities of the selected programming language as variables.

   1. have a string where we define prefixes in turtle notation that are parsed into variables to use for definition of variables containing IRI values. E.g. in pseudocode:

      ```
      # define prefixes in turtle notation in a string
      prefixes = """
      PREFIX ex: <https://example.org/>
      """
      # parse prefixes into variables, here ex = "https://example.org/"
      ...
      # define subject_iri variable using current iteration row of column 0 from source_data_array
      subject_iri = "<" + ex + source_data_array[0][i] + ">"
      # define label variable using current iteration row of column 1 from source_data_array
      label = source_data_array[1][i]
      ```
   2. using the capabilities of the selected programming language, here we can also query SPARQL endpoints to emulate TARQL’s `SERVICE` clause.
4. Using a parameterized string we will generate a SPARQL `CONSTRUCT` query for each iterable structured element of the source data (1 table row, 1 json object, etc.). E.g. in pseudocoded query below placeholders `subject_iri` and `label` are filled using values of the respective variables defined in the same mapping file.

   ```
   query = """
   PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
   CONSTRUCT {{
   {{"{subject_iri}"}} skos:prefLabel {{"{label}"}} .
   }}
   WHERE {{}} # always remains empty
   """
   query.format(
     subject_iri=subject_iri,
     label=label
   )
   ```

   If the parameterized string could look exactly like a SPARQL `CONSTRUCT` query, that would be great - we’d need a custom library that recognizes `?xxx` as a placeholder to insert value of a defined variable.

   ```
   query = """
   PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
   CONSTRUCT {
   ?subject_iri skos:prefLabel ?label .
   }
   WHERE {} # always remains empty
   """
   ```
5. Using these mapping files, a batch processing utility generates local RDF files each for a configured number (batch size) of source data elements and loads them to a SPARQL endpoint of the knowledge graph
6. Named graph IRI can be specified in the query inside the mapping file with a `GRAPH` statement or as a parameter to the batch processing utility

### POC implementation

I am exploring a solution that involves two files - a template file containing the parameterized RDF, and a Julia code file. The code file reads the input (JSON in this case), iterates over it and binds template parameters to appropriately prepared values. The code file executes the templating mechanism and outputs the RDF data, similar to tarql and SParql.Anything.

I am using the Julia software platform and its libraries Mustache.jl (templating), JSON.jl, and Serd.jl for RDF support. By most benchmarks Julia is

To date I have converted more than half of the

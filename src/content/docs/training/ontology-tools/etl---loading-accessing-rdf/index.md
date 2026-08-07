---
title: "ETL - Loading / Accessing RDF"
confluence_id: 2208890885
source: "2208890885.html"
---
## Tools:

- TARQL - [TARQL](/languages/sparql/tarql-sparql-for-tables/):
- SPARQL Anything - <https://sparql-anything.cc/> [GitHub - SPARQL-Anything](https://github.com/SPARQL-Anything/sparql.anything/)
- R2RML - <https://www.w3.org/TR/r2rml/>
- [LinkedPipes - https://linkedpipes.com/](https://linkedpipes.com/)
- eccenca.com
- <https://derwen.ai/docs/kgl/> and [morph-kgc/morph-kgc: Powerful RDF Knowledge Graph Generation with RML Mappings](https://github.com/morph-kgc/morph-kgc)
- <https://github.com/DataTreehouse/maplib>
- [Reasonable Ontology Templates (OTTR)](https://ottr.xyz/) which is used by maplib
- [Silk - The Linked Data Integration Framework](http://silkframework.org/) which forms the basis of Eccenca’s offering
- linkML - <https://linkml.io/linkml/data/index.html>
- Fluree Sense (structured data) <https://flur.ee/fluree-products-ai-ml-data-pipeline/>
- Fluree CAM (unstructured data) <https://flur.ee/sense-unstructured/>
- Morph-KGC - mapping engine that claims to be scalable and to support various source data formats, uses YARRRML for mappings - <https://pypi.org/project/morph-kgc/>
- YARRRML - a concise form of encoding R2RML and RML rules as YAML - <https://rml.io/yarrrml/>

## Virtualizing Data Access:

- OnTop Framework - <https://ontop-vkg.org/> - Ontop is a Virtual Knowledge Graph system. It exposes the content of arbitrary relational databases as knowledge graphs. These graphs are virtual, which means that data remains in the data sources instead of being moved to another database. Ontop translates [SPARQL queries](https://www.w3.org/TR/sparql11-query/) [(opens new window)](https://www.w3.org/TR/sparql11-query/) expressed over the knowledge graphs into SQL queries executed by the relational data sources. It relies on [R2RML mappings](https://www.w3.org/TR/r2rml/) [(opens new window)](https://www.w3.org/TR/r2rml/) and can take advantage of lightweight ontologies.

## [Production-grade ETL Approach](/ontology-tools/etl---loading-accessing-rdf/production-grade-etl-approach---ideas/):

TARQL, SPARQL Anything, etc. are great tools to develop POC ETL pipelines, however when it comes to transitioning the project from POC to production they are not providing the required performance, or they are limited to tabular source data, and the code is not easy for clients to maintain without specialists. The title of this section is linked to a page that described an evolving approach to production-grade ETL that preserves the insight into the graph structure that SPARQL-based methods provide.

## Systems used industrially

The following are systems used industrially by others, but ones that Semantic Arts is pretty-much unaware of at the moment:

**Ottr templates** provide a reliable and scalable way to develop a processing pipeline to convert CSV etc into RDF. The templates are like function - they have parameters that can be typed. Templates can call other templates, so a library of functions can be developed and composed into transformation pipelines. Used extensively by Data Treehouse and by Cap Gemini. The signatures of the template functions provide a simple and effective way to document each template.

**Morph-KGC** is a stack that is tailored to Databricks use (IF: this statement needs to be validated). Used by [Derwen.ai](http://Derwen.ai) and others. It takes a R2RML mapping approach, but Python functions can be deployed in the pipeline. With considerable input from U Ghent, this is a significant part of the [Derwen.ai](http://Derwen.ai) course on creating knowledge graphs (see [kglab](https://www.derwen.ai/docs/kgl/) )

Morph-KGC claims to support various input data formats:

- Relational databases: [MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/), [Oracle](https://www.oracle.com/database/), [Microsoft SQL Server](https://www.microsoft.com/sql-server), [MariaDB](https://mariadb.org/), [SQLite](https://www.sqlite.org/).
- Tabular files: [CSV](https://en.wikipedia.org/wiki/Comma-separated_values), [TSV](https://en.wikipedia.org/wiki/Tab-separated_values), [Excel](https://www.microsoft.com/en-us/microsoft-365/excel), [Parquet](https://parquet.apache.org/documentation), [Feather](https://arrow.apache.org/docs/python/feather.html), [ORC](https://orc.apache.org/), [Stata](https://www.stata.com/), [SAS](https://www.sas.com/), [SPSS](https://www.ibm.com/analytics/spss-statistics-software), [ODS](https://en.wikipedia.org/wiki/OpenDocument).
- Hierarchical files: [JSON](https://www.json.org/), [XML](https://www.w3.org/TR/xml/).
- In-memory data structures: [Python Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries), [DataFrames](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html).
- Cloud data lake solutions: [Databricks](https://www.databricks.com/), [Snowflake](https://www.snowflake.com/).
- Property graph databases: [Neo4j](https://neo4j.com/), [Kùzu](https://kuzudb.com/).

## In this section

- [Exploration of Semantic Arts ETL Tool](/ontology-tools/etl---loading-accessing-rdf/exploration-of-semantic-arts-etl-tool/)
- [maplib (Data Treehouse)](/ontology-tools/etl---loading-accessing-rdf/maplib-data-treehouse/)
- [Production-grade ETL Approach - ideas](/ontology-tools/etl---loading-accessing-rdf/production-grade-etl-approach---ideas/)

---
title: "2025 Ontology Tooling Development Project"
confluence_id: 2860417039
source: "2025-Ontology-Tooling-Development-Project_2860417039.html"
---
## **Requirements and general thoughts about what to include**

| **Requirement Category** | **Description** | **Priority** | **Notes** |
| --- | --- | --- | --- |
| Sub-module (as referenced below) |  | 1, 1 |  |
| Documentation tools and patterns |  | 1 |  |
| rationalisation and de-duplication of existing resources |  | 1 |  |
| RDF validation tooling - tooling to validate the structure of RDF |  | 1 |  |
| Specification of ontology quality - with tests and metrics |  | 2 | If this means organizing and combining the existing sets of ontology quality queries, then 1. If it means specifying what ontology quality is, then I think that’s out-of-scope. |
| Diagramming - both automated and ad-hoc |  | 2 |  |
| Automated loading and re-loading of triplestores |  | 2 |  |
| Ontology Presentation | Tools for presenting ontologies to audiences. | 2 |  |
| Triplification tools | Support for TARQL, SPARQL Anything (materialized), R2RML/Ontop (non-materialized) | 3 |  |
| RDF canonicalisation |  | 3 |  |
| RDF Skolemization | The process of replacing every blank node in a graph with a globally unique IRI. | 3 |  |
| Conversion of RDF to Vertex/Edge graphs |  | 3 |  |
| Foundational ontologies and shims |  | 3 |  |
| data analysis tools |  | 3 |  |
| validation of SHACL shapes | Supporting pagination over focus nodes for large data graphs | 3 |  |
| RDF Database abstraction | Setting up a general RDF Database class and subclasses for each implementation (e.g. Jena/Fuseki, AllegroGraph) |  |  |

## **Existing Resources that seem relevant and need to be triaged**

| **Resource** | **Description** | **Status** | **Requirement Category** | **Author or Maintainer** | **Comments** |
| --- | --- | --- | --- | --- | --- |
| <https://github.com/semanticarts/NewProjectSetupTools> | A set of scripts and other helpful things to help start up a new ontology project. Defines parts of a suggested workflow for ontology projects. | Maintained |  | Peter W. | See [New Project Setup Tools - Diagram](/ontology-tools/2025-ontology-tooling-development-project/new-project-setup-tools---diagram/) |
| <https://github.com/semanticarts/gist> | gist is Semantic Arts' minimalist upper ontology for the enterprise. | Maintained |  | Semantic Arts | - I think this is out of scope for the present project (Steven) |
| <https://github.com/semanticarts/gistBFO> | A BFO compatible version of Gist | Maintained |  | Kate S., Dylan A. | - I think this is out of scope for the present project (Steven) |
| <https://github.com/semanticarts/ontology-toolkit> | Broad collection of tools for developing and deploying ontologies. Used in the gist release process. | Maintained | Ontology packaging | Boris P. et al. | Last update Dec 2024 |
| <https://github.com/semanticarts/ontology-documentation> | ontology documentation tools | Maintained | Documentation Tools and Patterns | Peter W. | Last update Aug 2023 |
| <https://github.com/semanticarts/csv-summary> | Generates a basic analysis of a CSV to an XLSX workbook. | Maintained | Data Analysis Tools | Boris P, Kate S | Last update Aug 2024 |
| <https://github.com/semanticarts/ontology-developer-kit> | Utility components for ontology development  Add as a submodule into ontology-developer-kit in the root directory of the parent repository. |  |  | Rebecca Y., Boris P. | - This is the sub-module that can be pulled into other repos |
| <https://github.com/semanticarts/third-party-tools> |  | Deleted |  |  |  |
| <https://github.com/semanticarts/pytarql> | Python implementation of TARQL, based on RDFLib. |  |  | Boris P. | - Last updated May 2020 |
| <https://github.com/semanticarts/shacl-validator> | Node.js SHACL Validator, for validate of SHACL code. |  | Validation of SHACL Shapes | Boris P. | - Last updated Jan 2019 |
| <https://github.com/semanticarts/OntoUtils> | useful utilities that can be used with ontologies | Undocumented/unsupported |  | Ted Hills | - Last updated Jun 2018 |
| <https://github.com/semanticarts/ontodoc> | ontodoc generates static documentation for OWL ontologies using both rdfs:comments and features of the ontology (class hierarchy relationships, property types, etc). | Undocumented/unsupported | Documentation Tools and Patterns | Scott Ogle | - Last updated 2015 - based on SPARQL and Jinja Templates. might have some useful material |
| <https://github.com/semanticarts/undefined-concepts-tool> |  | ARCHIVED/MADE PRIVATE DUE TO LACK OF GENERAL APPLICABILITY. |  | Rebecca Y. Dylan A. |  |
| <https://github.com/semanticarts/copyright> |  |  |  |  |  |
| <https://github.com/semanticarts/jupyter_graph_notebook> |  |  |  |  |  |
| <https://github.com/semanticarts/dmap> |  |  |  |  |  |
| <https://github.com/semanticarts/tarql> |  |  | Triplification Tools |  | This is the version of TARQL that we should use because it doesn’t include the log4j vulnerability. Not sure how we should make sure this is what people are using, but maybe you can figure that out. We don’t otherwise have need for a separate repository. (RY) |
| <https://github.com/semanticarts/shacl-test-framework> |  |  | RDF Validation Tooling |  | I built on this to create a more flexible version for IDA, since we need to validate data rather than just the ontologies and I wanted to simplify writing test cases. The script is more complex as a result, and it resides right now in the IDA repo, but I could pull it into its own repo or include it with what you’re doing if there’s interest. (RY) |
| <https://github.com/semanticarts/competency-questions-ui> | A web-app for answering competency questions. |  |  | Danny H., Eddie T., Boris P., Jamie G. | - Last updated Nov 2021 |
| <https://github.com/semanticarts/ontology-presenter> | “Slow Reveal” - Javascript application to create dynamic ontology presentations. |  | Ontology Presentation |  |  |
| <https://github.com/semanticarts/rdf-toolkit> |  | Deleted |  |  |  |
| <https://github.com/semanticarts/rdf-git> |  |  |  |  |  |
| <https://github.com/semanticarts/shacl-print> |  |  |  |  |  |
| <https://github.com/semanticarts/hierarchy-view> |  |  |  |  |  |
| <https://github.com/semanticarts/Metadata> |  |  |  |  |  |
| <https://github.com/semanticarts/python-excel-editor> |  |  |  |  |  |
| <https://github.com/semanticarts/tarql-plus> |  |  |  |  |  |
| <https://github.com/semanticarts/tarql-shacl> |  |  |  |  |  |
| <https://github.com/semanticarts/serializer> |  |  |  |  |  |
| <https://github.com/semanticarts/SPARQL_Hygiene_Queries_Framework> |  |  |  |  |  |
| <https://github.com/semanticarts/Excel-Triples> |  |  |  |  |  |
| <https://github.com/semanticarts/rdf-generator> |  |  |  |  |  |
| <https://github.com/semanticarts/infer-tool> |  |  |  |  |  |
| <https://github.com/semanticarts/onto-unit-tests> |  |  |  |  |  |
| <https://github.com/semanticarts/Excel2RDF-4-MS> |  |  |  |  |  |
| <https://github.com/semanticarts/shapeServer> |  |  |  |  |  |
| <https://github.com/semanticarts/shapeEditor> |  |  |  |  |  |
| <https://github.com/semanticarts/shape-editor> |  |  |  |  |  |
| <https://github.com/semanticarts/autograph> |  |  |  |  |  |
| <https://github.com/semanticarts/excel2RDF-GUI> |  |  |  |  |  |
| <https://github.com/semanticarts/queryviewer-react> |  |  |  |  |  |
| <https://github.com/semanticarts/queryviewer> |  |  |  |  |  |
| <https://github.com/semanticarts/ontodoc-web> |  |  |  |  |  |
| <https://github.com/semanticarts/ontodoc> |  |  | Documentation Tools and Patterns |  |  |
| <https://github.com/semanticarts/modified-WebVOWL> |  |  | Documentation Tools and Patterns |  |  |
| <https://github.com/semanticarts/theseus> | An ontology builder for humans |  |  | Scott Ogle, Priyank Bambhrolia, Tristan | - Last updated 2016 |
| <https://github.com/semanticarts/theseus> |  |  |  |  | Is this a duplicate of the previous item? Or is it just something that looks identical but contains no parts from the original? |
| <https://github.com/semanticarts/clipsal-r2rml> |  |  |  |  |  |
| <https://github.com/semanticarts/allegria> | A lightweight wrapper for Allegrograph |  |  | Scott Ogle | - Last updated 2016 |
| <https://github.com/semanticarts/r2rml-reports> | Generate a summary of each rr:TriplesMap and provide some other useful information, like which maps cover each class and which predicates are being used. |  | Documentation Tools and Patterns | Scott Ogle | - Last updated 2016 |
| <https://github.com/semanticarts/kg-quality/> | Queries to ensure quality of TBox, ABox, and CBox |  |  |  |  |
| [SPARQL: Generic queries applicable to any store](/languages/sparql/sparql-generic-queries-applicable-to-any-store/) | RDF quality queries |  |  |  |  |

Other items, not in our GitHub include:

- <https://sparql-anything.cc/> - SPARQL-Anything
- <https://rml.io/docs/rml/rmlvsr2rml/> RML and R2RML
- <https://vocbench.uniroma2.it/>
- <https://ottr.xyz/> - OTTR Templates
- <https://protege.stanford.edu/> -Protege Editor
- <https://code.visualstudio.com/> VS Code and various extensions
- <http://attempto.ifi.uzh.ch/aceview/> ACE and ACE-View [see also <https://www.linkedin.com/pulse/controlled-natural-language-revolutionize-privacy-combining-krog-wgrrf/> ]
- <https://rightfield.org.uk/> - Semantics By Stealth
- <https://zazuko.com/products/expressive-rdf-mapper/>

## In this section

- [Favourite Editor and Packages](/ontology-tools/2025-ontology-tooling-development-project/favourite-editor-and-packages/)
- [File Structure Decisions](/ontology-tools/2025-ontology-tooling-development-project/file-structure-decisions/)
- [Git - Templates, Submodules and Worktrees](/ontology-tools/2025-ontology-tooling-development-project/git---templates-submodules-and-worktrees/)
- [New Project Setup Tools - Diagram](/ontology-tools/2025-ontology-tooling-development-project/new-project-setup-tools---diagram/)
- [Using GitHub to template and supply projects](/ontology-tools/2025-ontology-tooling-development-project/using-github-to-template-and-supply-projects/)

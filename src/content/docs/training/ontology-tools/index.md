---
title: "Ontology Tools"
confluence_id: 2434170881
source: "Ontology-Tools_2434170881.html"
---

- [In-House Tools](#OntologyTools-In-HouseTools)
  - [In-House Tool Wish List](#OntologyTools-In-HouseToolWishList)
- [Third-Party Tools](#OntologyTools-Third-PartyTools)
  - [Third-Party Tool Builds](#OntologyTools-Third-PartyToolBuilds)
  - [Visualization Tools](#OntologyTools-VisualizationTools)
  - [Ontology Editing Tools](#OntologyTools-OntologyEditingTools)
  - [Manual Diagramming Tools](#OntologyTools-ManualDiagrammingTools)
  - [SHACL Tools](#OntologyTools-SHACLTools)
  - [Git and Git Clients](#OntologyTools-GitandGitClients)
  - [EDM RDF Serializer](#OntologyTools-EDMRDFSerializer)
  - [Data Conversion and Ingest](#OntologyTools-DataConversionandIngest)
  - [Proprietary Ontology Conversion](#OntologyTools-ProprietaryOntologyConversion)
  - [Robot](#OntologyTools-Robot)
  - [Jena](#OntologyTools-Jena)
  - [Reasoners](#OntologyTools-Reasoners)
  - [SPARQL Tools](#OntologyTools-SPARQLTools)
  - [Python Libraries](#OntologyTools-PythonLibraries)
  - [Documentation Tools](#OntologyTools-DocumentationTools)
  - [Miscellaneous Development Tools](#OntologyTools-MiscellaneousDevelopmentTools)
  - [Text Editors](#OntologyTools-TextEditors)
  - [Triple Stores](#OntologyTools-TripleStores)
  - [Best Practices Documentation](#OntologyTools-BestPracticesDocumentation)
- [Wants List](#OntologyTools-WantsList)

# In-House Tools

- [ontology-toolkit](https://github.com/semanticarts/ontology-toolkit)

  - Suite of tools for updating, exporting, releasing, and visualizing ontologies
- [Find undefined concepts](https://github.com/semanticarts/undefined-concepts-tool)

  - Find concepts that are referenced but undefined in an ontology.
- [Materialize subclass inferences](https://github.com/semanticarts/gist/blob/develop/tools/subclass_inferences/materialize_subclass_inferences.py)

  - In gist GitHub repo
  - Materializes subclass inferences into a separate ontology file for import into environments that don’t support certain types of inferencing (e.g., OWL RL reasoners, as in RDFox).
- [CSV Summarizer](https://github.com/semanticarts/csv-summary)

  - Generates a basic analysis of a CSV to an XLSX workbook.
- Slow Reveal

  - Separate GitHub repo
  - Semantic Arts instance [link?]
- Commit / push continuous integration (CI) tools

  - Authoritative version is currently in gist GitHub repository and has been copied into several other repositories, but intent is to create sub-module for inclusion without copying; see wish list.
  - [pre-commit](https://github.com/semanticarts/gist/blob/develop/tools/pre-commit) hook (Note that this hook calls additional pre-commit hook(s)
  - [CI](https://github.com/semanticarts/gist/blob/develop/.github/workflows/validate.yaml) - performs checks on push to the remote GitHub repository
- sparqllite

  - Command line tool to run SPARQL queries against a folder of .trig files.
- [versioning-ontology](https://github.com/semanticarts/versioning-ontology)

  - In progress as of 2023-09-06
  - Ontology for versioning and managing ontology dependencies.

## In-House Tool Wish List

- Sub-module to allow easy re-use of CI / pre-commit tools
- Intelligent SPARQL editor usable by motivated analysts

  - Tree heat map of how many instances of each class
  - Dynamic expansion of the sort of thing onto\_tool --graphic does
- Abstract Syntax Tree for prettifying SPARQL queries.

# Third-Party Tools

## Third-Party Tool Builds

- Versions of third-party development tools pre-approved and -built for use by Semantic Arts ontologists and developers.

  - [GitHub repo](https://github.com/semanticarts/third-party-tools)

    - [Fork of Andy Seaborne’s fork of EDM RDF Serializer](https://github.com/semanticarts/third-party-tools/blob/main/rdf-toolkit.jar) (rdf-toolkit.jar). This fork updates Jena to version 4 to close the log4j security vulnerability.
    - [TARQL 1.3](https://github.com/semanticarts/third-party-tools/blob/main/tarql-1.3-bin.zip)

## Visualization Tools

- [Turtle viewer](https://semantechs.co.uk/turtle-editor-viewer/) (Peter)

  - Real-time Turtle visualizer
- RDFScribe (Eddie)

  - Private repo
- [Visualization Tools - Technical and Research Resources - Confluence (atlassian.net)](/ontology-tools/visualization-tools/)
- [AWS Graph Explorer](https://github.com/aws/graph-explorer) - a no-code graph (LPG & triplestore) explorer/visualiser
- [AWS Graph Notebook](https://github.com/aws/graph-notebook) - A Jupyter notebook that facilitates notebook-style ‘literate’ programming using Jupyter languages, SPARQL and Gremlin/Cypher. Provides connections through http/s protocol to data stores

## Ontology Editing Tools

- [Protégé](https://protege.stanford.edu/)
- [VSCode](https://code.visualstudio.com/) has various plugins and syntax highlighters
- [Turtle Validator](http://ttl.summerofcode.be/): Online Turtle syntax checker (with good error messages)
- [Turtle viewer](https://semantechs.co.uk/turtle-editor-viewer/) (Peter)

## Manual Diagramming Tools

- OmniGraffle (MacOS only; purchase)
- [Lucidchart](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj73IPfj5aBAxVMR0cBHbXLDaAYABAAGgJxdQ&ase=2&gclid=Cj0KCQjwxuCnBhDLARIsAB-cq1rZGLMM3eMGWhAv1eRcYcMXwCFE1koFUKh2CHBDnIrbAibV9uGs5DcaAgzWEALw_wcB&ei=7oL4ZL6rLa2n5NoP4vq2qAg&ohost=www.google.com&cid=CAESbeD2HqLdzPDO_qjCceafwuiB21khe0GrQ9EOKeO7xIeoMJpXWOPb-XURXn-yOU0nFoMxGdrY5H1c1YZz6RShHmpKP6UAQB_ofYujmwo-5PrcjPMhwahAuY9O3Uvke0VMcQfLO5cdzbBNu7Ehxmo&sig=AOD64_1AQA2Gkrh7k-tymbQSuHf2ecCc3Q&q&sqi=2&nis=4&adurl&ved=2ahUKEwi-2v3ej5aBAxWtE1kFHWK9DYUQ0Qx6BAgKEAE)
- [Draw.io](https://app.diagrams.net/)
- yED
- Mermaid
- Good 'ol 3x5 notecards

## SHACL Tools

- [SHACL Playground](https://shacl.org/playground/): Test SHACL against sample data

## Git and Git Clients

- [git Reference](https://git-scm.com/docs)
- [Tower](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiUgPuYkJaBAxUiRXIKHaiKC9YYABAAGgJxdQ&ase=2&gclid=Cj0KCQjwxuCnBhDLARIsAB-cq1oy_ekucjE2T0KDumPBe82E7ErKb08n9sHTnGkTq5JjpQXVo2TmD4oaAnR_EALw_wcB&ei=aIP4ZPP7CoWl5NoP3bSX8A8&ohost=www.google.com&cid=CAESbeD2PM8k5PEp4EKEUwothe3DIGKxcnS2tscV5HugUNXdBSQeIq8tWPxfQtnihEAg5wUFJBy_u5l_ahIBNrfDphzckvka_pdQcFdit-YXnNsR6rEJPFh053QnSMB4eNEkCZjPxjpn3bTnYi6V3zA&sig=AOD64_136z2BG86WCCPL7nB0bMaVTff3Ww&q&sqi=2&nis=4&adurl&ved=2ahUKEwjzz_GYkJaBAxWFElkFHV3aBf4Q0Qx6BAgLEAE) (purchase)
- [GitKraken](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiUgPuYkJaBAxUiRXIKHaiKC9YYABABGgJxdQ&ase=2&gclid=Cj0KCQjwxuCnBhDLARIsAB-cq1qlVmPoSUZwuIsXY2-Q_dRDjA1Pl2_cgCBrQ75HqTpHyKdRkQompKYaAsvZEALw_wcB&ei=aIP4ZPP7CoWl5NoP3bSX8A8&ohost=www.google.com&cid=CAESbeD2PM8k5PEp4EKEUwothe3DIGKxcnS2tscV5HugUNXdBSQeIq8tWPxfQtnihEAg5wUFJBy_u5l_ahIBNrfDphzckvka_pdQcFdit-YXnNsR6rEJPFh053QnSMB4eNEkCZjPxjpn3bTnYi6V3zA&sig=AOD64_3JcpV4Po4w5HuY5t-6uw3U0ImvrQ&q&sqi=2&nis=4&adurl&ved=2ahUKEwjzz_GYkJaBAxWFElkFHV3aBf4Q0Qx6BAgKEAE) (purchase)
- [GitHub Desktop](https://desktop.github.com/) (free)
- [Source Tree](https://www.sourcetreeapp.com/) (free)

## [EDM RDF Serializer](https://github.com/edmcouncil/rdf-toolkit)

- See [Third-Party Tool Builds](https://semarts.atlassian.net/wiki/spaces/TRR/pages/2434170881/Ontology+Tools#In-House-Tool-Wish-List) for correct version.
- Serializes RDF from and to various formats (RDF/XML, Turtle, etc.).
- Use to normalize OWL files and eliminate noise in git diffs
- Use to check OWL syntax.
- Currently invoked from our pre-commit hook.

## Data Conversion and Ingest

- [TARQL](https://github.com/tarql/tarql/releases) (see [Third-Party Tool Builds](https://semarts.atlassian.net/wiki/spaces/TRR/pages/2434170881/Ontology+Tools#In-House-Tool-Wish-List) for correct version)
- [SPARQL Anything](https://github.com/SPARQL-Anything/sparql.anything)

  - Converts data in multiple formats to RDF, including CSV and JSON.

## Proprietary Ontology Conversion

- Palantir Foundry to OWL <https://github.com/cloudbadal007/foundry-ontology-open/blob/master/README.md>

## [Robot](http://robot.obolibrary.org/)

- Suite of command line tools for validating, reasoning, querying, and other functions.
- [Validate Profile](http://robot.obolibrary.org/validate-profile): Determines whether an ontology conforms to a specified OWL profile.

## [Jena](https://jena.apache.org/)

- Java framework for building semantic web applications
- [Command Line Tools](https://jena.apache.org/documentation/tools/): RIOT, SPARQL, SHACL

## Reasoners

- Protégé (HermiT, Pellet)
- [HermiT](http://www.hermit-reasoner.com/) - Protégé plugin, command line, Java applications
- [Pellet](https://github.com/stardog-union/pellet) - Jena

## SPARQL Tools

- <https://leipert.github.io/vsb/>
- [Jena ARQ functions](https://jena.apache.org/documentation/query/library-function.html)

## Python Libraries

- [RDFLib](https://rdflib.readthedocs.io/)

  - Python library for RDF processing
- [pySHACL](https://github.com/RDFLib/pySHACL)

  - Use as a Python module or stand-alone command line tool
- [Owlready2](https://owlready2.readthedocs.io/en/v0.44/intro.html)
- [owlrl](https://pypi.org/project/owlrl/)

  - Implementation of the OWL2 RL profile

## Documentation Tools

- [Kindle book creator](https://github.com/semanticarts/ontology-documentation)
- [Widoco](https://github.com/dgarijo/Widoco)

  - Generates HTML documentation from OWL files.
  - Based on [LODE](https://essepuntato.it/lode/) (Live OWL Documentation Environment)
- [StackEdit](https://stackedit.io/app#)

  - Markdown editor with side-by-side preview
  - Use in browser or download app.

## Miscellaneous Development Tools

- [Docker](https://www.docker.com/) containerization environment

## Text Editors

Editors with plugins for development and syntax highlighting, etc.

- [VSCode](https://code.visualstudio.com/)

## Triple Stores

- [Semantic Arts AllegroGraph instance](https://agraph.semanticarts.com/#)
- [Semantic Arts Stardog instance](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/824770651/Stardog+License)
- Partner license for [RDFox](https://www.oxfordsemantic.tech/rdfox) (get latest version from Rebecca, Dylan, Jamie)
- [Semantic Arts GraphDB instance](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/1474604/Ontotext+GraphDB)

## Best Practices Documentation

- [gist Style Guide](https://github.com/semanticarts/gist/blob/develop/docs/gistStyleGuide.md)
- [Ontology metrics research](/ontology-quality-metrics/)
- [Confluence pages](/ontology/ontology-design-patterns-and-best-practices/)

# Wants List

Put here functions and facilities that you might find helpful



Collapse all

[Expand all](#)  
[Collapse all](#)

## In this section

- [2025 Ontology Tooling Development Project](/ontology-tools/2025-ontology-tooling-development-project/)
- [ETL - Loading / Accessing RDF](/ontology-tools/etl---loading-accessing-rdf/)
- [Protege](/ontology-tools/protege/)
- [R2RML](/ontology-tools/r2rml/)
- [RDF Serializer](/ontology-tools/rdf-serializer/)
- [SPARQL Anything](/ontology-tools/sparql-anything/)
- [Visualization](/ontology-tools/visualization/)
- [Visualization Tools](/ontology-tools/visualization-tools/)
- [VocBench](/ontology-tools/vocbench/)


<topic-progress data-topic="Ontology Tools" data-lessons="[{&quot;route&quot;:&quot;/training/ontology-tools/2025-ontology-tooling-development-project/&quot;,&quot;title&quot;:&quot;2025 Ontology Tooling Development Project&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/catalog-file/&quot;,&quot;title&quot;:&quot;Catalog File&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/custom-protege-tabs/&quot;,&quot;title&quot;:&quot;Custom Protege Tabs&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/display-of-inferred-classes/&quot;,&quot;title&quot;:&quot;Display of Inferred Classes&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/etl---loading-accessing-rdf/&quot;,&quot;title&quot;:&quot;ETL - Loading / Accessing RDF&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/etl---loading-accessing-rdf/exploration-of-semantic-arts-etl-tool/&quot;,&quot;title&quot;:&quot;Exploration of Semantic Arts ETL Tool&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/2025-ontology-tooling-development-project/favourite-editor-and-packages/&quot;,&quot;title&quot;:&quot;Favourite Editor and Packages&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/2025-ontology-tooling-development-project/file-structure-decisions/&quot;,&quot;title&quot;:&quot;File Structure Decisions&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/2025-ontology-tooling-development-project/git---templates-submodules-and-worktrees/&quot;,&quot;title&quot;:&quot;Git - Templates, Submodules and Worktrees&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/giving-protege-more-memory/&quot;,&quot;title&quot;:&quot;Giving Protege more memory&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/importing-tricks-with-protg/&quot;,&quot;title&quot;:&quot;Importing Tricks with Protégé&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/etl---loading-accessing-rdf/maplib-data-treehouse/&quot;,&quot;title&quot;:&quot;maplib (Data Treehouse)&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/materializing-triples/&quot;,&quot;title&quot;:&quot;Materializing Triples&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/2025-ontology-tooling-development-project/new-project-setup-tools---diagram/&quot;,&quot;title&quot;:&quot;New Project Setup Tools - Diagram&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/etl---loading-accessing-rdf/production-grade-etl-approach---ideas/&quot;,&quot;title&quot;:&quot;Production-grade ETL Approach - ideas&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/&quot;,&quot;title&quot;:&quot;Protege&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/protege-5x-nested-turtle-import-bug/&quot;,&quot;title&quot;:&quot;Protege 5.x Nested Turtle Import Bug&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/protege-user-mailing-list/&quot;,&quot;title&quot;:&quot;Protege User Mailing List&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/protege/protg-vs-tobpraid-composer-tbc/&quot;,&quot;title&quot;:&quot;Protégé vs. Tobpraid Composer (TBC)&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/r2rml/&quot;,&quot;title&quot;:&quot;R2RML&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/rdf-serializer/&quot;,&quot;title&quot;:&quot;RDF Serializer&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/2025-ontology-tooling-development-project/using-github-to-template-and-supply-projects/semantic-operations-repository-template-sort/&quot;,&quot;title&quot;:&quot;Semantic Operations Repository Template (SORT)&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/sparql-anything/&quot;,&quot;title&quot;:&quot;SPARQL Anything&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/visualization/tom-sawyer-software/&quot;,&quot;title&quot;:&quot;Tom Sawyer Software&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/visualization/tools-for-visualization-of-rdf/&quot;,&quot;title&quot;:&quot;Tools for Visualization of RDF&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/2025-ontology-tooling-development-project/using-github-to-template-and-supply-projects/&quot;,&quot;title&quot;:&quot;Using GitHub to template and supply projects&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/visualization/&quot;,&quot;title&quot;:&quot;Visualization&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/visualization-tools/&quot;,&quot;title&quot;:&quot;Visualization Tools&quot;},{&quot;route&quot;:&quot;/training/ontology-tools/vocbench/&quot;,&quot;title&quot;:&quot;VocBench&quot;}]">
</topic-progress>

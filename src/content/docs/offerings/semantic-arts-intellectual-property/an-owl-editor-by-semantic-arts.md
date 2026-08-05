---
title: "An OWL Editor by Semantic Arts"
confluence_id: 2371452929
source: An-OWL-Editor-by-Semantic-Arts_2371452929.html
---

# An OWL Editor by Semantic Arts

Protégé is one of only a few OWL editors and ontology design tools available. Most of us use Protégé not because we love it, but because the alternatives are generally worse. TopBraid EDG does not support OWL inferencing, and is far from free. Others are in various states of decay. See for yourself: <https://www.w3.org/wiki/Ontology_editors>

We (Doug and Peter) would like to propose a Semantic Arts project to create an OWL editor and ontology development environment. We are soliciting your input on features. Here is our starter list:

- Open-source project (at least for a basic version)
- Available as a SaaS offering in the cloud on a subscription basis (with added functionality, TBD)
- Visual (diagramming) and source code editing (e.g. graphol - <https://www.mdpi.com/1999-5903/14/3/78/htm> ; G-OWL - <https://www.researchgate.net/profile/Michel-Heon/publication/301804936_Toward_G-OWL_A_Graphical_Polymorphic_and_Typed_Syntax_for_Building_Formal_OWL-2_Ontologies/links/5ef5a50b92851c52d6fdd695/Toward-G-OWL-A-Graphical-Polymorphic-and-Typed-Syntax-for-Building-Formal-OWL-2-Ontologies.pdf?origin=publication_list> ; COE & MAP2OWL - <https://ceur-ws.org/Vol-401/iswc2008pd_submission_45.pdf> )
- Multiple views: OWL / SHACL / Slow-Reveal / Instance data
- Reasoner with choice of OWL reasoning levels
- Ability to rapidly create sample instance data based on the ontology
- View data using the ‘turtle viewer’ graph style, with an ability to zoom in/out and filter on node visibility
- SPARQL engine for querying ontology and instance data locally
- Automated creation of expected paths (WHAT DOES THIS MEAN?)
- Integration with a tarql/SPARQL Anywhere conversion tool to import real data
- Automated creation of base SHACL and ShEx patterns
- Visualisation of graph together with which aspects of the graph are constrained/validated shape expressions
- Automated generation of forms for instance creation (see <https://rdforms.org/#!index.md> <https://github.com/HW-SWeL/Validata> <https://github.com/ericprud/shex-form> )
- Integration with triplestores through SPARQL API
- Use of git for version management - including rdf-toolkit and other routes to simplifying diffs
- Shared user ontology creation in the SaaS version
- Make ontologies with resolvable IRIs
- Consider interactions with services such as <https://www.accurids.com/> to help connect with a wider FAIR ecosystem

Sources of inspiration:

- <https://timbr.ai/platform/>
- <https://www.ibm.com/docs/en/ida/9.1.2?topic=models-generating-logical-data-from-owl-ontologies>
- <https://www.cognitum.eu/semantics/fluenteditor/>
- <https://docs.nomagic.com/display/CCMP2021x/Cameo+Concept+Modeler+%28CCM%29+Quick+Start+Guide>
- <https://owlready2.readthedocs.io/en/v0.37/#>
- <https://github.com/phillord/tawny-owl>
- <https://github.com/phenoscape/scowl>
- <https://stackoverflow.com/questions/17567771/owl-api-jena-api-protege-api-which-one-to-use>

Please contribute your thoughts!

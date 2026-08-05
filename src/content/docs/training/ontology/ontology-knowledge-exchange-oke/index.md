---
title: "Ontology Knowledge Exchange (OKE)"
confluence_id: 2325839873
source: "2325839873.html"
---

We have instituted an ongoing series of ontology knowledge exchange meetings for us to share and get feedback and fresh perspectives on models, tools, ideas, conundrums, dilemmas, … whatever we’re working on or thinking about. The meetings occur weekly for 45 minutes after the Tuesday staff meeting.

## Scheduled Topics

Sign up to facilitate, lead, or present a discussion on a specific date. This can range from formal to informal - no slide deck required. You may just be asking a question to start a discussion.

| **Topic** | **Name** | **Date** |
| --- | --- | --- |
|  |  |  |
|  |  |  |

## Topics to be Scheduled

Move to Scheduled Topics when scheduled.

| **Topic** | **Name** | **Timeframe** |
| --- | --- | --- |
| Thoughts on a visual query tool | Dave Mc | April-May 2025 |
| (K)GraphRAG architecture design | [Irina Filitovich](https://semarts.atlassian.net/wiki/people/638e7b93f6c85b343c0cc019?ref=confluence) | August-September 2026 |
| Tarql-Style ETL vs Naive-Graph ELT and other ELT Patterns | Steven | June-July 2026 |
| Machine readable semantics for xsd:dateTime properties | Jamie | TBD |
|  |  |  |

## Requested Topics

Add topics here that you would like to discuss but are not prepared to lead. Move to Scheduled Topics when a volunteer and date have been identified.

| Topic | Requested By |
| --- | --- |
|  |  |
| OWL 2 DL compliance | Doug |
|  |  |

## Past Topics

Meeting recordings should be saved [here in OneDrive/SharePoint](https://datacentric.sharepoint.com/sites/staff/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fstaff%2FShared%20Documents%2FTraining%2FOntology%20Knowledge%20Exchange).

| **Topic** | **Name** | **Date** |
| --- | --- | --- |
| gist:Transaction vs database Transaction; what is an Agent and Agency; OnTop converts between R2RML and OBDA (more compact) mappings. |  | 7/28/26 |
| Using gist Assignments in BETA | Phil | 7/21/26 |
| MCP server demo - QLever with DBpedia data | Neil | 7/14/2026 |
| Blank nodes (most of call), long IRIs, bad SPARQL, we have some training materials on Confluence. |  | 6/30/2026 |
| Security presentation by Dave, gistCyber | Dave | 6/23/2026 |
| A model for tracking RDF data updates. A.K.A. provenance and auditing in DCA | Jamie | 6/16/26 |
| Strategy for dereferencing ontology terms |  | 6/2/26 |
| RDF 1.2 reification | Boris | 5/26/26 |
| KGC 2026 debrief |  | 5/11/26 |
| question about TaskTemplate | Phil | 5/5/26 |
| gistUFO review | gistUFO team | 4/28/26 |
| Using Claude to generate triple patterns for PSI (Doug, Brett)  Claude-generated [Turtle spell checker extension for VS Code](https://github.com/semanticarts/TurtleProof) (Steven) | Doug/Brett; Steven | 4/21/26 |
| gistCyber review | gistCyber Team | 4/14/26 |
| Is `gist:Specification` broader than `"A set of constraints on the attributes, capabilities, states, or behavior of some entity."` - Yes, this mini-definition is too narrow, not descriptive enough Are there “definitional” things that are not gist:Specifications? - Yes, e.g. gist:KnowledgeConcept  gist:Specification  ``` gist:Specification 	a owl:Class ; 	rdfs:subClassOf gist:Intention ; 	skos:definition "One or more characteristics that specify what it means to be a particular type of thing, such as a material, product, service or event. A specification is sufficiently precise to allow evaluating conformance to the specification."^^xsd:string ; 	skos:example "The specification of the iPhone 14; hypothetical events covered by a homeowner's insurance policy."^^xsd:string ; 	skos:prefLabel "Specification"^^xsd:string ; 	skos:scopeNote "Although a characterization of how to do something is often called a specification, the intended meaning here is limited to specifying what something is. The focus is on the what, not the how. Use gist:TaskTemplate for specifying the how, such as a plan or process specification."^^xsd:string ; 	. ```  Discussion notes  We use Specification to define hypothetical events, like hurricane for insurance policies. (Post discussion note: Should that be KC, now that we have it?) Specification is used to represent definitions of things. Specification is subclass of intention. Specification is something that allows you to evaluate conformance. Description without intention feels like Content. If we're setting up criteria to define something, then there is an intention. Potential `gist:Specification` definition improvement: "**One or more** characteristics that specify what it means..." change to "**The set of** characteristics that specify what it means...". Is definition of a thing always a Specification? Knowledge Concept is describing something in the world. Specifications change the world in addition to describing it. A specification is sufficiently precise to allow evaluating conformance to the specification. Knowledge Concept doesn't have to be this precise.  Action item: <https://github.com/semanticarts/gist/issues/1404> | Irina | 3/3/26 |
| Updated Periodic Table of gist | Dylan | 3/3/26 |
| SQL Performance on Abox versioning queries; discussion of proxies and gUFO as related to gist:OrderedMember | Phil | Feb 17, 2026 |
| Claude Code for PSI: ingesting PDF data into RDF | PSI team | Feb. 3, 2026 |
| Short discussion of Prov ontology; Doug presented use of AI on project proposal; short discussion of language tags on literals. | Doug | 27 Jan 2026 |
| Claude Code for an RDF project | Doug | Jan. 20, 2026 |
| gistUFO readout | Phil | Jan. 13, 2026 |
| Model consistency vs common vernacular (labor agreement terms - gistHR) | Colton Glasgow | Jan 6, 2026 |
| Model consistency vs common vernacular (labor agreement terms - gistHR) - Continued | Colton Glasgow | Dec 23, 2025 |
| Versioning deep dive | Dave McComb | Dec 16, 2025 |
| The use of RDF-Star in client KGs – is we fer it or agin' it? | PSI team | Dec 9, 2025 |
| Thoughts on the sub-gist hierarchy and dependencies (this is fairly short, maybe 15 minutes) | Jamie | 2025-12-02 |
| Using graphs in slide presentations (Dan, ~20 minutes); discussion wrt fixing others' bad designs; performance of queries and API implementations; programming for ontologists; |  | 2025-11-25 |
| Discussion of the Periodic Table of gist (20ish minutes); Brett showed some of the vector database features of Allegrograph. | Misc; Brett | 2025-11-18 |
| Discussion of UFO concepts, specifically identity. | Phil | 2025-11-11 |
| Ontology for schemas | Phil | 2025-11-04 |
| Knowledge Management (dry run of KM World talk) | Dave McComb | 2025-10-28 |
| Discussion of using domain xsd:string prevents usage of rdf:langString |  |  |
| Discussion related to DCA/Spark deployments and functionality. Discussion of upcoming RDF 1.2 and SPARQL 1.2. |  | 2025-10-14 (no recording) |
| The unique nature of the Broadridge engagement | Phil | October 7, 2025 |
| ISAO Debrief (Debrief on Interdisciplinary School on Applied Ontology, Sicily, Sep 2025) | Mark & Dave Mc | 30/Sep/2025 |
| Discuss SPARQL query performance and optimization with an example. | Danny | Sept 23, 2025 |
|  |  | Sept 16, 2025 |
|  |  | Sept 9, 2025 |
|  |  | Sept 2, 2025 |
| Redundancy in formal definitions | Dylan | Aug 26, 2025 |
| [Production-grade ETL Approach - ideas](/ontology-tools/etl---loading-accessing-rdf/production-grade-etl-approach---ideas/) | Doug, Irina | 02 Sep 2025 |
| When and whether to use blank nodes. A little about rdf:List, and tracking changes of RDF. | Conversation | Sept 9, 2025 (recording) |
| [Interoperability with Classonomies](/ontology/interoperability-with-classonomies/) | Irina | 19 Aug 2025 |
| owl:imports and dealing with version dependencies in sub-gists | Jamie | 2025-07-29 |
| Discussion of allowing instance data structure to be determined or constrained by another property in addition to rdf:type, such as gist:isCategorizedBy. Example: Treasury of Lives - Person class instances should be slightly different based on whether the person is categorized as Female or Male. | Jamie | 2025-07-15 |
| Final steps in category/vocabulary discussion: guidelines for subclassing Category and/or defining an instance of ControlledVocabulary or skos:ConceptScheme | Rebecca | 2025-07-08 |
| What is our perspective on considering using punning which is supported by OWL 2 DL according to the documentation?  *“OWL 2 DL relaxes this separation somewhat to allow different uses of the same term, e.g., Eagle, to be used for both a class, the class of all Eagles, and an individual, the individual representing the species Eagle belonging to the (meta)class of all plant and animal species.”*  <https://www.w3.org/TR/2012/REC-owl2-new-features-20121211/#F12:_Punning>  Use case: reusing class IRIs from public Biomedical classonomies as instance IRIs to associate with other instances in the KG, while preserving the possibility of reasoning using axioms defined in the classonomy. Each classonomy class IRI becomes an instance of itself as a class (for reasoning) and of skos:Concept. CQ: Return all projects that study motor neuron disorders. (There are many subclasses of “motor neuron disorder” in Mondo disease ontology that can be associated with projects.)  [https://agraph.semanticarts.com/catalogs/training/repositories/Punning\_testing](https://apps.semanticarts.com:10035/#/catalogs/training/repositories/Punning_testing) | Irina | 2025-07-08 |
| Proposal: Accounting “day”, and related suggested changes. | Dave / Jamie | 2025-07-01 |
| Annotations for Category Classes | Michael | 2025-06-24 |
| Next steps in category/taxonomy discussion: articulate guidelines, decide what to do with gist terms | Rebecca | 2025-06-17 |
| Best Practice: Use PREFIX syntax instead of @prefix in Turtle and Turtle-compatible files (I expect this to be short. May want to include another short topic this week.) | Danny | 2025-06-10 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ETyd_hXn3oBIjTd5VXSLMwQBU-Dj-ttRotSYCp6y-M_vSw?e=P2urrk)) |
| Experience with Stardog Voicebox | Doug | 2025-06-10 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ETyd_hXn3oBIjTd5VXSLMwQBU-Dj-ttRotSYCp6y-M_vSw?e=P2urrk)) |
| How should Category sub-classes and skos:Concept schemes play together in a KG? | Mark W | 2025-05-27 |
| A SA-standard RDF pattern for taxonomies | Dan | 2025-05-20 |
| gistBFO caught a bug relating to gistCyber, gistComputing. This is a superb debugging example | Michael | 2025-04-22 |
| Abox Versioning vs. Fluree’s KG time travel | Michael | 2025-04-15 |
| Closing SHACL shapes | Rebecca | 2025-04-08 |
| Revisit Characteristic/AspectValue for gistPharma | Doug | 2025-04-01 |
| sub-gist import patterns | Ryan, Dylan, Colton, Kate | 2025-03-25 |
| Intro to and discussion on 2025 Project Toolkit work | Brett / Peter | 2025-03-18 |
| Abox Versioning | Dave Mc | 2025-03-11 |
| Various gistCyber topics (gistBFO, gistComputing, and Cyber Threat Intelligence) | Ryan Hohimer | 2025-03-04 |
| 2Facet model at Omatic | Michael (and Dan?) | 2025-02-25 |
| SemArts Ent Ont | Dave Mc | 2025-02-18 |
| - | CANCELLED DUE TO EDTS | 2025-02-04 |
| Key takeaways for explainer series (15 minutes), guidelines for using SHACL. | Phil | 2025-01-28 |
| Meaning vs performance: weighing semantic modeling against pragmatic concerns | Rebecca | 2025-01-21 |
| When to use Hardcoded URIs in a Query? | Danny | 2025-01-07 |
| Best practices for prefLabels | Rebecca | 2024-12-31 |
| Concepts for electric power networks | Phil | 2024-12-17 (recording) |
| Content excerpts | Rebecca | 2024-12-10 (recording) |
| What is a User? | Rebecca | 2024-12-03 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ETMCAi4RIghElTbutVfonCEBai6_f_5ra1IkQEx9z7VkFQ?e=0LdE66)) |
| How to manage prefixes & namespaces. Triple patterns vs exemplars vs triple type signature vs | Danny | 2024-11-26 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ESzO3Jv-ZexNrA1fatKAcfkBXlb4Xi6We41vouEV1F4iKA?e=3S18ed)) |
| IRI minting patterns & management. | Doug | 2024-11-19 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EV_D3rEJlI5Bk6oeadP4oRwB9mVhsIouF6hWoP-LDsLpqw?e=wYAJ8P&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Ontology Segmentation | Boris | 2024-11-15 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EYnxDpUjIEpJuiCK71Yim28B1gw6Y9skxtxa7wmhlV7N3g?e=vfiPb3)) |
| What is Knowledge #3 | Dave | 2024-11-12 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EaYPHyL1yKlFhuZQ6_baH-sBl5XUJLZcBH7PsX2jI6ab1w?e=nEnk0Z&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| What is Knowledge #2 | Dave | 2024-11-05 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EbV6YyVy_A9HmF6ly_bJE2wBL2cu92b5GfxnbmccReI9gQ?e=X2NQCL)) |
| Specifications and SpecEntry discussion | Michael | 2024-10-29 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ESCY8Jxymh9EmIZPINdSbn0BCTO-9vAEx3am3FAZhUO9Aw?e=CetFdm&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| What is Knowledge #1 | Dave | 2024-10-22 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EfjCwthlvRdGlpE50mSw81AB0kZce8R1AzwOOTUEwvLWRg?e=GRsM0V&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Promotion Pattern, AKA Instance Lifecycle | Dave | 2024-10-08 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ecxq7M6m6ndPgoWLpJqAG0kBMWHtbWQc2t1-toqnAWO_5Q?e=u8xre9)) |
| Topics regarding aligning upper ontologies. These came up when working on the [gist-bfo-bridge](https://github.com/semanticarts/gist-bfo-bridge).  ·       The bridge consists of statements making gist classes subclasses of BFO classes. Currently we align to a gist class to a single BFO class. Is that preferable to more specific class expressions?  ·       Is the RDF reification library useful for notes on the alignment? | Kate and Dylan | 2024-10-01 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EX_1cCbyA69BvTmoShkXn9wBxgJ0NVdUgj5UTlNbTBPJ8A?e=F2iajs)) |
| When to use xsd:anyURI vs xsd:string. | Michael | 2024-09-24 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ed4ezh8m7sZKgSbY4PLxzv8BuzCLrCfolwbrA0hcVjHqAw?e=cGP5Z6)) |
| Library of QA SPARQL queries, e.g to find missing properties and classes and untyped objects of triples | Michael | 2024-09-17 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ESN5ar-sjvFGgXE01QQH7KsBINkJhhWayXOtpvLcrh5QHg?e=So27BP)) |
| How to manage ontology changes that have ripple effects in TARQL and SPARQL and updating the repo. It quickly gets hard to manage with 15-20 different data sets. | Michael | 2024-09-10 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EcfSDaa42O5KlZyIyZPsbIcBUo9HyDAsBw5nqqPEgwyxcw?e=P9K5lN)) |
| Files, formatted content, images, art, subjects of images, and creators | Rebecca | 2024-09-03 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EdwjSXhMEjdBu3R1lHlN7FwB0Z5NiTSCbARBbC9_mpV0CQ?e=gSoxoV)) |
| Dave’s accounting reporting model; blank nodes; immutable instances | Dave, Michael | 2024-08-27 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EXvNlw91rlhMksz3gXsvZ7ABgwljKoGipF3VJ7RYsYu_5A?e=WeS0yP&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Namespace discussion wrt Cbox, Abox, Tbox; query to discover property coverage by DCA Forms; Discussion of competency question: What software vulnerabilities do I have in my Enterprise. | Phil | 2024-08-20 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EQkdw4Or1tlHsYrBTfzhw-IBcIH8-SYhHAIhBgrndI8-0A?e=deSje0)) |
| Discussion of modeling marriage for Treasury of Lives which has unique requirements about Jr & Sr spouses. Maybe Rebecca could summarize outcome. | Rebecca | 2024-08-13 (no recording) |
| Handling application-specific codes | Michael | 2024-07-16 ([recording](https://datacentric-my.sharepoint.com/:v:/r/personal/office_semanticarts_com/Documents/Recordings/Ontology%20Knowledge%20Exchange-20240716_123150-Meeting%20Recording.mp4?csf=1&web=1&e=AIfP7x&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Modeling a monastery as an Organization or a Place? Using LLM’s with triple patterns for NLP of unstructured data to RDF. | Rebecca. Phil. | 2024-06-27 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ESDCx56DB61Avvo4MsFghjcBMos1cTnjw09DCqcZKnOMYw?e=TQo5QZ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Short discussion about optimizing sub-select statements in a SPARQL query. Discussion of when to create a new owl:Class. |  | 2024-06-18 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EcKUgwB6XmhJs1cfZhB3nF8BMkh9kD4lvP7wsQreuuyMIw?e=ROKKBn&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Short discussion about custom datatypes, moved on to discussing what is knowledge in a knowledge graph. |  | 2024-06-11 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ETOWbD6h8mJMv6tAQcd1MfoB-Qkf0lSFV2cYxLCZJsLY-Q?e=ebebwp&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Discussion of role modeling | Dan Carey | 2024-05-21 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EadtejtBX2VPs7JFeGK-GXkBWbAWlpVrR6e8qgUw_OI6YQ?e=g87m6o&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Discussion of T-box, C-box, and A-box terms and possible alternatives. |  | 2024-05-15 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EWOptF7ztdhHnkflcdHbQfYBCyJ09IGwL2Wi1gDgdtmOyg?e=nnU31D&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Discuss MetaFactory and how it relates to modeling data, it is mostly SHACL, we do mostly OWL. |  | 2024-05-07 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ES7uu6-tJKhFubgU9SBZUNwBAJwjgir5CLlmB9cxIIIqlA?e=C8jjP2&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Minting new IRIs: best practices, common practices, bad practices. |  | 2024-04-30 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EWieAWSvlZ5Cn4ElNqjHPNsBIQuTHI3URoI6O_9bzOHO5A?e=cgEIhT)) |
| Ongoing discussion of Schema Metadata vs Specification. |  | 2024-04-23 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EXo_lQgSa3pHhtOHua1T4j4BpCX3zLLIjVtUb5hmP7Vx2A?e=4UGCDY)) |
| Discussion on MessageDefinition and SchemaMetaData for modeling data mapping. | Doug B | 2024-04-16 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EWNOPjO3fYdOoOO-nQgKrCgBtJLlPkwBS3FBXGYSROXS4A?e=j5mFR3&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Discussion of visualization techniques to convey information about what we do and stuff… |  | 2024-04-09 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EaqaIe8EJR9Elrl-y6TZWYEBE2AiE8xn2Fco0AuElHMZag?e=ay4pWa)) |
| OWL sameAs, inference reasoning, benefits of semantics even without reasoning and comparison with Property Graphs. |  | 2024-04-02 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EXfcFlmos0FAoymEhUrFzRsBKKgXfX7Y-3mYhSWoAVl3nw?e=CJD3gr)) |
| Property inverses, their direction, and their problems, and what we did wrong. Chat GPT for ontology definitions: isConnectedTo, isAffiliatedWith, hasThreshold (hasUpperBoundary, hasLowerBoundary). |  | 2024-03-26 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ERxao5_S6XZArPj9liUFbTYBMwQxMDyPCvqV-ofiucY9Ng?e=DCRpCC)) |
| Sub-gist management, then discuss Temporal Objects and Temporal Relations |  | 2024-03-19 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EZihm-eNNMtBphcwK8ZCoswB4R_yxwbVTWnkF7Sxm41vwA?e=gWXmjr)) |
| ChatGPT for ontology definitions. Using skos:broader or not. |  | 2024-03-12 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EdT0oZ-vyhdJtDdMWfYX4k4BYTrZeO-TK_nRfzFcHU5uQg?e=kG5cOz)) |
| Definitions? (need to review and write a real comment here) |  | 2024-02-06 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EfDeZOdmDVRBpGEcIYDB5V4BntAQIWCRo215_N1ltDhDOQ?e=33BaJz)) |
| Textualize? (need to review and write a real comment here) |  | 2024-01-30 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EbcVBNIa7mZMsZvejUUlUUgB1VXr_KM-oC_0xY1j9WIm0g?e=vQ1Lgq)) |
| Discussion of File, FormattedContent, RenderedContent, and a little of ContentExpression and IntellectualProperty | Rebecca | 2024-01-23 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Eb8lSFMSXuVBq273ixEexLwBcbvQVSk9ornS_o4OB7q3Kg?e=hsp4gx&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| 6 Design Choices discovered in work on Units & Magnitudes | Dave | 2024-01-16 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EWrnHzlug7pIkH-xF3pBp24BaNvDEsD85j--GeS-OSTOVQ?e=bA7XXd)) |
| Modeling of an approval/acceptance process. | Rebecca | 2024-01-02 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EdTpCrzrMsJMvYWz2fl7-cUBO3lbqviEUWTlDW0ztOgpSw?e=EeNE15)) |
| Why xsd:float is never the right answer. Discuss the implications of the XSD numeric datatypes in RDF & SPARQL | Jamie | 2023-12-19 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EXStk858HiNCjjAew6WKO1gBpStYqA6PeMRK7qV2q17Apg?e=oFVd9v)) |
| Software versioning, discuss differences between what MS does, our Versioning Ontology, and what is in gistComputing. | Mark, Michael, Katie, and more | 2023-12-12 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EbUmK8r4vFlJi6uVN8a5VNIBVPxQAJcyN1TtpLCPhiyjLA?e=T8g3bY)) |
| Discussion about using/referencing terms from other ontologies. What does OWL DL mean. | Peter, Danny | 2023-12-05 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ea9IIxwxiAFBh_ImhYlB3_oBG8lWUSLoV92jVEJBzP1wFg?e=LSGjhl)) |
| Long discussion about problems with existing healthcare & life science ontologies. | Peter, Dave | 2023-11-28 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EaDbmu-0t0pAjJPFnS2F2ekBBQn-mLqvrCZ9N2s1RrQ1CQ?e=qHdiS3)) |
| [Hypothetical events](https://github.com/semanticarts/gist/issues/831) | Michael | 2023-11-21 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ee-ZOVuSKNdPpRlKV9RnQnYBpszlsNDJLWoV4iIVvFKlkA?e=remG8e&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)) |
| Temporary Predicates | Shawn | 2023-11-14 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EWXIqnLsTS9KuSsb9q9mOFYBYxlzu7KQmgkKhcq-p6Nh8Q?e=K7JClg)) |
| Should we keep gist in OWL DL and avoid using non-OWL ontologies like dcterms or SHACL? | Rebecca | 2023-11-07 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EQnZuFWpv69AhdbEzj7SCvgB2wtWZ3OH6_nExSjdJ5tpEg?e=4id1EX)) |
| Best Practices for OWL restrictions: [OWL Restrictions: Best Practices and Design Patterns](file:////wiki/spaces/TRR/pages/2458615809/OWL+Restrictions+Best+Practices+and+Design+Patterns) | Rebecca | 2023-10-31 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EURVCc1dYFVIlr7dMqNa0LcBWzQHkTDrzPKzE8cZA2FzAA?e=xeZHyn)) |
| Unit of Measure reference data | Phil | 2023-10-24 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EQj6WvIsY2JNpzaSRBBmFQMByS2KkxB9YXpkVTxIl5w7mw?e=0hEWCR&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZyIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19)) |
| How general should general properties be, and when should a more specific property be defined? | Rebecca | 2023-10-17 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EfUiA9K5VSxFsl_m5GnTZtYBCy0TKsB0qbWnJBRtBq8CdQ?e=pfcfVj)) |
| Discuss SHACL coverage tool | Danny | 2023-10-10 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ERYRJFzMw0pAqDmTIEAj3KMBLAyY5VtLEhb7Mr9jkmQLOQ?e=3tX80P)) |
| Discuss the Operators and Versioning ontologies | Michael | 2023-10-03 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EQc7-6xtjtdIhSuIB-yP6DwBrPW_LyGmDXdrXEFANFluWw?e=DIkNIn)) |
| Example patterns using gist (more discussion) | Michael | 2023-09-26 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ES2fd6Is_TBFqcwVlQeQI9kB_pKBbvP6pRoevEFlCi4frg?e=us0fdY)) |
| Example patterns using gist | Michael | 2023-09-19 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ETf7CEWiJcNOr-I26urNbFwBjJjwdh7COXLkO2ewD7Zbkw?e=HWlcUM&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZyIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19)) |
| Continue discussion of Ontology Tools, then switched to OWL best practices (style guide) regarding someValuesFrom vs allValuesFrom. |  | 2023-09-12 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ESDFb8FbKpVBtODAKkfxhGsBomCoIy-15jZAJ40Q59TncA?e=B283uw)) |
| Continue discussion of Ontology Tools, ideas and a tool for SPARQL editing |  | 2023-09-05 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EbzQjijmWsxOljow5BVtW4ABwjABfaVqn-TFQBWMIRINyQ?e=xV3AW9)) |
| Discuss Ontology Tools and create [Confluence page](https://semarts.atlassian.net/l/cp/uxUmf1s2) to track them. |  | 2023-08-29 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ed-VV-2Zk_xBjl6RewrjOJwBr7RBSnwby-gjz3DrkCEoaA?e=t3ug5b&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZyIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19)) |
| Random topics: triple patterns, OWL ontology, some discussion of graph capabilities of onto\_tool |  | 2023-08-22 (no recording) |
| Sharing tool for tracking undefined concepts during ontology development | Dylan | 2023-08-15 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ES6Egy-t_g5Kq5bT6IJ61J4BR5lwLG-9Y1AMzLZkcpc5bA?e=1Sj45e)) |
| What is Knowledge? | Dave | 2023-08-08 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EVK66D9IKklMmvPiCP7XR8oBpo4gZLGtyB0_3EP-Y06CxQ?e=9EC77s)) |
| OWL best practices: cardinality and values restrictions #2 | Rebecca | 2023-08-01 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ESW1TBx5oDRDus6G8vWCTbEBkJNpEH8Yzh157F61kom7hQ?e=DiRTRh)) |
| OWL best practices: cardinality and values restrictions #1 | Rebecca | 2023-07-25 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EfvteS2BXs5Gg3IrFndYyMkBYtpNs9Qlri6t0a5shGiXNQ?e=VZ20LT)) |
| Discuss gist:System in the context of the gistComputing ontology. | Katie | 2023-07-18 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EeoVtYfYlIBClszSgv0mGbEB8_fNh9sUST5DEzQXFi5kyQ?e=3hnJmC))([dialog map](https://semarts.atlassian.net/wiki/spaces/TRR/pages/edit-v2/2418868225)) |
| Modeling roles: see session above, same background references, but this is Michael leading the discussion. | Michael | 2023-07-11 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EXDnfkBvhHBBuHaRfGaKU_0B6sLRFeugtTf7RUQIfxpwuQ?e=KQFO4R)) |
| Discussion of Eddie’s rdfScribe visualization tool |  | 2023-06-27 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ERvWPWfBTXxGuiXMraL7xQoBBidTeQJqWVR0IA6MT_Kn3A))([dialog map](https://semarts.atlassian.net/wiki/spaces/TRR/pages/edit-v2/2325839873)) |
| The state of Slow Reveal and other options for RDF visualization, especially from a file rather than a triplestore. Like Peter’s visualization tool but allowing manual manipulation the way Gruff and other triplestore-based visualizations do. | Irina | 2023-06-27 - rdfScribe visualization tool addresses this |
| Discuss whether to keep or drop `/o` in ontology IRIs of gist and sub-gists, included discussion of ontology namespaces. Suggestions made but no decision was reached yet. | Rebecca | 2023-06-20 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EUmEGUG6snBNoY4FGJki1osBUWP7lK46gsfj-9bwmCtxsg)) ([dialog map](file:////wiki/spaces/TRR/pages/2407104513/2023-06-20+-+Remove+o+from+ontology+IRIs)) |
| Discuss a name+scope change for gistSW to include hardware (see [issue](https://github.com/semanticarts/gistSW/issues/5)). | Katie | 2023-06-12 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ec-xRAZPxyFCstOuFFFjwCQBOfLExWee2jos78P0x-wwwg)) |
| Proposal for changes to modeling addresses in gist | Dan | 2023-05-30 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ed6FQxIu2EBGgz_kC51yZLUBok3_U_OuqivQ11gTWccKNw)) |
| Commenting on, or changing an existing PR in github. | Jamie | 2023-05-23 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ec7ZnqtiSyNLkgvcFzB_TiwBEzrIYhFF6_oZv7UqMfDxTg?e=mVGePm)) ([notes](file:////wiki/spaces/TRR/pages/2396880903/2023-05-23+-+Collaboration+using+GitHub)) |
| How widely can we re-deploy gist:Content? genes? software? | Peter | 2023-05-16 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EaZuQ7CHMxZBmkr6Fdz9UzgBEoH6YpxAcMEj75k283xXNg?e=9hIfPA)) |
| Distinguishing magnitude subclasses from particular relationships to magnitudes (examples of PayRate and BillingRate from sub-gists). We reached consensus that magnitude subclasses should not bundle the “aspect” into the magnitude itself (neutral as to how those aspects are represented). Would like to run by Dave because he’s the one who defined these. | Rebecca | 2023-05-09 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EWLLaNzPMFlMk11V87H7ERgBYWJTXxHBIo7W_7Qc9NC9QA?e=cFstYS)) |
| Discussion of Non-rigid classes - when are they useful, when are they not useful? | Rebecca | 2023-05-09 (2nd half of [recording](https://datacentric.sharepoint.com/:v:/s/staff/EWLLaNzPMFlMk11V87H7ERgBYWJTXxHBIo7W_7Qc9NC9QA?e=cFstYS)) |
| Modeling Employee, Employment, and related topics. | Jamie and Rebecca | 2023-05-02 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EVolqU_PFFJAmw2cedtjLjIB2rzBUop32xoSAwmRndedXg?e=nP4P0Q)) |
| LPGs, Semantic Graphs, and Knowledge Graphs (Follow-on from Mark’s slides on 4/11/2023)  Mark’s slides and follow-up discussion: [What is a Knowledge Graph?](file:////wiki/spaces/TRR/pages/2381348868/What+is+a+Knowledge+Graph) . See 4/25/2023 addendum at the bottom of the page. | Heather | 2023-04-25 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ES6B0nbtUkFLgPp2LE6uYP4BKT_CPzJL-CVO43MqMr45rw?e=XE35Uq)) |
| Modeling roles: see gist issues [#787](https://github.com/semanticarts/gist/issues/787) and [#695](https://github.com/semanticarts/gist/issues/695). [Role Blog post (1/28/2011)](https://www.semanticarts.com/role-the-overloaded-workhorse-of-the-modeling-world/). | Justin and others | 2023-04-18 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EZ0bKSa_ZMpDkjIJL9g0b78BhIUOAq0JbOjliAqmKwtGCg?e=KsG9up)) |
| Differences and Similarities to Object Oriented Programming and Ontology Design. OOP means different things to different people, and sometimes OOP is compared favorably to ontology design, and sometimes it is compared unfavorably to ontology design. | Shawn (I am not capable of discussing this, but I would love to hear and ask questions of Jamie, Dave, Justin, Ryan, Danny, and others about their perspective on this) | 2023-04-11 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EU4WdV7d0PFChSBqOYE-syYBpJP5YSC9APWQOugfUxm-iw?e=AvZ747)) |
| What is a Knowledge Graph? |  | 2023-04-11 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EU4WdV7d0PFChSBqOYE-syYBpJP5YSC9APWQOugfUxm-iw?e=AvZ747))  See follow-up discussion: [What is a Knowledge Graph?](file:////wiki/spaces/TRR/pages/2381348868/What+is+a+Knowledge+Graph) |
| Identifiers - when to use a string, when to use an Identifier object | Rebecca | 2023-04-04 (partial [recording](https://datacentric.sharepoint.com/:v:/s/staff/Ec5xfX9SjVFOhm2Jq8061lEByjagWCWSnBLTHbgsqlX7-g?e=vyf7CI)) |
| Demo of bespoke SA timecard system (Dave) | Dave | 2023-04-04 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ec5xfX9SjVFOhm2Jq8061lEByjagWCWSnBLTHbgsqlX7-g?e=vyf7CI)) |
| What makes for a good `skos:definition` of a property? | Dylan | 2023-03-28 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EVqj_R_uVIZEh_WBC1UyUgwB6qG5wuYBq5d849UjKF79BQ?e=UYV1Pm)) |
| “Adequacy” of formal definitions--see [here](https://plato.stanford.edu/entries/definitions/#DesDef). Typically we aim for something like *intensional* or *sense* adequacy in our formal definitions, but can a definition that is merely *extensionally* adequate be useful in some contexts? (This is closely related to the division between *meaning* [to be expressed in OWL] and *structure* [to be expressed in SHACL] that we recognize at SA, but I think there is more to say about it.) | Dylan | 2023-03-21 ([recording](https://datacentric-my.sharepoint.com/:v:/g/personal/steven_chalem_semanticarts_com/EZfFZTNGb2NFgPURrIyynvYBmw9sQH0OgG0tnnE9kJFNYA)) |
| Do we recommend against categories having relationships to one another other than sub/supercategory? E.g., part of, ranking, etc. | Rebecca | 2023-03-14 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Eco1xJCbOMVJmq3nguBeWywBh2tGqQeGhxTEN1NZFmdWSg))  See also [discussion notes](https://semarts.atlassian.net/wiki/spaces/TRR/pages/edit-v2/2325839873). |
| Phil review proposal for Unit Decomposition of Units Of Measure and connection to Aspects | Phil | 2023-03-07 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ER0Vjc6yxo9Nl6wyuwViLIwBtRD_tj1L-PjUepdXIUPRAw?e=WJMSo0)) |
| Sample diagrams for explaining a data retention ontology | Phil | 2023-02-28 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/Ec-tCtViCGNOq7ji2C-5eLABWnprhA6dhRkfJcY_98vRhA?e=tKWADB)) |
| Percents - see [gist issue](https://github.com/semanticarts/gist/issues/785). | Mark (OP) | 2023-02-21 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ESMmBLdqM7NIoJb92IfWOLIBBs3_zPiSt5uBag0pqFUpYg?e=EWqiqA)) |
| Percents - see [gist issue](https://github.com/semanticarts/gist/issues/785). | Mark | 2023-02-14 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ES_iRH2CawRAtWAkvps44LUBMdg7TgpXbVxVMjEQlkTT_g?e=MRzOX5))  Note: continue discussion at next meeting |
| Modeling of IDs: datatype property vs ID subclasses vs ID types (categories) | Doug | 2023-01-31 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EbbNf73ch3VLjokuKarZ95MBGT2H81ZdxbfDZIUbUArOQg?e=ne9Wm5)) |
| Temporal Relation subclasses (Usage and Dependency) | Dan | 2023-01-31 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EbbNf73ch3VLjokuKarZ95MBGT2H81ZdxbfDZIUbUArOQg?e=ne9Wm5)) |
| Short discussion of percent/percentage as Class vs UofM, and minting URIs. See also [gist issue](https://github.com/semanticarts/gist/issues/785). |  | 2023-01-24 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EdnwNLSBEQ1DkFqd2U5MbDYBEvln9_WCFfLPFlbEqXeFTA?e=qTBXfm)) |
| Thoughts on punning | Heather | 2023-01-17 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EbPOUuSlia9Phoj2D3RP1DAB-KXGwYCO76qik1mLkND9Lg?e=ZZhfvY)) |
| subClassOf vs equivalentClass | Doug | 2023-01-17 (same as above) |
| Question about multiple query paths vs. redundant nodes | Rebecca | 2023-01-10 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EYpT6dw79bRHnwU2K-dm0AEB1RY_zhWQPIGDgpBO513gAg?e=XoUjLt)) |
| [Abandon the terms: TBox and ABox](file:////wiki/spaces/TRR/pages/2330689675/Proposal+to+abandon+use+of+TBox+and+ABox) | Michael | 2023-01-10 (same as above) |
| Content URLs, continued | Jamie | 2023-01-03 |
| Triple patterns from restrictions | Phil | 2023-01-03 |
| Content URLs | Jamie | 2022-12-20 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EbtHtxqFtO9Dm-JOrvx3P3sBoq3iHB7rjUDeLmQkhA7ksw?e=ubOSA4)) |
| Workflow Models, Part I | Rebecca | 2022-12-13 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/EXlFtKtkxlpFoLoRd3GhEdoBklOeSQ33d0a2GnQKEJfnfA?e=ERgTk0)) |
| Named graphs and semantics | Justin | 2022-12-06 |
| Business Processes | Dan | 2022-11-29 ([recording](https://datacentric.sharepoint.com/:v:/s/staff/ETyFDjQBIBtOuzgDA5elg9gBlBrmmALbiP2ecB_T2vVlDA?e=Jw9HEE)) |

## Proposed Design Patterns

See [Ontology Design Patterns](/ontology/ontology-design-patterns-and-best-practices/).

## In this section

- [2023-05-23 - Collaboration using GitHub](/ontology/ontology-knowledge-exchange-oke/2023-05-23---collaboration-using-github/)
- [2023-05-30 - Modeling Addresses](/ontology/ontology-knowledge-exchange-oke/2023-05-30---modeling-addresses/)
- [2023-06-13 - Rename gistSW](/ontology/ontology-knowledge-exchange-oke/2023-06-13---rename-gistsw/)
- [2023-06-20 - Remove /o from ontology IRIs ?](/ontology/ontology-knowledge-exchange-oke/2023-06-20---remove-o-from-ontology-iris/)
- [2023-06-27 - rdf-scribe](/ontology/ontology-knowledge-exchange-oke/2023-06-27---rdf-scribe/)
- [2023-07-18 - System Class and gistComputing feat. Network, Component](/ontology/ontology-knowledge-exchange-oke/2023-07-18---system-class-and-gistcomputing-feat-network-component/)
- [2023-07-25 - Cardinality and Value Restrictions](/ontology/ontology-knowledge-exchange-oke/2023-07-25---cardinality-and-value-restrictions/)
- [Ontology Knowledge Exchange Meeting: gist:Content](/ontology/ontology-knowledge-exchange-oke/ontology-knowledge-exchange-meeting-gistcontent/)
- [Usage Patterns and Examples for gist](/ontology/ontology-knowledge-exchange-oke/usage-patterns-and-examples-for-gist/)
- [What is a Knowledge Graph?](/ontology/ontology-knowledge-exchange-oke/what-is-a-knowledge-graph/)

---
title: "Interoperability with Classonomies"
confluence_id: 3271983109
source: "Interoperability-with-Classonomies_3271983109.html"
---
- [Forming approach at a glance](#InteroperabilitywithClassonomies-Formingapproachataglance)
- [OKE topic presented on 19 Aug 2025](#InteroperabilitywithClassonomies-OKEtopicpresentedon)
- [Reasons to keep classonomies in a separate repository from the main KG](#InteroperabilitywithClassonomies-ReasonstokeepclassonomiesinaseparaterepositoryfromthemainKG)
- [Analysis of semantics and use of OWL in public biomedical ontologies](#InteroperabilitywithClassonomies-AnalysisofsemanticsanduseofOWLinpublicbiomedicalontologies)
- [Federated queries over the main KG and the classonomies to take advantage of their axioms](#InteroperabilitywithClassonomies-FederatedqueriesoverthemainKGandtheclassonomiestotakeadvantageoftheiraxioms)

### Forming approach at a glance

1. In the enterprise KG, pun all owl:Class'es of classonomy as instances of skos:Concept/gist:Category and use them in instance-level relationships
2. In the enterprise ontology, formally restrict all owl:Class'es of classonomy from having instances (make them subclasses of owl:Nothing) to prevent problems with owl reasoning and to say that as a matter of semantics these classes are unsatisfiable/empty
3. Leverage ontology-level reasoning on the classonomy, like rdfs:subClassOf\* paths being inferred as rdfs:subClassOf relationships
4. Rely on both instance-level relationships and on class-level relationships in SPARQL queries to take advantage of axioms in classonomy

### OKE topic presented on 19 Aug 2025

Interoperability between public biomedical controlled terminologies (expressed as classonomies using OWL) and pragmatic knowledge graphs governed by an enterprise ontologies. Punning?

[![](https://semarts.atlassian.net/wiki/download/thumbnails/3271983109/mondo-class-analysis.pdf?version=1&modificationDate=1772213108931&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/3271983109/3272179723.pdf)

<https://www.ebi.ac.uk/ols4/ontologies/mondo> - Mondo browser

![](https://semarts.atlassian.net/wiki/images/icons/grey_arrow_down.png)Discussion and links

PW: CURIEs - a W3C standard: <https://www.w3.org/TR/curie/>

MW: Here's AG RDFS++ <https://franz.com/agraph/support/documentation/reasoner-tutorial.html>

MW: Should be transitive, per RDFS definition here: <https://www.w3.org/TR/rdf11-schema/#ch_subclassof>

PW: People like Maria Keet use punning only for leaf classes, ones with no subclasses.  I think the point is that it's useful if used in controlled ways, see <https://researchspace.csir.co.za/server/api/core/bitstreams/76b0334a-ea9d-4c82-8d66-efe0e2ac72e9/content>

MW: Here's a reference to how something can be a skos:Concept *and* an owl:Class. <https://www.w3.org/TR/skos-reference/#L896> They purposely do not make statements about the relationship between SKOS concepts and OWL classes to allow 'the freedom to explore different design patterns'

IF: Is there a way to create owl axioms that certain classes cannot have instances? That could help ensure there are no owl reasoning issues even if both the "ontology" and its class puns are in the same graph (the UniProt approach).

MU: Make the class a subclass of owl:Nothing. I don't think an ontology with unsatisfiable classes is inconsistent.

RY (summary): Subclasses of owl:Nothing are inferred to be all equivalent to one another. Since we want to say that as a matter of semantics these classes are unsatisfiable/empty, that’s ok.

IF: Ok, then to refine the discussed UniProt approach we could consider:

1. pun all owl:Class'es of classonomy as instances of skos:Concept/gist:Category and use them in instance-level relationships
2. **formally restrict all owl:Class'es of classonomy from having instances (make them subclasses of owl:Nothing) to prevent problems with owl reasoning and to say that as a matter of semantics these classes are unsatisfiable/empty**
3. leverage ontology-level reasoning on the classonomy, like rdfs:subClassOf\* paths being inferred as rdfs:subClassOf relationships
4. rely on both instance-level relationships and on class-level relationships in SPARQL queries to take advantage of axioms in classonomy

### Reasons to keep classonomies in a separate repository from the main KG

There is an OWL DL rule, which is necessary for unambiguous reasoning, that an instance and a class can only be connected with a rdf:type property and nothing else.

 If I have a concrete study that started 3 weeks ago (an instance of Enterprise Ontology class Study) and it investigates rheumatoid arthritis, to capture this semantic relationship between the study and the medical condition it investigates, I have to have an instance that represents rheumatoid arthritis as a medical condition. Then I can have a triple:

ex:\_Study\_123 ex:investigates-medical-condition ex:\_Medical-Condition\_rheumatoid-arthritis .

Mondo only gives me a class (MONDO\_0008383) that represents rheumatoid arthritis as a medical condition along with additinoal infornmation about the condition, but it would be a a violation of OWL DL to say  
ex:\_Study\_123 **ex:investigates-medical-condition** <<http://purl.obolibrary.org/obo/MONDO_0008383> > .

if the mondo IRI is a class in graph (triple store repo) where this triple lives.

And it will be sematically incorrect to say

ex:\_Study\_123 **rdf:type** <<http://purl.obolibrary.org/obo/MONDO_0008383> > .

because **rdf:type** means "is a", and we are trying to say "investigates medical condition".

To promote the R of the FAIR principles, instead of creating brand new IRIs for all the concepts in Reference Data Ontologies, like ex:\_Medical-Condition\_rheumatoid-arthritis, the idea is to reuse the IRIs, like <<http://purl.obolibrary.org/obo/MONDO_0008383> >, but make them instances of some meaningful classes to allow such assertions without violating OWL DL:

ex:\_Study\_123 **ex:investigates-medical-condition** <<http://purl.obolibrary.org/obo/MONDO_0008383> > .

now, the mondo IRI is an instance in the graph (triple store repo) where this triple lives.

 So the separation of Enterprise Graph instance data (Abox) together with Enterprise Ontology (Tbox) specifically from Reference Data expressed as OWL Classes into 2 different graphs (triple store repos) is necessary to enable reuse of public IRIs without compromising reasoning over the first graph.

### Analysis of semantics and use of OWL in public biomedical ontologies

First, to reground ourselves in some basics:

Below are relevant excerpts from the OWL standard: <https://www.w3.org/TR/owl-ref/#Class>

Classes provide an **abstraction mechanism for grouping resources with similar characteristics**. Like RDF classes, **every OWL class is associated with a set of individuals**, called the *class extension*. The individuals in the class extension are called the *instances* of the class. A class has an **intentional meaning (the underlying concept)** which is related but not equal to its class extension. Thus, two classes may have the same class extension, but still be different classes.

When in this document we use wording such as "a class of individuals ..", this should be read as "a class with a class extension containing individuals ...".

    NOTE: In OWL Lite and **OWL DL an individual can never also be a class.**

**Classes and individuals form disjoint domains (as do properties and data values)**. Only OWL Full allows the freedom of RDF Schema where a class may act as an instance of another (meta)class.

...

OWL Full will typically be useful for people who want to combine the expressivity of OWL with the flexibility and metamodelling features of RDF. However, use of the **OWL Full features means that one loses some guarantees (see** [**below**](https://www.w3.org/TR/owl-ref/#OWLDL)**) that OWL DL and OWL Lite can provide for reasoning systems**.

...

These constraints of OWL DL may seem like an arbitrary set, but in fact they are not. **The constraints are based on work in the area of reasoners for Description Logic, which require these restrictions to provide the ontology builder or user with reasoning support.** In particular, the OWL DL restrictions allow the maximal subset of OWL Full against which current research can assure that a decidable reasoning procedure can exist for an OWL reasoner.

\_\_\_\_\_\_\_\_\_\_

From OWL modeling practice, a couple of convenient semantic "check questions" have emerged:

Is concept A **a kind of** concept B? If yes - A owl:subClassOf B .

Does it make sense to say A **is a** B? If yes - A rdf:type B .

These questions will come in handy when we analyze some public biomedical ontologies.

\_\_\_\_\_\_\_\_\_\_

1. What are the individuals of Uberon OWL classes and are they what's needed in research?

obo:UBERON\_0004288 rdf:type owl:Class ;

rdfs:label "skeleton" ;

oboInOwl:hasExactSynonym "set of all bones" , "set of bones of body" ;

obo:IAO\_0000115 "Anatomical cluster that consists of all the skeletal elements (eg., bone, cartilage, and teeth) of the body." ;

.

obo:IAO\_0000115 rdf:type owl:AnnotationProperty ;

    rdfs:label "definition" ;

obo:IAO\_0000115 "The official definition, explaining the meaning of a class or property. Shall be Aristotelian, formalized and normalized. Can be augmented with colloquial definitions." ;

.

Since obo:UBERON\_0004288 rdf:type owl:Class, it is expected to be a set of instances. What would be an instance of this class?

From the definition I see, my understanding is that my individual skeleton in my body, represented as an RDF resource with an IRI will be an instance (rdf:type) of this class.

Are skeletons of individual people something that would be useful to operate with in the pharmaceutical research? In my opinion - no.

However, what is useful is to say that a specific animal study targets the body part skeleton.

To capture the semantics of this relationship in an RDF graph we need an instance for the animal study, a predicate reflecting the relationship to a body part and an instance of the body part that represents the skeleton.

I would represent it like this:

ex:Study  rdf:type owl:Class .

ex:\_Study\_123  rdf:type ex:Study .

ex:Body-Part rdf:type owl:Class .

ex:\_Body-Part\_skeleton rdf:type ex:Body-Part .

ex:targets-body-part rdf:type owl:ObjectProperty .

ex:\_Study\_123 ex:targets-body-part ex:\_Body-Part\_skeleton .

Here, the instance ex:\_Body-Part\_skeleton represents one of possible individuals of the concept "body part", which in an enterprise ontology would be a subclass of class Category.

ex:Body-Part owl:subClassOf ex:Category .

In gist (<https://www.semanticarts.com/gist/> ) we define this class as follows:

gist:Category skos:definition "A concept or label used to categorize other instances without specifying any formal semantics." .

In this example I'm using a new IRI ex:\_Body-Part\_skeleton instead of reusing obo:UBERON\_0004288 and that is a lost opportunity for reusability.

This is a classical problem in semantic modeling and punning is the answer to it:

<https://www.w3.org/2007/OWL/wiki/Punning>  (see "Treating classes as instances of metaclasses" section)

In the context of Enterprise data graphs, we would assert:

`obo:UBERON_0004288 rdf:type ex:Body-Part .`

However, at this stage of implementation of logical reasoners in triple stores it it best not to have IRIs that are instances and classes at the same time in a single repo, because reasoning over that repo can break (see notes on OWL Full / OWL DL above). Hence the suggestion is to do the punning, but keep the class definitions in a separate repo.

2. What are the individuals of MONDO OWL classes and are they what's needed in research?

Most likely individuals of obo:MONDO\_0000001 (disease) and obo:MONDO\_0021178 (injury) are meant to be cases of those diseases or injuries in a specific organism, that's ok, although I'd model that differently from the perspective of Enterprise Ontology design and would introduce a class ex:Medical-Condition-Case or something like that. But is that what we operate with in research? I don't think so, just like with body parts, we need to annotate studies and projects with scientific context they operate in, including medical conditions they investigate, and we need to say things like:

Instance of study/project ex:investigates-medical-condition ex:\_Medical-Condition\_lymphosarcoma .

Again, to be able to reuse IRIs, in the context of Enterprise data graphs, we get:

obo:MONDO\_0004638 rdf:type ex:Medical-Condition . # obo:MONDO\_0004638 - lymphosarcoma

From the above 2 points, I'd conclude that here I'm not talking about misuses of OWL, but that obo Ontologies describe the natural world, but not the information that a Pharmaceutical Enterprise operates with, however there's an appropriate way how we can adapt them and reuse. In more formal terms, public biomedical ontologies and the kind of ontologies we develop (Enterprise Ontologies to govern Enterprise RDF Graphs) model different domains of discourse (<https://en.wikipedia.org/wiki/Domain_of_discourse> ) - natural world vs pharmaceutical research processes.

3. Loose use of OWL axioms by obo Ontologies.

I thought I had an example of this from Uberon, but turned out that that example actually modeled very correctly, I'm very happy to see that.

Overall, Uberon and MONDO are some of the best, if not the best, modeled OBO ontologies, but they reference other OBO ontologies in their axioms, and those use OWL loosely.

I'll look into this further to provide examples later.

### Federated queries over the main KG and the classonomies to take advantage of their axioms

Biomedical community was an early adopter of Semantic Technologies and developed a large number of Concept-oriented Ontologies containing rich knowledge about scientific entities.

Often, Concept-oriented Ontologies consist of deep hierarchies of owl:Classes and do not have instances.

To use these important bodies of knowledge with instance data in Enterprise Graphs governed by Enterprise Ontologies (semantic data models expressed in OWL/SHACL) without violating OWL DL semantics, that are required to ensure unambiguous reasoning, at Semantic Arts we developed and tested the following approach:

1. Load the Concept Ontology(ies) in a separate triple store repository(ies) (Reference Data Graph(s))
2. Pun all owl:Class'es of Concept Ontology as instances of skos:Concept/amg-core:Category and use them in instance-level relationships of the Enterprise Graphs
3. Run class-level reasoning on the Concept Ontology, like rdfs:subClassOf\* paths being inferred as rdfs:subClassOf relationships
4. Rely in both instance-level relationships and on class-level relationships in federated SPARQL queries to both the Enterprise Graphs and the Reference Data Graph(s) to take advantage of axioms in the Concept Ontology

Example of a query using both predicates between instances and predicates from class definitions:

select distinct ?research\_project where {

    ?research\_project ex:explores-medical-condition ?medical\_condition .

    SERVICE <SPARQL-endpoint-of-Reference-Data-Graph> {

        ?medical\_condition rdfs:subClassOf <<http://purl.obolibrary.org/obo/MONDO_0005578> > .

        <<http://purl.obolibrary.org/obo/MONDO_0005578> > skos:prefLabel "arthritic joint disease" .

    }

}

To support this approach seamlessly, the selected Reference Data Platform needs to have a **SPARQL endpoint that supports federated queries against it**, which means SERVICE calls can be made to this graph from within a SPARQL query to another graph as in the example above.

---
title: "Semaphore"
confluence_id: 61079553
source: "Semaphore_61079553.html"
---
# Conversations with SmartLogic

Semaphore version 4 is purported to be using RDF, triple stores, SPARQL etc.  This seems to have given the impression to the likes of Michele and Stephanie at Dovcot that the ontology editor it is a viable alternative to Protégé or TopBraid Composer, and the Semaphore environment is a viable alternative to whatever architectures one might use in conjunction with an OWL ontology and triples store.  This keeps coming up, so I decide to put it to bed.  I sent a note to Semaphore on their online form and got an interesting response. The long and the short of it is summarized in the document called [SKOS vs OWL.pdf](/attachments/61079553/61112333.pdf). The punch line is that they chose to use SKOS over OWL because it is simpler and easier for business people to understand and use. They acknowledge that if the use case requires inference or machine understanding, then OWL is a good choice.

In 2013, on behalf of Sentara,  I had a long conversation with Alan Flett, a professional services consultant at SmartLogic who was very knowledgable about RDF and SKOS and OWL. That is summarised in this document: [SemaphorAndOntology.pdf](/attachments/61079553/61177864.pdf).

After my email conversation dies down, I will put it up on this page. I will also see about sending something to Dovcot and EMI about this.

Here was my opening missive:

To whom it concerns,

What do you mean by: "Semaphore has been architected to fully harness the power of Semantic Web standards"\*\*. Semaphore had been primarily a thesaurus and taxonomy tool supporting many companies while living mostly in the SKOS world. It was not aiming to be a full-fledged ontology editor that would be a viable alternative to Protégé or TopBraid Composer. In fact, a few years ago, one of our clients made that assumption based your tool being called an 'ontology manager'. They were disappointed to discover it was not the case. Perhaps this has changed?

The word 'fully' as regards harnesing the power of Semantic Web standards sets a very high bar. On the face of it, I take this to mean that:

1. Your ontology manager is a viable alternative to tools such as Protégé or TopBraid Composer. Specifically, it can import and export OWL ontologies in a way that would enable people to easily use other tools to view and further develop ontologies in a round-tripping fashion. That is the main benefit of a standard, after all.  
2. Your ontology manager fully suppports OWL-2 including providing a convenient way to access from inside the ontology manager OWL-2 inference engines such as Fact++, Hermit or TrOWL.  
3. Ontologies exported from the ontology manager easily load into any number of triple stores.

Regarding 1: to what extent might one consider the ontology manager to be a viable alternative to Protégé and TopBraid Composer? What core functions are or are not supported by the ontology manager? What does the ontology manager offer to those primiarly interested in ontologies and triple stores, and less focused on taxonomies and thesauri.

Also, how does Semaphore connect with triple stores? Do you have your own? Can a client export and from the ontology manager and load it into say AllegroGraph or Stardog? Are there any known limitations? Of those, which are on your planning horizon to include in future releases?

\*\* <http://www.smartlogic.com/products/ontology-editor>

References:

- [SKOS vs OWL.pdf](/attachments/61079553/61112333.pdf) (Authored by SmartLogic describing why they chose SKOS over OWL.
- [SemaphorAndOntology.pdf](/attachments/61079553/61177864.pdf). (Notes of a summer 2013 conversation between myself and Alan Flett, a SmartLogic consultant)

# Information Governance

<https://www.smartlogic.com/what-we-do/information-governance>

Semaphore's angle on governance appears to be around the following themes:

- Information unification/harmonization via "precise and consistent metadata" and/or ease of integration via RDF
- Understandability and findability of what you have
- Ability to take actions to enforce information governance and retention policies in an automated fashion

From the website:

*Semaphore:*

- *Combines model-driven rules, natural language processing, entity and fact extraction and subject, topic and thematic classification strategies in the auto classification process to result in precise and consistent metadata to harmonize information.*
- *Provides out-of-the-box API’s to integrate with search engines to drive improved search and retrieval with suggestions, faceted search, SAYT (search as you type) and other features.*
- *Drives information discovery - classification results are expressed as RDF triples. When combined with graph-based technologies, all enterprise information can be unified into a single information source to identify patterns and relationships, explore opportunities and answer questions they could not answer before.*

They push their ability to integrate with various Enterprise Content Management systems (connect with your documents where they are?) and the ability to automate the record retention policies given the huge quantities of documents/information that companies deal with.

From the website:

*When information must be retained for a defined period of time the ability to analyze and automatically identify record type and other facts associated with date of disposition is key to an organizations information governance best practices. Semaphore’s model management, auto classification and enhanced search and retrieval tools assist organizations in developing a robust information management strategy that provides:*

- *High degree of consistency in the assessment and tagging of each information asset*
- *Best practices are enforced systematically each and every time*
- *A transparent and complete audit trail of the compliance checking process*
- *Cost savings in storage (information is regularly reviewed and purged) and costs associated with manual processing.*

*With the Semaphore platform, organizations can implement consistent and transparent information governance policies, which comply with governmental mandates, in order to reduce risk and eliminate sanctions.*

Special emphasis on securing sensitive information:

*"With Semaphore, assets can be analyzed and sensitive information such as, Personally Identifiable Information (PII), Personal Health Information (PHI) and HIPPA can be identified and secured. Organizational trade secrets, intellectual property and trade restricted information can be safeguarded to maintain a company’s competitive advantage and reduce the risk of data or property loss."*

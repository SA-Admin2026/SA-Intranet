---
title: "Semantic Arts & Franz Demonstration Use Case"
confluence_id: 2885582852
source: "2885582852.html"
---

# Why?

Business value is manifested when business processes are improved. The value is that things get done more accurately and efficiently. That value is not evidenced until decision makers can see it happen.  
  
Talking about how knowledge graphs can produce business value does not have the impact that demonstration does. To overcome the hesitancy to purchase services or goods demonstration is powerful. This is particularly true with Knowledge Representation & Reasoning (KR&R) technologies.

It is a simple truth that *eye candy* sells products and services. This is why pulling together a demonstration of Semantic Art’s cybersecurity offerings in important.

# What’s Involved?

This is *old hat* stuff. It is like an old hat that we are very familiar with. I have several old hats that see frequent use. On a tangent, I see [Doug Beeson](https://semarts.atlassian.net/wiki/people/60fb10539f975e0069e7bcd1?ref=confluence) wearing hats and it lift my spirits. He, nor his hats, are old, but they are becoming familiar!

- Create Competency Questions based on a well-defined and well scoped use case
- Select and/or create the ontologies needed to govern the facts of the domains of discourse involved
- Gather the reference data necessary to contribute toward answering the Competency Questions
- Put these ingredients in an appropriate graph database platform.
- Execute the Competency Questions and evaluate the answers.

## Competency Questions

The KISS principle of “Keep It Simple Software” is valuable. Not biting off too big of a bite is tightly coupled to the KISS principle. Starting with simple and small competency questions before advancing to more complex questions is the path to take. Of course, it is important that the Competency Questions are of a nature that the Decision Makers can relate to them.

- My enterprise uses a specific software, are we at risk?
- My enterprise is in the financial sector. What adversaries are known to target the sector?

The scope of the above two questions is very small and limited. By starting small and then expanding we can move beyond the intended demonstration. For example, the following Competency Question requires more enterprise knowledge and data.

- What is the relationship between a specific employee and the crown jewels (high value assets) of the enterprise?

For now, the focus will be less on the enterprise data and more on the external reference data about known vulnerabilities, weaknesses, attack patterns, and adversaries.

## Selecting the Appropriate Ontologies

At Semantic Arts we have started to assemble a sub-gist to address the cybersecurity market called gistCyber. This exercise of creating a demonstration is helping to understand the lines of demarcation between Cyber, Cybersecurity, and Cyber Threat Intelligence. The ontologies selected for use include:

From Semantic Arts:

- gist
- gistBFO
- gistComputing
- gistCyber

Cyber Threat Intelligence

From External Sources:

- CVE (Vulnerabilities)
- CWE (Weaknesses)
- CAPEC (Attack Patterns)
- ATT&CK (general domain)

## Creating Reference Data SPARQL Endpoints

I order to demonstrate a use case to potential adopters of CTIO we need to create several SPARQL endpoints we reference triples. These include:

- CVE Knowledge Graph
- CWE Knowledge Graph
- CAPEC Knowledge Graph
- ATT&CK Knowledge Graph
- SBOM Knowledge Graph

We have Semantic Arts GitHub repositories for each of the above. These repositories are housing the means to generate or convert the reference data into graph form. They are not the graph repositories themselves. Of course, it goes without saying that the AllegroGraph platform will be used to actually provide the graph repositories needed.  
Note: Based on guidance of Jans, I have installed AllegroGraph directly on my development computer (using WSL) rather than using Docker and the AG Docker image. It makes working with AG easier without the container platform in the mixer

### MITRE CVE Knowledge Graph Repository

The [MITRE CVE Knowledge Graph Repository](https://github.com/semanticarts/mitre-cve-reference-kg) hold the sparql-anything template and python script to convert the CVElist repository from JSON to RDF.

Unfortunately, as of today (Feb 23rd, 2025), the conversion process is not fully automated. The resulting output turtle files need to be merged via robot. The intent is to be able to create the CVE data for a SPARQL endpoint in your local repository.

(March 3, 2025) The CVEs from 2022 to February 2025 have been converted to RDF. This is a substantially larger set of data than previously used in the 2024 Automation Village conference.

### MIRTE CWE Knowledge Graph Repository

The CWE ontology will be a derivative of relevant columns in the raw CSV data.

The cwe.tq file is the TARQL template. There are issues with the content (such as plural predicates). Given the development schedule of the demo, this technical debt of parsing the values can wait.

### MITRE CAPEC Knowlege Graph Repository

As with CWEs, CAPEC will be a TARQL project.

The CAPEC ontology will be a derivative of relevant columns in the raw CSV data

### MITRE ATT&CK Knowledge Graph Repository

MITRE’s ATT&CK framework has in part been expressed in the STIX 2.1 language. We have an early draft of a SPARQL-Anything template to convert STIX 2.1 JSON documents to RDF. I created this template at the time the Cyber Threat Intelligence knowledge was expressed in the OASIS TAC ontology. The template will need to be refactored to map to gistCyber and the CTIO.

## In this section

- [Defining Attributes of ThreatActor subclasses](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/cybersecurity-reference-graph-project-plan/semantic-arts-franz-demonstration-use-case/defining-attributes-of-threatactor-subclasses/)
- [Messaging Queue and Messaging Broker](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/cybersecurity-reference-graph-project-plan/semantic-arts-franz-demonstration-use-case/messaging-queue-and-messaging-broker/)
- [Proposed Demo Sequence Diagram](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/cybersecurity-reference-graph-project-plan/semantic-arts-franz-demonstration-use-case/proposed-demo-sequence-diagram/)

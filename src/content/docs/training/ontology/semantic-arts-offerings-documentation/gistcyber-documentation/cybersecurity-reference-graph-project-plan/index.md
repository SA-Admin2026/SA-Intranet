---
title: "Cybersecurity Reference Graph Project Plan"
confluence_id: 3173679105
source: "Cybersecurity-Reference-Graph-Project-Plan_3173679105.html"
---
# Objective

The objective of the project is to deliver an online Cybersecurity Knowledge Graph that can be accessed by enterprises wanting to understand the context around the status of their business. The ontologies that will govern the Cybersecurity Knowledge Graph are gist and gistCyber.

Semantic Arts has received significant interest in gistCyber. Those who have shown interest want to see the value delivered from taking a semantic graph analysis approach to cybersecurity problems. Hence, an objective is to create the reference graph so that we can tangibly show them the value.

# Requirements of the Graph

## Dynamic and Programmatic

To support an enterprise the Cybersecurity Reference Knowledge Graph needs to be maintained with the most current data available. The primary datasets of concern are the CVE and CPE instances. As can be imagined, the number of discovered and reported Vulnerabilities grows at a significant pace. Ideally, when the NVD-CVE JSON data is updated, our Cybersecurity Knowledge Graph would also be updated. However, we are only batch processing from downloaded files at the current time.

There are APIs available for CVEs and CPEs which would allow for updating the graph dynamically on a regular schedule. We have not implemented the use of the APIs are this time.

There is a repository called Ontology Harmonized Graph Management Application (Ohgma). This is a collection of graph utilities for populating and maintaining a semantic graph. Much of the automatic population of the Cybersecurity Reference Graph has been done with the Ohgma utilities.

## Datasets to be Included

- National Vulnerability Database Common Vulnerability Exposures (CVE)
- National Vulnerability Database Common Weakness Enumeration (CWE)
- National Vulnerability Database Common Platform Enumeration (CPE)
- National Vulnerability Database Common Platform Enumeration Matches (CPE Match)
- Common Attack Pattern Enumeration and Classification (CAPEC)
- Adversary Techniques Tactics and Common Knowledge (ATT&CK)

  - Concepts expressed in STIX format
- Controls

  - Center for Internet Security
  - NIST Controls SP 800-53

# Roadmap - Create, Populate, Use

There is a GitHub Project dedicated to this effort:

## Graph Creation

The [Cybersecurity Reference Graph](https://agraph.semanticarts.com/#/catalogs/demo-catalog/repositories/cybersecurity-reference-graph) is in our demo-catalog. This graph is made of named graphs for each of the above-mentioned domains.

## Graph Population - Extraction, Transform, and Load

### Vulnerabilities

### Weaknesses

### Platform & Product

### Attack Patterns

### Controls

### Adversary Techniques Tactics & Common Knowledge

#### Attack Pattern

#### Intrusion Sets

#### Threat Actors

#### Malware

#### Tools

## Graph Usage - Demonstration Use Case

An effort is underway by Semantic Arts and Franz Inc to provide a demonstration that highlights the useage of the [Cybersecurity Reference Graph](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/cybersecurity-reference-graph-project-plan/semantic-arts-franz-demonstration-use-case/).

## In this section

- [Semantic Arts & Franz Demonstration Use Case](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/cybersecurity-reference-graph-project-plan/semantic-arts-franz-demonstration-use-case/)

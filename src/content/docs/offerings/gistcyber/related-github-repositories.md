---
title: "Related GitHub Repositories"
confluence_id: 3265888257
source: Related-GitHub-Repositories_3265888257.html
---

# Related GitHub Repositories

- [Common Vulnerability Exposures](https://github.com/semanticarts/mitre-cve-reference-kg) (CVE)
- [Common Weakness Enumeration](https://github.com/semanticarts/mitre-cwe-reference-kg) (CWE)
- [Common Platform Enumeration](https://github.com/semanticarts/nist-cpe-reference-kg) (CPE)
- [Common Attack Pattern Enumeration & Classification](https://github.com/semanticarts/mitre-capec-reference-kg) (CAPEC)
- [Adversary Techniques Tactics & Common Knowledge Framework](https://github.com/semanticarts/mitre-attack-reference-kg) (ATT&CK)
- [Ontology Harmonization Graph Mapping Application](https://github.com/semanticarts/ohgma) (Ohgma)
- [Ohgma Cybersecurity Reference Graph Builder](https://github.com/semanticarts/ohgma-cybersecurity-graph-builder)

# Data Source Extraction Repositories

## Common Vulnerability Exposures

There are two JSON schema used to represent CVEs. The GitHub repository: cvelistV5 has the most recent schema. The National Vulnerability Database has the older version of the schema, which is version 2.  
  
The reason that the NVD CVEs are still distributed in the older version is that the number of dependencies. The decision was made to continue to support the feed.

There are two different SPARQL-Anything templates to map the JSON documents.

1. [CVE JSON Version 5 SPARQL-Anything template](https://github.com/semanticarts/mitre-cve-reference-kg/blob/develop/sparql-anything-template/cve-json-2-rdf-gistCyber.sparql)
2. [CVE JSON Version 2 SPARQL-Anything template](https://github.com/semanticarts/ohgma-cybersecurity-graph-builder/blob/develop/templates/cve-sat2.sparql)

## Ohgma Repository

The Ohgma Repository holds the java code that is useful for Generic Graph Database Management utility. It enables a knowledge engineer to create manifests of data sources to be extracted, transformed, and loaded into named graphs in a graph platform.

## Ohgma Cybersecurity Reference Graph Builder

This repository has the specific purpose of creating the Cybersecurity Reference Graph.

Some earlier documentation about the Cybersecurity Reference Graph can be found [here](https://semarts.atlassian.net/wiki/spaces/TRR/pages/3173679105/Cybersecurity+Reference+Graph+Project+Plan).

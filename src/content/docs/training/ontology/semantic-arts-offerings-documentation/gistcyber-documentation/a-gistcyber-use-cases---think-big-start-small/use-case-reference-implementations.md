---
title: "Use Case Reference Implementations"
confluence_id: 3016916995
source: "Use-Case-Reference-Implementations_3016916995.html"
---
Based on the two use cases we have selected to pursue we are going to create two reference implementations that show value to prospective adopters of gistCyber.

1. Vulnerability Assessment Reference Implementation
2. Cyber Investigation Reference Implementation

Both of these Reference Implementations will require access to reference data.

- CVE (vulnerability data)
- CWE (weakness data)
- CAPEC (attack pattern data)
- ATT&CK (attack pattern data)
- ThiaCERT-like Threat Actor Encyclopedia

Each of these reference datasets can be made available as SPARQL endpoints. On their own, these endpoints could be valuable to adopters of gistCyber.

In the first quarter of 2025, we started private repositories for each of these reference datasets, except for the Threat Actor Encyclopedia.

# Projects and Repositories

The development of gistCyber is being conducted in several GitHub Projects and GitHub Repositories.

## Projects

- gistCyber Alpha Release

  - Development of the Next Ontology Release
- Vulnerability Assessment Reference Implementation

  - Creation of an application to demonstrate gistCyber for risk and vulnerability analysis
- Cyber Investigation Reference Implementation

  - Creation of an application to demonstrate gistCyber for cyber investigations such as the FBI or SOC analysts may pursue
- Threat Actor Encyclopedia (potential)

  - Project to create a SPARQL Endpoint to provide graphs about Threat Actors for use in the above use case implementations. This is valuable as a stand-alone offering in my opinion.

## Repositories

[ATT&CK Repository](https://github.com/semanticarts/mitre-attack-reference-kg)

[CVE Repository](https://github.com/semanticarts/mitre-cve-reference-kg)

[CWE Repository](https://github.com/semanticarts/mitre-cwe-reference-kg)

[CAPEC Repository](https://github.com/semanticarts/mitre-capec-reference-kg)

A primary purpose of the repositories is to maintain the code and mappings for Extraction, Translation, and Load (ETL) of third-party reference data.

- CVE (vulnerability data) and CWE (weakness data) are closely related. Currently each has its own repository.

  - Combining the two repositories into one may make sense. However, they have separate extraction methods because they are from two different sources.
  - CWEs are more general or abstract than CVEs. CWE can be thought of as categories of the more specific CVEs
- CAPEC (attack pattern data) and ATT&CK (attack pattern data) are closely related. Each has its own repository.

  - Combining the two repositories into one may make sense. However, they have separate extraction methods because they are from two different sources.
  - Currently, the CAPEC attack patterns are related to the ATT&CK attack patterns via their ATT&CK Framework identifier. The identifier starts with a capital “T”, for example “T1234”. The T is for “Technique” which in the ATT&CK Framework relates to a STIX 2.1 AttackPattern
  - In the ATT&CK Framework the attack pattern is represented as a STIX 2.1 CourseOfAction.

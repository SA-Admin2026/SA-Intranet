---
title: "Shortcomings of gistCyber"
confluence_id: 3277619202
source: Shortcomings-of-gistCyber_3277619202.html
---
# Past Wisdom

Peter Neorr is a project manager at PNNL today. He told me yesterday he was leaning into LLM technologies. That’s cool, but not why I’m bringing him up … when he was a developer at DarkLight he said something profound that has stuck with me:  
  
***” If you don’t have time to do it correctly the first time, when will you have time to go back and fix it?”***

There are times when speed is paramount. The development of gistCyber is one of those. We needed to quickly get gistCyber to a state that we could demonstrate the value that it provides to potential clients. We sacrificed quality and completeness for speed. We created an implementation that we can demonstrate, and it successfully caught the eyes of some potential clients.

However, we now need to make a decision about going back and refactoring gistCyber where it is lacking. That’s the point of this document.

# The Weak Links

Where exactly are the points that need to be refactored? Here is my opinion:

## Ontology Weaknesses

- Incomplete representation of the STIX 2.1 Standard. Not all concepts are represented.
- The original plan for gistCyber was to use gistComputing to cover the concepts of the STIX Cyberobservable Objects. These SCOs were not represented in gistCyber, This is a specific example of gistCyber not being complete.
- No separation of concerns between the representations of the STIX 2.1 Standard and the extensions to the STIX 2.1 Standard.
- Enterprises want to be compliant with standards that are being used and can bring them business. However, gistCyber can’t make the claim of being STIX 2.1 Standard compliant at this time.
- The datatype properties and object properties naming conventions of gistCyber don’t exactly match the property names of the STIX 2.1 Standard.
- gistCyber is an extension or expansion of the STIX 2.1 Standard. As such, additional concepts need to be added that are not currently addressed.

  - Process Model: Course of Action, Threat Scenario, Control (yep Control), Playbook, Threat Lifecycle, Business Process, etc.

## Data Graph Weaknesses

- Although not ontology specific the data transforms are in need of review to confirm that the mappings from the source data are accurate and complete.
- CVE JSON comes in two schemas. CVE JSON schema 5, and CVE JSON schema 2. The NVD CVE feed continues in schema 2. The GitHub repository (cvelistV5) uses the newer schema.
- The Java code used to do the ETL of the various data is called Ontological Harmonized Graph Mapping Application (Ohgma). I did not get this completed and no one other than myself has been involved in its development or use.
- The concept of a Common Platform Enumeration (CPE) is there, however, the information about what Products/Platforms are installed in the enterprise is in Vulnerability scans. The enterprise needs a way to generate or pass an SBOM to the graph.

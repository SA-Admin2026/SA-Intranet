---
title: "gistBFO Mapping Notes"
confluence_id: 2830237699
source: "gistBFO-Mapping-Notes_2830237699.html"
---
# Purpose

This page is to capture some of the thought process behind mapping Cyber Threat Intelligence Ontology (CTIO) concepts to gistBFO. A potential end goal is to map the CTIO ontology to CCO, not just BFO. The choice here is to create in gistCyber the equivalent or superclasses to the concept needed in a general/generic cybersecurity domain ontology. Once we have a representation of gistCyber we can extend it with a CTIO.

This approach means reviewing the CTIO and creating (not importing) the concepts in gistCyber. Concepts specific the the Cyber Threat Intelligence (CTI) domain will be addressed in the CTIO, not gistCyber. Without discussion with the Semantic Arts team and other Subject Matter Experts the scope of gistCyber and CTIO is a bit blurry. For example, we’ll need to decide where concepts associated with the STIX language belong, in gistCyber or CTIO

# Importing a Bit of Background

The structure of gistCyber is built upon the foundation of a couple of ontologies; gistBFO and gistComputing. These two ontologies are directly imported by gistCyber. Intuitive in the names of these ontologies is the fact that gistBFO imports Basic Formal Ontology (BFO) and gistComputing imports gist.

This leads to an issue that we need to recognize. The gistComputing ontology has not been mapped to the BFO. Hence as the development of gistCyber progresses we need to decide where to map the gistComputing classes to BFO. Should we do so in gistComputing or should we do so in gistCyber?

# ThreatActor

The ThreatActor class is a bit ambiguous with respect to representing an gist:Organization or gist:Person. The community will use the term Threat Actor to refer to either.

At this time, it is being asserted as a subclass of gist:Organization. In the future, after discussion with the Semantic Arts team it may be considered to be a union of gist:Organization and gist:Person.

The concept of an individual who is a Threat Actor may best fall under the concept of gist:Agent defined in gistComputing. TBD

# AttackPattern

An Attack Pattern is a series of actions taken to compromise a target. If we interpret “action” as “task”, the AttackPattern maps well to gist:TaskTemplate.

In STIX the concept of an Attack Pattern is sometimes used to categorize types of attacks. The MITRE ATT&CK framework is an example of reference instances of Attack Patterns.

# CourseOfAction

A Course Of Action is a series of actions taken to mitigate or prevent problems or issues. It is the counter to an Attack Pattern. Similarly, it too is considered a gist:TaskTemplate.

# Vulnerability

A common use of the term Vulnerability is as a defect in software or firmware that when exploited allows unintended behavior within the system.

The concept of a “Defect” is not covered in gist, but is addressed in gistComputing. There is a minor syntax error in the gistComputing that needs to be corrected on line 874. Removing line 874 resolves the problem.

![image-20250120-182447.png](/attachments/2830237699/2830336012.png)

Another note, gistComputing has not been mapped to BFO. Hence gistComputing:Defect is not currently mapped to BFO.

![image-20250120-185856.png](/attachments/2830237699/2830270477.png)

## Too Narrow of an Interpretation

Considering Vulnerability as only a software defect is too narrow of a consideration. For an example, consider an undertrained employee. Isn’t an employee who does not know or adhere to security policies a vulnerabiity?

Also consider the situation of all software as being without defect, but the system configuration is not well controlled. This represents a type of vulnerability as well.

Hence, in gistCyber, Vulnerability is the superclass to several subclasses that are not reflected in the STIX Ontology: 1) SoftwareVulnerability, 2) ConfigurationVulnerability, and ProtocolVulnerability. Where ProtocolVulnerability refers to the behaviors of humans in the loop that don’t follow proper protocol.

# Campaign

A Campaign is a grouping or collection of actions involved in an attack. Hence, a Collection of AttackPatterns. This is really up for a good discussion.  
  
Another perspective is that a Campaign is an AttackPattern as a nesting of multiple AttackPattern instances.

Possibly a Campaign is a TaskTemplate that is made up of TaskTemplates. Currently implemented in this manner.

![image-20250120-201926.png](/attachments/2830237699/2830139402.png)

# IntrusionSet

Similar to Campaign, and Intrusion Set is a collection of behaviors or actions. In the case of an IntrusionSet it is expected that the actions are those of a single organization.

IntrusionSet: An Intrusion Set is a grouped set of adversarial behaviors and resources with common properties that is believed to be orchestrated by a single organization. An Intrusion Set may capture multiple Campaigns or other activities that are all tied together by shared attributes indicating a commonly known or unknown Threat Actor. New activity can be attributed to an Intrusion Set even if the Threat Actors behind the attack are not known. Threat Actors can move from supporting one Intrusion Set to supporting another, or they may support multiple Intrusion Sets. Where a Campaign is a set of attacks over a period of time against a specific set of targets to achieve some objective, an Intrusion Set is the entire attack package and may be used over a very long period of time in multiple Campaigns to achieve potentially multiple purposes. While sometimes an Intrusion Set is not active, or changes focus, it is usually difficult to know if it has truly disappeared or ended. Analysts may have varying level of fidelity on attributing an Intrusion Set back to Threat Actors and may be able to only attribute it back to a nation state or perhaps back to an organization within that nation state.

The defining characteristics of an IntrusionSet seems to be owned by a single organization, can encompass multiple Campaigns, and has a potentially longer duration than a Campaign.

# Grouping

Without a great deal of consideration given to it, a Grouping is currently considered as a gist:Collection.

# Identity

This is an interesting definition. What is the relationship between and Identifier and an Identity? The STIX definition infers that it is a Person or Organization.

![image-20250122-175905.png](/attachments/2830237699/2833809409.png)

For the purposes of gistCyber this could mean that an Identity is an “independent continuant” that is either a Person or an Organization.  
  
Identity: Identities can represent actual individuals, organizations, or groups (e.g., ACME, Inc.) as well as classes of individuals, organizations, systems or groups (e.g., the finance sector). The Identity SDO can capture basic identifying information, contact information, and the sectors that the Identity belongs to. Identity is used in STIX to represent, among other things, targets of attacks, information sources, object creators, and threat actor identities.

![image-20250122-182559.png](/attachments/2830237699/2833940492.png)

# Tool

In the STIX definition of the term Tool it is stated to be software. Although Malware is software it is not considered to be a tool in the same sense. A common phrase used in the community is “Living off the land”. Meaning miscreants use the legitimate software installed in the system they are compromising.

# Indicator

What is an indicator? According to the STIX 2.1 defintion:

***Indicators contain a pattern that can be used to detect suspicious or malicious cyber activity. For example, an Indicator may be used to represent a set of malicious domains and use the STIX Patterning Language (see section 9) to specify these domains. The Indicator SDO contains a simple textual description, the Kill Chain Phases that it detects behavior in, a time window for when the Indicator is valid or useful, and a required pattern property to capture a structured detection pattern. Conforming STIX implementations MUST support the STIX Patterning Language as defined in section 9. Relationships from the Indicator can describe the malicious or suspicious behavior that it directly detects (Malware, Tool, and Attack Pattern). In addition, it may also imply the presence of a Campaigns, Intrusion Sets, and Threat Actors, etc.***

The STIX definition is very specific to the STIX language The definition calls out specific restrictions to be compliant with a STIX indicator. The abstract datatype (class) of a STIX Indicator is made up of; a description, a reference to the kill-chain phase, a temporal window of usefulness, and a requirement to have a STIX pattern property.

The STIX definition describes a Indicator like it is a mechanism that can be used to detect a malicious action or state. Analogous to a chemical indicator to detect the pH of a solution. Which makes sense in the STIX context where Indicators are shared via TAXII and “applied” to the enterprise data to see if a maliciousness is present.

The gistCyber definition needs to be more general/generic and define the essence of an indicator in cyber space.. We need to capture the essence of “if I see ***this***, it means ***that***”

I really hope to have a discussion about where this belongs within gist. The ContentExpression c;lass as a superclass to an Indicator seems right to me.

![image-20250123-214226.png](/attachments/2830237699/2836070406.png)![image-20250127-183131.png](/attachments/2830237699/2841083905.png)

Information or fact(s) that reveal additional information about a situation or status.

# Incident

There are many types of events that are not considered Incidents in the domain of cybersecurity. The concept of Incident carries with it the notion of a level of consequence that disrupts business.

For now, positioning an Incident under Event seems too abstract and does not address the nature of the consequences.

# Grouping

The concept of a Grouping seems to be very “STIXish”. In other words, it may not be appropriate in the gistCyber ontology but rather in the CTIO that will import gistCyber.

# SoftwareUpdate

Oops, I asserted that a Software Update is a subclass of Software in the gistCyber onotlogy. Both concepts are defined in gistComputing and perhaps should have been address in gistComputing.

# Location

Placing Location under Place.

![image-20250127-211759.png](/attachments/2830237699/2841083923.png)

## In this section

- [gistComputing / gistBFO Mapping](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/gistbfo-mapping-notes/gistcomputing-gistbfo-mapping/)

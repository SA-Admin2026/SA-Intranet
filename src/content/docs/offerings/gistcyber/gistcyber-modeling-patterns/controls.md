---
title: "Controls"
confluence_id: 3257794561
source: Controls_3257794561.html
---

# Controls

## Current Model:

This is the parti so far based on the research listed below and discussions with the team:

![image-20260429-003451.png](/offerings/attachments/3257794561/3311173633.png)

@prefix gist: <<https://w3id.org/semanticarts/ns/ontology/gist/>> .  
@prefix gistx: <<https://w3id.org/semanticarts/ns/taxonomy/gist>> .  
@prefix gist3: <<https://w3id.org/semanticarts/ns/triples/gist/>> .  
@prefix owl: <<http://www.w3.org/2002/07/owl#>> .  
@prefix rdf: <<http://www.w3.org/1999/02/22-rdf-syntax-ns#>> .  
@prefix rdfs: <<http://www.w3.org/2000/01/rdf-schema#>> .  
@prefix skos: <<http://www.w3.org/2004/02/skos/core#>> .  
@prefix bfo: <<http://purl.obolibrary.org/obo/bfo.owl>> .

gist:SecurityControl rdfs:subClassOf gist:Intention, bfo:BFO\_0000002  
; gist:isCategorizedBy gist:ControlType  
; gist:isIdentifiedBy gist:ID  
; gist:isMemberOf gist:SubControl  
; gist:prevents gist:AttackPattern, gist:Vulnerability  
; gist:detects gist:AttackPattern  
; gist:mitigates gist:AttackPattern  
; gist:deters gist:AttackPattern  
; gist:prohibits gist:PersonBehavior  
.

gistx:\_ControlType\_Administrative a gist:ControlType .  
gistx:\_ControlType\_Physical a gist:ControlType .  
gistx:\_ControlType\_Technical a gist:ControlType .

gist:SubControl a gist:Collection #Looks like only CIS uses sub-controls so might just keep it as a collection and can add CIS cats/metadata on this but keep controls metadata on controls  
; gist:isIdentifiedBy gist:ID  
.

gist:AttackPattern gist:isCategorizedBy gist:AttackPatternType  
; gist:exploits gist:Vulnerability .

## Research

See also <https://github.com/semanticarts/gistCyber2/issues/10>   
  
From Mitre:

"Attack Patterns" are descriptions of the common attributes and approaches employed by adversaries to exploit known weaknesses in cyber-enabled capabilities. Attack patterns define the challenges that an adversary may face and how they go about solving it. They derive from the concept of design patterns applied in a destructive rather than constructive context and are generated from in-depth analysis of specific real-world exploit examples.

From Google AI

**Types of Cyber Controls:**

- **Technical Controls:** Software or hardware-based, such as firewalls, encryption, anti-malware, and intrusion detection systems.
- **Administrative Controls:** Policies, procedures, and training, such as password policies, security awareness programs, and access, management policies. [Guidelines, frameworks, standards, etc.]
- **Physical Controls:** Physical, tangible protections, including surveillance cameras, security guards, badge systems, and locked data centers.

**Functions of Cyber Controls**  
Controls are also classified by their function in managing risk:

- **Preventative:** Stop attacks before they occur (e.g., firewall, multi-factor authentication).
- **Detective:** Identify an active or past attack (e.g., log monitoring, SIEM systems).
- **Corrective:** Fix the consequences of an incident (e.g., incident response, data backups). [Mitigation]
- **Deterrent:** Discourage potential attackers. [implementing measures, policies, and signals that discourage potential attackers by increasing the perceived risk, effort, or cost of an attack, making it less attractive than the potential gains.]

**Abstract defn of ‘Control’**

‘Security Control’  Cyber Controls, subclass of abstract Control

Webster definition of Control:

a.    to exercise restraining or directing influence over

b.    to have power over

c.     to reduce the incidence or severity of especially to [innocuous](https://www.merriam-webster.com/dictionary/innocuous) levels

I think we want to use c.

Security Controls: “Are the countermeasures or safeguards used to reduce the chances that a threat will exploit a vulnerability.”

“A safeguard or countermeasure prescribed for an information system or an organization designed to protect the confidentiality, integrity, and availability of its information and to meet a set of defined security requirements.” <https://csrc.nist.gov/glossary/term/security_control>

We should probably use this definition, but there are a few definitions on this site which is weird that they don’t have a consensus. They basically all say the same thing.

From: <https://destcert.com/resources/types-security-controls/>

**Directive**: Directive controls direct, confine, or control the actions of subjects to force or encourage compliance with security policies. An example of a directive type of control is a mandate or a corporate policy.

**Deterrent**: Deterrent controls discourage violation of security policies. An example is a sign warning that a piece of land is private property and trespassers will be shot. Nothing prevents someone from walking past the sign, but it’s a good deterrent.

**Preventive**: Preventive controls can prevent undesired actions or events. For example, a fence that prevents someone from walking onto private property. Another example involves not having flammable materials around and therefore preventing a fire from starting.

**Detective**: Detective controls are designed to identify if an incident has occurred. Importantly, detective controls operate after an incident has already occurred. An example is a smoke alarm detecting smoke.

**Corrective**: Corrective controls are used to minimize the negative impact of an incident. An example is a fire suppression system activating. **[Is this a “mitigation”?]**

**Recovery**: Recovery controls are designed to recover a system or process and return it to normal operations following an incident. An example is a data backup policy allowing restoration of data on an affected server after an incident has taken place.

**Compensating**: Compensating controls are typically deployed in conjunction with other controls to aid in enforcement and support of the other controls. They try to make up for the lack of other effective controls. However, compensating controls can also be used in place of another control to provide the required security. One example involves deploying a Host Intrusion Prevention System (HIPS) on a critical server, in addition to having a Network Intrusion Protection System (NIPS) operating on that server’s subnet. This way, if any offending traffic manages to slip by the NIPS tool, the HIPS on the server may still be able to prevent malware from damaging it.

Remember that detective, recovery, and corrective controls are enforced after an incident is present. However, deterrent, directive, preventive, and compensating controls are applicable before an incident takes place. It is always better to stop something bad from happening than it is to deal with it after it has happened.

Other concepts:

·       Threat

·       Vulnerability

·       Risk

·       Attack Pattern

“We can never reduce the risk by 100%, we always say we reduce risk back to an acceptable level”, combination of technical and non-technical

<https://www.youtube.com/watch?v=EXLI3xkgkgw&t=70s>

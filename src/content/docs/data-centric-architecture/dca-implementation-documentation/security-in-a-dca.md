---
title: "Security in a DCA"
confluence_id: 678100993
source: Security-in-a-DCA_678100993.html
---
There was a discussion/debate at the DCC conference (2/2019) about security for the DCA. While a lot of ideas were discussed, no consensus was reached about what was needed.

Since we are in the process of developing a Data Centric Architecture implementation we need to come to some agreement about what we need to support and implement.

This page is an attempt to enumerate possible options, explore expected use cases, and propose at least one, and maybe more than one, recommend security solutions.

## Terminology

- Authentication - verify a person, or someone logging into a system, is who they say they are
- Authorization - verify what can be done by an authenticated user/login
- Permission(s)
  - (atomic | lowest assignable unit) an individual what can be done (or restricted from being done)
  - usually: an action (print a document, view a report, edit a document, create a new employee)
  - sometimes: defines or restricts what can be acted upon (which printers, reports, documents, data, etc)
- Role Based Access Control  
  - represents a set of behaviors or responsibilities (functions)
  - often: assignable groups of permissions
  - Role properties: such as two roles that a user can not have simultaneously (separation of duty), prerequisites, hierarchical?
  - Deactivation of roles (temporarily by session?)
- Policy / Policy Set
- Context (Intent) Based Access Control
  - network / device / geo-location / spatial
- User(s)
  - Authenticated user / login
  - often: assigned roles and/or is assigned permissions

Security vs Privacy ??

## Security Policy Options

None

Database/TripleStore level read/write/delete

Append - seen in some papers.... maybe means you are allowed to add a triple to an existing class/subject?

Roles - by assignment and inference (if added as a Patient then has Patient Role permission granted)

Application based Use Cases

Conflict resolution of various rules and which override others? Conflict detection: any automated means to detect?

Criteria base permissions (model driven)

SWRL? used by HL7

## Granularity

[Permissions apply at db/repo, graph/context, fact/triple. ]

Database/Repository

RDF, OWL, or SHACL type/shape level

Named Graph

Triple level security

What is triple level security? Model driven (contextual, declarative)? Access lists (non-contextual, non-declarative)?

From Linked Data Authorization Platform paper

- Triple Patterns (TP) are essentially triples that can have variable at any position, used for selection of resources that have certain property or connection with other resource. The TP selection results with a set of triples.
- Basic Graph Patterns (BGP) are set of triple patterns that can capture more complex relationships among the resources.
- Graph membership (Gm) enables selection of triples that belong to a given named graph.
- Dataset membership (DSm) enables selection of triples that belong to a given dataset.

## Expected Use Cases

Call center phone person

HIPAA mental health data. Family practitioner Dr. can't know. System tells Dr. that prescribed med should NOT be given based on a drug-drug interaction, but not why. Process has higher privilege than the user.

?? Need more concrete examples

Privacy of information gathered from interactions with users (data owners) and their acknowledgement and persistence of their privacy preferences. There is a bunch of work being done to figure out how to let users define and trade their information with data consumers (websites, games, etc). See overview in "PrivacyKnowledgeModellingForInternetOfThings.pdf", it lists a number of ontology based approaches.

Anonymization of data... what can be done without accidentally leaking PII information.

What data, who owns it, who is asking to see it, what is the intent of its usage, ?

A person wearing a heart-rate sensor may want to keep his/her measurements private until an emergency situation occurs. The authorization platform must provide both protection and exposure of the data, based on the context.

Context & Intent could trigger different logging/notification protocols

Service Provider B cannot report back on results of operations to parties other than those which have provided the data, unless the data provider has authorized another party.

USE CASES

1. call center access (financial services, medical/health, ?)
2. Data privacy ? specific requirements? GDPR (EU General Data Protection Regulation), CCPA (California Consumer Protection Act)
3. What is the real requirements about PII (personally identifiable information)?
4. Aggregate Reporting: someone who is not allowed to see individual's data can aggregate data as long a no PII is leaked in the process. Avg number of visits per person per year/month, etc.
5. HIPAA :

1. Need to know basis... what does a person setting up an appointment get to see?
2. Drug / drug interaction process needs more permission than the doctor using it.
3. Mental health information may have to change/deny results of certain options without access to the reason why

6. Contracts, insurance policies, etc

1. call centers
2. approval processes
3. internal reviews
4. claims
5. Use case from Dave: I file a claim, I then have an inferred role as Claimant. I can access my client viewable information about the claim. I also work for the company handling claims and so part of my job (my Role) is I review claims and see private/internal information we have about claims (reports, analysis, etc). However, I can not see private/internal claim information about my claim and I can not work on my claim because I am involved in the claim.

7. HL7 - links found in: HL7 Version 3 Standard: Security and Privacy Ontology
   1. [Access Control Based on Category of Action](http://wiki.hl7.org/index.php?title=Security_and_Privacy_Ontology_Use_Cases#Access_Control_Based_on_Category_of_Action)
   2. [Access Control Based on Category of Object](http://wiki.hl7.org/index.php?title=Security_and_Privacy_Ontology_Use_Cases#Access_Control_Based_on_Category_of_Object)
   3. [Access Control Based on Category of Structural Role](http://wiki.hl7.org/index.php?title=Security_and_Privacy_Ontology_Use_Cases#Access_Control_Based_on_Category_of_Structural_Role)
   4. [Access Control Based on Category of Functional Role](http://wiki.hl7.org/index.php?title=Security_and_Privacy_Ontology_Use_Cases#Access_Control_Based_on_Category_of_Functional_Role)
   5. [Access Control Based on Multiple Role Values](http://wiki.hl7.org/index.php?title=Security_and_Privacy_Ontology_Use_Cases#Access_Control_Based_on_Multiple_Role_Values)
   6. [Enable Design of Access Control System](http://wiki.hl7.org/index.php?title=Security_and_Privacy_Ontology_Use_Cases#Enable_Design_of_Access_Control_System)
   7. [Facilitate an Automated Decision Function](http://wiki.hl7.org/index.php?title=Security_and_Privacy_Ontology_Use_Cases#Facilitate_an_Automated_Decision_Function)

### Existing Standards, Papers, or Frameworks

- OpenID Connect - seems to be leading identity authentication protocol (thin layer on top of OAuth2)
- OAuth 2.0 - seems to be leading authorization protocol to access other resources
  - maybe not needed much for a single integrated client/server DCA
  - potentially useful in federated query use cases where we access other data
  - potentially useful for pluggable apps from other companies to access our data (we'd be the resource server)
- SCIM - System for Cross-domain Identity Management - protocol for user provisioning
  - useful to provision & disable user accounts based on corporate directories (AD, LDAP, etc)
  - might be able to provision user into groups that might be matched to Roles ??
- XACML - complex... I haven't seen where it could connect to the data model but I haven't gotten very far into it  
  - There are some papers about using XACML with OWL and inference/reasoning.
- SAML - Security Assertion Markup Language - is a standard for logging users into applications based on their sessions in another context.
- WebID (Web Identity and Discovery) - a mechanism used to uniquely identify and authenticate a person, company, organisation or other entity, by means of a Uniform Resource Identifier (URI). Together a WebID profile and a public key certificate can be used to authenticate users.
- [KAoS](https://ontology.ihmc.us/kaos.html) Policy Services Framework - [KAoS Tutorial](https://ontology.ihmc.us/KAoS/KAoS%20Tutorial.pdf)
- Rei - [website](https://ebiquity.umbc.edu/project/html/id/34/Rei-A-PolicySpecification-Language) - Rei is a policy language based in OWL-Lite that allows policies to be specified as constraints over allowable and obligated actions on resources in the environment. - Rei provides support for four distinct policy types, permissions, prohibitions, obligations and dispensations. Whereby, permissions and prohibitions in Rei are equivalent to positive and negative authorisations in KAoS, and likewise obligations and dispensations in Rei and equivalent to positive and negative obligations in KAoS.
- The Rein Policy Framework for the Semantic Web - [website](http://groups.csail.mit.edu/dig/2005/05/rein/) - a decentralized framework for representing and reasoning over distributed policies in the Semantic Web. Rein (Rei and N3) uses high level Rei concepts for policies and N3 rules to connect these policies to each other and the Web.
- Proteus [92] uses a hybrid approach to access control policy specification. The authors examine early versions of KAoS and Rei, and highlight the strengths and weaknesses of both ontology based and logic based policy languages and frameworks.
- ANSI/NCITS 359-2004, the American National Standard for Information Technology - Role Based Access Control
- HL7 - Health Care standards body
  - HL7 Version 3 Standard: Security and Privacy Ontology, Release 1 => [restricted download](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=348) - And the [HL7Wiki Page](http://wiki.hl7.org/index.php?title=Security_and_Privacy_Ontology)  
    - RBAC\_Ontology.owl ==> Permission, Session, AccessEvent
    - RoleOntology.owl ==> Examples of enumerated roles in healthcare. Separated into Functional and Structural.
    - RouteOntology.owl ==> Method of access: LAN, VPN, WiFi, WAN
    - SensitivityOntology.owl  ==> Inside the Security and Privacy Ontology download (above). Enumerates specific categories of data that have their own sensitivity.
  - HL7 Version 3 Standard: Healthcare (Security and Privacy) Access Control Catalog, Release 3 => [restricted download](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=72)
  - HL7 Healthcare Privacy and Security Classification System (HCS)
  - HL7 RBAC Healthcare Permission Catalog
  - These are restricted in the sense that you have to get an account to download and agree to their licensing agreement. I (Jamie) have done that and downloaded them.
- [Apache Shiro](http://shiro.apache.org/) - Java security framework that performs authentication, authorization, cryptography, and session management.
- -

### External Resources

- [The New RBAC: Resource-Based Access Control](https://stormpath.com/blog/new-rbac-resource-based-access-control) - Les Hazlewood
- [Access Control and the Resource Description Framework: A Survey](http://www.semantic-web-journal.net/system/files/swj1280.pdf)
- Test your website SSL configuration - <https://www.ssllabs.com/ssltest/analyze.html>

Buzzwords in Security

- Homomorphic Encryption
  - baffle, Fortanix, Ziroh Labs, En|Veil
- Data Provenance
  - minereye, ionic security, prifender, tierion, TransitNet, BigID
- Data Anonymization
  - Hazy, aircloak, Privitar, mostly AI
- Data Access Management
  - Protenus, Pythian, Vera, trunomi, Strongkey, tresorit
- Quantum Encryption
  - Post-Quantum, Quintessence Labs
- Active Data Defense
  - Aperio, CryptoMove, Mofphisec, Narya Security
- Data Custodianship
  - Very Good Security
- Blockchain Data Management
  - Keychain, NuCypher, Ohalo, guardtime, luna DNA, spring

## Working through some thoughts on a recommendation

Goals: Simplicity, Understandability, Usable/Reasonable Performance, Conflict/Correctness/Validation?

No one is really giving much feedback. To make progress I am going to just start proposing things and they can be shot down or confirmed....

Simple authentication (Do we call this "Level 1"? But then there might be implied meaning in if is Level 1 better or worse then Level 2)

A user authenticates (identifier & password) and gets access to anything the system can do.

With the possible exception of an "admin" privilege. But if an "admin" privilege is a concept of the system is it now Role based?

Static permissions

Dynamic permissions

Static Roles & static Permissions

Static Roles & dynamic Permissions

Dynamic Roles implies dynamic permissions

Plug-able Roles and/or plug-able permissions - defined by applications

Roles are groups of permissions... but what about bundled groups of permissions that a role ?

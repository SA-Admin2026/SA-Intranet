---
title: "DCAO & Related Ontologies"
confluence_id: 745799681
source: 745799681.html
---

# DCAO & Related Ontologies

Discussion & Development of Ontology requirements of a/our Data Centric Architecture

## Categories of Information

### **What goes into the lowest level (core) ontology**?

Probably: Users, security (Roles, Permissions), Realms, Provenance (use PROV-O?)

Maybe: Ontology management, auditing, logging, error handling, notifications, RDF versioning, encryption, data types (normal, encrypted, hashed, ?), named & parameterized queries, federated querying, SPARQL representation (SPIN?), prefixes, named graphs, external access of some form (SPARQL protocol, some APIs)

Possibly: queues, events, triggers, actions/stored procedures,

Is there a useful distinction of core vs functional? Core being things associated with being a datastore, Functional being things associated with being a “system” to build on top of the datastore?

Minting of URIs/IRIs?

### **Ontology Editor and Graph Visualization Ontology?**

Slow reveal for Graphs (tbox, cbox, abox). Ontology versioning & version management? Or just a specific application of a general RDF version management.

Minimal structure and suggested structure to include recommended annotations. Use SHACL?

### **Application Modeling Ontology**

How to model applications for low-code/no-code development

Things ? : apps, use-case, process, template, forms, documents, UI elements, UI composition, data flow, events, queues, input/output, reports & charts & graphics, styles & themes, logic, transformations, analytics, dependencies (ontologies, electronic services?, configuration, ??)

### **Versioning RDF Triples**

We want to version at least things like Ontologies and no-code application models. Does it generalize to arbitrary RDF triples?

Found: r43ples - version control for triples - [Paper](https://pdfs.semanticscholar.org/187e/60acfcc687b21c2a8887626b1e28d19f03aa.pdf) - [website](http://plt-tud.github.io/r43ples/) - [github](https://github.com/plt-tud/r43ples)

## Ontologic Starting Discussion

User vs Account or UserAccount?

Username → label?

Email address?

Identity Provider

Identity Provider’s ID for User

Do we care about: first name, last name, (other) contact info, organization

Roles/Permissions

Roles

Bags (or sequences if order matters, which it might) of Permissions

DCA defined Roles ? : Realm Admin, Super User?

Roles may be added by apps/?, so they should be associated with an (owner, authority, ?)

Permissions

Types of things to permission?

Realms (collections of workspaces)

Workspaces (data/triplestore but more complex)

Use cases (or apps)

RDF Triple filters [grant/deny : CRUD] (is this triple level security?)

Edit Roles & Permissions

Semantic filters (similar to HL7 sensitivity?)

Permissions may be added by apps/?, so they should be associated with an (owner, authority, ?)

Realm

short name : Label

Long name

domains

Namespace / domain

Account policy

Allowable Identity Providers

Invite only? Auto sign up based on Identity provider

Roles / Permissions within Realm

Workspaces (a Collection)

Meta

Main

Apps

Workspace

Internal data stores

repo - user’s triples

prov - meta-data storage

document stores ?

Electronic Service

Identity Provider (need now)

Datastore (need now)

Credit Card charging/billing (example)

Credit report service (example)

Common Properties?

Label

Description

Protocol?

Type?

Identity Provider

Label / Name

Protocol ?

Secret Key

Client ID - Our ID to the Identity Provider

URL ?

Datastore – a set of data that can be accessed/queried

RDFstore - RDF triples, accessible via SPARQL protocol?

Property Graph ?

SQLstore

Document / file store

difference between a URL to a file vs a URL that is a query?

Realm (more complex than a simple RDFstore…)

R2RML ?

Composed of:

Electronic Service

Common Properties?

Protocol?

Data format / data type(s)? - RDF vs relational vs document vs GraphQL

Data Type / Format / Serialization

RDF triples [Type = RDF Triples/Quads, Format = serialization (RDF/XML, N3, turtle, trig, ?)]

Relational data [Type = Relational/(Tabular?) Format = serialization (csv, tsv, ?)]

JSON-LD  
GraphQL

MIME types (for everything, but the ones above are useful vs most would be opaque [not directly usable])

Electronic Protocol

HTTP 1.0 / HTTP 1.1

HTTP 2.0

SPARQL Protocol

Oauth 2.0

OpenID Connect

SQL ?? query language not protocol ?

MySQL protocol (an example, I think supports different transport layers)

FTP / SMTP / DNS / ? (examples)

Transport Layer - maybe not needed in a model

TCP/IP

HTTP 1.0 / HTTP 1.1

unix sockets

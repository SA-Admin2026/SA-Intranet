---
title: "DCC 2019 - Mark Wallace raw notes"
confluence_id: 678428678
source: DCC-2019---Mark-Wallace-raw-notes_678428678.html
---

# DCC 2019 - Mark Wallace raw notes

# DCC Ft Collins

--

Mon 2/4/2019  DAY 1

# DCA overview

by Dan.  Like what we did at DAS 2018

Uche: System has to have a way to point at disagreement.

  Think what we did at C1 for Customer

Think Big, Start small,

  So define high level things we can agree on: Person, Machine, and let small deeper ontologies specialize those.

IRM in Sweden, most of country is now data centric, says Dave.

App store.  Apps are transient.  Like calendar apps store calendar data.  E.g. Linked Data provides this kind of persistent data where the apps are transient.

# Does data centric omit data in motion?

Things like ontology would seem to apply to both.

# Alan Morrison

"Data centric Design Thinking"

- Empathize – with your users

- Define – your users’ needs, their problem, and your insights

- Ideate – by challenging assumptions and creating ideas for innovative solutions

- Prototype – to start creating solutions

- Test – solutions

<https://www.interaction-design.org/literature/article/what-is-design-thinking-and-why-is-it-so-popular>

"Intelligent Product Automation"

Is there a \*killer use case\* that can get the foot in the door?

Is the rise in "Data Strategy" an inroad?  The rise of CDOs?

(Alex: this is a board-level decision)

Bespoke data analytics?

 Legal and Compliance?  (Since if the lawyers say "thou shalt do", then they do)

 We can cut your (Silo) Tax, your compliance tax, etc.

 [] read up on IBM Watson

 `Sovrin` - could we do something like this?

 KBpedia

# Chris

"Lacibus" (LAKE-i-bus)

"Codeless data management"

Virtual data lake.

Leave in place, not moved around in complex messages.

Not clear to me how it is formatted, but he says it is "triples" (though not RDF)

# Lymba - Tatiana

Ontology driven NLP, from any kind of text. Multilingual!

--

Tue 2/5/2019  DAY 2

# Metadata Mgt in DCA panel

               "Metadata management involves managing metadata about other data, whereby this "other data" is generally referred to as content data. The term is used most often in relation to digital media, but older forms of metadata are catalogs, dictionaries, and taxonomies"  - Wikipedia

Shane:

Need to know regulatory requirements on data.

Today, very difficult.  People have it in their heads.

 This needs to be metadata that I can query (not interview someone).

Ontology /DCA should be very powerful to enable this.

Andrea:

3 kinds of metadata: structural (programmers), administrative, descriptive (provenance)

Uche:

 Data and metadata of equal importance

DCC: grapefruit shows ways to look at the data in the DCC

Q: what is state of art?

[] see what Collibra does

ML may help with linking "things" to their "types".

Could it do this for documents (images, files)

[Schema.org](http://Schema.org) is biggest experiment in metadata so far.

 does not really do administrative nor structural... it is light descriptive

goals: Very distributive, therefore light

enterprise: could be heavier

 Rewards/penalties encourage proper usage!

Migration?

structured   side: have tables/rows/columns

unstructured side: have tags

 2 options: suck in existing data, or just do "new data going forward"

If "sucking in", how to identify what things are?  There are tools, but can be 50%+ false positives.

 DAI has human annotator to ML approach to "tag" "entities" against the ontology.

 ML will eventually learn and tag most.

Need up/down-voting to correct that which ML gets wrong.

"Raw metadata" = Folksonomy & tags

Categories for metadata

- Administrative

- Structural

- Descriptive

   - Provenance

     - Biz process source

   - Raw

DCA: where in DCA is Automation to help with this linking

## Summary

Always tying things back to Ontology is key.

Automation to help with this linking is key.

We think DCA grapefruit provides all metadata needs.

# Security Panel

Actions to be controlled in TS:  Read / Add / Delete

Chris:

Data usually has an owner (Chris)

Have to provide security at triple level

Assume user is part of a community

  Abide by rules, kicked out if don't

Stardog: named graph level

AllegroGraph: allow/deny sub/pred/obj/graph

Provenance layer must do more than its user can do. [1]

One idea: Allow all access, but audit.  Don't think this is viable (PII, HIPPA, GDPR).

Given: audit all accesses.

Authentication: Should we try to decide who they \*really\* are

Authorization: UCs

- HIPAA mental health data.  Dr. can't know.  System tell that prescribed med should NOT be given, but not why.  "Server is superuser", but requestor is not. (like [1])

ogw/rad ?  COULD work for hard cases, BUT  TS has to be able to redact this at a low level.

  Matthias says ogw is problematic and has better modern alternatives

  "key" to data - mentioned by Linda in current DB systems. Very complicated.

MarkO:  we need some layer to \*describe\* these access rules.

Need to be able to `ls -l` (see what permissions are), `chown` (change permissions)

Permissions apply at db/repo, graph/context, fact/triple.

XACML?

## Summary

-Security is the hardest problem we'll probably face.

-Must describe permissions in some way

-Must assign people to roles.

  (and infer people into roles?)

-Must be able to apply at runtime and after the fact (audit)

-Applications can certainly restrict access to triples, but they must not be able to expand it.

-All triple permissions are:  Read, Add, Delete.

-Need a "Open Issues" list

  - How to assign ownership? to inferred triples?

  - Does "default graph merging" cause problems?  If graph-level ACL? If triple-level ACL?

# Case Studies - Morrison

A self-sovereign identity (SSI) stack proposes JSON-LD as a messaging payload format.

 Decentralized Identity Foundation & W3C Verifiable Claims WG

-https://www.w3.org/2018/vocabws/presentations/Sabadello.pdf

-https://www.w3.org/TR/verifiable-claims-data-model/

Should DCA accommodate (vs require) the SSI?

Should we participate in this?  or is it a distraction?

Big discussion on conversation

Conversational queries

Voice interface

[DialogFlow.com](http://DialogFlow.com)

With KG, co's can skate to new biz models = deep transformation.

9 of top 10 market cap leaders of 2018 use KGs.

S&P developed a cross-enterprise data management using relational tech

# Knowledge Graphs (Uche)

KGs driven by

- search (Bing, Google)

- conversational UI (Alexa, Google Assistant, Cortana)

Google this:  jay myers conversational knowledge graph

<https://medium.com/@uogbuji/the-week-in-knowledge-graphs-2019-wk3-ae404bd3743a>

<https://medium.com/@jaymyers/constructing-multi-turn-conversational-voice-experiences-with-a-knowledge-graph-f07c61718dc4>

Typed nodes and type edges provide the richness.

Library.link

 Uche involved

uses Linked Data

Neo4j and Property graphs

- must keep an eye on

- but not sufficient for core of DCA

- but could be used in analytical layer

# Day Summary

May need COA for investigating our discovered unknowns

--

Wed 2/6/2019  DAY 3

# Implementation Strategies panel

How to get from application-centric to data-centric.  We know it can’t be done in a “big bang”, so this session will be a panel discussion of pros and cons of viable strategies.

- How do you build an implementation strategy?

- How do you overlay a data-centric architecture on an existing enterprise with siloed information systems?

- A start-up may embrace the concept from the get-go, but in a mature enterprise with legacy databases all over the place, where do you start and how do you progress?

Politics and Policy held semantics back in Meika's past experience.

Boris: Frontal attack often fails

So take one with best champion vs. biggest profile or possible payoff

Find a home, small start, stretch it.

 Motivation to keep up with peers overcomes resistance to change.

 Communicate with demonstrations with THEIR DATA (ETL)

Mark: experience w/ a core model that was thought through early, and roll out bits of value against that a little at a time.

Main strategies:

1. Semantic ETL

   -Jacobus and Jans do this:

   -ETL every DB into the TS, and do analytics on it

   -Apps & stores don't go away

2. Exemplar (New) App

3. Data Fabric

   -a layer over existing DBs

   -all \*new\* dev uses fabric

   -Broadridge doing this

4. Data Storage Swap

   -Replace storage layer under an API

   -improve API or App performance or functionality

5. Virtual Semantic Layer

   -Define metadata (onto)

   -R2RML/other to virtualize

    -Can use R2RML to ETL, i.e., migrate to real semantic layer

6. Replace "burning app"

7. True Contingency

   -Suggest they spend bit of contingency budget toward an alternate solutions

    -Could say alt is just to get early look

What is MVP for DCA?

It may look different based on which strategy above you use.

Motivators:

- Target the 3rd or 4th level player in an industry, who otherwise has no hope of moving up

- Google envy:  Google has a KG, FB has a KG, LinkedIn has a KG

# Governance panel

Andrea: Enforcement is often the issue in her experience

There is a body of work on governance.  We know how to do this for 50 years.

We know how to do this in a context... app-centric.

MU: Shared schema (core model) mistakes have big impact.

 But we DO have the metadata in the store, so doing the impact analysis may be easier.

# Model Driven / Declarative

Premise: Most behavior could be declarative; only small bits may need to be imperative.

Could track (PWC) % of imperative vs. declarative code.

SQL is declarative query language... engine comes up with the how (to access the data)

OWL is declarative

SHACL is declarative, could drive most of a UI (has UI features)

SPARQL is declarative

React.js is declarative UI

Dan: Should we provide Libraries of Behaviors

Dave did parametric approach to 600 screens for an ERP system.  Each screen spec was a half page that said how this screen was different from some norm.

Certainly most CRUD UIs could be model-driven.

In a DCA, since data is key, such UIs would enable rapid data input and rapid prototyping of some applications or parts of applications.

Could most CRUD \*APIs\* be model-driven? (Do we need CRUD APIs in a DCA?)

Ways to describe process:

AWS data pipeline?

BPMN - Business Process Model and Notation

  a graphical representation for specifying business processes in a business process model.

Data already providing value.

What's the Data + Logic that we can

# Overall 3 day summary

Impressions, keep doing, stop doing

Arrive at an Artifact at end of each session

  which can drive follow ups

Some areas would have benefitted from more experts

--

**Mark Wallace**

**Ontologist, Project Manager, Software Architect**

**[mark.wallace@semanticarts.com](mailto:mark.wallace@semanticarts.com)**

**+1-321-720-1866**

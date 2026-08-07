---
title: "Data-Centric Architecture for 2022 Internally"
confluence_id: 2215182341
source: "Data-Centric-Architecture-for-2022-Internally_2215182341.html"
---
We are planning on acquiring an architecture to finish our the “eating our own dog food” build of our internal system, and possible offer it to other professional services firms.

This page is a working paper to narrow down the options.

We are going to adopt someone else’s architecture, at least for the short term, in order to make progress on the domains that we are interested in. We are going to use someone else’s architecture for the first four phases and 50 use cases we’ve identified that will cover:

·      Replacing ibeam

·      Project management and other dashboards

·      Implementing the first version of data-centric accounting for Semantic Arts (including capturing all the events that lead to accounting transactions)

·      Implementing the first version of policy driven accounting, including payroll

# Selection Criteria

The main criteria are:

## RDF based

We are only considering RDF based systems.  It’s ok if its only one Graph DB for now.

## Some model driven capability

Should at least support simple (CRUD) form-based screens.  Need some low code features

## Economics

We have to be able to afford the initial price, and have something that if we decided to go forward, we could support a platform based business.

## Ability to Extend

We don’t expect to get everything we want in an architecture out of the box.  It is a huge plus is we can extend.

# Some Contenders

## Metaphactory

Jamie’s been evalutating.

RDF

Template based rather than model based

€40K for development server, €120K per production server

We may negotiate a bit

Price per server will eliminate some of our use cases (Strategic Planning Jump Start for instance)

Might be a plus for getting into client accounts

## LinkedDataHub

<https://atomgraph.github.io/LinkedDataHub/>

open source, so we may have more options to extend

Pretty complicated to set up, so I’ll have to defer

odd restful api but maybe

email Feb 28, 2022

> We have released LinkedDataHub v3. It is an RDF-native Knowledge Graph  
> notebook which can also be used as a low code application platform.
>
> Now you can compose structured content from blocks of HTML, Linked  
> Data resources, and SPARQL results rendered as charts, graphs, maps  
> etc. Another major feature: the ability to effortlessly copy (aka  
> fork) RDF data to the local dataspace.
>
> Overview of new features:
>
> <https://www.youtube.com/watch?v=phRL6QtVTG0>
>
> Updated documentation:
>
> <https://atomgraph.github.io/LinkedDataHub/>

## Eccenca

[https://eccenca.com](https://eccenca.com/)

Their corporate memory product

<https://eccenca.com/products/enterprise-knowledge-graph-platform-corporate-memory>

May have some possibility.  I had thought it was more integration, but maybe could be used the way we want to

I got an interesting response from Eccenca. Short version, they probably don’t provide as much as Metaphactory, but maybe enough. Pricing (for us) is free for dev and $30K / year in production.

SHACL Driven forms:

- They have SHACL driven forms, with SPARQL triggers and URI templates
- Documentation: <https://documentation.eccenca.com/latest/explore-and-author/building-a-customized-user-interface>

# Wikidata UI

<https://www.wikidata.org/wiki/Wikidata:Tools/Enhance_user_interface>

Seems like a bit of a do-it-yourself set of tools, but a lot of power.

Clone and deploy

<https://github.com/wikimedia/wikidata-query-gui/blob/master/>

Uche Ogbuji’s take

<https://developer.ibm.com/articles/use-wikidata-in-ai-and-cognitive-applications-pt1/>

# Terminus

[https://terminusdb.com](https://terminusdb.com/)

Has some possibilities.  It is RDF but not SPARQL (they have their own WOQL)

Open source version at

<https://github.com/terminusdb>

Haven’t inquired yet about pricing

# Top Quadrant

<https://www.topquadrant.com/products/purchase/>

Maybe we get the Maestro (for $3450 / year) to build forms, do shacl etc, and go with our own triple store.

# Considered but Eliminated Contenders

# SOLID / Inrupt

[https://www.inrupt.com](https://www.inrupt.com/)

[https://docs.inrupt.com](https://docs.inrupt.com/)

I think we’d have to use their API which is very json’y (although with RDF in it)

I’ve sent in an inquiry. Response:

“At Inrupt, our focus is helping bring use cases to life that can impact millions of people as quickly as possible. To achieve this goal we are currently focused on working with governments and large enterprises around the globe. As a startup we do not yet have the resources to work on projects such as yours but we hope to someday.”

## Datablaze/ RawCubes

[https://www.rawcubes.com](https://www.rawcubes.com/)

appears to be just integration

## Diffbot

Looks to be a platform for web scraping

## Graphite/Synaptica

<https://www.synaptica.com/category/graphite/>

looks like its just a ontology mgmt product

## Graphin

<https://github.com/antvis/Graphin#readme>

just a react library for viewing graphs

## Siren

From [giovanni@siren.io](mailto:giovanni@siren.io)

nice to hear from you, we did talk previously in other occasions.

Siren does not run on top of a triplestore.  Our backend is Elasticsearch which has tables of (multi value) attributes/fields as a core datamodel.

The Siren datamodel sits on top of Elasticsearch tables and describes how shared keys in the data form "relations"

## KGBase

<https://www.kgbase.com>

Mostly a small scale web based thing, but they do have an enterprise model, however its all LPG (neo4j, janus etc)

## Lucata

<https://lucata.com/>

not RDF

## Cinchy

Not RDF

## KBPedia

<https://kbpedia.org/>

a data repo, arch not available.  No update use cases.

## Aladyn (the “Data-centric” company Aronto)

<https://github.com/antvis/Graphin#readme>

not RDF

## Consono

[https://www.consono.ai](https://www.consono.ai/)

Looks like it more of a NLP to find things in documents

## VocBench

[http://vocbench.uniroma2.it](http://vocbench.uniroma2.it/)

appears to be an application for managing ontologies and taxonomies more than an architecture

# OSLC

<https://open-services.net/why/>

Standards for interoperability, not an architecture

# Atomspace

<https://wiki.opencog.org/w/AtomSpace>

Proprietary graph database

# Grakn / TypeDB

[https://vaticle.com](https://vaticle.com/)

Not RDF

# Semantic Media Wiki

<https://www.semantic-mediawiki.org/wiki/Semantic_MediaWiki>

Open source, data is stored in MySQL

Doesn’t use SPARQL

# Zincbase

<https://zincbase.readthedocs.io/en/latest/README.html#requirements>

Python library to extract triticale from unstructured text

# Kineviz

<https://www.kineviz.com/about>

Neo4j

# Graphmatrix

<http://www.cs.williams.edu/JavaStructures/doc/structure5/structure5/GraphMatrix.html>

Looks to be a low level java library, probably not what I was looking for

# Ontopic

<https://ontopic.ai/en/>

Looks like more of an integration engine

# Linked Pipes

[https://linkedpipes.com](https://linkedpipes.com/)

Looks like more of a tool for data scientists than for building an architecture

# Cambridge Semantics

[https://cambridgesemantics.com](https://cambridgesemantics.com/)

Really mostly an analytics platform than a transactional one, don’t see support for transactional update.  Its all ingest, manage metadata and do visualizations

# Zazuko

<https://zazuko.com>

Love their home page, they are believers in Data Centric Manifesto.

However this doesn’t look like an architecture, but a series of tools.

# Net-IT

<https://www.net-it.pt/crm-references/>

I think this is the one that Peter from Swatch was referring to, however they look like a CRM consulting firm more than a architecture.

# Triply

<https://triply.cc/triplydb>

Looks like a DB more than an arch, but I’ll reach out.

# Structr

<https://structr.com/>

Looked interesting but based on Neo4j.

It is open source, but somewhat restricted (GPL3/AGPL3), and has a licensing model. Very HTML template based. Has nice looking model diagram, better than slow reveal.

A interesting feature, you could point it at an existing website and it would create a page template from it. See video: <https://www.youtube.com/watch?v=xGCLhgamXAE>

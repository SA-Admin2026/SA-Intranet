---
title: "PoolParty Semantic Suite"
confluence_id: 69206017
source: "PoolParty-Semantic-Suite_69206017.html"
---
Primarily a taxonomy and thesaurus management tool. Includes some RDFS ontology management and can pull in "Linked Data" sets like DBPedia and GeoNames. Does some text mining and concept extraction on corpuses. Has some form of ETL tool for converting data to RDF. For governance has some level of workflow management - history, audit trail and rollback features.

PDF overview of basic features: <https://www.poolparty.biz/wp-content/uploads/2016/04/PoolParty-Product-Features.pdf>

**Supports:**

- SKOS
- SKOS-XL
- RDFS Ontologies
- SPARQL
- (Built in RDF triplestore is Eclipse RDF4J)

**Integrates with:**

- MarkLogic
- StarDog
- Virtuoso
- GraphDB
- elasticsearch
- Solr

**Ontology integration:**

FAQ: [Can I build knowledge models with PoolParty which have more expressivity than SKOS provides?](https://help.poolparty.biz/faq/faq-s/creating-and-maintaining-thesauri/can-i-build-knowledge-models-with-poolparty-which-have-more-expressivity-than-skos-provides)

(19 min demo video) - 

More info here: <https://help.poolparty.biz/doc/user-guide-for-knowledge-engineers/advanced-features/custom-scheme-ontology-management>

Looks to be basic RDF Schema - you can create a class and make it a sub-class of another class. You can create (object) properties and give them a domain and range. You can additionally state if they are directed, symmetric or inverse properties (is this still RDFS?). Then you can create datatype properties which they refer to as attributes. They view this as "extended the taxonomy" - providing more semantic relationships that can be used in concept schemas. Not really intended for use with inference.

**Integration with triplestore:**

(21 min demo video) - 

**Lingering questions:**

They state: "Import common ontologies that are already preconfigured and optimized for the usage in PoolParty or create your own ontologies." - I am wondering if that means the common ontologies are SKOSified or converted to RDFS only. 

<https://help.poolparty.biz/doc/user-guide-for-knowledge-engineers/advanced-features/custom-scheme-ontology-management/create-and-manage-ontologies/add-predefined-ontologies>

From the website:

PoolParty provides common ontologies that can be imported and used by a simple mouse click. Administrators can access the **Custom** **Schemes** management (1), go to the **Ontologies** tab (2) and select **Add**(3). The **Enable Ontologies**dialog opens and allows to select one or more of the predefined ontologies. By pressing **Import**, you can enable the selected ontologies.

You can use imported ontologies to [create custom schemes](https://help.poolparty.biz/doc/user-guide-for-knowledge-engineers/advanced-features/custom-scheme-ontology-management/create-and-manage-custom-schemes) from them or add classes, relations and attributes of imported ontologies to custom schemes.

Imported ontologies can only be deleted as long as no custom scheme refers to it. Deleted ontologies can be reimported at any time.

At the moment the following predefined ontologies are available out of the box:

- **[schema.org](http://schema.org/)**  
  A common set of schema elements for structured data markup on web pages.
- **[FOAF](http://xmlns.com/foaf/spec/)**  
  The Friend of a Friend (FOAF) RDF vocabulary can be used for describing Persons, Organizations, Projects and their connections.
- **[GEO](http://www.w3.org/2003/01/geo/)**  
  The basic geo vocabulary can be used for representing latitude, longitude and altitude information in the WGS84 geodetic reference datum.
- [**ORG**](http://www.w3.org/TR/vocab-org/)  
  The core organization ontology is a vocabulary for describing organizational structures, specializable to a broad variety of types of organization.
- [**DC Terms**](http://purl.org/dc/terms/)  
  DCMI Namespace for metadata terms in the <http://purl.org/dc/terms/> namespace
- [**vCard**](http://www.w3.org/TR/vcard-rdf/)  
  Ontology for vCard
- [**Cube**](http://www.w3.org/TR/vocab-data-cube/)  
  Cube allows multi-dimensional data, such as statistics, to be published in RDF. It is based on the core information model from SDMX (and thus also DDI).
- **[CC REL](https://wiki.creativecommons.org/wiki/CC_REL)**  
  The Creative Commons Rights Expression Language (CC REL) lets you describe copyright licenses in RDF.
- [**DOAP**](https://github.com/edumbill/doap/wiki)  
  Description of a Project vocabulary.

The provided ontologies are preconfigured and optimized for usage in PoolParty. At the moment it is not possible to import or add other ontologies from outside.

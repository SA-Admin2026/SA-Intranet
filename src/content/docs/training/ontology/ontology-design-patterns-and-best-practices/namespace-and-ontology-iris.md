---
title: "Namespace and Ontology IRIs"
confluence_id: 2428796963
source: "Namespace-and-Ontology-IRIs_2428796963.html"
---
- [General](#NamespaceandOntologyIRIs-General)
- [gist](#NamespaceandOntologyIRIs-gist)
- [Sub-gists](#NamespaceandOntologyIRIs-Sub-gists)
- [Non-gist Semantic Arts Ontologies](#NamespaceandOntologyIRIs-Non-gistSemanticArtsOntologies)
- [Client Ontologies](#NamespaceandOntologyIRIs-ClientOntologies)

# General

- All Semantic Arts-maintained ontologies - including gist, the sub-gists, and others - are now using the `w3id.org` domain for namespace and ontology IRIs.
- We include `/semanticarts` following the domain in order to identify Semantic Arts as the ontology developers.
- Namespaces include `/ns` (for “namespace”) plus `/ontology`, `/taxonomy`, or `/data`, for TBox, CBox, and ABox, respectively.
- Ontology IRIs include `/ontology`, `/taxonomy`, or `/data`, for TBox, CBox, and ABox, respectively (no `/ns`). (I use the phrase “ontology IRI” for taxonomies and data as well, because they are ontologies in the technical sense when we declare them to be an `owl:Ontology`with an `owl:versionIRI`.
- The final segment is the name of the ontology/taxonomy/dataset.

Some examples below are hypothetical.

# gist

## Ontology

**Namespace IRI:** `https://w3id.org/semanticarts/ns/ontology/gist/`

**Namespace prefix:** `gist:`

**Unversioned ontology IRI:** `https://w3id.org/semanticarts/ontology/gistCore`

**Unversioned filename:** `gistCore`

**Versioned ontology IRI:** `https://w3id.org/semanticarts/ontology/gistCore12.0.1`

**Versioned filename:** `gistCore12.0.1`

Currently we do not have independently-defined namespaces and ontologies for the CBox and ABox, but if at some point we do, we would follow the conventions shown for sub-gists. For instance, there is [an issue to use a distinct namespace for gist instances](https://github.com/semanticarts/gist/issues/305) [separate namespaces](https://github.com/semanticarts/gist/issues/305) (which is stalled because there is currently no agreement on whether this is CBox or ABox data); it would be sensible to also move them to a separate file.

# Sub-gists

## Ontology

**Namespace IRI:** `https://w3id.org/semanticarts/ns/ontology/gist/`

**Namespace prefix:** `gist:`

**Unversioned ontology IRI:** `https://w3id.org/semanticarts/ontology/gistHR`

**Unversioned base filename:** `gistHR`

**Versioned ontology IRI:** `https://w3id.org/semanticarts/ontology/gistHR1.0.0`

**Unversioned base filename:** `gistHR1.0.0`

## Taxonomy

**Namespace IRI:** `https://w3id.org/semanticarts/ns/taxonomy/gist/`

**Namespace prefix:** `gistx:`

**Unversioned ontology IRI:** `https://w3id.org/semanticarts/taxonomy/gistHrExemptStatus`

**Unversioned base filename:** `gistHrExemptStatus`

**Versioned ontology IRI:** `https://w3id.org/semanticarts/taxonomy/gistHrExemptStatus1.0.0`

**Unversioned base filename:** `gistHrExemptStatus1.0.0`

## Data

In many cases there will only be generated instance data with a namespace but no ontology IRI.

I’m using units of measure just as an example, realizing that not everyone agrees that these are ABox rather than CBox terms.

**Namespace IRI:** `https://w3id.org/semanticarts/ns/data/gist/`

**Namespace prefix:** `gistd:`

**Unversioned ontology IRI:** `https://w3id.org/semanticarts/data/gistHrUnitsOfMeasure`

**Unversioned base filename:** `gistHrUnitsOfMeasure`

**Versioned ontology IRI:** `https://w3id.org/semanticarts/data/gistHrUnitsOfMeasure1.0.0`

**Unversioned base filename:** `gistHrUnitsOfMeasure1.0.0`

# Non-gist Semantic Arts Ontologies

## Ontology

**Namespace IRI:** `https://w3id.org/semanticarts/ns/ontology/versioning/`

**Namespace prefix:** `ver:`

**Unversioned ontology IRI:** `https://w3id.org/semanticarts/ontology/versioning`

**Unversioned base filename:** `versioning`

**Versioned ontology IRI:** `https://w3id.org/semanticarts/ontology/versioning1.0.0`

**Versioned base filename:** `versioning1.0.0`

## Taxonomy

**Namespace IRI:** `https://w3id.org/semanticarts/ns/taxonomy/versioning/`

**Namespace prefix:** `verx:`

**Unversioned ontology IRI:** `https://w3id.org/semanticarts/taxonomy/ver<Some-taxonomy-name>`

**Unversioned base filename:** `ver<Some-taxonomy-name>`

**Versioned ontology IRI:** `https://w3id.org/semanticarts/taxonomy/ver<Some-taxonomy-name>1.0.0`

**Versioned base filename:** `ver<Some-taxonomy-name>1.0.0`

## Data

**Namespace IRI:** `https://w3id.org/semanticarts/ns/data/versioning/`

**Namespace prefix:** `verd:`

**Unversioned ontology IRI:** `https://w3id.org/semanticarts/data/ver<Some-dataset-name>`

**Versioned base filename:** `ver<Some-dataset-name>`

**Versioned ontology IRI:** `https://w3id.org/semanticarts/data/ver<Some-dataset-name>1.0.0`

**Versioned filename:** `ver<Some-dataset-name>1.0.0`

# Client Ontologies

Clients are of course free to choose their own namespace and ontology IRIs. However, if they ask for guidance, we propose the following formats. Note that for some clients, subdomains such as `https://ontologies.ida.org` are easier to work with than `https://ida.org/ontologies` due to their URL handling practices; that has been our experience at IDA.

Note:

- “eo” in the prefixes and IRIs stands for “enterprise ontology.” A non-enterprise client ontology would not use it.
- “eo” occurs in the IRIs and prefixes for taxonomies and data as well as the ontology, because they are related to the enterprise ontology.

## Ontology

**Namespace IRI:** `https://ontologies.ida.org/ns/ideo/`

**Namespace prefix:** `ideo:`

**Unversioned ontology IRI:** `https://ontologies.ida.org/ideoCore`

**Unversioned base filename:** `ideoCore`

**Versioned ontology IRI:** `https://ontologies.ida.org/ideoCore1.0.0`

**Versioned base filename:** `ideoCore1.0.0`

## Taxonomy

**Namespace IRI:** `https://taxonomies.ida.org/ns/ideo/`

**Namespace prefix:** `ideox:`

**Unversioned ontology IRI:** `https://taxonomies.ida.org/ideoExpenseTypes`

**Unversioned base filename:** `ideoExpenseTypes`

**Versioned ontology IRI:** `https://taxonomies.ida.org/ideoExpenseTypes1.0.0`

**Versioned base filename:** `ideoExpenseTypes1.0.0`

## Data

**Namespace IRI:** `https://data.ida.org/ns/ideo/`

**Namespace prefix:** `ideod:`

**Unversioned ontology IRI:** `https://data.ida.org/ideoOrganizations`

**Unversioned base filename:** `ideoOrganizations`

**Versioned ontology IRI:** `https://ontologies.ida.org/ideoOrganizations1.0.0`

**Versioned base filename:** `ideoOrganizations1.0.0`

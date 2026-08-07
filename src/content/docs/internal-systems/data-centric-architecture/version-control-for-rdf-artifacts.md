---
title: "Version Control for RDF Artifacts"
confluence_id: 1573584901
source: Version-Control-for-RDF-Artifacts_1573584901.html
---
| **Architecture review date** | First pass by 22 Jan 2021 |
| --- | --- |
| **Audience** | [Developers](https://semarts.atlassian.net/people/team/8c45d811-8e56-42c8-b15b-0161a2e3fe57) ([Boris Pelakh](https://semarts.atlassian.net/wiki/people/5bc7646da994e83f6ee80aed?ref=confluence)) |
| **On this page** | - [Scope](#VersionControlforRDFArtifacts-Scope) - [Assumptions](#VersionControlforRDFArtifacts-Assumptions) - [Schema of Versioned Data](#VersionControlforRDFArtifacts-SchemaofVersionedData) - [Additional Entities](#VersionControlforRDFArtifacts-AdditionalEntities) - [Distributed Development](#VersionControlforRDFArtifacts-DistributedDevelopment) - [Checking Out a Version](#VersionControlforRDFArtifacts-CheckingOutaVersion) - [Merging and Conflict Resolution](#VersionControlforRDFArtifacts-MergingandConflictResolution) |
| Github | <https://github.com/semanticarts/rdf-git> |
|  |  |

## Scope

It is the intent of the DCA authoring tools to maintain all developed content in the triple store, and serving them dynamically as opposed to exporting text artifacts and maintaining them in a separate version control system such as `git`. It is therefore necessary for the system to support version control in the RDF store environment that fulfils the same role and provides similar functionality. The initial target users would be the ontology editor and the slow reveal tool.

This approach is not intended to provide versioning support for a large instance store, much like `git` should not be used for large binary artifacts, and scaling issues will not be addressed at this time.

## Assumptions

- Versioned RDF data will be modified exclusively using the [DCA Delta Triples API](https://github.com/semanticarts/dca/blob/develop/docs/api/routes/deltaTriples.md). This allows us to record the changes without having low-level hooks into the DB storage layer. Modifications through SPARQL Update queries might be possible in the future either through query rewriting or [the SPARQL 1.2 proposal to expose the effect of update queries](https://github.com/w3c/sparql-12/issues/63).
- There will be no blank nodes in versioned data, since they make it impossible to express triple removal in a predictable manner. The Delta Triples API already addresses this by replacing inserted blank nodes with generated URIs.
- There will not be, at this time, support for versioning RDF\*. It is not possible to include statement references in the API as it currently stands.
- The target triple store will support some form of edge properties. The examples in this document will use RDF\*, but vendor-specific implementations can utilize proprietary methods such as AllegroGraph Triple Attributes, or even full `rdf:Statement` reification, in case no better alternatives are present.
- The schema utilizes named graphs as a method of partitioning the scope of changes, similar to how version control software views individual files as a unit for organizing changes. Any use of this approach that does not utilize named graphs or places most of its data into a single named graph would be inherently less efficient.

## Schema of Versioned Data

Each graph update will create a `dcao:Commit` instance, which will be identified by a IRI created from the SHA-1 hash of the commit data, similar to how `git` generates commit IDs. The triples comprising the update will be stored in a named graph with the same ID as the commit ID, with the action (add, replace or remove) and the target graph as metadata. In the case of changes to the DEFAULT graph, the `rdf:default` URI will be used until a standard is arrived at, as per <https://github.com/w3c/sparql-12/issues/43> .

On the initial creation of a named graph or whenever a change sufficiently changes any given named graph, that graph will be completely rewritten within the commit. Otherwise the actual delta will be recorded using `dcao:addedTo` and `dcao:removedFrom` annotations.

For example, given the following two updates in sequence, the first creating the data graph

```
ADD [
    ex:s1 rdf:type ex:MyClass ex:data-graph .
    ex:s1 skos:prefLabel “Subject 1” ex:data-graph .
]
```

followed by the second, correcting the label

```
DELETE [
    ex:s1 skos:prefLabel “Subject 1” ex:data-graph .
]

ADD [
    ex:s1 skos:prefLabel “Subject Number One” ex:data-graph .
]
```

the resulting contents of the store (using `TriG`/`RDF*`) would be

```
<urn:x-dca-commit:4784012d3d7d7ac775f36080912073673029d900> {
  <urn:x-dca-commit:4784012d3d7d7ac775f36080912073673029d900> 
    a dcao:Commit; 
    dcao:rewrites ex:data-graph;
    ….
  <<ex:s1 rdf:type ex:MyClass>> dcao:addedTo ex:data-graph .
  <<ex:s1 skos:prefLabel “Subject 1”>> dcao:addedTo ex:data-graph .
}
<urn:x-dca-commit:a077db24eca5f1febd1d0464dac18e25174571b1> {
  <urn:x-dca-commit:a077db24eca5f1febd1d0464dac18e25174571b1>
    a dcao:Commit;
    dcao:updates <urn:x-dca-commit:4784012d3d7d7ac775f36080912073673029d900>;
    dcao:addsTo ex:data-graph;
    dcao:removesFrom ex:data-graph;
    ….
  <<ex:s1 skos:prefLabel “Subject 1”>> dcao:removedFrom ex:data-graph .
  <<ex:s1 skos:prefLabel “Subject Number One”>> dcao:addedTo ex:data-graph .
}
```

A commit would have 0 or more previous commits (0 for initial commit, 1 for normal update, 2 or more for a commit resulting from a merge), as well as the usual metadata such as creation date, the SHA-1 hash and the committing `dcao:User`. The IRIs of any named graph affected by the commit are also recorded at the commit level, so that the impact of the commit can be assessed quickly without inspecting each triple, facilitating faster checkouts and merges.

## Additional Entities

A `dcao:Tag` would assign a logical name to any given commit, such as a formal ontology release. We can decide whether the IRI identifying any particular tag would be a referenceable URL that would retrieve the contents of the store at that commit, or a non-referenceable URN such as `<urn:x-dca-tag:gistCode-v9.5.0>`, which can be passed as an API argument. A tag would be associated with a specific commit once created, and would only be reassigned via explicit action.

A `dcao:Branch` is a subclass of `dcao:Tag` that is used to track a chain of consecutive commits. Any commit to the branch would advance the branch tag to the new commit once successfully created. Advancing the branch is an inherently single-threaded operation, but RDF stores do not provide any sort synchronization primitives similar to table/row locking. Therefore an external synchronization provider, such as [Redis](https://redis.io/), must be used to prevent data corruption.

## Distributed Development

A user will be able to `fork` a master versioned repository into their own local repo, replicating the entire version history, as well as creating a `dcao:Remote` object with a logical name as well as `dcao:ServiceEndpoint` information for the master repository. This will enable `push` and `pull` operations to synchronize the repositories.

## Checking Out a Version

In order to allow versioning-unaware tools to interact with a particular version of the repository, a `checkout` operation would reconstruct the data from the commit history, identifying the most recent rewrite commit for each named graph and then applying incremental changes. After the initial checkout, all subsequent checkouts would assess the difference between the current checked out version and the requested version, and determine if applying the difference would be faster than a full rebuild. In order to maintain data integrity an external synchronization provider would be required for a `checkout` operation.

Master repositories would usually check out the latest revision of the `master` branch.

## Merging and Conflict Resolution

The procedure for merging multiple branches into a single commit would be as follows:

1. Identify the set of graphs affected along each parent path arriving at the merge commit.
2. Any graph only affected along a single path would have no merge conflicts, so a complete rewrite would be added immediately to the commit.
3. For graphs affected along multiple paths, the version from each parent would be converted to text from using canonical serialization, and the merge performed using commonly available text merging tools. The resulting RDF would be added to the commit as a rewrite of that graph.

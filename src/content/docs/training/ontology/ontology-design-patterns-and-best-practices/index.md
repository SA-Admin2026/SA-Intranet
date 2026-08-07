---
title: "Ontology Design Patterns and Best Practices"
confluence_id: 2370830352
source: "Ontology-Design-Patterns-and-Best-Practices_2370830352.html"
---
- [Categories: Design Patterns and Best Practices](/ontology/ontology-design-patterns-and-best-practices/categories-design-patterns-and-best-practices/)
- [Property Definitions](/ontology/ontology-design-patterns-and-best-practices/property-definitions/)
- [When OWL-DL is too restrictive](/ontology/ontology-design-patterns-and-best-practices/when-owl-dl-is-too-restrictive/)
- [Ontology Engineering Best Practices](/ontology/ontology-design-patterns-and-best-practices/ontology-engineering-best-practices/)
- [Namespace and Ontology IRIs](/ontology/ontology-design-patterns-and-best-practices/namespace-and-ontology-iris/)
- ["Class-Instance Mirror" pattern - to avoid punning](/ontology/ontology-design-patterns-and-best-practices/class-instance-mirror-pattern---to-avoid-punning/)
- [OWL Restrictions: Best Practices and Design Patterns](/ontology/ontology-design-patterns-and-best-practices/owl-restrictions-best-practices-and-design-patterns/)

Some of these patterns are an outgrowth of the [Ontology Knowledge Exchange.](/ontology/ontology-knowledge-exchange-oke/)

Include the proposed design pattern, which topic it relates to, your name, and either volunteer to document it or leave blank.

To be discussed:

1. Whether this documentation should be internal only or published.
2. Formatting of the compilation (e.g., eBook, SharePoint pages, Confluence pages) - depends on 1.
3. If internal, where it should reside (probably SharePoint).
4. If published, where (e.g., the [gist-doc GitHub repository](https://github.com/semanticarts/gist-doc)).

| **Design Pattern** | **Relates to Topic** | **Added By** | **(To Be) Documented By** |
| --- | --- | --- | --- |
| Use consistent model - I.e., minimize query paths and accept redundant nodes. | Multiple query paths vs redundant nodes | Rebecca |  |
| Don’t pun. Use Class-Instance Mirror Pattern (Semantic Web for the Working Ontologist) and Class/Category patterns instead. | Punning | Rebecca |  |
| Use distinctionary pattern when possible, rather than subclass assertions. | subClassOf vs equivalentClass | Rebecca |  |
| Create ID objects for major instance types | IDs | Dan | Dan |
| Patterns for TemporalRelation instances | Ownership, Roles & Responsibilities, Employment, etc. | Dan | Dan |
| Treat Addresses as *content*, not places | Physical and virtual addresses | Dan | Dan |
| Categories - [patterns and design patterns based on discussion 2023-03-14](/ontology/ontology-design-patterns-and-best-practices/categories-design-patterns-and-best-practices/) | Categories | Rebecca | Rebecca |
| Categories & categorizedBy (including efficient query: cache ref values, then group\_concat of categorizedBy) | Categories | Mark | Mark |
| SKOS Concept Schemes for categorization (a.k.a, kid's table) | Categories | Mark | Mark |
| Complex Relation + simple property | Ownership, Roles & Responsibilities, Employment, etc. | Mark | Mark |
| Avoid Inverses (in an ontology you control; use them only for mapping to someone else's) | Inverse Properties; Minimizing Cognitive Load | Mark | Mark |
| ID strings vs objects: use the latter for externally recognized IDS, the former for internal IDs. The latter will not need to indicate allocator and supersedes relationships. | Identifiers | Rebecca | Rebecca |
| [OWL Restrictions: Best Practices and Design Patterns](/ontology/ontology-design-patterns-and-best-practices/owl-restrictions-best-practices-and-design-patterns/) |  | Rebecca | Rebecca |

## In this section

- [Categories: Design Patterns and Best Practices](/ontology/ontology-design-patterns-and-best-practices/categories-design-patterns-and-best-practices/)
- [Class-Instance Mirror pattern - to avoid punning](/ontology/ontology-design-patterns-and-best-practices/class-instance-mirror-pattern---to-avoid-punning/)
- [Namespace and Ontology IRIs](/ontology/ontology-design-patterns-and-best-practices/namespace-and-ontology-iris/)
- [Ontology Engineering Best Practices](/ontology/ontology-design-patterns-and-best-practices/ontology-engineering-best-practices/)
- [OWL Restrictions: Best Practices and Design Patterns](/ontology/ontology-design-patterns-and-best-practices/owl-restrictions-best-practices-and-design-patterns/)
- [Property Definitions](/ontology/ontology-design-patterns-and-best-practices/property-definitions/)
- [When OWL-DL is too restrictive](/ontology/ontology-design-patterns-and-best-practices/when-owl-dl-is-too-restrictive/)

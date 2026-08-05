---
title: "SPARQL to Discover as-used KG schema"
confluence_id: 2209710081
source: "SPARQL-to-Discover-as-used-KG-schema_2209710081.html"
---

The query below extracts and builds an “as-used schema diagram” from the RDF triples in a triple store (repository). NOTE that it filters out the meta level of OWL and RDF/S stuff, showing just the “domain” schema.

```
# Extract as-used schema from KG
CONSTRUCT { ?xType ?p ?yType }
# select *
WHERE {
	{SELECT DISTINCT ?xType ?p ?yType {
		?x ?p ?y.
		?x a ?xType.
		?y a ?yType.
	}}
	FILTER ( ! CONTAINS(STR(?p), '/owl#') && ! CONTAINS(STR(?p), 'rdf-s') )
}
```

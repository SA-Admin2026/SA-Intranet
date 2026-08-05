---
title: "Modeling IDs"
confluence_id: 2350284819
source: "Modeling-IDs_2350284819.html"
---

A collection of Semantic Arts resources for modeling IDs:

- March 2021 gist Council [discussion](https://www.youtube.com/watch?v=Q3R3Z9QEJtY) of IDs (by Dan Carey)
- ID exemplars from client project (by Michael Uschold and Dylan Abney)

![](https://semarts.atlassian.net/wiki/images/icons/grey_arrow_down.png)Exemplar - ID Subclasses Approach

```
@prefix dash: <http://datashapes.org/dash#> .
@prefix gist: <https://ontologies.semanticarts.com/gist/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix pleo: <https://ontologies.platts.com/pleo/> .
@prefix pleod: <https://data.platts.com/pleo/> .
@prefix pleox: <https://taxonomies.platts.com/pleo/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix skosxl: <http://www.w3.org/2008/05/skos-xl#> .
@prefix swa: <http://topbraid.org/swa#> .
@prefix teamwork: <http://topbraid.org/teamwork#> .
@prefix tosh: <http://topbraid.org/tosh#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

pleod:_GeoNamesID_660013
	a pleo:GeoNamesID ;
	gist:description "The GeoNames code for Finland."^^xsd:string ;
	gist:uniqueText "660013"^^xsd:string ;
	.

pleod:_ISO3166Alpha3Code_FIN
	a pleo:ISO3166Alpha3Code ;
	gist:description "The ISO 3166 Alpha-3 Code for Finland"^^xsd:string ;
	gist:uniqueText "FIN"^^xsd:string ;
	.

pleod:_Region_Finland
	a
		pleo:CountryRegion ,
		pleo:Region
		;
	skos:prefLabel "Finland"^^xsd:string ;
	gist:identifiedBy
		pleod:_GeoNamesID_660013 ,
		pleod:_ISO3166Alpha3Code_FIN
		;
	.

pleod:_Standard_GeoNames
	a pleo:Standard ;
	skos:prefLabel "GeoNames"^^xsd:string ;
	pleo:sourcedFrom "https://www.geonames.org/export/"^^xsd:anyURI ;
	gist:categorizedBy pleox:_Ternality_External ;
	.

pleod:_Standard_ISO3166
	a pleo:Standard ;
	skos:prefLabel "ISO 3166"^^xsd:string ;
	pleo:sourcedFrom "https://www.iso.org/iso-3166-country-codes.html"^^xsd:anyURI ;
	gist:categorizedBy pleox:_Ternality_External ;
	.

pleo:GeoNamesID
	a owl:Class ;
	rdfs:subClassOf
		gist:ID ,
		[
			a owl:Restriction ;
			owl:onProperty pleo:isSourcedFrom ;
			owl:hasValue pleod:_Standard_GeoNames ;
		]
		;
	skos:definition "A unique identifier for a region found in the GeoNames database"^^xsd:string ;
	skos:example "The GeoNames ID for Spain is 2510769"^^xsd:string ;
	skos:prefLabel "GeoNames ID"^^xsd:string ;
	skos:scopeNote "Also used by Ontotext mapping functions"^^xsd:string ;
	.

pleo:ISO3166Alpha3Code
	a owl:Class ;
	rdfs:subClassOf
		gist:ID ,
		[
			a owl:Restriction ;
			owl:onProperty pleo:isSourcedFrom ;
			owl:hasValue pleod:_Standard_ISO3166 ;
		]
		;
	skos:definition "An ISO 3166 alpha-3 country code."^^xsd:string ;
	skos:example "The ISO 3166 alpha-3 code for Spain is ESP"^^xsd:string ;
	skos:prefLabel "ISO 3166 Alpha-3 Code"^^xsd:string ;
	.

pleo:idText
	a owl:DatatypeProperty ;
	rdfs:range rdfs:Literal ;
	skos:definition "Relates something to its text identifier."^^xsd:string ;
	skos:prefLabel "ID text"^^xsd:string ;
	skos:scopeNote "An abstract superproperty to collect together all ID properties."^^xsd:string ;
	.
```

![](https://semarts.atlassian.net/wiki/images/icons/grey_arrow_down.png)Exemplar - Instances of ID Type Approach

```
@prefix dash: <http://datashapes.org/dash#> .
@prefix gist: <https://ontologies.semanticarts.com/gist/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix pleo: <https://ontologies.platts.com/pleo/> .
@prefix pleod: <https://data.platts.com/pleo/> .
@prefix pleox: <https://taxonomies.platts.com/pleo/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix skosxl: <http://www.w3.org/2008/05/skos-xl#> .
@prefix swa: <http://topbraid.org/swa#> .
@prefix teamwork: <http://topbraid.org/teamwork#> .
@prefix tosh: <http://topbraid.org/tosh#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

pleod:_ID_GeoNames_660013
	a gist:ID ;
	gist:categorizedBy pleox:_IdType_GeoNames ;
	gist:description "The GeoNames code for Finland."^^xsd:string ;
	gist:uniqueText "660013"^^xsd:string ;
	.

pleod:_ID_ISO3166Alpha3Code_FIN
	a gist:ID ;
	gist:categorizedBy pleox:_IdType_ISO3166Alpha3Code ;
	gist:description "The ISO 3166 Alpha-3 Code for Finland"^^xsd:string ;
	gist:uniqueText "FIN"^^xsd:string ;
	.

pleod:_Region_Finland
	a
		pleo:CountryRegion ,
		pleo:Region
		;
	skos:prefLabel "Finland"^^xsd:string ;
	gist:identifiedBy
		pleod:_ID_GeoNames_660013 ,
		pleod:_ID_ISO3166Alpha3Code_FIN
		;
	.

pleod:_Standard_GeoNames
	a pleo:Standard ;
	skos:prefLabel "GeoNames"^^xsd:string ;
	pleo:sourcedFrom "https://www.geonames.org/export/"^^xsd:anyURI ;
	gist:categorizedBy pleox:_Ternality_External ;
	.

pleod:_Standard_ISO3166
	a pleo:Standard ;
	skos:prefLabel "ISO 3166"^^xsd:string ;
	pleo:sourcedFrom "https://www.iso.org/iso-3166-country-codes.html"^^xsd:anyURI ;
	gist:categorizedBy pleox:_Ternality_External ;
	.

pleo:IdType
	rdfs:subClassOf gist:Category ;
	skos:definition "A type of identifier."^^xsd:string ;
	skos:example "ISO 3166 alpha-3 code"^^xsd:string ;
	skos:prefLabel "ID Type"^^xsd:string ;
	skos:scopeNote "Attached to this type is information about the identifier--e.g., minting organizations, relevant websites, etc."^^xsd:string ;
	.

pleox:_IdType_GeoNames
	a pleo:IdType ;
	skos:definition "A a category used to indicate that an identifier is for a region and is in the GeoNames database."^^xsd:string ;
	skos:example "The identifier 2510769 is the GeoNames ID for Spain "^^xsd:string ;
	skos:prefLabel "GeoNames"^^xsd:string ;
	skos:scopeNote "Also used by Ontotext mapping functions"^^xsd:string ;
	pleo:isSourcedFrom pleod:_Standard_GeoNames ;
	.

pleox:_IdType_ISO3166Alpha3Code
	a pleo:IdType ;
	skos:definition "A category used to indicate that an identifier is for a region and is from the ISO 3166 alpha-3 country code identifiers."^^xsd:string ;
	skos:example "The identifier ESP is the ISO 3166 alpha-3 code for Spain"^^xsd:string ;
	skos:prefLabel "ISO 3166 Alpha-3 Code"^^xsd:string ;
	pleo:isSourcedFrom pleod:_Standard_ISO3166 ;
	.
```

![](https://semarts.atlassian.net/wiki/images/icons/grey_arrow_down.png)Exemplar - Properties Approach

```
@prefix dash: <http://datashapes.org/dash#> .
@prefix gist: <https://ontologies.semanticarts.com/gist/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix pleo: <https://ontologies.platts.com/pleo/> .
@prefix pleod: <https://data.platts.com/pleo/> .
@prefix pleox: <https://taxonomies.platts.com/pleo/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix skosxl: <http://www.w3.org/2008/05/skos-xl#> .
@prefix swa: <http://topbraid.org/swa#> .
@prefix teamwork: <http://topbraid.org/teamwork#> .
@prefix tosh: <http://topbraid.org/tosh#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

pleod:_Region_Finland
	a
		pleo:CountryRegion ,
		pleo:Region
		;
	skos:prefLabel "Finland"^^xsd:string ;
	pleo:geoNamesId "660013"^^xsd:integer ;
	pleo:ISO3166Alpha2Code "FI"^^xsd:string ;
	pleo:ISO3166Alpha3Code "FIN"^^xsd:string ;
	.

pleod:_Standard_GeoNames
	a pleo:Standard ;
	skos:prefLabel "GeoNames"^^xsd:string ;
	pleo:sourcedFrom "https://www.geonames.org/export/"^^xsd:anyURI ;
	gist:categorizedBy pleox:_Ternality_External ;
	.

pleod:_Standard_ISO3166
	a pleo:Standard ;
	skos:prefLabel "ISO 3166"^^xsd:string ;
	pleo:sourcedFrom "https://www.iso.org/iso-3166-country-codes.html"^^xsd:anyURI ;
	gist:categorizedBy pleox:_Ternality_External ;
	.

pleo:ISO3166Alpha3Code
	a owl:DatatypeProperty ;
	rdfs:subPropertyOf pleo:idText ;
	rdfs:domain pleo:Region ;
	rdfs:range xsd:string ;
	skos:definition "Relates a location (i.e. region) to its ISO 3166 alpha-3 code."^^xsd:string ;
	skos:example "The ISO 3166 alpha-3 code for Spain is ESP"^^xsd:string ;
	skos:prefLabel "ISO 3166 alpha-3 code"^^xsd:string ;
	pleo:sourcedFrom pleod:_Standard_ISO3166 ;
	.

pleo:geoNamesId
	a owl:DatatypeProperty ;
	rdfs:subPropertyOf pleo:idText ;
	rdfs:domain pleo:Region ;
	rdfs:range xsd:integer ;
	skos:definition "Relates a geographic region to its unique identifier found in the GeoNames database"^^xsd:string ;
	skos:example "The GeoNames ID for Spain is 2510769"^^xsd:string ;
	skos:prefLabel "GeoNames id"^^xsd:string ;
	skos:scopeNote "Also used by Ontotext mapping functions"^^xsd:string ;
	pleo:sourcedFrom pleod:_Standard_GeoNames ;
	.

pleo:idText
	a owl:DatatypeProperty ;
	rdfs:range rdfs:Literal ;
	skos:definition "Relates something to its text identifier."^^xsd:string ;
	skos:prefLabel "ID text"^^xsd:string ;
	skos:scopeNote "An abstract superproperty to collect together all ID properties."^^xsd:string ;
	.
```

Files located [here](https://datacentric.sharepoint.com/:f:/s/staff/Erfghdsy7upFrr2HNuRcCt4Bn7WQMPiYWtOI_i7WSFX15Q?e=5az32q).

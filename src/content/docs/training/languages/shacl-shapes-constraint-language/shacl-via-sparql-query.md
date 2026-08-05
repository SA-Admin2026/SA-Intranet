---
title: "SHACL via SPARQL Query"
confluence_id: 754483201
source: "SHACL-via-SPARQL-Query_754483201.html"
---

From Boris:

Since someone (Dan?) requested that I capture the material I presented this morning regarding SHACL validation, here are the steps:

1. I took the SHACL shapes that Mark O generated for MS Risk, here is a small piece – the owner organization of an ActionPlan must be a MorganStanleyOrganization:

msrpc:\_shape\_ActionPlan  rdf:type        sh:NodeShape;

                         sh:property     msrpc:\_shacl\_ActionPlan\_msrpc\_hasOwnerOrg;

                         sh:targetClass  msrpc:ActionPlan.

msrpc:\_shacl\_ActionPlan\_msrpc\_hasOwnerOrg  sh:path      msrpc:hasOwnerOrg;

                                           sh:class     mscore:MorganStanleyOrganization;

                                           rdf:type     sh:PropertyShape.

1. I then created a small A-Box that violated the above constraint, and loaded both the A-Box and the SHACL shapes into an AG repo

test:AP1 a msrpc:ActionPlan;

      msrpc:hasOwnerOrg test:InvalidOwner .

test:InvalidOwner a gist:Person .

1. I ran the query in <https://github.com/semanticarts/shacl-validator/blob/master/queries/PropertyClass.rq>, which is one of 8 queries I have written to implement different aspects of the SHACL standard. The result is a ValidationResult RDF graph, as described in the standard (<https://www.w3.org/TR/shacl/#results-validation-result>). The full process would be to run all the queries, and add the results for the full list of constraint violations.

\_:b438A9C3Dx1 sh:sourceShape <<http://ontologies.morganstanley.com/msrpc/_shape_ActionPlan>> ;

     sh:sourceConstraintComponent <validation:PropertyClass> ;

     sh:resultMessage "Value urn:test:InvalidOwner is not of type <http://ontologies.morganstanley.com/mscore/MorganStanleyOrganization>" ;

     sh:value <urn:test:InvalidOwner> ;

     sh:resultPath <<http://ontologies.morganstanley.com/msrpc/hasOwnerOrg>> ;

     sh:focusNode <urn:test:AP1> ;

     sh:resultSeverity sh:Violation ;

     rdf:type sh:ValidationResult .

1. The output contains information on which constraints are violated by which malformed entities, and what the nature of the violation is, and can be easily consumed by some sort of a UI (which I do not yet possess).

Since someone (Dan?) requested that I capture the material I presented this morning regarding SHACL validation, here are the steps:

1. I took the SHACL shapes that Mark O generated for MS Risk, here is a small piece – the owner organization of an ActionPlan must be a MorganStanleyOrganization:

msrpc:\_shape\_ActionPlan  rdf:type        sh:NodeShape;

                         sh:property     msrpc:\_shacl\_ActionPlan\_msrpc\_hasOwnerOrg;

                         sh:targetClass  msrpc:ActionPlan.

msrpc:\_shacl\_ActionPlan\_msrpc\_hasOwnerOrg  sh:path      msrpc:hasOwnerOrg;

                                           sh:class     mscore:MorganStanleyOrganization;

                                           rdf:type     sh:PropertyShape.

1. I then created a small A-Box that violated the above constraint, and loaded both the A-Box and the SHACL shapes into an AG repo

test:AP1 a msrpc:ActionPlan;

      msrpc:hasOwnerOrg test:InvalidOwner .

test:InvalidOwner a gist:Person .

1. I ran the query in <https://github.com/semanticarts/shacl-validator/blob/master/queries/PropertyClass.rq>, which is one of 8 queries I have written to implement different aspects of the SHACL standard. The result is a ValidationResult RDF graph, as described in the standard (<https://www.w3.org/TR/shacl/#results-validation-result>). The full process would be to run all the queries, and add the results for the full list of constraint violations.

\_:b438A9C3Dx1 sh:sourceShape <<http://ontologies.morganstanley.com/msrpc/_shape_ActionPlan>> ;

     sh:sourceConstraintComponent <validation:PropertyClass> ;

     sh:resultMessage "Value urn:test:InvalidOwner is not of type <http://ontologies.morganstanley.com/mscore/MorganStanleyOrganization>" ;

     sh:value <urn:test:InvalidOwner> ;

     sh:resultPath <<http://ontologies.morganstanley.com/msrpc/hasOwnerOrg>> ;

     sh:focusNode <urn:test:AP1> ;

     sh:resultSeverity sh:Violation ;

     rdf:type sh:ValidationResult .

1. The output contains information on which constraints are violated by which malformed entities, and what the nature of the violation is, and can be easily consumed by some sort of a UI (which I do not yet possess).

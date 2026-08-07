---
title: "Primary Transforms of gistCyber"
confluence_id: 3267821569
source: Primary-Transforms-of-gistCyber_3267821569.html
---
# An ETL Pipeline Overview

Knowledge Engineering is much more than authoring ontologies. Knowing how to design, create, and maintain a knowledge graph is part of the skillset.

The gistCyber ontology covers the main concepts in the cybersecurity domain of discourse. There are mainstream data sources to populate reference data graphs and enterprise graphs.

# Data Transformations

The SPARQL-Anything templates for the data sets below are first cuts at interpreting the data. They are no as rigorous or robust as they could be. This is particularly true of the STIX 2.1 template.   
On the positive side of things, as quick and dirty transformation templates they do provide the ability to get triples made and set the stage for improvement.

## ATT&CK Framework Transformation

### STIX Document Transformation

The MITRE ATT&CK Framework does have a STIX 2.1 JSON representation. This means that we can capture and triplify the data by using a STIX transformation. We’re using a SPARQL-Anything template (a SPARQL Construct query) to make the JSON to RDF transformation.

In other words, it is the STIX 2.1 SPARQL-Anything template that is used to triplify the ATT&CK Framework JSON files. Below is the template.

```
PREFIX xyz: <http://sparql.xyz/facade-x/data/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX fx: <http://sparql.xyz/facade-x/ns/>
PREFIX example: <http://example/ns/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX stix: <http://docs.oasis-open.org/cti/ns/stix#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX attack: <https://w3id.org/semanticarts/ns/frameworks-mitre-attack/>
PREFIX gist: <https://w3id.org/semanticarts/ns/ontology/gist/>
PREFIX gistx:  <https://w3id.org/semanticarts/ns/taxonomy/gist/>


CONSTRUCT {

	?object_iri a ?stixType ;
	gist:stix_id ?id;
	gist:stix_type ?type ;

	gist:stix_alias ?alias;
#	gist:stix_contact_information ?contact_information_string;
	gist:stix_created ?dt_created;
	gist:stix_description ?description_sanitized;
	gist:description ?description_sanitized;
	gist:stix_first_seen ?dt_first_seen;
	gist:stix_goals ?goal_list;
	gist:stix_identity_class ?identity_class;
	gist:stix_indicator_types ?indicator_list;
	gist:stix_kill_chain_phases ?chains;
	gist:stix_malware_types ?malware_type;
	gist:stix_modified ?dt_modified;
	gist:stix_name ?name;
	gist:name ?name;
	gist:stix_objective ?objective;
	gist:stix_resource_level ?resource_level;
	gist:stix_pattern_type ?pattern_type;
	gist:stix_pattern ?pattern;
	gist:stix_primary_motivation ?primary_motivation;
	gist:stix_relationship_type ?relationship_type;
	gist:stix_roles ?role_list;
	gist:stix_secondary_motivations ?secondary_motivation_list;
	gist:stix_sectors ?sector_list;
	gist:stix_sophistication ?sophistication;
	gist:stix_source_ref ?source_ref_iri;
	gist:stix_spec_version ?spec_version;
	gist:stix_target_ref ?target_ref_iri;
	gist:stix_tool_types ?tool_types_list;
	gist:stix_valid_from ?dt_valid_from;
	.

# ==========================

	gist:stix_id a owl:DatatypeProperty .
	gist:stix_type a owl:DatatypeProperty .

	gist:stix_alias a owl:DatatypeProperty .
#	gist:stix_contact_information a owl:DatatypeProperty .
	gist:stix_created a owl:DatatypeProperty .
	gist:stix_description a owl:DatatypeProperty .
	gist:stix_first_seen a owl:DatatypeProperty .

	gist:stix_identity_class a owl:DatatypeProperty .
	gist:stix_kill_chain_phases a owl:DatatypeProperty .

	gist:stix_indicator_types a owl:DatatypeProperty .
	gist:stix_malware_types a owl:DatatypeProperty .
	gist:stix_modified a owl:DatatypeProperty .
	gist:stix_name a owl:DatatypeProperty .
	gist:stix_objective a owl:DatatypeProperty .

	gist:stix_resource_level a owl:DatatypeProperty .

	gist:stix_pattern_type a owl:DatatypeProperty .
	gist:stix_pattern a owl:DatatypeProperty .
	gist:stix_primary_motivation a owl:DatatypeProperty .
	gist:stix_relationship_type a owl:DatatypeProperty .

	gist:stix_roles a owl:DatatypeProperty .
	gist:stix_goals a owl:DatatypeProperty .
	gist:stix_secondary_motivations a owl:DatatypeProperty .
	gist:stix_sectors a owl:DatatypeProperty .
	gist:stix_sophistication a owl:DatatypeProperty .

	gist:stix_source_ref a owl:ObjectProperty .
	gist:stix_spec_version a owl:DatatypeProperty .
	gist:stix_target_ref a owl:ObjectProperty .

	#explicitly typing uses and indicates as ObjectProperties
	gist:stix_uses a owl:ObjectProperty .
	gist:stix_indicates a owl:ObjectProperty .
	?source_ref_iri ?relation_iri ?target_ref_iri .

	gist:stix_tool_types a owl:DatatypeProperty .
	gist:stix_valid_from a owl:DatatypeProperty .

	gist:stix_external_reference a owl:ObjectProperty .
	gist:stix_source_name a owl:DatatypeProperty .
	gist:stix_url a owl:DatatypeProperty .
	gist:stix_description a owl:DatatypeProperty .
	gist:stix_external_id a owl:DatatypeProperty .

	gist:stix_kill_chain_phase a owl:ObjectProperty .
	gist:stix_kill_chain_name a owl:DatatypeProperty .
	gist:stix_kill_chain_phase_name a owl:DatatypeProperty .

# ==========================


	?object_iri gist:stix_external_reference ?exref_iri .
	?exref_iri a gist:StixObject .
	?exref_iri gist:stix_source_name ?ex_ref_source_name .
	?exref_iri gist:stix_url ?ex_ref_url .
	?exref_iri gist:stix_description ?ex_ref_description .
	?exref_iri gist:stix_external_id ?ex_ref_external_id .

	?object_iri gist:stix_kill_chain_phase ?kill_chain_phase_iri .
	?kill_chain_phase_iri a gist:StixObject .
	?kill_chain_phase_iri gist:stix_kill_chain_name ?kill_name .
	?kill_chain_phase_iri gist:stix_kill_chain_phase_name ?phase_name .



}
WHERE {
	SERVICE <x-sparql-anything:blank-nodes=false> {
		fx:properties fx:location "{{LOCATION}}" .


	# root array of objects
			?root xyz:objects ?objects .

	# individual objects from the objects array
			?objects ?object_slot ?object .

	# the type and id of the object
			?object xyz:type ?type .
			?object xyz:id ?id .


	### OPTIONAL ###
	# aliases
			OPTIONAL {
				?object xyz:aliases ?aliases .
				?aliases fx:anySlot ?alias .
			}

	# contact_information
			OPTIONAL {?object xyz:contact_information ?contact_information .}
			BIND(xsd:string(?contact_information) AS ?contact_information_string )

	# created
			OPTIONAL {?object xyz:created ?created . }

	# description
			OPTIONAL { ?object xyz:description ?description . }

			BIND(STR(?description) AS ?rawDescription)
			BIND(
			  IF(CONTAINS(?rawDescription, "\\") || CONTAINS(?rawDescription, "\""),
			     fx:replace(fx:replace(?rawDescription, "\\", "\\\\"), "\"", "\\\""),
			     ?rawDescription
			  ) AS ?description_sanitized
			)



	# external_references
			OPTIONAL {
				?object xyz:external_references ?external_references .
				?external_references fx:anySlot ?external_reference .
				?external_reference xyz:source_name ?ex_ref_source_name .
				OPTIONAL { ?external_reference xyz:description ?ex_ref_description . }
				OPTIONAL { ?external_reference xyz:external_id ?ex_ref_external_id . }
				OPTIONAL { ?external_reference xyz:url ?ex_ref_url . }
				BIND (IRI(CONCAT(STR(gistx:external-reference-), STRUUID() )) AS ?exref_iri ) .
			}

	# first_seen
			OPTIONAL {?object xyz:first_seen ?first_seen . }

	# identity_class
			OPTIONAL {?object xyz:identity_class ?identity_class .}

	# indicator_types
			OPTIONAL {?object xyz:indicator_types ?indicator_types .
						?indicator_types ?indicator_slot ?indicator_list .	}

	# kill_chain_phases
			OPTIONAL {
				?object xyz:kill_chain_phases ?kill_chain_phases .
				?kill_chain_phases ?anySlot ?chain_list .
				?chain_list xyz:kill_chain_name ?kill_name .
				OPTIONAL { ?chain_list 	xyz:phase_name ?phase_name . }
				BIND (IRI(CONCAT(STR(gistx:kill-chain-phase-), ?phase_name )) AS ?kill_chain_phase_iri ) .
			}

	# malware_types
			OPTIONAL {
				?object xyz:malware_types ?malware_types .
				?malware_types  ?malware_types_slot ?malware_type .
			}

	# modified
			OPTIONAL {?object xyz:modified ?modified . }

	# name
			OPTIONAL {?object xyz:name ?name . }

	# objective
			OPTIONAL {?object xyz:objective ?objective . }

	# pattern
			OPTIONAL {?object xyz:pattern ?pattern . }

	# pattern_type
			OPTIONAL {?object xyz:pattern_type ?pattern_type . }

	# primary_motivation
			OPTIONAL {?object xyz:primary_motivation ?primary_motivation . }

	# relationship_type
			OPTIONAL {?object xyz:relationship_type ?relationship_type . }

	# resource_level
			OPTIONAL {?object xyz:resource_level ?resource_level . }

	# roles
			OPTIONAL {
				?object xyz:roles ?roles .
				?roles ?roles_slot ?role_list .
			}

	# goals
			OPTIONAL {
				?object xyz:goals ?goals .
				?goals ?goals_slot ?goal_list .
			}

	# secondary_motivations
			OPTIONAL {
				?object xyz:secondary_motivations ?secondary_motivations .
				?secondary_motivations ?secondary_motivations_slot ?secondary_motivation_list .
			}

	# sectors
			OPTIONAL {?object xyz:sectors ?sectors .
				?sectors ?sectors_slot ?sector_list .	}

	# name
			OPTIONAL {?object xyz:sophistication ?sophistication . }

	# source_ref
			OPTIONAL {?object xyz:source_ref ?source_ref . }

	# spec_version
			OPTIONAL {?object xyz:spec_version ?spec_version . }

	# target_ref
			OPTIONAL {?object xyz:target_ref ?target_ref . }

	# tool_types
			OPTIONAL {?object xyz:tool_types ?tool_types .
						?tool_types ?tool_types_slot ?tool_types_list .	}

	# valid_from
			OPTIONAL {?object xyz:valid_from ?valid_from . }

			} # End of Service clause


	# Reformat dates to allow ingestion into xsd:dateTime
	BIND(xsd:dateTime(?created) AS ?dt_created )
	BIND(xsd:dateTime(?modified) AS ?dt_modified )
	BIND(xsd:dateTime(?first_seen) AS ?dt_first_seen )
	BIND(xsd:dateTime(?valid_from) AS ?dt_valid_from )



	# BIND( CONCAT(STR(?type), "^^xsd:string") AS ?str_type )

	# Form the IRIs
	BIND(IRI(CONCAT(STR(gistx:), ?id)) AS ?object_iri )
	BIND(IRI(CONCAT(STR(gistx:), ?source_ref)) AS ?source_ref_iri )
	BIND(IRI(CONCAT(STR(gistx:), ?target_ref)) AS ?target_ref_iri )

	# bind the appropriate predicate based on relationship_type
	BIND (IRI(CONCAT(STR(gist:), "stix_", STR(?relationship_type))) AS ?relation_iri )



	# Form the stix type of either gist:Bundle or gist:StixObject
	BIND (IF(?type = "bundle", IRI(STR(gistx:StixBundle)),  IRI(STR(gist:StixObject))) AS ?stixType )
}
```

**Note:** *The where clause is particularly important to examine. At the time of this note (March 3, 2026) the SPARQL-Anything project has some issues with property injection. It has a bug that prevents the injection of the document location. Therefore, a temporary template file is generated for each new document to be transformed by replacing the "{{LOCATION}}" placeholder.*

In the above template, lines 280 through 286 are incredibly important. The STIX 2.1 Specification has STIX Relationship Objects which make it more similar to a Labeled Property Graph rather than a Semantic Graph. Hence, these lines assert a true Object Property between the “source” and “target” nodes.

### Just JSON, not JSON-LD

Unfortunately, the OASIS CTI Technical Committee did not make the decision to represent the STIX standard in JSON-LD. This would have made the transformation to RDF/XML so much easier.

## CAPEC Transformation

The CAPEC data comes as a Comma Separated Value file. We’re using a SPARQL-Anything template to make the CSV file into an RDF graph.

```
PREFIX rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX skos:  <http://www.w3.org/2004/02/skos/core#>
PREFIX gist:  <https://w3id.org/semanticarts/ns/ontology/gist/>
PREFIX gistx: <https://w3id.org/semanticarts/ns/taxonomy/gist/>
PREFIX cwe:   <https://w3id.org/semanticarts/ns/frameworks-cwe/>
PREFIX capec: <https://w3id.org/semanticarts/ns/frameworks-capec/>
PREFIX attack:<https://w3id.org/semanticarts/ns/frameworks-attack/>
PREFIX xyz:  <http://sparql.xyz/facade-x/data/>
PREFIX fx:    <http://sparql.xyz/facade-x/ns/>
PREFIX apf:   <http://jena.apache.org/ARQ/property#>


# Header for CAPEC CSV file: 1000-modified-header.csv
#
# ID
# Name	
# Abstraction
# Status	
# Description
# Alternate_Terms
# Likelihood_Of_Attack
# Typical_Severity
# Related_Attack_Patterns
# Execution_Flow
# Prerequisites
# Skills_Required
# Resources_Required
# Indicators
# Consequences
# Mitigations
# Example_Instances
# Related_Weaknesses
# Taxonomy_Mappings
# Notes


CONSTRUCT {

  ?attack_pattern_iri rdf:type  gist:AttackPattern .
  ?attack_pattern_iri gist:name  ?Name .
  ?attack_pattern_iri gist:description  ?Description .
  ?attack_pattern_iri ?predicate  ?related_attack_pattern_iri .
  ?related_attack_pattern_iri rdf:type gist:AttackPattern .
  ?attack_pattern_iri gist:relatedTechniqueIdentifier ?related_technique_str .
  ?attack_pattern_iri gist:hasExample  ?example_text .
  ?attack_pattern_iri gist:isCategorizedBy ?abstraction_iri, ?status_iri, ?likelihood_iri, ?severity_iri .
  ?attack_pattern_iri gist:relatedToWeakness  ?cwe_iri .
  ?cwe_iri rdf:type gist:Weakness .

  ?attack_pattern_iri capec:ID  ?ID .
  ?attack_pattern_iri capec:Name  ?Name .    
  ?attack_pattern_iri capec:Abstraction  ?Abstraction .
  ?attack_pattern_iri capec:Status  ?Status .
  ?attack_pattern_iri capec:Description  ?Description .
  ?attack_pattern_iri capec:Alternate_Terms  ?Alternate_Terms .
  ?attack_pattern_iri capec:Likelihood_Of_Attack  ?Likelihood_Of_Attack .
  ?attack_pattern_iri capec:Typical_Severity  ?Typical_Severity .
  ?attack_pattern_iri capec:Related_Attack_Patterns  ?Related_Attack_Patterns .
  ?attack_pattern_iri capec:Execution_Flow  ?Execution_Flow .
  ?attack_pattern_iri capec:Prerequisites  ?Prerequisites .
  ?attack_pattern_iri capec:Skills_Required  ?Skills_Required .
  ?attack_pattern_iri capec:Resources_Required  ?Resources_Required .
  ?attack_pattern_iri capec:Indicators  ?Indicators .
  ?attack_pattern_iri capec:Consequences  ?Consequences .
  ?attack_pattern_iri capec:Mitigations  ?Mitigations .
  ?attack_pattern_iri capec:Example_Instances  ?Example_Instances .
  ?attack_pattern_iri capec:Related_Weaknesses  ?Related_Weaknesses .
  ?attack_pattern_iri capec:Taxonomy_Mappings  ?Taxonomy_Mappings .
  ?attack_pattern_iri capec:Notes  ?Notes .
  
}
WHERE {

  ###########################################################################
  # Load CSV rows via SPARQL‑Anything
  ###########################################################################
  SERVICE <x-sparql-anything:location=data/capec/input/1000-modified-header.csv,csv.headers=true> {

  ?row xyz:ID  ?ID .
  ?row xyz:Name  ?Name .
  ?row xyz:Abstraction  ?Abstraction .
  ?row xyz:Status  ?Status .
  ?row xyz:Description  ?Description .
  ?row xyz:Alternate_Terms  ?Alternate_Terms .
  ?row xyz:Likelihood_Of_Attack  ?Likelihood_Of_Attack .
  ?row xyz:Typical_Severity  ?Typical_Severity .
  ?row xyz:Related_Attack_Patterns  ?Related_Attack_Patterns .
  ?row xyz:Execution_Flow  ?Execution_Flow .
  ?row xyz:Prerequisites  ?Prerequisites .
  ?row xyz:Skills_Required  ?Skills_Required .
  ?row xyz:Resources_Required  ?Resources_Required .
  ?row xyz:Indicators  ?Indicators .
  ?row xyz:Consequences  ?Consequences .
  ?row xyz:Mitigations  ?Mitigations .
  ?row xyz:Example_Instances  ?Example_Instances .
  ?row xyz:Related_Weaknesses  ?Related_Weaknesses .
  ?row xyz:Taxonomy_Mappings  ?Taxonomy_Mappings .
  ?row xyz:Notes  ?Notes .
  
  }

  ###########################################################################
  # Extract columns by name
  ###########################################################################


  ###########################################################################
  # Construct CAPEC Attack Pattern IRI
  ###########################################################################
  BIND(IRI(CONCAT(STR(gistx:_AttackPattern_CAPEC-), ?ID)) AS ?attack_pattern_iri)

  ###########################################################################
  # Taxonomy IRIs
  ###########################################################################
  BIND(IRI(CONCAT(STR(gistx:_Abstraction_), ?Abstraction)) AS ?abstraction_iri)
  BIND(IRI(CONCAT(STR(gistx:_Status_), ?Status)) AS ?status_iri)

  BIND(
    IF(?Likelihood_Of_Attack != "",
       IRI(CONCAT(STR(gistx:_AttackLikelihood_), REPLACE(?Likelihood_Of_Attack, " ", "_"))),
       ?unbound
    ) AS ?likelihood_iri
  )

  BIND(
    IF(?Typical_Severity != "",
       IRI(CONCAT(STR(gistx:_AttackSeverity_), REPLACE(?Typical_Severity, " ", "_"))),
       ?unbound
    ) AS ?severity_iri
  )

  ###########################################################################
  # Related Attack Patterns (CAPEC → CAPEC)
  ###########################################################################
  OPTIONAL {
      ?Nature apf:strSplit (?Related_Attack_Patterns "::NATURE:") .

      # Relationship predicate
      BIND(
        IF(?Nature != "",
           IRI(CONCAT(STR(gist:), STRBEFORE(?Nature, ":"))),
           ?unbound
        ) AS ?relationship
      )

      # Map relationship to gist predicate
      VALUES (?relationship ?predicate) {
        (gist:ChildOf    gist:childOf)
        (gist:CanPrecede gist:canPrecede)
        (gist:PeerOf     gist:peerOf)
        (gist:CanAlsoBe  gist:canAlsoBe)
        (gist:CanFollow  gist:canFollow)
      }

      # Related CAPEC ID
      BIND(
        IF(?Nature != "",
           IRI(CONCAT(
             STR(gistx:_AttackPattern_CAPEC-),
             IF(
               STRENDS(?Nature, "::"),
               STRBEFORE(STRAFTER(?Nature, ":CAPEC ID:"), "::"),
               STRAFTER(?Nature, ":CAPEC ID:")
             )
           )),
           ?unbound
        ) AS ?related_attack_pattern_iri
      )
  }

  ###########################################################################
  # Related Weaknesses (CAPEC → CWE)
  ###########################################################################
  OPTIONAL {
      ?cwe apf:strSplit (?Related_Weaknesses "::") .
      BIND(
        IF(?cwe != "",
           IRI(CONCAT(STR(gistx:_Weakness_CWE-), ?cwe)),
           ?unbound
        ) AS ?cwe_iri
      )
  }

  ###########################################################################
  # ATT&CK Technique Identifier
  ###########################################################################
  OPTIONAL {
      ?tax_term apf:strSplit (?Taxonomy_Mappings "TAXONOMY NAME:") .
      BIND(
        IF(
          STRSTARTS(?tax_term, "ATTACK:ENTRY ID:"),
          CONCAT("T", STRBEFORE(STRAFTER(?tax_term, "ATTACK:ENTRY ID:"), ":")),
          ?unbound
        ) AS ?related_technique_str
      )
  }

  ###########################################################################
  # Example Instances
  ###########################################################################
  OPTIONAL {
      ?example apf:strSplit (?Example_Instances "::") .
      BIND(
        IF(
          ?example != "",
          IF(STRENDS(?example, "::"), STRBEFORE(?example, "::"), ?example),
          ?unbound
        ) AS ?example_text
      )
  }
}
```

## CPE Transformation (from NVD feed)

```
PREFIX xyz: <http://sparql.xyz/facade-x/data/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX fx: <http://sparql.xyz/facade-x/ns/>
PREFIX gist: <https://w3id.org/semanticarts/ns/ontology/gist/>
PREFIX gistx: <https://w3id.org/semanticarts/ns/taxonomy/gist/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX cpe: <https://w3id.org/semanticarts/ns/frameworks-cpe/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

# python scripts/json-to-gistCyber.py  -i data/input/nvdcpe-2.0/nvdcpe-2.0-chunks/ -o data/output/ -s sparql-anything-template/cpe-json-2-rdf-gistCyber.sparql -t ./.temp/

#   Exammple CPE JSON
# {
#   "resultsPerPage": 1,
#   "startIndex": 0,
#   "totalResults": 1458143,
#   "format": "NVD_CPE",
#   "version": "2.0",
#   "timestamp": "2025-08-20T22:46:18.160",
#   "products": [
#     {
#       "cpe": {
#         "deprecated": false,
#         "cpeName": "cpe:2.3:a:3com:3cdaemon:-:*:*:*:*:*:*:*",
#         "cpeNameId": "BAE41D20-D4AF-4AF0-AA7D-3BD04DA402A7",
#         "lastModified": "2011-01-12T14:35:43.723",
#         "created": "2007-08-23T21:05:57.937",
#         "titles": [
#           { "title": "3Com 3CDaemon", "lang": "en" },
#           { "title": "スリーコム 3CDaemon", "lang": "ja" }
#         ]
#       }
#     }
#   ]
# }

CONSTRUCT {

	?cpe_iri a gist:Product .
	?cpe_iri a cpe:CpeEntry .

	?cpe_iri cpe:depricated ?prod_depricated .
	?cpe_iri cpe:cpeName ?safe_cpeName .
	?cpe_iri gist:name ?safe_cpeName .
    ?cpe_iri skos:prefLabel ?safe_cpeName .
	?cpe_iri cpe:cpeNameId ?prod_cpeNameId .
	?cpe_iri cpe:lastModified ?prod_lastModified .
	?cpe_iri cpe:created ?prod_created .
	?cpe_iri cpe:title ?safe_title_string .


	?cpe_iri cpe:cpe-version ?cpe_version .
	?cpe_iri cpe:part ?part .
	?cpe_iri cpe:vendor ?vendor .
	?cpe_iri cpe:product ?product .
	?cpe_iri cpe:version ?version .
	?cpe_iri cpe:update ?update .
	?cpe_iri cpe:edition ?edition .
	?cpe_iri cpe:language ?language .
	?cpe_iri cpe:swEdition ?swEdition .
	?cpe_iri cpe:targetSw ?targetSw .
	?cpe_iri cpe:targetHw ?targetHw .

}
WHERE {
	SERVICE <x-sparql-anything:blank-nodes=false> {
	# fx:properties fx:location "data/input/my-input.json" .
	fx:properties fx:location "{{LOCATION}}" .

	# "required": ["cpeName", "cpeNameId", "deprecated", "lastModified", "created"],
	# root array
	?root ?product_slot ?aProduct .

	# a single product
		?aProduct xyz:deprecated ?prod_depricated .
		?aProduct xyz:cpeName ?prod_cpeName .
		?aProduct xyz:cpeNameId ?prod_cpeNameId .
		?aProduct xyz:lastModified ?prod_lastModified .
		?aProduct xyz:created ?prod_created .


	# Sanitize title
	OPTIONAL {
	  ?aProduct xyz:titles ?prod_titles .
	  ?prod_titles ?prod_titles_slot ?prod_title .
	  ?prod_title xyz:title ?prod_title_string .

	}




	}  ##### End of SERVICE block ##############



	BIND(STR(?prod_cpeName) AS ?rawCpeName)
	BIND(
	  IF(CONTAINS(?rawCpeName, "\\") || CONTAINS(?rawCpeName, "\""),
	     fx:replace(fx:replace(?rawCpeName, "\\", "\\\\"), "\"", "\\\""),
	     ?rawCpeName
	  ) AS ?safe_cpeName
	)

	BIND(STR(?prod_title_string) AS ?rawTitleString)
	BIND(
	  IF(CONTAINS(?rawTitleString, "\\") || CONTAINS(?rawTitleString, "\""),
	     fx:replace(fx:replace(?rawTitleString, "\\", "\\\\"), "\"", "\\\""),
	     ?rawTitleString
	  ) AS ?safe_title_string
	)


#===================================================================================================================
				# Normalize the affected cpe string
  				  # Identify CPE format
    			BIND(
      			IF(REGEX(STR(?safe_cpeName), "^cpe:/"), "CPE_2_2",
      			IF(REGEX(STR(?safe_cpeName), "^cpe:2\\.3:"), "CPE_2_3",
      			IF(REGEX(STR(?safe_cpeName), "^cpe:\\d+\\.\\d+:"), "CPE_N_N", "UNKNOWN"))) AS ?cpeFormat
    			)

    			# Normalize CPE 2.2 to 2.3 (basic scaffold — expand as needed)
    			BIND(
      				IF(?cpeFormat = "CPE_2_2",
        				CONCAT("cpe:2.3:", STRAFTER(STR(?safe_cpeName), "cpe:/") , ":*:*:*:*:*:*:*"),
        				IF(?cpeFormat = "CPE_2_3",
          					STR(?safe_cpeName),
          					IF(?cpeFormat = "UNKNOWN", STR(?safe_cpeName), "" )
        				)
      				) AS ?newCpeName
    			)

    			BIND(REPLACE(STR(?newCpeName), ":", "_") AS ?temp2CPE )
    			BIND(REPLACE(STR(?temp2CPE), "\\.", "-") AS ?temp3CPE )
    			BIND(REPLACE(STR(?temp3CPE), "\\*", "any") AS ?normalizedCPE )
     			BIND( IF(BOUND(?normalizedCPE), (IRI(CONCAT(STR(gistx:), "_PRODUCT_", ?normalizedCPE))), ?nothing ) AS ?cpe_iri) .

#===================================================================================================================



# Suggestion: Don't strip the prefix as is currently being done here.
#############################################################################
# The cpe:2.3:part:vendor:version are manditory for a valid CPE Name
# Rather than just stripping the cpe:2.3: off this should record these values
# in order to recognize cpe:4.0 and future versions.

#  BIND(STRAFTER(?safe_cpeName, "cpe:2.3:") AS ?core)
  BIND(STRAFTER(?safe_cpeName, "cpe:") AS ?core)

  # Split the string by colon using REPLACE to simulate tokenization
  BIND(REPLACE(?core, "\\\\:", "ESCAPEDCOLON") AS ?escaped)
  BIND(REPLACE(?escaped, ":", "|") AS ?pipeDelimited)
  BIND(REPLACE(?pipeDelimited, "ESCAPEDCOLON", ":") AS ?normalized)

  # Now split by pipe using SUBSTR and STRBEFORE/STRAFTER

  BIND(STRAFTER(?normalized, "|") AS ?rest0)
  BIND(STRBEFORE(?normalized, "|") AS ?cpe_version)

  BIND(STRBEFORE(?rest0, "|") AS ?part)
  BIND(STRAFTER(?rest0, "|") AS ?rest1)

  BIND(STRBEFORE(?rest1, "|") AS ?vendor)
  BIND(STRAFTER(?rest1, "|") AS ?rest2)

  BIND(STRBEFORE(?rest2, "|") AS ?product)
  BIND(STRAFTER(?rest2, "|") AS ?rest3)

  BIND(STRBEFORE(?rest3, "|") AS ?version)
  BIND(STRAFTER(?rest3, "|") AS ?rest4)

  BIND(STRBEFORE(?rest4, "|") AS ?update)
  BIND(STRAFTER(?rest4, "|") AS ?rest5)

  BIND(STRBEFORE(?rest5, "|") AS ?edition)
  BIND(STRAFTER(?rest5, "|") AS ?rest6)

  BIND(STRBEFORE(?rest6, "|") AS ?language)
  BIND(STRAFTER(?rest6, "|") AS ?rest7)

  BIND(STRBEFORE(?rest7, "|") AS ?swEdition)
  BIND(STRAFTER(?rest7, "|") AS ?rest8)

  BIND(STRBEFORE(?rest8, "|") AS ?targetSw)
  BIND(STRAFTER(?rest8, "|") AS ?rest9)

  BIND(STRBEFORE(?rest9, "|") AS ?targetHw)
  BIND(STRAFTER(?rest9, "|") AS ?other)
#############################################################################



}
```

## CVE Transformation (from NVD feed)

**Note:** *There are two data sources for the CVE data. The first source is the cvelist5V GitHub project. This project’s data is expressed in the newest JSON Schema (version 5). The second source is from the National Vulnerability Database and is expressed in the JSON Schema version 2. This is likely due to the fact that many people are dependent on the JSON 2 feed. The pushback from the community because of the cost involved in changing software to the new format was probably significant.*

```
PREFIX xyz: <http://sparql.xyz/facade-x/data/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX fx: <http://sparql.xyz/facade-x/ns/>
PREFIX gist: <https://w3id.org/semanticarts/ns/ontology/gist/>
PREFIX gistx: <https://w3id.org/semanticarts/ns/taxonomy/gist/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX stix: <http://docs.oasis-open.org/cti/ns/stix#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX vuln: <http://www.cve.org/ontology/vulnerability#>
PREFIX cwe: <https://w3id.org/semanticarts/ns/frameworks-cwe/>
PREFIX cve: <https://w3id.org/semanticarts/ns/frameworks-cve/>
PREFIX cpe: <https://w3id.org/semanticarts/ns/frameworks-cpe/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

CONSTRUCT {


	?cve_iri a gist:Vulnerability .
	?cve_iri cve:cveId ?cveId .
	?cve_iri skos:prefLabel ?cveId .

	?cve_iri cve:assignerOrgId ?assignerOrgId .
	?cve_iri cve:assignerShortName ?assignerShortName .
	?cve_iri cve:requesterUserId ?requesterUserId .
	?cve_iri cve:serial ?serial .
	?cve_iri cve:state ?state .

	?cve_iri cve:title ?title .
	?cve_iri cve:datePublic ?datePublic .
	?cve_iri cve:dateAssigned ?dateAssigned .
	?cve_iri cve:description ?des_value .
#	?cve_iri cve:stix_description ?des_value .


	?cve_iri cve:affectedProduct ?affectedProduct .
	?cve_iri cve:affectedVendor ?affectedProductVendor .
	?cve_iri cve:affectedPackageName ?affectedPackageName .
	?cve_iri cve:affectsProduct ?normalizedCpeIRI .
	?normalizedCpeIRI a gist:Product.
	?normalizedCpeIRI cpe:cpeName ?rawCpeName .
	?normalizedCpeIRI skos:prefLabel ?rawCpeName .

	?normalizedCpeIRI cpe:cpe-version ?cpe_version .
	?normalizedCpeIRI cpe:part ?part .
	?normalizedCpeIRI cpe:vendor ?vendor .
	?normalizedCpeIRI cpe:product ?product .
	?normalizedCpeIRI cpe:version ?version .
	?normalizedCpeIRI cpe:update ?update .
	?normalizedCpeIRI cpe:edition ?edition .
	?normalizedCpeIRI cpe:language ?language .
	?normalizedCpeIRI cpe:swEdition ?swEdition .
	?normalizedCpeIRI cpe:targetSw ?targetSw .
	?normalizedCpeIRI cpe:targetHw ?targetHw .




#	?cve_iri cve:affectedDefaultStatus ?affectedDefaultStatus .

#	?cve_iri cve:versionStatus ?verStatus .
	?cve_iri cve:versionString ?versionString .


	?cve_iri cve:providerOrgId ?orgId .
	?cve_iri cve:providerShortName ?shortName .
	?cve_iri cve:dateUpdated ?dateUpdated .

	?cve_iri cve:cweId ?cweID .
	?cve_iri cve:exploitsWeakness ?cwe_iri .
	?cwe_iri a gist:Weakness .

	?cve_iri cve:hasCvssMetric ?cvss_iri_31 .
	?cvss_iri_31 a cve:CvssMetric .
	?cvss_iri_31 cve:baseScore ?baseScore31 .
	?cvss_iri_31 cve:baseSeverity ?baseSeverity31 .
	?cvss_iri_31 cve:vectorString ?vectorString31 .
	?cvss_iri_31 cve:exploitabilityScore ?exploitabilityScore31 .
	?cvss_iri_31 cve:impactScore ?impactScore31 .
	?cvss_iri_31 cve:version ?version31 .
	?cvss_iri_31 cve:attackComplexity ?attackComplexity31 .
	?cvss_iri_31 cve:attackVector ?attackVector31 .
	?cvss_iri_31 cve:availabilityImpact ?availabilityImpact31 .
	?cvss_iri_31 cve:confidentialityImpact ?confidentialityImpact31 .
	?cvss_iri_31 cve:integrityImpact ?integrityImpact31 .
	?cvss_iri_31 cve:privilegesRequired ?privilegesRequired31 .
	?cvss_iri_31 cve:userInteraction ?userInteraction31 .


	?cve_iri cve:hasCvssMetric ?cvss_iri_40 .
	?cvss_iri_40 a cve:CvssMetric .
	?cvss_iri_40 cve:baseScore ?baseScore40 .
	?cvss_iri_40 cve:baseSeverity ?baseSeverity40 .
	?cvss_iri_40 cve:vectorString ?vectorString40 .
	?cvss_iri_40 cve:exploitabilityScore ?exploitabilityScore40 .
	?cvss_iri_40 cve:impactScore ?impactScore40 .
	?cvss_iri_40 cve:version ?version40 .
	?cvss_iri_40 cve:Automatable ?Automatable40 .
	?cvss_iri_40 cve:Recovery ?Recovery400 .
	?cvss_iri_40 cve:Safety ?Safety40 .
	?cvss_iri_40 cve:attackComplexity ?attackComplexity40 .
	?cvss_iri_40 cve:attackRequirements ?attackRequirements40 .
	?cvss_iri_40 cve:attackVector ?attackVector40 .
	?cvss_iri_40 cve:privilegesRequired ?privilegesRequired40 .
	?cvss_iri_40 cve:providerUrgency ?providerUrgency40 .
	?cvss_iri_40 cve:subAvailabilityImpact ?subAvailabilityImpact40 .
	?cvss_iri_40 cve:subConfidentialityImpact ?subConfidentialityImpact40 .
	?cvss_iri_40 cve:subIntegrityImpact ?subIntegrityImpact40 .
	?cvss_iri_40 cve:userInteraction ?userInteraction40 .
	?cvss_iri_40 cve:vulnAvailabilityImpact ?vulnAvailabilityImpact40 .
	?cvss_iri_40 cve:vulnConfidentialityImpact ?vulnConfidentialityImpact40 .
	?cvss_iri_40 cve:vulnIntegrityImpact ?vulnIntegrityImpact40 .
	?cvss_iri_40 cve:vulnerabilityResponseEffort ?vulnerabilityResponseEffort40 .


}
WHERE {
	SERVICE <x-sparql-anything:blank-nodes=false> {
		fx:properties fx:location "{{LOCATION}}" .


	# CVE Record root of json
	?root xyz:dataType ?dataType .
	OPTIONAL { ?root xyz:dataVersion ?dataVersion . }
	?root xyz:cveMetadata ?cveMetadata .



	# CVE Metadata Object
	?cveMetadata xyz:cveId ?cveId .
	OPTIONAL {
		?cveMetadata xyz:assignerOrgId ?assignerOrgId .
		?cveMetadata xyz:assignerShortName ?assignerShortName .
		?cveMetadata xyz:requesterUserId ?requesterUserId .
		?cveMetadata xyz:serial ?serial .
		?cveMetadata xyz:state ?state .
	}

	# root array of CNA Containers
		?root xyz:containers ?cnaContainers .

	# a single container from the containers array
		?cnaContainers xyz:cna ?aContainer .
		?cnaContainers ?container_slot ?aContainer .
		OPTIONAL {?aContainer xyz:datePublic ?datePublic .}
		OPTIONAL {?aContainer xyz:title ?title .}
		OPTIONAL {?aContainer xyz:dateAssigned ?dateAssigned .}
		OPTIONAL {
			?aContainer xyz:descriptions ?descripts .
			?descripts ?descript_slot ?aDescription .
			?aDescription xyz:value ?des_value .
			BIND(
			  IF(
			    BOUND(?des_value),
			    fx:replace(
			      fx:replace(?des_value, "\\", "\\\\"),
			      "\"", "\\\""
			    ),
 			   ""  # or UNDEF if supported
			  ) AS ?safe_des_value
			)
		}

	# Get the AffectedAsset of the CnaContainer
		OPTIONAL {
			?aContainer xyz:affected ?affected .
			?affected ?prod_slot ?anAffectedAsset .
			OPTIONAL {?anAffectedAsset xyz:product ?affectedProduct .}
			OPTIONAL {?anAffectedAsset xyz:vendor ?affectedProductVendor .	 }
			OPTIONAL {?anAffectedAsset xyz:packageName ?affectedPackageName . }
			OPTIONAL {?anAffectedAsset xyz:defaultStatus ?affectedDefaultStatus .	 }
			OPTIONAL {
				?anAffectedAsset xyz:cpes ?aCpe .
				?aCpe ?cpe_slot ?acpe .
			}
#			OPTIONAL {?anAffectedAsset xyz:versions ?aVersion .		 }
#			OPTIONAL {?aVersion ?ver_slot ?aVer . }
#			OPTIONAL {?aVer xyz:status ?verStatus . }
#			OPTIONAL {?aVer xyz:version ?versionString . }
		}





	# Get the provider metadata from the container
		?aContainer xyz:providerMetadata ?providerMetadata .
		OPTIONAL {
			?providerMetadata xyz:orgId ?orgId .
			?providerMetadata xyz:shortName ?shortName .
			?providerMetadata xyz:dateUpdated ?dateUpdated .
		}




	# Get the problem types from the container
		?aContainer xyz:problemTypes ?problemTypes .
		?problemTypes ?probType_slot ?problemType .
		OPTIONAL {
			?problemType xyz:descriptions ?probTypeDescriptions .
			?probTypeDescriptions ?description_slot ?pTDescription .
				OPTIONAL { ?pTDescription xyz:lang ?ptdLang . }
				OPTIONAL { ?pTDescription xyz:cweId ?cweID . }
				OPTIONAL { ?pTDescription xyz:description ?ptdDescription . }
				OPTIONAL { ?pTDescription xyz:type ?description_type . }
		}

	# Get the CVSS Metrics from the container
	OPTIONAL {
		  ?aContainer xyz:metrics ?metrics .
		  ?metrics ?metric_slot ?aMetric .

		  # CVSS v3.1
		  OPTIONAL {
		    ?aMetric xyz:cvssV3_1 ?cvssMetric31 .

#		    OPTIONAL { ?cvssMetric31 xyz:attackComplexity ?attackComplexity31 . }
		    OPTIONAL { ?cvssMetric31 xyz:attackVector ?attackVector31 . }
		    OPTIONAL { ?cvssMetric31 xyz:availabilityImpact ?availabilityImpact31 . }
		    OPTIONAL { ?cvssMetric31 xyz:confidentialityImpact ?confidentialityImpact31 . }
		    OPTIONAL { ?cvssMetric31 xyz:integrityImpact ?integrityImpact31 . }
#		    OPTIONAL { ?cvssMetric31 xyz:privilegesRequired ?privilegesRequired31 . }
#		    OPTIONAL { ?cvssMetric31 xyz:userInteraction ?userInteraction31 . }

# 11-17-2025 Commented out
#		    OPTIONAL { ?cvssMetric31 xyz:baseScore ?baseScore31 . }
#		    OPTIONAL { ?cvssMetric31 xyz:baseSeverity ?baseSeverity31 . }
#		    OPTIONAL { ?cvssMetric31 xyz:vectorString ?vectorString31 . }
#		    OPTIONAL { ?cvssMetric31 xyz:version ?version40 . }
#		    OPTIONAL { ?cvssMetric31 xyz:exploitabilityScore ?exploitabilityScore31 . }
#		    OPTIONAL { ?cvssMetric31 xyz:impactScore ?impactScore31 . }

		  }

		  # CVSS v4.0
		  OPTIONAL {
		    ?aMetric xyz:cvssV4_0 ?cvssMetric40 .

#		    OPTIONAL { ?cvssMetric40 xyz:Automatable ?Automatable40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:Recovery ?Recovery40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:Safety ?Safety40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:attackComplexity ?attackComplexity40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:attackRequirements ?attackRequirements40 . }
		    OPTIONAL { ?cvssMetric40 xyz:attackVector ?attackVector40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:privilegesRequired ?privilegesRequired40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:providerUrgency ?providerUrgency40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:subAvailabilityImpact ?subAvailabilityImpact40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:subConfidentialityImpact ?subConfidentialityImpact40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:subIntegrityImpact ?subIntegrityImpact40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:userInteraction ?userInteraction40 . }
		    OPTIONAL { ?cvssMetric40 xyz:vulnAvailabilityImpact ?vulnAvailabilityImpact40 . }
		    OPTIONAL { ?cvssMetric40 xyz:vulnConfidentialityImpact ?vulnConfidentialityImpact40 . }
		    OPTIONAL { ?cvssMetric40 xyz:vulnIntegrityImpact ?vulnIntegrityImpact40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:vulnerabilityResponseEffort ?vulnerabilityResponseEffort40 . }


# 11-17-2025 Commented out
#		    OPTIONAL { ?cvssMetric40 xyz:baseScore ?baseScore40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:baseSeverity ?baseSeverity40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:vectorString ?vectorString40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:version ?version40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:exploitabilityScore ?exploitabilityScore40 . }
#		    OPTIONAL { ?cvssMetric40 xyz:impactScore ?impactScore40 . }

		  }
    }


	}  ##### End of SERVICE block ##############

	# Generate the CVE Record IRI
	#  BIND( IF(?dataType = "CVE_RECORD", (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#CveRecord-", ?cveId  ))), ?nothing ) AS ?cve_record_iri ) .

	# Generate the CVE Metadata IRI
	#  BIND( IF(BOUND(?cveId), (IRI(CONCAT("https://w3id.org/semanticarts/ns/ontology/gist/", ?cveId  ))), ?nothing ) AS ?cve_iri ) .
	 BIND( IF(BOUND(?cveId), (IRI(CONCAT(STR(gistx:), "_Vulnerability_", ?cveId  ))), ?nothing ) AS ?cve_iri ) .


#===================================================================================================================
	BIND(SHA256(?vectorString31) AS ?vectorHash31)
	BIND(IRI(CONCAT("https://w3id.org/semanticarts/ns/frameworks-cve/CvssMetric-v3.1-", ?vectorHash31)) AS ?cvss_iri_31)

	BIND(SHA256(?vectorString40) AS ?vectorHash40)
	BIND(IRI(CONCAT("https://w3id.org/semanticarts/ns/frameworks-cve/CvssMetric-v4.0-", ?vectorHash40 )) AS ?cvss_iri_40)
#===================================================================================================================

#===================================================================================================================
				# Normalize the affected cpe string
  				  # Identify CPE format
    			BIND(
      			IF(REGEX(STR(?acpe), "^cpe:/"), "CPE_2_2",
      			IF(REGEX(STR(?acpe), "^cpe:2\\.3:"), "CPE_2_3",
      			IF(REGEX(STR(?acpe), "^cpe:\\d+\\.\\d+:"), "CPE_N_N", "UNKNOWN"))) AS ?cpeFormat
    			)

    			# Normalize CPE 2.2 to 2.3 (basic scaffold — expand as needed)
    			BIND(
      				IF(?cpeFormat = "CPE_2_2",
        				CONCAT("cpe:2.3:", STRAFTER(STR(?acpe), "cpe:/") , ":*:*:*:*:*:*:*"),
        				IF(?cpeFormat = "CPE_2_3",
          					STR(?acpe),
          					IF(?cpeFormat = "UNKNOWN", STR(?acpe), "" )
        				)
      				) AS ?rawCpeName
    			)

    			BIND(REPLACE(STR(?rawCpeName), ":", "_") AS ?temp2CPE )
    			BIND(REPLACE(STR(?temp2CPE), "\\.", "-") AS ?temp3CPE )
    			BIND(REPLACE(STR(?temp3CPE), "\\*", "any") AS ?normalizedCPE )
    			BIND(IRI(CONCAT(STR(gistx:), "_PRODUCT_", ?normalizedCPE)) AS ?normalizedCpeIRI)

#===================================================================================================================

#############################################################################
# The cpe:2.3:part:vendor:version are manditory for a valid CPE Name
# Rather than just stripping the cpe:2.3: off this should record these values
# in order to recognize cpe:4.0 and future versions.

  BIND(STRAFTER(?rawCpeName, "cpe:") AS ?core)

  # Split the string by colon using REPLACE to simulate tokenization
  BIND(REPLACE(?core, "\\\\:", "ESCAPEDCOLON") AS ?escaped)
  BIND(REPLACE(?escaped, ":", "|") AS ?pipeDelimited)
  BIND(REPLACE(?pipeDelimited, "ESCAPEDCOLON", ":") AS ?normalized)

  # Now split by pipe using SUBSTR and STRBEFORE/STRAFTER

  BIND(STRAFTER(?normalized, "|") AS ?rest0)
  BIND(STRBEFORE(?normalized, "|") AS ?cpe_version)

  BIND(STRBEFORE(?rest0, "|") AS ?part)
  BIND(STRAFTER(?rest0, "|") AS ?rest1)

  BIND(STRBEFORE(?rest1, "|") AS ?vendor)
  BIND(STRAFTER(?rest1, "|") AS ?rest2)

  BIND(STRBEFORE(?rest2, "|") AS ?product)
  BIND(STRAFTER(?rest2, "|") AS ?rest3)

  BIND(STRBEFORE(?rest3, "|") AS ?version)
  BIND(STRAFTER(?rest3, "|") AS ?rest4)

  BIND(STRBEFORE(?rest4, "|") AS ?update)
  BIND(STRAFTER(?rest4, "|") AS ?rest5)

  BIND(STRBEFORE(?rest5, "|") AS ?edition)
  BIND(STRAFTER(?rest5, "|") AS ?rest6)

  BIND(STRBEFORE(?rest6, "|") AS ?language)
  BIND(STRAFTER(?rest6, "|") AS ?rest7)

  BIND(STRBEFORE(?rest7, "|") AS ?swEdition)
  BIND(STRAFTER(?rest7, "|") AS ?rest8)

  BIND(STRBEFORE(?rest8, "|") AS ?targetSw)
  BIND(STRAFTER(?rest8, "|") AS ?rest9)

  BIND(STRBEFORE(?rest9, "|") AS ?targetHw)
  BIND(STRAFTER(?rest9, "|") AS ?other)
#############################################################################

	# Generate the CVE Metadata IRI
	#  BIND( IF(BOUND(?cveId), (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#CveMetadata-", ?cveId  ))), ?nothing ) AS ?cve_metadata_iri ) .

	# Generate the CNA Container IRI
	#  BIND( IF(BOUND(?aContainer), (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#CnaContainer-", ?cveId  ))), ?nothing ) AS ?cna_container_iri ) .

	# Generate the Provider Metadata object IRI
	#  BIND( IF(BOUND(?providerMetadata), (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#ProviderMetadata-", ?cveId  ))), ?nothing ) AS ?provider_metadata_iri ) .

	# Generate the Problem Type object IRI
	#  BIND( IF(BOUND(?problemType), (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#ProblemType-", ?cveId  ))), ?nothing ) AS ?problem_type_iri ) .

	# Generate the Problem Type Description object IRI
	#  BIND( IF(BOUND(?pTDescription), (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#ProblemTypeDescription-", STRUUID()  ))), ?nothing ) AS ?problem_type_desc_iri ) .

	# Generate the Description object IRI
	#  BIND( IF(BOUND(?descripts), (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#Description-", STRUUID()  ))), ?nothing ) AS ?desc_iri ) .

	# Generate the CWE ID object IRI
	 BIND( IF(BOUND(?cweID), (IRI(CONCAT(STR(gistx:), "_Weakness_", ?cweID  ))), ?nothing ) AS ?cwe_iri ) .

	# Generate the ProductVersion object IRI
	#  BIND( IF(BOUND(?affected), (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#AffectedAsset-", STRUUID()  ))), ?nothing ) AS ?affected_asset_iri ) .


	# Generate the Version object IRI
	#  BIND( IF(BOUND(?aVersion), (IRI(CONCAT("http://www.cve.org/ontology/vulnerability#Version-", STRUUID()  ))), ?nothing ) AS ?version_iri ) .

}
```

## CWE Transformation

```
PREFIX gist: <https://w3id.org/semanticarts/ns/ontology/gist/>
PREFIX gistx: <https://w3id.org/semanticarts/ns/taxonomy/gist/>
PREFIX cwe:  <https://w3id.org/semanticarts/ns/frameworks-cwe/>
PREFIX xyz:  <http://sparql.xyz/facade-x/data/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX fx:   <http://sparql.xyz/facade-x/ns/>
PREFIX apf:  <http://jena.apache.org/ARQ/property#>

CONSTRUCT {
  ?cwe_iri a gist:Weakness .
  ?cwe_iri cwe:Name ?Name .
  ?cwe_iri cwe:Weakness_Abstraction  ?Weakness_Abstraction .
  ?cwe_iri cwe:Status  ?Status . 
  ?cwe_iri cwe:Description  ?Description . 
  ?cwe_iri cwe:Extended_Description  ?Extended_Description . 


  ?cwe_iri cwe:Related_Weaknesses  ?Related_Weaknesses . 
  ?cwe_iri gist:childOf  ?child_of_cwe_iri .
  ?child_of_cwe_iri a gist:Weakness .


  ?cwe_iri cwe:Weakness_Ordinalities  ?Weakness_Ordinalities .
  ?cwe_iri cwe:Applicable_Platforms  ?Applicable_Platforms .
  ?cwe_iri cwe:Background_Details ?Background_Details .
  ?cwe_iri cwe:Alternate_Terms ?Alternate_Terms . 
  ?cwe_iri cwe:Modes_Of_Introduction ?Modes_Of_Introduction . 
  ?cwe_iri cwe:Exploitation_Factors ?Exploitation_Factors .
  ?cwe_iri cwe:Likelihood_of_Exploit ?Likelihood_of_Exploit . 
  ?cwe_iri cwe:Common_Consequences ?Common_Consequences . 
  ?cwe_iri cwe:Detection_Methods ?Detection_Methods .
  
  
  ?cwe_iri cwe:Potential_Mitigations ?Potential_Mitigations .
  ?cwe_iri cwe:potentialMitigation ?mitigation_iri .

  ?mitigation_iri cwe:mitigationType ?pmit .
  ?mitigation_iri cwe:mitigationStrategy ?pstrat .
  ?mitigation_iri cwe:mitigationDescription ?pdesc .
  ?mitigation_iri a gist:Mitigation .


  ?cwe_iri cwe:Observed_Examples ?Observed_Examples .
  ?cwe_iri cwe:Functional_Areas ?Functional_Areas . 
  ?cwe_iri cwe:Affected_Resources ?Affected_Resources . 
  ?cwe_iri cwe:Taxonomy_Mappings ?Taxonomy_Mappings . 


  ?cwe_iri cwe:Related_Attack_Patterns ?Related_Attack_Patterns .
  ?cwe_iri cwe:related-attack-pattern ?attack_pattern_iri .
  ?attack_pattern_iri a gist:AttackPattern .


  ?cwe_iri cwe:Notes ?Notes .
  
}
WHERE {
  SERVICE <x-sparql-anything:location=c:/Users/Owner/git/ohgma-cybersecurity-graph-builder/data/cwe/input/699-with-modified-headers.csv,csv.headers=true> {
 
  ?row xyz:CWE_ID  ?CWE_ID .
  ?row xyz:Name  ?Name .
  ?row xyz:Weakness_Abstraction  ?Weakness_Abstraction .
  ?row xyz:Status  ?Status . 
  ?row xyz:Description  ?Description . 
  ?row xyz:Extended_Description  ?Extended_Description . 
  ?row xyz:Related_Weaknesses  ?Related_Weaknesses .
  ?row xyz:Weakness_Ordinalities  ?Weakness_Ordinalities .
  ?row xyz:Applicable_Platforms  ?Applicable_Platforms .
  ?row xyz:Background_Details ?Background_Details .
  ?row xyz:Alternate_Terms ?Alternate_Terms . 
  ?row xyz:Modes_Of_Introduction ?Modes_Of_Introduction . 
  ?row xyz:Exploitation_Factors ?Exploitation_Factors .
  ?row xyz:Likelihood_of_Exploit ?Likelihood_of_Exploit . 
  ?row xyz:Common_Consequences ?Common_Consequences . 
  ?row xyz:Detection_Methods ?Detection_Methods .
  ?row xyz:Potential_Mitigations ?Potential_Mitigations .
  ?row xyz:Observed_Examples ?Observed_Examples .
  ?row xyz:Functional_Areas ?Functional_Areas . 
  ?row xyz:Affected_Resources ?Affected_Resources . 
  ?row xyz:Taxonomy_Mappings ?Taxonomy_Mappings . 
  ?row xyz:Related_Attack_Patterns ?Related_Attack_Patterns .
  ?row xyz:Notes ?Notes .
  }
  
# =============================================================
  BIND(IRI(CONCAT(STR(gistx:), "_Weakness_CWE-", ?CWE_ID )) AS ?cwe_iri)
# =============================================================

# =============================================================
  # Split and bind Mitre ATT&CK technique IRI.
   ?rel_weak_term apf:strSplit (?Related_Weaknesses "::NATURE:ChildOf:CWE ID:")
   BIND(IF(?rel_weak_term != "", IRI(CONCAT(STR(gistx:_Weakness_CWE-), STRBEFORE(?rel_weak_term, ":"))), ?unbound ) AS ?child_of_cwe_iri) 
# =============================================================

# =============================================================
  # Bind the related Weaknesses
   ?relAP apf:strSplit (?Related_Attack_Patterns "::")
   BIND(IF(?relAP != "", IRI(CONCAT(STR(gistx:_AttackPattern_CAPEC-), ?relAP)), ?unbound ) AS ?attack_pattern_iri) 
# =============================================================
  
# =============================================================
  # Split out the Potential Mitigations
  ?pot_mitigation apf:strSplit (?Potential_Mitigations "::PHASE:")
  BIND( IF(?pot_mitigation != "", STRBEFORE(?pot_mitigation, ":"), ?unbound ) AS ?pmit)
    ?pot_strategy apf:strSplit (?pot_mitigation "STRATEGY:")
    BIND( IF(!STRSTARTS(?pot_strategy, ?pmit), STRBEFORE(?pot_strategy, ":"), ?unbound ) AS ?pstrat)
    BIND(IF(?pstrat != "", IRI(CONCAT(STR(gistx:), "_Mitigation_CWE-", ?CWE_ID, "-", REPLACE(?pmit," ", "-"), "-", REPLACE(?pstrat," ", "-" ))), ?unbound ) AS ?mitigation_iri )
      ?pot_description apf:strSplit (?pot_strategy "DESCRIPTION:")
      BIND( IF(?pot_description != "" && (!CONTAINS(?pot_description, ?pstrat)) , ?pot_description, ?unbound ) AS ?pdesc )

  
}
```

---
title: "tarql + Federated SPARQL (+ proteins!)"
confluence_id: 2213969921
source: "2213969921.html"
---

This example emerged from the creation of instance data at Amgen based on denormalized database tables. It features a federated SPARQL call to a public protein database.

The table below (vastly simplified) models a molecular target to which Amgen drugs attach when they’re doing their job properly.

A target is typically a protein. Remember those from high school? Proteins are made in cells by decoding a gene and interpreting its base pairs to create a string of enzymes.

Most targets at Amgen are single proteins and are identified by name (“FBRS) and a code taken from the <http://uniprot.org> protein database. That’s row 1.

But sometimes it’s more complicated. The example on row 2 models multiple targets. The hitch is that the content of “multigene\_target” may be either a protein name (“Sclerostin”) or a gene name (“DKK1”) that is responsible for encoding a protein .

Now, <http://uniprot.org> offers a public SPARQL endpoint. I wanted to call that remote SPARQL endpoint to convert gene names into protein codes, but ONLY when the multigene\_target column contained data (calling a public SPARQL endpoint is usually slooow).

| **name** | **multigene\_target** | **uniprot\_id** |
| --- | --- | --- |
| FBRS |  | Q9HAH7 |
| DKK1/Sclerostin | DKK1,Sclerostin |  |

The challenge was getting SERVICE to fire only when the multigene\_target field was non-empty.

I tried many combinations before calling [Dalia Dahleh](https://semarts.atlassian.net/wiki/people/5e6a8d4d308ac10ced3a4e00?ref=confluence) (the SPARQL Queen!) who sent me the following beautiful solution.

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
PREFIX owl: <http://www.w3.org/2002/07/owl#> 
PREFIX skos: <http://www.w3.org/2004/02/skos/core#> 
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX amg-core: <http://id.amgen.com/def/core#> 
PREFIX amg-prod: <http://id.amgen.com/def/product#> 
PREFIX amg-geo: <http://id.amgen.com/def/geolocation#> 
PREFIX amg-cmz: <http://id.amgen.com/def/commercialization#> 
PREFIX amg-agt: <http://id.amgen.com/def/agent#> 
PREFIX amg-wkf: <http://id.amgen.com/def/workforce#> 
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX taxon: <http://purl.uniprot.org/taxonomy/>

CONSTRUCT
{

    ?targ a amg-prod:Target ;
        rdfs:label ?name ;
    .
    ?targ amg-cmz:has-uniprot-id ?uniprotcode .
}
WHERE
{
    # Target
    BIND(IRI(CONCAT('http://id.amgen.com/id/product/target/', SHA1(LCASE(REPLACE(?name,"[^A-Za-z0-9]","-"))))) AS ?targ)
    
    # Multigene target
    OPTIONAL {
    
    # THIS LINE IS THE KEY TO SELECTIVE FIRING OF THE REMOTE SERVICE 
        FILTER(STRLEN(?multigene_target) > 0)
        
        # Split the multigene_target into multiple ?genetargs
        ?genetarg apf:strSplit(?multigene_target ',')   

        SERVICE <https://sparql.uniprot.org/sparql>
        {       
            ?protein a up:Protein ;
                up:organism taxon:9606 ;   # Homo sapiens is organism #9606
                up:reviewed true .  # uniprot offers curated and non-curated results
            
            {
            # Case where ?genetarg is directly a protein name
                ?protein up:recommendedName ?protrec_ .
                ?protrec_ up:fullName ?genetarg .
            }
            UNION
            {
            # Case where ?genetarg is a gene that encodes a protein
                ?protein up:encodedBy ?gene_ .
                ?gene_ skos:prefLabel ?genetarg .
            }
        }
        # Keep only the local ID from IRI
        ?protein apf:splitIRI(?ns_ ?uniprotcode)
    }
}
```

```
<http://id.amgen.com/id/product/target/3918a754044059c33595bd211c4990aa33277ad4>;
        rdf:type                     amg-prod:Target ;
        rdfs:label                   "DKK1/Sclerostin" ;
        amg-cmz:has-description      "DKK1/Sclerostin" ;
        amg-cmz:has-uniprot-id       "O94907" ;
        amg-cmz:has-uniprot-id       "Q9BQB4" ;
        
 
<http://id.amgen.com/id/product/target/ea81d6032a756b0e460db20ec9f25d3f96f6fb54>;
        rdf:type                 amg-prod:Target ;
        rdfs:label               "FBRS" ;
        amg-cmz:has-description  "FBRS" ;
        skos:altLabel            "Probable fibrosin-1" ;
        rdfs:seeAlso             <https://www.uniprot.org/uniprot/Q9HAH7>; ;
        amg-cmz:has-uniprot-id   "Q9HAH7" ;
        skos:altLabel            "FBS" ;
        skos:altLabel            "FBS1" .
```

Note the two has-uniprot-ids for DKK1/Sclerostin. Fantastico !

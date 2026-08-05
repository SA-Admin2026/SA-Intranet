---
title: "VALUES Keyword sometimes better than UNIONs"
confluence_id: 61210679
source: "VALUES-Keyword-sometimes-better-than-UNIONs_61210679.html"
---

The following query is one way to find various organizations.

```
Select distinct ?uri ?name   
WHERE { { ?uri rdf:type gist:Organization } UNION   
        { ?uri rdf:type sa:Client } UNION  
        { ?uri rdf:type sa:SAPartner }  
          ?uri gist:name ?name }   
ORDER BY ?name
```

However, there is a more concise and easier to read way to do this using the VALUES keyword, especially when there are lots of UNIONS.

```
Select distinct ?uri ?name   
WHERE { VALUES ?c {gist:Organization sa:Client sa:SAPartner}  
        ?uri rdf:type ?c;   
             gist:name ?name. }   
ORDER BY ?name
```

```

```

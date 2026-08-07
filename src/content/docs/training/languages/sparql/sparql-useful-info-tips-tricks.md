---
title: "SPARQL useful info: Tips & Tricks"
confluence_id: 2366636041
source: "2366636041.html"
---
I thought we had a page like this but I can’t find it. What I’m adding is not really worth a whole page, I just found it interesting and maybe useful to someone else.

## BIND in OPTIONAL

I had a desire to set a variable if a triple existed. I just tried this and it worked as you would expect from looking at it. When the resource was an employee, it bound the ?type variable to “Employee”, otherwise it was empty.

```
  OPTIONAL {
    ?resourceUri rdf:type sa:SAEmployee .
    BIND("Employee" AS ?type)
  }
```

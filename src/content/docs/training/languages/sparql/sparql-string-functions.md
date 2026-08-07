---
title: "SPARQL string functions"
confluence_id: 23461893
source: "SPARQL-string-functions_23461893.html"
---
SPARQL has very basic string functions, and some key ones are not in the DuCharme book. I wanted to split a URI into its namespace part and its fragment. After a lot of scrounging around on the web, found about STRAFTER and STRBEFORE which is perfect, so long as the URI uses '#' not '/'. Here is an example.

```
SELECT ?b ?a where {
```

```
 BIND ("http://ontologies.semanticarts.com/gist#ContentExpression" as ?c)  
 BIND (STRAFTER(?c,"#") as ?a)  
 BIND (STRBEFORE(?c,"#") as ?b)  
 }
```

Which returns:

| b | a |
| --- | --- |
| "http://ontologies.semanticarts.com/gist" | "ContentExpression" |

If you are browsing an ontology, you can find terms that had a particular string in them. To test whether the term has the string "content" in it, use the following query. Case insensitivity requires using regex (this is in DuCharme).  That is what the "i" is for.

```
SELECT ?b ?a where {  
 VALUES ?c {"http://ontologies.semanticarts.com/gist#ContentExpression"  
            "http://ontologies.semanticarts.com/gist#Content"  
            "http://ontologies.semanticarts.com/gist#hasPart"}  
 BIND (STRAFTER(?c,"#") as ?a)  
 BIND (STRBEFORE(?c,"#") as ?b)  
 FILTER (regex(?c, "content", "i") )  
 }
```

Which returns:

| b | a |
| --- | --- |
| "http://ontologies.semanticarts.com/gist" | "ContentExpression" |
| "http://ontologies.semanticarts.com/gist" | "Content" |

I still cannot find a good way to get at the qname fragment if it is a /, you would have to count back from the end of the string to find the first /.  I hoped that I could use regex to grab a string and put it in a variable, like you can when doing a regex replacd, but in SPARQL, it seems only usable as returning T/F for a string match.

Any ideas?

YES! The trick is surgical removal of the parts you do not want to keep, using the REPLACE function (which supports regex in its search part).

```
SELECT ?b ?a where {  
VALUES ?c {  
"http://ontologies.semanticarts.com/gist/ContentExpression"  
"http://ontologies.semanticarts.com/gist/Content"  
"http://ontologies.semanticarts.com/gist/hasPart"}  
BIND (REPLACE(?c,'^[\\w.:/]*/','') as ?a) # Replaces the head, leaving the tail  
BIND (REPLACE(?c,'/[\\w]+$','') as ?b) # Replaces the tail, leaving the head  
}
```

Returns the above table.

## Get a.b from a.b.c

```
VALUES ?str {"123.5656.77.22"}  
BIND(REPLACE(?str, '\\.[^.]*$', '') as ?output)
```

Result: 123.5656.77

## Get c from a.b.c

`VALUES ?str {"123.5656.77.22"}`  
`BIND(REPLACE(?str, '^([^.]+\\.?)*$, '$1') as ?output)`

Result: 22

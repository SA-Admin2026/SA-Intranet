---
title: "Tarql String Splitting Coolness"
confluence_id: 2222096385
source: "Tarql-String-Splitting-Coolness_2222096385.html"
---

What if you have multiple values in a column that you need to split up?

E.g. a CSV like this:

```
person,friends
"Mark","Billy,Bob,June,Abhi"
"MarkC","Judy,Fran,Bob"
```

Use the `apf:strSplit` function (inherited by Tarql from Jena)

E.g.:

```
PREFIX apf: <<http://jena.apache.org/ARQ/property#>>
PREFIX : <<http://ns/>>

CONSTRUCT {
 ?person_iri :knows ?friend_iri.
}
WHERE {
 ?friend apf:strSplit (?friends ',')
 BIND( URI(CONCAT("<http://ns/",?person))AS> ?person_iri)
 BIND( URI(CONCAT("<http://ns/",?friend))AS> ?friend_iri)
}
```

What the `strSplit` function does is take the contents of a variable, in this case `?friends`, and split it out by some character like `,` and put the resulting bindings – the split out values – into another variable, in this case `?friend` (singular).

In the example above, we then go on and use the singular versions to make IRIs.

When you run it with tarql, you get this result:

```
@prefix :  <<http://ns/>> .
@prefix rdf:  <<http://www.w3.org/1999/02/22-rdf-syntax-ns#>> .

:Mark   :knows  :Billy ;
        :knows  :Bob ;
        :knows  :June ;
        :knows  :Abhi .

:MarkC  :knows  :Judy ;
        :knows  :Fran ;
        :knows  :Bob .
```

## Usually Need OPTIONAL

**Important safety tip:** If the column could be unbound (no values), you need to put it in an OPTIONAL clause.

E.g. Consider a CSV like this, where the `friends` column may be empty/blank:

```
person,friends
"Mark","Billy,Bob,June,Abhi"
"MarkC","Judy,Fran,Bob"
"Eyeore",
"Eyeore-2",""
```

To get the Tarql to work on (i.e. match) all rows, *even ones where the value to be split may not exist*, you need the strSplit line in an OPTIONAL, like this:

```
PREFIX apf:     <http://jena.apache.org/ARQ/property#>
PREFIX :        <http://ns/>

CONSTRUCT {
  ?person_iri a :Person; :knows ?friend_iri.
  ?friend_iri a ?Person.
}
WHERE {
  OPTIONAL { ?friend apf:strSplit (?friends ',') }
  BIND( URI(CONCAT("http://ns/",?person))AS ?person_iri)
  BIND( URI(CONCAT("http://ns/",?friend))AS ?friend_iri)
}
```

This version will output rows even where it cannot bind any `?friend` values.

When you run it with tarql, you get this result:

```
@prefix :  <http://ns/> .
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

:Mark   rdf:type  :Person ;
        :knows  :Billy ;
        :knows  :Bob ;
        :knows  :June ;
        :knows  :Abhi .

:MarkC  rdf:type  :Person ;
        :knows  :Judy ;
        :knows  :Fran ;
        :knows  :Bob .

:Eyeore  rdf:type  :Person .

:Eyeore-2  rdf:type  :Person .
```

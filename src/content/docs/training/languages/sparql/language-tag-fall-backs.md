---
title: "Language Tag Fall-backs"
confluence_id: 1474623
source: "Language-Tag-Fall-backs_1474623.html"
---

Try to get preferred language version of a label, but if not, start falling back to less preferred options

The data:

```
@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#> .
@prefix :        <http://example.org/> .

:Show_1 a :Show
; rdfs:label "Cats"@en, "Gatos"@sp, "Kissat"@fi, "Cats"
.

:Show_2 a :Show
; rdfs:label "Dear Evan Hansen"@en
.

:Show_3 a :Show
; rdfs:label "Mean Girls", "Tarkoita tyttöjä"@fi
.

:Show_4 a :Show
; rdfs:label "Hadestown"@fi
.
```

The query:

```
prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#>
prefix :        <http://example.org/>

select * {
  ?s a :Show .

  # Below provides a precedence matching fall-back, i.e., match @sp preferred,
  # if not present, then english, then no tag, then any tag

  OPTIONAL { ?s rdfs:label ?s_label FILTER(LANGMATCHES(LANG(?s_label), "sp")) }
  OPTIONAL { ?s rdfs:label ?s_label FILTER(LANGMATCHES(LANG(?s_label), "en")) }
  OPTIONAL { ?s rdfs:label ?s_label FILTER(LANG(?s_label) = "") }
  OPTIONAL { ?s rdfs:label ?s_label }

  # This works because OPTIONAL is left associative, meaning if each subsequent
  # OPTIONAL can add *additional* bindings, it does so.  (ref. sparql 1.1 section 6.1)

}
```

The results:

```
-----------------------------------
| s       | s_label               |
===================================
| :Show_1 | "Gatos"@sp            |
| :Show_2 | "Dear Evan Hansen"@en |
| :Show_3 | "Mean Girls"          |
| :Show_4 | "Hadestown"@fi        |
-----------------------------------
```

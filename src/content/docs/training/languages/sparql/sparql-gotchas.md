---
title: "SPARQL Gotchas"
confluence_id: 674758663
source: "SPARQL-Gotchas_674758663.html"
---
# Order Matters

There are a couple of interesting cases where order matters in SPARQL. Mostly with OPTIONAL and MINUS, they can give you very different results than what you might think.

I came across this page today with a good explanation: <https://github.com/blazegraph/database/wiki/SPARQL_Order_Matters>

# Language Tags

SUMMARY: you can put a string such as "Hello" directly in a SPARQL query triple pattern and it will match, but it will not match a literal string with a language tag such as: "Hello"@en. You can get it to match if you bind the string with the language tag first to a variable and then put the variable in the triple pattern.

DETAILS with EXAMPLE:

Say you have the following two  triples in a repo :

- ```
  gist:foo skos:prefLabel "Hello"
  ```
- ```
  gist:foo skos:altLabel  "Hello"@en
  ```

Then the following SPARQL query will catch  the first triple:

- ```
  SELECT DISTINCT ?x where  {?x ?p "Hello"}
  ```

However, the following virtually identical SPARQL query will not catch the second triple:

- ```
  SELECT DISTINCT ?x where  {?x ?p "Hello"@en}
  ```

But this query will work:

- ```
  SELECT DISTINCT ?x where  {BIND ("Hello"@en as ?text )
  ```
- ```
                             ?x ?p ?text}
  ```

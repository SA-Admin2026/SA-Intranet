---
title: "The Lookup Table Pattern"
confluence_id: 2975432705
source: "The-Lookup-Table-Pattern_2975432705.html"
---

This pattern is useful in a SPARQL CONSTRUCT when generating RDF from other data sources, e.g. a CSV file transformed by tarql/Sparql.Anything, or a relational table converted by R2RML.

Use this pattern when at least one column of the input data contains a limited set of values that should trigger the binding of one or more output variables. It is most useful when the “shape” of the input data does not lend itself well to creating an output value (IRI or literal) directly from the input value.

In the example below, a CSV contains a Description field of which the text must parsed to extract a two-letter code. The two-letter code needs to be converted into two numbers, one for each letter of the code.

```
# Bonds typically pay interest twice a year
# A pair of single-letter month codes describe the two payment months, six months apart 
# We extract the code pair from the Description column
    BIND(IF(REGEX(UCASE(?Description), "\\b[A-Z]{2}\\b\\s[0-9]{2}"),
      REPLACE(?Description, "^.*\\b([A-Z]{2})\\b\\s[0-9]{2}.*$", "$1"), 
      ?unbound) AS ?__mo_pair_str)
# Example: 'MS' (March, September)

    OPTIONAL {
        VALUES (?monthduo ?earlier_mo ?later_mo) { 
            ("JJ" 01 07) 
            ("FA" 02 08) 
            ("MS" 03 09) 
            ("AO" 04 10) 
            ("MN" 05 11) 
            ("JD" 06 12)
        }
        FILTER(STR(?__mo_pair_str) = ?monthduo)
    }
# Result: ?earlier_mo=03 and ?later_mo=09
```

General pattern for matching one column:

?Input1 (column name from the data)

OPTIONAL {

VALUES (?var1 ?var2 [?var3…?var\_n]\*) {

( ?value1a ?value1b [?value1c…?value1zz]\*)

( ?value2a ?value2b [?value2c…?value2zz]\*)

( ?value3a ?value3b [?value3c…?value3zz]\*)

…

}

FILTER(?input1=?var1)

}

Result: ?var2 will be bound to one of ?value1b, 2b, 3b… If ?var3 or more is defined, the values from the same row as ?value will also be bound.

Note: The OPTIONAL is … optional, but if you omit it and none of the VALUES (?value1a, ?value2a, etc…) match the input data (?input1 above), the ENTIRE data row will be rejected, which may not be what you want.

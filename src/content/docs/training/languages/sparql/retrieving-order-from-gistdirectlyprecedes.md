---
title: "Retrieving order from gist:directlyPrecedes"
confluence_id: 1022623775
source: "1022623775.html"
---

Here are handy queries to retrieve members of an ordered collection with their explicit order.

Given an ordered collection:

```
:_collection gist:hasOrderedMember :_a, :_b, :_c, :_d, :_e .

:_a gist:directlyPrecedes :_b .
:_b gist:directlyPrecedes :_c .
:_c gist:directlyPrecedes :_d .
:_d gist:directlyPrecedes :_e .
```

If you know the collection IRI:

```
select ?member (count(?n) as ?order) 
where {
  :_collection gist:hasOrderedMember ?member .
  ?n gist:directlyPrecedes* ?member .
}
group by ?member
order by ?order
```

This works by counting the number of links before each member in the collection. (Thanks [Daniel Hadad](https://semarts.atlassian.net/wiki/people/63f52fa14e86f362d39adaff?ref=confluence) for the simpler query to this case)

If you know the first member IRI and/or there is no collection IRI :

```
select ?member (count(?intermediate) as ?order) 
where {
  :_a gist:directlyPrecedes* ?intermediate .
  ?intermediate gist:directlyPrecedes* ?member .
}
group by ?member
order by ?order
```

This works by counting the number of intermediate links from the first member to each member in the collection.

The query yields:

```
------------------
| member | order |
==================
| :_a    | 1     |
| :_b    | 2     |
| :_c    | 3     |
| :_d    | 4     |
| :_e    | 5     |
------------------
```

---
title: "BEWARE: strings with vs. without explicit datatype"
confluence_id: 223707168
source: "223707168.html"
---

QUESTION: How to write a query that can determine whether there are two triples with the same string but one has the datatype and one does not.

I have two triples assigning a name, one with and one without the explicit datatype.

![](/attachments/223707168/224067585.png)

When I query this and filter for when the names are not equal, it finds nothing. So the != does what you want. 

![](/attachments/223707168/223641613.png)

However, if I use DISTINCT in a query, the values are taken to be distinct.

![](/attachments/223707168/223608850.png)

It turns out that if you convert the strings using STR(?name) in the SELECT statement and use DISTINCT it works, STR strips off the ^^xsd:string.

![](/attachments/223707168/223674395.png)

There is a sandbox repo on AG in DNB with these examples.

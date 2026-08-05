---
title: "gistified Pizza Ontology"
confluence_id: 2636185604
source: "gistified-Pizza-Ontology_2636185604.html"
---

I [Dave] doodled around with this a bit over breakfast.

a) it can be pretty simple

b) the simple version doesn't showcase inference, and anyone referring to it can likely ask themselves: why not just do it in relational or OO?

The key classes, IMO, are:

- Offer (so each pizza on the menu will be an offer, with a price, and pointing to a specification)
- Specification (mostly what it contains, also its size)
- Order Line Item (Financial Business Event) which has a qty, points to offer and has options (extra cheese, hold the anchovies etc)
- Order (collection of lines)
- Delivery (event) which can point to a specific pie (PII), which conforms to a spec

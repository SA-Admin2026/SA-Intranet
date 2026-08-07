---
title: "DCA August Design Notes"
confluence_id: 30736401
source: DCA-August-Design-Notes_30736401.html
---
![](/internal-systems/attachments/30736401/30736400.png)

This has just been refactored this way, and may still have some loose ends.

Right now there are two repos that have the DCAO ontology and three test queries:

- my Mac/ ibeam/ parking-violations
- HAL / ibeam / sandbox

I have stubbed out the functionality for query.py and implemented the simple case of a triples query (there is a simple triples query in the DB, but I realized I didn't have a way to access it, so I just hard coded it in query.py

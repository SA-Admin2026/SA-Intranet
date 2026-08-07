---
title: "Selling to Clients"
confluence_id: 2199224325
source: Selling-to-Clients_2199224325.html
---
## What to say to a client who is committed to SAP?

**Dave said**:

Most of our large clients view Knowledge Graph as an add on, in the same way they view a Data Warehouse as an add on.  A data warehouse doesn’t replace SAP.

That said, we think our large clients will find out, over time, what some of our smaller clients are already finding out.  Unlike a Data Warehouse, the Knowledge Graph can also host direct transactional updates.  What that means is you can gradually start replacing legacy functionality, but not in the bet the farm legacy modernization way, but in the very gradual step by step way.  You can start with use cases that aren’t supported at all in a legacy system.  Maybe then move to some that aren’t well supported.

**Eddie asked**:

You said that a knowledge graph can also host direct transactional updates. Are you arguing that a knowledge graph can do what a data warehouse can do (analytically) and update the data in real time (transactionally)? And what legacy functionality would not be supported at all or not well?

**Michael elaborated**:

Dave is saying that data warehouse and knowledge graph can both serve the function of having all the data from various systems in the same place to query more conveniently. In the case of a data warehouse, it is never transactional, it is always just one way from native applications/databases into the data warehouse on a periodic basis. One moment after data is ported from a transactional system to a data warehouse, the date warehouse is out of date because the latest transactional data is not there.  Dave is saying that you can start small  migrate from doing transactions on one RDB application to doing them directly against the knowledge graph. That way, at least for that one application, the data in the data warehouse will be up to date. This process can be done gradually. So that the knowledge graph is more and more up to date.

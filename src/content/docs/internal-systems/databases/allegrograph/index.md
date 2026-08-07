---
title: "AllegroGraph"
confluence_id: 1474638
source: AllegroGraph_1474638.html
---
**[agraph.semanticarts.com](http://agraph.semanticarts.com)**

### Documentation

**[AllegroGraph 5.1.1 Documentation](http://franz.com/agraph/support/documentation/current/agraph-introduction.html)**

**[AG 5.1.1 HTTP Documentation](http://franz.com/agraph/support/documentation/current/http-protocol.html)**

[Franz Wiki Page](https://semarts.atlassian.net/wiki/spaces/CP/pages/950341/Franz)

I was at Broadridge in mid October 2018 for Jans Aasmans presentation.  Several salient points:

- While he said they have an Amazon AWS version he said its harder to get good performance there as the best performance comes from using SSDs and a fair bit of memory
- They have done a lot of work with sharding, partitioning, replicating and the light to the point where there seem to be a lot of pretty good options for those scaling up (as they've shown at Montefiore)
- He advised an optimal server is 16 processors running 8 shards, with a half billion triples per shard (so this would be an 8 billion triple node) with SSD and 256 G of memory.  This is reminiscent of what Parsa was talking about last we spoke.  Parsa was partial to Intel Optane, which had an insane amount of memory and SSD at a very low price (we should check this out)
- Lots of new features coming in version 6.5 (November) that we should probably install and learn.  Main ones:
  - Triple attributes (I think this can be like property graphs, and also do bi temporality)  – he also advocated it as a security approach but I'm still not convinced
  - They have OWL 2 RL materialsization (but be warned it blows out the number of triples a lot)  You have some selectively on rules to run and can run it by named graph, so theoretically we could run it per transaction.
  - The have a javascript API <https://franz.com/agraph/support/documentation/current/javascript.html>
  - He said something about some kind of probabalistic reasoning, but I didn't catch it all and haven't seen it in the documentation yet
  - I just saw a note in the documentation that they keep track of deleted triples.  We should see how they do this, and how it would tie into a generalized audit trail
- Oh yeah and one of his best lines was "I was in a healthcare company and they mentioned that they had patient data in about 4000 tables.   They didn't even seem to think there was anything wrong with this.  This is what decades of relational technology gets you"

<!-- section-nav:start -->

## In this section

- [Allegrograph Federation](allegrograph-federation.md)
- [Upgrading AllegroGraph0](upgrading-allegrograph0/)

<!-- section-nav:end -->

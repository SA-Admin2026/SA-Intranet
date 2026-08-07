---
title: "BEWARE: removing dupes across all graphs"
confluence_id: 223707178
source: "223707178.html"
---
**PUNCH LINE**: removing dupes across all graphs has serious negative consequences. Namely, if you have no idea what duplicate triples are removed from which graphs, then I don’t know of a way to safely swap in a new version of a graph.

**REQUEST:** does anyone have a solution? It is a serious issue for DnB.

For the longest time I hesitated to remove dupes across all graphs, because there might be a problem with not knowing where all certain triples came from. Eventually there was a pressing need to get rid of triples, so we did the bold move, and things seemed fine for quite a while.

The other day I had some worrying experiences with replacing old versions of named graphs, and was puzzled. It led me to the following analysis and discovery.

**Scenario**:

1. Load 6 triples into g1 (t1, t2, t3, t4, t5, t6)
2. Load 3 triples into g2 (                         t5, t6, t7)
3. Remove dupes across all graphs, we have no idea what happens, but suppose it is this:
   1. g1 (t1, t2, t3, t4, t5)
   2. g2 (t6, t7)
4. Say we want to replace g1 and the only change is in t5 (call new one t5’). The end result we desire is as follows (before removing dupes again).
   1. 1 (t1, t2, t3, t4, t5’, t6)
   2. g2    (                          t5, t6, t7)
5. We can proceed in one of two ways,
   1. Add the new version of g1 with a new name, say g1.1  
       Remove all of original g1
   2. Remove all of original g1  
       Add the new version of g1 with a new name, say g1.1

I have always been doing the first way. What happens?

1. Add g1.1 leaves us with this:
   1. 1 (t1, t2, t3, t4, t5’, t6)
   2. g1  (t1, t2, t3, t4, t5)
   3. g2 (t6, t7)
2. Removing g1 leaves us with this:
   1. 1 (t1, t2, t3, t4, t5’, t6)
   2. g2 (t6, t7)

What happened? Graph g2 should have t5, but it disappeared. Not good.

Yesterday I got a different behavior doing things in a different order, but in this example, it makes no difference.

1. Remove g1 leaves us with:
   1. g2 (t6, t7)
2. Adding g1.1 leaves us with:
   1. 1 (t1, t2, t3, t4, t5’, t6)
   2. g2 (t6, t7)

This is the same result. So I still don’t know why there was a difference yesterday when replacing the dnb graphs.

**PUNCH LINE**: If you have no idea what duplicate triples are removed from which graphs, then I don’t know of a way to safely swap in a new version of a graph.

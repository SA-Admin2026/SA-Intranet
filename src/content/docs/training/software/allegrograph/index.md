---
title: "AllegroGraph"
confluence_id: 9437238
source: "AllegroGraph_9437238.html"
---
## Gruff

### Connecting to a triple store.

File > Open Triple-Store... This opens a window as follows.

1. Put "agraph.semanticarts.com" in the box Server machine
2. Choose the catalog and repo you want,
3. Enter user name and password that you use to log into Agraph.   
   Like this:

![](/attachments/9437238/20217877.png)

## Web

### Connecting to AllegroGraph from the web.

1. Enter <https://agraph.semanticarts.com> in your browser.

   1. On rare occasions, complex operations might work better using this link <https://agraph.semanticarts.com:10035> (This may not work behind hotel and corporate firewalls)
2. Enter your Username and Password
3. ![](/attachments/9437238/673873935.png)
4. Allegrograph has the concept of "Catalogs" that are like folders of triplestores.
5. Pick a catalog and then a repo from that catalog.
6. If you are working with Allegrograph and the browser stops loading correctly (mine usually shows mostly the blue bar across the top and not much else), this seems to be the result of filling the client memory or something. It seems to go away if you clear your cache / browser history.

![](/attachments/9437238/673873946.png)

## Inference

I researched whether and how we can get inference working with restrictions to infer into a class, or to infer things that necessarily hold, given class membership.  The main support they offer is RDFS, and they do it 'dynamically' which means not materialized. There is also support for `owl:hasValue`, `owl:someValuesFrom` and `owl:allValuesFrom` reasoning. Its use is covered in a separate tutorial (see below). They give a detailed description of how to use hasValue, but nothing about someValuesFrom or allValuesFrom. Also, the only thing that seems to be possible from the web UI is to click the reasoner check box, which turns on RDFS++ dynamic reasoning.  If you want more, it seems you have to do it via the API.   You can use the RDFS++ reasoner by calling [apply-rdfs++-reasoner](http://franz.com/agraph/support/documentation/current/reasoner-tutorial.html#apply-rdfs:2B:2B-reasoner)on a regular triple-store. I'm not sure whether there is a way to do this from the web UI.  This would be handy if you just added new triples and wanted to infer any new information.

Resources:

- [Reasoner tutorial](http://franz.com/agraph/support/documentation/current/reasoner-tutorial.html#header2-28)
- [Tutorial of reasoning with restrictions](http://franz.com/agraph/support/documentation/current/has-value-tutorial.html)

## Purging Deleted Triples

For more info, see documentation at: <https://franz.com/agraph/support/documentation/current/purging-deleted-triples.html>

I think this is supposed to be done automatically, but we found in at least one database that we had a significant number of deleted triples in the indexes. Trying to optimize the query to fit in memory we ran the "purge deleted triples" optimizer and verified in the storage report that it removed these from the indexes but it did not make a difference in getting the query to run without maxing out memory. So, this procedure might help reducing disk space and might speed some things up, but we didn't notice a significant change. I did want to capture what we did in case I want to do it again because it took a few tries to get the commands to work.

```
# On HAL
$ agtool storage-report https://localhost:10045/catalogs/ibeam-catalog/repositories/timecard

# On WALL-E
$ agtool storage-report  https://localhost/catalogs/dca-production/repositories/_RFeenapzMekT7H1
$ agtool purge-deleted-triples  https://localhost/catalogs/dca-production/repositories/_RFeenapzMekT7H1
$ agtool storage-report  https://localhost/catalogs/dca-production/repositories/_RFeenapzMekT7H1
```

## In this section

- [Index Optimization in Allegrograph](/software/allegrograph/index-optimization-in-allegrograph/)

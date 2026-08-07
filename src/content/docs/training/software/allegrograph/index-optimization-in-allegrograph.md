---
title: "Index Optimization in Allegrograph"
confluence_id: 3153657857
source: "Index-Optimization-in-Allegrograph_3153657857.html"
---
## About Indices

To perform SPARQL queries efficiently, Allegrograph (like all triplestores) uses a set of indices on its data to quickly locate the parts of a triple being sought.

AG defines fives “parts” to a triples may be indexed : **s**ubject, **p**redicate, **o**bject, **g**raph, and unique numeric **i**ndex. In order, these are referred to as “spogi”.

“spogi” implies that all triples with the same subject are sorted first, then predicates of those subjects, then objects of those predicates, etc..

It is also possible to build a different index by reordering the parts. For example, a “gospi” index means ordering first by graph, then object, then subject, and so forth.cSome permutations make little sense, but there remain many valid combinations. So how to tell which are useful? By default, Allegrograph defines the following indices when you create a new repository:

|  |
| --- |
| gposi |
| gspoi |
| i |
| ospgi |
| posgi |
| psogi |
| spogi |

## Query Analysis

But how to know whether the existing indices are optimal for your query? To answer this question, Allegrograph offers an API call that - given a SPARQL select query - returns the indices desired by the query versus those actually used by the query engine.

Here is a curl command that calls the query analysis endpoint.

```
echo "Running query ${QUERY}..."
echo "Talking to ${SERVER}"
curl -L --netrc-file "${PWFILE}" \
    --trace-ascii "logs/analyzequery.txt" \
    -G \
    -H "Accept: */*" \
    -H "Content-Type: application/sparql-query" \
    --output "${OUTLOG}" \
    --url-query "query=${QUERY}" \
    --url-query "infer=false" \
    --url-query "analyzeIndicesUsed=true" \
    "${SERVER}"
```

QUERY is a SPARQL SELECT query.

OUTLOG is a file where the analysis results will be stored

The --trace-ascii thing is optional. I use it for debugging.

Note the password file reference PWFILE that needs to point to a (ideally hidden) text file containing a single line with your server credentials

```
machine 10.247.43.4 login dbeeson password xxxxxxxxx
```

## Analysis Results

Here is the result of analyzing a moderately complex query:

```
(:actual (:ospgi) :desired (:ogpsi :ogspi :opgsi :opsgi :osgpi :ospgi))
(:actual (:gspoi) :desired (:gopsi :gospi :gposi :gpsoi :gsopi :gspoi))
(:actual (:posgi) :desired (:opgsi :opsgi :pogsi :posgi))
(:actual (:psogi) :desired (:pgosi :pgsoi :pogsi :posgi :psgoi :psogi))
(:actual (:gposi) :desired (:gposi :gpsoi :pgosi :pgsoi))
(:actual (:gposi) :desired (:gopsi :gposi :ogpsi :opgsi :pgosi :pogsi))
```

To understand this result, I reached out to AG technical support. Here is their response:

> “The output of the analysis call is a list of all indices used during query execution. The `actual` index is the one that was used for a particular kind of pattern in the query, and the `desired` list is the list of all indices that the query engine wants instead. As long as for each row, the `actual` in on the `desired` list, the index set is optimal.
>
> As for the minimal set of indices: unless your repository has billions of triples and you want to save the disk space, you should just use the default index set. The default set is good enough for most kinds of queries.
>
> Regards,  
> Yuri
>
> “

So, judging by Yuri’s answer, my query above uses indices that already exist, so everything should be okay.

Note that query optimization usually requires tweaking the order of things in the query, removing OPTIONALS and UNIONS, avoiding cross-joins, and being very careful with labels, as they are everywhere and can quickly cause the query to explode! But that is a topic for another page…

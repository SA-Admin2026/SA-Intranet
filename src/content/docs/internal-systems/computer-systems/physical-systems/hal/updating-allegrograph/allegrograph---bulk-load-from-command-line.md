---
title: "Allegrograph - bulk load from command line"
confluence_id: 760414229
source: Allegrograph---bulk-load-from-command-line_760414229.html
---
Do this:

`~/Programs/AG-6.4.6/bin/agtool load --catalog platts --bulk flat ~/temp-data/*.ttl`

You will see this:

```
2019-06-26T20:29:31| Processed 2 sources, triple-count: 414,728, rate: 41468.65 tps, time: 10.00 seconds

2019-06-26T20:29:41| Processed 2 sources, triple-count: 664,728, rate: 24997.50 tps, time: 20.00 seconds

2019-06-26T20:29:51| Processed 2 sources, triple-count: 864,728, rate: 19996.00 tps, time: 30.00 seconds

...

2019-06-26T20:43:51| Processed 3 sources, triple-count: 10,728,989, rate: 14998.50 tps, time: 870.12 seconds

2019-06-26T20:43:53| Load finished 4 sources in 00:14:32 (872.12 seconds). Triples added: 10,754,335, Average Rate: 12331.00 tps.
```

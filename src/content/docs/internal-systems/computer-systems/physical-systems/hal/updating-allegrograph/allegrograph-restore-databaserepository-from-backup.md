---
title: "AllegroGraph restore database/repository from backup"
confluence_id: 778600512
source: 778600512.html
---
I had to restore a database from a backup. This is how I did it.

```
$> agtool archive restore dca-dev:core-main-repo ~/backup/agraph_backup_daily_AG-6.4.6/
```

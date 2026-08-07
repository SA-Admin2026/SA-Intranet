---
title: "Microsoft SQL Server"
confluence_id: 1474596
source: Microsoft-SQL-Server_1474596.html
---
### System Info

Windows Server 2012

Microsoft SQL Server 2014 Developer Edition (same as enterprise edition but can't be used in production)

### Connecting

![](/internal-systems/attachments/1474596/1474594.png)

**IP:**192.168.2.49

**Port:** 1433

**Server Name:** 192.168.2.49,1433\SEMARTSSERVER\MSSQLSERVER

**User:**schneider

**PW:** Grenoble@@

The fully formed server name will likely be something like:

```
192.168.2.49,1433\SEMARTSSERVER\MSSQLSERVER
```

You will also probably need to select *'SQL Server Authentication'* (or something like that) and not *'Windows Authentication'*.

**Other users:**

corticon\_user / Kuva8rq&&

#### JDBC connection URL:

```
jdbc:sqlserver://192.168.2.49;portNumber=1433;databaseName=OPS2;user=schneider;password=Grenoble@@
```

### Databases

**ClipsalProductsUpdated** - All the data related to the Clipsal project from Schneider.

**Corticon -** A DB used by Progress Corticon for rules stuff.  ([AndiE (Unlicensed)](https://semarts.atlassian.net/wiki/people/557058:5e5c1946-535e-453c-b93e-2f7bcf35b1cf?ref=confluence) is this one specific to Schneider?)

**OPS2** - A clone of the OPS2 DB from Schneider.

The rest are system databases that probably shouldn't be messed with unless you know what you're doing.

# DBBO Parking DB

**Server Name:** dbbo-server.database.windows.net

**User:**scogle

**PW:** Bex661&&

---
title: "Vendor/Tool security overview"
confluence_id: 12812290
source: "12812290.html"
---
<http://answers.semanticweb.com/questions/12808/which-triple-stores-include-security-and-encryption>  (Nov 2011)

- **TopBraid** Live has role-based access control on a per-graph basis. The data can come from Jena TDB, Sesame, Oracle, Allegro, etc., and J2EE RBAC is applied to all of them.
- **Virtuoso** has graph-based security. Users can be granted access to specific named graphs inside the store, either read-write or read-only. This is in addition to privileges required to access RDF data at all.
- **Stardog** supports database and Named Graph-level role-based access control; it supports extensible authentication via both internally stored user info and external mechanisms (LDAP, AD, etc) via Shiro.  It supports encrypted credentials in-flight over Avro protocol via CRAM-MD5 (moving to a better mechanism before 1.0 release) and supports in-flight encryption of credentials and payload data via HTTPS.
- **Oracle** has security at the triple level. [See slide 30 from their SemTech 2010 presentation.](http://download.oracle.com/otndocs/tech/semantic_web/pdf/2010_ora_semtech_capintper.pdf) Though, I'm not sure I would say it is all that intuitive to work with, you kind of have to do things "the Oracle way".  For encryption, since the triple/quad store lives in Oracle you can it get it via their rather mature security stack via the [Oracle Advanced Security](http://www.oracle.com/technetwork/database/options/advanced-security/index.html) option.  If security in a triple/quad store is your main concern you probably won't beat Oracle's stack. Although, I'm not sure I would give it a confidence vote in areas other than security.

- **AllegroGraph** - tbd
- **DataSong** - Granular encryption is already implemented.  You can encrypt by adding a few lines to Scheme (or via the GUI). The system automatically (1) Creates a Map-Reduce job to encrypt the relevant data on disk; (2) Encrypts new data coming in.  Encrypted data are queryable via a SPARQL engine extension where you can supply the key at query time.  

  Also, it is possible to plug in a reasoner that will be able to reason at the record level on encrypted data.

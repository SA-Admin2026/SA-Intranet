---
title: "Giving Protege more memory"
confluence_id: 313458707
source: "Giving-Protege-more-memory_313458707.html"
---

To "up" Protégé memory, edit the **`Protege.l4j.ini`** file in Protégé's home directory, changing the **`-Xmx`** parameter (max memory) value,

e.g., I changed mine from default of

`-Xmx500M`

to

`-Xmx4G`

To give it 4G Ram to work with.

A good rule of thumb is to give it 25% of the available memory on your system.

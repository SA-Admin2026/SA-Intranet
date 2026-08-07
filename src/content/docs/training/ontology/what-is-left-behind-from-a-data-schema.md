---
title: "What is left behind from a data schema?"
confluence_id: 5767176
source: "5767176.html"
---
We create ontologies from data schema and often see an order of magnitude reduction. This page is meant to detail out what kind of stuff is left behind, with examples. We should have lots of examples from Schneider, and Broadridge.

Kinds of stuff left behind:

1. application-specific things that other companies in the same industry probably don't have
   1. ?? we
2. non-semantic syntax, technical tricks and workarounds
   1. XML schema often have addresses listed as line 1, line 2, etc. This is arbitrary format-specific stuff. We just record the information, ignoring the lines.
3. redundant stuff: e.g. hasWheel, hasEngine, hasAxle would all be replaced by a single hasPart.

## Application-specific things

Schneider had lots of this, but I cannot recall anything specific.

## Non-semantic syntax, technical tricks and workarounds

XML schema often have addresses listed as line 1, line 2, etc. This is arbitrary format-specific stuff. We just record the information, ignoring the lines.

## Redundant things

non-semantic syntax, technical tricks and workarounds

e.g. hasWheel, hasEngine, hasAxle would all be replaced by a single hasPart. This has not shown up too much, from Scott's recollection.

## Navigational hierarchy

There is often quite a lot of information used for navigation – often ends up being 30% of the database, It is built on in ways that are inappropriate, and it is providing little value.

## Documents

Not necessarily junk

---
title: "Modeling Time in Gist"
confluence_id: 671219713
source: "Modeling-Time-in-Gist_671219713.html"
---

Minting URIs for TimeInstants

- Default: fold the standard xsd format into the URI.e g.:
  - `:_2019-01-15T10-30-22.00-7` (-00 is sub-second precision to 2 places, last  -7 is time zone offset)
  - `:_2001-10-16T21-32-52.12679`  (last bit is sub-second precision to 5 places)
- Other cases: fold in the precision in some way. e.g.:
  - `:_Day_2019-15-01` which has gist precision of one day
  - `:_Minute_2019-01-15T10-30MST`which has gist precision of one minute

Two TimeInstants that have the same epoch time are *gist:sameTimeAs* each other, but not *owl:sameAs*

When relating things to points in time, we will default to using object properties with range of gist:TimeInstant, as we currently do (e.g. gist:actual, gist:plannedStart). Many are reusable, when there are different relationships to time, create new relationships, E.g.:lastModifiedOn, :lastAccessedOn,  :asOfDate,. Some of these exist in mscore, for Morgan Stanley.

>> ----- COMMENTS ----

The small comment box seemed too limiting for more substantial discussion points.

The above format is close to existing standards. I suggest referencing them and indicate any differences. One difference would be the character limitations of a URI so we replace colons with hyphen/dash/minus (however, see comment below about ambiguous formats).

## Relevant Standards

- ISO8601 - [wikipedia](https://en.wikipedia.org/wiki/ISO_8601)
- [XML Schema](https://www.w3.org/TR/xmlschema11-2/) - [dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime) - [date](https://www.w3.org/TR/xmlschema11-2/#date) - [time](https://www.w3.org/TR/xmlschema11-2/#time) - [duration](https://www.w3.org/TR/xmlschema11-2/#duration)
- Reserved, unreserved, and the encoding of characters in URIs → [wikipedia](https://en.wikipedia.org/wiki/Percent-encoding#Types_of_URI_characters)

The ISO standard allows truncating precision such as a time of 10:35+03:00. Allowing that would cause an ambiguity when using a '-' to represent a negative time zone offset if we (as proposed above) replace the ':' with '-'. I think if we were to use '.' to replace ':' in the time it would remove ambiguities.

After reading our page I understand the URI format but not the semantics wrt time zones / offsets. I think a little more specificity would help. I would also suggest following the conventions of the ISO8601 spec. I'd be happy to summarize them above if others agree with that suggestion.

The standard name for a "day" type is "date". Why use "Day" as the prefix as in the example :\_Day\_2019-15-01 ?

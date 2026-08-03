---
title: "gist Issue Review 2020-01-16"
confluence_id: 812122210
source: gist-Issue-Review-2020-01-16_812122210.html
---

# gist Issue Review 2020-01-16

**Attending:**

Boris, Michael, Dan, SteveS, Rebecca, Jamie

## Agenda and Notes

1. **Review action items from previous meeting**

   1. All are complete.
2. **New topics**

   1. What about a similar (smaller) review process for Slow Reveal issues? It would help to balance ontologists' needs against dev team effort level in order to prioritize.

      1. Boris: Ontologists meet with Jamie to create a prioritized backlog. General question is how often ontologists should meet with dev team to communicate priorities for tool development.
      2. Dan: instead of regularly-scheduled meeting, do on more of an ad hoc basis.
      3. Boris: dev teams work better when they work at a regular cadence and when they see what’s coming down the pike.
      4. Jamie: Kaspar is the only dev on Slow Reveal, and he is a part-time student. Doesn’t know code base well yet.
      5. Boris: Slow Reveal is most-used tool by ontologists. We could discuss resource allocation to various dev efforts at Summit. Dave should participate in this discussion.
      6. Jamie: This is a case where prioritization shouldn’t be entirely user-driven, since there are infrastructure issues that they aren’t aware of. (Referring not to Slow Reveal but dev efforts across the board.) We have a much larger vision that we’re trying to achieve.
      7. Boris: So all we need input on is to make sure Kaspar is working on the tasks according to prioritization established by ontologists with Jamie.
      8. Kaspar works approximately 15 hrs/wk, almost all Slow Reveal. Arrives around 4:30pm MT.
      9. Dan: Jamie and Kaspar should ask for input when they want it.
      10. Jamie: we want input, but need to consider what the best way to get input is.
   2. Correction of an error, even if not backward-compatible, does NOT require a major release. Users should not have implemented against an obvious error. Would be a patch.

      1. Rebecca: What type of error?
      2. Boris: something is a patch if we’re fixing something that should never have been.
      3. Jamie: do we have a release email list for gist?
      4. Dan: gist council list can function as a release list.
3. **Old topics** (left over from previous meetings)

   1. Issue of category SU “has semantic import from usage perspective, e.g. a comment changes usage which could give semantic errors.” Michael notes that the comment or definition changes the way users will use the term, with the consequence that new users will use the term in a different way from older users, thus effectively creating a different in semantics. How to map to major/minor/patch?
   2. Content of release notes. Examples:

      1. Recommended response to deprecated terms
      2. For major release, document what data migration and other action is required to use the new release
4. **Review issues**

   1. Issue <https://github.com/semanticarts/gist/issues/20> - plan has been agreed upon but needs a volunteer to implement.

## New Action Items

1. Steve has volunteered to fix patch issues like typos in annotations and submit a PR.

## Action Items from 2020-01-09 Meeting

1. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) : Give repository admin privileges on gist repo to Boris, and MarkW if he doesn’t already have them. – DONE
2. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) : Tag repo for release 9.0.0. Determine release date from server logs or other documentation. – DONE

## Next Meeting

January 23, 2020 11:00am ET

---
title: "gist Issue Review 2019-12-19"
confluence_id: 784662554
source: gist-Issue-Review-2019-12-19_784662554.html
---

# gist Issue Review 2019-12-19

Facilitator: Rebecca

Attendees: Rebecca, Dave, Boris, Michael, Dan, Andrea, Jamie

## Agenda (other than issue review)

1. Do we need a quorum to make decisions, or can those present do so?
2. New labels to be added
3. What to do with issues that have extensive discussion that cannot be reviewed on the spot in a meeting?

## Notes

1. Who can make decisions on issue status?

   1. Quorum needed for restructuring and larger-scale issues
   2. Those present at meeting can decide on simple, less invasive issues
2. What to do with issues that have extensive discussion that cannot be reviewed on the spot in a meeting?

   1. This is category 3 above.
   2. Example: Ted’s discussion of geo regions etc.
3. Milestones indicated as a month (e.g., January 2020)

   1. Don’t assign a milestone until we’ve decided to do it - i.e., category 2 above
4. Version numbering: see [semantic versioning article](https://semver.org/)

   1. MAJOR: Non-backward compatible (reasoning produces a different result)

      1. Examples: adding a restriction, domain, range
   2. MINOR: New functionality, backward compatible (change in inference). May represent a large change to the ontology, such as addition to new module.

      1. Examples: adding a class or property; removing a restriction
   3. PATCH: No new functionality

      1. Examples: Fixing a typo
5. Who should have permission to merge to develop? MarkW, Boris, Rebecca

   1. This is a question of mechanics, not decision-making
6. Who should have permission to merge to master? Jamie

   1. This is a question of mechanics, not decision-making
7. How many reviewers to merge PR to develop?

   1. One senior ontologist, who will bring in others as appropriate
   2. This person determines whether the work done complies with implementation decided
8. We will have weekly meetings starting 2020-01-09 until a significant dent in the backlog has been achieved.
9. A rotating *release* *facilitator* will shepherd the release process - e.g., make sure all issues specified for the release have been fixed, defer if needed, add the release version tag, etc.

   1. When a release tag has been added by the facilitating ontologist, Jamie will release.
   2. [Boris Pelakh](https://semarts.atlassian.net/wiki/people/5bc7646da994e83f6ee80aed?ref=confluence) will be release facilitator for Jan. 2020 release.
10. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) will release every month starting January 31, 2020

## Action Items (other than dealing with individual issues)

1. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) : Give ownership privileges on SA organization to: Rebecca, Boris, MarkW (or should it be repository administrator?)
2. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) : Tag repo for release 9.0.0. Determine release date from server logs or other documentation.
3. [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) : Map the 5-6 categories we currently use to major/minor/patch

   1. KEY for Change Log  
      CL: for clarity only, better comments, fixing typos, laying out differently, etc.   
      AD: Add class or property that will not affect anything already existing. Add class or property   
      RF: refactoring, no semantic import. Includes changing local names where old name is deprecated.   
      SU: has semantic import from usage perspective, e.g. a comment changes usage which could give semantic errors.   
      SI: has semantic import from inference perspective. axiom added, removed, changed etc.   
      BI: Backwards incompatible
4. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) : Find duplicate to issue #17, add to comment, and close

## Next Meeting: January 9, 2020

We will have weekly meetings starting 2020-01-09 until a significant dent in the backlog has been achieved.

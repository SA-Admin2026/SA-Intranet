---
title: "gist Issue Review 2020-01-09"
confluence_id: 787120171
source: gist-Issue-Review-2020-01-09_787120171.html
---
**Attending:** Dave, Michael, MarkW, Dan, Boris, Rebecca

## Agenda and Notes

Items 4-7 could be deferred to a later meeting.

1. Review of action items from 2019-12-09 meeting
2. Proposal to use project boards to track progress through a release

   1. I’ve created two as demonstrations. <https://github.com/semanticarts/gist/projects>
   2. I think these are more effective than milestones, and make it easier for the release facilitator to track issues. (We could use milestones as well if desired, but that may be just duplication.)
   3. I’ve set up columns and automation as suggestions - these could be refined by the group as we think about workflow.
   4. **Discussion**

      1. Michael notes that projects don’t have to be release-based; e.g., a large-scale project requiring considerable rewrites could be a project outside of the release cycle.
      2. Dan suggests we apply this process to gist, later consider for client projects
      3. Reviewers should request developers to break up PRs dealing with different, unrelated issues before approving.
   5. **Decision: use projects rather than milestones.**
3. What is a quorum for the purpose of triaging? We decided it’s need to approve large-scale changes, but didn’t define it.

   1. **Discussion**

      1. Dave wants to automate this long term
   2. **Decisions**

      1. Triage: requires three or more ontologists at this meeting
      2. To approve a PR

         1. major: Three ontologists
         2. minor: Two ontologists
         3. patch: One ontologist
         4. Change lightbulb: Six ontologists
      3. Can assign major, minor, and patch labels when we add an issue
      4. Review major, minor, and patch labels when we triage issues
4. Issue of category SU above: “has semantic import from usage perspective, e.g. a comment changes usage which could give semantic errors.” Michael notes that the comment or definition changes the way users will use the term, with the consequence that new users will use the term in a different way from older users, thus effectively creating a different in semantics.

   1. **Deferred**
5. How long to keep deprecated terms? Till next major release?

   1. **Deferred**
6. Content of release notes. Examples:

   1. Recommended response to deprecated terms
   2. For major release, document what data migration and other action is required to use the new release
   3. **Deferred**
7. Review issues

## Action Items from 2019-12-19 Meeting

1. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) : Give repository admin privileges on gist repo to: Rebecca, Boris, MarkW

   1. Rebecca received, Boris didn’t, don’t know about MarkW
2. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) : Tag repo for release 9.0.0. Determine release date from server logs or other documentation.

   1. Not done, don’t know exact release date. Will investigate further
3. [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) : Map the 5-6 categories we currently use to major/minor/patch **DONE**

   1. KEY for Change Log  
      CL: for clarity only, better comments, fixing typos, laying out differently, etc. PATCH  
      AD: Add class or property that will not affect anything already existing. Add class or property MINOR   
      RF: refactoring, no semantic import. Includes changing local names where old name is deprecated. MINOR   
      SU: has semantic import from usage perspective, e.g. a comment changes usage which could give semantic errors. NEEDS DISCUSSION  
      SI: has semantic import from inference perspective. axiom added, removed, changed etc. MAJOR  
      BI: Backwards incompatible MAJOR
4. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) : Find duplicate to issue #17, add to comment, and close **DONE**

## Action Items (other than dealing with individual issues)

1. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) : Give repository admin privileges on gist repo to MarkW if he doesn’t already have them.
2. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) : Tag repo for release 9.0.0. Determine release date from server logs or other documentation.

   1. Not done, don’t know exact release date. Will investigate further

## Next Meeting

January 16, 2020 11:00am ET

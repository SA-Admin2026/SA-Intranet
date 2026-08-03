---
title: "gist Issue Review 2020-01-30"
confluence_id: 835256371
source: gist-Issue-Review-2020-01-30_835256371.html
---

# gist Issue Review 2020-01-30

**Attending:**

Michael, MarkW, Dan, Rebecca, Jamie, Steve

# Agenda and Notes

1. **Review action items from previous meeting**
2. **New topics**

   1. Are there ways to streamline the review process? For instance, can we ask for a review from exactly the number of ontologists required based on the major/minor/patch categorization, to forestall a lot of additional back-and-forth?

      1. **Decision:** designate exactly the required # of reviewers, and nudge if review not timely, or designate 1 + required number of reviewers, and hope someone will review
   2. Decision made on issue [#20](https://github.com/semanticarts/gist/issues/20) regarding sentence case vs camel case labels. Is there consensus on whether we need to revisit this or not?

      1. We agreed to stick with previous proposal, Dan will rework his list and we will discuss at next meeting (Feb 20). See notes on issue.
   3. Add documentation to git repository explaining (a) our review and release process, and (b) conventions such as those made in issue [#20](https://github.com/semanticarts/gist/issues/20). I will volunteer to make a first pass. The purpose is two-fold:

      1. Provide transparency about the review and release process to users. We would not include nitty-gritty details about the method of review, just the fact that we have regular reviews, proceed from oldest to newest, decide on what goes in what release, etc.
      2. Document our decisions on standards and conventions, both for internal reference and for outside contributors. There’s no point in someone submitting a PR that doesn’t comply with these basic standards.

         1. We agreed to this and Rebecca will kickstart the document with decisions from [#20](https://github.com/semanticarts/gist/issues/20).
   4. We agreed that concurrently with discussion of large issues like [#20](https://github.com/semanticarts/gist/issues/20), [#60](https://github.com/semanticarts/gist/issues/60), and [#61](https://github.com/semanticarts/gist/issues/61), we will attack some small issues in order to keep them moving along.
3. **Old topics** (left over from previous meetings)

   1. [Boris Pelakh](https://semarts.atlassian.net/wiki/people/5bc7646da994e83f6ee80aed?ref=confluence) to fold functionality from versionizer, serializer, and bundler into ontology-toolkit. See [issue #150](https://github.com/semanticarts/gist/issues/150).
   2. Github issue <https://github.com/semanticarts/gist/issues/141> related to release process.
   3. Issue of category SU “has semantic import from usage perspective, e.g. a comment changes usage which could give semantic errors.” Michael notes that the comment or definition changes the way users will use the term, with the consequence that new users will use the term in a different way from older users, thus effectively creating a different in semantics. How to map to major/minor/patch?
   4. Create a template for release notes. Release facilitator is responsible for writing release notes. I wonder if there’s a way to automatically extract at least the list of issues from the GitHub project. Among other topics, for a major release I think it’s appropriate to document what data migration and other action is required to upgrade.
4. **Review issues**

   1. Dan’s list of local names for issue [#20](https://github.com/semanticarts/gist/issues/20). And, Dan didn’t sign on to the decision recorded for this issue. Discussed - see above.
   2. Michael’s presentations of issues [#60](https://github.com/semanticarts/gist/issues/60) and [#61](https://github.com/semanticarts/gist/issues/61)

      1. Michael presented his proposal for #61 and will prepare an implement and RDF samples for next meeting.

**Please make any comments on action items on the** [**agenda for the next meeting**](https://semarts.atlassian.net/wiki/spaces/OF/pages/edit-v2/835649777)**. We will review them there.**

## New Action Items

1. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) There are several other assets on the gist download page that point to specific versions of files. It would be nice to figure out a way to automate the updating of this page.
2. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) Kickstart Style Guide in repository and include decisions from issue [#20](https://github.com/semanticarts/gist/issues/20). Once the PR has been merged, notify ontologists. Could also be raised at gist council. See issue [#163](https://github.com/semanticarts/gist/issues/163).
3. [Dan Carey](https://semarts.atlassian.net/wiki/people/557058:1036d29f-7b50-4f8a-b7e1-59c3d8614f96?ref=confluence) Revise list of new local names, post on Office 365, and notify ontologists via email that the document is available for comment. [Dan Carey](https://semarts.atlassian.net/wiki/people/557058:1036d29f-7b50-4f8a-b7e1-59c3d8614f96?ref=confluence) please reference the decision on issue [#20](https://github.com/semanticarts/gist/issues/20) and make clear that we are ***not*** revisiting the decision itself.
4. [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) Implement proposal for [#61](https://github.com/semanticarts/gist/issues/61) and provide RDF samples.
5. [Mark Wallace](https://semarts.atlassian.net/wiki/people/5a147f88cba5b30325a6e9c1?ref=confluence) Remove Visio files from the repository since they are out of date. Does this also apply to the PDFs and PNGs in the /Documents folder? See issue [#164](https://github.com/semanticarts/gist/issues/164).

## Action Items from 2020-01-23 Meeting

1. [Stephen Steward (Unlicensed)](https://semarts.atlassian.net/wiki/people/5d0bd62977d0d20c2f575797?ref=confluence) to add issues fixed in the PR to January 2020 project. DONE
2. [Stephen Steward (Unlicensed)](https://semarts.atlassian.net/wiki/people/5d0bd62977d0d20c2f575797?ref=confluence) to run serializer and push to his remote feature branch so it’s included in the PR. DONE
3. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) Reorganize protocols and procedures on main page for comprehensibility. Add process for deprecation. DONE
4. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) to reorganize labels to add a category - e.g., “priority: must have”. DONE
5. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) and [Boris Pelakh](https://semarts.atlassian.net/wiki/people/5bc7646da994e83f6ee80aed?ref=confluence) to familiarize themselves with release bundler so Mark isn’t the only one who can do it. NOT NEEDED: BORIS WILL INCORPORATE INTO ONTOLOGY-TOOLKIT.

   1. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) to write a bash version of bundle.bat. NOT NEEDED: BORIS WILL INCORPORATE INTO ONTOLOGY-TOOLKIT.
6. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) Split issue #20 into two issues: DONE

   1. Add missing labels - assign to [Mark Wallace](https://semarts.atlassian.net/wiki/people/5a147f88cba5b30325a6e9c1?ref=confluence) who has a script to automate this. Keep in January 2020 project. DONE
   2. Update local names and labels according to specified implementation. Assign to [Dan Carey](https://semarts.atlassian.net/wiki/people/557058:1036d29f-7b50-4f8a-b7e1-59c3d8614f96?ref=confluence). This will be a minor release.

      1. [Dan Carey](https://semarts.atlassian.net/wiki/people/557058:1036d29f-7b50-4f8a-b7e1-59c3d8614f96?ref=confluence) will first create a list of new local names and attach to issue for review. All should review before next meeting. Will be in February 2020 project. DONE
      2. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) suggests that the list include local names and labels, so we don’t have to go through a two-step review process.
7. [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) to prepare brief presentations on issues #60 and #61 for next meeting DONE
8. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) Add issue for Ted’s GeoRegion proposals. Reference this issue in #63. DONE
9. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) Add issue for Dave’s hasPart proposal. Tag as major. DONE
10. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) to change link to gist download on website to read “9.0” rather than “9.0.0”, so that patch releases can be added under the hood with no change to the website. DONE

    1. There are several other assets on that page that point to specific versions of files. It would be nice to figure out a way to automate the updating of this page.

## Next Meeting

[February 20, 2020 11:00am ET](https://semarts.atlassian.net/wiki/spaces/OF/pages/835649777/gist+Issue+Review+2020-02-20) (SA Summit Feb 6 and gist Council Feb 13)

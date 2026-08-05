---
title: "gist Issue Review 2020-02-20"
confluence_id: 835649777
source: gist-Issue-Review-2020-02-20_835649777.html
---

# gist Issue Review 2020-02-20

**Attending:**

Rebecca, Boris, Michael, Peter, Dan, MarkW, Jamie

# Agenda and Notes

1. **Review action items from previous meeting**
2. **New topics**

   1. No January release - rolled into February
   2. Are we on track for the February release? - review issues in the project: <https://github.com/semanticarts/gist/projects/4>
   3. Review and clarify the release process defined in [gist Issue Review](/wiki/pages/createpage.action?spaceKey=OF&title=gist%20Issue%20Review&linkCreation=true&fromPageId=835649777)
3. **Old topics** (left over from previous meetings)

   1. [Boris Pelakh](https://semarts.atlassian.net/wiki/people/5bc7646da994e83f6ee80aed?ref=confluence) to fold functionality from versionizer, serializer, and bundler into ontology-toolkit. See [issue #150](https://github.com/semanticarts/gist/issues/150) and <https://github.com/semanticarts/ontology-toolkit/pull/2>
   2. Github issue <https://github.com/semanticarts/gist/issues/141> related to release process.
   3. Issue of category SU “has semantic import from usage perspective, e.g. a comment changes usage which could give semantic errors.” Michael notes that the comment or definition changes the way users will use the term, with the consequence that new users will use the term in a different way from older users, thus effectively creating a different in semantics. How to map to major/minor/patch?
   4. Create a template for release notes? Release facilitator is responsible for writing release notes. I wonder if there’s a way to automatically extract at least the list of issues from the GitHub project. Among other topics, for a major release I think it’s appropriate to document what data migration and other action is required to upgrade.
4. **Review issues**

   1. Quick status review of issues slated for February 2020 release.
5. Start with some patch issues that can be quickly decided on and assigned while we ponder larger Issues.
6. Larger issues: continue discussion of [#20](https://github.com/semanticarts/gist/issues/20), [#61](https://github.com/semanticarts/gist/issues/61), and [#60](https://github.com/semanticarts/gist/issues/60).

   1. Is #20 a minor or major release (I believe it should be minor based on the [semver criteria we've adopted](https://semarts.atlassian.net/wiki/spaces/OF/pages/782434305/gist+Issue+Review)).
7. **Decision** to have meetings twice monthly, 2nd and 4th Thursdays.

**Please make any comments on action items on the** [**agenda for the next meeting**](https://semarts.atlassian.net/wiki/spaces/OF/pages/876380168/gist+Issue+Review+2020-02-27)**. We will review them there.**

# New Action Items

1. [Boris Pelakh](https://semarts.atlassian.net/wiki/people/5bc7646da994e83f6ee80aed?ref=confluence) will review the [release process](https://semarts.atlassian.net/wiki/spaces/OF/pages/782434305/gist+Issue+Review) and post questions to the sa-gist team. No meeting before the next release.

# Action Items from 2020-01-30 Meeting

1. [Jamie G](https://semarts.atlassian.net/wiki/people/5be9f00fc03ef4570f0a69d1?ref=confluence) There are several other assets on the gist download page that point to specific versions of files. It would be nice to figure out a way to automate the updating of this page. CREATED GIST ISSUE SO WE DON’T HAVE TO TRACK AS AN ACTION ITEM.
2. [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) Kickstart Style Guide in repository and include decisions from issue [#20](https://github.com/semanticarts/gist/issues/20). Once the PR has been merged, notify ontologists. Could also be raised at gist council. See issue [#163](https://github.com/semanticarts/gist/issues/163). DONE FOR NOW, needs to be moved to Github. Find it [here](https://semarts.atlassian.net/wiki/spaces/OF/pages/835256481/Standards+and+Conventions+for+gist+Implementation).
3. [Dan Carey](https://semarts.atlassian.net/wiki/people/557058:1036d29f-7b50-4f8a-b7e1-59c3d8614f96?ref=confluence) Revise list of new local names, post on Office 365, and notify ontologists via email that the document is available for comment. [Dan Carey](https://semarts.atlassian.net/wiki/people/557058:1036d29f-7b50-4f8a-b7e1-59c3d8614f96?ref=confluence) please reference the decision on issue [#20](https://github.com/semanticarts/gist/issues/20) and make clear that we are ***not*** revisiting the decision itself.
4. [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) Implement proposal for [#61](https://github.com/semanticarts/gist/issues/61) and provide RDF samples. NOT DONE, MOVE TO NEXT MEETING.
5. [Mark Wallace](https://semarts.atlassian.net/wiki/people/5a147f88cba5b30325a6e9c1?ref=confluence) Remove Visio files from the repository since they are out of date. Does this also apply to the PDFs and PNGs in the /Documents folder? See issue [#164](https://github.com/semanticarts/gist/issues/164). WILL ALSO REMOVE IMPORT DIAGRAMS.

# Next Meeting

[March 12, 2020 11:00am ET](https://semarts.atlassian.net/wiki/spaces/OF/pages/876380168/gist+Issue+Review+2020-02-27)

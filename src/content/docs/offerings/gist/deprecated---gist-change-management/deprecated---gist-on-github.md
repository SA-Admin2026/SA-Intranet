---
title: "deprecated - gist on GitHub"
confluence_id: 57114626
source: deprecated---gist-on-GitHub_57114626.html
---

# deprecated - gist on GitHub

Important!

This process is now deprecated.  See [deprecated - git for gist](deprecated---git-for-gist.md).

# The basic idea

1. There is a single main branch and only one person will be developing on it at any time, just as we do now.  This is because there is no round-tripping in Visio/e6Tools.
2. The branch is called "Dev-X.x"
3. When a new version is released, a new branch named after the release will be created, e.g. "7.5.2". The commit comment should say one of: "Internal release" or "External release" and anything else that seems pertinent. The changes from the prior release should be evident from the commit comments along the Dev-X.x branch (hereafter X.x for short).
4. Releases will always be dead-end branches, never merging back into the main trunk (again, due to there being no round-tripping as well as the file names are all different).

After loading in all versions from 7.0 through 7.5.2 and making a small change in the X.x branch after 7.5.2, it is now ready for production use.  In SourceTree, it looks like this:

![](/offerings/attachments/57114626/61734917.png)

Notice the following:

1. all releases are numbered on their own branch directly off of X.x and they all have exactly one commit.
2. there is no way to compare one release to the next because the file names are all different.
3. you must manually take care that the release branch off of the X.x branch has the files that were manually converted to the files with numbers on them.
4. No merges will ever occur.

# Folder structure

[Priyank Bambhrolia (Unlicensed)](https://semarts.atlassian.net/wiki/people/557058:48041e07-7a7c-490f-8614-2321e22e2f64?ref=confluence) and [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) came up with the following file structure for ongoing development.

1. Folder: Documents
   1. README.txt
   2. any pdfs or other things for documentation purposes
2. Folder: OntologyFiles
   1. all the .owl files
   2. the catalog file
   3. the visio file
3. Folder: zz\_NotOnGit for anything we don't want to keep on git. On 2017-05-19 the contents are:
   1. Some obsolete owl files
   2. Some remastered backups
   3. A disjoints.owl file which might not be needed.

# Ongoing development

1. Follow the normal procedure described in the README.txt file by working in the \_\_\_workingGistMaster folder.
2. Before working on something, create a [git issue](https://github.com/semanticarts/gist)
   1. Go go <https://github.com/semanticarts/gist>
   2. Click on the Issues tab on left side of top row
   3. Click on New Issue
   4. Enter title and description of issue
   5. Send an email with the URL of the issue to the group so we can add comments.  
      E.g.: <https://github.com/semanticarts/gist/issues/2>
   6. Anyone who wants to follow this can subscribe to the Issue and get notifications of comments.
3. Once the dust settles and a decision has been made on what the change should be, break it up into bite-sized pieces for each commit. This way,  the commit comment can be exactly what we now have in they change log.
4. When you have finished a batch of changes, remove the old OntologyFiles and Documents folders and copy in the new ones.   
   **WARNING**: If you try to copy the folders over the existing ones, it might add the new files and keep the old ones. That happened do me on Windows 10. Your mileage may vary.
5. Git will know which files changed, but don't bother looking at the changes because they files will be totally dissimilar due to the serializer changing the e6 output format.
6. Do the commit, and make a note of the changes in the comment field.  Prefix the comment to indicate the issue number and include the kind of change (refactor etc) in parens.  
   e.g. *GIST-2 (RF) Move OrderedCollection from Top to Measure, have Place import Measure*.
7. Then put the exact same comment in the change log in the Visio file.
8. After the serialization, you can see the differences between the new and old versions.

# Releasing a new numbered version

1. Follow instructions in the README.txt file.
2. **IMPORTANT**: Check out the main branch Dev-X.x
3. Create a new branch named for the new version (e.g. 7.5.2)
4. Follow the above instructions, i.e. copy OntologyFiles and Documents folders and do a commit.
5. This will be a dead-end branch, but anyone can click on it at any time and retrieve the files in a jiffy.
6. To be on the safe side, check out the Dev-X.x branch again right away to avoid mistakenly adding changes to the wrong branch for ongoing work.

## WARNINGS:

1. Don't forget to save out the visio file after saving out the OWL.  If you do forget, when you copy all the ontology files over, you will see a **\*.~vsd\*** file which Visio uses as a temp backup.
2. DO NOT work directly in the github folder. Do things in the "\_\_\_workingGistMaster" folder under ...\Offerings\gist\
3. If you are working off-line on your laptop away from the server, then you need to be extra careful to first align your files and folders with those on \_\_\_workingGistMaster and then copy to the github folders.

If you want to see the differences between two released versions (e.g. 7.5.2 and 7.5.3), then do this:

1. Open a terminal window command line interface
2. Find the two commits that led immediately to the two releases (e.g. d335fc1 & 56a66c2)
3. Type something like this into the command line: "git diff d335fc1 56a66c2"
   1. if you want to save it as a text file, then add > diffFile.text
   2. if you want to see it in the current window,
      1. make sure you widen the window first to avoid line-wrap.
      2. just press return

NOTE: no such comparisons are possible before 7.5.2 because there was no historical record of the X.x.owl files. Moving forward, there should be.

The compare file will look something like this:

![](/offerings/attachments/57114626/57147410.png)

# Questions to decide

1. For some of the external releases (e.g. 7.3) we hold back some owl files (e.g. materialized, SHACL & wiki. How to handle this?
2. We currently have various folders and zip files such as gist7.3\_webDownload.zip, OWL\_7.3release\_wCatalog.zip and OWL\_7.3release.zip which have lots of duplication. How much of this do we want on github?

---
title: "deprecated - gist Change Management"
confluence_id: 233308167
source: deprecated---gist-Change-Management_233308167.html
---

# deprecated - gist Change Management

IMPORTANT

**This change management approach has been superceded.  See [deprecated - Git for gist](https://semarts.atlassian.net/wiki/spaces/OF/blog/2018/11/28/663191553/deprecated+-+Git+for+gist) for the new way.**

step-by-step instructions

# Background

gist is maintained on GitHub at <https://github.com/semanticarts/gist>

In what follows, the Windows disk `Y:` has been mapped to `\\semartsserver\SemanticArts`. For information on mapping to this filesystem, see [Accessing the shared drive](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/23461899/Accessing+the+shared+drive).

See the video at: ...\Offerings\gist\git4gist\VIDEO-UsingGitForGist.mp4

## Branches

Branches are as follows.

- master: This is the branch representing the latest release of gist. No work takes place directly on this branch.
- release/n: This is a branch off the master representing ongoing development. "n" is a sequentially assigned number that has no meaning other than that it is the next release under development after the previous one. gist.vsd will be edited on this branch, and generated owl files will be committed on this branch. This branch will be merged into the master just before a release.
- ISSUE-nn-xx: These are branches created for implementing features or fixes, all of which should be identified by a gist issue number (nn). The initials of the person doing the work should also be included in the branch name, so that the group knows who is working on gist.vsd. NOTE: Some flexibility in naming is needed here, as one branch might be used to address multiple issues. Each of these issue branches will be merged into the release/n branch before the next branch is created.
- hotfix: These are dead-end branches created to fix a problem in an already released gist. If changes made on a hotfix branch are also needed in the release under development, they will have to be manually repeated on the release/n branch.

See the graphic and narrative below for an example.

![](/offerings/attachments/233308167/240910358.jpg)

Here's what happened over time to create the branches and commits shown above.

1. gist 7.5.1 was tagged and released.
2. gist 7.5.2 was tagged and released.
3. gist 8.0.0 was tagged and released
4. Branch release/4 was created for the next release to be developed.
5. A branch was created by the ontologist with the initials MU to implement a feature described in Issue 22.
6. At about the same time, a defect was discovered in 8.0.0 that needed to be fixed before the next release would be ready. Branch hotfix/1 was created, the defect was fixed, and the fix was tagged as release 8.0.1. Someone had to remember that this same fix would be needed in the release under development on branch release/4.
7. Work on Issue 22 was completed, so branch ISSUE-22-MU was merged into release/4.
8. A defect was discovered in 7.5.2 that needed to be fixed before the next release would be ready. Branch hotfix/2 was created, the defect was fixed, and the fix was tagged as release 7.5.3. As is often the case with fixes to older releases, it was determined that the release under development would not need this fix.
9. A branch was created by the ontologist with the intiials TH to implement the hotfix that was implemented in 8.0.1. It was documented as Gist Issue 29.
10. The hotfix was merged to release/4.
11. release/4 was merged into master and tagged as release 8.1.0, because the change was a minor (significant but backwards-compatible) change to 8.0.0.

# Setup

## Access github

If you do not already have a profile on github.com, you will need to create a profile for yourself. Ask Melissa to add your pre-existing or new github user ID to the Semantic Arts organization.

## Install Git Locally

Follow the instructions at <https://help.github.com/articles/set-up-git/>

## Clone the Gist Git Repository

Clone the git repository. You can clone the repository using the git bash command line interface as follows:

```
cd <your home directory>  
git clone https://github.com/semanticarts/gist
```

This will create a directory called gist, and copy the gist repository to it.

## Install the Serializer

After cloning, which makes some necessary subfolders, from server folder `Y:\_SemanticArts\Offerings\gist\git4gist`, copy files `pre-commit` and `rdf-toolkit.jar` to your local `gist\.git\hooks` folder.

According to `Y:\_SemanticArts\Offerings\gist\git4gist\RDFSerializer_Notes.docx`, you will need to edit file `pre-commit` to set the value of JAVA\_HOME correctly for your system. If, however, JAVA\_HOME is set as a system environment variable on your system, you can simply comment out (with a #) the line near the top of `pre-commit` that defines this variable.

# Editing

## Preparing to Edit

### Ensure Exclusive Access

gist is maintained in a single file, gist.vsd. git cannot help with merges of multiple versions of this file; therefore, on a given git branch, only one person can be editing gist.vsd at a time. Furthermore, if gist.vsd is being edited on two or more branches at the same time, changes will have to be manually merged between the versions of gist.vsd. Therefore, before you begin editing:

1. Send an email to the Ontologists mailing list as follows: "I am about to begin editing gist.vsd on branch XXX. PLEASE REPLY TO CONFIRM that you are not also editing gist.vsd."

DO NOT PROCEED until all ontologists have confirmed that they are not editing gist.vsd. If someone else is alread editing gist.vsd, coordinate your edits with that person.

### Determine Branch

1. Decide the purpose of the edit.
   1. If editing is for the next step in the ongoing development of gist, the purpose is "next release". This would include resolving issues in and adding features to the next release.
   2. If editing is to fix a defect in an already-released version of gist without waiting for the next release, the purpose is "hot fix".
2. If "next release":
   1. Check with your co-workers to ensure that you are the only one editing gist.vsd. If someone else is editing it, STOP and coordinate your edits with that person.
      - If there is a feature/fix branch off the release/n branch, then someone else is already editing gist.vsd. The initials in the branch name will identify that person.
      - If there is no feature/fix branch off the release/n branch, then it is *unlikely* that someone else is already editing gist.vsd. However, there's a possibility that two of you will start this process simultaneously, or that someone will not follow the process, so you still need to check with your co-workers.
   2. Look at git to determine whether a "release/n" branch has been created yet, where "n" is a sequential number counting release branches.
      1. If there is a "release/n" branch already in existence, that is the branch you will work on.
      2. If there is no "release/n" branch, create it off the master.
   3. Create your feature/fix branch.
      1. If you're working on exactly one feature or fix, name the branch ISSUE-nn-xx, where nn is the gist issue number from <https://github.com/semanticarts/gist/issues> and xx are your initials.
      2. If you're working on more than one feature or fix, list all the relevant issue numbers followed by your initials; e.g., ISSUE-nn-mm-xx.
3. If "hot fix":
   1. Create a branch off the master, starting from the tagged release that is to be fixed. Name the branch "hotfix/n", where n is a sequential number counting hotfix branches.

## gist Development with git

Cookbook-style instructions using git bash and command-line git commands. Pathnames shown are exemplary; your paths might be different.

### Editing on the "Next Release" Branch (release/n)

1. Refresh your local copy of gist; optionally, create the release/n branch if necessary.

```
cd /c/semanticarts/gist  
#git branch release/n; git push -u origin release/n  # Do this only if you are creating the "release/n" branch.  
git checkout release/n  # Always do this before you start, to refresh your local copy.
```

2. Create your feature/fix branch following the naming instructions above.

```
git checkout -b ISSUE-29-TH  # for example  
git push -u origin ISSUE-29-TH
```

3. Edit gist.vsd. Generate and test OWL files.

4. When you're ready to commit changes:

Save the Visio file and exit from Visio.

```
git add changedFiles...  
git commit -m "ISSUE-29-TH change description"
```

Replace `"change description"` with a description of your changes. (Keep the quotation marks.)

Repeat steps 3-4 as often as necessary. Changes will be saved in your local git repository and won't be seen by the group until you push them to github.

To push your changes to GitHub, use this command.

```
git push -u origin
```

To merge your changes into the release branch:

1. Make sure you've committed all your changes. Use `git status` to check for uncommitted changes.
2. `git push -u origin`, so that GitHub has your changes.
3. Go to <https://github.com/semanticarts/gist>.
4. In the button labeled "Base: . .  .", select the release/n branch.
5. Click on the "Branch:" button, and select from the drop-down list the ISSUE-nn-xx branch you wish to merge into the release/n branch.
6. Click the "New pull request" button.
7. In the dialog box provided, write a thorough description of the change.
8. Select reviewers from the list on the right.
9. Click the "Create pull request" button.

Pull request reviewers should review the pull request, following the procedures outlined at <https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/>.

Once the request has been approved, a person with push access can merge the pull request to the release/n, following the procedures outlined at <https://help.github.com/articles/merging-a-pull-request/>.

The merge will close the feature/fix branch. You or someone else could now proceed to create a new feature/fix branch off the release branch, or to release gist by merging into the master branch (see below).

### gist Hotfix Development with git

If a hotfix needs to be developed between releases, follow the gist Development process outlined above, replacing "release/n" with "hotfix/n", where n is the next sequential hotfix branch number. There's no need to create feature/fix branches unless the hotfix will require several development steps, which should be unusual.

# Releasing gist release/n

Here's the process.

1. Go to <https://github.com/semanticarts/gist>.
2. In the button labeled "base: . .  .", select the master branch.
3. Click on the "Branch:" button, and select from the drop-down list the release/n branch you wish to merge into the master branch for the release.
4. Click the "New pull request" button.
5. In the dialog box provided, write a thorough description of the change.
6. Select reviewers from the list on the right.
7. Click the "Create pull request" button.

Pull request reviewers should review the pull request, following the procedures outlined at <https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/>.

Once the request has been approved, a person with push access can merge the pull request to master, following the procedures outlined at <https://help.github.com/articles/merging-a-pull-request/>.

Final step: Tag the master with the new release number. The release number should be determined in consultation with the team of Ontologists, and based on the principles at <https://semver.org/>. Use this command:

```
git checkout master  
git tag vI.J.K (e.g. v8.0.1)
```

where "`vI.J.K`" is the release number.

## Releasing a Hot Fix

No pull request is required for releasing a hot fix. However, ontologists should agree that the hotfix changes are acceptable before releasing the hotfix.

The process to release a hot fix is merely to tag it.

## Post-Merge Release Process

TODO: Get details on this process

1. Make a copy of the files and change the names to include the version number (e.g. 8.0.0)
2. Edit the version IRIs to include the version numbers e.g. gistAgreement8.0.0.owl
3. Edit the import statements to import the version IRIs.
4. Put the OWL files on the Web server.
5. Update <https://semanticarts.com/gist/> with news about the new release.
6. Announce the release to the world.

<!-- section-nav:start -->

## In this section

- [deprecated - git for gist](deprecated---git-for-gist.md)
- [github for Dummies](github-for-dummies.md)
- [deprecated - gist on GitHub](deprecated---gist-on-github.md)

<!-- section-nav:end -->

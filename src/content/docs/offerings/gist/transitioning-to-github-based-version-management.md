---
title: "Transitioning to GitHub-Based Version Management"
confluence_id: 233242743
source: Transitioning-to-GitHub-Based-Version-Management_233242743.html
---
The current way we manage [deprecated - gist on GitHub](deprecated---gist-change-management/deprecated---gist-on-github.md) is out of sync with standard industry practice for versioning software. This page lists the changes that must be made to  fix that.

# Current Version Control Scheme

## Folder structure

The master copies of the various releases of gist are maintained on the `\\semartsserver\SemanticArts` shared filesystem under the following folders:

`_SemanticArts`

`Offerings`

`gist`

`___workingGistMaster`: edit gist here

`__externallyReleasedGists`: contains a subfolder for each gist version that is visible to the outside world

`__internallyReleasedGists`: contains a subfolder for each gist version that is only visible internally

`git4gist`: files and instructions for releasing gist to github

In what follows, the Windows disk Y: has been mapped to `\\semartsserver\SemanticArts`. For information on mapping to this filesystem, see [Accessing the shared drive](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/23461899/Accessing+the+shared+drive).

## Gist on GitHub

git is released on github at <https://github.com/semanticarts/gist>. We follow the procedures described in detail here: [deprecated - gist on GitHub](deprecated---gist-change-management/deprecated---gist-on-github.md).

## Filenames

gist is authored in a single Visio file using e6. The master file is in `Y:\_SemanticArts\Offerings\gist\___workingGistMaster\OntologyFiles\gistX.x.vsd`.

When noone is editing gist, the Visio file is named `gistX.x-RenameTo-CHECKED-OUT-By-XX.vsd(x)` as a reminder to (informally) check out the file before editing it. This is done by renaming it to something like `gistX.x-CHECKED-OUT-By-MU.vsd(x)`. it should be renamed back to what it was when you are done editing it.

When releasing gist:

1. The Visio file is renamed back to gistX.x.vsd.
2. All OWL files are generated with "X.x" appended to the filename (e.g. gistTimeX.x.owl)
3. All the files are checked into github on the Dev-X.x branch.
4. All the files are copied to a folder named gistx.x.x, where "x.x.x" is replaced with the release number; e.g., 7.5.2 or 8.0.0.
5. A branch is created in github that is named by the release number; e.g., 8.0.0
6. All the files are checked in on that branch using their version-specific names.

# Proposed Version Control Scheme

A full guide to the proposed scheme is at [deprecated - gist Change Management](deprecated---gist-change-management/).

There will be no copies on the internal file server. The github repository will be the only master. We will keep the version-specific subfolders under `Y:\_SemanticArts\Offerings\gist\_externallyReleasedGists` only for historical releases.

The master Visio file will always have the fixed name gist.vsd. OWL files generated from the master will also have fixed names that do not include a version number.

The Documents folder and its readme.txt file will be deleted. The README.md file will remain in the root directory.

A LICENSE.md file will be added to the root directory, containing the text of the Creative Commons license.

# Closing out the old way of doing things

We got into a mess with multiple versions of gist 8.0.0, which was released internally and externally but tweaks were done while still calling it 8.0.0. [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) spent quite a while discovering what was what and where. He determined the following.

1. The best thing to do was to make the formal once and for all no switchies no changies of release of 8.0.0 correspond to the OWL and the Visio that are in the  `__externallyReleasedGists\gist8.0.0`folder.
2. This involved:
   1. Doing a variety of file comparisons to identify and list what changed after that release so it can be re-done. There were just a few things.
   2. Re-creating the gist owl files from the Visio file in the `__externallyReleasedGists\gist8.0.0`folder and verifying that they were no different.
   3. Manually comparing the owl files one by one with the ones we had already,
   4. Changing the 8.0.0 back to X.x and regernating and comparing the files once again, one by one.
   5. Committing the X.x files to git using the old process ([deprecated - gist on GitHub](deprecated---gist-change-management/deprecated---gist-on-github.md).) on the main dev X.x branch.
   6. Changing the X.x back to 8.0.0 and generating the owl once again, and manually comparing differences to be double sure nothing went awry.
   7. In all cases the comparisons only revealed a difference in the e6-generated comment, the OWL was the same.
   8. Creating a new branch on git for the 8.0.0 release and commiting the new version of 8.0.0 on that branch per the process described in detail here: [deprecated - gist on GitHub](deprecated---gist-change-management/deprecated---gist-on-github.md).
   9. Checking out the main X.x dev branch and saving out the .vsd file as a .vsdx file and doing one last commit to git on the main X.x dev branch.

STILL DO DO:

1. Use a test repo to test and debug the process documented in [deprecated - gist Change Management](deprecated---gist-change-management/) to debug the documentation and test whether things work as expected
   1. Copy the files from the X.x release that spawned 8.0.0 into the test repo
   2. Follow the process, playing with different options and pulls and tags etc.
   3. If it worked, go to step 2, other wise keep trying
2. Decide whether to:
   1. Create a brand new repo for moving forward. If we do, can we perhaps back fill the old versions like I did for the other repo?
   2. Or better perhaps, build off of current repo, but move forward with our new process.

## Moving from the old gist way to the new gist way in the existing gist repo

1. Go to branch Dev-X.x and create a new branch called master.
2. Remove the Documents folder, it had out of date documentation
3. Replace the OntologyFiles folder at D:\github\gist with the contents of D:\github\test-repo\OntologyFiles. (The test-repo files were renamed so as not to include X.x in their names; nor do they reference X.x internally.)
4. Remove the D:\github\gist\Documents folder.
5. Stage all files.
6. Commit changes with this comment: "============ REFRESH --- NEW WAY TO MANAGE GIST ============"
7. Tag the master branch with v8.0.0
8. Push all the changes to "origin" (github).
9. Now the repo is ready to be used in the new way.

This is what it looked like immediately after doing this work.

![](/offerings/attachments/233242743/370409477.png)

NOTE:  The branch in pink called 8.0.0 has the version numbers in it, per the old way. The master branch tagged with v8.0.0 has files that do not have version numbers in the file names or the ontology URIs. Moving forward, that is all that will be on git. The version numbers are only added off of git in the publish process.

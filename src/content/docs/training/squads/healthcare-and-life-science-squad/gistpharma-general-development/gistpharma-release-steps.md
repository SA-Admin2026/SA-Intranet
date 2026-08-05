---
title: "gistPharma release steps"
confluence_id: 3065217026
source: "gistPharma-release-steps_3065217026.html"
---

Based on steps outlined on: [gist Extension Management and Development](https://semarts.atlassian.net/wiki/spaces/OF/pages/2397274126/gist+Extension+Management+and+Development#Sub-gist-Release-of-Private-Repository-or-Pre-Production-Release)

Until we clean up our develop branch from materials that shouldn’t be released, we create a release branch from main and selectively merge only the files that need to be released from develop one by one.

1. create branch `release/v0.9.1` from `main`, check it out
2. check out files ready for release from `develop` into the release branch, add, commit, and push

   1. E.g. `git checkout develop -- gistPharmaTaxo.ttl`
3. create a PR to merge the release branch to `main` and approve it, check out main, pull
4. run `onto_tool`: `onto_tool bundle -v version 0.9.1 bundle.yaml` to create the release directory, create a zip file of this directory.
5. Publish the release on GitHub.

   1. Navigate to <https://github.com/semanticarts/gistPharma/releases/new>
   2. Selecting `main` as the target.
   3. Select a tag name. Use “v” + the release number; e.g., `v0.9.1`.
   4. Add a title; e.g. “Version 0.9.1”.
   5. Attach the zip file the page.
   6. Select `Set as a pre-release`.
   7. Click on `Publish release`.

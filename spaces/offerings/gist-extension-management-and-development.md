---
title: "gist Extension Management and Development"
confluence_id: 2397274126
source: gist-Extension-Management-and-Development_2397274126.html
---

# gist Extension Management and Development

This page provides documentation on how to set up and maintain a gist extension (“sub-gist”) GitHub repository. Many of these instructions also apply to other Semantic Arts-owned ontologies that are not gist extensions, such as the [versioning](https://github.com/semanticarts/versioning-ontology) and [operators](https://github.com/semanticarts/operators-ontology) ontologies.

- [Sub-gist Inventory](#gistExtensionManagementandDevelopment-Sub-gistInventory)
- [Horizontal vs Vertical Sub-gists](#gistExtensionManagementandDevelopment-HorizontalvsVerticalSub-gists)
- [Repository Manager](#gistExtensionManagementandDevelopment-RepositoryManager)
- [Setting up a Sub-gist GitHub Repository](#gistExtensionManagementandDevelopment-SettingupaSub-gistGitHubRepository)
  - [General Repository Settings](#gistExtensionManagementandDevelopment-GeneralRepositorySettings)
- [Sub-gist Maintenance and Development](#gistExtensionManagementandDevelopment-Sub-gistMaintenanceandDevelopment)
- [Sub-gist Release](#gistExtensionManagementandDevelopment-Sub-gistRelease)
  - [Sub-gist Release of Private Repository or Pre-Production Release](#gistExtensionManagementandDevelopment-Sub-gistReleaseofPrivateRepositoryorPre-ProductionRelease)
    - [Sample Minimal Bundle Configuration File for Private Repository or Pre-Production Release](#gistExtensionManagementandDevelopment-SampleMinimalBundleConfigurationFileforPrivateRepositoryorPre-ProductionRelease)
  - [Sub-gist Release of Public Repository / Production Release](#gistExtensionManagementandDevelopment-Sub-gistReleaseofPublicRepository/ProductionRelease)
    - [Sample Extended Bundle Configuration File for Public Repository](#gistExtensionManagementandDevelopment-SampleExtendedBundleConfigurationFileforPublicRepository)

# Sub-gist Inventory

*As of 2025-07-01*

| **Sub-gist** | **Manager** | **Repository** |
| --- | --- | --- |
| gistAcct | Jamie | <https://github.com/semanticarts/gistAcct> |
| gistBusiness | ? | <https://github.com/semanticarts/gistBusiness> |
| gistHR | Rebecca | <https://github.com/semanticarts/gistHR> |
| gistCyber | Ryan | <https://github.com/semanticarts/gistCyber> |
| gistProfSrv | Dylan | <https://github.com/semanticarts/gistProfSrv> |
| gistPayroll | Dylan | <https://github.com/semanticarts/gistPayroll> |
| gistComputing (including both software and hardware) | Phil | <https://github.com/semanticarts/gistComputing> |
| gistPharma | Irina and Doug | <https://github.com/semanticarts/gistPharma> |
| gistBFO (public) | Dylan and Kate | <https://github.com/semanticarts/gistBFO> |

**Sub-gists are private by default:** the GitHub repositories that house them are private and they are not released to the public by any other means. Requests to publish a sub-gist, via a GitHub public repository or otherwise, should be addressed to the leadership team (the Governance Committee, CEO, President, and COO) and include rationale. Whether and when to make these ontologies public is a *strategic* decision, not a *technical* one, and is thus not within the purview of its maintainers.

Many of the sub-gists are available to current clients under the licensing agreement you will see in the GitHub repositories.

There are a couple of old sub-gists (gistFin and gistGeo) in GitHub dating from 2017 that are retained for reference but don’t currently need management.

Much of this applies to other Semantic Arts ontologies that are not sub-gists, such as the versioning and operators ontologies currently being implemented (2023-08). However, the namespace and ontology IRIs should follow the guidance in <https://semarts.atlassian.net/wiki/spaces/TRR/pages/edit-v2/2428796963> .

# Horizontal vs Vertical Sub-gists

A vertical market is one in which vendors offer goods and services specific to an industry, trade, profession, or other group of customers with specialized needs. A horizontal market is one in which a product or service meets a need of a wide range of buyers across different sectors of an economy. (Wikipedia)

Typical examples of horizontal markets are accounting, HR, IT, payroll; all companies have these (perhaps less formally in small companies, but the functions still exist). Examples of vertical markets are professional services, HVAC, financial services, insurance, automobile manufacturers, health care providers.

Some domains can be both horizontal and vertical; a good example is the legal profession. Legal services are needed by many or most industries, but law practices themselves are verticals. Question: can these industries be served by a single ontology, or do we need one for law as a horizontal and one for law as a vertical (sort of an outside vs inside perspective).

Our sub-gists fall into these categories as follows:

- Horizontal: gistHR, gistPayroll
- Vertical: gistPharma, gistProfSrv
- Software is like law, both or either horizontal or vertical.

# Repository Manager

The repository manager is responsible for ensuring that maintenance and development processes and practices remain uniform across the gist and sub-gist repositories, as delineated below. This person is typically a stakeholder in the sub-gist - I.e., works on a client or internal project that uses the sub-gist - but is not necessarily the primary developer of the ontology or the gatekeeper of all PRs. Current managers are shown in the table above. These are subject to change as desired - e.g., when people roll off or on projects.

# Setting up a Sub-gist GitHub Repository

In order to simplify use and maintenance, the sub-gist and gist core repositories should have the same structure and processes. These instructions are detailed but the whole thing takes no more than an hour.

Our goal is to keep the management light by not introducing a lot of files and functionality that exist in gist that we don’t currently have or need in the sub-gists; thus the pared down `bundle.yaml` that outputs only Turtle files and currently no documentation, for example.

Steps to setting up a new sub-gist repository:

1. Create the repository, using the name of the ontology as the name of the repository.
2. Create a README - if you don’t have content just add a line or two.
3. Add a `.gitignore` file following the [gist example](https://github.com/semanticarts/gist/blob/develop/.gitignore).
4. Add the sub-gist license - download [LICENSE.txt](https://datacentric.sharepoint.com/:t:/s/staff/EfOYnwz4ez1Jmp5Q_S-BSbYBko-bLhOsQZr9mqgEVKLPTA?e=ocPzuA) and put it at the root level of your repository. Do not use the Word document, which exists only for review purposes if the license needs to be updated.
5. Create two branches, `main` and `develop`. As usual, `develop` is the primary development branch and target of PRs; `main` is only modified during a release.

Alternatively, you can instantiate your new repository with a template repository that has been set up in the Semantic Arts GitHub organization. This template repository is here: <https://github.com/semanticarts/SemanticArtsSubGistTemplate>

When you’re the above page, you can create your repository from the button at the top right, following the naming convention from step 1 above. Make sure to toggle the option to “Include all branches”. See the screenshots below for direction. Then you should double-check the `.gitignore` and LICENSE.txt to make sure it’s the appropriate version for your sub-gist after your repository has been created.

![image-20250811-193128.png](attachments/2397274126/3066888205.png)![image-20250811-193229.png](attachments/2397274126/3067019267.png)

## General Repository Settings

General repository settings are managed at [https://github.com/semanticarts/<repo>/settings](https://github.com/semanticarts/gist/settings).

1. Default branch is `develop`. This ensures that, by default, PRs are submitted to `develop`.
2. Merging pull requests. There are three options, of which you can allow any or all. Any that are allowed will show up as options when you merge a PR. I prefer the rebase merge to reduce clutter in the history, but for reasons unknown to me, there are occasions when the rebase doesn’t work and you have to do either a merge commit or a squash merge.

   1. A straight merge merges each commit from the head branch to the base branch, plus an additional commit for the merge itself.
   2. A rebase merge merges each commit from the head branch to the base branch but does not create a merge commit
   3. A squash merge compresses the entire branch history into a single commit, so the history of the branch development is not retained.
3. Turn on Automatically delete head branches. This eliminates the clutter of dead branches in the repository. Note, however, that *you must create a branch protection rule* for `develop` (see step 6). Protected branches will not be deleted automatically after a merge, but if you don’t have a branch protection rule, `develop` will be deleted after a merge to `main`. You can always restore a deleted branch, but it’s best not to mess around with `develop`.
4. Set up branch protection rules on `main` and `develop` to mirror those in gist. These are configured at [https://github.com/semanticarts/<repo>/settings/branches](https://github.com/semanticarts/gist/settings/branches).

   1. Require a pull request before merging.
   2. Require one approval (in practice more reviews are generally requested, but the repository requires only one).
   3. Restrict who can push to the branch. This will be you, and possibly one or more delegates as well. Note that Jamie is the account administrator and has full rights over all repositories, so doesn’t have to be specifically selected at the repository level.
   4. Restrict pushes that create matching branches (under c).
   5. Require status checks to pass before merging. This doesn’t do anything if you haven’t defined any status checks, but it uncovers the rule in f. There are no GitHub status checks defined in gist.
   6. Require branches to be up to date before merging (under e).
5. Add the initial OWL file to the `develop` branch.

   1. Ensure that this is in Turtle format and the serializer has been run on it.
   2. Use the gist namespace. Note: if you are following these instructions to set up a non-gist Semantic Arts ontology, use the namespace and ontology IRI guidance at <https://semarts.atlassian.net/wiki/spaces/TRR/pages/edit-v2/2428796963> .
   3. Ontology IRI: `https://w3id.org/semanticarts/ontology/gistPayroll`
   4. Version IRI: `https://w3id.org/semanticarts/ontology/gistPayrollX.x.x`
6. Copy the contents of the `tools` directory in the gist repository into the top-level of the repository. (You will then run `tools/setup.cmd` to set up your local repository.) You need to copy:

   1. `setup.cmd`
   2. `pre-commit`
   3. `serializer` folder
   4. Other files and folders found in gist tools are not needed at this point.
7. Do an initial release as a checkpoint, starting with version `0.0.1` unless the current ontology file already has a version number. You should stay in major version 0 until the ontology is stable enough for a version 1 release.

   1. *If there are other ontologies that import yours, you will need to do this first release so that they can import a specific version.* Otherwise it’s recommended but optional.

# Sub-gist Maintenance and Development

*Sub-gist development is a joint effort between all stakeholders.* For example, gistHR is used by IDA and internally at SA, so we have been holding meetings to agree on new development, similar to what we do for gist itself.

1. All sub-gists should follow the gist maintenance and development practices outlined in the gist docs:

   1. [gist Style Guide](https://github.com/semanticarts/gist/blob/develop/docs/gistStyleGuide.md)
   2. [Practices for contributing to the repository](https://github.com/semanticarts/gist/blob/develop/docs/Contributing.md)
   3. [Change and release management](https://github.com/semanticarts/gist/blob/develop/docs/ChangeAndReleaseManagement.md) (if and when you start doing official releases).

      1. Some practices can be relaxed in view of the fact that these are private repositories with a small user group.
   4. [Versioning](https://github.com/semanticarts/gist/blob/develop/docs/ChangeAndReleaseManagement.md#versions-and-version-numbering)
2. A new release of gist will trigger a release of each sub-gist, to be completed as soon as possible. Changes required:

   1. Update the gistCore import IRI.
   2. Update the sub-gist version IRI: increment the major, minor, or patch segment following the change in the gist version number (e..g, a major gist upgrade entails a major upgrade of the sub-gists).
   3. Content changes as necessary, to be coordinated by the repository manager
3. Similarly, any release of an ontology upstream from the sub-gist in the [import tree](https://semarts.atlassian.net/wiki/spaces/OF/pages/2397274126/gist+Extension+Management+and+Development#Import-Tree) will trigger a release of the sub-gist.

# Sub-gist Release

There are two versions of the release process, one for <https://semarts.atlassian.net/wiki/spaces/OF/pages/2397274126/gist+Extension+Management+and+Development#Sub-gist-Release-for-Private-Repository-%2F-Pre-Production-Release> and one for <https://semarts.atlassian.net/wiki/spaces/OF/pages/2397274126/gist+Extension+Management+and+Development#Sub-gist-Release-for-Public-Repository-%2F-Production-Release>. The latter includes additional functionality and artifacts, but of course you can include those in a private repository as well, making appropriate modifications to the bundle configuration file `bundle.yaml`.

## Sub-gist Release of Private Repository or Pre-Production Release

Follow these steps to release a sub-gist in a private repository and/or pre-production release of a public repository. This is a shortened process of the [gist release](gist/gist-change-and-release-management/gist-release-management-ontologists.md), because you are just creating a small release package and posting it on GitHub. If and when the ontology becomes public and there are public releases, you will need the more complicated process used by gist.

1. Install `onto_tool` if it is not already installed: `pip install onto-tool`. This is the tool used to create the release package. See details and documentation at [ontology-toolkit](https://github.com/semanticarts/ontology-toolkit).

   1. You will need `v1.8.0` or higher in order to use some of the features described below. Use `pip install --upgrade onto_tool` to upgrade.
2. Select the branch from which you will prepare the merge to `main`. There are two options, depending on whether there is enough activity in the repository that new development needs to continue on `develop` while the release is being prepared; in this case you will need a separate release branch so as not to pick up changes on `develop`not slated for release.

   1. Case 1: Create a release branch.

      1. When `develop` contains all and only the updates that will be released, make a new branch from `develop` called (for example)`release/v0.1.0`. Any updates required for the release are submitted to this branch. New development continues on `develop` so that it does not pollute the release branch.
   2. Case 2: Use the `develop` branch. No changes should be merged to `develop` other than those to be included in the release.
   3. The branch you have selected is referred to as the *staging branch* in the remaining instructions, unless a step specifically involves either `develop` or a release branch.
3. Check out the staging branch.
4. Make a copy of the gistHR bundle configuration file `bundle.yaml`, [shown below](https://semarts.atlassian.net/wiki/spaces/OF/pages/2397274126/gist+Extension+Management+and+Development#Sample-Bundle-Configuration-File), which is a simplified version of the gist file, and modify it as needed for your repository. This probably just involves changing the value of the `bundle` variable on line 1 and the `variables.name` value on line 3. The latter is used in naming the directory created during the release. This file will be committed to GitHub in the steps below and therefore this step doesn’t need to be repeated after the first release.

   1. If the ontology matures to the point where you need additional release functionality like validation, documentation, and migration scripts, refer to the gist repository and add back things to `bundle.yaml` that were removed from the [gist version](https://github.com/semanticarts/gist/blob/develop/bundle.yaml) in your initial version.
5. *If you are using a release branch*, you will now merge the release branch to develop.

   1. Create a PR to merge the release branch to `develop`. Do *not* merge changes from `develop` to this release branch first, as this defeats the purpose of the release branch.
   2. Merge this PR. If, as recommended above, you have configured the repository to automatically delete branches after merge, you must restore it.
6. Create a PR to merge the staging branch to `main`.
7. Merge this PR.

   1. There will potentially be merge conflicts here, since the staging branch contains all the new changes being released. Resolve these conflicts in favor of the staging branch.
   2. *If you are using a release branch* and you have configured the repository settings as recommended above, this branch is automatically deleted upon merge.
   3. *If you are using* `develop` *rather than a release branch*, and you have configured branch protection rules as outlined above, `develop` will not be automatically deleted after the merge. If not, watch out! The `develop` branch will be deleted and you will need to restore it. Then go back and apply branch protection rules so that this doesn’t happen again.
8. Note that making a release is the *only time* you will ever merge to `main`, and you will *never* merge from `main` back to any other branch.
9. Check out `main`.
10. Open a terminal window at, or `cd` into, the root of your repository.
11. Run `onto_tool`: `onto_tool bundle -v version [version-number] bundle.yaml`. E.g., `onto_tool bundle -v version 0.1.0 bundle.yaml`.

    1. This creates a directory named (for example) `gistHR0.1.0_release`. The folder will be named based on the name output specified in `bundle.yaml`.
    2. If you run this more than once, you should delete the previous release folder, else you may get errors during the build.
    3. Do *not* commit this directory to the repository.
12. Create a zip file of this directory. Do *not* commit this file to the repository.
13. Publish the release on GitHub.

    1. Navigate to `https://github.com/semanticarts/<your-repo-name>/releases/new` or from the front page of your repository, click on `Create a new release` in the right sidebar.
    2. Selecting `main` as the target.
    3. Select a tag name. Use “v” + the release number; e.g., `v0.1.0`.
    4. Add a title; e.g. “Version 0.1.0”.
    5. Attach the zip file the page.
    6. Select `Set as the latest release` if it is a production release (i.e., major release version 1 or greater) or if not, `Set as a pre-release`.
    7. Click on `Publish release`.
14. Releases appear on the page `https://github.com/semanticarts/<your-repo-name>/releases`; there is a link to this page on the righthand side of the front page of the repository.
15. The release assets include the zip file of the release package, as well as compressed files of the source code. (Click on `Assets` if you don't see these.)

    1. The source code is the raw source code as it exists in the repository, not the bundled version, so the version number is `X.x.x`, etc.

### Sample Minimal Bundle Configuration File for Private Repository or Pre-Production Release

`bundle.yaml` from [gistHR](https://github.com/semanticarts/gistHR/blob/main/bundle.yaml):

```
bundle: gistHR
variables:
  name: "gistHR"
  version: "X.x.x"
  input: "."
  rdf-toolkit: "{input}/tools/serializer/rdf-toolkit.jar"
  output: "{name}{version}_release"
tools:
- name: "serializer"
  type: "Java"
  jar: "{rdf-toolkit}"
  arguments:
    - "-sfmt"
    - "turtle"
    - "-tfmt"
    - "turtle"
    - "-sdt"
    - "explicit"
    - "-dtd"
    - "-sni"
    - "-ibn"
    - "-s"
    - "{inputFile}"
    - "-t"
    - "{outputFile}"
actions:
- action: "mkdir"
  directory: "{output}"
- action: "copy"
  message: "Substituting version numbers."
  source: "{input}"
  target: "{output}"
  replace:
    from: "X.x.x"
    to: "{version}"
  rename:
    from: "(.*)\\.ttl"
    to: "\\g<1>{version}.ttl"
  includes:
    - "*.ttl"
  excludes:
    - "example.ttl"
- action: "definedBy"
  message: "Adding rdfs:isDefinedBy."
  source: "{output}"
  target: "{output}"
  includes:
    - "*.ttl"
- action: "transform"
  message: "Turtle serialization."
  tool: "serializer"
  source: "{output}"
  target: "{output}"
  includes:
    - "*.ttl"
  rename:
    from: "(.*)\\.ttl"
    to: "formatted_\\g<1>.ttl"
- action: "move"
  source: "{output}"
  target: "{output}"
  includes:
    - "formatted_*.ttl"
  rename:
    from: "formatted_(.*)\\.ttl"
    to: "\\g<1>.ttl"
```

## Sub-gist Release of Public Repository / Production Release

1. This follows a similar process to the private repository / pre-production release, but you will need additional artifacts and possibly additional functionality and therefore an expanded version of `bundle.yaml`.
2. Additional artifacts:

   1. README
   2. License. Note: a license should be included in *any* public repository, whether or not there is a production release. You can copy the [gist license](https://github.com/semanticarts/gist/blob/develop/LICENSE.txt).
   3. Perhaps others, such as examples (see the approach to examples in the [versioning ontology](https://github.com/semanticarts/versioning-ontology/tree/develop/examples) and the [operators ontology](https://github.com/semanticarts/versioning-ontology/tree/develop/examples)), materialized subclasses, additional documentation, etc.
3. Possible additional processes, such as ontology validation.
4. Modify the expanded `bundle.yaml` shown below, copied from the [versioning ontology](https://github.com/semanticarts/versioning-ontology/blob/develop/bundle.yaml).
5. As above, as the ontology matures you may want to introduce additional functionality and artifacts to the release, in which case you can copy or modify portions of the [gist bundle configuration file](https://github.com/semanticarts/gist/blob/develop/bundle.yaml).

#### Sample Extended Bundle Configuration File for Public Repository

`bundle.yaml` from [versioning ontology](https://github.com/semanticarts/versioning-ontology/blob/develop/bundle.yaml):

```
bundle: versioning-ontology
variables:
  name: "versioning-ontology"
  version: "X.x.x"
  input: "."
  rdf-toolkit: "{input}/tools/serializer/rdf-toolkit.jar"
  output: "{name}{version}_release"
tools:
- name: "serializer"
  type: "Java"
  jar: "{rdf-toolkit}"
  arguments:
    - "-sfmt"
    - "turtle"
    - "-tfmt"
    - "turtle"
    - "-sdt"
    - "explicit"
    - "-dtd"
    - "-sni"
    - "-ibn"
    - "-s"
    - "{inputFile}"
    - "-t"
    - "{outputFile}"
# - name: "xml-serializer"
#   type: "Java"
#   jar: "{rdf-toolkit}"
#   arguments:
#     - "-sfmt"
#     - "turtle"
#     - "-tfmt"
#     - "rdf-xml"
#     - "-sdt"
#     - "explicit"
#     - "-dtd"
#     - "-sni"
#     - "-ibn"
#     - "-s"
#     - "{inputFile}"
#     - "-t"
#     - "{outputFile}"
# - name: "json-serializer"
#   type: "Java"
#   jar: "{rdf-toolkit}"
#   arguments:
#     - "-sfmt"
#     - "turtle"
#     - "-tfmt"
#     - "json-ld"
#     - "-sdt"
#     - "explicit"
#     - "-dtd"
#     - "-sni"
#     - "-ibn"
#     - "-s"
#     - "{inputFile}"
#     - "-t"
#     - "{outputFile}"
actions:
- action: "mkdir"
  directory: "{output}"
- action: "copy"
  message: "Substituting version numbers."
  source: "{input}"
  target: "{output}"
  replace:
    from: "X.x.x"
    to: "{version}"
  rename:
    from: "(.*)\\.ttl"
    to: "\\g<1>{version}.ttl"
  includes:
    - "*.ttl"
- action: "definedBy"
  message: "Adding rdfs:isDefinedBy."
  source: "{output}"
  target: "{output}"
  includes:
    - "*.ttl"
- action: "transform"
  message: "Turtle serialization."
  tool: "serializer"
  source: "{output}"
  target: "{output}"
  includes:
    - "*.ttl"
  rename:
    from: "(.*)\\.ttl"
    to: "formatted_\\g<1>.ttl"
- action: "move"
  source: "{output}"
  target: "{output}"
  includes:
    - "formatted_*.ttl"
  rename:
    from: "formatted_(.*)\\.ttl"
    to: "\\g<1>.ttl"
- action: "copy"
  message: "Copying examples."
  source: "{input}/examples"
  target: "{output}/examples"
- action: "copy"
  message: "Copying queries."
  source: "{input}/queries"
  target: "{output}/queries"
- action: "copy"
  message: "Copying license text."
  source: "LICENSE.txt"
  target: "{output}/LICENSE.txt"
- action: "copy"
  message: "Copying readme."
  source: "README.md"
  target: "{output}/README.md"
- action: "markdown"
  message: "Formatting readme."
  source: "{output}/README.md"
  target: "{output}/README.html"
```

---
title: "gist Release Management: Ontologists"
confluence_id: 1126760539
source: 1126760539.html
---

# gist Release Management: Ontologists

- [Introduction](#gistReleaseManagement:Ontologists-Introduction)
- [Release Process](#gistReleaseManagement:Ontologists-ReleaseProcess)
  - [Leading up to the Release](#gistReleaseManagement:Ontologists-LeadinguptotheRelease)
  - [Migration Scripts and Documentation (Major Release Only)](#gistReleaseManagement:Ontologists-MigrationScriptsandDocumentation(MajorReleaseOnly))
  - [Create a Release Branch](#gistReleaseManagement:Ontologists-CreateaReleaseBranch)
  - [Review the Bundle Configuration File](#gistReleaseManagement:Ontologists-ReviewtheBundleConfigurationFile)
  - [Run Preliminary Test Builds](#gistReleaseManagement:Ontologists-RunPreliminaryTestBuilds)
  - [Compile Release Notes](#gistReleaseManagement:Ontologists-CompileReleaseNotes)
  - [Test Logical Consistency](#gistReleaseManagement:Ontologists-TestLogicalConsistency)
  - [Add Release Date to gistCore History Note](#gistReleaseManagement:Ontologists-AddReleaseDatetogistCoreHistoryNote)
  - [Generate the Release Package](#gistReleaseManagement:Ontologists-GeneratetheReleasePackage)
  - [Validate the Release Package](#gistReleaseManagement:Ontologists-ValidatetheReleasePackage)
  - [Submit Pull Requests to Develop and Main](#gistReleaseManagement:Ontologists-SubmitPullRequeststoDevelopandMain)
  - [Create a GitHub Release](#gistReleaseManagement:Ontologists-CreateaGitHubRelease)
  - [Distribute the Release Package](#gistReleaseManagement:Ontologists-DistributetheReleasePackage)
    - [Latest Release: gist 13.0.0](#gistReleaseManagement:Ontologists-LatestRelease:gist13.0.0)
  - [Post-Release Tasks](#gistReleaseManagement:Ontologists-Post-ReleaseTasks)
    - [Test the Release Download](#gistReleaseManagement:Ontologists-TesttheReleaseDownload)
    - [Manage GitHub Projects](#gistReleaseManagement:Ontologists-ManageGitHubProjects)
    - [Manage GitHub Branches](#gistReleaseManagement:Ontologists-ManageGitHubBranches)
    - [gist-doc Documentation](#gistReleaseManagement:Ontologists-gist-docDocumentation)
    - [Periodic Table of gist](#gistReleaseManagement:Ontologists-PeriodicTableofgist)
- [Appendix 1. Contents of the Release Package](#gistReleaseManagement:Ontologists-Appendix1.ContentsoftheReleasePackage)
- [Appendix 2. Creating a New Project](#gistReleaseManagement:Ontologists-Appendix2.CreatingaNewProject)
- [Appendix 3. Bundle Configuration](#gistReleaseManagement:Ontologists-Appendix3.BundleConfiguration)
  - [Documentation Files](#gistReleaseManagement:Ontologists-DocumentationFiles)
  - [Ontology Files](#gistReleaseManagement:Ontologists-OntologyFiles)
- [Appendix 4. Release Checklist](#gistReleaseManagement:Ontologists-Appendix4.ReleaseChecklist)
  - [Release Checklist Template](#gistReleaseManagement:Ontologists-ReleaseChecklistTemplate)

# Introduction

This page describes internal release processes for the ontologists. The release checklist for developers is outlined in[gist Release Checklist: Developers](gist-release-checklist-developers.md) . The developers' release process is initiated when they receive the release package from the ontologists.

The parts of this process relevant to the public, such as release cycle, version numbering, etc. are also included in the [Change and Release Management](https://github.com/semanticarts/gist/blob/develop/docs/ChangeAndReleaseManagement.md) document in the gist GitHub repository. Those parts of the process are not repeated here, in order to prevent sync problems, and should be reviewed where relevant.

Ontologists with recent release experience to consult for backup: Dylan Abney, Steven Chalem, Rebecca Younes.

# Release Process

Each release has an associated GitHub project, which includes all the issues and PRs targeted for that release. A rotating release manager is selected and assigned to the release. The release manager’s responsibilities are described in detail in subsequence sections. For a quick overview, refer to the [Release Checklis](https://semarts.atlassian.net/wiki/spaces/OF/pages/1126760539/gist+Release+Management+Ontologists#Release-Checklist)t below.

## Leading up to the Release

1. Use the project board to track the status of associated issues and PRs. The links to the project board are found on the top menu of the [gist GitHub repository](https://github.com/semanticarts/gist) under [Projects](https://github.com/semanticarts/gist/projects?query=is%3Aopen).
2. Send email reminders to issue assignees and PR reviewers for PRs that have not yet been merged.
3. The project for the next release should already have been created during the previous release (see [Post-Release Tasks](https://semarts.atlassian.net/wiki/spaces/OF/pages/1126760539/gist+Release+Management+Ontologists#Post-Release-Tasks) below); if not, create the new project by following the steps in the section Creating a New Project below.
4. Any planned issues that have not yet been addressed should be re-assigned to the next project.
5. If a gist Release Checklist issue does not already exist in the project, create one from the [Release Checklist](https://semarts.atlassian.net/wiki/spaces/OF/pages/1126760539/gist+Release+Management+Ontologists#Release-Checklist) below.

## Migration Scripts and Documentation (Major Release Only)

For a major release, create an issue for migration scripts, and list the major changes that require automated migration scripts. Some major changes do not require automated migration: e.g., a term that is removed without a replacement. Some migrations can be partially automated but also require manual steps; see the gist 13 address migration as an example. In this case narrative documentation of the manual steps should be provided in the migration folder. Be sure to add this issue to the GitHub project.

A release of a new eBook (major version only) and Widoco documentation from the `gist-doc` [GitHub repository](https://github.com/semanticarts/gist-doc) should follow the gist release as soon as possible. These are currently managed by [peter.winstanley (Unlicensed)](https://semarts.atlassian.net/wiki/people/5e386d7414836c0cc108da66?ref=confluence).

1. Create an issue in the `gist-doc` [repository](https://github.com/semanticarts/gist-doc).
2. Add the issue to the gist release project.
3. Contact Peter to get the ball rolling.
4. Continue working with him to ensure that the documentation is released soon after the gist release - in a week or so.

## Create a Release Branch

Create a new remote branch for the release from `develop`. The name consists of `release/` followed by the version number. - e.g., `release/12.1.0`. This allows development to continue on `develop` while the release is being prepared on the release branch. This could be done earlier if release and development work have bifurcated at an earlier stage. Note that branch protection rules apply automatically to these branches to limit push access.

At this point all edits to the repository for the release should be submitted as pull requests to the release branch, not to `develop`. Note that you do not commit changes directly to the release branch.

## Review the Bundle Configuration File

Review `bundle.yaml` to see if any additional files should be added to the actions for creating documentation and migration files and ontology file serializations. See details in the section [Bundle Configuration](#) below.

## Run Preliminary Test Builds

The actual release will proceed more smoothly if you start running preliminary test builds to check the contents of the release package at this point. This will allow issues to be added and resolved on the release branch before you get to the final stages of the release, rather than having to make additional changes after the release branch has been merged to `main` and `develop`.

## Compile Release Notes

The directory `<project-root>/docs/release_notes` includes a set of release notes, one per PR, that must be compiled into the `<project-root>/docs/ReleaseNotes.md` file. These have been put into separate files to avoid messy merge conflicts when multiple issues are being worked on simultaneously. On the release branch, the release manager should:

1. Merge all individual release notes into the top of the `ReleaseNotes.md` file. Each file should contain a header indicating whether it belongs in the major, minor, or patch sections. Verify that the release note has been placed in the correct category based on the [versioning practice documented in Change and Release Management](https://github.com/semanticarts/gist/blob/develop/docs/ChangeAndReleaseManagement.md#versions-and-version-numbering).
2. Combine multiple release notes into a single note where appropriate; e.g., for a variety of annotation changes you can change the note to read something like “Miscellaneous annotation updates. Issues …”, where the second sentence lists all related issues.
3. Delete all the individual release note files, but not the directory or the template file (`release_note_template.md`).
4. Clean up and reformat the notes as needed, ensuring compliance with the [Contributing documentation](https://github.com/semanticarts/gist/blob/master/docs/Contributing.md). For consistency throughout the document, bullet points should be symbolized with dash rather than asterisk.
5. Add any notes that have been omitted in case these were not caught in PR reviews.
6. Make sure that any compatibility-breaking changes for major releases are addressed in the migration queries (either mitigated or reported). These also should have been caught during PR review.
7. Replace “X.x.x” in the section title and the Import URL with the correct version number.
8. For a major release, add the following paragraph below the section title. See the notes for Release 10.0.0 as an example.  
   ”This is a major release, which includes changes that break compatibility with previous versions of gist. See the [migration guide](./MajorVersionMigration.md) for documentation on updating existing gist-based ontologies and instance data. Migration scripts are included to facilitate the upgrade process." (Last sentence included only if there are migration scripts.

## Test Logical Consistency

Run all the ontologies together through a reasoner (either Pellet or HermiT in Protégé are fine) to ensure logical consistency. This should have been done with each PR, but is not always the case. Any errors must be corrected on the release branch. Please consult [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence) if you are not sure how to proceed.

## Add Release Date to gistCore History Note

After all other work has been done and you have fixed the release date, add the release date to the `skos:historyNote` in the ontology declaration of `gistCore`. Following the existing notes, it should be of the form “gist X.x.x released yyyy-MMM-dd” (e.g., “gist 14.0.0 released 2025-Oct-31”).

Note: the official release date is the date the release is posted to GitHub, not to the SA website.

## Generate the Release Package

1. Generate the release package from the release branch using the `onto_tool` bundler:

   1. Make sure you have the most recent version of the [ontology toolkit](https://pypi.org/project/onto-tool) by running `pip install -U onto-tool`.
   2. If you have already run `onto_tool` for the present release and are preparing to run it again in the same folder, first delete any subfolder (such as `gist12.0.0_webDownload`) that was created by a previous run.
   3. Create the release package from `main` by running the bundle function of [ontology-toolkit](https://github.com/semanticarts/ontology-toolkit), providing the new version number as an argument. This adds version numbers to ontology IRIs; inserts an `rdfs:isDefinedBy` assertion for every ontology term referencing the ontology that the term is defined in; generates Turtle, JSON-LD, and RDF/XML ontology files; and adds additional files, such as release notes and license information, into the release package.
   4. Bundler command: `onto_tool bundle -v version [version-number] bundle.yaml`
   5. For example: `onto_tool bundle -v version 12.0.0 bundle.yaml`
2. The bundler creates a directory named (for example) `gist12.0.0_webDownload`, where `12.0.0` is the version number of the release.

## Validate the Release Package

1. The contents of this release package are outlined in [Contents of the Release Package](https://semarts.atlassian.net/wiki/spaces/OF/pages/1126760539/gist+Release+Management+Ontologists#Appendix-1.-Contents-of-the-Release-Package). Review the release package and its directory structure.
2. Test internal links in all documentation files, both HTML and Markdown versions, in both the `/docs` and `/migration` folders and subfolders, to make sure the “patching” operation of the bundler has worked properly. Links in HTML files should link to other HTML files; links in Markdown files should link to other Markdown files. Examples:

   1. Links to `./MajorVersionMigration.md` and `../migration/v13.0` in the Release 13.0.0 section of `ReleaseNotes.md`. (The folder link will not work in the Markdown file.)
   2. Links to `../../docs/MajorVersionMigration.md`, `./AddressMigration.md`, and `../../docs/models/AddressGuidance.md` in `migration/v13.0/README.md`.
3. Review the HTML versions of the Markdown files for formatting problems, paying special attention to tables. Left-justification seems to work best. This can be achieved with the colon placement shown below:

```
| gist 12 | gist 13 |
| :------- | :------- |
| `gist:hasCommunicationAddress`  |`gist:hasAddress` |
| `gist:StreetAddress`  |`gist:PhysicalAddress` |
| `gist:PostalAddress`  |`gist:PhysicalAddress` |
| `gist:EmailAddress`  |`gist:ElectronicAddress` |
| `gist:ElectronicMessageAddress`  |`gist:ElectronicAddress` |
| `gist:TelephoneNumber`  |`gist:ElectronicAddress` |
```

4. Ask two or three other ontologists to double-check the release package.
5. Submit a PR to the release branch for any issues found during the packaging process.

## Submit Pull Requests to Develop and Main

1. Submit two PRs:

   1. From the release branch to `develop`.
   2. From the release branch to `main`. Do *not* submit a PR to merge `develop` to `main`, as this defeats the purpose of allowing continued work on `develop` without affecting the release.
2. Note: it is best to submit the two PRs at one time. The repository has been configured to automatically delete a merged source branch, but this is prevented if there is another PR from the same source branch. Otherwise, after doing one merge, the release branch must be restored using the “Restore branch” button in order to create the second PR.
3. Resolve merge conflicts with `develop`. If other work has proceeded on develop, you will need to be careful with merge conflicts: changes from both `develop` and the release branch will normally need to be preserved. Ask for help from those who have fixed issues in `develop` if you are in doubt about how to resolve the conflicts.
4. Resolve merge conflicts with `main`. There will potentially be a large number of merge conflicts here, since the release branch contains all the new changes since the last release. Conflicts should always be resolved in favor of the release branch.
5. These are protected branches and only a limited number of people have permission to make merges. Ask someone with permission (e.g., [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence)) to perform the merges. This could be someone other than the approver.
6. Once the release branch has been merged to both branches, it will be automatically deleted by GitHub, but you should check to make sure.

## Create a GitHub Release

This step depends on the PR from the release branch to `main` being merged into main. At that point you can create the GitHub release.

1. [Draft and publish a new GitHub release](https://github.com/semanticarts/gist/releases/new).

   1. Select `main` as the target of the release.

      [![](../../attachments/1126760539/1767997443.png)](https://github.com/semanticarts/gist/releases/tag/v9.6.0)
   2. This includes the automatic creation of a tag that you specify, formatted as `vX.x.x` (e.g., `v12.1.0`).
   3. Add a link to the release notes, using the [9.6.0 release](https://github.com/semanticarts/gist/releases/tag/v9.6.0) shown to the right as a model. The link must point to the tagged version of the release notes rather than main or develop: e.g., `https://github.com/semanticarts/gist/blob/v13.0.0/docs/ReleaseNotes.md`.
   4. Attach a ZIP of the release bundle as a binary attachment. Refer to

## Distribute the Release Package

1. Email the release package to the developers.
2. Once you are notified that the download is available:

   1. Provide text to update the [gist page on the Semantic Arts website](https://www.semanticarts.com/gist/) to the person in charge of the website. This can be a small paragraph highlighting the most prominent changes in the release; see example below. This page has sections for the last 1-2 gist releases. If the current release is a major version, there should be only one section, Latest Release. If the current release is a minor (or patch) version, the section on the major release will be re-titled Latest Major Release, and the new section will precede it and take the title Latest Release.
   2. Include updated link targets in this text:

      1. The link to the Release Notes to the latest version, as above; e.g., `https://github.com/semanticarts/gist/blob/v13.0.0/docs/ReleaseNotes.md`.
      2. For a major version, update the link to the migration guide; e.g., `https://github.com/semanticarts/gist/blob/v13.0.0/docs/MajorVersionMigration.md`.
   3. The same text can be provided for the email announcement to the person in charge of these emails.
   4. Caution: do not mail the web page and email text until (1) the GitHub release has been created, and (2) the release package is available for download.

### Latest Release: gist 13.0.0

gist 13.0.0 is a major release that includes a number of changes that break backward compatibility with previous versions of gist. The release package includes documentation and scripts to help you migrate your extension ontologies and instance data from earlier versions of gist: see the Major Version Migration section below.

The most notable changes in this release are a completely rearchitected model of units of measure and magnitudes and a new address model. See the [Release Notes](https://github.com/semanticarts/gist/blob/v13.0.0/docs/ReleaseNotes.md) for full details of all major and minor changes in gist 13.0.0.

The release package includes:

- The gist core ontology
- Supplementary ontologies of RDFS annotations and materialized subclass inferences to support a variety of applications and reasoners.
- Documentation in both HTML and Markdown formats. This documentation includes guidance and recommendations on the of the new unit of measure and address models.
- Migration scripts and documentation to upgrade your ontologies and instance data to gist 13.

 All ontologies are provided in Turtle, RDF/XML, and JSON-LD serializations.

## Post-Release Tasks

Once the release has been completed by the developers:

### Test the Release Download

1. Click on the blue Download button on the SA website: <https://www.semanticarts.com/gist/>.
2. Review the updated web page and test the links.
3. Load the ontology into Protege under File > Load from URL, using the same ontology IRI and also the versioned one - e.g., `https://w3id.org/semanticarts/ontology/gistCore12.1.0` .

### Manage GitHub Projects

1. When creating a new project, follow the steps in the section on [Creating a New Project](https://semarts.atlassian.net/wiki/spaces/OF/pages/1126760539/gist+Release+Management+Ontologists#Creating-a-New-Project) below. Tthis copies automations but not issues.
2. Create a new project for the next minor release This project may already exist if issues from the current release have already been deferred to it. For example, if you just released `12.1.0`, create `12.2.0` if it does not already exist.
3. Create a new project for the next major release if it does not already exist. In the example, this would be `13.0.0`.
4. There should always two release projects open, one to manage the next minor release and the second to store issues for major changes that must be deferred to the next major release.
5. If the new minor releases does not occur before the major release, issues will at that point be moved to the major release project.
6. Examples:

   1. You are releasing version `12.1.0`. The project for `12.2.0` should already exist, but if not, create it. Ensure that `13.0.0` exists; it should, but if not create it.
   2. You are releasing `13.0.0`. Create project `13.1.0`, if it doesn’t exist, and `14.0.0.`
7. All projects should be made public from the project settings page.
8. Close the current release project. Steps:

   1. Navigate to the project page.

      ![](../../attachments/1126760539/2522087550.png)
   2. ![](../../attachments/1126760539/2521989222.png)
   3. Click on Close this project towards the bottom. Caution: Do *not* delete the project.
   4. ![](../../attachments/1126760539/2522087559.png)

### Manage GitHub Branches

1. Branches are automatically deleted when merged into `develop` but not to a release branch. Delete any stale branches. When in doubt, ask the owner of the branch. At the end of this process there should generally be only two branches in the repository, `main` and `develop`. Occasionally there will be draft PR branches.
2. Create a new branch for the next major release, if it does not already exist. This allows for development of new major changes that will not be released till the next major release, while other development continues on `develop`. Examples:

   1. You have just released version `14.0.0`. Create branch `release/15.0.0`.
   2. You have just released version `14.1.0`. The `release/15.0.0` branch should already exist, but in case it was overlooked, create it.

### gist-doc Documentation

Continue to work with [peter.winstanley (Unlicensed)](https://semarts.atlassian.net/wiki/people/5e386d7414836c0cc108da66?ref=confluence) to ensure that the eBook (major version only) and Widoco documentation is updated within approximately one week after the release.

### Periodic Table of gist

Determine whether any updates to the [gist periodic table](https://www.semanticarts.com/gist/) are required. Consult with [Rebecca Younes](https://semarts.atlassian.net/wiki/people/5ca50b0a60d95a751f0ed751?ref=confluence).

# Appendix 1. Contents of the Release Package

The bundler will create the release package in a folder named (for example) `gist14.1.0_webDownload`, where `14.1.0` is the version number of the release. **As of version** `14.1.0`*,* the contents of the release package are as follows:

```
gist14.1.0_webDownload/
|   LICENSE.txt
+---docs/
|       gist-logo.png
+-------html/
|           MajorVersionMigration.html
|           Namespace.html
|           README.html
|           ReleaseNotes.html
+-----------models/
|               AddressGuidance.html
|               UnitOfMeasureModel.html
+-------markdown/
|           MajorVersionMigration.md
|           Namespace.md
|           README.md
|           ReleaseNotes.md
+-----------models/
|               AddressGuidance.md
|               UnitOfMeasureModel.md
+---migration/
+-------v10.0/
|           <various files>
+-------v11.0/
|           <various files and folders>
+-------v12.0/
|           <various files and folders>
+-------v13.0/
|           <various files and folders>
+-------v14.0/
|           <various files and folders>
+---ontologies/
+-------json-ld/
|           gistCore14.1.0.jsonld
|           gistMediaTypes14.1.0.jsonld
|           gistPrefixDeclarations14.1.0.jsonld
|           gistRdfsAnnotations14.1.0.jsonld
|           gistSubClassAssertions14.1.0.jsonld
+-------rdf-xml/
|           gistCore14.1.0.rdf
|           gistMediaTypes14.1.0.rdf
|           gistPrefixDeclarations14.1.0.rdf
|           gistRdfsAnnotations14.1.0.rdf
|           gistSubClassAssertions14.1.0.rdf
+-------turtle/
|           gistCore14.1.0.ttl
|           gistMediaTypes14.1.0.ttl
|           gistPrefixDeclarations14.1.0.ttl
|           gistRdfsAnnotations14.1.0.ttl
|           gistSubClassAssertions14.1.0.ttl
```

Note: the directory structure and files under the `migration` directory should be identical to the GitHub directory.

You should *inspect the directory contents* to verify that the bundling has operated correctly. Expected differences between the working directory and the release directory:

1. Each ontology file includes three serializations: JSON-LD, RDF/XML, and Turtle. You should note the following differences between the released ontologies and the repository ontologies:

   1. The download package adds an `rdfs:isDefinedBy` annotation to each ontology term.
   2. The placeholder version number `X.x.x` has been replaced by the actual version number, e.g., `9.5.0`, in the version IRIs of `owl:imports` and `owl:versionIRI` assertions.
   3. Replacement of doubles in decimal notation with scientific notation; e.g., `”1.0”^^xsd:double` in the Turtle file is replaced by `”1e+00”^^xsd:double`. (This is caused by the bundler reading the files into memory and using Python to convert double literals to Python floats.)
   4. The release package should *not* include the `gistValidationAnnotations` ontology.
   5. Documentation

      1. The `docs` directory contains the README, release notes, general migration instructions, a document on namespaces, and a directory containing documentation of specific gist models. All documents have both Markdown and HTML versions. Local links in the Markdown files are patched to point at the HTML versions.
      2. No other files from the `docs` folder should be included.
      3. `gist-logo.png` is in the `docs` folder rather than the top-level as in the repository.

# Appendix 2. Creating a New Project

1. From the [root of the gist repository,](https://github.com/semanticarts/gist) click on Projects in the top menu.
2. Pull down the green “Link a project” menu and select “New project.”
3. Click on the button, which now reads “New project.”
4. A dialog box opens. Select the gist Project Template so that your new project is based on this template.
5. Give your project a name, e.g., “gist Version 13.0.0.”
6. Click “Create project.”
7. The new project has been created and linked to the gist repository and has the pre-defined workflows and layouts.
8. Because the project is linked to the gist repo, it is shown from the Projects menu in the repo.
9. Do *not* create the project from the Projects menu at the root of the Semantic Arts organization, since this will require an extra step to link it to the gist repo.

# Appendix 3. Bundle Configuration

`bundle.yaml` is the configuration file used by `onto_tool` to specify processes used to create the release package. You should not have to modify this file - any updates should have been submitted as PRs to the repository - but following is some explanation of how this file directs the bundle operation.

## Documentation Files

One of the functions performed by `onto_tool` is to copy specific `.md` files in the `docs` folder to the release package. This includes `docs/models`, which exists as of gist 13.0.0.

The `includes` value for the top-level `docs` directory must be modified if additional files are added that should be included in the release. Note that to date we have not included files targeted to contributors, such as `Contributing.md` , `ChangeAndReleaseManagment.md`, and `gistStyleGuide.md`, so ask if in doubt. The relevant sections of the YAML file are copied below:

```
- action: "copy"
  message: "Copying documentation."
  source: "{input}/docs"
  target: "{output}/docs"
  includes:
    - "ReleaseNotes.md"
    - "MajorVersionMigration.md"
    - "Namespace.md"
- action: "copy"
  message: "Copying model documentation."
  source: "{input}/docs/models"
  target: "{output}/docs/models"
```

HTML versions of all Markdown files in both the `docs` and `migration` directories are generated, and local links in the HTML version are repointed to the other HTML files (the Markdown files continue to link to other Markdown files):

```
- action: "markdown"
  message: "Formatting documentation as HTML."
  source: "{output}/docs/"
  target: "{output}/docs/"
  includes:
    - "*.md"
- action: "move"
  message: "Patching local links in documentation."
  source: "{output}/docs/"
  target: "{output}/docs/"
  includes:
    - "*.html"
  # Replace .md with .html in local links of HTML files.
  # PCRE2 version of regex replace:
  # ((\.\/|(?:\.\.\/)+).+)\.md => $1.html
  replace:
    from: "((\\./|(?:\\.\\./)+).+)\\.md"
    to: "\\g<1>.html"
- action: "copy"
  message: "Copying model documentation."
  source: "{input}/docs/models"
  target: "{output}/docs/models"
- action: "markdown"
  message: "Formatting model documentation as HTML."
  source: "{output}/docs/models/"
  target: "{output}/docs/models/"
  includes:
    - "*.md"
- action: "move"
  message: "Patching local links in HTML model documentation."
  source: "{output}/docs/models/"
  target: "{output}/docs/models/"
  includes:
    - "*.html"
  # Replace .md with .html in local links of HTML files
  replace:
    from: "((\\./|(?:\\.\\./)+).+)\\.md"
    to: "\\g<1>.html"
- action: "copy"
  message: "Copying migration queries, scripts, and documentation."
  source: "{input}/migration"
  target: "{output}/migration"
- action: "markdown"
  message: "Formatting gist 11.0 migration documentation as HTML."
  source: "{output}/migration/v11.0/"
  target: "{output}/migration/v11.0/"
  includes:
    - "*.md"
- action: "move"
  message: "Patching local links in gist 11.0 HTML migration documentation."
  source: "{output}/migration/v11.0/"
  target: "{output}/migration/v11.0/"
  includes:
    - "*.html"
  # Replace .md with .html in local links of HTML files
  replace:
    from: "((\\./|(?:\\.\\./)+).+)\\.md"
    to: "\\g<1>.html"
- action: "markdown"
  message: "Formatting gist 12.0 migration documentation as HTML."
  source: "{output}/migration/v12.0/"
  target: "{output}/migration/v12.0/"
  includes:
    - "*.md"
- action: "move"
  message: "Patching local links in gist 12.0 HTML migration documentation."
  source: "{output}/migration/v12.0/"
  target: "{output}/migration/v12.0/"
  includes:
    - "*.html"
  # Replace .md with .html in local links of HTML files
  replace:
    from: "((\\./|(?:\\.\\./)+).+)\\.md"
    to: "\\g<1>.html"
- action: "markdown"
  message: "Formatting gist 13.0 migration documentation as HTML."
  source: "{output}/migration/v13.0/"
  target: "{output}/migration/v13.0/"
  includes:
    - "*.md"
- action: "move"
  message: "Patching links in gist 13.0 HTML migration documentation."
  source: "{output}/migration/v13.0/"
  target: "{output}/migration/v13.0/"
  includes:
    - "*.html"
  # Replace .md with .html in local links of HTML files
  replace:
    from: "((\\./|(?:\\.\\./)+).+)\\.md"
    to: "\\g<1>.html"
- action: "move"
  message: "Patching local links in gist 13.0 HTML migration documentation."
  source: "{output}/migration/v13.0/"
  target: "{output}/migration/v13.0/"
  includes:
    - "*.html"
  # Replace .md with .html in local links of HTML files
  replace:
    from: "((\\./|(?:\\.\\./)+).+)\\.md"
    to: "\\g<1>.html"
```

## Ontology Files

Another `onto_tool` function is to create multiple serializations of the ontology files, add `rdfs:isDefinedBy` assertions, and make some additional manipulations. When a new ontology file is added to the repository, it must be added to any of the `include`s in the YAML file that list ontology files individually.

`onto_tool` supports both `include` and `exclude` options. Values can be either wildcard regular expressions or a list of individual files. The `exclude`s override a regular expression in the `include`. Examples:

This action copies ontology files to the release directory.

```
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
    - gistValidationAnnotations.ttl
```

This action serializes only files that have already been copied to the release directory, so the wildcard value is sufficient:

```
- action: "transform"
  message: "RDF/XML serialization."
  tool: "xml-serializer"
  source: "{output}"
  target: "{output}"
  rename:
    from: "(.*)\\.ttl"
    to: "\\g<1>.rdf"
  includes:
    - "*.ttl"
```

# Appendix 4. Release Checklist

Copy this release checklist into a new GitHub issue:

1. [Create a new issue](https://github.com/semanticarts/gist/issues/new/choose).
2. Copy the text of the checklist below into the issue description.
3. Add the release number to the title - e.g., “gist 13.0.0 Release Checklist.”
4. Submit the issue.
5. Move it to the To Do column of the project board.

###### Release Checklist Template

```
See details in the [full documentation of the release process](https://semarts.atlassian.net/wiki/spaces/OF/pages/1126760539/gist+Release+Management+Ontologists).

- [ ] Create release branch (`release/X.x.x`).
- [ ] Create a working branch off of this release branch for updates.
- [ ] Prepare release notes in working branch.
- [ ] Update `skos:historyNote` for new release in working branch.
- [ ] Test logical consistency.
- [ ] Make arrangements to prepare the eBook (major version only) and Widoco documentation from the OWL files on the release branch. 
- [ ] Make any necessary modifications to the bundle configuration file.
- [ ] Create PR to merge working branch into release branch.
- [ ] Build the release package using `onto_tool` and inspect for correctness.
- [ ] Make sure that local links and tables in the Markdown files are properly rendered in the HTML versions. 
- [ ] Ask one other ontologists to review the release package. Make any corrections needed and iterate through the build.
- [ ] Submit a PR from the release branch to `develop`.
- [ ] Submit a PR from the release branch to `main`.
- [ ] Create a GitHub release.
- [ ] Email a link to the GitHub release page to the developers.
- [ ] Add a new GitHub project for the next minor release if it does not already exist, using the __gist Project Template__.
- [ ] Add a new GitHub project for the next major release if it does not already exist, using the __gist Project Template__.
- [ ] Create issues from [this template](https://semarts.atlassian.net/wiki/spaces/OF/pages/1126760539/gist+Release+Management+Ontologists#Release-Checklist-Template) to add to each of the above two projects, if they do not already exist, modifying the title to include the version number.

Once the release has been posted to the website:
- [ ] Test the release download.
- [ ] Send text for email announcement and web page updates to responsible parties.
- [ ] Test all links on the updated web page.
- [ ] Follow up on eBook and Widoco documentation to ensure release after approximately one week.
- [ ] Review the [periodic table of gist](https://www.semanticarts.com/gist/) to determine whether any changes should be made. Consult with Rebecca Younes as needed.
```

---
title: "Using GitHub to template and supply projects"
confluence_id: 2874540035
source: "Using-GitHub-to-template-and-supply-projects_2874540035.html"
---

This is an information and discussion page about using the GitHub Template and Sub-module tools to manage standardising the layout of folder hierarchies (through templates) and improving the provisioning of these with a range of tools (through sub-modules).

[Semantic Operations Repository Template (SORT)](/ontology-tools/2025-ontology-tooling-development-project/using-github-to-template-and-supply-projects/semantic-operations-repository-template-sort/) describes some of this.

The following components are relevant:

- **Templates**: these are described in <https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository> and <https://github.blog/developer-skills/github/generate-new-repositories-with-repository-templates/> . The idea is that we create a repo that can act as a template for subsequent repos. It would be possible to have a set of template repos for different project types. Only a single template repo can be used when a project repo is created. The template repo will have the foundational folder hierarchy and hold a base set of files. Subsequent tooling can then be added to the project repo using the ‘sub-module’ approach.
- **Sub-modules**: these are described in <https://github.blog/open-source/git/working-with-submodules/> and <https://git-scm.com/book/en/v2/Git-Tools-Submodules> . A sub-module is a GitHub repo that is imported into another repo. There are some cautions that need to be applied when using sub-modules, and there are git functions that need to be run to bring in the top level or a selection of other branches with the sub-module import. We will need to find a way to make this easy to operate, but it could be an approach that saves us replicating functionality such as the RDF toolkit or the ontology toolkit across multiple project repos.
- **.gitignore**: This file will play an important role in preventing project repos from filling up with template and sub-module code.
- **CI/CD**: Continuous Integration and Continuous Deployment are ways of automating the validation and deployment of code, such as ontologies and RDF files. The tooling within GitHub can be configured to run validation checks, and to have these reports available for defined periods after which the GitHub system can be programmed to remove them, thereby reducing clutter.

Obviously, adhering to this approach will require some project discipline if it is going to work across the whole organisation, and that is why the [File Structure Decisions](/ontology-tools/2025-ontology-tooling-development-project/file-structure-decisions/) part is important for our joint consideration - what is the basic folder structure that we need in the GitHub repos? If we need a range of basic patterns, what are they?

## In this section

- [Semantic Operations Repository Template (SORT)](/ontology-tools/2025-ontology-tooling-development-project/using-github-to-template-and-supply-projects/semantic-operations-repository-template-sort/)

---
title: "Git - Templates, Submodules and Worktrees"
confluence_id: 2891972612
source: "Git---Templates%2C-Submodules-and-Worktrees_2891972612.html"
---
In addition to the branch structure of repositories there are other elements that will be useful in this project. This is a small narrative on templates, submodules and worktrees to help orientate everyone and to act as the basis for interpreting proposals for the outputs of this project.

### Templates

Git templates allow you to customize the files and directories that Git initializes in a new repository. A Git template is a directory that contains predefined content that you want to include in every new repository. This might include:

- **Custom Hooks**: Scripts that automatically execute at specific points in the Git workflow (e.g., pre-commit, post-commit).
- **Configuration Files**: Custom .gitignore files, Git configuration settings, or any other files you want to be present from the start.
- **Subdirectory Structures**: Predefined directory structures to streamline the organisation of your repositories.

Git templates provide a flexible way for us to standardise repository initialisation, thereby saving time and ensuring consistency across all our projects. We think that one or a small number of templates can provide the foundation for a systematic approach to provisioning project resources for us using Git. One assumption of this approach is that we will have access to Git within clients' environments. The other assumption that needs to be bottomed out is that we can use GitHub and GitLab interoperably.

### Submodules

Git submodules allow you to include and manage external repositories within your main repository. This can be especially useful for embedding third-party libraries, dependencies, or shared components into your projects without merging all their files into the principal repository. Submodules are cloned into a specified directory in the repository. The information about which submodules are cloned within the repository, and the version of those submodules, is maintained in a custom configuration file called .gitmodules .

Obviously there are concerns about the possibility of accidental change to these submodules, but the following points provide some reassurance that this can be controlled and precautions put in place to reduce the chances that this will happen unexpectedly (meaning that it might be possible to change the parent repository of the submodule in a planned way).

1. **Commits in the Main Repository**: When you commit changes in the main repository (the one containing the submodules), the submodules themselves are not directly affected. Instead, the main repository records the exact commit SHA-1 of each submodule, which points to a specific state of the submodule repository at the time of the commit.
2. **Ignoring Submodules in Commits**: By default, submodules are not ignored in commits; their state (the specific commit they are at) is recorded. However, if you make changes within the submodule directory, those changes are tracked separately within the submodule's own repository. You need to commit changes inside the submodule repository if you want to keep them.
3. **Protecting Submodules Against Inadvertent Changes**:

   - When you clone the main repository, it brings in the submodules at the specified commits, ensuring you always get the expected state of each submodule.
   - Submodules are protected against accidental changes in the main repository because any changes made within the submodule need to be committed separately within the submodule itself.
   - You can configure submodule update strategies to avoid unintentional updates. For example, using   **git submodule update --init --recursive**   ensures all submodules are updated to the recorded state.

Here’s a summary table:

|  |  |  |
| --- | --- | --- |
| **Aspect** | **Main Repository** | **Submodule Repository** |
| **Commits** | Records submodule SHA-1 | Changes committed separately |
| **Change Tracking** | Submodule SHA-1 recorded | Changes tracked within |
| **Protection** | Specific commit SHA-1 used | Separate commits required |

 The direction of travel for this project therefore is to provide template/s as described above, and then have scripts and potentially other approaches to simplify the incorporation of additional functionality from Semantic Arts GitHub repositories and repositories of other parties (thinking here about rdf-toolkit, SHACL tools, and potentially TARQL).

### Worktrees

Git worktrees are a feature that allows you to check out multiple branches simultaneously within a single repository. This can be incredibly useful for parallel development, testing, or code reviews without needing to clone the repository multiple times. They save disk space while maintaining a clear structure for different branches.

We see worktrees as a possible additional way of fashioning a repository, but this depends on the use cases, and input from the Semantic Arts community would be welcomed on this GitHub functionality.

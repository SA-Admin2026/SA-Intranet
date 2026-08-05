---
title: "SA Claude Container Quick Start"
confluence_id: 3321102346
source: "SA-Claude-Container-Quick-Start_3321102346.html"
---

- Install Docker Desktop and run it

  - If you are installing Docker Desktop for the first time, note that you can skip the email-verification step
  - Docker Desktop Personal is fine for this use case
- In VS Code, open the repo you want Claude to work on
- Add a .devcontainer folder in the repo root
- Copy the four files from <https://github.com/semanticarts/sa-claude-container/tree/main/.devcontainer-sample> into the new .devcontainer folder in your repo
- Edit the files

  - Replace <repo-name> with your repo name
  - Add VS Code extensions, local resources, and network resources as needed

    - To update VS Code extensions, use the VC Code command “Dev Container: Rebuild Container”
- Run the VS Code command Dev Containers: Reopen in Container

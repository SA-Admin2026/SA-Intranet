---
title: "DCA repos"
confluence_id: 52101169
source: DCA-repos_52101169.html
---
Two main repos:

- Backend – data-centric-architecture
- Front End experiments – dca-static-artefact

Process to get up to work in this environment.

Go to github <https://github.com/> and log in.

Switch to semanticarts context

![](/internal-systems/attachments/52101169/52330539.png)

Select the repo you want in right hand list

![](/internal-systems/attachments/52101169/52035622.png)

Clone or download (clone with https, copy to clipboard)

Open a terminal (sigh) cd to the parent folder you want the repo in

y: will change me to the Y drive, then burrow in

```
git clone <copied repo name>
```

change dir to the new repo folder and type

```
git checkout <bankch name>
```

for instance "develop" which can be found in github

Then open the folder in sublime. Need to open a specific folder, and the the ctrl-shift-p option of g b (git branch) will be enabled.

Repeat this process for the dave branch (which is a branch off develop)

If sublime git push doesn't work, you need to associate your local repo with the git hub one, which again in terminal

```
git push --set-upstream origin <branch name>
```

Now code away, in dca, run is dca.py

The equivalent of save is ctrl-shift-p gq and then add a comment

when there is something to archive

ctrl-shift-p gp   – this pushes dave to github dave

When I have something to share,

change local branch to develop

```
ctrl-shift-p gcb  <develop>
```

merge

```
ctrl-shift-p gmb  <dave>  
```

Then push it to github

Remember to switch back to

```
ctrl-shift-p gcb  <dave>
```

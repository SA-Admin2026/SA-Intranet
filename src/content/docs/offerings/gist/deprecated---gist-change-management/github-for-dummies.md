---
title: "github for Dummies"
confluence_id: 512917507
source: github-for-Dummies_512917507.html
---
See also: [Git for Humans](http://www.aquaboat.ch/forestryio/files/test.pdf), a very good book.

How to do a simple change to a github file.

Imagine there is a github file that you have access to, and permission to change, and you want to download it, change it, test it and put it back.

Assume you have git installed.  If not <https://git-scm.com/>

The steps are:

1. download the file you want, which will automatically create a git managed directory
2. make and test changes
3. do a bunch of stuff to get changes commited back in github

We will try to do these instructions in three modes

- A. Command line
- B. GUI
- C. Sublime  (this is how to install the sublime git package <https://packagecontrol.io/packages/Git>)

# Download the file you want

Take the whole repo by cloning it

![](/offerings/attachments/512917507/513081345.png)

## A Command Line

navigate to where you want the directory to be

![](/offerings/attachments/512917507/513146881.png)

and copy the git url from the clone button

> git checkout -b <my Branchname .>

## B GUI

Click on the Open in Desktop link

![](/offerings/attachments/512917507/513048583.png)

Change the default local path to where you want it to be

![](/offerings/attachments/512917507/512950277.png)

Create your local branch

![](/offerings/attachments/512917507/512983054.png)

## C. In Sublime

Can't do this step in sublime currently.

Just open the folder that you had cloned one of the two other ways

to make your new branch

> ctrl shift P
>
> git new branch
>
> (give it a name)

# Make and Test Changes

## A Command line

Use nano / vim / edit or text editor of choice to make the changes

## B GUI world

The GUI doesn't allow you to make change, only to see what changed

## C Sublime

Make change.  Save it.

Then

> Ctrl Shift p
>
> q
>
> (and fill in a reason in the message box at the bottom)

# Locally Commit and Review Changes

## A Command line

> git add .
>
> or
>
> git add <filename>
>
> git commit -m "<commit message>"

## B GUI world

The GUI shows uncommited changes in teh "changes tab" which you can commit with a description in teh lower left.

![](/offerings/attachments/512917507/513015819.png)

Previous local commits are under the history tab

## C Sublime

Then

> Command Shift p
>
> q
>
> (and fill in a reason in the message box at the bottom)

# Get Changes Back to gitHub

## A Command line

> git status will tell you want the current branch is
>
> (if myBrank is new, no need to pull), otherwise to be sure you're current)
>
> git pull origin <name of my branch>
>
> git push origin <name of my branch>

Then go to git hub and make a new pull request

![](/offerings/attachments/512917507/513179659.png)

## B GUI world

if this is the first time for this branch there is a tab called "publish" or "fetch origin" that will push your branch to the gitHub

If you click on teh middle tab "current branch" you have the option to make a pull request

![](/offerings/attachments/512917507/512950303.png)

Which puts you back to the gist hub

## C Sublime

> ctrl shift p
>
> git pull
>
> ctrl p
>
> git push

# On gitHub merge the branch back to the master

(or whatever other branch you're promoting to)

The pull down allows you to select the one to merge to (on left) with the one from (right)

![](/offerings/attachments/512917507/513114137.png)

Hit green button which queues up the pull request

Then if you are teh designated person managing "master" you can hit this green button

![](/offerings/attachments/512917507/512950311.png)

and accept the merge.

# To "fork" a project

Assume you are never going to merge back, here's what to do:

- Clone the project, by zip download
- Expand the zip (you can skip all the "too long files" as they are git files)
- Delete the git subfolder  (it may have deleted for you in the unzip process)
  - try hidden items in windows explorer, or
  - or in command line type git status
- go back to github on web and create a new repo
- on command line

> git init

> git add .  ## might take a while

> git commit -m "first commit"

> git remote add origin <https://github.com/semanticarts/shapeEditor.git>

> git push -u origin master

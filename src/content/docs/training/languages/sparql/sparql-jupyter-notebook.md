---
title: "SPARQL Jupyter Notebook"
confluence_id: 762740742
source: "SPARQL-Jupyter-Notebook_762740742.html"
---
This page explains how to get set up to use a SPARQL Jupyter Notebook.

# Introduction

The **Jupyter Notebook** is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text. Uses include: data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more.

See <https://jupyter.org/>  for more.

A **SPARQL module** exists for Jupyter.

See <https://github.com/paulovn/sparql-kernel> for more.

This page explains how to get set up to use a SPARQL Jupyter Notebook.

# Installation

You will need **python**, **pip**, **Jupyter**, and the **SPARQL Jupyter** module.

## Python

You need **python** (version 3) and **pip** to install Jupyter.

### Do I have python 3?

To find out, open a command window and type python.

On windows:

1. Hit the Windows key or click the windows icon at lower left of screen ![](/attachments/762740742/762773525.png)
2. Type `cmd`
3. Hit the Enter key.      *This should launch Command Prompt window.*

*In the command prompt window:*

4. Type `python -V`     *That's a dash and a capital "V".* ***NOTE: Some systems will use the command names `python3`*** ***and `pip3` instead of `python`*** ***and*** ***`pip`******.  Try these command names if `python` and `pip` don't work for you.***

If you have python, it should show you a prompt and a version, e.g.

```
C:\Users\mwallace> python -V
Python 3.7.0
```

If not, it will tell you so like this:

```
C:\Users\mwallace> python -V
'python' is not recognized as an internal or external command,
operable program or batch file.
```

Do the same as above but for `pip`.

If you don't have python or pip, install them.  Get them from <https://www.python.org/downloads/> and follow the instructions.

## Jupyter

Jupyter installs easily with python. (DMc >> on my machine I found I had to open the command user as an administrator to get this to work)

*In a command window, type:*

```
pip install jupyter
```

## SPARQL Jupyter

The SPARQL model installs easily too.

*In a command window, type:*

```
pip install sparqlkernel
```

When that finishes, type this:

```
jupyter sparqlkernel install --user
```

That should do it.

# Running It

## Where are notebooks kept?

Notebooks can be stored anywhere in the filesystem.

To keep things from getting messy, I recommend creating a specific place where you can keep your notebooks.

E.g., on windows, I created a directory at the top level:

```
mkdir \notebooks
```

Then I go there to run my notebooks,  E,g,:

```
cd \notebooks
jupyter notebook
```

## Running Jupyter

That last command in the previous section,

`jupyter notebook`

... is how you run Jupyter.

When you do, it will

1. start a notebook server (on the local computer) and
2. launch a window in your browser where you can view existing notebooks and create new ones.

E.g., my window below already has some notebooks I've been working on.

![](/attachments/762740742/762708026.png)

# Notebook Basics

You can create a new notebook or launch an existing one.

Click New > SPARQL to create a new SPARQL Notebook.

![](/attachments/762740742/762806336.png)

When you do, it should create a **new browser tab** with the new notebook.

## Documentation

Instructions for **any type of Jupyter Notebook** are here:  <https://jupyter-notebook.readthedocs.io/en/stable/notebook.html> .  The section on **Notebook user interface** is key.

Instructions for using **SPARQL Jupyter** are here:  <https://github.com/paulovn/sparql-kernel> .  Scroll down to see the README file contents.

## A Few Key Operations

When you start up a new notebook, there is a "cell".  The cell by default is for SPARQL queries.  You can toggle a cell type between code (SPARQL in our case) and documentation ("markdown") by using hot-keys or menus.

Hot keys:

**ESC-M-Enter** when in a cell to switch to markdown. (Ref. <https://www.markdownguide.org/basic-syntax/>)

**ESC-Y-Enter** when in a cell to switch code.  (SPARQL code in our case)

**ALT-Enter** when in a cell to "execute" it and create a new cell below.

**CTRL-Enter** when in a cell to "execute" it but stay in it without creating a new cell below.

**ESC-D-D** when in a cell to delete the cell.

Important operations for SPARQL

**%endpoint *someURL****- connects to your SPARQL endpoint*

**%auth basic *username password****- logs into your *SPARQL* endpoint (if authentication required)*

***Any SPARQL command**  - do a query against current endpoint*

Most used Markdown operations:

```
    Just type in text for regular paragraph text.  
    # single hash at start of line is a top level heading (Level 1)  
    ## two hashes is level 2, and so on.  
    use `back quotes` for code-looking words  
    **bold words**  
    *italic words*
```

## Example - An initial SPARQL Notebook

Note: in the following, if you cut and paste the endpoint from Allegrograph you will see a spurious '#' in the middle of the URL that you will need to remove

> <https://agraph.semanticarts.com/#/catalogs/ibeam-catalog/repositories/timecard>

![](/attachments/762740742/762871850.png)

![](/attachments/762740742/762904605.png)

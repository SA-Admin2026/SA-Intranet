---
title: "Installing Tarql"
confluence_id: 2104295425
source: "Installing-Tarql_2104295425.html"
---

See also: [TARQL: SPARQL for Tables](/languages/sparql/tarql-sparql-for-tables/)

## Windows:

- Download from <https://github.com/tarql/tarql/releases>

  E.g. download tarql-1.2.zip
- In windows explorer, go to C: drive. Create a folder called Programs.
- Unzip the tarql zip into Programs. You should now have a folder called C:\Programs\tarql-1.2
- Search windows for: env. you should see "Edit system environment variables". Click it.

  - Click "Advanced" Tab
  - Click Environment Variables"
  - Find the one called "Path" either in User variables or System variables section. Select it.
  - Click edit.
  - Click New
  - Put in C:\Programs\tarql-1.2\bin

## To Run

You run it from a command window.

- Open a command window (e.g. search windows for CMD, or find it on your start menu)

  IMPORTANT: You have to open a new command window after you set the PATH environment variable. It won't work on an already opened command window.
- Type tarql

# WARNING: Known Bug

Always be sure there is a blank first column in the .csv file. TARQL does not reliably recognize the header in the first column as a variable.

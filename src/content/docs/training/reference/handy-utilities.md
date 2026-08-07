---
title: "Handy Utilities"
confluence_id: 48639131
source: "Handy-Utilities_48639131.html"
---
## We transfer

<https://wetransfer.com/>  transfer large files to client or others for free

## World Time Buddy

<http://www.worldtimebuddy.com/>  for synching up conf call times over many time zones

## Finding unwanted characters in a text file

Remove characters you know are OK, then sort and unique the result (and get rid of empty lines) as follows.

From a UNIX command line: cat <file> | sed 's/[ -~]//g' | sed 's/\t//g' | egrep -v "^$" | sort -u > tmp

Then cat tmp to see the unwanted characters, and perhaps some you want to keep as-is. In many cases you can bring up the file in a text editor and copy-paste an unwanted character into a Find field and type its replacement into a Replace With field. Note that the way some characters are rendered can vary from one tool to another.

The first regular expression is "all characters from space to tilde, inclusive" and the second one is "the tab character". The egrep removes empty lines.

Reference:<https://www.ascii-code.com/>

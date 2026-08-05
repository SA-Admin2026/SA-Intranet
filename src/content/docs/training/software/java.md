---
title: "Java"
confluence_id: 679379143
source: "Java_679379143.html"
---

How to install Open JDK (Java Development Kit) on Windows 8/9/10:

 1. Download latest Java from [https://jdk.java.net/.](https://jdk.java.net/)  As of this writing, that is Java 11.

 2. Unzip to `C:\Program Files\Java`, so that it looks something like this:  **(Your version number may vary... use YOUR version number throughout)**

![](/attachments/679379143/679444798.png)

3. Set up your `JAVA_HOME` and `PATH` environment variables

a) hit Windows key

b) type "environment"

c) select "Edit the system environment variables"

d) click "Environment Variables…" button

*In "System variables" section*

e) if `JAVA_HOME` exists, click it and then "Edit…", if not, click "New…"

f) In name, put `JAVA_HOME`

g) in value, put `C:\Program Files\Java\jdk-11.0.2`

![](/attachments/679379143/679346444.png)

h) Click OK

*Again, in "System variables" section*

i) Select `PATH` and then "Edit…"

j) click "New"

k) in value, put `%JAVA_HOME%\bin`

l) Click "Move Up" to put it up to the top.

![](/attachments/679379143/679444803.jpg)

m) Click OK, OK, OK to save everything.

4. To see if it worked, open up **a new** Command Prompt and type

`java -version`

    and see if it prints the version of your newly installed JDK.

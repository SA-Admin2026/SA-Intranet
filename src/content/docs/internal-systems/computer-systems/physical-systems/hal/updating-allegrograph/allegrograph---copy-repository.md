---
title: "Allegrograph - Copy Repository"
confluence_id: 759595041
source: Allegrograph---Copy-Repository_759595041.html
---
Use the agtool like this:

`/home/semartsdev/Programs/AG-6.4.6/bin/agtool archive backup demo-catalog:bpelakh-regions - | /home/semartsdev/Programs/AG-6.4.6/bin/agtool archive --newuuid restore platts:platts-demo1 -`

Make sure you use the version of agtool that matches the version of the server that is running. Use `ps -ef | grep AG` to see what version is running.

The '-' in each command is important, it means the command should use stdin and stdout for the data.

The `--newuuid` is important or it will probably fail saying the database already exists, or something like that.

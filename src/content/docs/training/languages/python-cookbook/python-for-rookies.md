---
title: "Python for rookies"
confluence_id: 52133938
source: "Python-for-rookies_52133938.html"
---
## Initial Set up (windows)

I have pulled triples from the Euromonitor example Michael sent me. I can get the [instructions.md](http://instructions.md) file out in Git updated to remove the mystery so anyone can get it up and running. Briefly it is this:

1. Install Python for Windows from the interwebs
2. Open a Command prompt in Windows
   1. Type Python at the prompt which gives you the following prompt: >>>
   2. Now type

1. Import pip
2. Import json

      iii.      Exit Python with a Ctrl-Z followed by the Enter key

1. You are now back at the Windows command prompt, NOT the Python prompt

1. Now type

1. Pip install openpyxl

1. Smile with contentment as you are ready to run your scripts from the Windows command prompt:
   1. Type

1. Python excel2RDF [your configuration file].json

1. Nothing appears to happen, except you will find your result files where ever your config directed them to be

## If you are missing imports in your environment;

Install PIP (sorry don't have installation at hand, it was a long time ago)

The from a command window

```
pip install <package>
```

If installing and reinstalling pip didn't allow the above to work, a workaround is

```
python -m pip install <package.
```

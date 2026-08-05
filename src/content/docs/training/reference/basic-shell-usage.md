---
title: "Basic Shell Usage"
confluence_id: 2330558470
source: "Basic-Shell-Usage_2330558470.html"
---

- [Introduction](#BasicShellUsage-Introduction)
- [Shell Access](#BasicShellUsage-ShellAccess)
  - [MacOS](#BasicShellUsage-MacOS)
  - [Windows](#BasicShellUsage-Windows)
  - [VSCode Integration](#BasicShellUsage-VSCodeIntegration)
- [Useful Commands](#BasicShellUsage-UsefulCommands)
  - [Help](#BasicShellUsage-Help)
  - [Navigating and Viewing the File System](#BasicShellUsage-NavigatingandViewingtheFileSystem)
  - [Manipulating the File System](#BasicShellUsage-ManipulatingtheFileSystem)
  - [Search](#BasicShellUsage-Search)
  - [String Substitution Across Files](#BasicShellUsage-StringSubstitutionAcrossFiles)
  - [Output](#BasicShellUsage-Output)
  - [Using the Command History](#BasicShellUsage-UsingtheCommandHistory)
  - [Navigating the Commandline](#BasicShellUsage-NavigatingtheCommandline)
- [Customizing Your Environment](#BasicShellUsage-CustomizingYourEnvironment)
- [Accessing an Executable From Anywhere](#BasicShellUsage-AccessinganExecutableFromAnywhere)
- [Shell Scripts](#BasicShellUsage-ShellScripts)
- [Recommended Resources](#BasicShellUsage-RecommendedResources)

## Introduction

While use of a shell command line is not a requirement for ontology work, it is recommended to gain some proficiency with at least the most commonly used commands. Some of our tools, notably TARQL, SPARQL Anything, and onto\_tool, must be run on the command line, and once you have a shell open you will increase your efficiency if you can use it to navigate the file system and perform some basic operations. While it may seem easier at first to use Finder or Windows Explorer and application UIs, investing a little time into learning shell basics will save you a lot of time (as well as annoyance) in the long run.

*Note: This page is intended as a cheat sheet or quick start guide rather than a manual or primer. For deeper or more detailed explanations of the commands, please consult the references below, the man pages, or online resources.*

## Shell Access

The shells available to you are OS-specific. (Linux is not mentioned here since users are already shell-proficient, and the shells available are the same as on MacOS.)

### MacOS

zsh is now the default shell on MacOS, but bash is also built-in. zsh is an extension of bash, and simple commands work on both. Differences between bash and zsh are discussed in the article <https://scriptingosx.com/2019/06/moving-to-zsh/> (as well as in many other web resources). If you are new to the shell, I recommend starting with zsh.

Both shells can be accessed through the Terminal app.

### Windows

Powershell comes packaged with Windows and supports many, but not all, of the bash/zsh commands. As a primarily Mac user, I am not able to provide information targeted specifically to Windows shells. Windows users should feel free to add Windows-specific documentation here.

An alternative to Powershell is Git BASH which is a bash emulation that comes with Git for Windows. This can be used to run onto\_tool, the RDF serializer, etc.

### VSCode Integration

As well as in the native applications, shells can be accessed through the VSCode terminal, and you are able to run different shells in different windows (e.g., bash in one, zsh in another). It is very useful to have a shell open at the bottom of your VSCode window so that you can easily switch back and forth from editor to terminal.

**Note:** It is possible to run bash and zsh in VSCode on Windows, but I am not sure whether this depends on already having the shells installed independently or what configuration is necessary.

## Useful Commands

Caveat: I grew up with bash and have only recently switched to zsh, so there may be slight variations of some of these commands in zsh.

### Help

**man** <command> - show documentation on usage of the command.

Many applications, such as TARQL and onto\_tool, support **-h** and **--h**

### Navigating and Viewing the File System

**cd** <directory> - change directory.

```
cd ../../../Documents/SemanticArts/Clients/MorganStanley
```

More advanced: **pushd** and **popd** (create a stack that you can push to and pop from to move back to previous directories)

Note that using a tab while typing your destination triggers auto-completion or a list of options if there is more than one.

**pwd** - show path of current directory. But better, add to your prompt - see [Customizing Your Environment](https://semarts.atlassian.net/wiki/spaces/TRR/pages/2330558470/Basic+Shell+Usage#Customizing-Your-Environment).

**ls** <directory> - list contents of a directory. Asterisk is a wildcard. Example:

```
# List contents of current directory
ls

# List all files with names ending in "ttl"
ls *ttl
```

You do not have to be in a given directory to list its contents. Example:

```
ls ../../*ttl
```

ls has many useful options to explore, notably **ls -l** (gives additional information) and **ls -a** (includes dot files such as .git). You can use options in conjunction: **ls -la**.

**~** (tilde) - references your home directory. Examples:

```
# Go to your home directory
cd ~

# Show contents of your home directory
ls ~
```

**which** - show location of an executable file. Useful if you have multiple versions of, say, python installed and you want to know which one is used by default.

```
which python
```

Note: This is one of the commands that behaves differently in bash and zsh. In the latter, which shows the function definition, while whence -p behaves like bash which. If you’re used to which, you can make an alias in .zshrc (see section on Customizing Your Environment):

```
# Map "which" to "whence -p" in zsh
alias which="whence -p"
```

**cat** <file> - print contents of a file to the shell.

More advanced: **less** and **more** allow you to page through the file rather than dumping the entire contents to the screen.

**head** <file> - display beginning of file. Option to indicate number of lines to display (particularly useful to see what columns a CSV contains). Example:

```
# Display top of of file.txt
head file.txt

# Particularly useful: display first row of a CSV file to see what columns it contains
head -1 file.csv
```

**tail** <file> - like head, but end of file rather than beginning.

**open** - open a file with the default application based on extension. Example:

```
# Open an Excel file
open my_spreadsheet.xlsx
```

**diff** <file1> <file2> - print the differences between two files. If there are large diffs, it’s useful to use in conjunction with **less** or **more** to page through the results, or redirect to a file (see section on Output below):

```
# Page through file diffs
diff newfile.txt oldfile.txt | more

# Print file diffs to a file
diff newfile.txt oldfile.txt > diffs.txt
```

### Manipulating the File System

**rm** - remove a file.

**rm -r** - remove a directory.

Caution: **rm** bypasses the Trash - the file is *gone* unless you have a backup.

**mkdir** - create a directory.

**mkdir -p** - create a chain of nested directories.

**touch** - create a file without adding any contents.

**ls -n** - create a symbolic link.

**sort** - sort lines in a file. The **-u** option removes duplicates. Common use case: there are times when you want tarql to output ntriples rather than turtle; you can then dedupe these into a file. This is much faster than using tarql’s **--dedup** option; you’ll be astonished at how quickly this runs even on large files:

```
# Run tarql to generate ntriples
tarql -n my_tarql.tq my_csv.csv > my_ntriples.nt

# Sort and dedupe the results
sort -u my_ntriples.nt > my_ntriples_sorted.nt
```

### Search

**grep** - search a file or set of files for a particular string or regex.

```
# Find all gist term declarations in Turtle files
grep ^gist: *.ttl
```

Useful options to refine the output:

```
# Include line numbers
grep -n ^gist: *.ttl

# Show file names only
grep -l ^gist: *.ttl

# Show results with two preceding lines
grep -B2 ^gist: *.ttl

# Show results with two following lines
grep -A2 ^gist: *.ttl

# Show results with two preceding and following lines
grep -C2 ^gist: *.ttl

# Recursive search
grep -R ^gist: *.ttl
```

**find** - find files under a specified starting point conforming to a specified filename pattern.

```
# Find all Turtle files starting from the current location. 
# Asterisks are required to allow characters before or after the name pattern.
find . -name "*.ttl"
```

### String Substitution Across Files

**sed** - a Linux program that itself provides a wealth of operations. Foremost among these (for my purposes) is string substitution across multiple files at once. This saves you the time of opening each file individually and performing a find-replace. Example:

```
# Replace the string "gist" with the string "owl" in all Turtle files in place
sed -i '' 's/gist/owl/g' *.ttl
```

Note: the empty string following -i is needed in the MacOS version, not in Linux. Not sure about Windows.

Make it recursive:

```
grep -Rl gist: . | xargs sed -i '' 's/gist:/owl:/g'
```

Delete all empty lines in a file:

```
# Delete all empty lines in a file in place (MacOS):
sed -i '' '/^[[:space:]]*$/d' <filename>
```

### Output

**echo** - print a string to the terminal. This is useful for getting the value of an environment variable. Example:

```
echo $PATH
```

**Backticks** can be used to execute a command within another command. This is useful for many things; I use it to navigate to a directory when I don’t know its location:

```
# Change to the directory named by the environment variable $JAVA_HOME
cd `echo $JAVA_HOME`
```

This is a simple example that replaces the following, slightly more verbose series of commands (see the section Using the Command History below on use of **$!**), but it can be useful in more complex cases:

```
echo $JAVA_HOME
cd !$
```

**>** (right angled bracket) - redirect output to a file. Example:

```
# Print the grep output to a file named results.txt
grep ^gist: *.ttl > results.txt
```

**|** (pipe) - direct output of one command into a following command. Example:

```
# List all Turtle files last modified in November
ls -l *.ttl | grep Nov
```

### Using the Command History

**history** - list your command history, with a sequence number. This allows you to issue bang + entry number (e.g., **!23**) to repeat that command.

To look for specific parts of your command history, say all your recent tarql commands:

```
history | grep tarql
```

**^<string1>^<string2>** - substitute string2 for the first occurrence of string1 in the immediately preceding command. Example:

```
Find all gist term declarations in Turtle files
grep ^gist: *.ttl
# Find all pleo term declarations in Turtle files 
^gist^pleo
```

Note: A series of commands can be concatenated on a single line separated by semi-colon:

```
# As above
grep ^gist: *.ttl ; ^gist^pleo
```

**!$** - repeat the last word in your previous command. Useful to perform a second operation on the same file or folder. Example:

```
# Make a directory, move a file to it, and cd into it
mkdir ~/Document/SemanticArts/Clients
mv mydocument.docx !$
cd !$
```

Many other command substitutions are possible, but this is the one I use most.

Advanced: **!!:gs/<string1>/<string2>** replaces *all* occurrences of string1 with string2. The first part of this command (!!) references the immediately preceding command. Variations allow you to reference other prior commands.

### Navigating the Commandline

**Ctrl+a** - Jump to beginning of commandline

**Ctrl+e** - Jump to end of commandline

**Ctrl+k** - Clear all text from the cursor to end of line

**Ctrl+u** - Clear all text from cursor to beginning of line

Use **Ctrl+a Ctrl+k** or **Ctrl+e Ctrl+u** to wipe the current line clean

**Ctrl+c** - Cancel running command

Note: On Mac, this is the Ctrl key, not the Cmd key.

## Customizing Your Environment

Both bash and zsh use a few customization files in your home directory to set environment variables, aliases, customize your prompt, etc. The most useful ones are:

**bash:** .bashrc, .bash\_profile, .profile

**zsh:** .zshrc, .zprofile

Note: Best practice used to be to put things in .profile that are not shell-specific. However, zsh uses .zprofile but not .profile, unfortunately neutralizing the advantage of the file.

Examples:

```
alias ll='ls -l'
export PATH=$PATH:/opt/mysql/bin
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
# PROMPT: add color, username, current directory                                                                 
PS1="%F{blue}%n: %~ %#%f "
```

**source** <file> - read in changes to your config files without restarting the shell.

## Accessing an Executable From Anywhere

There are a few steps to being able to access an executable file from anywhere, without providing the full path.

Create a bin file in your home directory:

```
mkdir ~/bin
```

Add this directory to your path; in .zshrc (or .bashrc or .profile):

```
# Add to front of path
PATH=/Users/<username>/bin:$PATH

# Or add to end of path
PATH=$PATH:/Users/<username>/bin

# And export it
export $PATH
```

Read in the updated file:

```
source ~/.zshrc
```

Create a symbolic link to the file in your new bin directory:

```
# Find out where tarql is
which tarql

# Go to your bin directory
cd ~/bin

# Create a symbolic link to the tarql application, e.g.:
ln -s tarql /Users/<username>/Tools/tarql-1.2/bin/tarql
```

Now you can run TARQL without providing the full path from anywhere.

```
cd ~/Projects/<project>/tarql
tarql person.tq persons.csv > person.ttl
```

A simpler option is just to add an alias to your .zprofile. Example:

```
# To run Jetbrains Toolbox
alias tarql='/Users/<username>/Tools/tarql-1.2/bin/tarql'
```

While simpler to set up, the first approach is more generalizable, and consists of operations you will want to use in other contexts.

## Shell Scripts

Small shell scripts are useful for orchestrating a series of commands that is used frequently. Most of the commands are the same as those you run on the command line. Examples:

```
#!/bin/bash

# Run Python validation tests
python run_shacl_tests.py vocabulary_shapes_tests/ ../model_validation/vocabularyShapes.ttl ../model_validation/modelShapes.ttl ../globalShapes.ttl
# Look for test failures
grep -n earl:failed validation_results/SHACL_Validation_Results.ttl
```

```
#!/bin/bash

VALIDATION_DIR=validation/model_validation
ONTO_TOOL_YAML=validate_vocabularies.yaml
python -m pip install --upgrade pip
python -m pip install onto-tool
pushd $VALIDATION_DIR
mkdir -p validation_results
ls -R -al
exit_code=0
onto_tool bundle $ONTO_TOOL_YAML || exit_code=$?
if [ ${exit_code} -ne 0 ]; then echo "Validation failed." ; else echo "Validation succeeded."; fi
```

Note: the **if** statement, not shown in previous sections, can also be run from the command line.

## Recommended Resources

[Learning the bash Shell](https://www.amazon.com/Learning-bash-Shell-Programming-Nutshell/dp/0596009658/ref=asc_df_0596009658/?tag=hyprod-20&linkCode=df0&hvadid=266005469508&hvpos=&hvnetw=g&hvrand=2007972823896672919&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9005779&hvtargid=pla-466237700865&psc=1) - as noted, mostly applicable to zsh as well. One of the best IT books I’ve ever purchased.

[Bash Pocket Reference](https://www.amazon.com/Bash-Pocket-Reference-Power-Admins/dp/1491941596/ref=pd_bxgy_img_sccl_1/144-6659881-6582708?pd_rd_w=2lCCG&content-id=amzn1.sym.7f0cf323-50c6-49e3-b3f9-63546bb79c92&pf_rd_p=7f0cf323-50c6-49e3-b3f9-63546bb79c92&pf_rd_r=GF9Y386JKDZPDGPS7V2H&pd_rd_wg=K5vGx&pd_rd_r=5fa2e6c3-45b9-47d5-94c0-dece5ae47591&pd_rd_i=1491941596&psc=1)

[A User’s Guide to the Z-Shell](https://zsh.sourceforge.io/Guide/zshguide.html)

<https://scriptingosx.com/2019/06/moving-to-zsh/> - you don’t have to be a bash user to read this

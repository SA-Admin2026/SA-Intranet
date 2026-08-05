---
title: "Command Line Utilities"
confluence_id: 520814627
source: "Command-Line-Utilities_520814627.html"
---

(from Ted Hills)

# Abstract

The concept of a command-line utility was greatly refined with the introduction of the Unix operating system and its concept of a filter, making it possible to compose programs into longer programs with ease. This paper summarizes Unix command-line filter design principles, including program option argument conventions and the proper uses of filename arguments, stdin, stdout, and stderr. Whether or not a program is, strictly speaking, a filter, following these conventions makes it easier for humans to use a program, and easier to compose programs into larger programs using shell scripts.

# Command-Line Argument Design

A program should take command-line arguments following this pattern:

```
program-name [options...] [filenames...]
```

where:

`program name` is the name of the program interpreted by the command interpreter

`[options...]` is an optional list of options

`[filenames...]` is an optional list of file pathnames

It is important that all options precede any filename arguments.

# Command-Line Option Arguments

A variety of option conventions have arisen over the years. [The Apache Commons CLI project](http://commons.apache.org/proper/commons-cli/index.html) summarizes them this way:

- - POSIX-like options (e.g., `tar -zxvf foo.tar.gz`)
  - GNU-like long options (e.g., `du --human-readable --max-depth=1`)
  - Java-like properties (e.g., `java -Djava.awt.headless=true -Djava.net.useSystemProxies=true Foo`)
  - Short options with value attached (e.g., `gcc -O2 foo.c`)
  - Long options with single hyphen (e.g., `ant -projecthelp`)

Not all of these conventions must be supported by a program.

It is required that a program that takes options either support the POSIX-like options or the GNU-like long options.

POSIX-like single-letter options can be run together (the first convention listed above). Single-letter options can have either attached or detached arguments (the fourth convention, plus ‘`-O 2`’ as equivalent to ‘`-O2`’).

GNU-like long options are introduced with a double hyphen. Long options may take arguments by following the option name with an equal sign and the value (the second convention listed above).

The order in which options appear should not affect their interpretation.

In order to support the possibility that filenames might begin with a hyphen, the option ‘--’ alone should terminate option processing. It signals that all options have been provided and that any arguments after the ‘--’ are filename arguments.

# Command-Line Filename Arguments

In general, a program should not use any hard-coded or default pathnames or filenames. Filename extensions should reflect the syntax and type of a file. Output files should be created in the current directory unless an alternative directory is specified by an option argument. Output filenames should reflect input filenames when that makes sense.

## Input Filenames

A program may need or accept any number of inputs depending on its design. For example, a diff utility wants exactly two file inputs, while some commands take no input files and merely produce outputs, and other commands can take an arbitrary number of file inputs.

For programs that take any number of file inputs:

- If no filenames are given on the command line, the program reads from stdin.
- If one or more filenames are given on the command line, the program reads only those files and does not read from stdin, except that a filename of a single isolated hyphen ‘-’ can appear anywhere in the list of filenames. Each file is opened and read in its entirety, in the order given on the command line, before the next file is opened. This includes stdin if specified with a hyphen.

For programs that take a fixed number of file inputs, they should be provided in the order specified in the program’s documentation.

## Output Filenames

A filter-like program will produce exactly one output file. Ideally, output is sent to stdout, giving the user of the program the freedom to redirect the output to any file or to pipe it to another command.

If a program produces multiple outputs that must be named, there are several approaches.

Output file names can be given using options like ‘`-o output_filename`’ or ‘`--output=filename`’. More specific option letters or names may be used describing the nature of the output. The output filename should be treated like a pathname; if it’s relative, it’s relative to the current directory; if it’s absolute, it is treated as an absolute pathname.

Alternatively, output filenames can be derived from input file basenames. See the basename shell command for a description of what a basename is. An output file’s basename should be the same as the input file’s basename, and an output file’s extension should indicate its type or format.

Output files should by default be created in the current directory, but it might be useful to provide an option to change the output directory.

### Example

A program `bifurcate`reads an RDF file and produces two outputs, one in Onto XML and one in plain text. The command is given as

`bifurcate /some/other/dir/MyTriples.rdf`

In the absence of other options:

- The Onto XML file is named

  `MyTriples.onto.xml`
- The plain text file is named

  `MyTriples.txt`
- Both files are created in the current directory

# stderr, Standard Options, and Exit Codes

stdout and output files should, in general, contain no diagnostic messages, unless those messages conform to the syntax and type of the output file.

All debug and error messages should be directed to stderr.

If any command-line argument parsing errors are detected, then, before any output is generated, the program should terminate with:

- a message to stderr giving the exact nature of the argument problem (e.g., an unrecognized option, an option missing its argument, an insufficient number of filename arguments, too many filename arguments, a file that can’t be opened)
- a message to stderr providing a usage summary of the arguments expected by the program
- an exit code of 2

The program should also support the options ‘`-h`’ and ‘`--help`’ which will print usage information (to stderr). Try entering ‘diff --help' in a shell and look at the output for a good example.

The program should support the options ‘`-v`’ and ‘`--version`’, which will cause the program to print version information (to stderr).

A program should terminate with one of the following exit codes:

- 0: no errors
- 1: some errors; some output might have been produced
- 2: argument errors; no output produced

# Configuration Files and Environment Variables

Property files and other configuration files should only be used to hold parameters that are not expected to change frequently. Input and output filename and directory path information should never be given in a configuration file.

An environment variable may be used to indicate the location of a configuration file. A command-line option should be provided to override the environment variable value.

# Temporary Files and Directories

Temporary files and directories should be created using platform-standard techniques. For Java, this means using the `createTempFile()` function. Linux Shell scripts should create temporary files and directories under /tmp for files that don’t need to survive a reboot, and /var/tmp for files that do need to survive a reboot. Under Windows, scripts should create temporary files and directories under the %TEMP% directory.

Normally, a program or script should delete its temporary files upon normal completion. Temporary files can be kept for debugging purposes or when an error occurs.

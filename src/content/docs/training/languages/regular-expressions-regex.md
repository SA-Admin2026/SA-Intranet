---
title: "Regular Expressions (RegEx)"
confluence_id: 514588675
source: "514588675.html"
---
A **[regular expression](https://en.wikipedia.org/wiki/Regular_expression)**, **regex** or **regexp** (sometimes called a **rational expression**) is, in theoretical computer science and formal language theory, a sequence of characters that define a *search [pattern](https://en.wikipedia.org/wiki/Pattern_matching "Pattern matching")*. Usually this pattern is then used by string searching algorithms for "find" or "find and replace" operations on strings, or for input validation. Source: [Wikipedia](https://en.wikipedia.org/wiki/Regular_expression)

## External Tutorials

- [RegEx Cheat Sheet](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285): (Medium: 6 min read)
- <https://regexr.com/> - An excellent sandbox to test your regular expressions and see a visual description of how they are being applied to the target text.
- <https://regex101.com/> - Another sandbox, supports multiple extended RegEx flavors.

## Example Search and Replace Using RegEx

The task is to find a semicolon that should be a period because what follows is a whole triple: subject, predicate and object. Specifically, the algorithm needs to search for a semicolon, then skip over everything (including new lines) until you find an open angle bracket. Then keep going, skipping over everything (not including new lines) until you get to a closed angle bracket followed by the text "a universal:". The replacement text is exactly the same as the original text except that the semicolon is a period.

### Legend

- Green = literal characters
- Blue = parens
- Special characters = red

**Example original string:**

universal:BusinessProcess-contains <<http://tai.ms.com/ontology/universal#Business>Process/BP0001394> **;** **(← here is the green semicolon)**<http://tai.ms.com/ontology/universal#FgBpMad/2649-BP0001310-SameDay> a universal:FgBpMad  ;

**The result after the replace is:**

universal:BusinessProcess-contains <<http://tai.ms.com/ontology/universal#Business>Process/BP0001394>   **.**  **(← here is the green period)** <<http://tai.ms.com/ontology/universal#FgBpMad/2649-BP0001310-SameDay>> a universal:FgBpMad  ;

Below is the RegEx search string to match against, followed by the steps in the search.

## **;(\s\*<.\*>a universal:)**

1. Search for a **;**.
2. Everything inside the **()** is the first (and only, in this case) variable referred to in the replace string with **\1**.
3. **\s** means any character including new lines. The **\*** after means repeat what comes before the **\s**, which means keep going until you get to the next literal character, which is a **<**.
4. The **.** means match any character not including new lines. Then **\*** after, again repeat the **.** until you get to the next literal character which is a **>**, which is followed by **a universal:** (including the space before the **a**).
5. The closing **)** defines a variable that can be referred to in the replacement string.

The string that this whole thing is replaced with is the same string, except that the semicolon is a period.

The blue text is assigned to the variable **\1**.

The replacement string is small. it consists of a period followed by exactly what was in the original string. The period here is a literal character, just a period, the one replacing the semicolon.

The image below is what it looks like in Notepad++.

![](/attachments/514588675/514883591.png)

## Notes

Dan Carey noted the **SPARQL CONTAINS()** function can frequently solve simple string search needs without having to remember some of the trickier regex syntax.

SPARQL also has a regex feature for more complex stuff.

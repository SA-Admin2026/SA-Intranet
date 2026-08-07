---
title: "Special Characters, Unicode & HTML"
confluence_id: 26574857
source: "26574857.html"
---
Special characters are often a nuisance. Here are a few tips and resources.

**Unicode**. There is no one technique that seems to work in all applications.  The following works in Outlook and Word but not Powerpoint, Visio or Notepad++, nor in this Wiki.

The key is alt-x (press and hold the alt key and then press x)

1. Place the cursor immediately after a 4 digit Unicode and alt-x replaces the 4-digits with the character. For example 00B0 follows by alt-x enters the degree symbol (°)  
   If you just typed the 4 digits, the cursor will already be in the right place, just type alt-x after th 4th digit.
2. Place the cursor immediately after any character at all and alt-x replaces that character with the 4-digit unicode.

This mean you can put your cursor wherever you like and:

1. If there is a  a 4-digit unicode before before the cursor,  then the 4-digit code is replaced with the encoded character.
2. If there is not, then the character is replaced with its 4-digit unicode.

So, just keep pressing alt-x and what you see will alternate between the unicode and the character itself.

If you see a special character somewhere and you want the 4-digit code and don't want to look it up on google, and alt-x does not work, then copy/paste it into Word then, hit alt-x to get the code.

More information:

- [Three ways to enter unicode characters in windows](http://www.johndcook.com/blog/2008/08/17/three-ways-to-enter-unicode-characters-in-windows/)
- [Using character escapes in markup and CSS](https://www.w3.org/International/questions/qa-escapes)

**CDATA** (tbd)

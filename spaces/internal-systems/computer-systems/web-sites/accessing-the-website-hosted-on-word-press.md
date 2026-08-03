---
title: "Accessing the Website hosted on Word Press"
confluence_id: 514621480
source: Accessing-the-Website-hosted-on-Word-Press_514621480.html
---

# Accessing the Website hosted on Word Press

Contact [office.manager@semanticarts.com](mailto:office.manager@semanticarts.com) for login credentials.

Access website content for editing here: <https://www.semanticarts.com/wp-admin/>.

If you need to update the gist web page, follow these instructions: [Updating gist Page Content](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/669614087/Updating+gist+Page+Content). These instructions cover the basics for editing content on the gist page and do not address the many steps required for releasing a new version of gist.

You can find basic word press documentation here:

<https://ithemes.com/tutorial/category/wordpress-101/>

<https://siteorigin.com/page-builder/documentation/>

<https://siteorigin.com/widgets-bundle/getting-started/>

##### Out of Date as of October 2018

hosted on Digital Ocean

For accessing all of the files stored in the domain [www.semanticarts.com](http://www.semanticarts.com) (This does not include similar domains such as dca.semanticarts.com) 

1. Open a command line interface such as Bash (Mac/Linux Terminal), Powershell or the Command Prompt
2. On the command line, enter the following after the dollar sign: 

   ```
   $ ssh root@104.131.101.103
   ```

   1. If this is your first time, it will prompt you with "Are you sure you want to continue connecting (yes/no)?"
   2. Enter in "yes" following this prompt.
3. It will then ask you for a password, enter the following password:

   ```
   Bex661&&
   ```
4. Once you are connected, change directories to where the files are stored:

   ```
   $ cd ../var/www/html
   ```

accessing Website Cockpit

For changing some dates, locations, etc. stored on [www.semanticarts.com](http://www.semanticarts.com)

1. Go to the following URL: [www.semanticarts.com/cockpit](http://www.semanticarts.com/cockpit) 
   1. If you do not already have a username and password, you can request one with Melissa ([office.manager@semanticarts.com](mailto:office.manager@semanticarts.com))

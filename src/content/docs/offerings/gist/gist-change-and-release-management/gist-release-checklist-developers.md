---
title: "gist Release Checklist: Developers"
confluence_id: 49479787
source: 49479787.html
---
This checklist applies to the developers' release task after being given the release package by the ontologists. The ontologists' release process is outlined in [gist Release Management: Ontologists](gist-release-management-ontologists.md).

- The gist release manager will create a .zip file for the release
- Copy that file to
  - On server HAL: /home/monolith/ontologies/
  - In the future after moving to the new server WALL-E: /home/ssd/www/ontologies/
- Unzip the archive file: unzip gist9.2.0\_webDownload.zip
  - It should put the .owl files into a subdirectory of the same name but without the .zip extension
- Run: ./linkup-files.bash 9.2.0
  - It needs the version number as a command line argument to know which version to setup
  - Files need to be names the same format every time or the script won't work (adding or deleting owl files is OK)
  - It will make soft links for the 3 versions of filenames we support,  for example
    - gistCore.owl
    - gistCore9.2.0
    - gistCore9.2.0.owl
- Update the website
  - Login at <https://www.semanticarts.com/wp-admin/>
  - Edit the gist page and replace all instances of the old version number with the new one  
    - Edit the text about the version
    - Depending on what is in the release you might want to add a bit of text to say what changed.
      - If the dependency hierarchy of modules ever changes you'll probably need to update the graphic. It would probably be good to link to one on the download site so it can be updated programmatically.
    - Edit the link to the web download zip file
    - Update the link to the release notes
    - If applicable, update the png image of import structure
      - This should be moved to being hosted on the ontology server so the file can be updated automatically
    - To publish the changes click the Update button on the right hand side
    - Test all the links
  - Edit 2 table that provide content for the page
    - Currently this is a bit annoying. I'd like to come up with an automated way to update it.
    - Click on TablePress in the left hand menu
    - Edit the "gist Releases" table
      - You have to edit each entry and make 2 changes, the "text" and the "url"
    - Edit the "previous gist Versions" table
      - Click (select) the box at the beginning of row 2
      - In the Table Manipulation section below, click the Duplicate button.
      - Go back up and there should be a new row 2 that you can edit to update the information for the latest version
    - Click Save Changes at the bottom of the page
- Test that everything works
  - For now this is all manual, we should make some automated tests.
- I haven't been updating the gistOnline stuff as mentioned below.
  - I don't know that it has worked in a while. I only just recently saw the notes below that it needs something to be done.

## Old Steps - some might still be important

- Upload gist files to HAL (/home/monolith/ontologies/) so gist can be downloaded directly via URL ([http://ontologies.semanticarts.com/o/gistCore7.x.owl](http://ontologies.semanticarts.com/o/gistCore7.3.owl))
  - Upload files with .owl extension AND without .owl extension
  - test loading the ontology from Protégé and also open the link in browser.
    - from Mac (in a terminal window)
      - attach the Semarts shared drive  [Accessing the shared drive](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/23461899/Accessing+the+shared+drive)
      - cd /Volumes/SemanticArts/\_SemanticArts/Offerings/gist/\_\_externallyReleasedGists
      - cd to the directory to be copied
      - scp \* monolith@192.168.2.38:~/ontologies          (note: we had some broken pipes and had to do some of them one at a time) – I had to do them one at a time!
- Update gistOnline – see ontodoc-web repo in github
  - Put new gist files in ontodoc-web/data/gist folder and rerun program
  - Test to make sure website link is working

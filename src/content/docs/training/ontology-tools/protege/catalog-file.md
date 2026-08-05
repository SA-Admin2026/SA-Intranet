---
title: "Catalog File"
confluence_id: 50987028
source: "Catalog-File_50987028.html"
---

# The Punch Line

To get catalog xml files to be painless and portable:

1. Create the file yourself (or edit from existing).
2. Always use relative file paths, you can point to folders above or below in the folder hierarchy using "../"  or "/" notation respectively.
3. Never have automatically generated entries (if you do it right, Protégé will not create them)

For example the below is a listing of a file I just created for the master X.x version. I tested it by moving around the folder to different places on my hard drive and thumb drivers.  Here is the file to download: [catalog-v001.xml](/attachments/50987028/51085327.xml)

<?xml version="1.0" encoding="UTF-8" standalone="no"?>  
<catalog prefer="public" xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistAddress.X.x>" uri="gistAddress.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistAgreement.X.x>" uri="gistAgreement.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistCategory.X.x>" uri="gistCategory.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistContent.X.x>" uri="gistContent.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistCore.X.x>" uri="gistCore.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistEvent.X.x>" uri="gistEvent.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistID.X.x>" uri="gistID.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistIntention.X.x>" uri="gistIntention.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistMagnitude.X.x>" uri="gistMagnitude.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistMeasure.X.x>" uri="gistMeasure.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistOrganization.X.x>" uri="gistOrganization.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistPerson.X.x>" uri="gistPerson.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistPhysicalThing.X.x>" uri="gistPhysicalThing.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistPlace.X.x>" uri="gistPlace.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistTemporalRelation.X.x>" uri="gistTemporalRelation.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistTime.X.x>" uri="gistTime.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistTop.X.x>" uri="gistTop.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistUnit.X.x>" uri="gistUnit.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistUnitDim.X.x>" uri="gistUnitDim.X.x.owl"/>  
<uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistWiki.X.x>" uri="gistWiki.X.x.owl"/>  
</catalog>

# The background details

A catalog xml file typically has the following structure:

1. Header line  
   <?xml version="1.0" encoding="UTF-8" standalone="no"?>
2. The main catalog  
   <catalog ...
   1. User entered import resolutions  
      <uri id="User Entered Import Resolution" name="(full ontology uri)" uri="(path to ontology file)"/>
   2. Automatically generated entries  
      <group ...
      1. <uri id="Automatically generated entry, Timestamp=1488309579960" name="(full ontology uri)" uri="(path to ontology file)"/>
      2. ...</group>

           </catalog>

For example, this is what I get when I manually select where the files should go.

<?xml version="1.0" encoding="UTF-8" standalone="no"?>  
<catalog prefer="public" xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">  
 <uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistTemporalRelation.X.x>" uri="file:/D:/SEMANTIC-ARTS/NAS/Offerings/gist/\_\_\_workingGistMaster/gistTemporalRelation.X.x.owl"/>  
 <uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistIntention.X.x>" uri="file:/D:/SEMANTIC-ARTS/NAS/Offerings/gist/\_\_\_workingGistMaster/gistIntention.X.x.owl"/>  
...  
 <uri id="User Entered Import Resolution" name="<http://ontologies.semanticarts.com/o/gistWiki.X.x>" uri="file:/D:/SEMANTIC-ARTS/NAS/Offerings/gist/\_\_\_workingGistMaster/gistWiki.X.x.owl"/>  
 <group id="Folder Repository, directory=, recursive=true, Auto-Update=true, version=2" prefer="public" xml:base="">  
 <uri id="Automatically generated entry, Timestamp=1488309579960" name="<http://ontologies.semanticarts.com/o/gistAddress>" uri="gistAddress.X.x.owl"/>  
 <uri id="Automatically generated entry, Timestamp=1488309579960" name="<http://ontologies.semanticarts.com/o/gistAgreement>" uri="gistAgreement.X.x.owl"/>  
...  
 <uri id="Automatically generated entry, Timestamp=1488309579960" name="<http://ontologies.semanticarts.com/o/gistWiki>" uri="gistWiki.X.x.owl"/>  
 </group>  
</catalog>

The file path can be full or relative. Full gets you in trouble. Relative allows for portability and also to conveniently have files in different folders.  E.g. "../foo.owl" says the file is called foo.owl and is in the next folder up the hierarchy. This is used extensively by FIBO.

We are better off getting rid of the automatically generated section entirely, and to pre-specify the relative paths. That makes it easy for anyone to load the files from anywhere.

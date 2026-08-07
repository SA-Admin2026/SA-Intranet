---
title: "Google BigQuery"
confluence_id: 45088778
source: "Google-BigQuery_45088778.html"
---
Google provides a collection of databases to users of BigQuery for experimentation.

These include the following (project:dataset.table):

- **bigquery-public-data:hacker\_news** - This dataset contains all stories and comments from Hacker News from its launch in 2006.  Each story contains a story id, the author that made the post, when it was written, and the number of points the story received.  
  - - comments
    - full\_201510
    - stories
- **bigquery-public-data:noaa\_gsod** - This public dataset was created by the National Oceanic and Atmospheric Administration (NOAA) and includes global data obtained from the USAF Climatology Center.  This dataset covers GSOD data between 1929 and 2016, collected from over 9000 stations.  
  - gsod1929
  - ...
  - gsod2016
- **bigquery-public-data:samples** - A collection of tables that are subset of larger datasets.  These tables are suited for testing queries and learning BigQuery.  
  - github\_nested
  - github\_timeline
  - gsod (weather data)
  - natality (very interesting information about 'birth events')
  - shakespeare
  - trigrams
  - wikipedia
- **bigquery-public-data:usa\_names** - This public dataset was created by the Social Security Administration and contains all names from Social Security card applications for births that occurred in the United States after 1879. Note that many people born before 1937 never applied for a Social Security card, so their names are not included in this data. For others who did apply, records may not show the place of birth, and again their names are not included in the data. All data are from a 100% sample of records on Social Security card applications as of the end of February 2015. To safeguard privacy, the Social Security Administration restricts names to those with at least 5 occurrences.
  - usa\_1910\_2013
- **gdelt-bq:hathitrustbooks** - (no comments included)
  - 1800
  - ...
  - 2012
- **gdelt-bq:internetarchivebooks** - (no comments included. Must be from Brewster Kahle's collection)
  - 1800
  - ...
  - 1922
  - 1923notxt
  - ...
  - 2014notxt
- **lookerdata:cdc** - From Health and Human Services <http://catalog.data.gov/dataset/project-tycho-tm-level-1-data>
  - project\_tycho\_reports
- **nyc-tlc:green** - (no comments included but is clearly something to do with NYC taxi rides)
  - trips\_2014
  - trips\_2015
- **nyc-tlc:yellow** - (no comments included but is clearly something to do with NYC taxi rides)
  - trips

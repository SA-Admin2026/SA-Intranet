---
title: "Time Summary Report"
confluence_id: 2253488175
source: "Time-Summary-Report_2253488175.html"
---

Video Tutorial: <https://youtu.be/QbY9l7f-Sqo>

1. Download the csv for the burn charts directly from Spark (HR Section, “Burnchart Details” view. Use the down arrow in the upper right corner to download.
2. Create a copy of the TC document with the current date. Copy/Paste the raw csv data into the “Raw Data” tab (don’t copy over headers, use the ones already there)
3. Go to the Data tab on the Excel ribbon and click “Refresh All” to update pivot tables with the new data
4. Start with the Pivot Tables on the Hours tab

   1. 1st table - show the last four weeks, make sure the start of the pay period is light green color
   2. 2nd table - show this pay period only
   3. 3rd table - 4 weeks from the last pay period
5. Start with the 2024 Earned Revenue on the “Charts” tab

   1. Update the 8 week pivot to include current week and the previous 7
   2. Copy all weeks from the YTD pivot
   3. Navigate to the ERYTD tab and paste those values in (if you right click, Paste Special, Paste Values, Transpose it will fill correctly)
6. Next, update each individual project chart

   1. Go to the “Tables” tab
   2. Make sure the pivot at the top is set to show Earned Revenue

      1. Click in the pivot table, then go to the Excel ribbon, “Pivot Table Analyze” tab, then select “Field List”. Make sure that the “earnedRev” checkbox is selected not the “payroll” one
   3. Select the appropriate project in the Pivot Table, make sure Task is set to “All”
   4. You can either copy/paste the pivot values into the project or just copy by hand. Use “Paste Special”, Paste Values & Transpose to flip the columns & rows
   5. On the 3 internal projects, you’ll need to follow the above steps to uncheck “earnedRev” and select “payroll” to show actual values
7. Once done, scroll through all the project graphs to make sure everything looks good

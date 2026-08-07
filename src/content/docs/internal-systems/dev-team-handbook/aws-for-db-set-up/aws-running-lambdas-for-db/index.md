---
title: "AWS running lambdas for D&B"
confluence_id: 228458534
source: 228458534.html
---
Assuming you have everything set up as per [AWS for D&B Set up](../)  you're ready to go

In the lambda management window, you can click the upper right hand corner and simulate an event, and test it.

Results will go in the execution results at the bottom and if you go to the tab called "Monitoring" and go into one of the graphs, you can select "Jump To Logs" and get info about how it ran.(the print statements come out in this Jump to Logs and not in the execution results)

From the set up page, I now have my code and the packages it needs co-located on my system.  The sequence for each change is

- Edit the file
- Delete the old zip file (lamdbaPackage on my C: drive now)
- remake the zip file – note the zip file must contain all the packages you need that are not in the standard AWS python install
- [upload the zip file package](upload-a-zip-file-to-lambda-management-console.md)
- execute either the test method or a real drop  (note may need to change the binding of the event to the method, thusly)
- go to [monitoring](monitor-debug-an-aws-lambda.md) to see your logs and errors

<!-- section-nav:start -->

## In this section

- [Monitor / Debug an AWS lambda](monitor-debug-an-aws-lambda.md)
- [Upload a Zip File to Lambda Management Console](upload-a-zip-file-to-lambda-management-console.md)

<!-- section-nav:end -->

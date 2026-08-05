---
title: "Vacation Analysis"
confluence_id: 2254176257
source: "Vacation-Analysis_2254176257.html"
---

Frequency: Monthly

Box\Semantic Arts Files\Human Resources\PayAndBenefits\TimeOff

Semantic Arts has an open vacation policy due to regulations set by the Colorado government and affirmed by the Supreme Court of Colorado. We don’t vest vacation in order to not pay out vacation upon separation from the company.

Employees are encouraged to take about 4 weeks per year, but the policy is very flexible. You should never discourage someone from taking vacation time unless they are well over the limit. There is also no “use or lose” time if people are asking. We run the vacation analysis on an 18 pay period lookback. The reason for this is to account for long trips or end of the year surges. This means you would expect someone to take up to 6 weeks over 18 pay periods.

Once a month or so, you should run a vacation analysis

1. Get the vacation download csv from Spark
2. Open the vacation spreadsheet found at the file location above titled “vacation analysis new”

   1. Paste the query contents into the “rawdata” tab
   2. Click “Refresh All” under the Data tab on the top ribbon to update tables
   3. Change cell B1 to be the most current pay period
   4. Insert columns drag the formatting/formula across to the current pay period (likely one or two columns to the right)

      1. This should cause it to show actual hours taken, not the percentages used in future periods
   5. Add new feature periods on to the end if needed (drag formatting/formula over)
   6. Review for anyone with over 100% in the 1st future period (or use the total hours column to look for anyone over 240)

If you detect high patterns of overall vacation:

* Look for anyone with time over 240 hours in the last 18 pay periods. If someone is over but they have time rolling off in the next few weeks, disregard. Also disregard anyone who might be over by just a few hours (say 10% or less)

  + You might ask Dave before you email anyone to see, sometimes it may not be worth it!
* If anyone is still high, they should receive something along the lines of the following email:

*“As per our policy, we have discretion on approval of all paid time off requests. Our policy balances the regenerative power of time off with its total cost, both to us and to our clients.*

*Based on our query, you have utilized \_\_\_ hours of vacation over the past 18 periods. The maximum we’d like to see is roughly 240 (6 weeks).*

*Based on your historical use, we won’t be approving additional PTO requests until enough time will have rolled off to have some available). You can reference the chart below to see when we anticipate that happening.*

*Any other PTO before that time will likely need to be taken unpaid.”*

**NOTE: You should also glance at holidays and sick time. There are annual limits to both of these categories, so mainly watch to make sure no one goes over. If they do, best to send an email and have them re-categorize as vacation.**

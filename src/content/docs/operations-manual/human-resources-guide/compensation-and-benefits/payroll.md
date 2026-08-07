---
title: "Payroll"
confluence_id: 2254077953
source: "Payroll_2254077953.html"
---
[![](https://semarts.atlassian.net/wiki/download/thumbnails/2254077953/2022_Tracking_Spreadsheet.xlsx?version=1&modificationDate=1657834869887&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/2254077953/2261549070.xlsx)[![](https://semarts.atlassian.net/wiki/download/thumbnails/2254077953/Payroll%20Mapping%20(1).pdf?version=1&modificationDate=1656448437473&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/2254077953/2256470017.pdf)

Frequency: Every 4 Weeks

Benefits information and payroll tracking can be found at: Z:\_SemanticArts\HRRecruitingAndSubcontractors\PayAndBenefits\Payroll

### Running Payroll:

**Set up Rippling Pay Runs**

* Canada requires to create an off-cycle run (make sure to put CAN in the title)

  + Name: CAN Payroll {year} {start month - day} - {end month - day}

    - example: CAN 2024 #12: Oct 18 - Nov 14
  + Who do you want to pay:

    - Select “all employees” but it seems limited to Semantic Arts Canada Inc, so you only get the Canadian employees.
  + Select Paydate: same as for the US

    - Occasionally they will have a Holiday on the normal payday Monday and that won’t be selectable. Pick the previous business day.
  + Would you like to display a pay period for this run? **YES**

    - Enter the start and end dates of the pay period.
  + Select: I’ll specify the gross pay (normal pay run)
  + “Should we include deductions in this run?” “All deductions”.
* UK should automatically populate, just verify dates
* US: Create off-cycle pay run

  + Pay: All Hourly (FT and PT), All Temp/Intern
  + No 3rd party sick pay
  + Specify Gross
  + Some employees paid via direct deposit
  + Select Pay Date (enter the correct pay date, usually the 2nd Monday after the end of the pay period)
  + Select Pay Period. Then enter the start and end dates.
  + Include percentage-based deductions.
  + Include flat dollar deductions
  + Yes, apply supplemental tax rate
  + Monthly withholding frequency
  + Yes, additional tax withholding

**Spreadsheet Work:**

* Gather required materials

  + Run a final Hours query and print
  + Check Spark Validations section for potential issues
  + CSV files from Spark – Go to Pay Period, “Generate Pay Stubs for Pay Period” tab, “Execute All Automated Pay Stub Steps”

    - Commissions
    - “Payroll” (found under the current pay period as a dropdown
  + Earned Revenue (for entering into QB)
* Any additional notes to make sure get done correctly
* Be sure to Close Pay Period in Spark once we are confident everything looks correct

### Run payroll

1. Parameters Tab

   1. Update Exchange rates (links in doc)
   2. Add hours and ER from Timecard query
   3. Get Balances from Mark for Checking & CAN
2. Start payroll tasks

   1. Paste Payroll csv into “Hours and Gross (copy paste) & spot check
   2. Banking & Crosschecks

      1. Compare last and current rates for wildcards
      2. Look at the hours check
      3. Look at the reimbursement check
   3. Update “LastMonthEmployerContribution” with report from Rippling
   4. Look at each payroll spreadsheet for the “big picture” - reimbursements, bonus, other contributions, etc.
   5. Save csv and resave to xslx (do all three at once)
   6. Save csv for Penfolds for Mark to submit on their website
3. Upload to Rippling (note: they have been changing the column headings and orders, check very carefully)

   1. Payroll (US): Spot check and verify hours, rate, commissions, bonus, deductions, etc.
   2. Global Payroll (Canadian): Verify hours and rate, check expenses. Manually enter RRSP on Deductions
   3. Global Payroll (UK): Verify hours and rate, check expenses.

      1. Current amounts are Employer (3%), Employee (55% - 5% standard and 50% AVC)
4. Notify Mark so he can review and approve payrolls
5. Finalizing

   1. Set a task to submit RRSP, IRA and H.S.A. transactions later in the week
   2. Set a reminder to enter ER into QB if not doing it at the same time
6. Email Mark

   1. Ready to check! Remind to handle bank transfers and wire
   2. Remind to pay subs in KeyNavigator

      1. Send me info when done to Add subs to QB
   3. Canada Transfer of 5k for RRSP (Dave probably)

**After Payroll:**

* Set up the spreadsheet for the next payroll in Box (start adding reimbursements or updates as they come in
* In Expensify, select all reimbursement reports paid on this payroll and Bulk mark as Reimbursed
* When ready, upload the IIF Files to QB (set a task to remember this)
* Make payment to Optum H.S.A.

  + Go to site found in credentials

    - Contributions
    - Submit contribution details online
    - Put in contribution name which should the [MONTH] Payroll (e.g. August Payroll)
    - Double check numbers, given the payroll spreadsheet
    - Submit
* SunLife RRSP Submission [home | Sun Life](https://www.sunnet.sunlife.com/signin/sponsor/e/home.wca?)

  + Group Retirement Services > Quick Links (find the `Enter member contributions`) > Then select the following things for each step:

    - Step 1: Enter a new set of contributions
    - Step 2: Leave everything as is
    - Step 3: Select the drop down, scroll to the bottom, and select `blank set`
  + Enter the contribution period as the pay periods dates

    - You can find these dates in Spark by navigating to the HR tab > Pay Period (for the most recently closed period) and use those dates
  + Use spreadsheet to get numbers. Make sure everything is correct. Make sure you click all the way through to confirmation to finish and submit!
* Penfolds (UK) Pension

  + Whoever ran payroll should have saved out the penfolds tab as a csv.
  + go to <https://platform.getpenfold.com/>
  + Log in a [mccomb@semanticarts.com](mailto:mccomb@semanticarts.com) password will be shared and should be stored somewhere safe, but it ends with %%%
  + Drop the csv on the side that says “contributions”
  + If there are errors it will alert you, but haven’t been the last couple of times (very hard to get all the dates right and in the proper British format (harder than it sounds))
  + They will send Dave an invoice in a couple of weeks, which he pays via ofx

**Correct Payroll in Rippling**

Here are the steps to process the pay run corrections \*Go to your Payroll app, select the Paid tab, find the payroll runs in question, and click Make Changes. Rippling will generate a correction payroll run. This will look a lot like a regular payroll run, except by default, everyone in the original pay run is excluded from the correction. \*In the correction pay runs, you will need to check the box next to the employee's name only to make them active in the correction pay run.  
\*Once you have checked the box next to their name, make the changes as needed (Zero out CO Contributions)

---
title: "Earned Revenue & AR Accounting"
confluence_id: 2282520577
source: "2282520577.html"
---

/\*<![CDATA[\*/
div.rbtoc1784849633419 {padding: 0px;}
div.rbtoc1784849633419 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1784849633419 li {margin-left: 0px;padding-left: 0px;}
/\*]]>\*/

* [Recording Earned Revenue](#EarnedRevenue&ARAccounting-RecordingEarnedRevenue)
* [A “Post ER” write off](#EarnedRevenue&ARAccounting-A“PostER”writeoff)
  + [Procedure](#EarnedRevenue&ARAccounting-Procedure)
    - [Spark Procedure](#EarnedRevenue&ARAccounting-SparkProcedure)
    - [QB Set up](#EarnedRevenue&ARAccounting-QBSetup)
    - [Billing](#EarnedRevenue&ARAccounting-Billing)
    - [Earned Revenue](#EarnedRevenue&ARAccounting-EarnedRevenue)
* [Analyzing Unbilled and Unearned Revenue](#EarnedRevenue&ARAccounting-AnalyzingUnbilledandUnearnedRevenue)
  + [Unbilled Revenue](#EarnedRevenue&ARAccounting-UnbilledRevenue)
  + [Unearned Revenue](#EarnedRevenue&ARAccounting-UnearnedRevenue)
* [Cash Plan and AR Schedule](#EarnedRevenue&ARAccounting-CashPlanandARSchedule)
  + [When sending invoices](#EarnedRevenue&ARAccounting-Whensendinginvoices)
  + [When setting up or closing projects](#EarnedRevenue&ARAccounting-Whensettinguporclosingprojects)
  + [Standard Checks](#EarnedRevenue&ARAccounting-StandardChecks)

Video Tutorial: <https://youtu.be/nHEa8Jvj6wc>

## Recording Earned Revenue

Each pay period, you should record the Earned Revenue from that pay period into Quickbooks

* In Spark, go to the current pay period and download the ER csv

Next, move into QB

* Open a previous version of the ER journal entry and save a copy (If you save copy change the number)
* Set the date to align with the date the payroll is going to be paid
* Add all the data from excel into QB carefully
* NOTE: If you have closed out any projects during this pay period, you’ve probably already entered the final earned revenue for the project, so don’t enter again. You can check by opening the Unearned Revenue report and verify no projects are over-earned

Note, the way our system works, if a write off is changed in the course of a project, all the history will change retroactively in the spreadsheet.  Also if someone enters or changes a time charge they made in the distant past, it will change these results.  We should use this for fees and for any subcontractors that we manage and bill on an hourly basis, as we can reasonable expect the revenue will be earned in proportion to the time spent.

We don't want to make changes in previous years, those books have been closed.  For projects in the current year it's probably more accurate (but a hassle) to go back and change all the previous entries. We haven't got an elegant solution yet for projects whose prior year has changed.  This is something we'll work on when we get to it.

## A “Post ER” write off

Occasionally we need to book a write-off that doesn’t impact consultants' Earned Revenue, and therefore their pay.

### Procedure

#### Spark Procedure

See the Spark page for information on setting up a write off and modifying project specific billing rates

#### QB Set up

In Quick Books, set up the unbilled contracts and the unearned revenue at the rate we expect to bill the customer, what it says in the SOW. This is the total project less the post-ER write-off.

#### Billing

At billing time, create the invoice at the client’s agreed rate (whether this is a fixed monthly milestone or a time and materials arrangement). It will relieve unbilled contracts at a discounted rate, so when the project is over there should be little or nothing to adjust.

No change to receiving payment.

#### Earned Revenue

| **Account** | **Debit** | **Credit** | **Project** |
| --- | --- | --- | --- |
| 401 (Prof Fee Inc) |  | Monthly ER | Project Name |
| 240 (Unearned Rev Liability) | Monthly ER |  | Project Name |

In the memorized transaction, add an extra row for the Post ER write-off (let’s say the post ER write off was 10%) for this project only.

|  |  |  |  |
| --- | --- | --- | --- |
| **Account** | **Debit** | **Credit** | **Project** |
| 401 (Prof Fee Inc) |  | Monthly ER | Project Name |
| 240 (Unearned Rev Liability) | 90% Monthly ER |  | Project Name |
| 437 (Post ER write off) | 10% Monthly ER |  | Project Name |

This should draw down the Unearned Revenue at a rate that will zero it out at the end of the project. The post ER write off will show up in the P&L as an additional expense (really contra income, but that’s the same).

## Analyzing Unbilled and Unearned Revenue

Approximately once a quarter, you should run a few checks for accuracy

Video Tutorial: <https://youtu.be/vnOU51IKx8c>

### Unbilled Revenue

Using the “Totals” tab at the front of the AR Schedule, compare the total unbilled by client and project. QuickBooks and this spreadsheet should match. Look specifically at the “delta” column of the spreadsheet to see if there are amounts not accounted for the in the not invoiced tab. These should be equal. If not, you should have a clear explanation of why (for instance, Electronic Arts is holding on to some amount as of now to use later, but we are billing the bank for now so it isn’t accounted for on the spreadsheet).

Take extensive notes as you go to keep track of things for the next time you run the analysis

### Unearned Revenue

After balancing the unbilled contracts, next look over the unearned revenue. This may require running a current Earned Revenue query to compare, as the total won’t match because revenue has been earned since the last payroll.

Look for any old accounts that should be $0 but are not. Also look to see if current projects are wildly out of line with expectations. Take notes and solicit help if needed.

## ~~Cash Plan and~~ AR Schedule

Two documents need to be kept updated on a consistent basis related to accounts receivable: Cash Plan and AR Schedule (both found at Z:\_SemanticArts\AccountingLegal\Cashflow)

### When sending invoices

Follow procedure in [Project Accounting](/accounting-guide/project-accounting/) for how to invoice a client. Once complete in QB, update the AR Spreadsheet with the correct date, invoice number, and amount. Move to the Invoiced Tab. ~~In the cash plan, update the date and amount. Include the invoice # in the description and change from “Fee Estimate” to “Invoice Fee”.~~

### When setting up or closing projects

When establishing a new project, add the invoice dates and estimated amounts to both spreadsheets. When closing a project, verify any future invoices that were estimated but won’t be charged are removed from both spreadsheets.

### Standard Checks

Once every few weeks, you should review the cash plan and compare against outstanding invoices in QuickBooks. Make sure that any invoices that have been paid have been deleted from the cash plan, and all outstanding are included. Dave usually does this when he enters into QB, but its best to double check every once in a while. You can also add any expenses you are aware of coming up to try and get the best view of cash on hand as possible.

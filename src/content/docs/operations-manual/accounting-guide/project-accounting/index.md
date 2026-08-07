---
title: "Project Accounting"
confluence_id: 2282192925
source: "Project-Accounting_2282192925.html"
---
/\*<![CDATA[\*/
div.rbtoc1784849634020 {padding: 0px;}
div.rbtoc1784849634020 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1784849634020 li {margin-left: 0px;padding-left: 0px;}
/\*]]>\*/

* [General Notes](#ProjectAccounting-GeneralNotes)
  + [Completed Contract Approach for Consulting Projects](#ProjectAccounting-CompletedContractApproachforConsultingProjects)
* [Project Start](#ProjectAccounting-ProjectStart)
* [Creating a new project (or Job in QB) for an existing client](#ProjectAccounting-Creatinganewproject(orJobinQB)foranexistingclient)
* [Invoicing](#ProjectAccounting-Invoicing)
  + [Milestone Invoicing](#ProjectAccounting-MilestoneInvoicing)
  + [Actual Hours Invoicing](#ProjectAccounting-ActualHoursInvoicing)
  + [General Journal after Subcontractor Billing](#ProjectAccounting-GeneralJournalafterSubcontractorBilling)
  + [Expense Invoicing](#ProjectAccounting-ExpenseInvoicing)
  + [Invoice Lines](#ProjectAccounting-InvoiceLines)
    - [Transportation(Airfare, Uber, Taxi, etc. )](#ProjectAccounting-Transportation(Airfare,Uber,Taxi,etc.))
  + [Lodging(Hotel)](#ProjectAccounting-Lodging(Hotel))
  + [M&IE(Meals and Incidentals)](#ProjectAccounting-M&IE(MealsandIncidentals))
* [Project Closing](#ProjectAccounting-ProjectClosing)
  + [At Contract Completion](#ProjectAccounting-AtContractCompletion)
  + [Adjusting the Unearned Contract Liability](#ProjectAccounting-AdjustingtheUnearnedContractLiability)
  + [At Premature Completion](#ProjectAccounting-AtPrematureCompletion)

## General Notes

### Completed Contract Approach for Consulting Projects

Every project we do has different characteristics in terms of when we can bill (sometimes monthly, sometimes on deliverable completion, occasionally up front), such that recognizing revenue based on invoicing is not conducive to good financial management.

We use the completed contract method on all our project revenue, including in house training. At one point we only did it for the large multi-month projects, and we have previously only done it for our fees, but we now find that doing it all the same way is more consistent and understandable and requires less judgment at bookkeeping time.

There are the main events that trigger accounting in the completed contract method. We will outline them here and detail them later in this document:

* At contract award -- We book the full amount of the contract (fees, subcontractors and estimated expenses) to the Balance Sheet, as a debit to "Unbilled Contracts" (an asset) and a credit to "Unearned Project Liability" (a liability). We are able to track this by project using "classes" in Quick Books. We estimate the amount of fee write off (if any) we expect to incur over the life of the project and put it in our time control system
* Each month -- We summarize time charged to revenue projects (we summarize all time, but only the revenue projects have any impact on our financial statements) by multiplying the hours charged times the standard billing rate less the write off percent.  This is a journal entry reducing (debiting) unearned project liability and increasing (crediting) revenue (earned fees).  We do something similar for expenses but it may not be proportional to time spent, and charge to reimbursed expense revenue.
* At invoice time -- Invoicing does not affect the P&L.  Invoicing debits AR and credits the unbilled asset.
* Expenses and Subcontractor Billing -- expenses are entered as a credit to AP and a debit to the project expense, at the time they are entered.
* At contract completion -- we run reports to determine if we billed all we anticipated.  (if not or if we were able to bill more, either way we create an adjustment, similar to the contract award that corrects the earnable amount).  We then run reports to see if we accrued all the revenue (or over accrued).  If we had completed the contract and had a profit (at full rates), then we book the profit to unearned liability and revenue. Small differences can be charged direct from unearned to the P&L. Other differences should work through the write off percent, due to their affect on payroll.
* At premature completion -- if a client cancels a contract before it is complete, and we determine we are not going to recover any more, we enter an adjustment similar to the original set up to write down the portion that will not be able to be earned.
* Year end -- we do a process similar to the contract completion, to review the status of all the in-flight projects, to ensure that we have accounted for them properly and that our financial statements resemble the actual economic reality.  
  Here is a tabular summary of the accounting.  A more complete spreadsheet is in Accounting Treatment2.xslx

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Consulting projects |  |  |  |  |
| Contract Award | GL | for fees, at expected (hopefully 0%) write off | 140 increase (DR) | 240 increase (CR) |
| Contract Award | GL | for expenses set up total amount we expect to charge (for now we'll put it to the same accounts) | 140 increase (DR) | 240 increase (CR) |
| Contract Award | GL | If there are subcontractors, put them in separately at the amount we will bill them (the marked-up amount) | 140 increase (DR) | 240 increase (CR) |
| Monthly labor | GL |  | 240 decrease (DR) | 410 increase (CR) |
| payroll | Rippling -> IIF |  | 100 decrease (CR) | 512 / 5xx increase (DR) |
| Bill client for Fees | Client Invoice / Items |  | 110 increase (DR) | 140 decerase (CR) |
| Incur Exp (employee exp) | Bill / Acct # |  | 200 increase (CR) | 43x incerase (DR) |
| Incur exp Dave Amex | CC entry / Acct # |  | 210 increase (CR) | 43x incerase (DR) |
| Sub bill us | Bill / Acct # |  | 200 increase (CR) | 440 increase (DR) |
| Sub bills us | GL | this should be done same time we record sub bill, but at sub + mark-up | 240 decrease (DR) | 411 increase (CR) |
| Bill client for Exp | Client Invoice / Items |  | 110 increase (DR) | 140 decrease (CR) |
| Bill client for Exp | GL | This should be done at same time we bill client | 240 decrease (DR) | 42x increase (CR) |
| Pay bills | pay Bills |  | 100 decrease (CR) | 200 decrease (DR) |
| Pay CC | pay bills |  | 100 decrease (CR) | 210 decrease (DR) |
| Client Makes payment | Receive pymt / Invoice # |  | 100 increase (DR) | 110 decrease (CR) |
| Monthly adj wo |  |  |  |  |
| Close out |  | Close out unbilled first |  |  |
| Close out |  | Then unearned. |  |  |

When accounting for a project, there are steps required at the beginning, at invoice time, and at close out. For the purposes of this page we will only cover the accounting portion. Other aspects of project management can be found here: [Project Management Guide](https://semarts.atlassian.net/wiki/spaces/JWIP/pages/2253127968/Project+Management+Guide)

**Every Monday, review AR Schedule and add a task to invoice on the appropriate day that week**

**Check on the 1st or first business day of the month. This is important because many invoices are required to be sent on the 1st**

## Project Start

This is in the memorized transaction called New Contract

![](/attachments/2282192925/2282618884.png)

This is in the memorized transactions, called "new contract."  Some key things to note:

* The date controls when it shows up in the Balance Sheet.  It should be the date the contract was awarded.
* The amount should include the total that we expect to bill for, including expenses and subcontractors. Put expenses and subcontractors on separate lines.  We may in the future even book expense and subcontractors to different sub accounts of Unearned and maybe even unbilled, but for now just easier to see what we’ve done if they are separate lines with good memos

  + If there are subcontractors on the project also have a separate line for them, at the amount we will bill the client, not the amount we will pay the subcontractor.
* The memo should describe the contract and go in both fields so that when we are reviewing either unbilled contracts or unearned liability, we can know what we're looking at.
* And the name should be the customer and project and the class should be a shorthand for the class.  Note it's the class that we use to filter the reports on.

## Creating a new project (or Job in QB) for an existing client

To create a new job, follow the following:

* Customers > Customer Center > (At the top-right of screen) Add new customer and job> Add job

DON’T PUT ANYTHING IN THE BALANCE FIELD!

Add as much information like when the project started, where we’ll bill to and name and contact info, if applicable.

## Invoicing

It is essential to track and submit proper invoicing for each active project. There are three types of invoices: Milestone, Hours, and Expense. #*Expense Invoicing is found in a separate tab.*

Invoices should be submitted as close to the date on the AR Schedule as possible, but never before.

Every time a new contract is signed, reference the contract itself for total budget and invoice schedule. Record the invoice schedule in the most recent *AccountsReceiveableSchedule* and *CashPlan* spreadsheets (located here: \\_SemanticArts\AccountingLegal\Cashflow). Then, record a journal entry in Quickbooks (QB) to setup the contract for tracking (reference the procedure, *Our accounting procedures 2019d*, on how to perform actions in QB and when, located here: \\_SemanticArts\InternalSystems\\_AccountingProcedures. Every week, reference and update the spreadsheets for when to invoice each client (*AccountsReceivableSchedule*) and to help Dave keep track of cash on hand (*CashPlan*), and to track what has been paid or is overdue and you need to nudge the client.

### Milestone Invoicing

A milestone project is billed at set intervals for hitting specific goals within a project.

* Check with the primary consultant to ensure the milestone has been reached and it is acceptable to be billed.

  + Note some milestones are simply monthly so no need to check with the consultant, just bill on the date listed in the SOW
* Find a previous project invoice if possible to replicate.
* Ensure the appropriate milestone is listed on the invoice.
* Make sure the due date is realistic (30 or 60 days)
* Follow any client-specific instructions, see [Client Instructions for Invoicing](#).
* Save a copy of the invoice in the ClientInvoices folder.
* Put the invoice number and date sent in the AR spreadsheet and cash plan

### Actual Hours Invoicing

An hours invoice is simply sent at regular intervals (typically monthly) and billed for actual consultant usage.

* Get the most current record of hours and cost

  + AllegroGraph - Timecard Repository

    - Run the most recent burn chart query
    - Sort by the relevant project
    - Enter into the Monthly tab on the AR Spreadsheet, compare last month to make sure you are on track
* Run an hours analysis

  + *Note: Verify previous invoices for accuracy, May form a more standardized method later.*
* Find a previous project invoice if possible to replicate
* List out each consultant, hours, hourly rate, and date range on the invoice
* Follow any client-specific instructions
* Make sure the due date is realistic (30 or 60 days)
* Save a copy of the invoice in the ClientInvoices folder
* Put the invoice number and date sent in the AR spreadsheet and cash plan

### General Journal after Subcontractor Billing

When we bill a client for work that includes subcontractors, they (the client) doesn’t know.  Billing just relieves the unbilled account.

The closest approximation to when we earn a subcontractors earned revenue is when they bill us.  When a subcontractor bills us, we enter to our AP system

![](/attachments/2282192925/2282618926.png)

Notice, it is charged to 440 subcontractor expense, and to the client job and class.

Then turn right around and using the memorized journal “Earned Subcontractor” earn their portion of the project.  Note if we mark up a subcontractor, we will earn at the marked-up rate (in this example imagine we marked up Lymba by 11.11%

![](/attachments/2282192925/2282618932.png)

### Expense Invoicing

Expenses will come from consultants via Expensify. See more on accounting for expenses internally here: [Expense Accounting](/accounting-guide/general-accounting---read-first/expense-accounting/)

* In QB, create an invoice.

  + *If possible use a previous invoice and create a copy.*
* Input the correct billing address.
* Input P.O. No *if applicable.*
* Input the correct Project name.
* Create line items in the description, generally following three lines;

  + Transportation for *consultant(s) initials*,: (*Month*) visit
  + Lodging for *consultant(s) initials*,: (*Month*) visit
  + Per diem for *consultant(s) initials*,: (*Month*) visit

![](/attachments/2282192925/2282192962.png)

* Save Invoice as PDF.
* Send Invoice to client per [Client Instructions for Invoicing](/accounting-guide/project-accounting/client-instructions-for-invoicing/)
* Save a copy of the invoice in the ClientInvoices folder.
* Put the invoice number and date sent in the AR spreadsheet. Make sure the total is correct.
* Record in Cash Flow Spreadsheet.
* After submitting, there must be a journal entry to decrease the allotted amount from the contract and move into earned expenses (see memorized transaction for help).
* Right after you bill for expenses, create the journal entry to earn that amount, using the memorized transaction “EarnedExpense”.

![](/attachments/2282192925/2282192968.png)

### Invoice Lines

#### Transportation(Airfare, Uber, Taxi, etc. )

* Charge as actuals. Use receipts from consultants for actual amounts.

### Lodging(Hotel)

* Charge as actuals. Use receipts from consultants for actual amounts.

### M&IE(Meals and Incidentals)

* Lookup current per diem rates and apply appropriately.

  + Use [GSA.gov](http://GSA.gov) rates for given location (Per Diem rates vary between cities)
  + Watch out for the first and last days of the consultant's travel days.

    - Billed at 75% of standard per diem rate.

## Project Closing

### At Contract Completion

When the project completes we want to make sure we have properly accounted for, and zero out any balances in unbilled contracts and unearned liability.

This works better if you start with Unbilled Contracts.

The way to do this is open up the Chart of Accounts.  Double click on the Unbilled Contracts line.  Make sure you have a date range to give some supporting detail.  Select the Reports menu, then Transaction Detail. and select the class that represents that project.

![](/attachments/2282192925/2282618938.png)

Also it's handy to put the name of the project in the header so that when you print the report you'll remember what you selected.

![](/attachments/2282192925/2282618944.png)

We need to zero this out. For most projects, this represents the amount that we won’t bill *and* will not earn. If this is the case, we are essentially reversing part of the original project setup.

> Use the memorized transaction called "ClosingUnbillableContract", which looks like the below journal entry.

![Screenshot (1).png](/attachments/2282192925/2789605381.png)

A fixed price project where we came in under budget we can charge the balance to revenue (where it will become profit). In this example we have $294.30 left that we will not be billing for. If this was a negative number, reverse the debits and credits.

More normally there is just some small adjustments to close it out.

### Adjusting the Unearned Contract Liability

![](/attachments/2282192925/2282618950.png)
> Note: There are 3 main ways the balance can be non-zero. Each case is handled differently.
>
> * Positive balance
> * Huge negative balance
> * Small negative balance

If there is a positive balance, that means we completed the project in less time than we planned.  We will write up the balance as a profit to the Income Statement as follows.

![](/attachments/2282192925/2282618956.png)

If there is a large negative balance (more than a few thousand dollars) then we have to go back and change the project write off, rerun the queries and spreadsheet and redo the earned revenue for that project.

![](/attachments/2282192925/2282618962.png)

A smaller negative number means we charged more to the P&L than we should have and we can adjust it the same way we do a write up, but reverse the credit and debit. We call this a **write off**.

The memorized transaction named “CloseOutWriteOffER“ (shown here) is credit to 410 for a positive balance above.

![Screenshot (2).png](/attachments/2282192925/2789801987.png)

### At Premature Completion

If I client stops a project before we've spent all the revenue, we just do the reverse, but this can be done all in the Balance sheet.

## In this section

- [Client Instructions for Invoicing](/accounting-guide/project-accounting/client-instructions-for-invoicing/)

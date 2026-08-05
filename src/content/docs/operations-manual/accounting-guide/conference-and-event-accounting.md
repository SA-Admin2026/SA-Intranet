---
title: "Conference & Event Accounting"
confluence_id: 2282553345
source: "2282553345.html"
---

/\*<![CDATA[\*/
div.rbtoc1784849642222 {padding: 0px;}
div.rbtoc1784849642222 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1784849642222 li {margin-left: 0px;padding-left: 0px;}
/\*]]>\*/

* [Conference/Seminar Accounting](#Conference&EventAccounting-Conference/SeminarAccounting)
  + [Set Up](#Conference&EventAccounting-SetUp)
  + [Payment Notification (Conferences & Trainings)](#Conference&EventAccounting-PaymentNotification(Conferences&Trainings))
  + [Payout Notification(Conferences & Trainings)](#Conference&EventAccounting-PayoutNotification(Conferences&Trainings))
  + [Close Out](#Conference&EventAccounting-CloseOut)

Video Reference (EventzillStripeCloseUp): <https://youtu.be/OpsE8g-hJ5c> (No longer use Eventzilla 1/14/2025)

## Conference/Seminar Accounting

Note: In the traditional project, we know the total budget upfront and manage the project by drawing down the earned revenue and billing against the budget.

The following are differences between our public training(DBBO, DCC, Seminars) and traditional work contracts:

* We don’t know the budget when the project is launched. However, we will know almost exactly as the course is about to start.
* We incur most of the labor right at the end.
* We incur expenses several months ahead of time (when we book travel and the venue).
* There is no billing and therefore no unbilled.
* We enter the payment to Stripe when the attendee pays for their ticket
* We then enter the transfer of money from Stripe to our bank account, which may include more than one attendee

Here’s what happens with DBBO, DCC, and Seminars.

### Set Up

* At announcement – set up two projects in Spark:

  + One for attendees. This is the one for anyone attending.
  + One for production. This is the one that we will charge prep time to, and anyone who is presenting.

### Payment Notification (Conferences & Trainings)

* We receive an email with the subject line: “Payment of $xxx for Semantic Arts” which right now comes to the [office.manager@semanticarts.com](mailto:office.manager@semanticarts.com) email. We should save these. At the moment these do not have the attendees name on them. Hopefully this will be fixed soon. Also this doesn’t have the fees taken out at this point. The guid in the email will tie to one in the site
* If you log in to Stripe (using the [accounting@semanticarts.com](http://accounting2semanticarts.com) login) you will find the detail under Transactions / Payments. You can click on any of these to get the details. The details you need are:

  + Date (the date the payment succeeded)
  + Which event it was for (Sympossium, DCAF etc)
  + Attendee name and/or email address
  + Amount they paid
  + Stripe Fees
  + Net amount
* This is what you will enter in QB as the Stripe Payment Received Memorized transaction. The Attendee will be entered as a customer (Add if they aren’t already there)

### Payout Notification(Conferences & Trainings)

1. We get an email with the subject line “Your $xxx payout for Semantic Arts is on its way.” This is the amount we want to enter into Quick Books because it will tie to the Open Stripe ([accounting@semanticarts.com](http://accounting2semanticarts.com) one) and locate the specific transaction. You will need these details later on. (I could not find their names only their email, is it somewhere else?). Note it’s the net amount that goes to QB
2. If you log in to Stripe (using the [accounting@semanticarts.com](http://accounting2semanticarts.com) login) you will find the detail under Balances/ scroll to the bottom of the page where it says “Recently Completed” these are the payouts.
3. It probably doesn’t matter which ones go with each payout, but it is findable if you click on the payout it will show (after the summare there are transactions, you can correlate on the email or click through.
4. The main things to get from this are:

   1. Paid out date (this is the date it will hit the bank account)
   2. Transferred Amount (this is in the recently completed section)
   3. Any additional fees (the ones in the fees column have already been entered at payment time, there is an additional stripe fees line item to be added
5. This is what you will enter in QB as the Stripe Transfer memorized transaction. No need to enter attendee names here  
   NOTE: Stripe is the only deposit that should go to the **CHECKING** account, not savings.

* As we incur expenses – these will be expenses for the venue, printing books, and travel. Some of these will come in on employee expense reimbursements. Try to get as much of the expenses in and entered before the course is conducted.

### Close Out

* Close out is the same as for consulting projects, except there is no unbilled to close out.
* Figure out the amount of income from registration and earn that revenue to the P&L

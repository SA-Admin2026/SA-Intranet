---
title: "Capacity Planning"
confluence_id: 2426929153
source: "Capacity-Planning_2426929153.html"
---
How the Semantic Arts Staff Plan Works, and How We Plan to Enhance it in the DCA

# Intro

Our staff plan revolves around a couple of key assumptions:

·       Most of our projects are 2-6 months in duration

·       We assign people to projects and let the project managers assign tasks (not in this spreadsheet)

·       We lately have begun proposing general skills and positions rather than specific consultants, but once a project starts, we assign specific people (this means for proposals we are guessing who we are going to assign, or sometimes assigning generic positions)

·       Level loading a project over its duration is reasonably close to how it really works

# General Structure

There is some reference data, which is in its own tab:

·       Project Category (whether the project is internal or client or vacation, and whether it is signed or proposed, we also have a special category we call “shadow” which is a follow on project from a current client who have expressed interest, but hasn’t yet contracted, and is therefore more likely than a proposal, but not as good as signed work

·       Calendar – we have our own peculiar calendar.  We run everything on a week basis where the weeks start on Friday morning and run through Thursday night.  We have sequential numbering of weeks starting from when we first started our time control system (basing everything on sequential week numbers simplifies a lot of things)

There are two bits of master data, each in their own tab

·       Staff – this is just a controlled list of the staff with their billing rates and their category (consultant, developers etc)

·       Projects – a controlled list of projects with their category (internal / external / proposal etc) their budget and planned write off

Analytics

·       Each consultant has their own tab where we automatically spread their assignment to all open weeks, and prepare a graph to show their projected utilization

·       Two dashboards (onto workload, which shows each ontologists load, and onto availability which shows what inventory we have to sell)

·       A summary (onto days per week) that sums everyone up for macro planning and recruiting

Transactional

·       The actual work of managing the staff assignments is done in the assignments tab

# Conventions

·       Generally green cells are where it is safe to enter data

·       Any tab can be sorted or filtered

·       If you insert rows, you should copy an existing row, as there are often formulas

·       Where we reference a range, we generally reference the whole column, so adding or deleting shouldn’t have any effect on vlookups or sumifs

·       We generally keep a 4-8 weeks of history so we can compare the future with the recent past

# General Excel Capabilities we use throughout

If you’re not familiar with these you might want to bone up a bit. You can probably use this without knowing this, but you will be much less prompted to break things if you know how it works

·       We use Data Filters a lot, mostly to make it easier to narrow down what you’re looking at, they aren’t essential to the working of the model

·       Data / Data Validation / List – we use this in a lot of places to make sure we don’t introduce typos

·       Vlookup – we use this a lot, to look up things like billing rates, project and staff categories and budgets

·       Sumif – also use this a lot mostly to spread assignment to specific weeks

# How it works

## Staff

Setting up the staff is pretty straightforward.  However you spell them is how you will need to spell them in the assignment sheet (but the data validation will ensure that) pretty much all you need it the name, hourly rate and select their category.

![](/attachments/2426929153/2426929188.png)

## Projects

In the projects tab, we generally put an entry in when we think we’re more than 50% likely to get a project and have an idea as to when it will start.  We could put more speculative stuff in there but there is a lot more moving things around.  Also we could wait until things are signed, but that gives us a lot less visibility.  If we discount our rates to get a job, we put that in the writeoff column.  Internal projects are always 100% write off (we don’t make money on internal projects). We put when we think it will start, but this is purely documentation at this point, we aren’t using it in the actual assignments.

![](/attachments/2426929153/2426929194.png)

## Assignments

The assignment tab is where all the work occurs.  Create one line for each combo of project and staff.  So for instance toward the bottom of this clip, we have three staff assigned to MS Integrated risk.  Columns B, C and D are what drive a lot of this.  This is the start week, the total days that staff person will be on that project over the period, and then the end week.  Note if someone was going to take two weeks vacation in the 10 week project, you could create three ranges (before the vacation, the vacation, and after the vacation) to get the graphs to be very precise, but we usually just assign them to 80% of 10 weeks of days (40 days) and then put the vacation in when it is due.  This gives an overload spike during vacation and is a bit low for the non vacation period, but its close enough for us most of the time.

![](/attachments/2426929153/2426929200.png)

The golden colored cells are looking up the project budget and calculating how much of the budget was assigned (discounted by likelihood and write off) and how many days per week this assignment accounts for.

## Each staff summary

The only fields you need to enter here are the consultant and the week you want to start the analysis; all the rest is calculated. Note if you decided to change the project categories you will need to change the headings here.

![](/attachments/2426929153/2426929206.png)

This drives the individual graphs (and here is an example of how the vacation throws the graph off, but as long as we know what it is, it not worth making the extra assignments to smooth this out)

![](/attachments/2426929153/2426929212.png)

Availability is how much of each consultants time can we sell.  The red is totally available. The pink is either proposed work or internal assignments, either of which can get bumped for signed work.

![](/attachments/2426929153/2426929218.png)

## Overall Summary

Again all you need to do is enter the week to start the analysis.  We use column P to manually enter our overall capacity (which is the orange line in the graph) and column Q for notes on recruiting and how that will change future capacity.

![](/attachments/2426929153/2426929224.png)![](/attachments/2426929153/2426929230.png)

Not quite sure why cut and paste make this red and pink turn blue, but there it is

![](/attachments/2426929153/2426929236.png)

# Proposed Changes for DCA

This is pretty good.  At a minimum we need to support all that we see here.  Staff and projects will already be set up.  We could do assignments as a form, but there are many other options that would be better.

For instance it would be nice to do all the staff for a project on one screen.  It would be nice to see the impact on staff (graphic) as you are making the changes.

The more advanced idea would be to do the projects at a skill level (more detailed than this is currently, senior ontologist v. journey person for instance) and then have the system suggest staffing based on availability.

An advance on the bar charts would be to allow to click on a colored sub bar and see what its composed of (which projects (really project assignments) ) and then potentially select that to pop up a form where it could be changed.

We want to combine history with plan, and plan with previous plan.

So as you are looking at the June – Dec plan, it would be good to see the March – Sept Plan and actual.  Are we any good at planning?

## In this section

- [Staff Planning Instructions](/management-guide/meeting-management/capacity-planning/staff-planning-instructions/)

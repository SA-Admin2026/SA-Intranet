---
title: "Categories: Design Patterns and Best Practices"
confluence_id: 2370568231
source: "2370568231.html"
---
Notes from the [Ontology Knowledge Exchange](/ontology/ontology-knowledge-exchange-oke/) meeting on 2023-03-13 ([recording)](https://datacentric.sharepoint.com/:v:/s/staff/Eco1xJCbOMVJmq3nguBeWywBh2tGqQeGhxTEN1NZFmdWSg). Some of these were identified as best practices/design patterns, some as open questions.

# Categories and Relationships

**Question:** Do we recommend against categories having relationships to one another other than sub/supercategory? E.g., part of, ranking, etc.

**Discussion:**

- isPartOf definitely should not be used to relate categories. Categories don’t have parts.
- Ranking is acceptable. It’s a different sort of category hierarchy than sub/supercategory (broader/narrower).
- RY: Membership in collections should be acceptable.
- Types of configuration can be categories - e.g., in DCA a view can be tabular, cards, etc.
- Various proposed rules of thumb:

  - A category shouldn’t have a relationship to a non-category other than gist:isCategorizedBy.

    - Exception: gist:isAbout (but this is meta-modeling).
  - We should only assert relations between categories that it would be in principle intelligible to assert between classes. (Expressibility of OWL is really beside the point.) It was more that, if we want to say that one category ranks higher than another, it should at least make sense to say that of some classes too, regardless of whether it’s expressible in OWL. Subcategory relationships make sense by this criterion b/c of the analogous sublcass relation, and ranking seems sensible too. This also explains why ‘part of’ doesn’t make sense--it wouldn’t make sense to say one class is part of another, unless what we really meant is that it’s a subclass.
- Can something be a category even if things are placed in that category by us rather than naturally belonging to the category? (See configuration example above.)

  - Yes, why not? (Consider gender.)

# Class and Category Pattern

Sometimes it makes sense to use classes *and* categories to classify things.

When?

- Some categories that apply to instances of a class should also be subclasses of that class in order to define restrictions.
- Example: We have a set of product workflow task types such as editing, authoring, approval, delivery, distribution, etc. In many cases there is nothing further to say about them, so they are defined as categories. But some, such as delivery, can have narrower formal definitions with restrictions. Solution: Use both a set of categories, such as :ProductTaskType\_editing, and some subclasses, such as Delivery. In addition to its other restrictions, Delivery must be categorized as :ProductTaskType\_delivery. This provides consistent modeling across all types.

From Dave:

In my mind there are two use cases for this:

- Where you want a class for a small subset of a large taxonomy, and/or
- Where you need a class and an instance for essentially the same concept

The classic example in the former is if you have the Linnean taxonomy of species but you run a veterinary clinic (where you only deal with a handful of species) or even a zoo where you have hundreds or thousands.  We can define the class :Dog == :LivingThing and  :isCategorizedBy value :\_canus\_lupus\_familiaris and then add properties to :Dog if we need to. If we ever start treating Canaries we know how to make a new class from their taxonomic value (Serinus Canaria if you were curious).

The second case is where you want to treat something sometimes as a Class and sometimes as an instance.  We could use punning, but I find that ambiguous and probably confuses reasoners more than it helps. In this case we want a class to distinguish a PurchaseOrder from a ShippingNotification from an Invoice because they are going to have different properties and constraints.  But in many places, for instance our accounting policy we would like to refer to the business event type as an instance (we are going to recognize revenue based on the EventType\_Invoice)

They are one to one now, but I’m imagining many more business events, and many even more Financial Business Events that will be just categories and not need their own class.  Maybe we will have Blanket Orders that have the same constraints as Purchase Orders, but do not trigger transactions in the Accounting Policy.  So they aren’t necessarily one to one, I just started with the set I knew I wanted to make into Classes.

# Categories vs Non-Categories

It has been suggested that aspects are not categories because they don’t categorize the thing “pipe inner diameter of 3 inches.”

# Relationships to Categories

Is it an anti-pattern to use the same predicate to point to a category and a non-category? For example, if a task template specifies what type of person/role should perform the task, where roles are modeled as categories, could we use the same predicate that we use to attach the specific task to the specific person (isPerformedBy or whatever)?

- Con: violates the rule-of-thumb that categories should only relate to non-categories via isCategorizedBy.
- Pro: prevents proliferation of properties like isPerformedByPersonInRole
- Consider also: maybe Role in this sense is also not a category class (like Aspect). However, for things like StaffAssignment, categorizing the assignment with a role seems apt: He was assigned to the project *as project lead* = the assignment is categorized by the role.

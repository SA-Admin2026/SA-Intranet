---
title: "Magnitudes and Units"
confluence_id: 4194369
source: Magnitudes-and-Units_4194369.html
---
## Do we need lots of subclasses of Magnitude?

**Reply by DMc**:

It’s a good question, and I don’t have a fully articulated answer.

I think sometimes I’ve created subtypes of magnitude for the same reason that we have subtypes of categories, to keep things separate.  For instance I think I have BillingRate and PayRate as different subclasses of a $/Hour class, because we need to know which one to bill someone out as v. which to pay them.

**From:** Michael Uschold   
 **Sent:** Thursday, April 14, 2016 7:16 PM  
 **To:** Dave McComb; Consultants  
 **Subject:** Radical Idea

Our normal policy is to not create lots of subclasses if there are no new properties. Instead we just us gist:categorizedBy with categories.

So for LoanContract, we might just say gist:categorizedBy LoanType where there are several types.

It occurs to me that gist:Magnitude fairly well fits this pattern that says don’t create lots of new subclasses.

1. Every single magnitude we create has exactly the same properties, a number and a unit.
2. The numbers are fairly boring.
3. The only interesting difference between any two Magnitudes (say Volume and Power) is what the standard unit is (the specific unit is just a conversion detail).
4. The standard units are very like categories.   Take all the magnitudes, each one can be categorized by what its standard unit it.
5. We don’t use the term dimension, but that is pretty much what the standard/base units correspond to.  One standard unit, one dimension.
6. It makes logical sense to have hasStandardUnit be a subproperty of gist:categorizedBy, since they group al the magnitudes into types based on what their dimension/standard unit is.

Just like we don’t create classes for every possible category (knowing that we can if we want to), why do we create classes for every dimension?  So I raise the question: do we really want to create a subclass of Magnitude for every standard unit / dimension?

This idea is less than half-baked, I’m not even sure I should turn the oven on.

I’m thinking that getting rid of the Magnitude subclasses will probably turn out to be a bad idea, but it was a thought…

## Dimensionless Quantities

There has been an ongoing discussion about representing pure numbers in gist. [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) wrote a [blog](http://semanticarts.com/blog/number-units/) on this proposing that a precentage should not be required to always be a ratio magnitude, and acknowledge that often it will be useful.  [Dave McComb](https://semarts.atlassian.net/wiki/people/557058:72c41243-994a-4dc0-90ad-1add97e308af?ref=confluence) found the following quote illustrating why it is often important to keep track of the units that may cancel out when talking about percentages. The indented text is a quote from this [web site](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC61354/).

Sometimes all units may cancel out in quantities derived through equation 5. For example, in a bodymass—dependent dosage for medications such as 2.5 mg/kg, the mass units cancel out, resulting in 2.5 × 10-6 or 2.5 × 10-4 percent. We frequently see notations such as “1 mg/kg (body weight)” to keep the “history” of the measurement from being canceled.

The most important of such cases are concentrations reported as “percentages.” Traditionally, we measure concentrations of fluids and gases as a fraction of volumes *V*B/*V*1 reported as 1 %vol. Concentrations of dissolved substances are traditionally measured as fractions of masses *m*B/*m*1 reported as 1 g% or just as 1%. Because water is the predominant dissolvent in biology, and 1 mL of water has the mass 1 g, 1 g% is regarded as equal to 10-2 g/mL or 1 g/dL. On this basis, the unit 1 mg% emerged, which was set equal to mg/g  1 mg/dL.

The ISO, IUPAC, and CEN standards assert that those annotations on the percent sign (e.g., %vol and g%) are meaningless in principle and therefore deprecated. Thus, we will not extend our theory to give meaning to those annotations. Instead, concentrations in chemistry and biology should best be reported in 1 mol/L.[7](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC61354/#ref7),[8](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC61354/#ref8),[25](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC61354/#ref25) Correct interpretation of percentages requires the knowledge of what has been measured. Failure to supply this information, such as on drug labels for lidocaine or adrenaline, leads to severe misinterpretations and causes over- or under-dosage. In a survey by Scrimshire,[26](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC61354/#ref26) only 45 of 100 doctors knew how much 5 mL of 1% lidocaine is. This suggests that the traditional percentages may not be the most user-friendly measures for concentrations.

The EUCLIDES project[27](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC61354/#ref27),[28](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC61354/#ref28),[29](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC61354/#ref29) assumes that any unit consists of a numerator and a denominator that are not reduced. Indeed, many clinically relevant units do have the form of such simple ratios. The EUCLIDES method, however, is challenged by units such as 1 mL/kg/h. The problem is how to canonically distribute the parts of such complex terms into just one numerator—denominator pair.

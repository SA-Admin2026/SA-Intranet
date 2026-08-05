---
title: "Modeling Characteristics and Their Values"
confluence_id: 1096777729
source: "Modeling-Characteristics-and-Their-Values_1096777729.html"
---

Here are a few thoughts about different ways to model characteristics and their values. I have done this a number of times over the years. For example:

- Product specifications for Proctor & Gamble, and Schneider
- Commodity grades for Platts (more or less the same thing as product specs)
- Characterizing an industry along multiple dimensions for Industry Building Blocks (IBB)
- Representing values of medical measurements such as blood pressure, creatine levels, height and weight for MD Anderson.

By far, the most complex model was for P&G. It was simplified a fair amount for Schneider.  Each of the cases results in a somewhat different model, which is at the same time:

- Disappointing, since I’d rather be able to have more reuse of a core model
- Appropriate due to the different requirements for each circumstance

# Core concepts

Whatever they are called and however they are modeled, you always have the following:

1. The thing being characterized
2. A characteristic of the thing
3. A value or specified range of values for the characteristic
4. Obtaining the value

Lets look at examples for each:

1. The thing that is being characterized

   1. Schneider: a product, e.g. a voltage regulator
   2. IBB: an industry (e.g. frozen pizza)
   3. Platts: a commodity, e.g. Brent crude

      1. the commodity itself
      2. an estimated price for the commodity
   4. MD Anderson: a patient, the characteristics describe their condition
2. A characteristic of the thing

   1. Schneider: Rated voltage for a a voltage regulator
   2. IBB: competitive rivalry
   3. Platts:

      1. Sulphur content of Brent crude
      2. The spot price of Brent crude
   4. MD Anderson: blood pressure
3. The value of the characteristic

   1. Schneider: 500 volts
   2. IBB: competitive rivalry = 94 (not sure what this means, but …)
   3. Platts:

      1. Sulphur content = 200 parts per million
      2. Spot price is minus $2 per barrel (March 2020)
   4. MD Anderson: blood pressure = 110/70
4. Acquiring the value (a measurement or specification event of some sort)

   1. Schneider: product designers specify the values
   2. IBB: a human does research and draws a conclusion
   3. Platts: Sulphur content

      1. A measurement is made form a sample
      2. An acceptable range is specified
      3. a price is estimated using a particular method including possible algorithms
   4. MD Anderson: blood pressure

      1. body position
      2. instrument (operated by whom)
      3. time of day

# Different Use Cases & Circumstances

So what are those different circumstances that arise in different use cases? Below I take a look. Here are some different factors that I noticed:

1. Can you model the characteristic directly as a property, or does it need to be reified as an instance of a new class called, say Characteristic, a subclass of gist:Aspect?
2. Is there a need to create a class that means ‘a characteristic has a particular value’

   1. YES: if there is a need to attach information to the fact that a characteristic has a particular value (e.g. a weight)
   2. PERHAPS: if we wish to reuse a characteristic=value pair by attaching it to a number of different individuals (e.g. strength=high could be attached to anything where strength is relevant). An alternative is to just have a property that points to the same value over an over (related to first point)
3. Is there a need to specify a range of acceptable values?

   1. YES: then will want to create something akin to SpecEntry in Schneider and Platts commodities. Here is the definition currently in the Plattts ontology:   
      ”Specifies values for a particular characteristic indicating what it means to be in spec for that characteristic. Often this will be what is required, allowed or promised, but it could also be used to specify what is not allowed. The values will typically be numerical with some unit of measure specified.”

      1. example: sulphur content of brent crude less than 222 parts per million.
   2. Note: a special case of this is Characteristic = Value, referred to above.  Other examples are characteristic greater than or less than or in between two different numbers.
4. What different kinds of values are there?

   1. Numbers?
   2. Different [scales](https://en.wikipedia.org/wiki/Level_of_measurement) (ordinal, interval, ratio)
   3. Categories: a nominal scale
   4. Structured:

      1. e.g. blood pressure has  a pair as a value one for systolic and one for diastolic.
      2. A software application feature may have a verb and an object.
   5. Does the value have a unit or not?
   6. Is there a measurement event that gave rise to the value that needs to be tracked?

      1. When
      2. Produced by whom
5. Is it important to track provenance about how the value was obtained?

   1. By what method

      1. manual by human (finger in the air vs. follow a plan),
      2. computed by what algorithm)
   2. Using what measuring instrument (type of thermometer or blood pressure
   3. Context: for blood pressure, body position, time of day, when last eaten may all be relevant factors
6. Are there different ways of characterizing the values

   1. Actual vs. predicted

### Four Approaches to Modelling Characteristic Values

![](/attachments/1096777729/1557397509.png)

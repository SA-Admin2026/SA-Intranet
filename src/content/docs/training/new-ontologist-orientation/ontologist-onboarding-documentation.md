---
title: "Ontologist Onboarding Documentation"
confluence_id: 2172321793
source: "Ontologist-Onboarding-Documentation_2172321793.html"
---

**Terms to Know**:

- *Ontology* - Some debate on precise definition but it is a means to describe not only what something is but how it relates to something else. It is machine and human readable. “A model built in OWL.” “A branch in metaphysics dealing with the state of being.” “a model that represents some subject matter that you care about. It communicates what kinds of things there are and how they are related to each other in a way that supports automated reasoning.” “Triples representing the subject matter.”

  - “An OWL construct is analogous to a word. OWL constructs are combined to make OWL expressions. A triple is an assertion, and corresponds to a typical sentence in English.
  - “An ontology is an explicit, formal specification of a shared conceptualization. The terms is borrowed from philosophy, where an Ontology is a systematic account of Existence. For AI systems, what ‘exists’ is that which can be represented.” - Thomas R. Gruber

    - Conceptualization - abstract model (domain, identified relevant concepts, relations)
    - Explicit - meaning of all concepts must be defined
    - Formal - Machine understandable
    - Shared - consensus about ontology
    - Ontologies comprise of three entities and are expressed in the following fashion:

      - Classes: upper camel case (e.g., LegalEntity)
      - Properties: lower camel case (e.g., isSubsidiaryOf)
      - Individuals: leading underscore (e.g. \_Google)
    - These entities form triples (subject-predicate-object). Some of them are used to define the subject matter (rdf:type + refs:subClassOf
  - Types of Ontologies:

    - Top-Level Ontology (Upper Ontology, Foundation Ontology) - general, cross domain ontologies (represent very general concepts as e.g., Time, Space, Event independent of a specific domain or problem)
    - Task Ontology - fundamental concepts according to a general activity or task.
    - Domain Ontology - fundamental concepts according to a generic domain.
    - Application Ontology - specialized ontology focused on a specific task and domain.

![](/attachments/2172321793/2213117957.png)![](/attachments/2172321793/2213412865.png)

- *Taxonomy* - A means to organize controlled terms ***maybe*** into a hierarchy. It is not as rich in metadata as an ontology or thesaurus.

  - Definition of a hierarchical system of groups.

    - Also classification schema, nomenclature, …
    - In science most times classification into (mono-)hierarchical sets (classes, subclasses, …)
    - (also) subject of biology:

      - The arrangement of organisms into a classification according to similarities.
  - informal IS-A-Hierarchy: explicit hierarchy of classes, subclass relations are not strict (e.g. index of a library)
  - formal IS-A-Hierarchy: explicit hierarchy of classes, subclass relations are strict
  - formal instance: explicit class hierarchy, besides strict subclass relations also instance-of relations are allowed.
- *Thesaurus* - A thesaurus stores more metadata than a taxonomy (i.e. preferred or alternate terms, opposite terms, “use for” relationship). The line between a thesaurus and an ontology becomes blurred as more metadata is added to the thesaurus.

  - Controlled vocabulary, concepts are connected via relations.

    - Equivalency (synonyms)
    - Hierarchies (subclasses, superclasses)
    - Homographs (Homonyms)
    - Associations (similar concepts)
- *Controlled Vocabulary / Data Dictionary* - A set of governed terms that just have labels and definitions. Finite list of terms (e.g. catalogue)
- *Glossary* - finite list of terms including an informal definition of their semantics in natural language.
- *Knowledge Graph* - A method of visualizing a ontology, or part of an ontology. “A set of triples make a directed graph” - a web of connected nodes with predicates as its edges.
- *Graph Database (DB)* - Rather than storing data in tables or documents, ‘di-graphs’ or a 'directed' (with an arrow) graph is used to store data as a triple. “Directed labelled graph” or “Directed graph”

Foundations of Logic

- Logic - “the art and the science to distinguish between truth or lie with the help of reason, to accept truth and to reject lie.” - Ramon Lull. Logic is the study of how to make formal correct deductions and inferences. Why? → Automation. Want to construct a calculator machine for logic.

  - Syntax: symbols without meaning. Defines rules, how to construct well-formed and valid sequences of symbols (strings)
  - Semantic: meaning of syntax. Defines rules how the meaning of complex sequences of symbols can be derived from atomic sequences of symbols.

    - e.g. if (i<0) then display (“negative account!”) → print the message “negative account!”, if the account balance is negative, this is the assignment of meaning.
    - Intentional semantics (e.g. programming languages.

      - “The meaning intended by the user”
      - Restricts the set of all possible models (meanings) to the meaning intended by the (human) user.
      - e.g. code function that computes a factorial of an input
- *Propositional Logic* - The world consists simply of facts and nothing else (statements of assertions), If/Then statements. I.e. If it rains, then the road will be wet.

  - The world consists of objects and properties that distinguish one object from another.
  - Between objects are relations. Some relations are unique, i.e. functions.
  - **Note:** You can only make statements and assertions about single objects, not a class of objects.
- *First Order Logic* - In First Order Logic (FOL) quantifiers allow assertions about sets of objects, without naming the objects explicitly. I.e. All humans are mortal. Socrates is a human. Socrates is a human. Socrates is mortal.

  - FOL is perfectly suited for the description of ontologies, but…

    - FOL is pretty expressive therefore bulky for modelling and it is difficult to achieve consensus in modelling and complex to prove (correctness and completeness of assertions).
    - Therefore look for some well suited fragment of FOL!
- *Description Logics* - Are a family of languages for knowledge representation. Most description logics are a subset of First Order Logic, but unlike FOL, most description logics are decidable (computeable). Therefore, it is possible to make logical deductions based on description logics, i.e to create new knowledge from existing knowledge.

  - Concepts (unary predicates) represent entities/classes. e.g., Person, course, student, lecture, seminar… → Student: { x | Student (x) }
  - Roles (binary predicates, properties) represent properties / relations, e.g. participatesAt, givesLecture, isGivenByLecturer… → participatesAt” { (x,y) |participatesAt(x,y) }
  - Individuals (constants, individual entities, concept assertion) e.g., Alice, Bob, SemanticWeb. Syntax: Student(Alice)
  - Operators/Constructors (to construct representations of concepts/roles). Expressivity is limited: Satisfiably and Subsumption is decidable and (preferably) of low complexity. Syntax: participatesAt (Alice, SemanticWeb)
  - Fundamental operators: Conjunction (⊓), Disjunction (⊔), Negation (¬), Restricted form of Quantification (Ɐ, Ǝ) represents Basic Description Logic → ALC (Attributed Language with Complement) [C - class, D - domain, A - individual, R - role, property]

    - Atomic Types: concept names A, B, …, special concepts (⊤ - Top (universal concept), ⊥ Bottom Concepts), Role names R, S, …
    - Constructors: Negation( ¬C), Conjunction (C ⊓ D), Disjunction (C ⊔ D), External Quantifier (ƎR.C), Universal Quantifier (ⱯR.C)
    - e.g., Ǝ(a person)attends(property/role).Lecture(range restriction)
  - Class relations:

    - Inclusion C ⊆ D, e.g. Man ⊆ Human
    - Equality C ≡ D, e.g. Frau ≡ Woman
  - Class Constructors, e.g. Seminarist ≡ Person ⊓ (ƎparticipatesAt.Seminar ⊔ Ǝmanages.Seminar)
  - Terminological Knowledge (Tbox):

    - Axioms describing the structure of the represented domain (conceptual schema)

      - i.e., Human ⊆ ƎhasParents.Human

        - Orphan ≡ Human ⊓ ¬ƎhasParents.Alive
  - Assertional Knowledge (ABox)

    - Axioms describing specific situations (data)

      - i.e., Orphan(harrypotter)

        - hasParent(harrypotter, jamespotter)

![](/attachments/2172321793/2212757505.png)

- Semantics of Description Logics

  - Semantics is determined via interpretation ΔI, I)
  - ΔI … Domain of Discourse, ΔI **≠** ∅
  - Interpretation Function:

    - I :A → AI ⊆ ΔI , A … atomic concept
    - I :R → RI ⊆ ΔI x ⊆ ΔI , R … atomic role/property

![](/attachments/2172321793/2213183489.png)

- *Triple or Triple Store* - A triple, when in regards to ontologies, is comprised of a subject, predicate and object and is a way that ontologies can describe and store data. A triple store is a database that stores all these triples (in RDF) that can be queried later on. “The key to flexible data structures.” “Facts that are asserted as small sentences.” “Triples represent data and metadata…since the data schema and data are triples they can be stored in the same data store - a Triple Store.”

  - Nodes - are either the subject or the object of a triple.
  - Triples are also called ‘assertions’. (Representation of an assertion)
  - Two kinds of triples:

    - Triples involving data:

      - An individual is linked to another individual. I.e. A particular Doctor is linked to a particular Person receiving care.
      - An individual is linked to a literal value. i.e. A particular Person has a First Name.
    - Triples involving metadata: (“The metadata tells you about the data - in owl the metadata gives meaning to the data and supports inferences that can help find bugs as well as draw new conclusions.”)

      - Linking an individual to its Class
      - Specify a Class as a subclass of another class
      - Linking a Class to its OWL construct
      - Linking a property to its OWL construct
  - Types of Triple Stores:

    - Giant Triple Stores

      - Store all RDF triples in a single table
      - Performance depends on efficient indexing
      - Pros:

        - easy to implement
        - works for huge numbers of properties if indexes are chosen with care.
      - Cons:

        - many self joins
      - Ways to make this more efficient:

        - ID Based Triple Storage

          - Use numerical identifier for each RDF term in the dataset
          - Saves space and enhances efficiency
          - Needs a translation table
        - Quad Tables

          - Storing multiple RDF graphs (g, s, p, o) → which triples came from which graph.
          - used for provenance, versioning, contexts, etc.
    - Property Tables

      - Combing all (or some) properties of similar subjects in n-ary tables
      - Use ID based encoding for efficiency.
      - Pros:

        - Fewer joins
        - If the data is structured, we have a relational DB
      - Cons:

        - Potentially a lot of NULLs
        - Clustering is not trivial (complicated and often have to perform by hand)
        - Multi-value properties are complicated
    - Vertically Partitioned Tables (Binary Tables)

      - For each unique property a two column table is created → can be done by machine
      - Use ID based encoding for efficiency
      - Different physical storage models for relational DBs

        - Row Based Storage

          - Tuples (i.e. DB records) are stored consecutively
          - Entire row needs to be read even if few attributes are projected
        - Column Based Storage

          - Read column relevant to the query → projection is free
          - Inserts are expensive
      - Pros:

        - Supports multi-value properties
        - No NULLs
        - Read only needed attributes (i.e less I/O)
        - No clustering
        - Excellent performance (if number of properties is small, queries with bounded properties)
      - Cons:

        - Expensive inserts
        - Bad performance (large number of properties, queries with unbounded properties)
    - Hexastores

      - Create an index for every possible combination to enable efficient processing

        - spo, pos, osp, sop, pso, ops
        - Pros:

          - Fast joins (in the beginning)
        - Cons:

          - 5 times more storage
          - Weak performance, when disk access is necessary
        - The **spo** index:

          - Subject key Si points to sorted vector of ni property keys, {pi1, pi2, … pin}. Each property key pij is linked to a sorted list of object keys. The object key lists are shared with the **pso** index.

![](/attachments/2172321793/2201714691.png)

- *TBox & ABox Statements*: These statements make up a knowledge graph

  - ABox (Assertional Box) - these are assertions made from the vocabulary defined by the TBox statements. Assertional knowledge. Knowledge about instances/entities.

    - i.e. A is an instance of B, John is a Person

      - “of Type”
      - “Member of”
  - Tbox (Terminological Box) - statements that create the conceptual model, or ontology. Terminological knowledge. Knowledge about concepts of a domain (classes, attributes, relations)

    - i.e. All Students are Persons or Students and Teachers are types of Persons
- *CBox (Categorical Box) Statements*: A combination of TBox and ABox statements that are used for categorization. Can be used to simplify models by reducing number of classes. See [here](https://www.youtube.com/watch?v=0-j9nWFVoYc) for further explanation. “This is where taxonomies and enumerated lists are defined and managed.” - Dave (from Data Centric Revolution)
- *Logical Model* - Describes the structure of data for a specific application or purpose. Ideally, logical models are derivatives of an upper ontology.
- *FAIR Data* - Data that upholds these four principles: Findability, Accessibility, Interoperability, and Reusability.
- *Semantics* - “is the study of meaning”. In this case, the semantics are written in OWL, which is a W3C standard, that allows for meaning to be assigned to something that can be understood by both humans and machines. “Branch of linguistics and logic concerned with meaning.”

  - Formal Semantics - “The study of logical aspects of meaning, i.e. sense, reference, implication, and logical form.
  - *Lexical Semantics* - “The study of word meaning and word relations.”
  - *Conceptual Semantics* - “The study of the cognitive structure of meaning.”
- *URI* - Uniform Resource Identifier, “a string that refers to something that exists in the world” (a referent). US ASCII

  - IRI - International Resource Identifier. “International allow for a broader range of character sets.” Like an accent over a character.
- *Instance* - “Things with independent existence”, they “typically have complex relationships”.
- *Relation/Property* - “Connects two instances or associates an instance with a value”.

  - Object Property - “Relates an individual to another individual.”
  - Datatype Property - “Relates an individual to a literal.”
- *Value/Literal* - “Descriptive text, number or date”. “Literals can be thought of as pure values; they don’t have properties or attributes of their own. i.e., Strings, dates, numbers (integers, decimals). You cannot say anything about them. ***A literal cannot be the subject of a triple.***

  - *Attributes* are relationships that connect individuals to literals.
- *Class* - “A set of things with similar properties. All of the instances of a class have the same properties just different values.”

  - A *subclass* is a subset with different properties.
- Schema - basic relationship between objects.
- Reification - when a property is assigned to a triple.
- *ETL* - Extract, Transform, Load.
- *ERP* - Enterprise, Resource, Planning.
- Property Graph

  - Supports edge properties
  - Does not require IRIs
  - Does not support blank nodes.
  - Adds structure to the graph

    - Provides semantic context for nodes
  - Synonym: edge
  - Has one type
  - Has zero or more properties

    - These may differ across relationships with the same type
  - Relates nodes by type and direction
  - must have a start and end node
- *LPG* - Labelled Property Graph. A graph that has no schema, just a label. Knowledge graphs are much richer than property graphs since they a standardized schema.
- *Relational database* - a way to store data as it relates to other data. Much more rigid than a knowledge graph since all relationships need to be defined first.
- SOA - Service-Oriented Architecture, message-based integration
- SAP - “SAP ERP consists of several modules, including Financial Accounting (FI), Controlling (CO), Asset Accounting (AA), Sales & Distribution (SD), Material Management (MM), Production Planning (PP), Quality Management (QM), Project System (PS), Plant Maintenance (PM), Human Resources (HR), Warehouse Management (WM).”

  - SAAP?
- Parti - Initial sketch of the design. Can be in powerpoint other visualization tools. Word comes from architectural design.

**Ontology Summary:**

- **Axioms** describe knowledge that can’t be expressed simply with the help of other existing components.
- Logical Inconsistency: Google is an instance of Person (legally) and Corporation. Creates an error within the lines of reasoning.
- Non-Overlapping Kinds (aka Disjoint): an instance of one cannot be an instance of the other
- Metadata: the ontology that defines the vocabulary of the subject matter.
- Data: Use that vocabulary to create and say things about the individual.
- Properties

  - Datatype:

    - Dates (xsd:dateTime)
    - Numbers (xsd:integer)
    - Strings (xsd:string)
  - Object:

    - Arrows in a knowledge graph
  - Characteristics:

    - Functional - to have no more than one value. Inverse Functional - same thing just reversed.
    - Transitive - “jump over” --> If x = y and y=z, then x=z
    - Symmetric - “if Canada borders the US then the US must border Canada”.
- Domain + Range

  - What kinds of things you can link
  - Applicability with respect to Subject

    - A property only applies to instances of class C, i.e. the Domain
    - careRecipient only applies to PatientVisits
  - Applicability of things with respect to Object

    - The range of possible values that a property can have must be instances of class C, i.e. the Range
    - the careRecipient is always of type Person
  - “What kind of thing must the Subject be, in a triple using a particular property?” (Domain)

    - “ ‘domain’ translates informally to ‘only applies to’ “
  - “What kind of thing must an Object be, in a triple using a particular property?” (Range)

    - “range of possible values”
  - Domain and range are not constraints! They provide more clarity on how a property is used.
- Property Restrictions: A property restriction is a class expression that specifies what and how many properties a member may, must, or must not have. i.e. a two-wheeled vehicle has two different wheels as parts. This is another important way to ascribe meaning to a class, in addition to the Boolean expressions.

  - A restriction is a class, and thus may be used anywhere that a class is expected, e.g. in a domain or range or part of a Boolean expression. The most common usage scenarios specify the meaning of a class.

    - Make an existing class **equivalent** to a restriction
    - Make an existing class the **subclass** of a restriction
  - In each case it entails:

    - Create a class
    - Create a property restriction
    - Relate the class to the restriction using equivalentClass or subClassOf
  - Exact Cardinality Restriction

    - The set of individuals that are subjects of exactly two triples using the *hasPart* property where the objects of the triples are different wheels. TwoWheeledThing = (hasPart exactly 2 Wheel)

      - In Protege you have to add it as a class expression.
  - Existential Restriction

    - The set of individuals that is the subject of at least one triple using the *covers* property where the object of the triple is of type Party. Helps define the meaning of an insurance policy. It covers at least one party. InsurancePolicy :covers some :Party)

      - (doe:cover some doe:Party)
    - In protege, select the class, add SubclassOf relationship then add a class expression.
  - Anatomy of a Property Restriction

    - A restriction denotes a set of subjects of triples using a given predicate that satisfy certain conditions.

      - *necessary conditions* are conditions that must be true for every member of the class.
    - The triples from which the subjects are taken are the ‘grounding triples’ for the restriction.
    - There are three parts to a restriction:

      - *Property*: an object or datatype property
      - *Type*: the type of restriction (e.g. exact cardinality)
      - *Filter*: constrains what the types of the objects of the grounding triples are. E.g. Party in (*covers some Party*)
  - Restrictions with Object and Datatype Properties

    - A restriction is defined in terms of ‘grounding triples’ depicted with thick black lines.
    - Note the difference in filters

      - Object - :firstName some :Name
      - Datatype - :firstname somexsd:string
  - Universal: The set of all things that have only physicians as members. (doe:hasMember only doe:Physician
  - Minimum
  - Maximum
  - Only
  - Inverse - most properties are directional
- Property Generalization/Specialization

  - subPropertyOf - more specialized property relationship
- Properties vs Classes

  - Properties

    - Comments
    - Hierarchies
    - Characteristics
    - Domain and Range

**Classes** - a class corresponds to a set of objects of a particular kind. All the members of a class share certain things in common. Classes are arranged in hierarchies.

- A class may be defined as a class expression.
- A class expression results in a new class that can be used anywhere a class is expected. For example:

  - As a domain or range
  - In any Boolean class expression
- A class expression is an anonymous class.
- A class expression appears in a triple as a blank node.
- Arbitrary nesting is possible, but it is best to keep things simple.
- Hierarchies

  - The subClassOf relationship is used to indicate that one class is a specialization of another class. A set of linked subClassOf relationships forms a class hierarchy.

    - Inferencing: To say that C1 is a subClassOf C2 is precisely to say that for any individual x:

      - IF: x rdf:type C1.
      - THEN: x rdf:type C2.
      - ![](/attachments/2172321793/2215510021.png)
- Enumerated Classes:

  - An enumerated class explicitly lists all the members. It is closed: no other individuals are members. e.g. The US States, and employee’s exempt status.

    - Construct: owl:oneOf

      ![](/attachments/2172321793/2215772163.png)
  - Sanctioned Inferences

    - If an individual is different from every enumerated member of a class, then it is in the complement of the class.

      - IF:

        - C2 owl:equivalentClass {x1, x2, …, xn}. and
        - C1 owl:complementOf C2. and
        - for i=1, n x owl:differentFrom xi.
      - THEN: x rdf:type C1.
    - If an individual is the same as any members of an enumerated class, then it is itself a member of the class.

      - IF: for any i, y owl:sameAs xi.
      - THEN: y rdf:type C2.

Class Expressions - we can use union, intersection and property restrictions to create expressions that refer to classes. Such expressions indirectly refer to specific classes just like arithmetic expressions indirectly refer to numbers. A property restriction always represents a class, what makes it different than a class is that it is it is a class that is defined by what properties its members have. It also does not need a name, it can be purely an expression (though it is a good idea to think of a name for this class). A data property can also be used in a property restriction.

Examples of Class Expressions using Intersection

1. doe:Organization or doe:Person
2. doe:TwoWheeledVehicle and doe:MotorizedVehicle
3. doe:Person and (doe:careRecipientOn some doe:PatientVisit)
4. doe:C3 a C1 and a C2. C3 is Equivalent to doe:C1 and doe:C2

```
Class: doe:PatientVisit
   SubClassOf:
      doe:Event,
      doe:careProvider some doe:Person
      doe:careRecipient some doe:Person
```

- ![](/attachments/2172321793/2201419792.png)
- Boolean Expression use the following set of operations:

  - Union and Intersection

    - We can use union, intersection and property restrictions to create expressions that refer to classes. Such expressions indirectly refer to specific classes just like arithmetic expressions indirectly refer to numbers.
    - “or” clause (two wheeled vehicle class and motorized vehicle class - a motorcycle is a subclass of both but that doesn’t mean that those two classes are equivalent).
  - Union: Sanctioned Inferencing

    - The union of two classes includes just those individuals that are members of **either** class.

      - IF: C1 owl:equivalentClass (C2 or C3)
      - THEN:

        - 1. C2 rdfs:subClassOf C1.
        - 2. C3 rdfs:subClassOf C1.
      - From 1 and 2 above, and from the definition of rdfs:subClassOf

        - IF: *either or both* of the two following triples exist:

          - 1. x rdf:type C2.
          - 2. x rdf:type C3.
        - THEN:

          - 3. rdf:type C1.
    - e.g. Party = Person or Organization. Org is a subclass of Party and Person is a subclass of Party
  - Intersection: Sanctioned Inferencing

    - The intersection of two classes includes just those individuals that are members of **both** classes.

      - IF: C1 owl:equivalentClass (C2 and C3).
      - THEN:

        - C1 rdfs:subClassOf C2.
        - C1 rdfs:subClassOf C3.
      - From this, and from the definition of rdfs:subClassOf,

        - IF: x rdf:type C1.
        - THEN:

          - x rdf:type C2.
          - x rdf:type C3.
  - Complement: Sanctioned Inferencing

    - The complement of a class includes just those individuals that are **not** in the class.

      - IF: C1 owl:complementOf C2.
      - THEN: C1 owl:disjointWith C2.
      - From the meaning of disjoint classes, we can further conclude that:

        - IF: x rdf:type C2. and y rdf:type C1.
        - THEN: ¬( x rdf:type C1) and ¬(y rdf:type C2). and x owl:differentFrom y. (This second expression is needed because there is no unique names assumption.)
- Equivalent and Disjoint

  - The equivalentClass relationship indicates that two classes have the exact same instances. In other words: If an instance is in one class it’s also in the other. There are two main uses:

    - To add meaning to a class by making it equivalent to a class expression.
    - To map classes from two independently developed ontologies.
    - Be careful!

      - This is a very strong statement, if the classes have different axioms, each will get the others. Be sure that is what you want.
      - Alternative: make one a subclass of the other.
    - Inferencing: To say that C1 rdfs:equivalentClass C2 is precisely to say the following two things for any individual x,

      - IF: x rdf:type C1.
      - THEN: x rdf:type C2. and.
      - IF: x rdf:type C2.
      - THEN: x rdf:type C1.
      - Note: If/then statements above translate to C1 subClassOf C2 and C2 subClassOf C1. When subclass goes in both directions, it means equivalence.
  - The disjointWith relationship indicates that two classes have no instances in common. In other words: If an instance is in one class, it’s not in the other. It’s used to communicate meaning and catch errors.

    - Inferencing: To say that C1 owl:disjointWith C2 is to say the following two things:

      - IF: x rdf:type C1.
      - THEN: ¬ (x rdf:type C2). [¬, means logical negation] and
      - IF: x rdf:type C2.
      - THEN: ¬ (x rdf:type C1).
    - Disjoint Combined with Domain and Range

      - Catches mistakes when mixing up domain and range

        - Example:

          - PatientVisit is a subclass of Event
          - Person is a subclass of PhysicalObject
          - Event is disjointWith PhysicalObject
          - careRecipient → Domain: Person, Range: PatientVisit
          - PatientVisit 123 careRecipient Person\_Jane
          - Jane is asserted to be a Person, but inferred to be a PatientVisit
          - Cannot be both → logical inconsistency caught by inference engine
- Restrictions
- Comments
- Naming Conventions

  - Classes are uppercase
  - Properties are camelcase
  - Individuals start with “\_”
  - Property inverses

    - hasX/xOf (e.g. hasParent vs parentOf)
    - Xes/XdBy (e.g. identifies vs indentifiedBy)
- Manchester vs. Turtle Syntax

  - AND corresponds to owl:intersectionOf
  - OR corresponds to owl:unionOf
  - SOME corresponds to owlLsomeValuesFrom

    - ex: The following expression defines a Motorcycle class → doe:TwoWheeledVehicle and doe:MotorizedVehicle

      ![](/attachments/2172321793/2215608325.png)

OWL Overview

- owl:Thing is used to create individual things
- owl:Class is used to create kinds of things
- rdf:type is used to connect an individual to a class
- rdfs:subClassOf is used to create more specific classes
- owl:ObjectProperty is used to create ways to relate two individuals
- owl:DatatypeProperty is used to create ways to relate individuals to literals
- Data results from creating individuals and connecting them to other individuals and to literals
- Metadata gives meaning to the data and supports inference.
- Open vs Closed world

  - Open → distinguishes between ‘no’ and ‘I don’t know', no assumptions.

    - Yes → Provably true
    - No → Provably false
    - Idk → Not provably true or false, need more information
  - Closed → if no information is given then ‘no’ is automatically assumed

    - Yes → provably true
    - No → not provably true
    - Idk → n/a
- Serialization ?

  - “Turtle is a serialization of RDF”
- Node

  - Represents an entity within the graph
  - Has zero or more labels
  - Has zero or more properties
  - Synonym: vertex
  - “Collapsing together different occurrences of the same node is called “node-folding”
- Anonymous Classes and Blank Nodes

  - A class expression is a class with no IRI (it’s unnamed). Hence, it is called an ‘anonymous class’. It’s just a raw expression, analogous to: 4\*(11-3).
  - It’s also called a ‘blank node’ because it is a node in a knowledge graph.
  - Evaluating a numerical expression results in a named number (e.g. 32).
  - No such evaluation can take place for class expressions.
  - To give a class expression a name (i.e. IRI), we need to use owl:equivalentClass.
- Limits of RDF(S)

  - Locality of global properties, i.e. ‘eats’ property that has a domain of Animal and range of Food (which has subclasses of Vegetables and Meat)

    - Problem: Cows only eat vegetables, other animals also eat meat
  - Disjunctive Classes, i.e. Human having subclasses of Woman and Man. Cannot express that two classes are exclusively disjunctive from each other.

    - Problem: Subclass relation cannot express disjunctive class (subclass) membership.
  - Class Combinations, i.e. Road User with subclasses of Motorist, Motorcyclist, Pedestrian and Cyclist.

    - Problem: Combination of classes define a new class. New class contains only members from given class combinations.
  - Cardinality Restrictions, i.e Human - hasParent → Parent

    - Problem: Every human (usually) has two parents. Cannot restrict the hasParent to two in rdfs, this is where SHACL comes in.
  - Special Property Constraints

    - Transitivity (e.g. is greater than)
    - Uniqueness (e.g. is mother of)
    - Inverseness (e.g ‘is parent of’ and ‘is child of’)

SPARQL Reference Material - Simple Protocol and Query Language

- <https://www.iro.umontreal.ca/~lapalme/ift6281/sparql-1_1-cheat-sheet.pdf>
- <http://repositorio.cedia.org.ec/bitstream/123456789/931/3/02_SPARQL.pdf>
- <https://www.csd.uoc.gr/~hy561/Lectures13/CS561SPARQL13.pdf>
- <http://dig.csail.mit.edu/2010/Courses/6.898/resources/sparql-tutorial.pdf>
- <https://programminghistorian.org/en/lessons/retired/graph-databases-and-SPARQL>
- <http://www.ontobee.org/tutorial/sparql>
- <https://www.w3.org/TR/2013/REC-sparql11-query-20130321/#neg-pattern>
- <https://docs.data.world/tutorials/sparql/Your_First_Sparql_Query.html>
- <http://www.linkeddatatools.com/querying-semantic-data>
- <https://medium.com/wallscope/constructing-sparql-queries-ca63b8b9ac02>
- <https://www.w3.org/2001/sw/DataAccess/rq23/examples.html>
- [http://sparql-playground.sib.swiss/?query=SELECT%20\*%20where%20%7B%0A%20%20%20VALUES%20%3Fsubj%20%7Bdbpedia:Harrison\_Ford%7D%0A%20%20%20%3Fsubj%20tto:pet%20%3Fpet%20.%0A%20%20%20SERVICE%20%3Chttp:%2F%2Fdbpedia.org%2Fsparql%3E%20%7B%0A%20%20%20%20%20%20%20%3Fsubj%20dbp:birthDate%20%3Fbirthday%20.%0A%09%20%7D%0A%7D&output=html](http://sparql-playground.sib.swiss/?query=SELECT%20*%20where%20%7B%0A%20%20%20VALUES%20%3Fsubj%20%7Bdbpedia:Harrison_Ford%7D%0A%20%20%20%3Fsubj%20tto:pet%20%3Fpet%20.%0A%20%20%20SERVICE%20%3Chttp:%2F%2Fdbpedia.org%2Fsparql%3E%20%7B%0A%20%20%20%20%20%20%20%3Fsubj%20dbp:birthDate%20%3Fbirthday%20.%0A%09%20%7D%0A%7D&output=html)
- <https://blog.cambridgesemantics.com/sparql-one-standard-to-rule-them-all>
- [Learn SPARQL (cambridgesemantics.com)](https://cambridgesemantics.com/blog/semantic-university/learn-sparql/)
- [SPARQL playground (sib.swiss)](https://sparql-playground.sib.swiss/)
- [SPARQL Tutorial | data.world](https://data.world/blog/sparql-tutorial/)
- [▷ What is SPARQL? | An Introduction to SPARQL (mindmajix.com)](https://mindmajix.com/sparql-tutorial)
- [Learn SPARQL | Stardog Documentation Late](https://docs.stardog.com/tutorials/learn-sparql)

More advanced SPARQL

- [Knowledge Graph Seminar Session 4](https://www.youtube.com/watch?v=JaywGeqZkjA&list=PLDhh0lALedc5paY4N3NRZ3j_ui9foL7Qc&index=4) - Partial Queries? Partitioned data? → For centralized data. We are working with federated data → SPARQL endpoints.
- <https://www.stardog.com/blog/how-to-read-stardog-query-plans/>
- <https://www.stardog.com/blog/7-steps-to-fast-sparql-queries/>

![](/attachments/2172321793/2201583624.png)![](/attachments/2172321793/2201681925.png)

TARQL - allows the user to convert CSV files into RDF. Michael: “It’s the same as SPARQL but used to create triples.”

<https://tarql.github.io/>

[Basic TARQL Walkthrough (featuring Semantic Arts)](https://www.bobdc.com/blog/tarql/)

**Presentations**

- DBBO Course → NJ-2017-10-All
- Intro to Data-Centric: <https://www.semanticarts.com/intro-to-data-centric/> (Password: IntrotoDC\_2021)
- Breakdown Silos with Knowledge Graphs
- The Art of Semantics <https://www.youtube.com/watch?v=TGaRuaPSX58&t=789s>

  - “Graphs give you flexibility, semantics give you simplicity, and ontologies give you the model → which gives you production code.”
- Think Big, Start Small ppt
- Data Centric Transformation <https://www.youtube.com/watch?v=eeodxx9a4z4&t=1403s>
- The Business Case for Semantic Web Ontology & Knowledge Graphs <https://www.youtube.com/watch?v=5VNtYqyzmMM&t=96s>

  - About Semantic Arts

    - We’re experts in Semantic technology and Ontology design
    - We specialize in Semantic strategy and Ontology implementation, refining our best practices since 2000
    - We’re thought leaders who speak at conferences, publish articles, and author books on Information Management innovation and enrichment across the enterprise
    - Collectively, our team has over 200 years of experience
    - We’re investing on the Ontology community and the pursuit of sharing ideas (Gist Council, Estes Park Group)
    - We’re developing proprietary tools for faster adoption: Gist (Minimalist Upper Ontology)
    - We observe international WC3 standards and guidelines
- Amgen: <https://www.semanticarts.com/amgens-enterprise-data-fabric/> (Password: Amgen\_DCAF2021) - Real world example
- Intuit: <https://www.semanticarts.com/weaving-data-centric-thinking-into-enterprise-architecture/>(Password: DCThinking\_2021) -Real world example
- DuPont Training Program:

  - ClientsAndPartners\DuPont\2021 Projects\Recordings\data-centric-enablement\
  - 7 2h sessions

Gist Council Meetings

**Blog Posts**

- Semantic Ontology: The Basics - <https://www.semanticarts.com/semantic-ontology-the-basics/>
- Semantic Silos and [Cowpaths](https://www.craigbailey.net/paving-the-cow-paths/)<https://www.semanticarts.com/enterprise-ontology-semantic-silos-and-cowpaths/>
- <https://www.semanticarts.com/response-time-quanta/> - How fast should your queries be?

Tools

- Stardog Studio (HOW TO INSTALL WITHOUT TEARING OUT YOUR HAIR [Stardog License](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/824770651/Stardog+License) )

  - <https://www.stardog.com/blog/7-steps-to-fast-sparql-queries/>
  - <https://docs.stardog.com/archive/7.5.1/virtual-graphs/mapping-data-sources.html#sms2-stardog-mapping-syntax-2>
- Notepad ++
- Visual Studio (VS Code)

Languages

- RDF - is how to describe things

  - RDFS - Lightweight schema, syntax specification
- OWL - describes what the thing is

  - Alternatives:

    - Manchester Syntax: easiest to read, hides details
    - Turtle: easy to read, focus on triples
    - RDF/XML: horrible to read, first standard
- Turtle
- JSON (as needed with client)
- SPARQL/TARQL
- SHACL

Books

- Software Wasteland: How the Application-Centric Mindset is Hobbling our Enterprises - Dave McComb
- The Data-Centric Revolution: Restoring Sanity to Enterprise Information Systems - Dave McComb
- [A data engineer’s guide to semantic modelling](https://zenodo.org/record/3898519?hsCtaTracking=870ee1df-0d7b-4e50-8767-b79d2a8295f0%7C40a224e4-9b70-4886-9520-95036d56f67e#.X_w3kS1Q10t ) - Ilaria Maresi
- [Learning SPARQL](https://media.oiipdf.com/pdf/f59ad891-ba1d-406f-9b59-6c76ead6aa79.pdf) - Bob DuCharme
- Demystifying OWL for the Enterprise - Michael Ushold

Questions

- Out of all of this information what are the key takeaways that new hires should have?

  - Want to avoid semantic silos - how does Semantic Arts avoid semantic silos?
- What is the role of an entry level ontologist in a typical project? What should one expect?
- Training Questions

  - What is a serializer?
  - How can we get better at optimizing SPARQL queries? Does someone “red ink” them or do we just learn with time and practice?
  - How is our work evaluated?
  - Soft skills, things to keep in mind for any given project. Big picture.
  - What is our role as entry level ontologists?
  - Optimizing queries (less than a second)
  - Core vs Upper Level Ontology

What to Expect in a Project (From Michael Uschold’s 2021 DuPont Training)

- Phase 1

  - Identify questions the client wants answers to as initial requirements.

    - Answer those questions using SPARQL queries.
  - Build the ontology and triple store to meet those requirements.
  - Build out applications that use the data.
- Phase 2: a second iteration

  - Broaden scope by identifying another set of questions as requirements.
  - Extend the ontology to meet the requirements.
  - Coordinate with other ontology authors in the enterprise.
  - Make data and ontology available as triples.
  - Extend existing and/or build out additional applications.
- Keep on iterating

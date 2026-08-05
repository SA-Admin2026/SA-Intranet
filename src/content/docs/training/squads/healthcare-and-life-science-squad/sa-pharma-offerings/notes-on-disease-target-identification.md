---
title: "Notes on Disease Target Identification"
confluence_id: 3008233473
source: "Notes-on-Disease-Target-Identification_3008233473.html"
---

SOURCE: <https://www.ontotext.com/solutions/ontotexts-target-discovery/?utm_campaign=Target%20Discovery&utm_source=youtube&utm_medium=social&utm_content=ls-hc-video>

![image-20250605-181757.png](/attachments/3008233473/3010494471.png)

SOURCE: <https://www.youtube.com/watch?v=Ovjqv-HLLgc>

A knowledge graph is an interrogatable representation of pair-based relationships such as:

Drug X inhibits Target Y.

Gene X Unregulated CKD.

Our knowledge graph is built from relationships identified in our data such as:

1. Chemistry
2. Pharmacology
3. Imaging
4. Genomics
5. And supported by knowledge from text, images, and videos.

Some competency questions that may be of interest include:

1. Which genes are upregulated in Chronic Kidney Disease (CKD)?
2. Which genes are genetically linked to Chronic Kidney Disease (CKD)?
3. Which targets are druggable?
4. What are the pathway relationships between these Chronic Kidney Disease (CKD) genes?

SOURCE: <https://www.youtube.com/watch?v=SRHVXL-qWJs>

Benevolent AI, “We are working to uncover new insights into enormously complex diseases. With BenevolentAI’s technology; AI and advanced models applied to the vast amount of data that is available, we can empower scientists to find new targets for diseases.“

We have two teams working across:

1. Chronic Kidney Disease
2. Idiopathic Pulmonary Fibrosis

The teams have been working to integrate lots of data to develop disease-specific knowledge graphs.

Pernille Laerkegaard Hansen, Head of Bioscience at AstraZeneca: “Discovering new targets is - and remains - the most important decision we make in R&D. Within last year, we have had game changers for the Chronic Kidney Disease (CKD) patients with new standard of care coming and being available for the patients very soon. And we therefore need to build with novelty on top of this knowledge and that is exactly what we did with our CKD knowledge graph. Previously we have looked at data sets in silos. So either looking at transcriptomic data sets or genomic data sets, but here we can really get an overview of all the available data sets.“

AstraZeneca selecting their first AI-generated target to enter their portfolio is a way to generate novel targets for diseases. The balance of combining wet and dry biology is bringing forward innovations and transforming the culture of target identifications to develop more effective treatments for the patients that need them.

SOURCE: <https://www.youtube.com/watch?v=haunLEEWCUU>

Organizations are built on knowledge. When developing drugs for specific diseases, the challenge is to identify which protein is relevant. Researchers want to first know, if there is any relevant research data and knowledge about this particular disease in the company database. Even if there is data about that disease and the protein mechanism identified as a potential target, if there is no means of referencing the data about the same protein in the disease, then there is going to be a fragmentation of knowledge and degradation of the search capabilities. This may require an organization to spend money and time developing experiments that may already exist in an organization’s knowledge base or database.

By linking and integrating data from various sources, a knowledge graph allows you to capture experts' knowledge and link it directly to the data. This makes the data meaningful, searchable, and it creates a shared understanding. This makes it easy to identify, access, and unbundle data from the multiple siloes, and reuse in any following research studies or drug discovery projects. Using knowledge graphs allows you to take both structured and unstructured data to combine these into comprehensive and FAIR knowledge assets.

SOURCE: <https://www.youtube.com/watch?v=-EKuIZCiv3w>

GSK Bellman SPARQL Engine + Logical Inferencing = Knowledge Graph for Vaccine and Drug Research

NOTES:

- The Schema is the terminological knowledge of a domain, a domain model.
- The Instances are the tables in a RDB, instances of a schema and their connections.
- Querying:

  - Querying without inferencing allows you to retrieve data via a SPARQL query very much like an SQL query, with explicit criteria.
  - Querying with logical inferencing allows you to parse the schema, look for connections relevant to the schema and data, in order to provide associated instances outside the boundaries of the explicit request.
- Logical inferencing is used in code as two algorithms to retrieve non-obvious, but related data:

  - Forward chaining algorithms
  - Backward chaining algorithms
- Construction of the solution:

  - You start by developing the “Canonical Gene Class”
  - Then you want to combine it with the “Bio-Ontology Gene Class” used by a research group
  - Then you want to combine it with the “Gene Ontology Gene Class“ used by a university group
  - In order to take advantage of logical inferencing with various kinds of ontologies, you need to use equivalent class entailment to show which classes are like each other in between ontology models.
  - By leveraging semantic knowledge graphs, you can take advantage of multiple data schemas and data sets using entailment of classes between schemas.

SOURCE: <https://www.youtube.com/watch?v=zN7AVQ5DZVc>

Knowledge Graphs and Explainable AI for Drug Repurposing on Rare Diseases

The disease we are seeing is Duchenne Muscular Dystrophy

![image-20250604-190020.png](/attachments/3008233473/3009216515.png)

The objective of the project was to use AI methods to find drug candidates that can treat the symptoms of rare diseases, as well as obtaining explanations that could help researchers and clinicians to generate testable hypothesis.

![image-20250604-190239.png](/attachments/3008233473/3008987145.png)

They developed a 3 part methodology:

1. Develop a knowledge graph
2. Train a graph neural network model
3. Explainable AI part, where you use GNN Explainer to obtain an explanation

![image-20250604-190353.png](/attachments/3008233473/3009380353.png)

The main source of information was from the Monarch Initiative regarding genes, symptoms, phenotypes, anatomical structures. There was a complement of 2 data sources to get more details around drug targets and therapeutic target database.

To build the AI model, the problem was viewed as a link prediction problem, “Is there a link between Drug A and Disease B?“

![image-20250604-190648.png](/attachments/3008233473/3009019909.png)

Then working with GNN Explainer, you can find the probability of which nodes are affected by removing links within a graph neural network to find relevant connections.

![image-20250604-190900.png](/attachments/3008233473/3009249288.png)![image-20250604-191626.png](/attachments/3008233473/3009282063.png)

OPEN Q & A:

- What is the value of ontologies in this exercise?

  - Ontologies are relations used to construct the graph => provide context, structure, and semantics for human and machines.
  - Ontology based graphs provide explanations that can be easily read and understood by both human and machines.
- How do you determine what is a good drug candidate?

  - By looking at the drugs with a large amount of related evidence, you have research starting points to reference for building new hypothesis.

SOURCE: <https://www.youtube.com/watch?v=mrK7DpGfGDg>

Connecting the Dots in Early Drug Discovery

Stephan Reiling, Senior Scientist, Novartis Institutes of BioMedical Research

This talk shows how a lot of heterogenous data can be integrated into one big graph, using text mining and pattern detection to find valuable insights within a sea of scientific papers.

The reason they pursued this project / work is to figure a way to represent treatment effects in cellular phenotypic assays.

![image-20250604-202938.png](/attachments/3008233473/3009118215.png)

PROBLEM STATEMENT:

- We have the dots, almost 1 billion data points of compound activity data on protein targets (~99% of which can be summarized as “not active“).
- More and more results of phenotypic assays
- We lack the connections, a good way to use biological knowledge or background information to make a connection.
- A storage for “biological knowledge” that can be “queried.”
- We want to analyze the relationship between Disease (Phenotype), Genes, and Compounds, given that for successful drug discovery, you need to find the relationship between these 3 dimensions.

How did they built their knowledge graph?

They used text mining techniques on the NIH PubMed website for chemicals, diseases, and proteins to identity entities and the relationships between those entities. At the time of the video in 2016, PubMed had around ~25,000,000 article abstracts, 5,600 journals, 1946 - current, and tagged with “MeSH terms“ (Medical Subject Heading)

5 out of 16 relevant MeSH terms:

1. Diseases
2. Processes and Mechanisms
3. Anatomy
4. Chemicals and Drugs
5. Organisms

What can you do with this?

They wanted to get pairings of “(1) disease - (2) compound - (3) target” from text mining.

They wanted to assess that each pairing had strong confidence that they have a good relationships within the pairing, validating that there is a good probability this is a useful piece of information. This association also benefits from referencing the relevant literature found in PubMed that can verify that this statistical information is based on past research.

![image-20250604-204123.png](/attachments/3008233473/3008856073.png)![image-20250604-205040.png](/attachments/3008233473/3009445891.png)![image-20250604-205942.png](/attachments/3008233473/3008659466.png)

The disease and compounds are organized in the MeSH categories, that is what is being used as a taxonomy, there are other taxonomies and ontologies, however to get started created analysis - paralysis, and they decided to defer the selection of these models in favor of jumpstarting the graph data science journey.

The group that this presenter belongs in, is the data scientists and data miners responsible for identifying targets and compounds that go into the lead optimization project. The phenotypic assay is that you can run assays that you don’t understand, but when you take pictures of these assays, then you can start to figure out what aspects of this chemical interaction yield which results.

Justification on why they decided to switch to neo4j?

The difference between neo4j and a triple store is that:

- neo4j has nodes and the nodes have parameters, and then you have relationships.
- a triple store doesn’t know about nodes, or about relationships, it only knows about triples.
- triple stores are super flexible, and you can definitely do things with a triple store that you would have a hard time doing in neo4j, but we are just doing graph traversal.
- We probably have to go back to this once we figure out which ontologies to use, since it is slightly difficult figuring out which ontologies are relevant and how to match them up, when they are not natively compatible.
- To incorporate ontologies in the future, they were considering getting more familiar with schemas in neo4j as a starting point. They were too inexperienced with semantic technologies.

SOURCE: <https://www.youtube.com/watch?v=y9Gv2bVItYU>

Knowledge Graphs in Drug Discovery: Accelerating Target Discovery & Precision Oncology

Krishna C. Bulusu, Director of Early Computational Oncology Translational Medicine, Oncology R&D at AstraZeneca

Krishna is going to cover a very specific case study on how they used an enterprise knowledge graph to pursue their oncology R&D work.

![image-20250604-214537.png](/attachments/3008233473/3009675269.png)

Evolution of Bioinformatics & Computational Biology as a key research domain:

- Bioinformatics as a field has been there for decades, where it has been practiced and utilized for drug discovery for a while.
- The human genome project itself and the technological / scientific innovation that triggered this project gave us a ridiculous amount of data which then triggered another amount of information and the connection between that data with systems biology.
- All this information also leads to a deluge of data wealth and that is where machine learning and AI come into the picture.
- It is critical for all these domains to co-exist and communicate for much-quicker & better patient benefit.
- The aim is to bring all of this together in a meaningful and context specific manner to drive precision medicine so that we can get drugs to patients in a much faster way than what we are doing right now.

AstraZeneca introduced a 5R framework that improve their efficacy in developing drugs:

1. Right Target
2. Right Tissue
3. Right Safety
4. Right Patient
5. Right Commercial

The right data and data sets drives every single R in this framework.

There are still challenges remaining in the Drug Discovery and Development process:

1. Target decision take years to be validated
2. Too much data for scientists to consider when generating hypothesis
3. Preclinical signals do not consistently translate into patient benefit

Within the context of bridging this gap, requires the management and integration of various types of datasets that represent different domains:

- Chemistry
- Pathway biology
- Network biology
- In Vitro / In Vivo / Clinical
- Genomics
- Side Effects

They defined a knowledge graph as any information within a network representation from which relationships could be inferred. Graph is just a collection of data, and knowledge is the relationship between the data.

Knowledge graphs are useful because they are multi-modal, multi-layered information in one logical container. They can handle highly complex, non-linear relationships. Machine Learning algorithms can update these relationships based on defined aim. Graph + Algorithms together becomes a predictive graphical model that can identify remote or hidden relationships.

![image-20250605-143619.png](/attachments/3008233473/3010330626.png)

In addition to a KG, an extensive suite of graph analytical tools are needed to address key drug discovery questions

![image-20250605-144109.png](/attachments/3008233473/3010396164.png)![image-20250605-145313.png](/attachments/3008233473/3010232324.png)

The aim is to achieve the 3 boxes above to capture the feature space of:

- Drugs
- Disease / Target
- Drug <-→ Disease Relationships

![image-20250605-145730.png](/attachments/3008233473/3010330632.png)![image-20250605-150001.png](/attachments/3008233473/3010592770.png)

There are 2 potential architectures to pursue and evaluate the relationship between drugs, cell lines / targets, and drug to target interactions as shown in the presentation:

Architecture #1: Incorporating multiomic data into a single drug-disease GNN

![image-20250605-150722.png](/attachments/3008233473/3010428931.png)

The final binarized Predicted IC50 is used to predict a given drug’s efficacy at curing a particular disease cell line. This architecture also allows you to interpret individual node weights as well.

![image-20250605-151021.png](/attachments/3008233473/3010330639.png)

Another way of representing the graph is to separate individual graphs for individual GNN, so that the biology, drug, and drug to target datasets are evaluated individually. This is important when there is a sparsity in data available.

![image-20250605-151135.png](/attachments/3008233473/3010428938.png)![image-20250605-151311.png](/attachments/3008233473/3010592777.png)![image-20250605-151447.png](/attachments/3008233473/3010265094.png)![image-20250605-151610.png](/attachments/3008233473/3010363396.png)

Interpretable models help construct a “weighted“ graph capturing direct and indirect relationships driving target inhibition. Using a knowledge graph, you are able to generate interpretable graphs for each drug-disease, drug-patient pair.

![image-20250605-151919.png](/attachments/3008233473/3010363402.png)![image-20250605-152253.png](/attachments/3008233473/3010560003.png)

To do drug discovery really really well using knowledge graphs and machine learning. There is a dedicated effort to bridge this gap between datasets. Interpretable knowledge graphs enable the representation of high-level granularity in biological data and accelerate the drug discovery pipeline.

What is essential to make KG work for Pharma?

- Fully integrated teams
- Clarity on the question & potential for KG to solve
- Data quality and governance using FAIR data principles
- Graph flexibility - there isn’t on KG to rule them all

When will we know that KG has been successful?

- Technical validation
- Inclusion in the drug discovery process, without data scientists in the loop
- Improved pipeline metrics

  - Bench to bedside timelines
  - Time to drug investment decisions
  - Success rate in Ph2

![image-20250605-181354.png](/attachments/3008233473/3010592786.png)

SOURCE: <https://www.youtube.com/watch?v=q5061JL5LaU>

Graph-Based Features for Recommendation Systems in Drug Discovery

A recommendation system is a type of algorithm or software that **suggests relevant items** to users based on their preferences, behavior, or similarities to others. It helps users **discover content or products** they might like, improving engagement and decision-making by filtering large information spaces.

How can recommendation systems be applied in drug discovery?

The competency question of “find me genes involved in a particular disease“ is key example:

- There are 10’s of thousands of potentially druggable genes in a genome
- They are looking to find which genes target a particular disease
- So they can target those genes and cure those disease
- Usually you undergo a Genome-wide CRISPR Screen resulting in 1-2 thousand potential targets
- A scientist then has to triage resulting genes as targets for drugs with those genes.
- Biological, clinical, and commercial features can be used to prioritize genes according to weight.
- Recommendation systems have already found great success in organizations:

  - **AstraZeneca** uses a gene recommender system for EGFR drug resistance
  - **Insilico Medicine** uses an identification of novel genes for ALS

![image-20250606-152221.png](/attachments/3008233473/3011674113.png)

Why use graph-based features?

Biology naturally conforms to a network, so inside a cell, molecular biology is naturally an environment where every gene interacts with each other and affecting each other as well as with disease and drugs. To get as close to biology as possible, a graph is a good use.

![image-20250606-152527.png](/attachments/3008233473/3011641346.png)

A biologist often when they are looking at potential targets that they are trying to understand, so they already know there is a pathway or molecular process that has a disease association, they are looking for genes that could have an effect on the pathway or molecular process, so they can focus on those mechanisms as therapeutic targets.

![image-20250606-153125.png](/attachments/3008233473/3011674120.png)

Often there are genes that have a well known association to a disease, and you want to find similar genes that have potential targets for a disease. You can represent a model of the target gene to look for similarities of other look-alike genes. You may want to include features into the recommendation system that are not graph-based such as traceability, 3rd party disease association scores, and the gene impact on cell viability.

![image-20250606-154105.png](/attachments/3008233473/3011641354.png)

Once you have generated features of interest for each gene, so you have a list of all the genes you are considering, you can then use a recommendation engine to filter through the most likely candidates to pursue. You can also use Machine Learning or Deep Learning approaches if you have the trained data available to you. It’s very hard to have trustworthy data for how well a target or a drug target will perform. The results of these models and operations is a **prioritized gene list**.

The targets can then be reviewed by scientists + selected for experimental validation.

SOURCE: <https://www.youtube.com/watch?v=wDq_Sxjc5Fw>

Accelerating Drug Discovery with a Biomedical Knowledge Graph

Michael Ughetto, Graph Data Scientist, AstraZeneca (Croatia meetup)

The talk is about how in AstraZeneca created a knowledge graph that is consumed downstream by other data scientists. AstraZeneca has a portfolio focus on major diseases in areas including oncology, cardiovascular, gastrointestinal, infection, neuroscience, respiratory, and inflammation.

Drug discovery is a hard and expensive process. It can take up to 15 years, with investments of around $2 billion per drug.

![image-20250606-160119.png](/attachments/3008233473/3011739651.png)

Humans are a multiscale complex systems, however, disease can be traced to dysfunctional cells.

![image-20250606-160233.png](/attachments/3008233473/3011641361.png)

Cells can be modeled as protein to protein interaction networks. It is a complex communication graph. In the human disease network, you can see the downstream impact of disease across the body.

![image-20250606-160649.png](/attachments/3008233473/3011706889.png)

We have prior knowledge that (genes / proteins) are sometimes associated for known disease. The question of target identification is:

1. For a new disease, how do you figure out a good gene/protein to be a target.
2. For existing drugs that you know target a specific gene/protein, how do you figure out what disease it can treat?

To support this decision making process, you can use a recommendation systems like Facebook, Netflix, Spotify, or YouTube use.

To assemble a knowledge graph, you need to tie things into one harmonized view. There are a lot of different kinds of graph networks in biology, including:

1. Disease networks
2. Hierarchies of cell systems
3. Protein-protein interactions

They are integrating over 40 open data sources:

![image-20250606-162807.png](/attachments/3008233473/3011444746.png)

The biggest chunk of the graph includes papers from several sources, such as PubMed:

![image-20250606-162908.png](/attachments/3008233473/3011608583.png)![image-20250606-163049.png](/attachments/3008233473/3011805186.png)![image-20250606-163228.png](/attachments/3008233473/3011346442.png)

We are trying to solve all these use cases for ourselves, we have different levels of exploring the data found in the BIKG ecosystem:

1. Explore: Powered by elastic search, it is used to search for things by keywords
2. Traverse: Powered by SPARQL or Cypher structured queries to pattern match for specific things.
3. Analyze: More structured requests of data for analysis via scripts or for downstream AI / ML applications.

![image-20250606-165521.png](/attachments/3008233473/3011674130.png)

Example Use Case:

They come to use with experimental data, and would like us to use BIKG as a means to filter the data through an AI rank algorithm to derive genes ranked by target suitability.

![image-20250606-165732.png](/attachments/3008233473/3011674137.png)![image-20250606-165824.png](/attachments/3008233473/3011805194.png)![image-20250606-165929.png](/attachments/3008233473/3011379209.png)

We need to find a way to resolve how to triage the last 3000 candidates.

![image-20250606-170043.png](/attachments/3008233473/3011805200.png)

Picking a gene of choice is depending on things that machine learning engineers or data scientist cannot control such as physical constraints, prior evidence and research, commercial implications

![image-20250606-170806.png](/attachments/3008233473/3011379219.png)

The sweet point of selecting feasible targets to pursue further research on, includes genes with enough literature and sufficient context around targets that they are building on existing research efforts, and have reduced investment costs.

![image-20250606-171018.png](/attachments/3008233473/3011510283.png)

What do we want to know about these candidates?

- Clinical features known by biologists.
- Is it easy to drug by druggability?
- Are there pre-clinical experimental assays that could help?
- Does any literature support the entities being studied / researched?
- Then the BIKG takes into consideration:

  - Degrees of node
  - Betweenness
  - Page Rank
  - Clustering Coefficient
  - Graph Embeddings

All these features are placed in individual columns as a means to rank the profile of candidates across multiple dimensions.

![image-20250606-171437.png](/attachments/3008233473/3011575820.png)

With a set of criteria, the data scientists can direct attention to rank importance of candidates.

![image-20250606-171553.png](/attachments/3008233473/3011477512.png)

The predictions were then successfully validated in the lab

![image-20250606-171715.png](/attachments/3008233473/3011575827.png)![image-20250606-172006.png](/attachments/3008233473/3011739664.png)

Questions and answers around the presentation:

1. How do you manage the conversion between label property graphs and RDF and how do you know when to use one model or the other?

   1. It is all managed at the very end of the pipeline, they are generating the graph with on databricks with mappings to our upper level ontology to which they map everything. Once the mapping takes the databrick data and outputs a gigantic bucket of data, they have converters to many different formats. A single product is produced and then it is converted as needed.

      1. One for elastic search
      2. One for Stardog
      3. One for neo4j
      4. One for click house
2. Do you employ ontologies with the RDF graph for inferencing capabilities, and if not, do you think this would be valuable?

   1. No we don’t because we are just shipping it out to users at the moment and we are not really sure reasoning will have a lot of interest.
3. Regarding deployment of databricks, do you have some hybrid deployment mode between on premise and cloud or is everything cloud based?

   1. The build is cloud based on databricks with Azure, once the build is done, it is shipped on the blob store in Azure and from there we have pipelines fetching / converting things.
4. How often do you recalculate everything considering new papers incoming?

   1. We used to do it using the Microsoft academic graph, but we stopped doing it in 2021. We had a huge dump, and every release everyone was downloading everything.
   2. Now we developed our own API to do named entity recognition on papers and download them. We are discussing right now how to delta processing and not reprocess everything every time if possible, unless you have a change drastic change in the graph structure.
   3. We have decided to change the way we represent DNA in our graphs. Now we have DNA coding for a gene, the transcript (a piece of proteins), and the single resultant protein represented as a unified whole. Changing the way we represented this in our graph required us to reprocess everything from scratch.
5. You are using graph properties as features for a model. What are you using in that model from the graph?

   1. With machine learning applications in this example, we have used parettory ranking, so you don't have any learning, I think.
   2. We have other use cases where we have labels, so people know that some nodes (genes) are associated to the disease, so you can use a recall to favor them to be in the top 200 and then you look at the other associated genes.
   3. It could be XG Boost, where you throw features into it and try to use the non-associations as positive symbols.
   4. It could also be the incorporation of GNN
6. How are things validated in the business environment?

   1. They validated recommendations by using in-vitro experiments
7. How did you incorporate the structured and unstructured sources into one knowledge graph?

   1. Basically the NLP during the named entity recognition step where you are looking for known biological entities, you mappings telling you what type it is, and you just map it during the named entity recognition. The relationship between entities are a bit more trickier because usually we just care about co-occurrence, so they are appearing in the same abstract in the same sentence. In practice, we want to know how entities are related to each other explicitly and implicitly.
8. Can you talk about the NLP pipeline?

   1. We used to have a dump, but now we have a new NLP pipeline where we finished the development internally, we want to open-source it.
9. If I understand correctly, you have a heterogenous knowledge graph?

   1. The heterogenous aspect of the knowledge graph is not yet fully used or realized as a benefit. Overall, it is not yet being deployed in machine learning use cases yet.
10. Do you stream data from the elastic search to neo4j or something else?

    1. No, elastic search is a temporary solution. We would like to move to a more streamlined way of releasing things with deltas and such, when we have one graph release every 2 months, one big indexing elastic search, a dump, a projection meant for elastic search, and then we index.
11. How many people work in your team in this particular BIKG project?

    1. 14 people. We are trying to grow the team.

ADDITIONAL RESOURCES TO INVESTIGATE LATER:

1. <https://www.youtube.com/watch?v=i6mQR8IrLeI>
2. <https://www.youtube.com/watch?v=BRdd4BA2dtU>
3. <https://www.youtube.com/watch?v=KytRYBXgfZE>
4. <https://www.youtube.com/watch?v=BUwN08cfCok>
5. <https://www.youtube.com/watch?v=NKk4Wg9V5lU>
6. <https://www.youtube.com/watch?v=k-Z1XLO5O4A>
7. <https://www.youtube.com/watch?v=ADszHqJhr2Y>
8. <https://www.youtube.com/watch?v=ndnyNx9uGnE>

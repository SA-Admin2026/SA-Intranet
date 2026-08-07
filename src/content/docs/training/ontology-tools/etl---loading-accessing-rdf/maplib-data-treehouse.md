---
title: "maplib (Data Treehouse)"
confluence_id: 3217260545
source: "3217260545.html"
---
*Note: Initial research performed in December 2025 for Payzer as an alternative to tarql. For Payzer, tarql currently performs adequately, but it is not actively maintained and there is overhead that comes along with Java.*

**Background Resources**

- maplib GitHub repository: <https://github.com/DataTreehouse/maplib>
- maplib API documentation: <https://datatreehouse.github.io/maplib/maplib.html>
- Data Treehouse homepage: <https://www.data-treehouse.com/>
- maplib Masterclass (presented at Connected Data London 2025): <https://github.com/DataTreehouse/maplib-masterclass/tree/main>
- maplib: Interactive, Literal RDF Model Mapping for Industry (paper): <https://www.researchgate.net/publication/370190078_maplib_Interactive_literal_RDF_model_mapping_for_industry>
- Reasonable Ontology Templates (OTTR): <https://ottr.xyz>
- Helpful Jupyter Notebook tutorial converting CSV to RDF with maplib: <https://github.com/nemegrod/graph_RAG_structured/blob/main/csv2graph.ipynb>

**Potential Advantages**

- Speed: Written in rust but has python bindings (`pip install maplib`); claims to materialize triples faster than alternatives like SPARQL Anything and morph-kgc
- Integration with popular python data frame libraries (polars and pandas); easy to go from CSV-to-DataFrame-to-RDF
- Makes use of OTTR templates, which modularize triple patterns for reuse and composition
- Specifically intended for (but not limited to) use cases where quick feedback from SMEs and/or step-by-step documentation is a requirement; integrates well with Jupyter Notebooks

**Getting Started**

*Note: This is a very brief set of instructions for getting started with maplib. For more extensive tutorials and demos, see Background Resources above.*

**Step 1:** Install maplib.

```
pip install maplib
```

**Step 2:** Save some CSV data (sample data below).

```
name,pet_type,age
fido,dog,2
garfield,cat,3
```

**Step 3:** Create a new python script. Read the CSV into a data frame. (You can install pandas or polars for this step.)

```
import polars as pl

df = pl.read_csv("test.csv") # Path to the CSV data above
print(df)
```

If the data frame has been created correctly, you should get the following output:

```
shape: (2, 3)
┌──────────┬──────────┬─────┐
│ name     ┆ pet_type ┆ age │
│ ---      ┆ ---      ┆ --- │
│ str      ┆ str      ┆ i64 │
╞══════════╪══════════╪═════╡
│ fido     ┆ dog      ┆ 2   │
│ garfield ┆ cat      ┆ 3   │
└──────────┴──────────┴─────┘
```

**Step 4:** Normalize and expand the data as needed for RDF transformation.

```
df_exploded = df

RES_PREFIX = "http://example.org/resource#"
df_exploded = df_exploded.with_columns([
    (pl.lit(RES_PREFIX) + pl.col("name")).alias("pet_iri"),
    (pl.lit(RES_PREFIX) + pl.col("pet_type")).alias("pet_type_iri"),
])

print(df_exploded)
```

These lines “explode” the data frame by bringing in two new columns with IRIs. A namespace is defined and combined with strings to create IRIs. After adding these lines to your code, you should see a data frame with additional columns:

```
shape: (2, 5)
┌──────────┬──────────┬─────┬─────────────────────────────────┬─────────────────────────────────┐
│ name     ┆ pet_type ┆ age ┆ pet_iri                         ┆ pet_type_iri                    │
│ ---      ┆ ---      ┆ --- ┆ ---                             ┆ ---                             │
│ str      ┆ str      ┆ i64 ┆ str                             ┆ str                             │
╞══════════╪══════════╪═════╪═════════════════════════════════╪═════════════════════════════════╡
│ fido     ┆ dog      ┆ 2   ┆ http://example.org/resource#fi… ┆ http://example.org/resource#do… │
│ garfield ┆ cat      ┆ 3   ┆ http://example.org/resource#ga… ┆ http://example.org/resource#ca… │
└──────────┴──────────┴─────┴─────────────────────────────────┴─────────────────────────────────┘
```

**Step 5:** Create a `.ottr` template file for mapping the data frame to RDF.

```
@prefix ont: <http://example.org/ontology#> .
@prefix res: <http://example.org/resource#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

ont:PetTemplate [
    ! <http://ns.ottr.xyz/0.4/IRI> ?pet_iri,
    ! <http://www.w3.org/2001/XMLSchema#string> ?name,
    <http://ns.ottr.xyz/0.4/IRI> ?pet_type_iri,
    ! <http://www.w3.org/2001/XMLSchema#integer> ?age,
    ! <http://www.w3.org/2001/XMLSchema#string> ?pet_type

  ] :: {
    ottr:Triple(?pet_iri, a, ?pet_type_iri),
    ottr:Triple(?pet_iri, rdfs:label, ?name)
    ottr:Triple(?pet_type_iri, rdfs:label, ?pet_type),
    ottr:Triple(?pet_iri, ont:hasAge, ?age)
  } .
```

The portion in square brackets `[ ]`defines the “parameters” of the template--essentially the columns and datatypes of the data incoming from the data frame. (`!` indicates mandatory fields, `?` indicates optional, and `++` can be used for cells that contain multiple values--see more on this in the documentation.) The part in curly brackets `{ }` is where you define the triple patterns that you would like to see in RDF. This is analogous to the `CONSTRUCT` portion of a SPARQL query.

**Step 6:** Read in the OTTR template, map to RDF, and output the triples.

```
with open("test.ottr", 'r', encoding='utf-8') as f:

    ottr_template = f.read()

    model = Model()
    model.add_template(ottr_template)
    model.map("http://example.org/ontology#PetTemplate", df_exploded)

    output_path = "triples.ttl"
    model.write(output_path, format="turtle")
```

After adding these lines to your script, you should get a new file `triples.ttl` with the following content:

```
<http://example.org/resource#cat> <http://www.w3.org/2000/01/rdf-schema#label> "cat" .
<http://example.org/resource#dog> <http://www.w3.org/2000/01/rdf-schema#label> "dog" .
<http://example.org/resource#fido> <http://www.w3.org/2000/01/rdf-schema#label> "fido" .
<http://example.org/resource#garfield> <http://www.w3.org/2000/01/rdf-schema#label> "garfield" .
<http://example.org/resource#fido> <http://example.org/ontology#hasAge> 2 .
<http://example.org/resource#garfield> <http://example.org/ontology#hasAge> 3 .
<http://example.org/resource#fido> a <http://example.org/resource#dog> .
<http://example.org/resource#garfield> a <http://example.org/resource#cat> .
```

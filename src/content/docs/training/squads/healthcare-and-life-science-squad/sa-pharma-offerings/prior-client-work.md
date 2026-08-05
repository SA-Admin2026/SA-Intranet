---
title: "Prior client work"
confluence_id: 2992537601
source: "Prior-client-work_2992537601.html"
---

Existing SA work in Amgen uses the following public resources:

- GENCODE database - <https://www.gencodegenes.org/> - FTP with database releases (latest release directory): <https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_human/release_47/> - review file we parse: gencode.v47.chr\_patch\_hapl\_scaff.annotation.gff3.gz
- RefSeq database - <https://www.ncbi.nlm.nih.gov/refseq/about/> - FTP with database releases (latest release directory): <https://ftp.ncbi.nlm.nih.gov/genomes/refseq/vertebrate_mammalian/Homo_sapiens/annotation_releases/110/GCF_000001405.40_GRCh38.p14/> - review file we parse: GCF\_000001405.40\_GRCh38.p14\_genomic.gff.gz
- Ensembl REST API that returns similarity scores between genes of different species: <https://rest.ensembl.org/documentation/info/homology_species_gene_id> - for example a call <https://rest.ensembl.org/homology/id/human/ENSG00000157764?target_species=mouse;content-type=application/json> - perc\_pos and perc\_id are the scores.

RefSeq – NCBI IDs (formerly Entrez IDs)

Ensembl – Ensembl IDs

Gencode – Ensembl IDs (manually curated version of Ensemble for human and mouse)

:GeneModel – collection of info about gene from a specific release vs :Gene - higher level concept representing the ideal Genes.

:GeneModel :models :Gene

GeneModel IRIs: database + release version + gene ID

Gene IRIs: NCBI Gene DB has IRIs, we use them for Gene instances, but the class not limited to them

Client had NCBI IDs – OMIM IDs associations, Monarch will have that too, maybe NCBI Gene DB does too

<https://identifiers.org/> - resource for bio PURLs

There are options for IRIs on the same thing 🙁 E.g. Human species:

<https://identifiers.org/taxonomy:9606>

<http://purl.obolibrary.org/obo/NCBITaxon_9606> (We used this)

Cross DB and cross species relationships between gene models:

HumanGeneModelRefseqGeneA – 99 - HumanGeneModelGencodeGeneA – 95 – MouseGeneModelGencodeGeneA – 98 – MouseGeneModelRefseqGeneA - at the level of latest release

Relationships between gene models from consecutive releases of the same DB:

GeneModelGeneAlatest – GeneModelGeneAlatest-1 – GeneModelGeneAlatest-2 - ...

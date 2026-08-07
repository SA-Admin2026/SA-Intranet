---
title: "Natural Language Processing"
confluence_id: 23953416
source: "Natural-Language-Processing_23953416.html"
---
This is a collection of technologies and capabilities that are important for NLP.  Most of this is baby stuff for experts in the field, but we are just getting started. This is inspired by the slow, manual semantic mappings I'm doing from Morgan Stanley categories to FIBO-V terms. First some examples of the challenge of disambiguation:

“Fund”

- this often means money, as in a funds processing account, or to fund a loan
- a very different meaning is a fund that is a group of investments, e.g. a mutual fund

 So ‘funds processing account’ is not at all related to ‘fund accounting’ in the sense of doing accounting for a mutual fund.

 “Account”

- an agreement with a balance (with account holder and account servicer)
- an account like a general ledger account (tracking things), closely related to an accountant to keeps the accounts
- mixed in with general English usage: ‘to account for’ which has nothing to do with either of the first two meanings

## Desired capabilities:

1. Stemming
2. Camel case parsing, e.g. don't return EscrowAgent when searching for 'wage'
3. Disambiguation:
   1. when searching for terms realted to processing funds, do not return mutual fund, very different meaning.
   2. when searching for managing client accounts, don't return a sentence saying 'this accounts for..."
4. Semantic similarity:
   1. GIVEN:
      1. a corpus of textual items which could be any combination of words, phrases, sentences, paragraphs or pages of text
      2. a search string (which could be any textual item)
   2. RETURN: a set of textual items from the corpus that are most semantically similar to the search string. Each should have a weighting from 0 to 1 of degree of similarity.

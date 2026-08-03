---
title: "Comments and Feedback"
confluence_id: 60456961
source: Comments-and-Feedback_60456961.html
---

# Comments and Feedback

1. The definition of FinancialInstrumentTrade uses the property tradeOf, but that property is not on the class Trade.
2. AccountPosition defined as: "The balance of a particular asset within a given account, with its history"
   1. According to Investopedia, a position is "the amount of a security, commodity or currency that is owned ... The practice of restating the value of a position based on its current value is called mark-to-market." So a position would be say, "12 shares of APL", but there is currently no property for indicating the count of such things. All there is is Monetary.   But Monetary is about the value of the position, which changes all the time, where as the position itself does not.
   2. In what sense is AccountPosition an Agreement?  What are the two obligations associated with the position: "12 shares of APL"? Not sure what class it belongs in. It seems like an informational beast, a record of what is owned. FIBO defines a class for Record which means: "a memorialization and objective evidence of activities performed, events occurred, results achieved, or statements made, regardless of its characteristics, media, physical form, or the manner in which it is recorded or stored" from <http://www.businessdictionary.com/definition/record.html>.  
      Or it could be analogous to a magnitude like 12 inches.  The decimal is 12 and the unit is the financial instrument.  This may not work, but it seems analogous.
   3. What does it mean for an AccountPosition to include its history? What triples would represent the history? I don't see any properties for that - perhaps this could be a TemporalRelation?
   4. The text definition says it is a Balance, should it be a subclass of Balance? Either way, align comment with the OWL. I don't see it as a Balance. I think that the balance is an amount of money, and only for a cash position like 1000 units of USD would the two be close to equivalent, but only when there is not cross-currency exchange rate to worry about.  FIBO has no class for Balance and nothing that I coujld find for evaluation of a position, i.e. marking to market.
3. gist:Obligation is defined in terms of itself.  
    ![](../attachments/60456961/60456985.png)
4. the class, ClientAccount, is used to define AccountPosition, but is not itself defined, well it is not defined in the .owl file I see, but it is defined in the file: gistFinance1.1\_Broadridge.vsd.
5. The definition for the class Custodian will infer every legal organization that owns anything at all (which is virtually all of them) into class. It is inconsistent with the text definition. This could be fixed by using a necessary condition, or adding further conditions to target only Custodian organizations
6. The class 'Fungible" leads to awkward things like 'cash-equivalent is a fungible'. A more accurate name with be FungabiltyType

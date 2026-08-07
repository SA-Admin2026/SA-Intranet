---
title: "FinServices Ontology Discussion"
confluence_id: 145096705
source: "FinServices-Ontology-Discussion_145096705.html"
---
## Stock and Shares

Here is an e6 model of stock, share, and related classes.

![](/attachments/145096705/145195009.png)

### Background

Following standard double-entry accounting practices, a company has **assets**, **liabilities**, and **owner's equity**, always balanced according to the accounting equation, assets = liabilities + equity. To put it another way, equity is what's left over after all assets are liquidated and used to pay off all liabilities. Equity is the balance of a company's value after liquidation.

**Stock in trade** is the goods a company holds in the hopes of selling them at a profit or generating a profit from their use. Examples include:

- livestock: living animals
- shelf stock: finished products held in a retail store for sale, or in a warehouse for eventual sale (presumably on shelves)
- rolling stock: wheeled vehicles owned by a company and used for transporting goods

A significant portion of a company's assets is often tied up in its stock in trade. Although stock in trade are assets, *the abstract term **stock** has been generalized from these examples to mean equity, not assets*.

A **stock corporation** may sell fractional interests in its equity. These fractional interests are called **shares** of the company's **common stock**. An owner of a share of common stock is effectively an owner of a fraction of the company itself. This ownership confers certain rights, usually including the right to vote for directors of the corporation and the right to receive payments of a portion of a company's profits, called **dividends**.

**Preferred stock** is really a debt instrument with the potential for conversion to common stock. The owner of a share of preferred stock is given the right to receive payments, usually at a fixed rate relative to the share's price. Normally, a share of preferred stock does not confer ownership rights, but preferred stock can be converted to common stock under a number of conditions, typically including default or insolvency, or sale of the corporation. The stock is called preferred because, in the event of one of these actions, preferred stock owners are paid off before common stock owners.

A stock corporation may issue common and/or preferred shares in a number of classes, where the exact terms of ownership, including preference, are spelled out in each class.

Shares go through a lifecycle, as follows:

1. **authorized :** A stock corporation's **board of directors** **authorizes** a number of shares to be issued.
2. **issued :** The corporation **issues** the shares, which means it makes them available for sale.
3. **outstanding :** Shares are purchased, at which point they become outstanding.
4. **treasury :** A corporation may **repurchase** its own shares, after which they are no longer outstanding (though they remain issued). Repurchased shares are called treasury stock.
5. A corporation may **retire** any or all shares that are not outstanding, after which those shares cease to exist. Such shares would be either treasury stock or shares issued but never purchased.

The phrase **issued and outstanding** is commonly used and is necessary since, technically, treasury stock is issued but no longer outstanding.

One share of stock is one in the numerator of a fraction of ownership, where the denominator is the number of shares outstanding. By authorizing additional shares to be issued, a board of directors creates a potential for **dilution**. When the additional shares are issued and purchased, the denominator of the fraction–the number of shares outstanding--increases, thereby reducing the fraction of ownership represented by an already-issued share. A board of directors can reverse dilution by repurchasing shares. A board can reduce the potential for dilution by reducing the number of authorized shares; however, it cannot reduce the number of authorized shares below the number of issued shares, so it may have to retire non-outstanding shares before reducing the number authorized.

A **stock certificate** is a declaration that a given SocialBeing is the owner of a given number of shares of the stock identified by the stock certificate. The term comes from the paper days when a stock certificate was a physical piece of paper bearing marks of authenticity such as the corporation's seal. In this ontology, gist:OwnedSharesOfStock carries the information normally contained on a stock certificate.

Shares of stock are **financial instruments**, because they have value and can be bought and sold. Their price is determined by agreement between buyer and seller, but that price is influenced by many factors, including the financial state of the company but also its future prospects for growth and profit.

### Rationale for the Ontology

The terms "share" and "stock" are sometimes used interchangeably, and sometimes used specially, so that one cannot entirely depend on their use in English in order to fix a single meaning to the terms. For example, "share price" and "stock price" are considered synonyms. In this ontology, the following definitions have been chosen:

- **stock :** a form of conditional or immediate ownership in the equity of a stock corporation
- **share :** a fractional interest in some stock of a stock corporation

Each individual stock is defined by its terms of ownership and preference. Each individual share is one fraction of a designated stock.

A **stock symbol** identifies a particular class of stock of a corporation. The most frequent use of a stock symbol is in connection with a price of a share of that stock, so that "stock price" becomes synonymous with the more correct "share price". The ontology class PricePerShare represents share price.

It would be rare to have individuals of the class Share.

The StockCategory class shows only two individual labels, common and preferred. These should be thought of as the labels of general categories of classes of common and preferred stock. In fact, as discussed, a particular company could issue several classes of common and preferred stock.

It is frequently the case that a company's common stock symbol is used to represent the company itself. For example, an equity analyst might talk about corporate actions taken by MSFT, where "MSFT" is the common stock symbol for Microsoft Corporation. In that context, "MSFT" represents the corporation, not the common stock.

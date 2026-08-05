---
title: "Stripe Integration Into DCA"
confluence_id: 1029898245
source: Stripe-Integration-Into-DCA_1029898245.html
---

# Stripe Integration Into DCA

Stripe supports a variety of use cases for payment processing.

Their **Checkout** API is a pre-built, Stripe hosted checkout page. Probably not what we want.

Here are two pages likely of interest to us:

## Save Payment Info During First Payment

Following this guide: <https://stripe.com/docs/payments/save-during-payment>

## Set Up Future Payments

This is described here: <https://stripe.com/docs/payments/save-and-reuse>

This uses the Setup Intents API.

## Reference

[Attach a PaymentMethod to a Customer](https://stripe.com/docs/api/payment_methods/attach)

[React Stripe.js reference](https://stripe.com/docs/stripe-js/react)

# Stripe Objects

### Customer

- API Documentation: <https://stripe.com/docs/api/customers>
- Object Description: <https://stripe.com/docs/api/customers/object>
- e.g.: `cus_HS89zace3fMUP2`

We aren’t really interested in Stripe Customer objects but they are required for saving and reusing a PaymentMethod. Luckily, all customer information is optional so you can create essentially blank customers. As long as we grab the PaymentMethod ID when it is created we may be able to get away without saving the Customer ID.

### PaymentMethod

- API Documentation: [https://stripe.com/docs/api/payment\_methods/](https://stripe.com/docs/api/payment_methods/object)
- Object Description: <https://stripe.com/docs/api/payment_methods/object>
- Guide: <https://stripe.com/docs/payments/payment-methods>
- e.g.: `pm_1GtDtEIqzV6JT3VHQsTOTepn`

While this is what we really want, it is mostly a side effect of creating a PaymentIntent or an SetupIntent.

### PaymentIntent

- API Documentation: [https://stripe.com/docs/api/payment\_intents/](https://stripe.com/docs/api/payment_methods/object)
- Object Description: <https://stripe.com/docs/api/payment_intents/object>
- Guide: <https://stripe.com/docs/payments/payment-intents>
- e.g.: `pi_1GkE5DIqzV6JT3VHxof06LSk`

Used for creating a payment transaction. It can also save the PaymentMethod for future use if the correct options are set.

### SetupIntent

- API Documentation: [https://stripe.com/docs/api/setup\_intents/](https://stripe.com/docs/api/payment_methods/object)
- Object Description: [https://stripe.com/docs/api/setup\_intents/object](https://stripe.com/docs/api/payment_intents/object)
- Guide: <https://stripe.com/docs/payments/setup-intents>
- e.g.: `seti_1H0HoQ2eZvKYlo2C3lQceIuU`

Setting up and saving a customer's payment credentials for future payments.

# API keys

After creating an account with [Stripe](https://stripe.com/), you can go to the [Dashboard](https://dashboard.stripe.com/dashboard) to access the [Developer API keys](https://dashboard.stripe.com/apikeys).

![](/internal-systems/attachments/1029898245/1030094856.png)

Unless you are ready to take live payments, make sure that **Viewing test data** is on.

These keys are used to initialize a `stripe` instance using [Stripe's backend library](https://www.npmjs.com/package/stripe) and [Stripe’s frontend library](https://www.npmjs.com/package/@stripe/stripe-js).

The **Publishable key** is what is stored on the **Frontend**.

The **Secret key** is what is stored on the **Backend**.

# Creating a Stripe Customer

Stripe has information of each **Customer** stored in their own database. We are able to access that information with the **Customer ID** provided.

All of the following actions occur on the **Backend**:

1. Create a new **Customer** using `stripe.customers.create`

   1. ```
      const customer = await stripe.customers.create();
      ```
2. Store `customer.id` in the database on the user.

   1. ```
      ws.deltaTriples({
        add: [
          N3_DF.quad(
            userSubject,
            N3_DF.namedNode(
              'https://ontologies.semanticarts.com/dcao/stripeCustomerID'
            ),
            N3_DF.literal(
              customer.id, // Ex: "cus_HK1ZU9OqlSSy3d"
              namedNode('http://www.w3.org/2001/XMLSchema#string')
            ),
          )
        ]
      });
      ```
   2. As far as I can tell, `customer.id` is the *only string* we are required to store in the database on that user. With that and our server’s **Secret key**, we are able to access information stored on Stripe’s database like previously used credit cards, history of payments, address of card, etc.

# User Payments

This will explain the process in which somebody makes a purchase on the website.

1. **Frontend**: A user enters their billing details and credit card information into a Form provided by Stripe.

   1. At a minimum, the credit card information is all that is needed to process a payment. We can still require, for example, the user’s name, email address, address, city, zip code, etc.
2. **Frontend**: A request is sent to the backend with information on what the user is purchasing.
3. **Backend**: The request made by the frontend is used by the backend to determine the amount of the purchase.

   1. The frontend should not specify the price for security reasons, rather it should send instructions for the backend to generate the price.
4. **Backend**: A **PaymentIntent** is created with the type of currency and amount.

   1. ```
      const customerID = await getCustomerID(ws, userSubject);

      // `amount` should not be directly sent from the client
      const paymentIntent = await stripe.paymentIntents.create({
        amount, 
        currency: "usd",
        customer: customerID,
      });
      ```

      1. `customer.id` will be stored in the database on the user.
5. **Backend**: A unique client secret key is returned from the Payment Intents API call and is returned back to the client.

   1. ```
      res.send(paymentIntent.client_secret);
      ```
6. **Frontend**: The client makes a request to Stripe with the provided client secret key to submit the payment.

   1. ```
      stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: 'Jenny Rosen'
          }
        },
        setup_future_usage: 'off_session',
        callback,
      })
      ```

      1. `setup_future_usage: 'off_session'` allows us to charge the card without the need for the user to re-enter their credit card information.
      2. We do not need to send another request to the backend, rather we make requests to the Stripe API on the backend using the **Customer ID** to get **PaymentMethod** information.

# DCA Integration

```
/**
 * Get Stripe Customer ID from dcao:User, create one if not found
 * @param {Workspace} ws  Workspace instance
 * @param {NamedNode} userSubject  RDF/JS Subject URI of dcao:User
 */
async function getCustomerID(ws, userSubject) {
  const userSubjectNQ = RDF.convert('application/n-quads', {
    data: userSubject,
    format: 'rdfjs',
    type: 'term',
  })
  
  const customerStatement = await ws.executeSparql({
    query: `
      CONSTRUCT {
        ?userSubject dcao:stripeCustomerID ?customerID .
      } WHERE {
        ?userSubject rdf:type dcao:User ;
          dcao:stripeCustomerID ?customerID .
        VALUES ?userSubject { ${userSubjectNQ} }
      }`,
    queryType: 'CONSTRUCT',
    accept: 'rdfjs'
  })[0];
  
  // If customerStatement not found, create new Customer ID
  if (customerStatement === undefined) {
    const customer = stripe.customers.create();
    await ws.deltaTriples({
      add: [
        N3_DF.quad(
          userSubject,
          N3_DF.namedNode(
            'https://ontologies.semanticarts.com/dcao/stripeCustomerID'
          ),
          N3_DF.literal(
            customer.id, // Ex: "cus_HK1ZU9OqlSSy3d"
            namedNode('http://www.w3.org/2001/XMLSchema#string')
          ),
        )
      ]
    });
    return customer.id;
  } 
  // Return Customer ID
  else return customerStatement.object.value;
}
```

```
async function createPaymentIntent(ws, customerID) {
  const customerID = await getCustomerID(ws, userSubject);
  
}
```

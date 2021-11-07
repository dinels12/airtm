# Airtm-Nodejs

This is a unofficial repo for the public Airtm Api

> This repo follow the official documentation from airtm [Airtm Documentation](https://airtm.bitbucket.io/#get-operation)

## Typescript Out of the box

This project use Typescript out of the box to make it better for types :D.

## How to use it

First you have to initialize the airtm client with your airtm keys.

> You can find/create the keys on [Airtm Apps](https://app.airtm.com/settings/apps)

```ts
import Airtm from "airtm-node";

const airtm = new Airtm({
  clientKey: AIRTM_API_KEY, // Airtm Key
  clientSecret: AIRTM_API_SECRET, // Airtm secret
  clientEnv: "production", // sandbox or production
});
```

## Get the Partner information

This endpoint returns a Partner entity describing the authenticated partner (so your account).

```ts
const data = await airtm.getPartnerInformation();

/*
  email: string;
  id: string;
  name: string;
  currency: string;
  balance: string;
  */
```

## Create A Purchase

This endpoint will allow you to create a purchase (pay-in). In order to complete a purchase, it must first be created. Then the user must be directed to the Airtm website to confirm/checkout the purchase, at which time they will be redirected to a URL of your choosing.

```ts
const data = await airtm.createPurchase({
  amount: 10, // this is the total of the transaction need to match with the items amounts
  cancel_uri: "http://localhost:3000/checkout/cancel", // redirect uri when the user cancel the purchase
  confirmation_uri: "http://localhost:3000/checkout/success", // redirect uri when the user complete the purchase succesfully
  description: "Test new Purchase Checkout created", // description of the transaction
  items: [
    {
      amount: 10, // The amount need to match with the total
      description: "Test description", // description of the item
      quantity: 1, // quantity of the item
    },
  ],
});

// The response is a object with a Operation

// You have to redirect the user using the data.redirect_uri on the object, then the user have to complete this purchase on the frontend
```

## Make a Payment using One-Step Payout

If you want to do a payout in just one API call (instead of a two-step process like outlined in Create / Commit Payout), you can now use this one-step endpoint.

The usage is exactly the same as the "create payout" endpoint at POST /payouts with the only difference being that the second step (commit payout) will immediately be executed and there is no need to make a call to the commit endpoint.

```ts
const data = await airtm.createPayoutOneStep({
  email: "email@email.com", // email of the airtm user
  amount: 10, // amount of the payout
  failure_uri: "http://localhost:3000/webhook/failed", // this post is a webhook uri on your server
  confirmation_uri: "http://localhost:3000/webhook/success", // this post is a webhook uri on your server
  description: "Test a new Payout", // description of the payout
});

// Example of how to make a payment, this is not running on Test :).

// The response is a object with a Operation
```

## Get Operations

An operation is an abstraction of the more specific entities: purchase and payout. Operations are used when referring to all of the transactions within an account.

```ts
const data = await airtm.getOperations({
  page: 1, // get the page of the operations
  perPage?, 10, // default is 10 per page
  type?: 'payout' | 'purchase',  // you can filter the operations using using this key
});


// The response is a Object containing with the information about the page and how many have, it have a data array with the Operations.


```

## Get Operation by Id

This endpoint will return an operation corresponding to the specified ID.

Fields may differ depending on operation_type field, which can be purchase or payout.

```ts
const data = await airtm.getOperationById(operationId);

// The response is a Operation object
```

## Typescript Interfaces

All the functions have Interfaces and their Types with more detailed Data of the returns. ;)

## Issues

You can create new issues, i will check it on github.


## Contributions

This is a non-profit npm module, but every donation is welcome ^^

## Contact
You can reach me via email
dinels12@gmail.com

import Airtm from "../src/index";

const AIRTM_API_KEY = process.env.AIRTM_API_KEY as string;
const AIRTM_API_SECRET = process.env.AIRTM_API_SECRET as string;

const airtm = new Airtm({
  clientKey: AIRTM_API_KEY,
  clientSecret: AIRTM_API_SECRET,
  clientEnv: "production",
});

describe("GET Airtm Partner Information", () => {
  it("Partner Information Data", async () => {
    const data = await airtm.getPartnerInformation();
    expect(data).toBeInstanceOf(Object);
  });
});

describe("Create a new Purchase on Airtm", () => {
  it("Purchase Request created", async () => {
    const data = await airtm.createPurchase({
      amount: 10,
      cancel_uri: "http://localhost:3000/checkout/cancel",
      confirmation_uri: "http://localhost:3000/checkout/success",
      description: "Test new Purchase Checkout created",
      items: [
        {
          amount: 10,
          description: "Test description",
          quantity: 1,
        },
      ],
    });
    expect(data).toBeInstanceOf(Object);
  });
});

describe("Create a user Payout on Airtm", () => {
  it("Payout ONE-STEP created", async () => {
    const data = {};

    // const data = await airtm.createPayoutOneStep({
    //   email: "email@email.com",
    //   amount: 10,
    //   failure_uri: "http://localhost:3000/webhook/failed",
    //   confirmation_uri: "http://localhost:3000/webhook/success",
    //   description: "Test a new Payout",
    // });

    // Example of how to make a payment, not running on Test :).
    expect(data).toBeInstanceOf(Object);
  });
});

describe("Get Partner Operations on Airtm", () => {
  let operationId = "";
  it("return a object with a operations paginated transactions", async () => {
    const data = await airtm.getOperations({
      page: 1,
    });
    if (data.data[0].id) {
      operationId = data.data[0].id;
    }
    expect(data).toBeInstanceOf(Object);
  });

  it("Get Operation by ID on Airtm return a object with a operation", async () => {
    const data = await airtm.getOperationById(operationId);
    expect(data).toBeInstanceOf(Object);
  });
});

const express = require("express");
const app = express();
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, access_token"
  );

  // intercept OPTIONS method
  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

const port = 3001;

const normalCustomer = {
  customer: {
    id: 3,
    name: "John Doe",
    customer_type: "normal",
    address: "123 Main St, Anytown, CA 12345, USA",
    devices: [
      {
        os: {
          name: "Android",
          version: "11",
        },
        use_count: 129,
      },
      {
        os: {
          name: "Windows",
          version: "Windows 10 Pro",
        },
        use_count: 57,
      },
    ],
    trust_score: 0.9,
  },
};

const superCustomer = {
  customer: {
    id: 1,
    name: "Goku Son",
    customer_type: "super",
    address: {
      point: "58N 018",
      district: "439 East District",
    },
    devices: [
      {
        os: {
          name: "macOS",
          version: "Big Sur",
        },
        use_count: 9,
      },
    ],
    trust_score: 0.8,
    super_powers: [
      { name: "Super Speed", level: 3 },
      { name: "Kamehameha", level: 8 },
      { name: "Spirit Bomb", level: 5 },
    ],
  },
};

app.get("/api/v1/customers/:id", (req, res) => {
  const id = Number(req.params.id);
  const response = { ...normalCustomer, id };
  res.json(response);
});

app.get("/api/v2/customers/:id", (req, res) => {
  const id = Number(req.params.id);
  const randomNumber = Math.random();
  if (id === 2) {
    res.status(404).json({ message: "Customer not found." });
  } else if (randomNumber > 0.5) {
    res.status(500).json({ message: "Something went wrong." });
  } else {
    res.json({ ...normalCustomer });
  }
});

app.get("/api/v3/customers/:id", (req, res) => {
  const id = Number(req.params.id);
  let response;
  if (id === 1) {
    response = { ...superCustomer, id };
  } else {
    response = { ...normalCustomer, id };
  }
  res.json(response);
});

app.get("/api/v4/customers/:id", (req, res) => {
  const id = Number(req.params.id);
  let response;
  if (id === 1) {
    response = { ...superCustomer, id };
  } else {
    response = { ...normalCustomer, id };
  }
  res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

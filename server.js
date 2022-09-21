const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./database");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;
//process.env.PORT ||
db.connect();

const ProductRouter = require("./products/products.routes");
const AchatRouter = require("./Achats/achat.routes");
const UserRouter = require("./user/user.routes");
app.use("/products", ProductRouter);
app.use("/achats", AchatRouter);
app.use("/users", UserRouter);
app.all("*", (req, res) => {
  res.status(404);
  res.send({ message: "Path not found" });
});

app.listen(port, () => {
  console.log(`Port running on port ${port}`);
});

const mongoose = require("mongoose");
const User = require("../user/user.model");
const ProductModel = require("../products/products.model");

const AchatSchema = new mongoose.Schema({
  client: { type: mongoose.Types.ObjectId, ref: "User" },
  date: {
    type: Date,
    default: Date.now,
  },
  adress: String,
  billType: {
    type: String,
    enums: ["CCP", "Cash", "Card"],
    required: true,
  },
  products: [
    {
      product: { type: mongoose.Types.ObjectId, ref: "Product" },
      quantity: String,
      uniPrice: String,
    },
  ],

  totalPrice: Number,
});

const Achat = mongoose.model("Achat", AchatSchema);

module.exports = Achat;

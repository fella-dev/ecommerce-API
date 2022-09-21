const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: String,
  nom: String,
  Size: {
    type: [String],
  },
  Description: String,
  Prix: Number,
  Status: {
    type: String,
    default: "In Stock",
  },
  note: Number,
  numReviews: Number,
  colors: {
    type: [String],
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;

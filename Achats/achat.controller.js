const Achat = require("./achat.model");

function createAchat(achatInfo) {
  const newAch = new Achat(achatInfo);
  return newAch.save();
}

function AccessAll() {
  return Achat.find().populate("client").populate("products.product");
}

module.exports = { createAchat, AccessAll };

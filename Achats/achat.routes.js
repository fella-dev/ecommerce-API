const express = require("express");
const { createAchat, AccessAll } = require("./achat.controller");

const router = express.Router();
router.post("/", async (req, res) => {
  const info = req.body;
  const achat = await createAchat(info);
  res.send(achat);
  console.log(achat);
});

router.get("/", async (req, res) => {
  const achat = await AccessAll();
  res.send(achat);
});
module.exports = router;

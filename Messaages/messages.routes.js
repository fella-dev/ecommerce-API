const express = require("express");
const { getAllMessages, addMessage } = require("./messages.controller");

const router = express.Router();

router.get("/", (req, res) => {
  getAllMessages().then((data) => {
    res.send(data);
  });
});
router.post("/", (req, res) => {
  const msgInfo = req.body;

  addMessage(msgInfo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send({ message: "erreur envoie" });
    });
});

module.exports = router;

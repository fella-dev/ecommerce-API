const express = require("express");
const {
  CreateNewUser,
  SignWithEmail,
  getAllUsers,
  getUserById,
  updateUserInfo,
} = require("./user.controller");
const { RequireAuth } = require("./user.service");

const router = express.Router();
router.patch("/:userId", async (req, res) => {
  const { userId } = req.params;
  const newUser = req.body;
  try {
    const user = await updateUserInfo(userId, newUser);
    if (!user) throw new Error();
    res.send(user);
  } catch {
    res.status(404);
    res.send({ message: "user not found" });
  }
});

router.get("/me", RequireAuth, async (req, res) => {
  const { userId } = req.body;
  console.log("id" + userId);
  try {
    const user = await getUserById(userId);

    res.send(user);
  } catch {
    res.status(403);
    res.send({ message: "error" });
  }
});

router.get("/", (req, res) => {
  getAllUsers().then((data) => {
    res.send(data);
  });
});

router.post("/register", (req, res) => {
  const userInfo = req.body;
  CreateNewUser(userInfo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send({ message: "erreur ajout utilisateur" });
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  SignWithEmail(email, password)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send({ message: "Error login" });
      console.log(err);
    });
});
module.exports = router;

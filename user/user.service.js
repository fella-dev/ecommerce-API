const User = require("./user.model");
const { decodeAccessToken } = require("./user.controller");

function CheckTokenFromHeaders(req, res) {
  const auth = req.header("Authorization");
  if (!auth) {
    res.status(401);
    res.send({ message: "you must provide access token" });
  }
  const authList = auth.split(" ");
  const token = authList[1];
  console.log(token);
  let userId;
  try {
    userId = decodeAccessToken(token);
    console.log(userId);
  } catch {
    res.status(403);
    res.send({ message: "token incorrect" });
  }
  req.body.userId = userId;
}

function RequireAuth(req, res, next) {
  CheckTokenFromHeaders(req, res);
  next();
}
module.exports = { RequireAuth };

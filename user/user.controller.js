const User = require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function CreateNewUser(userInfo) {
  const hashedPwd = bcrypt.hashSync(userInfo.password);
  userInfo.password = hashedPwd;
  const newuser = new User(userInfo);
  return newuser.save();
}

function getAllUsers() {
  return User.find();
}
function getUserById(userId) {
  return User.findById(userId).then((data) => {
    // if (!data) throw new Error();
    return data;
  });
}
function SignWithEmail(email, password) {
  return User.findOne({ email: email }).then((usr) => {
    if (!usr) {
      throw new Error();
    }
    const PwdEqual = bcrypt.compareSync(password, usr.password);
    if (PwdEqual) {
      return generateAccessToken(usr.id);
    } else {
      throw new Error();
    }
  });
}
function generateAccessToken(userId) {
  const token = jwt.sign(userId, process.env.TOKEN_SECRET);
  return { token };
}
function decodeAccessToken(token) {
  return jwt.verify(token, process.env.TOKEN_SECRET);
}
function updateUserInfo(userId, newUser) {
  return User.findByIdAndUpdate(userId, newUser, { new: true });
}

module.exports = {
  CreateNewUser,
  SignWithEmail,
  getAllUsers,
  getUserById,
  decodeAccessToken,
  updateUserInfo,
};

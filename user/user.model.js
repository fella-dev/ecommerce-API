const mongoose = require("mongoose");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    validate: (e) => emailRegex.test(e),
  },
  password: String,
  role: {
    type: String,
    default: "client",
    enums: ["admin", "user"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", UserSchema);

module.exports = User;

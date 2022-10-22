const mongoose = require("mongoose");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const MessageSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,

    required: true,
    validate: (e) => emailRegex.test(e),
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;

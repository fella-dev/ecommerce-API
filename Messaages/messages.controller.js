const Message = require("./messages.model");

function getAllMessages() {
  return Message.find();
}

function addMessage(msgInfo) {
  const newMsg = new Message(msgInfo);
  return newMsg.save();
}

module.exports = { getAllMessages, addMessage };

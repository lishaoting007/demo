const mongoose = require("mongoose");
var book = new mongoose.Schema({
    title: String,
    author: String
  });

  module.exports = mongoose.model("bookModel",book);
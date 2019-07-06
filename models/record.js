const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//need to create a model for the user
//then link record to a user

const recordSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: String,
  link: String
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;

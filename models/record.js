const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  vegetableName: { type: String, required: true },
  vegetableAmount: { type: Number, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;

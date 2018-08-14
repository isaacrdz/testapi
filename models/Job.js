const mongoose = require("mongoose");
const company = require("./Company");
const Schema = mongoose.Schema;

//Create Schema
const JobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Job = mongoose.model("jobs", JobSchema);

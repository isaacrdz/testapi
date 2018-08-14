const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Schema

const CompanySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true,
    max: 40
  },
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "jobs"
    }
  ]
});

module.exports = Company = mongoose.model("company", CompanySchema);

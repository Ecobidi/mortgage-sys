let mongoose = require("mongoose");

let BorrowerSchema = mongoose.Schema({
  surname: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  middle_name: String,
  fullname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tax_id: String,
  phone: Number,
  address: String,
}, {timestamps: true});

module.exports = mongoose.model("borrower", BorrowerSchema);
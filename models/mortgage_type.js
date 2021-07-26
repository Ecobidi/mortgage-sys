const mongoose = require('mongoose')

const MortgageTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
})

module.exports = mongoose.model('mortgage_type', MortgageTypeSchema)
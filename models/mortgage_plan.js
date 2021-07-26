const mongoose = require('mongoose')

const MortgagePlanSchema = new mongoose.Schema({
  months: {
    type: Number,
    required: true,
  },
  interest: {
    type: Number,
    required: true,
  },
  penalty: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('mortgage_plan', MortgagePlanSchema)
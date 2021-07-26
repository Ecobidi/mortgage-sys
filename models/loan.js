const mongoose = require('mongoose')

const LoanSchema = new mongoose.Schema({
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'borrower',
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mortgage_plan',
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mortgage_type'
  },
  borrower_name: String,
  amount: {
    type: Number,
    required: true,
  },
  date_released: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['awaiting approval', 'released', 'approved', 'denied']
  },
  purpose: {
    type: String,
    required: true,
  }
}, {timestamps: true})

module.exports = mongoose.model('loan', LoanSchema)
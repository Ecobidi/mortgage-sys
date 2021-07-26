const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'borrower',
  },
  borrower_name: {
    type: String,
  },
  loan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'loan'
  },
  penalty: Number,
  amount: {
    type: Number,
    required: true,
  },
  date_of_payment: {
    type: Date,
    default: Date.now
  },
}, {timestamps: true,})

module.exports = mongoose.model('payment', PaymentSchema)
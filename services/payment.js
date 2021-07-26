const MortgagePaymentModel = require('../models/payment')

class PaymentService {
  static async findAll() {
    return MortgagePaymentModel.find({})
  }

  static async findById(id) {
    return MortgagePaymentModel.findById(id)
  }

  static async findByBorrowerName(name) {
    return MortgagePaymentModel.find({borrower_name: new RegExp(name, 'ig')})
  }

  static async save(dao) {
    return MortgagePaymentModel.create(dao)
  }

  static async removeOne(id) {
    return MortgagePaymentModel.findByIdAndRemove(id)
  }

}

module.exports = PaymentService
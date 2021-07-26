const LoanModel = require('../models/loan')

class LoanService {
  static async findAll() {
    return LoanModel.find({}).populate('borrower type plan').exec()
  }

  static async findById(id) {
    return LoanModel.findById(id).populate('borrower type plan').exec()
  }

  static async findByBorrowerName(name) {
    return LoanModel.find({borrower_name: new RegExp(name, 'ig')}).populate('borrower type plan').exec()
  }

  static async findByStatus(status) {
    return LoanModel.find({status}).populate('borrower type plan').exec()
  }

  static async save(dao) {
    return LoanModel.create(dao)
  }

  static async removeOne(id) {
    return LoanModel.findByIdAndRemove(id)
  }

}

module.exports = LoanService
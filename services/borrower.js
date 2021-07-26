const BorrowerModel = require('../models/borrower')

class BorrowerService {
  static async findAll() {
    return BorrowerModel.find({})
  }

  static async findById(borrower_id) {
    return BorrowerModel.findById(borrower_id)
  }

  static async findByName(name) {
    return BorrowerModel.find({fullname: new RegExp(name, 'ig')})
  }

  static async save(borrower_dao) {
    return BorrowerModel.create(borrower_dao)
  }

  static async removeOne(borrower_id) {
    return BorrowerModel.findByIdAndRemove(borrower_id)
  }

}

module.exports = BorrowerService
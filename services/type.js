const MortgageTypeModel = require('../models/mortgage_type')

class MortgageTypeService {
  static async findAll() {
    return MortgageTypeModel.find({})
  }

  static async findById(id) {
    return MortgageTypeModel.findById(id)
  }

  static async findByName(name) {
    return MortgageTypeModel.find({name: new RegExp(name, 'ig')})
  }

  static async save(dao) {
    return MortgageTypeModel.create(dao)
  }

  static async removeOne(id) {
    return MortgageTypeModel.findByIdAndRemove(id)
  }

}

module.exports = MortgageTypeService
const MortgagePlanModel = require('../models/mortgage_plan')

class MortgagePlanService {
  static async findAll() {
    return MortgagePlanModel.find({})
  }

  static async findById(id) {
    return MortgagePlanModel.findById(id)
  }
  
  static async save(dao) {
    return MortgagePlanModel.create(dao)
  }

  static async removeOne(id) {
    return MortgagePlanModel.findByIdAndRemove(id)
  }

}

module.exports = MortgagePlanService
const MortgagePlanService = require('../services/plan')

class MortgagePlanController {

  static async getAllMortagePlans(req, res) {
    let plans
    if (req.query.search && req.query.search.length > 1) {
      plans = await MortgagePlanService.findAll() 
    } else {
      plans = await MortgagePlanService.findAll()
    }
    res.render('plans', { plans })
  }

  static async createPlan(req, res) {
    try {
      await MortgagePlanService.save(req.body)
      req.flash('success_msg', 'Plan Added')
      res.redirect('/plans')
    } catch (error) {
      console.log(error)
      req.flash('error_msg', 'Error adding mortgage plan')
      req.redirect('/plans')      
    }
  }

  static async removePlan(req, res) {
    try {
      await MortgagePlanService.removeOne(req.params.plan_id)
      res.redirect('/plans')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/plans')
    }
  }

}

module.exports = MortgagePlanController
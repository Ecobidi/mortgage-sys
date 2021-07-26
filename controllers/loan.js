const LoanService = require('../services/loan')
const BorrowerService = require('../services/borrower')
const TypeService = require('../services/type')
const PlanService = require('../services/plan')

class MortgagePlanController {

  static async getAllMortageLoans(req, res) {
    let loans
    if (req.query.search && req.query.search.length > 1) {
      loans = await LoanService.findByBorrowerName(req.query.search) 
    } else if (req.query.status) {
      loans = await LoanService.findByStatus(req.query.status)
    } else {
      loans = await LoanService.findAll()
    }
    res.render('loans', { loans })
  }

  static async createLoanPage(req, res) {
    let borrowers = await BorrowerService.findAll()
    let types = await TypeService.findAll()
    let plans = await PlanService.findAll()
    res.render('loans-new', {borrowers, plans, types})
  }

  static async createLoan(req, res) {
    let dao = req.body
    try {
      let borrower = await BorrowerService.findById(dao.borrower)
      dao.borrower_name = `${borrower.surname} ${borrower.first_name} ${borrower.middle_name}`
      await LoanService.save(dao)
      req.flash('success_msg', 'Loan Added')
      res.redirect('/loans')
    } catch (error) {
      console.log(error)
      req.flash('error_msg', 'Error adding mortgage loan')
      req.redirect('/loans')      
    }
  }

  static async removeLoan(req, res) {
    try {
      await LoanService.removeOne(req.params.loan_id)
      res.redirect('/loans')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/loans')
    }
  }

}

module.exports = MortgagePlanController
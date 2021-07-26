const MortgagePaymentService = require('../services/payment')
const LoanService = require('../services/loan')

class MortgagePymentController {

  static async getAllPayments(req, res) {
    let payments
    if (req.query.search && req.query.search.length > 1) {
      payments = await MortgagePaymentService.findByBorrowerName(req.query.search) 
    } else {
      payments = await MortgagePaymentService.findAll()
    }
    res.render('payments', { payments })
  }

  static async createPaymentPage(req, res) {
    try {
      let loan = await LoanService.findById(req.query.loan_id)
      if (loan) {
        res.render('payments-new', { loan, loan_found: true })
      } else {
        res.render('payments-new', { loan_found: false })
      }
      
    } catch (error) {
      req.flash('error_msg', 'Invalid Loan Reference ID')
      res.redirect('/payments/new')
    }
  }

  static async createPayment(req, res) {
    try {
      await MortgagePaymentService.save(req.body)
      req.flash('success_msg', 'Payment Added')
      res.redirect('/payments')
    } catch (error) {
      console.log(error)
      req.flash('error_msg', 'Error adding mortgage payment')
      req.redirect('/payments')      
    }
  }

  static async removePayment(req, res) {
    try {
      await MortgagePaymentService.removeOne(req.params.payment_id)
      res.redirect('/payments')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/payments')
    }
  }

}

module.exports = MortgagePymentController
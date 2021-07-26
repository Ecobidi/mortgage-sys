let BorrowerService = require('../services/borrower')

class BorrowerController {
  static async getAllBorrowersPage(req, res) {
    try {
      let borrowers
      if (req.query.search) {
        borrowers = await BorrowerService.findByName(req.query.search)
      } else {
        borrowers = await BorrowerService.findAll()
      }
      res.render('borrowers', { borrowers })
    } catch (error) {
      console.log(error)
      req.flash('error_msg', 'An Error Occurred')
      res.redirect('/borrowers')
    }
  }

  static async createBorrwerPage(req, res) {
    res.render('borrowers-new')
  }

  static async createBorrower(req, res) {
    try {
      await BorrowerService.save(req.body)
      req.flash('success_msg', 'Borrower Added')
      res.redirect('/borrowers')
    } catch (error) {
      console.log(error)
      req.flash('error_msg', 'An Error Occurred')
      res.redirect('/borrowers')
    }
  }

  static async removeBorrower(req, res) {
    try {
      await BorrowerService.removeOne(req.params.borrower_id)
      req.flash('success_msg', 'Borrower Successfully Removed')
      req.redirect('/borrowers')
    } catch (error) {
      console.log(error)
      req.flash('error_msg', 'An Error Occurred')
      res.redirect('/borrowers')
    }
  }
}

module.exports = BorrowerController
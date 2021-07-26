const router = require('express').Router()
const LoanController = require('../controllers/loan')

router.get('/', LoanController.getAllMortageLoans)

router.get('/new', LoanController.createLoanPage)

router.post('/new', LoanController.createLoan)

router.get('/remove/:loan_id', LoanController.removeLoan)

module.exports = router
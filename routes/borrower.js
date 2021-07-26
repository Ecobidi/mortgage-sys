const router = require('express').Router()
const BorrowerController = require('../controllers/borrower')

router.get('/', BorrowerController.getAllBorrowersPage)

router.get('/new', BorrowerController.createBorrwerPage)

router.post('/new', BorrowerController.createBorrower)

router.get('/remove/:borrower_id', BorrowerController.removeBorrower)

module.exports = router
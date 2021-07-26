const router = require('express').Router()
const PaymentController = require('../controllers/payment')

router.get('/', PaymentController.getAllPayments)

router.get('/new', PaymentController.createPaymentPage)

router.post('/new', PaymentController.createPayment)

router.get('/remove/:payment_id', PaymentController.removePayment)

module.exports = router
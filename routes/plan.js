const router = require('express').Router()
const PlanController = require('../controllers/plan')

router.get('/', PlanController.getAllMortagePlans)

router.post('/new', PlanController.createPlan)

router.get('/remove/:plan_id', PlanController.removePlan)

module.exports = router
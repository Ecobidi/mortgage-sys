const router = require('express').Router()
const TypeController = require('../controllers/type')

router.get('/', TypeController.getAllMortageTypes)

router.post('/new', TypeController.createType)

router.get('/remove/:type_id', TypeController.removeType)

module.exports = router
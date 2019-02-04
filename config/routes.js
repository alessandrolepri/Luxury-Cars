const router = require('express').Router()
const carsController = require('../controllers/cars')


router.route('/api/cars')
  .get(carsController.index)
  .post(carsController.create)

module.exports = router

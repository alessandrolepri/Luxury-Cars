const router = require('express').Router()
const carsController = require('../controllers/cars')


router.route('/cars')
  .get(carsController.index)
  .post(carsController.create)

module.exports = router

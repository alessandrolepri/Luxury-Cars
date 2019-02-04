const Car = require('../models/car')


function indexRoute(req, res){
  Car
    .find()
    .then(cars => res.status(200).json(cars))
}


function createRoute(req, res) {
  Car
    .create(req.body)
    .then(car => res.status(201).json(car))
    .catch(err => res.status(422).json(err.errors))
}


module.exports = {
  index: indexRoute,
  create: createRoute
}

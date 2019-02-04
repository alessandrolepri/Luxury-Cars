const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({

  model: { type: String, required: true},
  image: { type: String, required: true},
  description: { type: String },
  origin: { type: String, required: true},
  price: { type: String }
})

module.exports = mongoose.model('Car', carSchema)

const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({

  model: { type: String },
  image: { type: String },
  description: { type: String },
  origin: { type: String},
  price: { type: String }
})

module.exports = mongoose.model('Car', carSchema)

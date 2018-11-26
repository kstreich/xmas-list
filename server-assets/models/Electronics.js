let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  brand: { type: String },
  name: { type: String, required: true },
  imgURL: { type: String, required: true },
  price: { type: Number, required: true },
  purchaseURL: { type: String, required: true }
})

module.exports = mongoose.model('Electronics', schema)
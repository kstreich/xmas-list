let mongoose = require('mongoose')
let Schema = mongoose.Schema

//define the schema
let schema = new Schema({
  imgURL: { type: String },
  title: { type: String },
  author: { type: String },
  price: { type: String },
  purchaseURL: { type: String }
})

module.exports = mongoose.model("Books", schema)
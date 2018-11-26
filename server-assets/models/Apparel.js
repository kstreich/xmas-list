let mongoose = require('mongoose')
let Schema = mongoose.Schema

//define the schema
let schema = new Schema({
  imgURL: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String },
  purchaseURL: { type: String, required: true },
  price: { type: String, required: true },
  articleType: { type: String }
})

module.exports = mongoose.model("Apparel", schema)
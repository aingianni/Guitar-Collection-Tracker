const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
  image: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: String, required: true },
  color: { type: String, required: true },
  bodyShape: { type: String, required: true },
  guitarOwned: Boolean,
  comments: [{
    commentName: { type: String, required: true },
    commentBody: { type: String, required: true }
  }]
})

const Collection = mongoose.model('Collection', collectionSchema)

module.exports = Collection

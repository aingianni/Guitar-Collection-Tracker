const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
    model: { type: String, required: true },
    price: { type: String, required: true },
    color: { type: String, required: true },
    bodyShape: { type: String, required: true },
    guitarOwned: Boolean
})

const Collection = mongoose.model('Collection', collectionSchema)

module.exports = Collection
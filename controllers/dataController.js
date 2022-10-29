const Collection = require('../models/collection')

const dataController = {
  index (req, res, next) {
    Collection.find({}, (err, foundCollections) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.collections = foundCollections
        next()
      }
    })
  },
  destroy (req, res, next) {
    Collection.findByIdAndDelete(req.params.id, (err, deletedCollection) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.collection = deletedCollection
        next()
      }
    })
  },
  update (req, res, next) {
    req.body.guitarOwned = req.body.guitarOwned === 'on'
    Collection.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCollection) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.collection = updatedCollection
        next()
      }
    })
  },
  create (req, res, next) {
    req.body.guitarOwned = req.body.guitarOwned === 'on'
    Collection.create(req.body, (err, createdCollection) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.collection = createdCollection
        next()
      }
    })
  },
  show (req, res, next) {
    Collection.findById(req.params.id, (err, foundCollection) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.collection = foundCollection
        next()
      }
    })
  },
  updateComment (req, res, next) {
    Collection.findById(req.params.id, (err, foundCollection) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        foundCollection.comments.push(req.body)

        Collection.findByIdAndUpdate(req.params.id, foundCollection, { new: true }, (err, updatedCollection) => {
          if (err) {
            res.status(400).send({ msg: err.message })
          } else {
            res.locals.data.collection = updatedCollection
            next()
          }
        })
      }
    })
  }
}

module.exports = dataController

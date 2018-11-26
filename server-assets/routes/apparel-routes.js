const router = require('express').Router()
let Apparel = require('../models/Apparel')

//logger
router.get('/', (req, res, next) => {
  console.log('Hello Style')
  next()
})

//get all apparel items
router.get('/', (req, res, next) => {
  Apparel.find({})
    .then(items => {
      res.send(items)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//get apparel item by id


router.post('/', (req, res, next) => {
  Apparel.create(req.body)
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//edit apparel item
router.put('/:itemId', (req, res, next) => {
  Apparel.findByIdAndUpdate(req.params.itemId, req.body, { new: true })
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//delete item
router.delete('/:id', (req, res, next) => {
  Apparel.findByIdAndDelete(req.params.id)
    .then(deletedItem => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router
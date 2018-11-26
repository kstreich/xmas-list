const router = require('express').Router()
let Books = require('../models/Books')

//logger 
router.get('/', (req, res, next) => {
  console.log('Hello Books')
  next()
})

//get all books
router.get('/', (req, res, next) => {
  Books.find({})
    .then(items => {
      res.send(items)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/', (req, res, next) => {
  Books.create(req.body)
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:itemId', (req, res, next) => {
  Books.findByIdAndUpdate(req.params.itemId, req.body, { new: true })
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  Books.findByIdAndDelete(req.params.id)
    .then(deletedItem => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router











const router = require('express').Router()
let Electronics = require('../models/Electronics')

//logger
router.get('/', (req, res, next) => {
  console.log("Hello electronics")
  next()
})

//get all electronic items
router.get('/', (req, res, next) => {
  Electronics.find({})
    .then(items => {
      res.send(items)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//get item by id
router.get('/:id', (req, res, next) => {
  Electronics.findById(req.params.id)
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.send(400).send(err)
    })
})


//create or post a new eletronic item 
router.post('/', (req, res, next) => {
  Electronics.create(req.body)
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  Electronics.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.send(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  Electronics.findByIdAndDelete(req.params.id)
    .then(deletedItem => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//don't forget to export the file!!
module.exports = router
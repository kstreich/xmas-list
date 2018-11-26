//instantiates router object
const router = require('express').Router()
//imports apparel schema, your database model
let Apparel = require('../models/Apparel')

//logger
router.get('/', (req, res, next) => {
  console.log('Hello Style')
  next()
})

//get all apparel items
//when recieving a get request on route api/apparel
router.get('/', (req, res, next) => {
  //utilizing mongoose, find all apparel objects in database
  Apparel.find({}) //Apparel is the name of the database in mongo
    //apparel is response array from database of all apparel objects
    .then(items => {
      //return to the client
      res.send(items)
    })
    //if something breaks on the request in your database
    .catch(err => {
      res.status(400).send(err)
    })
})

//get apparel item by id
//MAKE REQUEST HERE



router.post('/', (req, res, next) => {
  Apparel.create(req.body) // req.body is the data object that the client sent over
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
    //req.params comes from the request url
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
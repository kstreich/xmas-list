let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/mlab-config')

//middleware
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

//registered routes
let apparelRoutes = require('./server-assets/routes/apparel-routes')
let electronicsRoutes = require('./server-assets/routes/electronics-routes')
let booksRoutes = require('./server-assets/routes/book-routes')


server.use('/api/apparel', apparelRoutes)
server.use('/api/electronics', electronicsRoutes)
server.use('/api/books', booksRoutes)


server.listen(port, () => {
  console.log('Server running on port:', port)
})

//catch all
server.get('*', (req, res, next) => {
  res.status(404).send('No matching route')
})
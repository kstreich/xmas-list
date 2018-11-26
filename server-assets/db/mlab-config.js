let mongoose = require('mongoose')


const connectionString = 'mongodb://student:student1@ds041157.mlab.com:41157/xmas-list'

let connection = mongoose.connection

//established connection for the database
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//console log any errors coming from the database
connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})

//confirms connection to database
connection.once('open', () => {
  console.log("Connected to database")
})
require('dotenv').config()

const restify = require('restify')
const bodyParser = require('body-parser')
// var jwt = require('restify-jwt-community')

var server = restify.createServer()

server.use(bodyParser.urlencoded({extended: true}))
// server.use(jwt({ secret: process.env.SECRET }).unless({path: ['/', '/auth', '/user']}))

require('./routes/home')(server)
require('./routes/hue')(server)
require('./routes/vacuum')(server)

server.listen(process.env.PORT || 8080, function () {
  console.log('%s listening at %s', server.name, server.url)
})

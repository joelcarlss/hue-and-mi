require('dotenv').config()

const restify = require('restify')
const bodyParser = require('body-parser')
const Vacuum = require('./model/Vacuum')
const Hue = require('./model/Hue')

let vacuum = new Vacuum()
vacuum.connect().then(console.log)

const hue = new Hue()
hue.connect()

var server = restify.createServer()

server.use(bodyParser.urlencoded({extended: true}))
// server.use(jwt({ secret: process.env.SECRET }).unless({path: ['/', '/auth', '/user']}))

require('./routes/home')(server)

require('./routes/hue/home')(server, hue)
require('./routes/hue/actions')(server, hue)
require('./routes/hue/properties')(server, hue)

require('./routes/vacuum/home')(server, vacuum)
require('./routes/vacuum/actions')(server, vacuum)
require('./routes/vacuum/properties')(server, vacuum)

server.listen(process.env.PORT || 8080, function () {
  console.log('%s listening at %s', server.name, server.url)
})

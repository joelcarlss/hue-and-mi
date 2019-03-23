require('dotenv').config()

const restify = require('restify')
const bodyParser = require('body-parser')
const Hue = require('./model/Hue')

const EventHandler = require('./model/EventHandler')
const Vaccum = require('./model/Vacuum')
const Local = require('./model/Local')
const cors = require('cors')
const vacuum = new Vaccum()

// vacuum.connect().then(console.log)

const hue = new Hue()
hue.connect()

const local = new Local()

async function test () {
  const eventHandler = new EventHandler(hue, vacuum)
  eventHandler.start()
}
var server = restify.createServer()
server.use(cors())

server.use(bodyParser.urlencoded({ extended: true }))
// server.use(jwt({ secret: process.env.SECRET }).unless({path: ['/', '/auth', '/user']}))

require('./routes/home')(server, local)

require('./routes/hue/home')(server, hue)
require('./routes/hue/actions')(server, hue)
require('./routes/hue/properties')(server, hue)
require('./routes/hue/rooms')(server, hue)
require('./routes/hue/lights')(server, hue)
require('./routes/hue/sensors')(server, hue)

require('./routes/vacuum/home')(server, vacuum)
require('./routes/vacuum/actions')(server, vacuum)
require('./routes/vacuum/properties')(server, vacuum)

server.listen(process.env.PORT || 8080, function () {
  console.log('%s listening at %s', server.name, server.url)
})

test()

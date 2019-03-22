let db = require('../model/database')
module.exports = (server, local) => {
  server.get('/', async (req, res, next) => {
    res.send('Welcome')
    next()
  })
  server.get('/model', async (req, res, next) => {
    res.send(local.getAboutData())
    next()
  })
  server.get('/actions', async (req, res, next) => {
    res.send('Here one can do things like set events')
    next()
  })
  server.get('/actions/autoClean', async (req, res, next) => {
    let event = await db.getEvents()
    res.send(event)
    next()
  })
  server.post('/actions/autoClean', async (req, res, next) => {
    let name = req.body.name
    let fromHour = JSON.parse(req.body.fromHour)
    let toHour = JSON.parse(req.body.toHour)
    let daysSinceLast = JSON.parse(req.body.daysSinceLast)
    console.log(fromHour)
    let event = await db.createEvent(name, fromHour, toHour, daysSinceLast)
    res.send(event)
    next()
  })
  server.get('/properties', async (req, res, next) => {
    res.send('Here one can se the active events etc')
    next()
  })
  server.get('/things', async (req, res, next) => {
    res.send('here one will find Vacuum and Philips Hue')
    next()
  })
}

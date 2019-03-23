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

  server.post('/actions/autoClean', async (req, res, next) => {
    try {
      let name = req.body.name
      let fromHour = req.body.fromHour
      let toHour = req.body.toHour
      let daysSinceLast = req.body.daysSinceLast
      let noMovement = req.body.noMovement
      let event = await db.createEvent(name, fromHour, toHour, daysSinceLast, noMovement)
      res.send(event)
    } catch (e) {
      res.send(e)
    }
    next()
  })
  server.get('/properties', async (req, res, next) => {
    res.send('Here one can se the active events etc')
    next()
  })
  server.get('/properties/autoClean', async (req, res, next) => {
    let event = await db.getEvents()
    res.send(event)
    next()
  })
  server.get('/things', async (req, res, next) => {
    res.send('here one will find Vacuum and Philips Hue')
    next()
  })
}

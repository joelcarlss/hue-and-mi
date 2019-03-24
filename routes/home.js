let db = require('../model/database')
let linkData = require('../utils/links')
let aboutData = require('../utils/data')
let payload = require('../utils/payload')
module.exports = (server, local, eventHandler) => {
  server.get('/', async (req, res, next) => {
    let response = 'Welcome'
    let { home } = aboutData.home
    res.send(payload(linkData(), home, response))
    next()
  })
  server.get('/model', async (req, res, next) => {
    let links = linkData().model
    let { model } = aboutData.home
    res.send(payload(links, model))
    next()
  })
  server.get('/actions', async (req, res, next) => {
    let links = linkData().actions
    let {actions} = aboutData.home
    res.send(payload(links, actions))
    next()
  })

  server.get('/actions/autoClean', async (req, res, next) => {
    let data = aboutData.home.actions.resources.autoClean
    let links = linkData().actions.autoClean
    res.send(payload(links, data))
    next()
  })

  server.post('/actions/autoClean', async (req, res, next) => {
    try {
      let data = aboutData.home.actions.resources.autoClean
      let links = linkData().actions.autoClean

      let name = req.body.name
      let fromHour = req.body.fromHour
      let toHour = req.body.toHour
      let daysSinceLast = req.body.daysSinceLast
      let noMovement = req.body.noMovement
      let event = await db.createEvent(name, fromHour, toHour, daysSinceLast, noMovement)
      eventHandler.restartEvents()
      res.send(payload(links, data, event))
    } catch (e) {
      res.send(e)
    }
    next()
  })
  server.del('/actions/autoClean/:id', async (req, res, next) => {
    try {
      let id = req.params.id
      let data = aboutData.home.actions.resources.autoClean
      let links = linkData(id).actions.autoClean

      await db.deleteEvent(id)
      eventHandler.restartEvents()
      let response = 'Removed'
      res.send(payload(links, data, response))
    } catch (e) {
      res.send(e)
    }
    next()
  })
  server.get('/properties', async (req, res, next) => {
    let data = aboutData.home.properties
    let links = linkData().properties
    res.send(payload(links, data))
    next()
  })
  server.get('/properties/autoClean', async (req, res, next) => {
    let event = await db.getEvents()
    let data = aboutData.home.properties.resources.autoClean
    let links = linkData().properties.autoClean
    res.send(payload(links, data, event))
    next()
  })
  server.get('/things', async (req, res, next) => {
    let data = aboutData.home.things
    let links = linkData().things
    res.send(payload(links, data))
    next()
  })
}

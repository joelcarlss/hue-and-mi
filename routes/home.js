let db = require('../model/database')
let linkData = require('../utils/links')
let payload = require('../utils/payload')
module.exports = (server, local, eventHandler) => {
  server.get('/', async (req, res, next) => {
    let data = {
      title: 'MiAndHue',
      description: 'A Smart Home Raspberry Pi project connecting Philips Hue With Xiaomi Vacuum cleaners',
      authors: 'Carl Ejnarsson (ce222qw) and Joel Carlsson (jc222mw)'
    }
    res.send(payload(linkData(), data))
    next()
  })
  server.get('/model', async (req, res, next) => {
    let links = linkData().model
    let data = local.getAboutData()
    res.send(payload(links, data))
    next()
  })
  server.get('/actions', async (req, res, next) => {
    let data = {
      title: 'List of actions',
      resources: {
        autoClean: {
          name: 'Set Autonomous Clean Event',
          descriptions: 'Create event for autonomus cleaning dependent on days since last clean, hours since last movement in home and time of the day',
          values: {
            name: {
              type: 'string',
              string: 'Name of event by choice',
              required: 'true'
            },
            fromHour: {
              type: 'enum',
              enum: '0-23',
              required: 'true'
            },
            toHour: {
              type: 'enum',
              enum: '0-23',
              required: 'true'
            },
            daysSinceLast: {
              type: 'enum',
              enum: '0-99',
              required: 'true'
            },
            noMovement: {
              type: 'enum',
              enum: '0-23',
              required: 'true'
            }
          }
        }
      }
    }
    let links = linkData().actions
    res.send(payload(links, data))
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
      eventHandler.restartEvents()
      res.send(event)
    } catch (e) {
      res.send(e)
    }
    next()
  })
  server.del('/actions/autoClean/:id', async (req, res, next) => {
    try {
      let id = req.params.id
      await db.deleteEvent(id)
      eventHandler.restartEvents()

      res.send('ok')
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

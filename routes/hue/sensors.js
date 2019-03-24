const utils = require('../../utils/hue')
let linkData = require('../../utils/links')
let aboutData = require('../../utils/data')
let payload = require('../../utils/payload')
module.exports = (server, hue) => {
// All sensors
  server.get('/things/hue/sensors', async (req, res, next) => {
    let response = 'Welcome'
    let data = aboutData.sensors.home
    let links = linkData().things.hue.sensors
    res.send(payload(links, data, response))
    next()
  })

  // All sensors properties
  server.get('/things/hue/sensors/properties', async (req, res, next) => {
    let result
    try {
      result = await hue.getSensors()
      result = result.map(({ id, type, name, modelid, manufacturername, productname, swversion, config }) => (
        { name, type, id, modelid, manufacturername, productname, swversion, config })
      )
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })

  server.get('/things/hue/sensors/:id', async (req, res, next) => {
    let result
    try {
      result = 'HATEOAS HERE'
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
  // Sensors by id model
  server.get('/things/hue/sensors/:id/model', async (req, res, next) => {
    let result
    try {
      let id = req.params.id
      result = await hue.getSensorById(id)
        .then(({ name, type, modelid, manufacturername, productname, swversion }) => ({ name, type, modelid, manufacturername, productname, swversion }))
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })

  // Sensors by id properties
  server.get('/things/hue/sensors/:id/properties', async (req, res, next) => {
    let result
    try {
      let id = req.params.id
      result = await hue.getSensorById(id)
        .then(({ id, type, name, modelid, manufacturername, productname, swversion, config }) => (
          { name, type, id, modelid, manufacturername, productname, swversion, config }))
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
}

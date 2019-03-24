const utils = require('../../utils/hue')
let linkData = require('../../utils/links')
let aboutData = require('../../utils/data')
let payload = require('../../utils/payload')
module.exports = (server, hue) => {
  // All Lights
  server.get('/things/hue/lights', async (req, res, next) => {
    let response = 'Welcome'
    let data = aboutData.lights.home
    let links = linkData().things.hue.lights
    res.send(payload(links, data, response))
    next()
  })
  // All lights properties
  server.get('/things/hue/lights/properties', async (req, res, next) => {
    let data = aboutData.lights.properties
    let links = linkData().things.hue.lights.properties
    res.send(payload(links, data))
    next()
  })
  server.get('/things/hue/lights/properties/state', async (req, res, next) => {
    let result
    try {
      result = await hue.getLights()
      result = result.map(({ id, state, type, name }) => ({ name, type, id, state }))
    } catch (e) {
      result = utils.handleError(e)
    }
    let data = aboutData.lights.properties.resources.state
    let links = linkData().things.hue.lights.properties.state
    res.send(payload(links, data, result))
    res.send(result)
    next()
  })

  server.get('/things/hue/lights/:id', async (req, res, next) => {
    let id = req.params.id
    let data = aboutData.lights.id.home
    let links = linkData(id).things.hue.lights.id
    res.send(payload(links, data))
    next()
  })

  // Light by id model
  server.get('/things/hue/lights/:id/model', async (req, res, next) => {
    let id = req.params.id
    let result
    try {
      result = await hue.getLightStateById(id)
        .then(({ id, type, name, modelid, manufacturername, productname, productid }) => ({ name, type, id, modelid, manufacturername, productname, productid }))
    } catch (e) {
      result = utils.handleError(e)
    }
    let data = aboutData.lights.id.model
    let links = linkData(id).things.hue.lights.id.model
    res.send(payload(links, data, result))
    next()
  })

  // Light by id actions
  server.get('/things/hue/lights/:id/actions', async (req, res, next) => {
    let id = req.params.id
    let data = aboutData.lights.id.actions
    let links = linkData(id).things.hue.lights.id.actions
    res.send(payload(links, data))
    next()
  })

  server.put('/things/hue/lights/:id/actions/state', async (req, res, next) => {
    let result
    let id = req.params.id
    try {
      let lightState = req.body.lightState
      let brightness = req.body.brightness
      let color = req.body.color

      if (lightState) {
        lightState = JSON.parse(lightState)
        result = await hue.setLightState(id, lightState)
      }
      if (brightness) {
        brightness = JSON.parse(brightness)
        result = await hue.setBrightness(id, brightness)
      }
      if (color) {
        color = JSON.parse(color)
        let {r, g, b} = color
        result = await hue.setRgbColor(id, {r, g, b})
      }
      result = await hue.getLightStateById(id)
    } catch (e) {
      result = utils.handleError(e)
    }
    let data = aboutData.lights.id.actions.resources.state
    let links = linkData(id).things.hue.lights.id.actions.state
    res.send(payload(links, data, result))
    next()
  })

  // Light by id properties
  server.get('/things/hue/lights/:id/properties', async (req, res, next) => {
    let id = req.params.id
    let data = aboutData.lights.id.properties
    let links = linkData(id).things.hue.lights.id.properties
    res.send(payload(links, data))
    next()
  })
  server.get('/things/hue/lights/:id/properties/state', async (req, res, next) => {
    let result = ''
    try {
      let id = req.params.id

      result = await hue.getLightStateById(id)
        .then(({ id, state, type, name }) => ({ name, type, id, state }))
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
}

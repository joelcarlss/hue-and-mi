const utils = require('../../utils/hue')
let linkData = require('../../utils/links')
let aboutData = require('../../utils/data')
let payload = require('../../utils/payload')
module.exports = (server, hue) => {
  // ROOMS

  server.get('/things/hue/rooms', async (req, res, next) => {
    let response = 'Welcome'
    let data = aboutData.rooms.home
    let links = linkData().things.hue.rooms
    res.send(payload(links, data, response))
    next()
  })

  server.get('/things/hue/rooms/properties', async (req, res, next) => {
    let data = aboutData.rooms.properties
    let links = linkData().things.hue.rooms.properties
    res.send(payload(links, data))
    next()
  })

  server.get('/things/hue/rooms/properties/state', async (req, res, next) => {
    let result
    try {
      result = await hue.getRooms()

      console.log(result)
      result = result.map((room) => ({ id: room.id, name: room.name, lights: room.lights, sensors: room.sensors, class: room.class, state: room.state, action: room.action }))
    } catch (e) {
      result = utils.handleError(e)
    }
    let data = aboutData.rooms.properties.resources.state
    let links = linkData().things.hue.rooms.properties.state
    res.send(payload(links, data, result))
    next()
  })

  server.get('/things/hue/rooms/:id', async (req, res, next) => {
    let id = req.params.id
    let data = aboutData.rooms.id.home
    let links = linkData(id).things.hue.rooms.id
    res.send(payload(links, data))
    next()
  })

  // Rooms by id model
  server.get('/things/hue/rooms/:id/model', async (req, res, next) => {
    let result
    let id = req.params.id
    try {
      result = await hue.getRoomById(id)
        .then((room) => ({ id: room.id, name: room.name, lights: room.lights, sensors: room.sensors, class: room.class }))
    } catch (e) {
      result = utils.handleError(e)
    }
    let data = aboutData.rooms.id.model
    let links = linkData(id).things.hue.rooms.id.model
    res.send(payload(links, data, result))
    next()
  })

  // Rooms by id actions
  server.get('/things/hue/rooms/:id/actions', async (req, res, next) => {
    let id = req.params.id
    let data = aboutData.rooms.id.actions
    let links = linkData(id).things.hue.rooms.id.actions
    res.send(payload(links, data))
    next()
  })

  server.put('/things/hue/rooms/:id/actions/state', async (req, res, next) => {
    let result
    let id = req.params.id
    try {
      let lightState = req.body.lightState
      let brightness = req.body.brightness
      let color = req.body.color
      if (lightState) {
        lightState = JSON.parse(lightState)
        result = await hue.setRoomStateById(id, lightState)
      }
      if (brightness) {
        brightness = JSON.parse(brightness)
        result = await hue.setRoomBrightnessById(id, brightness)
      }
      if (color) {
        color = JSON.parse(color)
        result = await hue.setRoomColorById(id, color)
      }
      result = await hue.getRoomById(id)
    } catch (e) {
      result = utils.handleError(e)
    }
    let data = aboutData.rooms.id.actions.resources.state
    let links = linkData(id).things.hue.rooms.id.actions.state
    res.send(payload(links, data, result))
    next()
  })

  // Rooms by id properties
  server.get('/things/hue/rooms/:id/properties', async (req, res, next) => {
    let id = req.params.id
    let data = aboutData.rooms.id.properties
    let links = linkData(id).things.hue.rooms.id.properties
    res.send(payload(links, data))
    next()
  })
  server.get('/things/hue/rooms/:id/properties/state', async (req, res, next) => {
    let result
    let id = req.params.id
    try {
      result = await hue.getRoomById(id)
    } catch (e) {
      result = utils.handleError(e)
    }
    let data = aboutData.rooms.id.properties.resources.state
    let links = linkData(id).things.hue.rooms.id.properties.state
    res.send(payload(links, data, result))
    next()
  })
}

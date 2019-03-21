const utils = require('../../utils/hue')
module.exports = (server, hue) => {
  // ROOMS

  server.get('/things/hue/rooms', async (req, res, next) => {
    let result
    try {
      result = await hue.getRooms()
      result = result.map((room) => ({ id: room.id, name: room.name, lights: room.lights, sensors: room.sensors, class: room.class }))
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })

  server.get('/things/hue/rooms/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/rooms/properties', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/rooms/properties/states', async (req, res, next) => {
    res.send('hello')
    next()
  })

  // Rooms by id model
  server.get('/things/hue/rooms/:id/model', async (req, res, next) => {
    let result
    try {
      let id = req.params.id
      result = await hue.getRoomById(id)
        .then((room) => ({ id: room.id, name: room.name, lights: room.lights, sensors: room.sensors, class: room.class }))
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })

  // Rooms by id actions
  server.get('/things/hue/rooms/:id/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })

  server.post('/things/hue/rooms/:id/actions/state', async (req, res, next) => {
    let result
    try {
      let id = req.params.id
      let state = JSON.parse(req.body.state)
      result = await hue.setRoomStateById(id, state)
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
  // Rooms by id properties
  server.get('/things/hue/rooms/:id/properties', async (req, res, next) => {
    let result
    try {
      let id = req.params.id
      result = await hue.getRoomById(id)
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
  server.get('/things/hue/rooms/:id/properties/state', async (req, res, next) => {
    let result
    try {
      let id = req.params.id
      result = await hue.getRoomById(id)
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
  // Rooms by id things
  server.get('/things/hue/rooms/:id/lights', async (req, res, next) => {
    let result
    try {
      let id = req.params.id
      result = await hue.getRoomById(id)
        .then((room) => ({ id: room.id, name: room.name, lights: room.lights }))
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
}

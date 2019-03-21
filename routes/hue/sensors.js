const utils = require('../../utils/hue')
module.exports = (server, hue) => {
// All sensors
  server.get('/things/hue/sensors', async (req, res, next) => {
    res.send()
    next()
  })

  server.get('/things/hue/sensors/things', async (req, res, next) => {
    let result
    try {
      result = await hue.getSensors()
      result = result.map(({id, type, name, modelid, manufacturername, productname, swversion, config}) => (
          {name, type, id, modelid, manufacturername, productname, swversion, config})
          )
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
  // All sensors actions
  server.get('/things/hue/sensors/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })

  // All sensors properties
  server.get('/things/hue/sensors/properties', async (req, res, next) => {
    res.send('hello')
    next()
  })

  // Sensors by id model
  server.get('/things/hue/sensors/:id/model', async (req, res, next) => {
    let result
    try {
      let id = req.params.id
      result = await hue.getSensorById(id)
      .then(({name, type, modelid, manufacturername, productname, swversion}) => ({name, type, modelid, manufacturername, productname, swversion}))
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
      result = await hue.getSensors()
      result = result.map(({id, type, name, modelid, manufacturername, productname, swversion, config}) => (
          {name, type, id, modelid, manufacturername, productname, swversion, config})
          )
    } catch (e) {
      result = utils.handleError(e)
    }
    res.send(result)
    next()
  })
}

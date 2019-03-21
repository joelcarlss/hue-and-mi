const utils = require('../../utils/hue')
module.exports = (server, hue) => {
// All sensors
  server.get('/things/hue/sensors', async (req, res, next) => {
    res.send()
    next()
  })

  server.get('/things/hue/sensors/model', async (req, res, next) => {
    let result
    try {
      result = await hue.getsensors()
      result = result.map(({id, type, name, modelid, manufacturername, productname, productid}) => ({name, type, id, modelid, manufacturername, productname, productid}))
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
}

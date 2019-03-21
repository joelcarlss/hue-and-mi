const utils = require('../../utils/hue')
module.exports = (server, hue) => {
  server.get('/things/hue/properties/lightStates', async (req, res, next) => {
    let lightData = await hue.getLights()
    let lightStates = utils.getStates(lightData)
    res.send(lightStates)
    next()
  })
}

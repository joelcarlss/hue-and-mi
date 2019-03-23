const utils = require('../../utils/hue')
module.exports = (server, hue) => {
  server.get('/things/hue', async (req, res, next) => {
    res.send('hello')
    next()
  })

  server.get('/things/hue/model', async (req, res, next) => {
    let result = await hue.getDescription()
      .then(({ version, manufacturer, model }) => (
        {
          name: model.name,
          description: model.description,
          number: model.number,
          manufacturer,
          version
        }
      ))
    res.send(result)
    next()
  })
  server.get('/things/hue/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/properties', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/properties/lightStates', async (req, res, next) => {
    let lightData = await hue.getLights()
    let lightStates = utils.getStates(lightData)
    res.send(lightStates)
    next()
  })
}

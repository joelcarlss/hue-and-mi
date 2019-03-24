let linkData = require('../../utils/links')
let aboutData = require('../../utils/data')
let payload = require('../../utils/payload')
module.exports = (server, hue) => {
  server.get('/things/hue', async (req, res, next) => {
    let response = 'Welcome'
    let data = aboutData.hue.home
    let links = linkData().things.hue
    res.send(payload(links, data, response))
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
    let data = aboutData.hue.model
    let links = linkData().things.hue.model
    res.send(payload(links, data, result))
    next()
  })
}

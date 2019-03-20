module.exports = (server, hue) => {
// Lights
  server.get('/things/hue/things/lights', async (req, res, next) => {
    res.send()
    next()
  })
  server.get('/things/hue/things/lights/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/things/lights/properties', async (req, res, next) => {
    res.send('hello')
    next()
  })
}

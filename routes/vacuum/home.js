module.exports = (server, vacuum) => {
  server.get('/things/vacuum', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/model', async (req, res, next) => {
    res.send('hello')
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
}

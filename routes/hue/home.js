module.exports = (server, hue) => {
  server.get('/things/hue', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/model', async (req, res, next) => {
    let result = await hue.getDescription()
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
  server.get('/things/hue/things', async (req, res, next) => {
    res.send('hello')
    next()
  })
}

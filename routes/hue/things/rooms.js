module.exports = (server, hue) => {
    // ROOMS
  server.get('/things/hue/things/rooms', async (req, res, next) => {
    res.send()
    next()
  })
  server.get('/things/hue/things/rooms/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/things/rooms/properties', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/hue/things/rooms/things', async (req, res, next) => {
    res.send('hello')
    next()
  })
}

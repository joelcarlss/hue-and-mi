module.exports = (server, hue) => {
    // ROOMS
  server.get('/things/hue/rooms', async (req, res, next) => {
    res.send()
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
  server.get('/things/hue/rooms/lights', async (req, res, next) => {
    res.send('hello')
    next()
  })

  // Rooms by id actions
  server.get('/things/hue/rooms/:id/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })
  // Rooms by id properties
  server.get('/things/hue/rooms/:id/properties', async (req, res, next) => {
    res.send('hello')
    next()
  })
  // Rooms by id things
  server.get('/things/hue/rooms/:id/lights', async (req, res, next) => {
    res.send('hello')
    next()
  })
}

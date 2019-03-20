module.exports = (server, vacuum) => {
  server.get('/things/vacuum', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/vacuum/model', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/vacuum/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/vacuum/properties', async (req, res, next) => {
    res.send('hello')
    next()
  })
}

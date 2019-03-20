module.exports = (server) => {
  server.get('/', async (req, res, next) => {
    res.send('hello')
    next()
  })
}

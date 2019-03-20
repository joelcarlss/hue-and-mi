module.exports = (server, local) => {
  server.get('/', async (req, res, next) => {
    res.send('Welcome')
    next()
  })
  server.get('/model', async (req, res, next) => {
    res.send(local.getAboutData())
    next()
  })
  server.get('/actions', async (req, res, next) => {
    res.send('Here one can do things like set events')
    next()
  })
  server.get('/properties', async (req, res, next) => {
    res.send('Here one can se the active events etc')
    next()
  })
  server.get('/things', async (req, res, next) => {
    res.send('here one will find Vacuum and Philips Hue')
    next()
  })
}

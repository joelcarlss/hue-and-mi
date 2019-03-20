const Hue = require('../model/Hue')

const hue = new Hue()
hue.connect()
module.exports = (server) => {
  server.get('/hue', async (req, res, next) => {
    res.send('hello')
    next()
  })
}

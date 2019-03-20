const Vacuum = require('../model/Vacuum')

let vacuum = new Vacuum()
vacuum.connect().then(console.log)

module.exports = (server) => {
  server.get('/vacuum', async (req, res, next) => {
    let result = await vacuum.getState()
    res.send(JSON.stringify(result))
    next()
  })
  server.get('/vacuum/battery', async (req, res, next) => {
    let level = await vacuum.batteryLevel()
    console.log(level)
    res.send(JSON.stringify(level))
    next()
  })
  server.get('/vacuum/clean', async (req, res, next) => {
    try {
      let result = await vacuum.isCleaning()
      let json = JSON.stringify(result)
      res.send(json)
    } catch (e) {
      res.send(e)
    }
    next()
  })
  server.post('/vacuum/clean', async (req, res, next) => {
    try {
      let result = await vacuum.clean()
      console.log(result)
      res.send(result)
    } catch (e) {
      console.log(e)
      res.send(e)
    }
    next()
  })
  server.del('/vacuum/clean', async (req, res, next) => {
    try {
      let result = await vacuum.dock()
      console.log(result)
      res.send(result)
    } catch (e) {
      console.log(e)
      res.send(e)
    }
    next()
  })
}

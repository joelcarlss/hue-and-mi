module.exports = (server, vacuum) => {
  server.get('/things/vacuum/properties/state', async (req, res, next) => {
    let result = await vacuum.getState()
    res.send(result)
    next()
  })
  server.get('/things/vacuum/properties/battery', async (req, res, next) => {
    let level = await vacuum.batteryLevel()
    console.log(level)
    res.send(JSON.stringify(level))
    next()
  })
  server.get('/things/vacuum/properties/clean', async (req, res, next) => {
    try {
      let result = await vacuum.isCleaning()
      let json = JSON.stringify(result)
      res.send(json)
    } catch (e) {
      res.send(e)
    }
    next()
  })
}

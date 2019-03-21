module.exports = (server, vacuum) => {
  server.get('/things/vacuum/properties/state', async (req, res, next) => {
    let result = await vacuum.getState()
    res.send(JSON.stringify(result))
    next()
  })
  server.get('/things/vacuum/properties/batteryLevel', async (req, res, next) => {
    let level = await vacuum.batteryLevel()
    console.log(level)
    res.send(JSON.stringify(level))
    next()
  })
  server.get('/things/vacuum/properties/cleanState', async (req, res, next) => {
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

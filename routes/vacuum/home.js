module.exports = (server, vacuum) => {
  server.get('/things/vacuum', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.get('/things/vacuum/model', async (req, res, next) => {
    let result
    try {
      result = await vacuum.getAbout()
    } catch (e) {
      result = e
    }
    res.send(result)
    next()
  })
  server.get('/things/vacuum/actions', async (req, res, next) => {
    res.send('hello')
    next()
  })
  server.put('/things/vacuum/actions/state', async (req, res, next) => {
    let result

    console.log(req.body.cleanState)
    try {
      let cleanState = req.body.cleanState
      let dockState = req.body.dockState
      // let result = await vacuum.clean()
      if (cleanState) {
        cleanState = JSON.parse(cleanState)
        if (cleanState === false) {
          console.log('hej')
          result = await vacuum.stop()
        }
        if (cleanState === true) {
          console.log('asd')
          result = await vacuum.clean()
          // Returns Error
        }
      }
      if (dockState) {
        dockState = JSON.parse(dockState)
        if (dockState === true) {
          result = await vacuum.dock()
        }
      }
      if (result) {
        result = await vacuum.getState()
      }
      console.log(result)
      res.send(result)
    } catch (e) {
      console.log(e)
      res.send(e)
    }
    next()
  })
  server.get('/things/vacuum/properties', async (req, res, next) => {
    let result = await vacuum.getState()
    result.lastClean = await vacuum.getLastClean()
    res.send(result)
    next()
  })
  server.get('/things/vacuum/properties/battery', async (req, res, next) => {
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
  server.get('/things/vacuum/properties/cleanLog', async (req, res, next) => {
    try {
      let result = await vacuum.getCleaningHistory()
      res.send(result)
    } catch (e) {
      res.send(e)
    }
    next()
  })
}

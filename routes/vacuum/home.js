module.exports = (server, vacuum) => {
  let linkData = require('../../utils/links')
  let aboutData = require('../../utils/data')
  let payload = require('../../utils/payload')
  server.get('/things/vacuum', async (req, res, next) => {
    let response = 'Welcome'
    let data = aboutData.vacuum.home
    let links = linkData().things.vacuum
    res.send(payload(links, data, response))
    next()
  })
  server.get('/things/vacuum/model', async (req, res, next) => {
    let data = aboutData.vacuum.model
    let links = linkData().things.vacuum.model
    res.send(payload(links, data))
    next()
  })
  server.get('/things/vacuum/actions', async (req, res, next) => {
    let data = aboutData.vacuum.actions
    let links = linkData().things.vacuum.actions
    res.send(payload(links, data))
    next()
  })
  server.put('/things/vacuum/actions/state', async (req, res, next) => {
    let result
    let data = aboutData.vacuum.actions.resources.state
    let links = linkData().things.vacuum.actions.state
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
      res.send(payload(links, data, result))
    } catch (e) {
      console.log(e)
      res.send(e)
    }
    next()
  })

  server.get('/things/vacuum/properties', async (req, res, next) => {
    let result
    let data = aboutData.vacuum.properties
    let links = linkData().things.vacuum.properties
    try {
      result = await vacuum.getState()
      result.lastClean = await vacuum.getLastClean()
    } catch (e) {
      result = e
    }
    res.send(payload(links, data, result))
    next()
  })
  server.get('/things/vacuum/properties/batteryLevel', async (req, res, next) => {
    let data = aboutData.vacuum.properties.resources.batteryLevel
    let links = linkData().things.vacuum.properties.batteryLevel
    let response
    try {
      let result = await vacuum.batteryLevel()
      result = JSON.stringify(result)
      response = {
        batteryLevel: result
      }
    } catch (e) {
      response = e
    }
    res.send(payload(links, data, response))
    next()
  })
  server.get('/things/vacuum/properties/cleanState', async (req, res, next) => {
    let data = aboutData.vacuum.properties.resources.cleanState
    let links = linkData().things.vacuum.properties.cleanState
    let response
    try {
      let result = await vacuum.isCleaning()
      result = JSON.stringify(result)
      response = {
        cleanState: result
      }
    } catch (e) {
      response = e
    }
    res.send(payload(links, data, response))
    next()
  })
  server.get('/things/vacuum/properties/cleanLog', async (req, res, next) => {
    let data = aboutData.vacuum.properties.resources.cleanLog
    let links = linkData().things.vacuum.properties.cleanLog
    let response
    try {
      let {count, days} = await vacuum.getCleaningHistory()
      response = {
        count,
        cleanLog: days
      }
    } catch (e) {
      response = e
    }
    res.send(payload(links, data, response))
    next()
  })
}

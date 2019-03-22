module.exports = (server, vacuum) => {
  server.put('/things/vacuum/actions/state', async (req, res, next) => {
    let result
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
}

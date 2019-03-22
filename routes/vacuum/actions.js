module.exports = (server, vacuum) => {
  server.put('/things/vacuum/actions/state', async (req, res, next) => {
    try {
      let clean = req.body.clean
      console.log(clean)
      // let result = await vacuum.clean()
      if (clean === false) {

      }
      let result = 'executed'
      console.log(result)
      res.send(result)
    } catch (e) {
      console.log(e)
      res.send(e)
    }
    next()
  })
  server.put('/things/vacuum/actions/clean', async (req, res, next) => {
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
  server.put('/things/vacuum/actions/stop', async (req, res, next) => {
    try {
      let result = await vacuum.stop() // TODO: This doesnt even work
      console.log(result)
      res.send(result)
    } catch (e) {
      console.log(e)
      res.send(e)
    }
    next()
  })
  server.put('/things/vacuum/actions/dock', async (req, res, next) => {
    try {
      let result = await vacuum.dock() // TODO: This doesnt even work
      console.log(result)
      res.send(result)
    } catch (e) {
      console.log(e)
      res.send(e)
    }
    next()
  })
}

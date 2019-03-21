module.exports = (server, vacuum) => {
  server.post('/things/vacuum/actions/clean', async (req, res, next) => {
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
  server.post('/things/vacuum/actions/stop', async (req, res, next) => {
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

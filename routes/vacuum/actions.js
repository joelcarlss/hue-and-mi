module.exports = (server, vacuum) => {
  server.put('/things/vacuum/actions/state', async (req, res, next) => {
    let result
    try {
      let clean = req.body.clean
      let dock = req.body.dock
      console.log(clean)
      // let result = await vacuum.clean()
      if (clean === false) {
        result = await vacuum.stop()
      }
      if (clean) {
        result = await vacuum.clean()
      }
      if (dock) {
        result = await vacuum.dock()
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

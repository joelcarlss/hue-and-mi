module.exports = (server, vacuum) => {
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

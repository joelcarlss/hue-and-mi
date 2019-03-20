let Vacuum = require('./model/Vacuum')
let Hue = require('./model/Hue')

async function startVacuum () {
  try {
    let vacuum = new Vacuum()
    await vacuum.connect()
    console.log(await vacuum.batteryLevel())
  } catch (e) {
    console.log(e)
  }
}

async function startHue () {
  try {
    let hue = new Hue()
    console.log(await hue.connect())
  } catch (e) {
    console.log(e)
  }
}
startHue()

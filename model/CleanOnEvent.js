class CleanOnEvent {
  constructor (name, fromHour, toHour, daysSinceLast, hue, vacuum) {
    this.name = name
    this.fromHour = fromHour
    this.toHour = toHour
    this.daysSinceLast = daysSinceLast
    this.noMovement = 3
    this.pollingTime = { h: 0, m: 30 }
    this.hue = hue
    this.vacuum = vacuum
    this.runEvent()
  }
  async runEvent () {
    console.log(this.getTimerTime())
    console.log(await this.getDaysSinceLastClean())
  }
  // Returns time for next poll
  // returns object: h: hour, m: minute
  getTimerTime () {
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    if (h >= this.fromHour && h < this.toHour) {
      return this.pollingTime
    } else {
      let hoursLeft = (24 - h + this.fromHour)
      let minutesLeft = (60 - m)
      return { h: hoursLeft, m: minutesLeft }
    }
  }
  execute () {
    this.vacuum.clean()
  }
  async isRequirementsFullfilled () {
    let lastMove = this.getHourSinceLastMovement()
    let lastClean = this.getDaysSinceLastClean()
    return (lastMove >= this.noMovement && lastClean >= this.getDaysSinceLastClean())
  }
  async getHourSinceLastMovement () {
    let sensor = await this.hue.getLastActiveSensor()
    let lastMovement = new Date(sensor.state.lastupdated).getTime() + (1 * 60 * 60 * 1000)
    let currentTime = new Date().getTime()
    let differenceTimestamp = currentTime - lastMovement
    let differenceHours = Math.floor(differenceTimestamp / 1000 / 60 / 60)

    return differenceHours
  }
  async getDaysSinceLastClean () {
    let lastClean = await this.getLastCleanSimulation()
    let lastCleanTime = new Date(lastClean).getTime() + (1 * 60 * 60 * 1000)
    let currentTime = new Date().getTime()
    let differenceTimestamp = currentTime - lastCleanTime
    let differenceDays = Math.round(differenceTimestamp / 1000 / 60 / 60 / 24)
    return differenceDays
  }
  getLastCleanSimulation () {
    return '2019-03-20T09:36:57.000Z'
  }
}

module.exports = CleanOnEvent

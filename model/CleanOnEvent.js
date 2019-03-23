class CleanOnEvent {
  constructor (name, fromHour, toHour, daysSinceLast, noMovement, hue, vacuum) {
    this.name = name
    this.fromHour = fromHour
    this.toHour = toHour
    this.daysSinceLast = daysSinceLast
    this.noMovement = noMovement
    this.pollingTime = { h: 0, m: 30 }
    this.timer = false
    this.hue = hue
    this.vacuum = vacuum
    this.runEvent()
  }

  // Returns time for next poll
  // returns object: h: hour, m: minute
  getMillisecondsToNextPoll () {
    let {h, m} = this.getTimerTime()
    let hours = (h * 60 * 60 * 1000)
    let minutes = (m * 60 * 1000)
    return hours + minutes
  }
  getTimerTime () {
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    if (h >= this.fromHour && h < this.toHour) {
      return this.pollingTime
    } else {
      let minutesLeft = (60 - m)
      let hoursLeft = (24 - h + this.fromHour)
      if (minutesLeft > 0) {
        hoursLeft -= 1
      }
      return { h: hoursLeft, m: minutesLeft }
    }
  }
  async execute () {
    let result = await this.vacuum.clean()
    return result
  }
  async isRequirementsFullfilled () {
    let lastMove = await this.getHourSinceLastMovement()
    let lastClean = await this.getDaysSinceLastClean()
    return (lastMove >= this.noMovement && lastClean >= this.daysSinceLast)
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
    let lastClean = await this.vacuum.getLastClean()
    let lastCleanTime = new Date(lastClean).getTime() + (1 * 60 * 60 * 1000)
    let currentTime = new Date().getTime()
    let differenceTimestamp = currentTime - lastCleanTime
    let differenceDays = Math.round(differenceTimestamp / 1000 / 60 / 60 / 24)
    return differenceDays
  }
  startTimer () {
    this.timer = setTimeout(() => {
      this.runEvent()
    }, this.getMillisecondsToNextPoll())
    // }, 1000)
  }
  stopTimer () {
    if (this.timer) {
      console.log('topped')
      clearTimeout(this.timer)
    }
  }
  async runEvent () {
    if (await this.isRequirementsFullfilled()) {
      console.log('I GO')
      this.execute()
    } else {
      console.log(`I'll check again in ${this.getTimerTime().h} hours and ${this.getTimerTime().m} minutes`)
    }
    this.startTimer()
  }
}

module.exports = CleanOnEvent

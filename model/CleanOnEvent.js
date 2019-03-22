class CleanOnEvent {
  constructor (name, fromHour, toHour, daysSinceLast) {
    this.name = name
    this.fromHour = fromHour
    this.toHour = toHour
    this.daysSinceLast = daysSinceLast
    this.runEvent()
  }
  runEvent () {
    console.log(this.name)
  }
}

module.exports = CleanOnEvent

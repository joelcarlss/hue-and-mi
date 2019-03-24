const database = require('./database')
const CleanOnEvent = require('./CleanOnEvent')

class EventHandler {
    constructor (hue, vacuum) {
        this.hue = hue
        this.vacuum = vacuum
        this.runningEvents = []
    }
    start () {
      this.startCleanOnEvent()
    }
    async startCleanOnEvent () {
        let events = await database.getEvents()
        this.runningEvents = []
        events.forEach(event => {
            let {name, fromHour, toHour, daysSinceLast, noMovement} = event
            this.runningEvents.push(new CleanOnEvent(name, fromHour, toHour, daysSinceLast, noMovement, this.hue, this.vacuum))
        })
        console.log(`${this.runningEvents.length} events started`)
    }
    async stopAllEvents () {
        this.runningEvents.forEach(element => {
            element.stopTimer()
        });
        console.log(`${this.runningEvents.length} events were stopped`)
    }
    async restartEvents () {
        this.stopAllEvents()
        .then(this.startCleanOnEvent())
    }
  }
  
  module.exports = EventHandler
  
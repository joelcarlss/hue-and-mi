const database = require('./database')
const CleanOnEvent = require('./CleanOnEvent')

class EventHandler {
    constructor (hue, vacuum) {
        this.hue = hue
        this.vacuum = vacuum
    }
    start () {
      this.handleCleanOnEvent()
    }
    async handleCleanOnEvent () {
        let events = await database.getEvents()
        let runningEvents = []
        events.forEach(event => {
            let {name, fromHour, toHour, daysSinceLast} = event
            runningEvents.push(new CleanOnEvent(name, fromHour, toHour, daysSinceLast, this.hue, this.vacuum))
        })
    }
  }
  
  module.exports = EventHandler
  
require('dotenv').config()
let miio = require('miio')
let utils = require('../utils/vacuum')

class Vacuum {
  constructor () {
    this.device = false
  }
  async connect () {
    try {
      this.device = await miio.device({ address: process.env.VACUUM_IP, token: process.env.VACUUM_TOKEN })
      return this.device
    } catch (e) {
      setTimeout(() => this.connect(), 3000, clearTimeout())
    }
  }
  async connectionAttempt () {
    this.device = await miio.device({ address: process.env.VACUUM_IP, token: process.env.VACUUM_TOKEN })
      .then(call => console.log(call))
    return this.device
  }
  async getAbout () {
    console.log('getAbout')
    console.log(await this.device.model())
  }
  async getState () {
    try {
      const result = await this.device.state()
      return result
    } catch (e) {
      return e
    }
  }
  async batteryLevel () {
    if (this.device.matches('cap:battery-level')) {
      let level = await this.device.batteryLevel()
      return level
    }
  }
  async isCleaning () {
    const isCleaning = await this.device.cleaning()
    return isCleaning
  }
  async getCleaningHistory () {
    const result = await this.device.getHistory()
    return result
  }
  async getLastClean () {
    const result = await this.getCleaningHistory()
    let highestTime = new Date(1970)
    result.days.forEach(element => {
      if (highestTime < element) {
        let time = new Date(element)
        highestTime = time
      }
    })
    return highestTime
  }
  async clean () {
    const result = await this.device.call('app_start', [], {
      refresh: [ 'state' ],
      refreshDelay: 1000
    }).then(result => utils.checkValue(result))
    return result
  }
  async stop () {
    const result = await this.device.call('app_stop', [], {
      refresh: [ 'state' ]
    }).then(result => utils.checkValue(result))
    return result
  }
  async dock () {
    this.device.call('app_stop', [])
      .then(console.log)
      .then(() => this.device.call('app_charge', [], {
        refresh: [ 'state' ],
        refreshDelay: 1000
      }))
      .then(result => utils.checkValue(result))
  }
}

module.exports = Vacuum

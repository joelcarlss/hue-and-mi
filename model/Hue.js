require('dotenv').config()
let hue = require('node-hue-api')
var HueApi = require('node-hue-api').HueApi
var hueApi = new HueApi()

class Hue {
  constructor () {
    this.userDescription = 'Home built project in node'
    this.username = process.env.HUE_TOKEN
    this.host = process.env.HUE_IP
    this.device = false
  }
  async connect () {
    this.api = new HueApi(this.host, this.username)
    let description = await this.getDescription()
    return 'Connected to: ' + description.name
  }
  async findBridges () {
    try {
      let bridges = await hue.upnpSearch()
      return bridges
    } catch (e) {
      console.log(e)
    }
  }
  // Requires bridge button to be pressed
  // Returns username
  async registerUser (ip) {
    let result = await hueApi.registerUser(ip, this.userDescription)
    this.username = result
    return result
  }
  async getDescription () {
    let result = this.api.getDescription()
    return result
  }
  async getUsers () {
    let result = this.api.registeredUsers()
    return result
  }
  async getFullState () {
    let result = this.api.fullState()
    return result
  }
  // Returns true if user is deleted
  async deleteUser (username) {
    let result = this.api.deleteUser(username)
    return result
  }
  async getLights (username) {
    let {lights} = this.api.lights()
    return lights
  }
  async getTemperatureSensors () {
    let arr = []
    let sensors = await this.getSensors()
    sensors.forEach(element => {
      if (element.type === 'ZLLTemperature') {
        arr.push(element)
      }
    })
    return arr
  }
  async getDaylightSensors () {
    let arr = []
    let sensors = await this.getSensors()
    sensors.forEach(element => {
      if (element.type === 'ZLLLightLevel') {
        arr.push(element)
      }
    })
    return arr
  }
  async getLastActiveSensor () {
    let obj = {}
    let highestNumber = 0
    let sensors = await this.getInteractionSensors()
    sensors.forEach(element => {
      let lastUpdated = element.state.lastupdated
      var string = lastUpdated.replace(/-/g, '').replace(/:/g, '').replace(/[TZ]/g, '')
      let number = parseInt(string)
      if (number > highestNumber) {
        highestNumber = number
        obj = element
      }
    })
    return obj
  }
  async getInteractionSensors () {
    let switches = await this.getSwitches()
    let sensors = await this.getMovementSensors()
    let result = switches.concat(sensors)
    return result
  }
  async getSwitches () {
    let arr = []
    let sensors = await this.getSensors()
    sensors.forEach(element => {
      if (element.state.buttonevent) {
        arr.push(element)
      }
    })
    return arr
  }
  async getMovementSensors () {
    let arr = []
    let sensors = await this.getSensors()
    sensors.forEach(element => {
      if (element.type === 'ZLLPresence') {
        arr.push(element)
      }
    })
    return arr
  }
  async getSensors () {
    let result = await this.api.getSensors()
    let sensors = this.filterSensors(result.sensors)
    return sensors
  }
  filterSensors (sensors) {
    let arr = []
    sensors.forEach(element => {
      if (element.manufacturername === 'Philips') {
        if (element.config.reachable === true) {
          if (element.config.battery) {
            arr.push(element)
          }
        }
      }
    })
    return arr
  }
}

module.exports = Hue

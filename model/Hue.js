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

  // Gateway functionality
  async connect () {
    this.api = new HueApi(this.host, this.username)
    let description = await this.getDescription()
    return 'Connected to: ' + description.name
  }

  async getDescription () {
    let result = this.api.getDescription()
    return result
  }

  async findBridges () {
    try {
      let bridges = await hue.upnpSearch()
      return bridges
    } catch (e) {
      console.log(e)
    }
  }

  // User

  // Requires bridge button to be pressed
  // Returns username
  async registerUser (ip) {
    let result = await hueApi.registerUser(ip, this.userDescription)
    this.username = result
    return result
  }
  async getUsers () {
    let result = this.api.registeredUsers()
    return result
  }
  // Returns true if user is deleted
  async deleteUser (username) {
    let result = this.api.deleteUser(username)
    return result
  }

  // Returns state for every unit
  async getFullState () {
    let result = this.api.fullState()
    return result
  }

  // Returns all lights
  async getLights () {
    let {lights} = await this.api.lights()
    return lights
  }

  // Single Light
  async getLightStateById (id) {
    let result = await this.api.lightStatus(id)
    return result
  }

  async setLightState (id, bool) {
    let createState = hue.lightState.create()
    let state = bool ? createState.turnOn() : createState.turnOff()
    let result = await this.api.setLightState(id, state)
    return result
  }

  // Uses percentage
  async setBrightness (id, percentage) {
    let state = hue.lightState.create().brightness(percentage)
    let result = await this.api.setLightState(id, state)
    if (result) {
      result = {value: percentage}
    }
    return result
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

  // Rooms

  async getRooms () {
    let result = await this.api.groups()
    result = result.filter(room => room.type === 'Room')
    return result
  }
  async getRoomById (id) {
    let result = await this.api.getGroup(id)
    return result
  }
  async setRoomStateById (id, bool) {
    let createState = hue.lightState.create()
    let state = bool ? createState.turnOn() : createState.turnOff()
    let result = await this.api.setGroupLightState(id, state)
    return result
  }
}

module.exports = Hue

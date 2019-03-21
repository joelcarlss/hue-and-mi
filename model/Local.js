class Local {
  constructor () {
    this.device = false
  }
  getAboutData () {
    return {
      name: 'My WoT Raspberry PI',
      description: 'A WoT project with Raspberry PI connecting Philips Hue with Xiaomi S50 Vacuum.',
      manufacturer: 'Raspberry Pi',
      model: 'TODO: Find model',
      image: 'TODO: Real picture http://devices.webofthings.io:9090/snapshot.cgi?user=snapshots&pwd=4MXfTSr0gH',
      tags: [
        'raspberry',
        'pi',
        'hue',
        'philips',
        'philips hue',
        'xiaomi',
        'mi',
        'smart home',
        'IoT',
        'WoT'
      ]
    }
  }
}

module.exports = Local

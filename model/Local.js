class Local {
  constructor () {
    this.device = false
  }
  getAboutData () {
    return {
      name: 'My WoT Raspberry PI',
      description: 'A WoT project with Raspberry PI connecting Philips Hue with Xiaomi S50 Vacuum.',
      manufacturer: 'Raspberry Pi',
      model: 'Raspberry Pi 3',
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

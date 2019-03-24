require('dotenv').config()
module.exports = (id = ':id') => {
  let url = 'http://' + process.env.URL
  const hue = {
    link: url + '/things/hue',
    method: ['GET'],
    model: {
      link: url + '/things/hue/model',
      method: ['GET']
    },
    actions: {
      link: url + '/things/hue/actions',
      method: ['GET']
    },
    properties: {
      link: url + '/things/hue/properties',
      method: ['GET'],
      lightStates: {
        link: url + '/things/hue/properties/lightStates',
        method: ['GET']
      }
    },
    lights: {
      link: url + '/things/hue/lights',
      method: ['GET'],
      properties: {
        link: url + '/things/hue/lights/properties',
        method: ['GET']
      },
      id: {
        link: url + '/things/hue/lights/' + id,
        method: ['GET'],
        model: {
          link: url + '/things/hue/lights/' + id + '/model',
          method: ['GET']
        },
        actions: {
          link: url + '/things/hue/lights/' + id + '/actions',
          method: ['GET'],
          state: {
            link: url + '/things/hue/lights/' + id + '/actions/state',
            method: ['PUT'],
            body: {
              lightState: 'bool',
              brightness: 'int',
              color: {
                r: 'string',
                g: 'string',
                b: 'string'
              }
            }
          }
        },
        properties: {
          link: url + '/things/hue/lights/' + id + '/properties',
          method: ['GET']
        }
      }
    },
    rooms: {
      link: url + '/things/hue/rooms',
      method: ['GET'],
      properties: {
        link: url + '/things/hue/rooms/properties',
        method: ['GET']
      },
      id: {
        link: url + '/things/hue/rooms/' + id,
        method: ['GET'],
        model: {
          link: url + '/things/hue/rooms/' + id + '/model',
          method: ['GET']
        },
        actions: {
          link: url + '/things/hue/rooms/' + id + '/actions',
          method: ['GET'],
          state: {
            link: url + '/things/hue/rooms/' + id + '/actions/state',
            method: ['GET'],
            body: {
              lightState: 'bool',
              brightness: 'int',
              color: {
                r: 'string',
                g: 'string',
                b: 'string'
              }
            }
          }
        },
        properties: {
          link: url + '/things/hue/rooms/' + id + '/properties',
          method: ['GET']
        }
      }
    },
    sensors: {
      link: url + '/things/hue/sensors',
      method: ['GET'],
      properties: {
        link: url + '/things/hue/sensors/properties',
        method: ['GET']
      },
      id: {
        link: url + '/things/hue/sensors/' + id,
        method: ['GET'],
        model: {
          link: url + '/things/hue/sensors/' + id + '/model',
          method: ['GET']
        },
        properties: {
          link: url + '/things/hue/sensors/' + id + '/properties',
          method: ['GET']
        }
      }
    }
  }

  const vacuum = {
    link: url + '/things/vacuum',
    method: ['GET'],
    model: {
      link: url + '/things/vacuum/model',
      method: ['GET']
    },
    actions: {
      link: url + '/things/vacuum/actions',
      method: ['GET'],
      state: {
        link: url + '/things/vacuum/actions/state',
        method: ['PUT'],
        body: {
          cleanState: 'bool',
          dockState: 'bool'
        }
      }
    },
    properties: {
      link: url + '/things/vacuum/properties',
      method: ['GET'],
      batteryLevel: {
        link: url + '/things/vacuum/properties/batteryLevel',
        method: ['GET']
      },
      cleanState: {
        link: url + '/things/vacuum/properties/cleanState',
        method: ['GET']
      },
      cleanLog: {
        link: url + '/things/vacuum/properties/cleanLog',
        method: ['GET']
      }
    }
  }

  const home = {
    link: url + '/',
    method: ['GET'],
    model: {
      link: url + '/model',
      method: ['GET']
    },
    actions: {
      link: url + '/actions',
      method: ['GET'],
      autoClean: {
        link: url + '/actions/autoClean',
        method: ['POST, GET'],
        body: {
          name: 'string',
          fronHour: 'enum',
          toHour: 'enum',
          daysSinceLast: 'enum',
          noMovement: 'enum'
        },
        id: {
          link: url + '/actions/autoClean/' + id,
          method: ['DEL']
        }
      }
    },
    properties: {
      link: url + '/properties',
      method: ['GET'],
      autoClean: {
        link: url + '/properties/autoClean',
        method: ['GET']
      }
    },
    things: {
      vacuum,
      hue
    }
  }
  return home
}

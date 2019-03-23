exports.getLinks = (url) => {
  const hue = {
    model: {
      link: url + '/things/hue/model',
      method: ['GET']
    },
    actions: {
    },
    properties: {},
    lights: {},
    rooms: {}
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
      battery: {
        link: url + '/things/vacuum/properties/battery',
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
    model: {
      link: url + '/model',
      method: ['GET']
    },
    actions: {
      link: url + '/actions',
      method: ['GET'],
      autoClean: {
        link: url + '/actions/autoClean',
        method: ['POST'],
        body: {
          name: 'string',
          fronHour: 'integer',
          toHour: 'integer',
          daysSinceLast: 'integer',
          noMovement: 'integer'
        },
        id: {
          link: url + '/actions/autoClean/:id',
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
  return {
    home,
    hue,
    vacuum
  }
}

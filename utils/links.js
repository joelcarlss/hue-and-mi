const getLinks = (url) => {
  const hue = {
    model: {
      link: url + '/things/hue/model',
      method: 'GET'
    },
    actions: {
    },
    properties: {},
    lights: {},
    rooms: {}
  }

  const vacuum = {
    model: {
      link: url + '/things/vacuum/model',
      method: 'GET'
    },
    actions: {
      link: url + '/things/vacuum/actions',
      method: 'GET',
      state: {
        link: url + '/things/vacuum/actions/state',
        method: 'PUT',
        body: {
          clean: 'bool',
          dock: 'bool'
        }
      }
    },
    properties: {
      link: url + '/things/vacuum/properties',
      method: 'GET',
      battery: {
        link: url + '/things/vacuum/properties/battery',
        method: 'GET'
      },
      cleaning: {
        link: url + '/things/vacuum/properties/cleaning',
        method: 'GET'
      },
      charging: {
        link: url + '/things/vacuum/properties/charging',
        method: 'GET'
      }
    }
  }

  const home = {
    model: {},
    actions: {},
    properties: {},
    things: {
      vacuum: {},
      hue: {}
    }
  }
  return home
}

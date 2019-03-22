const getLinks = (url) => {
  const hue = {
    model: {},
    actions: {},
    properties: {},
    things: {
      vacuum: {},
      hue: {}
    }
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
    properties: {},
    things: {
      vacuum: {},
      hue: {}
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

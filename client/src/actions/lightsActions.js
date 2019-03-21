const axios = require('axios')

export const toggelAllLightsInRoom = (id, bool) => {
  // Toggel all lights in room
  // true or false
}

export const toggelLightInRoom = (id, bool) => {
  let params = new URLSearchParams()

  params.append('state', true)

  axios.post(`things/hue/lights/${id}/actions/state`, params)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const getLampState = (id) => {

  axios.get(`things/hue/lights/${id}/properties`)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const adjustBrightnessInRoom = (id, procent) => {
  // adjust brigthness in room per %
}

export const adjustLigthBrigthness = (id, procent) => {
  // adjust single light
}

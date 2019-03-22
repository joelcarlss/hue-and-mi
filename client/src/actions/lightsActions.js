const axios = require('axios')

/*
  Toggel all ligths in room by ID
*/

export const toggelAllLightsInRoom = (id, bool) => {
  let params = new URLSearchParams()

  params.append('state', bool)

  axios.put(`things/hue/rooms/${id}/actions/state`, params)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}

/*
  Toggel singel light
*/

export const toggelLightInRoom = (id, bool) => {
  let params = new URLSearchParams()

  console.log(bool)
  params.append('lightState', bool)

  axios.put(`things/hue/lights/${id}/actions/state`, params)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}

/*
  Get single lights properties
*/

export const getLampState = async (id) => {
  try {
    let { data } = await axios.get(`things/hue/lights/${id}/properties`)
    return data
  } catch (error) {
  }
}

/*
  Get a single rooms current properties
*/

export const getRoomState = async (id) => {
  try {
    let { data } = await axios.get(`things/hue/rooms/${id}/properties`)
    return data
  } catch (error) {
  }
}

/*
  Adjust all lights brightness in a room
*/

export const adjustBrightnessInRoom = (procent, roomID) => {
  let params = new URLSearchParams()

  params.append('brightness', procent)

  axios.put(`things/hue/rooms/${roomID}/actions/state`, params)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}

/*
  Adjust single lights brightness
*/

export const adjustLigthBrigthness = (procent, lightID) => {
  let params = new URLSearchParams()

  params.append('brightness', procent)

  axios.put(`things/hue/lights/${lightID}/actions/state`, params)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}

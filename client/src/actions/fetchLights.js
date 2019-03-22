const axios = require('axios')

/*
  Fetch all lights
*/

export const geAllLights = (value) => {
  axios.get('/things/hue/lights/things')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    .then(() => {
    })
}

/*
  Fetch singel light
*/

export const getSingleLight = (id) => {
  // return single room
}

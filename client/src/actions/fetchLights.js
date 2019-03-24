const axios = require('axios')

/*
  Fetch all lights
*/

export const geAllLights = (value) => {
  axios.get('/things/hue/lights/properties/state')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    .then(() => {
    })
}

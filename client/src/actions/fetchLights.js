const axios = require('axios')

export const geAllLights = (value) => {
  axios.get('/things/hue/lights/things')
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
    .then(function () {
    })
}

export const getSingleLight = (id) => {
  // return single room
}

const axios = require('axios')

export const getLights = (value) => {
    axios.get('things/hue/model')
        .then(function (response) {
            // handle success
            console.log(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
        })
        .then(function () {
            // always executed
        })
}

export const getSingleLight = (id) => {
    // return single room 
}
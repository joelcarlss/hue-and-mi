const axios = require('axios')

export const getRooms = (value) => {
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

export const getSingleRoom = (id) => {
    // return single room 
}
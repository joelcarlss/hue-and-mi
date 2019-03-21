const axios = require('axios');

export const handleLights = (value) => {

    // Make a request for a user with a given ID
    axios.get('http://localhost:8080')
        .then(function (response) {
            // handle success
            console.log(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
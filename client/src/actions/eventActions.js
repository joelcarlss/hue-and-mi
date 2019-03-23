const axios = require('axios')

export const addEvent = (name, fromHour, toHour, daysSinceLast, noMovement) => {
  let params = new URLSearchParams()

  params.append('name', name)
  params.append('fromHour', fromHour)
  params.append('toHour', toHour)
  params.append('daysSinceLast', daysSinceLast)
  params.append('noMovement', daysSinceLast)

  axios.post(`actions/autoClean`, params)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}



export const deleteEvent = (id) => {

  axios.delete(`actions/autoClean/${id}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}

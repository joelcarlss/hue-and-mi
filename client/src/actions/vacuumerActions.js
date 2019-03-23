const axios = require('axios')

export const turnOffVacuumerAction = (bool) => {
  let params = new URLSearchParams()

  params.append('cleanState', bool)

  axios.put(`things/vacuum/actions/state`, params)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}

export const turnOnVacuumerAction = (bool) => {
  let params = new URLSearchParams()

  params.append('cleanState', bool)

  axios.put(`things/vacuum/actions/state`, params)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}


export const dockVacummerAction = (bool) => {
  let params = new URLSearchParams()

  params.append('dockState', bool)

  axios.put(`things/vacuum/actions/state`, params)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('an error occurred : ' + error)
    })
}

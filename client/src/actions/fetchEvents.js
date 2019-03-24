const axios = require('axios')

/*
  Fetch all rooms
*/

export const getEvents = async (value) => {
  try {
    let { data } = await axios.get('properties/autoClean')

    return data.response
  } catch (e) {
    console.log(e)
  }
}

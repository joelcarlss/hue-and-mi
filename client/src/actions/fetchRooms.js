const axios = require('axios')

/*
  Fetch all rooms
*/

export const getRooms = async (value) => {
  try {
    let { data } = await axios.get('things/hue/rooms')

    return data
  } catch (e) {
    console.log(e)
  }
}

/*
  Fetch singel room
*/

export const getSingleRoom = (id) => {
  // return single room
}

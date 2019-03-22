const axios = require('axios')

/*
  Fetch all rooms
*/

export const getRooms = async (value) => {
  try {
    let { data } = await axios.get('things/hue/rooms/properties')

    return data
  } catch (e) {
    console.log(e)
  }
}


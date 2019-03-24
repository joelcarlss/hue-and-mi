const axios = require('axios')

/*
  Fetch all rooms
*/

export const getRooms = async (value) => {
  try {
    let data = await axios.get('things/hue/rooms/properties/state')

    return data.data.response
  } catch (e) {
    console.log(e)
  }
}

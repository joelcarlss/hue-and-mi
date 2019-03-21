const axios = require('axios')

export const getRooms = async (value) => {
  try {
    let { data } = await axios.get('things/hue/rooms')

    return data
  } catch (e) {
    console.log(e)
  }
}

export const getSingleRoom = (id) => {
  // return single room
}

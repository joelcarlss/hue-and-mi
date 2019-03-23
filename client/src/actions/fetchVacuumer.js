const axios = require('axios')

/*
  Fetch vacuumer properties
*/

export const getVacuumerStatus = async () => {
  try {
    let { data } = await axios.get('things/vacuum/properties')

    console.log(data)
    return data
  } catch (e) {
    console.log(e)
  }
}

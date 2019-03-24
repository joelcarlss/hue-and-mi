const axios = require('axios')

/*
  Fetch vacuumer properties
*/

export const getVacuumerStatus = async () => {
  try {
    let { data } = await axios.get('things/vacuum/properties')
    return data
  } catch (e) {
    console.log(e)
  }
}

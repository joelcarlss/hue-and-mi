const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/smarthome')

exports.asd = () => {
  console.log(new Date(0, 0, 0, 12))
}
exports.createEvent = (name, fromHour, toHour, daysSinceLast) => {
  const User = sequelize.define('user', {
    username: Sequelize.STRING
  })

  sequelize.sync()
    .then(() => User.create({
      username: 'janedoe'
    }))
    .then(jane => {
      console.log(jane.toJSON())
    })
}

// exports.createEvent = (name, fromHour, toHour, daysSinceLast) => {
//   const Event = sequelize.define('event', {
//     name: Sequelize.STRING,
//     fromHour: Sequelize.INTEGER,
//     toHour: Sequelize.INTEGER,
//     daysSinceLast: Sequelize.INTEGER
//   })

//   return sequelize.sync()
//     .then(() => Event.create({
//       name,
//       fromHour,
//       toHour,
//       daysSinceLast

//     }))
//     .then(result => result.toJSON())
//     .catch(console.log)
// }

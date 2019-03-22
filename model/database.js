const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/smarthome')

exports.asd = () => {
  console.log(new Date(0, 0, 0, 12))
}

const AutoClean = sequelize.define('autoClean', {
  name: Sequelize.STRING,
  fromHour: Sequelize.INTEGER,
  toHour: Sequelize.INTEGER,
  daysSinceLast: Sequelize.INTEGER
})

exports.createEvent = (name, fromHour, toHour, daysSinceLast) => {
  return sequelize.sync()
    .then(() => AutoClean.create({
      name,
      fromHour,
      toHour,
      daysSinceLast

    }))
    .then(result => result.toJSON())
    .catch(console.log)
}

exports.getEvents = (name, fromHour, toHour, daysSinceLast) => {
  return sequelize.sync()
    .then(() => AutoClean.findAll({
      attributes: ['name', 'fromHour', 'toHour', 'saysSinceLast']
    }))
    .then(result => result.toJSON())
    .catch(console.log)
}

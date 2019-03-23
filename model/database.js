const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/smarthome')

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

exports.getEvents = () => {
  return sequelize.sync()
    .then(() => AutoClean.findAll({
      attributes: ['name', 'fromHour', 'toHour', 'daysSinceLast']
    }))
    .then(result => {
      return result.map(({name, fromHour, toHour, daysSinceLast}) => ({name, fromHour, toHour, daysSinceLast}))
    })
    .catch(console.log)
}

const Sequelize = require('sequelize')

// const sequelize = new Sequelize('mariadb://@162.168.0.25:3306/smarthome')
const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/smarthome')

const AutoClean = sequelize.define('autoClean', {
  name: Sequelize.STRING,
  fromHour: Sequelize.INTEGER,
  toHour: Sequelize.INTEGER,
  daysSinceLast: Sequelize.INTEGER,
  noMovement: Sequelize.INTEGER
})

exports.createEvent = (name, fromHour, toHour, daysSinceLast, noMovement) => {
  return sequelize.sync()
    .then(() => AutoClean.create({
      name,
      fromHour,
      toHour,
      daysSinceLast,
      noMovement

    }))
    .then(result => result.toJSON())
    .catch(console.log)
}

exports.getEvents = () => {
  return sequelize.sync()
    .then(() => AutoClean.findAll({
      attributes: ['id', 'name', 'fromHour', 'toHour', 'daysSinceLast', 'noMovement']
    }))
    .then(result => result)
    .catch(console.log)
}

exports.deleteEvent = (id) => {
  return sequelize.sync()
    .then(() => AutoClean.destroy({
      where: {
        id: id
      }}))
  .catch(console.log)
}

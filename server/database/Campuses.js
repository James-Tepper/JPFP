const Sequelize = require('sequelize')
const db = require('/db.js')

const Campus = db.define("Campus", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  campusUrl: {
    type: Sequelize.STRING,
    defaultValue: "default-campus.jpg"
  }
});

module.exports = Campus

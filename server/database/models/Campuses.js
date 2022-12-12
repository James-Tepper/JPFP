const Sequelize = require('sequelize')
const db = require('../db.js')

const Campus = db.define("Campus", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    unique: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT('long'),
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "default-campus.jpg"
  }
});


module.exports = Campus

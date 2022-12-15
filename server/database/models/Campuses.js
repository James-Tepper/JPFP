const { DataTypes } = require('sequelize')
const db = require('../db.js')

const Campus = db.define("campus", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
    notEmpty: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.TEXT,
    defaultValue: "default-campus.jpg"
  }
});


module.exports = Campus

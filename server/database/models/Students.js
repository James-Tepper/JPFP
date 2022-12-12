const {Sequelize, DataTypes} = require('sequelize')
const db = require('../db.js')

const Student = db.define("student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  imageUrl: {
    type: DataTypes.TEXT,
    defaultValue: "default-student.jpg",
    allowNull: false,
  },
  gpa: {
    type: DataTypes.DECIMAL(2, 1),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
})


module.exports = Student

const {Sequelize, DataTypes} = require('sequelize')
const db = require('../db.js')

const Student = db.define("student", {
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
    unique: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  imageUrl: {
    type: DataTypes.TEXT,
    defaultValue: "default-student.jpg",
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

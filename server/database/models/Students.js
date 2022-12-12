const Sequelize = require('sequelize')
const db = require('../db.js')

const Student = db.define("Student", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "default-student.jpg"
  },
  gpa: {
    type: Sequelize.DECIMAL(3, 2),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
})


module.exports = Student

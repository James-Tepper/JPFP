const { DataTypes } = require('sequelize');
const { Url } = require('url');
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
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
})


module.exports = Student

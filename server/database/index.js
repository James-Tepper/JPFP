const db = require('./db')
const Student = require("./Students");
const Campus = require("./Campuses");

Student.belongsTo(Campus);
Campus.hasMany(Student);

const data = {
  db,
  Student,
  Campus,
};

module.exports = data;


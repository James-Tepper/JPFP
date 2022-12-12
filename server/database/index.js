const db = require('./db')
const Student = require("./models/Students");
const Campus = require("./models/Campuses");

Student.belongsTo(Campus);
Campus.hasMany(Student);

db.sync({ force: true })

const data = {
  db,
  Student,
  Campus,
};

module.exports = data;


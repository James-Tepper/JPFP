const db = require('./db')
const Student = require("./models/Students");
const Campus = require("./models/Campuses");

Student.belongsTo(Campus);
Campus.hasMany(Student);

console.log("Database synced!");


module.exports = {db, Student, Campus}


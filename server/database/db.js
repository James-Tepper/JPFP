const Sequelize = require('sequelize')
const db = new Sequelize( process.env.DATABASE_URL || "postgres://localhost:5432/acme_schools_db", {
  logging: false,
});

const authenticate = async () => {
  try {
    console.log("Connection has been established");
  } catch (err) {
    console.log("ERROR:", err);
  }
};

authenticate();

module.exports = db;

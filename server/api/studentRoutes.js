const { Student, Campus } = require("../database/index.js");
const app = require("express");

const router = app.Router();

router.get("/students", async (req, res, next) => {
  try {
    const response = await Student.findAll();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.get("/students:id", async (req, res, next) => {
  try {
    const response = await Student.findByPk(req.params.id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});


module.exports = router;

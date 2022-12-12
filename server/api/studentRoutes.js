const { Student, Campus } = require("../database/index");
const app = require("express");

const router = app.Router();

// Campus Route Middleware
router.use("/students");

router.get("/", async (req, res, next) => {
  try {
    const response = await Student.findAll();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const response = await Student.findByPk(req.params.id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

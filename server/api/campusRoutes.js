const { Student, Campus } = require("../database/index");
const app = require("express");

const router = app.Router();

//get all campuses
router.get("/", async (req, res, next) => {
  try {
    const response = await Campus.findAll();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

//get single campus
router.get("/:id", async (req, res, next) => {
  try {
    const response = await Campus.findByPk(req.params.id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

//delete campus
router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Campus.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (err) {
    next(err);
  }
});

//edit campus
router.put("/:id", async (req, res, next) => {
  console.log("req",req.params)
  try {
    const response = await Campus.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (err) {
    next(err);
  }
});

//add campus
router.post("/", async (req, res, next) => {
  try {
    const response = await Campus.create(req.body);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

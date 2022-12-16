const { Student, Campus } = require("../database/index.js");
const app = require("express");

const router = app.Router();


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

router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Student.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(response);
    
  } catch (err) {
    next(err);
  }
  })
  

router.post("/", async (req, res, next) => {
  try {
    const response = await Student.create(req.body);
    res.json(response);
  } catch (err) {
    next(err);
  }
});
    
    
module.exports = router;

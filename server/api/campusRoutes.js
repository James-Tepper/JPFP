const { Student, Campus } = require("../database/index");
const app = require("express");

const router = app.Router();


router.get("/campuses", async (req, res, next) => {
  try {
    const response = await Campus.findAll();
    res.json(response);
  } catch (err) {
    next(err);
  }
});


router.get("/campuses/:id", async (req, res, next) => {
  try {
    const response = await Campus.findByPk(req.params.id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});


router.delete("/campuses/:id", async (req, res, next) => {
  try {
    const response = await Campus.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(response);
    
  } catch (err) {
    next(err);
  }
  })
  
  router.post("/campuses/add", async (req, res, next) => {
    try {
      const response = await Campus.create(req.body);
      res.json(response);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;

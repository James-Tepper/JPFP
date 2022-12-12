const router = require('express').Router();
const { Student , Campus } = require('../database/index');


// Tier 1
router.get('/students', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
})

// Tier 2
router.get('/students/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.json(student);
    
  } catch (err) {
    next(err);
  }
})







module.exports = router;

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
router.get('/students/:id', (req, res) => {
  res.send('Hello World!');
})







module.exports = router;

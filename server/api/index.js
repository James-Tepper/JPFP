const router = require('express').Router()

router.use('/campuses', require('./campusRoutes.js'))
router.use('/students', require('./studentRoutes.js'))

module.exports = router


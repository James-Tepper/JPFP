const { Student, Campus } = require("../database/index");
const app = require("express");

const router = app.Router();

// Campus Route Middleware
router.use("/campuses");

router.get("/", async (req, res, next) => {
  try {
    const response = await Campus.findAll();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

export default router

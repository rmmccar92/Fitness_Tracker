const router = require("express").Router();
const exerciseRoutes = require("./exerciseRoutes");
const statsRoutes = require("./statsRoutes");

router.use("/exercise", exerciseRoutes);
router.use("/stats", statsRoutes);

module.exports = router;

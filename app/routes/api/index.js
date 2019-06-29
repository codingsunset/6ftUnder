const router = require("express").Router();
const recordRoutes = require("./records");

// Book routes
router.use("/records", recordRoutes);

module.exports = router;

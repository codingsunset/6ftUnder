const router = require("express").Router();

// records routes
const recordRoutes = require("./records");
router.use("/records", recordRoutes);

module.exports = router;

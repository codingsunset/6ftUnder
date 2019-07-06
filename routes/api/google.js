const router = require("express").Router();
const gController = require("../../controllers/gController");
// Matches with "/api/google"
router
  .route("/")
  .get(gController.findAll);
module.exports = router;
const router = require("express").Router();
const recordsController = require("../../controllers/recordsController");

// Matches with "/api/records"
router.route("/")
  .get(recordsController.findAll)
  .post(recordsController.create);

// Matches with "/api/records/:id"
router
  .route("/:user_id")
  .get(recordsController.findByUserId)
  .put(recordsController.update)
  .delete(recordsController.remove);

module.exports = router;

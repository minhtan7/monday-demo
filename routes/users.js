var express = require("express");
const userController = require("../controllers/user.controller");
var router = express.Router();

/**
 * @route GET /api/users/me
 * @description Get user profile
 * @access Login required
 */

router.get("/me", userController.getCurrentUser);

module.exports = router;

var express = require("express");
const produuctController = require("../controllers/product.controller");

var router = express.Router();

/**
 * @route GET api/products
 * @description Get all products
 * @access Public
 */
router.get("/", produuctController.getAllProducts);

module.exports = router;

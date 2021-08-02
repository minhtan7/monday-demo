var express = require("express");
var router = express.Router();

/* users endpoint */
const userApi = require("./users");
router.use("/users", userApi);

/* auth endpoint */
const authApi = require("./auth.api");
router.use("/auth", authApi);

// product endpoint
const productApi = require("./product.api");
router.user("/products", productApi);

module.exports = router;

const express = require('express')
const router = express.Router()
const products = require("../../controllers/productController/productController.js")

router.get("/productAll",products)


module.exports = router;
const express = require('express')
const router = express.Router()

const authentication = require("./auth.js")
const AllProduct = require("./product.js")

router.use("/auth" , authentication)
router.use("/allproduct" , AllProduct)

module.exports = router;
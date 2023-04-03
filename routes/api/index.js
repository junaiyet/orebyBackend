const express = require('express')
const router = express.Router()

const authentication = require("./auth.js")

router.use("/auth",authentication)  ///http://localhost:8000/auth


module.exports = router;
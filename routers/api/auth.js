const express = require('express')
const router = express.Router()
const registationController = require("../../controllers/authControllers/registaionController.js")
const loginController = require("../../controllers/authControllers/loginController.js")

router.get("/registation",registationController)
router.get("/login",loginController)

module.exports = router;
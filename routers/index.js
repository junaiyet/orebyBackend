const express = require('express')
const router = express.Router()
const apiRoutes = require("./api")
// require('dotenv').config()

let apiURL = process.env.BASE_URL

router.use(apiURL, apiRoutes)

router.use(apiURL,(req,res)=>
res.json({error:"No Api Found"})
)

module.exports = router;
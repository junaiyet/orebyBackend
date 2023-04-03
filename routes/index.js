const express = require('express')
const router = express.Router()
const apiRoutes = require("./api")


const api = process.env.BASE_URL ///http://localhost:8000/

router.use(api,apiRoutes)

router.use(api,(req,res)=> res.json("No Api Found On This Route"))

module.exports = router;
const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const  dbConnection  = require('./config/db');

const router = require('./routers/index.js')

dbConnection();
app.use(router);


app.listen(8000)
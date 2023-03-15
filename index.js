const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const User = require('./model/user.js')
const  dbConnection  = require('./config/db');
const emailValidation = require('./helpers/emailValidation.js')
const bcrypt = require('bcrypt');
const emailVerification = require('./helpers/emailVerification.js')
const verificationEmailTemplate = require('./helpers/verificationEmailTemplate.js')
// const token = require('./helpers/token.js')
const jwt = require('jsonwebtoken');

dbConnection();
app.post('/registation', async function (req, res) {
  const  {
    firstName,
    lastName,
    email,
    telephone,
    addressOne,
    addressTwo,
    city,
    postCode,
    country,
    state,
    password
  } = req.body;
  if (!firstName || !lastName) {
    return res.json({error:"First name and Last name is required"})
  }
  
  if ( emailValidation(email)) {
    return res.json({error:"Valid Email Is Required"})
  }

  let existingUserCheck = await User.find({email})
  console.log(existingUserCheck)

  if (existingUserCheck.length > 0) {
    return res.json({error:"Email Already Exists"})
  }

  bcrypt.hash(password, 10,async function(err, hash) {
    let user = new User({
      firstName,
      lastName,
      email,
      telephone,
      addressOne,
      addressTwo,
      city,
      postCode,
      country,
      state,
      password:hash
    })
    user.save()
    let token =  jwt.sign( { email}, process.env.JWTSECRET,{ expiresIn: '1h' },);
    emailVerification(user.email,"Email Verification",verificationEmailTemplate(token))
    res.send(user)
    
});

})

app.post("/emialverification",async function (req,res) {
  const {authorization} = req.headers


  console.log(authorization)
  var decoded = jwt.verify(authorization, process.env.JWTSECRET);
  console.log(decoded.email)
  let upDateUser = await User.findOneAndUpdate(
    {email:decoded.email},
    {verifed:true},
    {new:true}
    );
  res.json(upDateUser)

})

app.listen(8000)
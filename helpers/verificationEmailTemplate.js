function verificationEmailTemplate(token) {
    console.log("Ttoken",token)
    return ` <img src="https://i.ibb.co/K0pVmTm/logo.png" alt="logo" border="0"> <h1 style="font-family: Arial, Helvetica, sans-serif; font-size: 36px;color: #262626;">Please Confirm your email. ${token}</h1> <p style="font-family:Arial, Helvetica, sans-serif">Welcome to Oreby Ecommerce. For cntinue please verify your email address.</p><a href="#" style="text-decoration: none;background-color: #262626;color: white;padding: 5px 20px;margin-top: 10px;display: inline-block;font-family: Arial, Helvetica, sans-serif;font-size: 26px;">Click</a>`
}
module.exports = verificationEmailTemplate;
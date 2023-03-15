const nodemailer = require("nodemailer");


async function emailVerification(email,subject,template) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL, 
          pass: "ybtqyehujlninyvz", 
        },
      });
    
      let info = await transporter.sendMail({
        from: '"Oreby 👻""Oreby"', 
        to: email,
        subject:subject,  
        html: template, 
      });
}


module.exports = emailVerification;
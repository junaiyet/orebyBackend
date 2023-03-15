const jwt = require('jsonwebtoken');
function token(data) {
     jwt.sign({ email: data }, process.env.JWTSECRET,function (err,token) {
        console.log(token)
        return token
    },{ expiresIn: '1h' });
}

module.exports = token;
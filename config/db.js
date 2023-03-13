const mongoose = require('mongoose');

function dbConnection() {
    mongoose.connect(process.env.MONGODBURL)
    .then(() => console.log('DB Connected!'))
}

module.exports = dbConnection;
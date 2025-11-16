const mongoose = require("mongoose");

require("dotenv").config();

const db_connect = () => {

    mongoose.connect(process.env.DB_URL)
    .then(() => {console.log("connected")})
    .catch((e) => {
        console.log("db not connected");
        console.log(e.message);
        process.exit(1);
    })
}

module.exports = db_connect;
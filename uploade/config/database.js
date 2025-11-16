const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
    
        mongoose.connect(process.env.DBURL)
        .then(() => {console.log("connected")})
        .catch((e) => {
            console.log("db not connected");
            console.log(e.message);
            process.exit(1);
        })
}

module.exports = dbconnect;
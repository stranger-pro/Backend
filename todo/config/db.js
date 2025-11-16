const mongoose = require("mongoose");

require("dotenv").config();

const dbConnection = () => {
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("db connected succesfull"))
    .catch((e)=>{
        console.log("db connected not succesfull");
        console.log(e.massage);
        process.exit(1);
    });
}

module.exports = dbConnection;
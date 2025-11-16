const mongoose = require('mongoose');

require('dotenv').config();

const databaseStart = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("ant hi aarambh hai");
    })
    .catch((e) => {
        console.log('syntax sahi kar');
        console.log(e.massage);
        process.exit(1);
    })
}

module.exports = databaseStart;
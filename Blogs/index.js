const express = require('express');
const allRoute = require('./routes/allRoute');

const app = express();

app.use(express.json());

require('dotenv').config();
app.listen(process.env.Port , () => {
    console.log(`Server At Port: ${process.env.Port}`)
})

app.use('/api/v1',allRoute);

const dbconnect = require("./config/Database");
dbconnect();

app.get("/" , (req,res) => {
    res.send("Homepage");
})
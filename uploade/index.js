const express = require("express");
const route = require("./routes/route")
const dbconnect = require("./config/database");

const app = express();

const fileupload = require("express-fileupload");
app.use(fileupload());
app.use(express.json());

app.use("/api/v1",route);

dbconnect();


require("dotenv").config();
app.listen(process.env.PORT, ()=>{
    console.log('App..');
})
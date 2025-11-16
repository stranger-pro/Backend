const express = require("express");
const app = express();
const todo_router = require("./routes/todo_r");

app.use(express.json());
app.use("/api/v1",todo_router);

require("dotenv").config();
app.listen(process.env.PORT,() => {
    console.log("listening..");
});

app.get("/",(req,res) => {
    res.send("<h1>This Home</h1>");
});

const dbConnection = require("./config/db");
dbConnection();


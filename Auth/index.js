const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();

app.listen(process.env.PORT, () => {
    console.log("listen..");
})

const route = require("./route/router");

app.use("/api/v1",route);

const db = require("./config/db_connect");
db();
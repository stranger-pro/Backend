const express = require("express");
const route = express.Router();

const fileUploaderLocal = require("../controller/localUpload");

route.post("/localUpload",fileUploaderLocal);

module.exports = route;
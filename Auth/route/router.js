const express = require("express");
const route = express.Router();

const {signUp,signIn} = require("../controller/createUser");

route.post("/signUp",signUp);
route.post("/signIn",signIn);

//protexted

const {auth,isStudent,isAdmin} = require("../middleware/check");

route.get("/student", auth ,isStudent);
route.get("/admin",auth,isAdmin);

module.exports = route;
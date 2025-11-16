const express = require("express");
const router = express.Router();

const createTodo = require("../controller/createTodo");
const getTodo = require("../controller/getTodo");
const getId = require("../controller/getId");
const updateTodo = require("../controller/updateTodo");
const deleteTodo = require("../controller/deleteTodo");

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getId/:Id",getId);
router.put("/updateTodo/:Id",updateTodo);
router.delete("/deleteTodo/:Id",deleteTodo);

module.exports = router;

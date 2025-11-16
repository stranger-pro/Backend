const express = require('express');
const route = express.Router();

const getBlog = require("../controler/getBlog");
const createBlog = require("../controler/createBlog");
const createComment = require("../controler/createComment");
const {createLike,deleteLike} = require("../controler/likeHandler");

route.get("/getBlog",getBlog);
route.post("/createBlog",createBlog);
route.post("/createComment",createComment);
route.post("/createLike",createLike);
route.put("/deleteLike",deleteLike);

module.exports = route;
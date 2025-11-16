const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listen on ${port}`);
});

app.get("/",(req,res)=>{
    let code = "<div><h1>Home</h1><br/><p>This is Homa Page</p></div>"
    res.send(code);
});

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`welcome ${username} ${id}`);
});

app.get("/search",(req,res)=>{
    let q = req.query;
    res.send(q);
});
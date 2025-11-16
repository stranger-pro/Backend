const Todo = require("../model/todo");

const getTodo = async(req,res) => {
    try{
        const todos = await Todo.find({});
        res.status(200).json({
            succes:true,
            data:todos,
            massage:"data fetched"
        })
    }catch(e){
     
        console.log(e);
        res.status(500).json({
            succes:false,
            data:"internal server error",
            massage:e.massage
        });
    }
}

module.exports = getTodo;
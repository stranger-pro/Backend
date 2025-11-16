const Todo = require("../model/todo");

const createTodo = async(req,res) => {
    try{
        const {title,description} = req.body;
        const response = await Todo.create({title,description});
        res.status(200).json({
            succes:true,
            data:response,
            massage:"entry submitted"
        });
    }catch(e){
        console.error(e);
        console.log(e);
        res.status(500).json({
            succes:false,
            data:"internal server error",
            massage:e.massage
        });
    }
}

module.exports = createTodo;
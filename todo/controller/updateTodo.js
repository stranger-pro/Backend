const Todo = require("../model/todo");

const updateTodo = async(req,res) => {
    try{
        const {Id} = req.params;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndUpdate({_id:Id},
            {title,description,updatedAt:Date.now()}
        );
        if(!todo){
            res.status(404).json({
            succes:false,
            massage:"data not found"
        })
        }
        res.status(200).json({
            succes:true,
            data:todo,
            massage:"entry updated"
        });
    }catch(e){
        
        console.log(e);
        res.status(500).json({
            succes:false,
            data:"internal server error",
            massage:e.massage
        });
    }
}

module.exports = updateTodo;
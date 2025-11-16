const Todo = require("../model/todo");

const getId = async(req,res) => {
    try{
        const {Id} = req.params;
        const todo = await Todo.findById({_id : Id});

        if(!todo){
            res.status(404).json({
            succes:false,
            massage:"data not found"
        })
        }

        res.status(200).json({
            succes:true,
            data:todo,
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

module.exports = getId;
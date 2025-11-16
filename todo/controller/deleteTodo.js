const Todo = require("../model/todo");

const deleteTodo = async(req,res) => {
    try{
        const {Id} = req.params;
        await Todo.findByIdAndDelete({_id:Id});
        res.json({
            success:true,
            massage:`delete succesfull`
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            massage:`internal server error`
        });
    }
}

module.exports = deleteTodo;
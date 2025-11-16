const mongoose = require("mongoose");

const user_s = new mongoose.Schema(
    {
        username : {
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password: {
            type:String,
            required:true
        },
        role:{
            type:String,
            enum : ['Admin','Student','Visitor']
        }
    }
)

module.exports = mongoose.model("user",user_s)
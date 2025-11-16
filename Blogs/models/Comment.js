const mongoose = require('mongoose');

const Comment  = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"blog"
        },
        user:{
            type:String,
            required:true,
            maxLength:50
        },
        body:{
            type:String,
            required:true,
            maxLength:50
        }
    }
)

module.exports = mongoose.model('Comment',Comment);
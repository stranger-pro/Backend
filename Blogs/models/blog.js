const mongoose = require('mongoose');

const Blog  = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:50
        },
        like:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }],
        comment:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }]

    }
    
)

module.exports = mongoose.model('blog',Blog);
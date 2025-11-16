const Blog  = require('../models/blog');
const Comment  = require('../models/Comment');

const createComment = async (req , res) => {
    try{
        const {post,user,body} = req.body;

        const comment = new Comment({post,user,body});

        const updateComment = await comment.save();

        const blog = await Blog.findByIdAndUpdate(post , {$push : {comment : updateComment._id} }, {new:true})
                     .populate("comment")
                     .exec();

        res.status(200).json({success:true,
                             post:blog});
    }                
    catch(e){
        return res.status(500).json({
            error:"error",
        });
    }
}

module.exports = createComment;
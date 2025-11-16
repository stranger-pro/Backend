const blog = require("../models/blog");
const Like = require("../models/like");

exports.createLike = async (req,res) => {
    try{
                const {post,user} = req.body;
        
                const like = new Like({post,user});
        
                const updateLike = await like.save();
        
                const blogs = await blog.findByIdAndUpdate(post , {$push : {like : updateLike._id} }, {new:true})
                             .populate("like")
                             .exec();
        
                res.status(200).json({success:true,
                                     post:blogs});
    }catch(e){
        res.status(500).json({
            sucess:false,
            error:e
        })
    }
}

exports.deleteLike = async (req,res) => {
    try{
                const {post,like_id} = req.body;
        
                const updatelikes = await Like.findByIdAndDelete({_id:like_id});
        
                const blogs = await blog.findByIdAndUpdate(post , {$pull : {like : like_id} }, {new:true})
                             .populate("like")
                             .exec();
        
                res.status(200).json({success:true,
                                     post:blogs});
    }catch(e){
        res.status(500).json({
            sucess:false,
            error:e
        })
    }
}
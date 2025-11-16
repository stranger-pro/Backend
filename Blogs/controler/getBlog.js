const blog = require('../models/blog');

const getBlog = async (req , res) => {
    try{
        const blogs = await blog.find({}).populate("like").populate("comment").exec();
        res.status(200).json({
            success:true,
            Data:blogs,
            massage:'Submit Successfull'
        })
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success:false,
            error:e.massage,
            massage:'Submit Denied!'
        })
    }
}

module.exports = getBlog;
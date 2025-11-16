const blog = require('../models/blog');

const createBlog = async (req , res) => {
    try{
        const {title,description} = req.body;
        const blogs = new blog({title,description});
        const saveBlog = await blogs.save();
        res.status(200).json({
            success:true,
            Data:saveBlog,
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

module.exports = createBlog;
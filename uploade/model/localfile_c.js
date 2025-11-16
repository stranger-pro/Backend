const mongoose = require("mongoose");

const localUpload_s = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    imageUrl: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    tags: {
        type:String,
        require:true
    }

})

module.exports = mongoose.model("upload_s",localUpload_s);
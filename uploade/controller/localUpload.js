

const fileUploaderLocal = async(req,res) => {
    try{
        const file = req.files.file;

        

        const path = __dirname + "/file/" + Date.now() + "." + file.name.split(".")[1];

        file.mv(path);

        res.status(200).json({
            sucess:true,
            massage:`done`
        });
    
    }catch(e){
        console.log(e);
    }
} 

module.exports = fileUploaderLocal;
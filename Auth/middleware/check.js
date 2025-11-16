const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = (req,res,next) => {
    try{
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                massage:`token is empty`
            });
        }
        try{
        const decode = jwt.verify(token,process.env.Secret_key);

        req.user = decode;
        }catch(e){
            res.status(401).json({
                success:false,
                massage:`Invalid token`
            })
        }
        next();
        res.status(200).json({
                success:true,
                massage:`token verified`
            })
    }catch(e){
        console.log(e);
        res.status(500).json({
                success:false,
                massage:`somthing went wrong`
            })
    }
}

exports.isStudent = (req,res,next)=> {
    try{
    const user = req.user;

    if(!(user.role == "student")){
        return res.status(401).json({
                success:false,
                massage:`protected from admin`
            });
    }
    next();
    res.status(200).json({
                success:true,
                massage:`welcome to protected for student`
            });
    }catch(e){
        console.log(e);
        res.status(500).json({
                success:false,
                massage:`somthing went wrong`
            })
    }

}

exports.isAdmin = (req,res,next)=> {
    try{
    

    if(!(req.user.role == "admin")){
        return res.status(401).json({
                success:false,
                massage:`protected for student`
            });
    }
    next();
    res.status(200).json({
                success:true,
                massage:`welcome to protected for admin`
            });
    }catch(e){
        console.log(e);
        res.status(500).json({
                success:false,
                massage:`somthing went wrong`
            })
    }

}
const User = require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signUp = async (req,res) => {
    try{
        const {username,email,password,role} = req.body;

        const exist = await User.findOne({email});

        if(exist){
            res.status(400).json({
                success:false,
                massage:`user already exist`
            })
        }

        let hashPassword;

        try{
            hashPassword = await bcrypt.hash(password,10);
        }catch(e){
            res.status(500).json({
                success:false,
                massage:`error in hashing`
            })
        }

        const newUser = new User({username,email,password:hashPassword,role});

        const user = await newUser.save()
         res.status(200).json({
            success:true,
            data:user,
            massage:`uaer submitted`
            
        })

    }catch(e){
        console.log("User Not Created");
        res.status(500).json({
            success:false,
            data:`internal error`,
            massage:e.massage
        })
    }
}

exports.signIn = async (req,res) =>{
    try{
        const {email , password} = req.body;

        if(!email || !password ){
            return res.status(400).json({
                success:false,
                massage:`Fill All Info`
            });
        }

        let user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success:false,
                massage:`user not register`
            })
        }

        if(await bcrypt.compare(password , user.password)){
            const payload = {email:user.email,
                            id:user._id,
                            role:user.role
            }
            const token = jwt.sign(payload,process.env.Secret_key,{expiresIn:'2h'});
            user = user.toObject();
            user.token = token;
            user.password = undefined;

            const expire = {
                expires: new Date(Date.now() + (2*24*60*60*1000)),
                httpOnly:true
            }
            res.cookie("token",token,expire).status(200).json({
                success:true,
                user,
                token,
                massage:`login Successfull`
            });

        }else{
            return res.status(403).json({
                success:false,
                massage:`wrong password`
            });
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
                success:false,
                massage:`login failed`
            })
    }
}
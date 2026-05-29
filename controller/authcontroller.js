const db = require("../model");
const bcrypt = require("bcrypt");
exports.renderRegister = (req,res)=>{
    res.render("register");
}

exports.register = async(req,res)=>{
    try{
        console.log(req.body);
        const {firstName, lastName, email, userName, password} = req.body;
        if(!firstName || !lastName || !email || !userName || !password){
            return res.status(400).json({
                message : "All the fields are required"
            });
        };
        const existingUser = await db.users.findOne({
            where : {
                email: email,
            }
        });

        if(existingUser){
            return res.status(400).json({
                message : "User already registered with this email address"
            });
        };
        await db.users.create({
            firstName,
            lastName,
            email,
            userName,
            password: bcrypt.hashSync(password,10)
        });
        res.status(200).json({
            message: "User registered"
        });
    }catch(error){
        console.log("error");
        res.status(500).json({
            message: "Server error"
        });
    };
}

exports.renderLogin = (req,res)=>{
    res.render("auth/loign");
}

exports.login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "Both fields are required"
            });
        }
        const user = await db.users.findOne({
            where: {
                email: email,
            }
        });
        if(!user){
            return res.status(401).json({
                message: "User not found"
            });
        };
        const isMatch = bcrypt.compareSync(password,user.password);
        if(!isMatch){
            return res.status(401).json({
            message : "Wrong Passowrd"
        }
        )
        }
        return res.status(200).json({
            message: "User Logged in Successfully"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Server error"
        })
    }
}
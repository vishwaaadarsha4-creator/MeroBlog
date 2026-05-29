const db = require("../model");
const blogs =db.blogs;
exports.home = (req,res)=>{
    res.render("home");
}
exports.renderCreateBlog = (req,res)=>{
    res.render("createBLog");
}

exports.createBLog = async(req,res)=>{
    try{
        const {title, author, blog} = req.body;
        if(!title || !author || !blog){
            return res.status(400).json({
                message : "All the fields are required"
            });
        };
        await blogs.create({
            title,
            author,
            blog,
            
        });
        return res.redirect("/");

    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Server error cannot publish blog"
        })
    }
}
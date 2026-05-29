
const db = require("../model");
const { storage, multer } = require("../middleware/multerConfig");
const blogs =db.blogs;
const upload = multer({storage: storage});

exports.home = (req,res)=>{
    res.render("home");
}
exports.renderCreateBlog = (req,res)=>{
    res.render("createBLog");
}

exports.createBLog =[ upload.single("image") , async(req,res)=>{
    try{
        const {title, author, blog} = req.body;
        const photo = req.file;
        if(!title || !author || !blog || !photo){
            return res.status(400).json({
                message : "All the fields are required"
            });
        };
        await blogs.create({
            title,
            author,
            blog,
            image: photo.filename,
            
        });
        return res.redirect("/");

    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Server error cannot publish blog"
        })
    }
}];
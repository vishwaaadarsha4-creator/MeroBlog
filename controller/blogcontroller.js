exports.home = (req,res)=>{
    res.render("home");
}
exports.renderCreateBlog = (req,res)=>{
    res.render("createBLog");
}

exports.createBLog = (req,res)=>{
    console.log(req.body)
}
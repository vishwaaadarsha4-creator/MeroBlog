const { home, renderCreateBlog, createBLog } = require("../controller/blogcontroller");

const router = require("express").Router();

router.route("/").get(home);
router.route("/createblog").get(renderCreateBlog).post(createBLog);

module.exports = router;
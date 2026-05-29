const { renderRegister, register, renderLogin, login } = require("../controller/authcontroller");

const router = require("express").Router();

router.route("/register").get(renderRegister).post(register);
router.route("/login").get(renderLogin).post(login);


module.exports = router;
require('dotenv').config();
const bcrypt = require('bcrypt');
const express = require('express');
const db = require('./model');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine","ejs");
app.use(express.static("public/css"));

const authRoutes = require("./routes/authroute");
const blogRoutes = require("./routes/blogroute");


app.use("",authRoutes);
app.use("",blogRoutes);




app.listen(port,()=>{
    console.log(`server has been started at port ${port}`);
});
const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../config/dbConfig');
const userModel = require('./userModel');
const blogModel = require('./blogModel');

const {dbName, user, password, host, port, dialect, pool} = dbConfig;

const sequelize = new Sequelize(dbName,user,password,{
    host,
    port,
    dialect,
    pool
});

sequelize.authenticate()
.then(()=>{
    console.log("Database Connected");
}).catch((err)=>{

    console.log("Unable to connect database",err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = userModel(sequelize,DataTypes);
db.blogs = blogModel(sequelize,DataTypes);


sequelize.sync({force: false});

module.exports = db;
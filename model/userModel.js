


const userModel = (sequelize, DataTypes)=>{
    const user = sequelize.define("user",{
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return user;
};
module.exports = userModel;
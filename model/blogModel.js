

const blogModel = (sequelize,DataTypes)=>{
    const Blog = sequelize.define("blog",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            
        },
        blog: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        
    })
    return Blog;
}

module.exports = blogModel;
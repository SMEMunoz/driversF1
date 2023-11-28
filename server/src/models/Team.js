const { DataTypes, Sequelize} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Team",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
    }
    
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })
}
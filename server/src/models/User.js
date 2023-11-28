const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    name: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {forename: null, surname: null}
    },
    usuario:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
    image: {
            type: DataTypes.BLOB,
            allowNull: true,
            defaultValue: null
        },
    nationality:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Sin pais PAPU !",
        },
    dob:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});
};
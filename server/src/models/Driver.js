const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    name: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {forename: null, surname: null}
    },
    id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
    descripcion:{
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "Sin descripcion"
        },
    image: {
            type: DataTypes.JSONB, // Usamos JSONB para almacenar datos JSON
            allowNull: true,
            defaultValue: {
              url: null,
              imageby: null,
            },
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
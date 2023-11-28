const {Driver} = require("../db");
const Sequelize = require('sequelize');
const fs = require('fs');

const getDriversByName = async (req,res) =>{
    const { name } = req.params;
    console.log("este es el name:" + name)
    if (!name) {
      res.status(404).json({ message: 'El parametro "Name" es obligatorio' });
    }
    try {
        // Buscar en la base de datos
        const driversFromDatabase = await Driver.findAll({
            where: Sequelize.literal(`CAST("name"->>'surname' AS TEXT) ILIKE :name`), // Cambiar "fullName" por la propiedad correcta en tu JSON
            replacements: { name: `%${name}%` }, // Usar replacements para pasar el valor
            limit: 15,
          });
      
          if (driversFromDatabase.length > 0) {
            return res.statusJson(200, driversFromDatabase);
          }
    
        // Si no se encuentra en la base de datos, buscar en la API local
        const data = fs.readFileSync('./api/db.json', 'utf8');
        const apiDrivers = JSON.parse(data);
        const filteredDrivers = apiDrivers.drivers.filter(driver => {
          const fullName = `${driver.name.forename} ${driver.name.surname}`.toLowerCase();
          return fullName.includes(name.toLowerCase());
        });
    
        if (filteredDrivers.length > 0) {
            if (filteredDrivers.length > 15) {
                const first15Drivers = filteredDrivers.slice(0, 15);
                return res.statusJson(200, first15Drivers);
              } else {
                return res.statusJson(200, filteredDrivers);
              }
        } else {
          return res.status(203).json({ message: 'No se encontraron corredores con el nombre especificado.' });
        }
      }catch (error) {
        res.status(500).send({error:error.message})   
        }
}

module.exports = getDriversByName
   
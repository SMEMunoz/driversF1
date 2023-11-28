const {Driver, Team} = require ("../db")
const fs = require('fs');

const getAllDrivers = async (req, res) => {

      try {
        const dbDrivers = await Driver.findAll({
          include: {
            model: Team,
            as: 'teams',
          },
        });
    
        // Transformar los objetos de equipos en una cadena de nombres separados por comas
        const driversWithTeams = (dbDrivers ?? []).map((driver) => {
          return {
            ...driver.toJSON(),
            teams: driver.teams.map((team) => team.name).join(', '),
          };
        });
        if (!dbDrivers || dbDrivers.length === 0) {
          // Si no hay pilotos en la base de datos, consulta desde la API
          const data = fs.readFileSync('./api/db.json', 'utf8');
          const apiDrivers = JSON.parse(data);
    
          const apiDriversArray = Object.values(apiDrivers);

          // Agregar una imagen predeterminada si es necesario
          apiDriversArray.forEach((driver) => {
            Object.values(driver).forEach((value) => {
              if (!value.image.url || value.image.url === '') {
                value.image.url = 'https://storage.cloud.google.com/img_web_drivers/stig_driver_mistery.jpg';
              }
            });
          });
    
          return res.statusJson(201, apiDrivers);
        }
        else {
          // Si hay pilotos en la base de datos, combina ambos resultados
          const data = fs.readFileSync('./api/db.json', 'utf8');
          const apiDrivers = JSON.parse(data);
          let nuevoArray= []
          // Agregar una imagen predeterminada si es necesario para los pilotos de la API
          Object.values(apiDrivers).map((driver) => {
            
            Object.values(driver).map((value) => {
              if (!value.image.url || value.image.url === '') {
                value.image.url = 'https://storage.cloud.google.com/img_web_drivers/stig_driver_mistery.jpg';
              }
              nuevoArray.push(value)
            
            });
          });
    
          // Fusionar los pilotos de la base de datos y de la API
          const allDrivers = [...driversWithTeams, ...nuevoArray];
    
          return res.statusJson(200, allDrivers);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getAllDrivers
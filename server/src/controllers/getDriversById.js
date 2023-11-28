const { Driver, Team} = require('../db')
const fs = require('fs');

const getDriversById = async (req, res) => {
    const {idDriver} = req.params;
    console.log("este es el iddriver:" + idDriver)
    try {
        // Intenta buscar al conductor en la base de datos
        if(idDriver.length > 3)

        {const driver = await Driver.findOne({
            where: { id: idDriver },
            include: [{ model: Team, as: 'teams' }],
        });

        if (driver) {
            console.log("Driver encontrado en la base de datos:", driver);
            const teams = driver.teams.map((team) => team.name).join(', ');

            const driverWithTeams = {
                ...driver.toJSON(),
                teams: teams,
            };
            return res.status(200).send(driverWithTeams);}
        } else {
            console.log("Conductor no encontrado en la base de datos. Consultando API...");

            // Si no se encuentra en la base de datos, consulta la API
            const data = fs.readFileSync('./api/db.json', 'utf8');
            const apiDrivers = JSON.parse(data);

            let driverFound = null;

            if (apiDrivers.drivers) {
                apiDrivers.drivers.some((driver) => {
                    if (driver.id === parseInt(idDriver)) { // Asegúrate de que idDriver sea un número
                        console.log("Driver encontrado en la API:", driver);
                        if (!driver.image.url) {
                            driver.image.url = 'https://storage.cloud.google.com/img_web_drivers/stig_driver_mistery.jpg';
                        }
                        driverFound = driver;
                        console.log("Driver encontrado:", driver);
                        return true; // Detiene la iteración tan pronto como se encuentra el conductor.
                    }
                    return false;
                });
            }

            if (driverFound) {
                res.status(200).send(driverFound);
            } else {
                console.log("Conductor no encontrado en la API.");
                res.status(404).send({ message: 'Conductor no encontrado' });
            }
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    
    }
};

module.exports = getDriversById;
const fs = require('fs');
const {Team} = require('../db');
const {v4:uuidv4} = require('uuid');
const _ = require('lodash');

const getAllTeams = async (req, res) => {
  try {
    // Intenta buscar todos los equipos en la base de datos
    const teams = await Team.findAll();

    if (teams.length > 0) {
        console.log("Equipos encontrados en la base de datos:", teams);
        res.status(200).json(teams);
    } else {
        console.log("No se encontraron equipos en la base de datos. Consultando API...");

        // Si no se encuentran equipos en la base de datos, consulta la API
        const data = fs.readFileSync('./api/db.json', 'utf8');
        const apiData = JSON.parse(data);

        if (apiData.drivers) {
            const teamsFromAPI = [];

            apiData.drivers.forEach((driver) => {
                if (driver.teams) {
                    console.log("estos son los teams:"+driver.teams)
                    driver.teams.split(',').forEach((teamName) => {
                        teamName = teamName.trim();
                        if (!teamsFromAPI.includes(teamName)) {
                            teamsFromAPI.push(teamName);
                        }
                    });
                }
            });

            // Insertar los equipos en la base de datos
            console.log("Equipos encontrados en la API:", teamsFromAPI);
            await Team.bulkCreate(teamsFromAPI.map((teamName) => ({ name: teamName,id: uuidv4() })));

            // Volver a buscar los equipos desde la base de datos
            const updatedTeams = await Team.findAll();
            console.log("Equipos actualizados desde la API:", updatedTeams);
            res.status(200).json(updatedTeams);
        } else {
            console.log("No se encontraron equipos en la API.");
            res.status(404).json({ message: 'No se encontraron equipos en la API.' });
        }
    }
} catch (error) {
    res.status(500).json({ message: error.message });
}

};

module.exports = getAllTeams;
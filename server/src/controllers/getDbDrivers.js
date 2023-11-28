const {Driver, Team} = require ("../db")

async function createDriver(req, res) {
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
                  
            return res.statusJson(201, {message:"Sin drivers por el momento, crea uno propio !"});
          }
          else{
            return res.status(200).json(driversWithTeams);
          }
    } catch (error) {
        res.status(400).json(error);
    }

}

module.exports = createDriver
const {Driver, Team} = require('../db');
const {v4: uuidv4}= require('uuid');



const postDrivers = async(req, res) => {
    const { name, image, dob, nationality, teams, descripcion } = req.body;
    const { forename, surname } = name;
    
    // Comprueba si se proporcionan valores válidos para name, apellido y fecha_de_nacimiento
    if (!forename || !surname || !dob || !teams) {
        return res.status(202).json({ message: 'Los campos name(forename), apellido(surname), fecha_de_nacimiento(dob) y teams son obligatorios.' });
    }

    if(!image.url || image.url === ""){image.url = 'https://storage.cloud.google.com/img_web_drivers/stig_driver_mistery.jpg'}

    // Verificar si el Conductor ya existe en la base de datos
    let existingCorredor = await Driver.findOne({ where: { name:name, nationality: nationality, dob: dob   } });
    
    if(existingCorredor){
        return res.status(200).json({ message: 'El conductor ya existe en la base de datos.' });
    }
    // Genera un ID único para el conductor
    
    const id = uuidv4();

    // Verificar si el ID ya existe en la base de datos
    let existingDriver = await Driver.findOne({ where: { id } });
    while (existingDriver) {
        // Si el ID ya existe, genera uno nuevo
        id = uuidv4();
        existingDriver = await Driver.findOne({ where: { id } });
    }

//     const convertNumericToUUID = (numericIDs) => {
//     return numericIDs.map((numericID) => {
//         // Generamos un UUID basado en el ID numérico
//         return '00000000-0000-0000-0000-' + ('000000000000' + numericID).slice(-12);
//     });
// };
try {
    // const teamUUIDs = convertNumericToUUID(teams);
    const driver = await Driver.create({
        id,
        name,
        image,
        dob,
        nationality,
        descripcion,
        teams
    });
    const teamsToAssociate = [];

    // Divide el string de equipos en nombres de equipos individuales
    const teamNames = teams.split(',').map((teamName) => teamName.trim());

    // Itera sobre los equipos proporcionados en la solicitud
    for (const teamName of teamNames) {
      // Busca si el equipo ya existe en la base de datos
      console.log("este es el team,:" + teamName)
      
      let existingTeam = await Team.findOne({ where: { name: teamName } });

      // Si el equipo no existe, créalo con un nuevo UUID
      if (!existingTeam) {
        existingTeam = await Team.create({
          id: uuidv4(),
          name: teamName,
        });
      }
      
      teamsToAssociate.push(existingTeam)
      
      
    }
    console.log("estos son los:" + JSON.stringify(teamsToAssociate));
    // Asocia los equipos al piloto
    await driver.addTeams(teamsToAssociate);

    // Agrega la lista de nombres de equipos al objeto del controlador
    driver.dataValues.teams = teamsToAssociate;

    res.status(201).json({message: "Driver created successfully"});   
} catch (error) {res.status(500).json({error:error.message})    
}
};

module.exports = postDrivers;
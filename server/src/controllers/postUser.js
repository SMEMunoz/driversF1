const {User} = require('../db');
const {v4: uuidv4}= require('uuid');



const postUser = async(req, res) => {
    const {name, image, dob, nationality, password, usuario, } = req.body;
    const { forename, surname } = name;
    
    // Comprueba si se proporcionan valores válidos para name, apellido y fecha_de_nacimiento
    if (!forename || !surname || !dob || !password || !usuario) {
        return res.status(400).json({
          message:
            'Los campos name(forename), apellido(surname), fecha_de_nacimiento(dob), contraseña(password) y usuario son obligatorios.',
        });
      }
// Genera un ID único para el usuario
let id = uuidv4(); 
// Verificar si el usuario ya existe en la base de datos  
let existingUser = await User.findOne({ where: { usuario: usuario } });
if (existingUser) {
  return res.status(202).json({ message: 'El usuario ya existe en la base de datos.' });
}



// Si el usuario no existe, agrega el campo "usuario" e "ID" al objeto userProps      

try {
    // Define un objeto que contendrá las propiedades comunes para la creación del usuario
    const userProps = {
      id,
      name,
      image,
      dob,
      nationality,
      password,
    };
    
    
    userProps.usuario = usuario;

    // Crea un nuevo usuario en la base de datos
    await User.create(userProps);

    res.status(201).json({message:"Usuario creado con éxito"});
  } catch (error) {res.status(500).json({error:error.message})    
}
};

module.exports = postUser;
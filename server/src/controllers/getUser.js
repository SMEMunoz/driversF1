const {User} = require("../db");
const Sequelize = require("sequelize");



const getUser = async (req,res) =>{
    const { usuario, password } = req.query;

    console.log("estos son los:" + usuario,password)
    if (!usuario) {
       return res.status(202).json({ message: 'El parámetro "usuario" es obligatorio.' });
    }
    if (!password) {
        return res.status(201).json({ message: 'El parámetro "password" es obligatorio.' });
    }

    const userFound = await User.findOne({
        where: {usuario: usuario},
      });
    const passwordFound = await User.findOne({
        where: {password: password},
      });
    try {
          
          if(!userFound) {return res.status(202).json({ message: 'El usuario no existe en la base de datos.' })};
          if(userFound) {
            if(!passwordFound) {return res.status(202).json({ message: 'El password es incorrecto.' })}
            else{res.status(200).json({message:"Usuario registrado"})}
          }
            
          
          
    }
    catch (error) {
        res.status(500).json({error:error.message})   
        }
}

module.exports = getUser
   
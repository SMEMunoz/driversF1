import React from "react";
import style from "./Register.module.css"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useState} from "react"

export default function Register() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: { forename: "", surname: "" },
        usuario: "",
        password: "",
        image: "",
        nationality: "",
        dob: "",
      })

      function handleChange(e) {
        const { name, value } = e.target;
        if (name === "forename" || name === "surname") {
          setUserData({
            ...userData,
            name: {
              ...userData.name,
              [name]: value,
            },
          });
        } else {
          setUserData({
            ...userData,
            [name]: value,
          });
        }
      }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("este es el estado:" + JSON.stringify(userData))
        
        try {
          const URL = 'http://localhost:3001/register'
          const response = await axios.post(URL, userData) // Envia userData directamente al body
          const data = response.data;
          const status = response.status;
          console.log("este es el status:" + JSON.stringify(status))
          if (status === 201) {navigate('/home')}
          if (data) {
              window.alert(data.message);
          }
      } catch (error) {
      
            console.log(error)
        }
      }

    return (
        <div className={style.container}>
            <h1 className={style.titulo}>
            FORMULA 1
            </h1>
            
            <form className={style.form} onSubmit={handleSubmit}>
                <h2>REGISTRO</h2>
                <label className={style.label}>Usuario</label>
                <input type="text" id="usuario" value={userData.usuario} onChange={handleChange} required="required" name="usuario" className={style.inputIs}/>
                <label className={style.label}>Password</label>
                <input type="password" id="password" value={userData.password} name="password" required="required" className={style.inputIs} onChange={handleChange}/>
                <label className={style.label}>Nombre</label>
                <input type="text" id="name"  value={userData.name.forename} required="required" pattern="[a-zA-Z]+" title="Solo letras" name="forename" className={style.inputIs} onChange={handleChange}/>
                <label className={style.label}>Apellido</label>
                <input type="text" id="surname" value={userData.name.surname} onChange={handleChange} required="required" pattern="[a-zA-Z]+" title="Solo letras" name="surname" className={style.inputIs}/>
                <label className={style.label}>Fecha de Nacimiento</label>
                <input type="date" id="dob" value={userData.dob} onChange={handleChange} required="required" name="dob" className={style.inputIs}/>
                <label className={style.label}>Nacionalidad</label>
                <input type="text" id="nationality" value={userData.nationality} onChange={handleChange} required="required" name="nationality" className={style.inputIs}/>
                <button className={style.bn}>R E G I S T R O !</button>
                <div className={style.opciones}>
                    <Link to={'/login'} className={style.link}>
                    <button className={style.bn2}>
                        L O G I N
                    </button>
                    </Link>
                    <Link to={"/"} className={style.link}>
                    <button className={style.bn2}>
                        I N I C I O
                    </button>
                    </Link>
                </div>  
            </form> 
        </div>       
)
}
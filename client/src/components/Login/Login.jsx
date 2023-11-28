import React from 'react'
import { useState} from 'react'
import style from './Login.module.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Login() {
  const [userData, setUserData] = useState({
    usuario: '',
    password: ''
})

  const navigate = useNavigate()


  function handleChange(e) {
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    })
  }

  
  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      const URL = 'http://localhost:3001/login'
      const response = await axios.get(URL, {params: userData}) // Envía userData como parámetros en la URL);
      const data = response.data;
      const status = response.status;
      console.log("este es el status:" + JSON.stringify(status))
      if (status === 200) {navigate('/home')}
      if (data && status != 200) {
          window.alert(data.message);
      }
  } catch (error) {
  
        console.log(error)
    }
  }
  return (
    <div className={style.pageContainer}>
        
        <h1 className={style.titulo}>FORMULA 1</h1>
        <form onSubmit={handleSubmit} className={style.form}>
            <label className={style.label}>Usuario</label>
            <input type="text" id="usuario" value={userData.usuario} name="usuario" className={style.inputIs} onChange={handleChange}/>
            <label className={style.label}>Password</label>
            <input type="password" id="password" value={userData.password} name="password" className={style.inputIs} onChange={handleChange}/>
            <button className={style.bn}>L O G I N !</button>
            <div className={style.opciones}>
              <Link to={'/register'} className={style.link}>
              <button className={style.bn2}>
                R E G I S T R O
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
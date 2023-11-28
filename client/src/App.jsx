import { useState, useEffect } from 'react'
import {useLocation, useNavigate, Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import style from './App.module.css'
import {getCharacters, getTeams} from "./redux/actions"
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Bienvenida from "./components/Bienvenida/Bienvenida"
import Register from './components/Register/Register'
import NavBar  from './components/NavBar/NavBar'
import Corredores from './components/Corredores/Corredores'
import Detail from './components/Detail/Detail'
import DriversFounds from './components/DriversFounds/DriversFounds'
import CrearDriver from './components/CrearDriver/CrearDriver'
import Circuitos from './components/Circuitos/Circuitos'
import Game from './components/Games/Games'
import About from './components/About/About'
import Success from './components/Success/Success'
import NoCorredor from './components/NoCorredor/NoCorredor'
import Error from './components/Error/Error'
import axios from 'axios'





function App() {

  const location = useLocation()
  const route = location.pathname.slice(1);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [drivers, setDrivers] = useState([])
  const [driverFound, setDriverFound] = useState([])
  const [detalles, setDetalles] = useState([])
  
    async function getDrivers() {
      const res = await axios.get('http://localhost:3001/drivers')
      const data = res.data
      const status = res.status
      if(status === 201)
      {setDrivers(data.drivers)
      dispatch(getCharacters(data.drivers))
      localStorage.setItem('drivers', JSON.stringify(drivers));
    }
      else{setDrivers(data)
        dispatch(getCharacters(data))
        localStorage.setItem('drivers', JSON.stringify(drivers));
      }

    }
  
    async function searchByName(nameId) {
      if(nameId === "" || nameId === undefined || nameId === null || nameId === " " || nameId === "  " || nameId === "   " || nameId === "    " || nameId === "     " || nameId === "      " || nameId === "       " || nameId === "        " || nameId === "         " || nameId === "          " || nameId === "           " || nameId === "            " || nameId === "             " || nameId === "              " || nameId === "               " || nameId === "                " || nameId === "                 " || nameId === "                  " || nameId === "                   " || nameId === "                    " || nameId === "                     " || nameId === "                      " || nameId === "                       " || nameId === "                        " || nameId === "                         " || nameId === "                          " || nameId === "                           " || nameId === "                            " || nameId === "                             " || nameId === "                              " || nameId === "                               " || nameId === "                                " || nameId === "                                 "){
        return window.alert("Debes escribir un nombre o parte de el")
      }
      const res = await axios.get(`http://localhost:3001/drivers/name/${nameId}`);
      const data = res.data;
      const status = res.status;
      console.log("este es el status:" + status)
      if(status === 200)
      
      {console.log("entramos al if:")
      setDriverFound(data);
      dispatch(getCharacters(data))
      navigate(`/driverFound/${nameId}`)}
      else if(status === 203){
        navigate(`/sin-corredor`)
      }
    
    }

    async function detail(id) {
      console.log("este es el id:" + id)
      const res = await axios.get(`http://localhost:3001/drivers/id/${id}`);
      const data = res.data;
      localStorage.setItem('detalles', JSON.stringify(data));
      setDetalles(data);
      navigate(`/detail/${id}`)}

      useEffect(() => {
        async function getDrivers() {
          const res = await axios.get('http://localhost:3001/drivers')
          const data = res.data
          const status = res.status
          if(status === 201)
          {setDrivers(data.drivers)
          dispatch(getCharacters(data.drivers))
        }
          else{setDrivers(data)
            dispatch(getCharacters(data))
          }
    
        }
        getDrivers()
      },[dispatch])

        useEffect(() => {
          async function allTeams() {
            const res = await axios.get('http://localhost:3001/team')
            const data = res.data
            dispatch(getTeams(data))
            
          }

        allTeams()
      }, [dispatch]);

      

  return (
    <div className={`${style.App} ${style[route]}`}>
      {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && < NavBar getDrivers={getDrivers} searchByName={searchByName}/>}
      <Routes>
        <Route path='/' element={<Bienvenida/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Corredores' element={<Corredores drivers={drivers} detail={detail}/>}/>
        <Route path="/detail/:id" element={<Detail detalles={detalles} getDrivers={getDrivers}/>} />
        <Route path="/driverFound/:name" element={<DriversFounds drivers={driverFound} detail={detail}/>}/>
        <Route path='/sin-corredor' element={<NoCorredor/>}/>'
        <Route path='/create' element={<CrearDriver/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/circuitos' element={<Circuitos/>}/>
        <Route path='/games' element={<Game/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error drivers={driverFound} detail={detail}/>}/>
      </Routes>
     
    </div>
  )
}

export default App

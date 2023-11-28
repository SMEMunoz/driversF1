import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import style from './CrearDriver.module.css'
import {useSelector} from 'react-redux'
import { validateName, validateNationality, validateNotEmpty } from "../Validaciones/Validaciones";
import axios from "axios";

export default function CrearDriver() {
    const globalTeams = useSelector(state => state.allteams)

    

    const navigate = useNavigate();

    const [driver, setDriver] = useState({
        name:{forename:"", surname:""},
        nationality:"",
        image:{url:"", imageBy:""},
        dob:"",
        descripcion:"",
        teams:"",
    });

    const [selectedTeams, setSelectedTeams] = useState([]);
    const [teamList, setTeamList] = useState([]);
    const [inputTeams, setInputTeams] = useState([]);

    const [inputChanged, setInputChanged] = useState({
      forename: false,
      surname: false,
      nationality: false,
    });

    function addSelectedTeamsToList() {
      if (selectedTeams.length > 0) {
        const teamsToAdd = selectedTeams.filter((team) => !teamList.includes(team));
        setTeamList([...teamList, ...teamsToAdd]);
        setSelectedTeams([]); // Limpiar las selecciones
      }
    }

    function handleTeamsChange(e) {
        const selectedTeams = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedTeams(selectedTeams);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInputChanged({
          ...inputChanged,
          [name]: true,
        });
        if(name === "teams") {
          setInputTeams(value);
        }
        if (name === "forename" || name === "surname") {
          setDriver({
            ...driver,
            name: {
              ...driver.name,
              [name]: value,
            },
          });
        } else {
          setDriver({
            ...driver,
            [name]: value,
          });
        }
      }

    async function handleSubmit(e) {
        e.preventDefault()

        console.log(inputTeams)

          // Concatenar los equipos seleccionados si existen
          if (teamList.length > 0) {
            driver.teams = teamList.join(', ');
          } else {
            driver.teams = ''; // Si no hay equipos seleccionados, se establece como cadena vacía
          }

          // Si el campo "Agregar escuderias si no existen" no está vacío, lo concatenamos con los equipos seleccionados
          if (inputTeams) {
            if (driver.teams) {
              driver.teams += ', ' + inputTeams;
            } else {
              driver.teams = inputTeams;
            }
          }

        console.log("este es el estado:" + JSON.stringify(driver))
        
        try {
          const URL = 'http://localhost:3001/drivers'
          const response = await axios.post(URL, driver) // Envia userData directamente al body
          const data = response.data;
          const status = response.status;
          console.log("este es el status: " + status)
          if (status === 201) {navigate('/success')}
          if (data) {
              window.alert(data.message);
          }
      } catch (error) {
      
            console.log(error)
        }
      }


    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
              <div className={style.div1}>
                <label className={style.label}>Nombre</label>
                <input
                  type="text"
                  id="forename"
                  value={driver.name.forename}
                  name="forename"
                  className={
                    (inputChanged.forename && !validateName(driver.name.forename)) || !validateNotEmpty(driver.name.forename)
                      ? style.inputError
                      : style.inputIs
                  }
                  onChange={handleChange}
                />
                {inputChanged.forename && !validateName(driver.name.forename) && (
                  <span className={style.errorText}>El nombre debe contener solo letras.</span>
                )}
                {!validateNotEmpty(driver.name.forename) && (
                  <span className={style.errorText}>El nombre no puede estar vacío.</span>
                )}
                <label className={style.label}>Apellido</label>
                <input type="text" id="surname" value={driver.name.surname} onChange={handleChange} name="surname" className={
                    (inputChanged.surname && !validateName(driver.name.surname)) || !validateNotEmpty(driver.name.surname)
                      ? style.inputError
                      : style.inputIs
                  }/>
                {inputChanged.surname && !validateName(driver.name.surname) && (
                  <span className={style.errorText}>El apellido debe contener solo letras.</span>
                )}
                {!validateNotEmpty(driver.name.surname) && (
                  <span className={style.errorText}>El apellido no puede estar vacío.</span>
                )}
                <label className={style.label}>Nacionalidad</label>
                <input type="text" id="nationality" value={driver.nationality} onChange={handleChange} name="nationality" className={
                    (inputChanged.nationality && !validateNationality(driver.nationality)) || !validateNotEmpty(driver.nationality)
                      ? style.inputError
                      : style.inputIs
                  }/>
                {inputChanged.nationality && !validateNationality(driver.nationality) && (
                  <span className={style.errorText}>La nacionalidad debe contener solo letras.</span>
                )}
                {!validateNotEmpty(driver.nationality) && (
                  <span className={style.errorText}>La nacionalidad no puede estar vacío.</span>
                )}
              
                <label className={style.label}>Fecha de Nacimiento</label>
                <input type="date" id="dob" value={driver.dob} onChange={handleChange} name="dob" className={
                    !validateNotEmpty(driver.dob)
                      ? style.inputError
                      : style.inputIs
                  }/>
                {!validateNotEmpty(driver.dob) && (
                  <span className={style.errorText}>La fecha de nacimiento no puede estar vacío.</span>
                )}
                <label className={style.label}>Imagen(Opcional. Introducir link.)</label>
                <input type="text" id="image" value={driver.image.url} onChange={handleChange} name="image" className={style.inputIs}/>
              </div>
              
              <div className={style.div2}>
                <label className={style.label}>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={driver.descripcion} onChange={handleChange} className={style.inputIs}/>
                <label className={style.label}>Seleccionar escuderia/s</label>
                <select
                    id="teams"
                    value={selectedTeams}
                    onChange={handleTeamsChange}
                    name="teams"
                    className={style.selector}
                    multiple={true}
                >
                    {globalTeams.map((team) => (
                        <option key={team.id} value={team.name}>
                            {team.name}
                        </option>
                    ))}
                </select>
                {!validateNotEmpty(driver.teams) && (
                  <span className={style.errorText}>El campo teams no puede estar vacio.</span>
                )}
                <button type="button" onClick={addSelectedTeamsToList} className={style.buttonAddTeams} >
                    Agregar Escudería
                </button>
                <label className={style.label}>Equipos Seleccionados</label>
                  <ul>
                    {teamList.map((team, index) => (
                      <li key={index}>{team}</li>
                    ))}
                  </ul>
                <label className={style.label}>Agregar escuderias si no existen</label>
                <input type="text" id="teams" value={driver.teams} onChange={handleChange} name="teams" className={style.inputIs}/>
                
                </div>
                
            </form>
            <div className={style.botoncito}>
              <button className={style.bn} type="submit" onClick={handleSubmit}>C R E A R !</button>
            </div>
        </div>
    )
}
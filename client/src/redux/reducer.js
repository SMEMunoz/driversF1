

import {ORDER_NAME, ORDER_DOB, GET_DRIVERS, BASE_DATOS, GET_TEAMS, TEAM } from "./actions";

const initialState = {
    driversGlobal: [],
    allDrivers: [],
    allteams: [],
    baseDatosFilter: null,
    teamFilter: "All", // Establecer el valor predeterminado del filtro de equipo en "All"
  };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DRIVERS:
            return { ...state, driversGlobal:action.payload, allDrivers: action.payload };

        case GET_TEAMS:
            return { ...state, allteams: action.payload, selectTeam: action.payload };

        case ORDER_NAME:
            let ordenados
            if(action.payload === "Ascendente"){
                ordenados = state.driversGlobal.sort((a,b) => a.name.surname < b.name.surname ? 1 : -1)
                return {...state, driversGlobal: [...ordenados]}
            }
            else ordenados = state.driversGlobal.sort((a,b) => b.name.surname < a.name.surname ? 1 : -1)
            return {...state, driversGlobal: [...ordenados]}

        case ORDER_DOB:
            let ordenados2
            if(action.payload === "asc"){
                ordenados2 = state.driversGlobal.sort((a,b) => a.dob > b.dob ? 1 : -1)
                return {...state, driversGlobal: [...ordenados2]}
            }
            else ordenados2 = state.driversGlobal.sort((a,b) => b.dob > a.dob ? 1 : -1)
            return {...state, driversGlobal: [...ordenados2]}

            case BASE_DATOS:
      let baseDatosFilter = action.payload;
      let filteredDrivers = [...state.allDrivers];

      // Aplicar el filtro de base de datos si se estableció
      if (baseDatosFilter === "baseDatos") {
        filteredDrivers = filteredDrivers.filter((driver) => driver.id.length > 2);
      } else if (baseDatosFilter === "508") {
        filteredDrivers = filteredDrivers.filter((driver) => Number(driver.id) <= 508);
      }

      // Aplicar el filtro de equipos
      if (state.teamFilter !== "All") {
        filteredDrivers = filteredDrivers.filter((driver) => driver.teams && driver.teams.includes(state.teamFilter));
      }

      return { ...state, driversGlobal: filteredDrivers, baseDatosFilter };

    case TEAM:
      let teamFilter = action.payload;

      // Aplicar el filtro de equipos
      let filteredDriversByTeam = [...state.allDrivers];
      if (teamFilter !== "All") {
        filteredDriversByTeam = filteredDriversByTeam.filter((driver) => driver.teams && driver.teams.includes(teamFilter));
      }

      // Aplicar el filtro de base de datos si se estableció
      if (state.baseDatosFilter === "baseDatos") {
        filteredDriversByTeam = filteredDriversByTeam.filter((driver) => driver.id.length > 2);
      } else if (state.baseDatosFilter === "508") {
        filteredDriversByTeam = filteredDriversByTeam.filter((driver) => Number(driver.id) <= 508);
      }

      return { ...state, driversGlobal: filteredDriversByTeam, teamFilter };

       
        default:
            return state;
    
    
}}


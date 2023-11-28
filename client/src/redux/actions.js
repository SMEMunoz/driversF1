import axios from "axios"

export const GET_DRIVERS = 'GET_DRIVERS';
export const GET_TEAMS = 'GET_TEAMS';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER_NAME = 'ORDER_NAME';
export const ORDER_DOB = 'ORDER_DOB';
export const BASE_DATOS = 'BASE_DATOS';
export const TEAM = 'TEAM';


//la funcion getCharacters recibe un objeto "drivers" dispatch desde App,jsx, el cual contiene todos los pilotos llamados desde el back-end
// el type es "GET_CHARACTERS" y el payload es el objeto "drivers" pasado por parametro
export const getCharacters = (drivers) => {
    return {
        type: "GET_DRIVERS",
        payload: drivers,
    }
}

export const getTeams = (teams) => {
    return {
        type: "GET_TEAMS",
        payload: teams,
    }
}

export const orderCards = (order) => {
    return {
        type: 'ORDER_NAME',
        payload: order,
    }
}

export const orderDob = (order) => {
    return {
        type: 'ORDER_DOB',
        payload: order,
    }
}

export const baseDatos = (order) => {
    return {
        type: 'BASE_DATOS',
        payload: order,
    }
}

export const selectTeams = (teams) => {
    console.log("estos son los teams:"  + teams)
    return {
        type: 'TEAM',
        payload: teams,
    }
}




//Indicamos el uso de Axios para la API

const axios = require('axios').default;

// Base de la url de la API
const apiUrl = 'https://rickandmortyapi.com/api';

//Funcion para escoger todos los personajes creando una petición a la API 

function getAll(){
  return  axios 
    .get(`${apiUrl}/character`)
    .catch((error) => console.log(error))
   
}

export default {
    getAll
}
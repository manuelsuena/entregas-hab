import axios from 'axios'
import jwt from 'jwt-decode'

const ENDPOINT = "http://localhost:3005"

const AUTH_TOKEN_KEY = 'authToken'
const ROLE = 'role'
const NAME = 'name'


 // Función login

 export function loginUser(email, password){
    return new Promise(async (resolve, reject) => {
        try {
           let res = await axios ({
               url: `${ENDPOINT}/auth`, // url de la autenticación
               method: 'POST', //método de autentificación
               data: {
                   email: email,
                   password: password,
                   grant_type: 'password',
               }    //datos de autentificación
           })
           setAuthToken(res.data.token)
           setIsAdmin(res.data.admin)
           resolve()
        } catch (err) {
          // alert('Error' + err)
          //if(err.response.data.status === '404')
          // alert( err.response.data.message)
          // alert('Error de login:', err)
          reject(err)
        }
    })
   }

    // guardar token en localstorage

 export function setAuthToken(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem(AUTH_TOKEN_KEY, token)
}

//logout
export function clearLogin(){
   axios.defaults.headers.common['Authorization'] = ''
   localStorage.removeItem(AUTH_TOKEN_KEY)
   clearAdmin()
}
  
// Coger el token
export function getAuthToken(){
   return localStorage.getItem(AUTH_TOKEN_KEY)
}

// Conseguir la fecha de exp del token
export function getTokenExpirationDate(encodedToken){
   let token = jwt(encodedToken)
   // si no hay, no sigue
   if(!token.exp){
       return null
   }
   let date = new Date(0)
   date.setUTCSeconds(token.exp)
   return date
}

// Se comprueba si no se ha caducado el token
export function isTokenExpired(token){
   let expirationDate = getTokenExpirationDate(token)
   return expirationDate < new Date()
}

// comprobar si el usuario esta logeado
export function isLoggedIn() {
   let authToken = getAuthToken()
   return !!authToken && !isTokenExpired(authToken) 
}

// funciones para comprobar el rol del user

// Guardar si es admin en localstorage

export function setIsAdmin(admin) {
      localStorage.setItem(ROLE, admin)
}

// Borrar rol del user en localstorage

export function clearAdmin() {
   return localStorage.removeItem(ROLE)
}

// Recuperar el rol de localstorage
export function getIsAdmin() {
  return localStorage.getItem(ROLE)
}


// Comprobar si es admin o no
export function checkAdmin() {
    let role = false
    let admin = getIsAdmin()
    if(admin === 'true') {
        role = true
    }else {
        role = false
    }
    return role 
  }


 
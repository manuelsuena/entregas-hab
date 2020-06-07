import config from './config.js'
const axios = require('axios').default;

const apiKey = config.apiKey;
const Base_URL = "https://ws.audioscrobbler.com/"
const URL_GEO= `2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`
const URL_TRACKS = `/2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`
const URL_TAGS = `/2.0/?method=chart.gettoptags&api_key=${apiKey}&format=json`

async function getArtists(){
    try{
        const response = await axios.get(`${Base_URL}${URL_GEO}`);
        return response
    } catch(error) {
        console.error(error);
    }
}

async function getTopTracks(){
    try{
        const response = await axios.get(`${Base_URL}${URL_TRACKS}`);
        return response
    } catch(error) {
        console.error(error);
    }
}
async function getTopTags(){
    try{
        const response = await axios.get(`${Base_URL}${URL_TAGS}`);
        return response
    } catch(error) {
        console.error(error);
    }
}

function artistGet(name){
    return axios.get(`${Base_URL}${URL_GEO} + name`)
}


export default {
    getArtists,
    getTopTracks,
    getTopTags,
}
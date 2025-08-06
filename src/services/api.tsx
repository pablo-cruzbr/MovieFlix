// O restante muda pois 
//BASE DA URL = https://api.themoviedb.org/3
//URL DA API = https://api.themoviedb.org/3/movie/now_playing?api_key=8da13dd16afa022057d1239915a47e59&language=pt-BR


import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default api;
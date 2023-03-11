import axios from "axios";

/* 
  Creamos una URL base, asi nos ahorramos tener que volver a escribir esto
  cada vez que necesitemos llamar a la API, en vez de eso solo exportamos el modulo
  y tenemos disponibilidad de utilzar todos los verbos como lo estimemos conveniente
*/
const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fd8ed0f3d7cac9db5bd2689e878dd828',
    language: 'en-US'
  }
});

export default movieDB;

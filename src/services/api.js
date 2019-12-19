import axios from 'axios';

const api = axios.create({
  baseURL: 'https://digimon-api.herokuapp.com/api/'
})

export default api
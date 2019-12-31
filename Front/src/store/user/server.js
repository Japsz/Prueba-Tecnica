import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000',
  headers: [{'Content-Type': 'application/json'}]
})

export const checkToken = async obj => await API.post('/checkToken', obj);
export const checkLogin = async obj => await API.post('/getLogin', obj);

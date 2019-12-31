import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://rickandmortyapi.com',
})

export const getCharactersPage = async url => await Api.get(url);

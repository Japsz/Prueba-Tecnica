import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://rickandmortyapi.com',
})

export const getEpisodesPage = async url => await Api.get(url);

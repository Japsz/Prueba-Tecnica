import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_JSONSERVER,
  headers: [{'Content-Type': 'application/json'}]
})

export const getCommentById = async (id,type) => await API.get(`/comments_${type}?${type}Id=${id}&_expand=profile`);
export const deleteComment = async (id,type) => await API.delete(`/comments_${type}/${id}`);
export const addComment = async (obj, type) => await API.post(`/comments_${type}`, obj);

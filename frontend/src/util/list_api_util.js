import axios from 'axios';

export const getList = userId => {
  return axios.get(`/api/lists/${userId}`)
};

export const deleteListItem = movieId => {
  return axios.get(`/api/lists/delete/${movieId}`)
};

export const addListItem = data => {
  return axios.post('/api/lists/', data)
}
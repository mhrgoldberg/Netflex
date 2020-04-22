import axios from 'axios';

export const getList = userId => {
  return axios.get(`/api/lists/${userId}`)
};

export const deleteListItem = data => {
  return axios.post(`/api/lists/delete/`, data)
};

export const addListItem = data => {
  return axios.post('/api/lists/', data)
}
import axios from 'axios';

export const getList = (userId) => {
  return axios.get(`/api/lists/${userId}`)
};

export const deleteListItem = (itemId) => {
  return axios.get(`/api/lists/delete/${itemId}`)
};

export const addListItem = data => {
  return axios.post('/api/lists/', data)
}
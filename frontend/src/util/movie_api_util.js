import axios from 'axios';

export const getMovies = () => {
  return axios.get('/api/movies')
};

export const getMovie = (id) => {
  return axios.get(`/api/movies/${id}`)
};


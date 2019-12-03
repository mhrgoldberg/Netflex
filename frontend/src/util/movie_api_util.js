import axios from 'axios';

export const getMovies = () => {
  return axios.get('/api/movies')
};

export const getMovie = (id) => {
  return axios.get(`/api/movies/${id}`)
};


export const APISearch = (value) => {
  return axios.post(`/api/search/`, {body: value})
};


// make searcg action ==> thunk

// have thunk in props of navbar
// execute search action with this.props.search
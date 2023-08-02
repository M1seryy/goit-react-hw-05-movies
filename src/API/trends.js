import axios from 'axios';

const API_KEY = `e80fd9fb75f14049ed52c4547080278b`;

export const getTrends = async () => {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data.results;
};

export const findById = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data;
};

export const mvovieCast = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data;
};
export const movieOverview = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data;
};

export const findByName = async name => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`;
  const response = await axios.get(URL);
  return response.data;
};

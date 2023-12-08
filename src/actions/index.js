import axios from 'axios';
import * as types from './types';

const API_KEY = '0b1c173294ad6d33f73a62c61c855222';

export const fetchMovies = async (CUSTOM_URL) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${CUSTOM_URL}api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

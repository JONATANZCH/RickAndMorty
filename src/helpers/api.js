import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const getResidentsByLocation = async (dimension) => {
  try {
    const response = await axios.get(`${BASE_URL}/location/${dimension}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { getResidentsByLocation };
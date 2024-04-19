import axios from 'axios';

const apiService = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const get = async (endpoint: string) => {
  try {
    const response = await apiService.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
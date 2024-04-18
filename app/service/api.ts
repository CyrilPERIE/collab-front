import axios from 'axios';

const API_BASE_URL = 'https://collab-back.vercel.app';

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const get = async (endpoint: string) => {
  try {
    const response = await apiService.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
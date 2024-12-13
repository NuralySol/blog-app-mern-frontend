import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (userData) => {
    const response = await axios.post(`${API}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API}/auth/login`, userData);
    return response.data;
};
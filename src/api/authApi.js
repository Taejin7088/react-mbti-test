import axios from 'axios';
import { AUTH_API_URL } from '../constants/url';

export const login = async (userDate) => {
  try {
    const { data } = await axios.post(AUTH_API_URL + '/login', userDate);
    return data;
  } catch (error) {
    return error;
  }
};

export const register = async (userDate) => {
  try {
    const { data } = await axios.post(AUTH_API_URL + '/register', userDate);
    return data;
  } catch (error) {
    return error;
  }
};

export const updataProfile = async (formData) => {
  try {
    const { data } = await axios.patch(AUTH_API_URL + '/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

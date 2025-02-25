import axios from 'axios';
import { AUTH_API_URL } from '../constants/url';
//회원정보서버 API

//로그인을하고 로그인된 유저정보를 받아오는 API
export const login = async (userDate) => {
  try {
    const { data } = await axios.post(AUTH_API_URL + '/login', userDate);
    return data;
  } catch (error) {
    return error;
  }
};

//입력값으로 회원가입을하는 API
export const register = async (userDate) => {
  try {
    const { data } = await axios.post(AUTH_API_URL + '/register', userDate);
    return data;
  } catch (error) {
    return error;
  }
};

//회원의 프로필을 수정하는 API
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

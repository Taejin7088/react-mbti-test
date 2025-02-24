import axios from 'axios';
import { AUTH_API_URL, MBTI_API_URL } from '../constants/url';

const mbtiApi = axios.create({
  baseURL: MBTI_API_URL,
});

//mbti api 요청을 보내기전 유저 토큰확인
mbtiApi.interceptors.request.use(
  async (config) => {
    const { data } = await axios.get(AUTH_API_URL + '/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    });
    if (data?.success) {
      return config;
    }
    return Promise.reject(
      new Error('잘못된 접근입니다. 로그인 페이지로 이동합니다.')
    );
  },
  (error) => {
    Promise.reject(error);
  }
);

export const getTestResults = async () => {
  const response = await mbtiApi.get();
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await mbtiApi.post(resultData);
  return response;
};

export const deleteTestResult = async (id) => {
  const response = await mbtiApi.delete(`/${id}`);
  return response;
};

export const updateTestResultVisibility = async ({ id, isPublic }) => {
  const response = await mbtiApi.patch(`/${id}`, { isPublic });
  return response;
};

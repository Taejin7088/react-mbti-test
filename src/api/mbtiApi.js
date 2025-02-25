import axios from 'axios';
import { AUTH_API_URL, MBTI_API_URL } from '../constants/url';
//MBTI 서버 API

const mbtiApi = axios.create({
  baseURL: MBTI_API_URL,
});

//mbti api 요청을 보내기전 회원정보 서버에 유효한 토큰인지 확인
//유효한 토큰이 아니면 MBTI서버에 접근 안됨
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

//MBIT 포스터 정보를 가져오는 API
export const getTestResults = async () => {
  const response = await mbtiApi.get();
  return response.data;
};

//MBTI 포스터를 추가하는 API
export const createTestResult = async (resultData) => {
  const response = await mbtiApi.post('/', resultData);
  return response;
};

//MBTI 포스터를 삭제하는 API
export const deleteTestResult = async (id) => {
  const response = await mbtiApi.delete(`/${id}`);
  return response;
};

//MBTI 포스터에 공개/비공개 여부를 수정하는 API
export const updateTestResultVisibility = async ({ id, isPublic }) => {
  const response = await mbtiApi.patch(`/${id}`, { isPublic });
  return response;
};

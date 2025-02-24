import axios from 'axios';
import { MBTI_API_URL } from '../constants/url';

export const getTestResults = async () => {
  const response = await axios.get(MBTI_API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(MBTI_API_URL, resultData);
  return response;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(MBTI_API_URL + `/${id}`);
  return response;
};

export const updateTestResultVisibility = async ({ id, isPublic }) => {
  console.log('>>>.', isPublic);
  const response = await axios.patch(MBTI_API_URL + `/${id}`, { isPublic });
  return response;
};

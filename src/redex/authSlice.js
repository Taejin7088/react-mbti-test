import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: !!sessionStorage.getItem('token'),
  nickname: sessionStorage.getItem('nickname'),
  userId: sessionStorage.getItem('userId'),
};
const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.nickname = payload.nickname;
      state.userId = payload.userId;
      state.isLogin = !!sessionStorage.getItem('token');
    },
    logOut: (state) => {
      state.nickname = '';
      state.userId = '';
      state.isLogin = false;
      sessionStorage.clear;
    },
  },
});
// setIsLogin,setUserInfo
export const { logOut, setUserInfo } = auth.actions;
export default auth.reducer;

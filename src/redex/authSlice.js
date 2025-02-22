import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: !!sessionStorage.getItem('token'),
  nickname: sessionStorage.getItem('nickname'),
};
const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.nickname = payload;
      state.isLogin = !!sessionStorage.getItem('token');
    },
  },
});
// setIsLogin,setUserInfo
export const { setIsLogin, setUserInfo } = auth.actions;
export default auth.reducer;

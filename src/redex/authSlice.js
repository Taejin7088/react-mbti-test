import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userName: '',
};
const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state, { payload }) => {
      state.isLogin = payload;
    },
    setUserInfo: (state, { payload }) => {
      state.userName = payload;
    },
  },
});

export const { setIsLogin, setUserInfo } = auth.actions;
export default auth.reducer;

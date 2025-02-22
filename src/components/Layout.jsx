import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserInfo } from '../redex/authSlice';

const Layout = ({ children }) => {
  const { isLogin, nickname } = useSelector((state) => state.auth);
  const disPatch = useDispatch();
  const logOutHandler = () => {
    sessionStorage.clear();
    disPatch(setUserInfo(''));
  };
  return (
    <>
      <header className='flex justify-between items-center bg-gray-100 h-[60px] shadow-xl border-b-[5px]'>
        <Link to={'/'}>
          <div className='m-[30px] text-red-500'>홈</div>
        </Link>
        {isLogin ? (
          <Link to={'/test'}>
            <div className='text-red-500 cursor-pointer'>
              {nickname} 님의 MBTI 알아보기
            </div>
          </Link>
        ) : (
          <></>
        )}
        {isLogin ? (
          <div
            className='m-[30px]  text-red-500 cursor-pointer'
            onClick={logOutHandler}
          >
            로그아웃
          </div>
        ) : (
          <Link to={'/login'}>
            <div className='m-[30px]  text-red-500'>로그인</div>
          </Link>
        )}
      </header>

      <main className='bg-gray-100 flex-1'>{children}</main>
      <footer />
    </>
  );
};

export default Layout;

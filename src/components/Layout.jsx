import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginUserHeader from './LoginUserHeader';

const Layout = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);

  return (
    <>
      <header className='flex justify-between items-center bg-gray-100 h-[60px] shadow-xl border-b-[5px]'>
        <Link to={'/'}>
          <div className='m-[30px] text-red-500'>홈</div>
        </Link>

        {isLogin ? (
          <LoginUserHeader />
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

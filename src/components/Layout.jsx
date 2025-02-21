import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <header className='flex justify-between items-center bg-gray-100 h-[60px] shadow-xl border-b-[5px]'>
        <Link to={'/'}>
          <div className='m-[30px] text-red-500'>홈</div>
        </Link>
        <Link to={'/login'}>
          <div className='m-[30px]  text-red-500'>로그인</div>
        </Link>
      </header>
      <div className='bg-gray-100 h-[calc(100vh-60px)]'>{children}</div>
      <footer />
    </>
  );
};

export default Layout;

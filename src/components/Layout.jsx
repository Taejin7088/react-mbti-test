import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <header className='flex justify-between items-center bg-gray-100 h-[60px] shadow-lg '>
        <Link to={'/'}>
          <div className='m-[30px] text-red-500'>홈</div>
        </Link>
        <Link to={'/login'}>
          <div className='m-[30px]  text-red-500'>로그인</div>
        </Link>
      </header>
      {children}
      <footer />
    </>
  );
};

export default Layout;

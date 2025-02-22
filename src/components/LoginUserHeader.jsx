import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redex/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const LoginUserHeader = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandler = () => {
    sessionStorage.clear();
    disPatch(setUserInfo(''));
    navigate('/login');
  };

  return (
    <div className='flex items-center'>
      <Link to='/profile'>
        <div className='mr-6 text-red-500 text-b font-bold'>프로필</div>
      </Link>

      <Link to='/test'>
        <div className='mr-6 text-red-500 font-bold'>테스트</div>
      </Link>
      <Link to='/results'>
        <div className='mr-6 text-red-500 font-bold'>결과보기</div>
      </Link>
      <div
        className='mr-[30px] p-3 bg-red-500 rounded-xl text-white cursor-pointer'
        onClick={logOutHandler}
      >
        로그아웃
      </div>
    </div>
  );
};

export default LoginUserHeader;

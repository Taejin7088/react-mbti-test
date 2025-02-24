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
    <div className='flex items-center md:gap-0 gap-4'>
      <Link to='/profile'>
        <div className='md:mr-6 md:text-lg text-sm text-red-500 text-b font-bold'>
          프로필
        </div>
      </Link>

      <Link to='/test'>
        <div className='md:mr-6 md:text-lg text-sm text-red-500 font-bold'>
          테스트
        </div>
      </Link>
      <Link to='/results'>
        <div className='md:mr-6 md:text-lg text-sm text-red-500 font-bold'>
          결과보기
        </div>
      </Link>
      <div
        className='mr-[30px] md:p-3 p-2 md:text-lg text-sm bg-red-500 rounded-xl text-white cursor-pointer'
        onClick={logOutHandler}
      >
        로그아웃
      </div>
    </div>
  );
};

export default LoginUserHeader;

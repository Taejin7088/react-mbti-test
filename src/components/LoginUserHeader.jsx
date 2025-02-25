import { useDispatch } from 'react-redux';
import { logOut } from '../redex/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const LoginUserHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //로그아웃을 클릭했을때
  const logOutHandler = () => {
    //세션스토리지를 비우고, 전역상태로 관리중인 값들 로그아웃상태로 변경
    dispatch(logOut());
    navigate('/login');
  };
  //
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

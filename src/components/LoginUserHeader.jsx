import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redex/authSlice';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginUserHeader = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    sessionStorage.clear();
    disPatch(setUserInfo(''));
    navigate('/login');
  };
  return (
    <div>
      <div
        className='m-[30px] p-3 bg-red-500 rounded-xl text-white cursor-pointer'
        onClick={logOutHandler}
      >
        로그아웃
      </div>
    </div>
  );
};

export default LoginUserHeader;

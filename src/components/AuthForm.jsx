import { useState } from 'react';
import { LOGIN, SIGNUP } from '../constants/mode';
import { login, register } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redex/authSlice';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ mode, children }) => {
  //인풋정보를 담을 state
  const [inputData, setInputData] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const disPatch = useDispatch();
  const navigate = useNavigate();

  //로그인하기 버튼을 눌렀을때 실행
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //props로 받은 mode가 LOGIN 로그인 API실행
      if (mode === LOGIN) {
        const data = await login(inputData);
        if (data.code) {
          throw data;
        }
        //새로고침되고나서도 쓰기 위해 토큰,id,nick네임저장하기
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('nickname', data.nickname);
        sessionStorage.setItem('userId', data.userId);
        disPatch(setUserInfo(data));
        alert('로그인성공');
      }
      //props로 받은 mode가 SIGNUP 회원가입 API실행
      if (mode === SIGNUP) {
        const data = await register(inputData);
        if (data.code) {
          throw data;
        }
        alert('회원가입성공, 로그인 페이지로 이동합니다.');
        navigate('/login');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <section className='flex flex-col bg-white mr-auto ml-auto items-center rounded-xl w-[100%] h-[100%] md:w-[50%] md:mt-10 md:h-auto'>
      <h1 className='text-[40px] p-[20px]'>
        {mode === SIGNUP ? '회원가입' : '로그인'}
      </h1>

      <div className='bg-gray-100 w-[90%] p-4 rounded-md'>
        <form
          className='flex flex-col p-4 rounded-md gap-7'
          action='submit'
          onSubmit={submitHandler}
        >
          <input
            type='text'
            placeholder='아이디'
            value={inputData.id}
            onChange={(e) => {
              setInputData({ ...inputData, id: e.target.value });
            }}
            className='bg-white border rounded-md p-5'
          />
          <input
            type='password'
            placeholder='비밀번호'
            value={inputData.pw}
            onChange={(e) => {
              setInputData({ ...inputData, password: e.target.value });
            }}
            className='bg-white border rounded-md p-5'
          />

          {/* mode가 SIGNUP 일 때만 보이는 입력폼 */}
          {mode === SIGNUP ? (
            <input
              type='text'
              placeholder='닉네임'
              value={inputData.pw}
              onChange={(e) => {
                setInputData({ ...inputData, nickname: e.target.value });
              }}
              className='bg-white border rounded-md p-5'
            />
          ) : (
            <></>
          )}

          <button className='bg-red-500 border rounded-md p-5 text-white'>
            {mode === SIGNUP ? '회원가입' : '로그인'}
          </button>
        </form>
      </div>
      <div className='pb-[20px] pt-[10px]'>{children}</div>
    </section>
  );
};

export default AuthForm;

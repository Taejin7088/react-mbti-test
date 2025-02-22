import { useState } from 'react';
import { LOGIN, SIGNUP } from '../constants/mode';
import { login, register } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redex/authSlice';

const AuthForm = ({ mode, children }) => {
  const [inputData, setInputData] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const disPatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (mode === LOGIN) {
        const data = await login(inputData);
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('nickname', data.nickname);
        disPatch(setUserInfo(data.nickname));
        alert('로그인성공');
      }
      if (mode === SIGNUP) {
        await register(inputData);
        alert('회원가입성공');
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

import { Link } from 'react-router-dom';
import { SIGNUP } from '../constants/mode';

const AuthForm = ({ mode, children }) => {
  return (
    <section className='flex flex-col bg-white mr-auto ml-auto items-center rounded-xl w-[100%] h-[100%] md:w-[50%] md:mt-10 md:h-auto'>
      <h1 className='text-[40px] p-[20px]'>
        {mode === SIGNUP ? '회원가입' : '로그인'}
      </h1>

      <div className='bg-gray-100 w-[90%] p-4 rounded-md'>
        <form className='flex flex-col p-4 rounded-md gap-7' action='submit'>
          <input
            type='text'
            placeholder='아이디'
            className='bg-white border rounded-md p-5'
          />
          <input
            type='password'
            placeholder='비밀번호'
            className='bg-white border rounded-md p-5'
          />

          {mode === SIGNUP ? (
            <input
              type='password'
              placeholder='닉네임'
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

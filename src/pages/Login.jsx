import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Login = () => {
  return (
    <section className='flex flex-col bg-white mr-auto ml-auto items-center rounded-xl w-[100%] h-[100%] md:w-[50%] md:mt-10 md:h-auto'>
      <h1 className='text-[40px] p-[20px]'>로그인</h1>

      <div className='bg-gray-100 w-[90%] p-4 rounded-md'>
        <form className='flex flex-col p-4 rounded-md gap-7' action='submit'>
          <AuthForm />
          <button className='bg-red-500 border rounded-md p-5 text-white'>
            로그인
          </button>
        </form>
      </div>

      <div className='pb-[20px] pt-[10px]'>
        계정이 없으신가요?
        <Link className='text-red-500 ml-3 font-bold' to={'/signup'}>
          회원가입
        </Link>
      </div>
    </section>
  );
};

export default Login;

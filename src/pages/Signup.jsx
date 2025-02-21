import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Signup = () => {
  return (
    <section className='flex flex-col bg-white mr-auto ml-auto items-center rounded-xl w-[100%] h-[100%] md:w-[50%] md:mt-10 md:h-auto'>
      <h1 className='text-[40px] p-[20px]'>회원가입</h1>

      <div className='bg-gray-100 w-[90%] p-4 rounded-md'>
        <form className='flex flex-col p-4 rounded-md gap-7' action='submit'>
          <AuthForm />
          <input
            type='password'
            placeholder='닉네임'
            className='bg-white border rounded-md p-5'
          />
          <button className='bg-red-500 border rounded-md p-5 text-white'>
            회원가입
          </button>
        </form>
      </div>

      <div className='pb-[20px] pt-[10px]'>
        이미계정이 있으신가요?
        <Link className='text-red-500 ml-3 font-bold' to={'/login'}>
          로그인
        </Link>
      </div>
    </section>
  );
};

export default Signup;

import React from 'react';

const AuthForm = () => {
  return (
    <>
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
    </>
  );
};

export default AuthForm;

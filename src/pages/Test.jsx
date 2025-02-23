import { useState } from 'react';

import TestForm from '../components/TestForm';
import { Link } from 'react-router-dom';
import { mbtiDescriptions } from '../data/mbtiDescriptions';

const Test = () => {
  //테스트결과를 제출하지 않아서 값이 비어 있으면 테스트보여주고
  //테스트를 완료해서 MBTI 결과가 있으면 결과를 보여줌
  const [userMbti, setUserMbti] = useState('');

  return userMbti ? (
    <>
      <section className='flex flex-col bg-white mx-auto items-center rounded-xl w-[100%] h-[100%] md:w-[90%] md:mt-10 md:h-auto'>
        <div className='flex flex-col w-[50%]'>
          <div className='py-7 mt-8 text-3xl font-semibold'>
            테스트 결과 : {userMbti}
          </div>
          <div className='py-7 mb:text-3xl'>{mbtiDescriptions[userMbti]}</div>
        </div>
        <Link
          className='bg-red-500 border rounded-md w-[50%] p-5 m-5 mb-[50px] text-white flex justify-center items-center'
          to='/results'
        >
          <button className=''>결과 페이지로 이동하기</button>
        </Link>
      </section>
    </>
  ) : (
    <TestForm setUserMbti={setUserMbti} />
  );
};

export default Test;

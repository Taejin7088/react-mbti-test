import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { mbtiDescriptions } from '../data/mbtiDescriptions';

const MbtiShare = () => {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const nickname = searchParams.get('nickname');

  if (!mbti || !nickname) {
    return <p>잘못된 접근입니다.</p>;
  }

  return (
    <>
      <section className='flex flex-col bg-white mx-auto items-center rounded-xl w-[100%] h-[100%] md:w-[90%] md:mt-10 md:h-auto'>
        <div className='flex flex-col md:w-[50%] w-[80%]'>
          <div className='py-7 mt-8 text-3xl font-semibold'>
            {nickname}님의 MBTI
            <div className='mt-10'>{mbti}</div>
          </div>
          <div className='py-3 mb:text-3xl'>{mbtiDescriptions[mbti]}</div>
        </div>
        <Link
          className='bg-red-500 border rounded-md md:w-[50%] w-[80%] p-5 m-10 mb-[50px] text-white flex justify-center items-center'
          to='/results'
        >
          <button className=''>다른사람 결과 보기</button>
        </Link>
      </section>
    </>
  );
};

export default MbtiShare;

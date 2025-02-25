import { useState } from 'react';
import TestForm from '../components/TestForm';
import { Link } from 'react-router-dom';
import { mbtiDescriptions } from '../data/mbtiDescriptions';
import { useSelector } from 'react-redux';

const Test = () => {
  //테스트결과를 제출하지 않아서 값이 비어 있으면 테스트보여주고
  //테스트를 완료해서 MBTI 결과가 있으면 결과를 보여줌
  const [userMbti, setUserMbti] = useState('');
  const { nickname } = useSelector((state) => state.auth);

  //글리치 배포되면 링크 바꾸기 > DEPLOYMENT_URL
  const link = `localhost:5173/`;
  const resultLink = `${link}mbti-share?nickname=${nickname}&mbti=${userMbti}`;
  const copyResultLinkHandler = async () => {
    await navigator.clipboard.writeText(resultLink);
    alert('링크가 복사되었습니다.');
  };

  return userMbti ? (
    <>
      <section className='flex flex-col bg-white mx-auto items-center rounded-xl w-[100%] h-[100%] md:w-[90%] md:mt-10 md:h-auto'>
        <div className='flex flex-col md:w-[50%] w-[80%]'>
          <div className='py-7 mt-8 text-3xl font-semibold'>
            테스트 결과 : {userMbti}
          </div>
          <div className='py-7 mb:text-3xl'>{mbtiDescriptions[userMbti]}</div>
        </div>
        <Link
          className='bg-red-500 border rounded-md md:w-[50%] w-[80%] p-5 m-5 text-white flex justify-center items-center'
          to='/results'
        >
          <button className=''>결과 페이지로 이동하기</button>
        </Link>
        <button
          onClick={copyResultLinkHandler}
          className='bg-red-500 border rounded-md md:w-[50%] w-[80%] p-5 mb-5 text-white flex justify-center items-center'
        >
          테스트 결과 공유링크 복사하기
        </button>
      </section>
    </>
  ) : (
    <TestForm setUserMbti={setUserMbti} />
  );
};

export default Test;

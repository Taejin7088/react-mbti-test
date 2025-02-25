import { Link, useSearchParams } from 'react-router-dom';
import { mbtiDescriptions } from '../data/mbtiDescriptions';

//Test페이지에서 복사한 링크를 입력하면 보이는 페이지
const MbtiShare = () => {
  const [searchParams] = useSearchParams();

  //링크의 쿼리스트링으로 mbti와 닉네임을 받아와서 페이지에 그려줌
  const mbti = searchParams.get('mbti');
  const nickname = searchParams.get('nickname');

  //쿼리스트링에 둘중하나의 값이라도 비어있으면 표시
  if (!mbti || !nickname) {
    return <div>잘못된 접근입니다.</div>;
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

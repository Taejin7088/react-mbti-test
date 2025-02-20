import React from 'react';

const Home = () => {
  return (
    <main className='flex flex-col items-center'>
      <section className='text-[40px] font-black m-[30px] '>
        무료성격테스트
      </section>

      <section className='font-light'>
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요
      </section>

      <section className='flex m-[30px] '>
        <div className='bg-white w-[400px] ml-10 mr-10 shadow-xl rounded-xl '>
          <p className='pt-7 pl-7 '>성격 유형 검사</p>
          <p className='p-7'>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className='bg-white w-[400px] ml-10 mr-10 shadow-xl rounded-xl '>
          <p className='pt-7 pl-7'>성격 유형 이해</p>
          <p className='p-7'>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className='bg-white w-[400px] ml-10 mr-10 shadow-xl rounded-xl '>
          <p className='pt-7 pl-7'>팀 평가</p>
          <p className='p-7'>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </section>

      <section className='m-[30px]'>
        <button className='pt-3 pb-3 pl-7 pr-7 bg-red-500 rounded-full text-white'>
          내 성격 알아보러 가기
        </button>
      </section>
    </main>
  );
};

export default Home;

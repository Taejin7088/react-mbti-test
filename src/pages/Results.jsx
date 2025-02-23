import React, { useEffect, useState } from 'react';
import { deleteTestResult, getTestResults } from '../api/mbtiApi';
import { mbtiDescriptions } from '../data/mbtiDescriptions';
import { useSelector } from 'react-redux';

const Results = () => {
  const { userId } = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getTestResults();
      setPosts(data);
    };
    getData();
  }, [posts]);

  const deleteHandler = async (id) => {
    await deleteTestResult(id);
    setPosts([]);
  };

  return (
    <section className='flex flex-col bg-white mx-auto items-center rounded-xl w-[100%] h-[100%] md:w-[90%] md:mt-10 md:h-auto'>
      <h1 className='py-7 text-3xl font-bold'>모든 테스트 결과</h1>
      {posts.map((post) => {
        return (
          <div key={post.id} className='bg-blue-950 w-[70%] mb-10 rounded-xl'>
            <div className='flex flex-col'>
              <div className='flex md:flex-row justify-between flex-col'>
                <h2 className='text-white text-xl mx-4 my-2 md:m-4'>
                  {post.nickname}
                </h2>
                <p className='text-gray-500 md:m-4 ml-4 mb-3'>{post.time}</p>
              </div>
              <div className='text-gray-500 mx-auto  w-[90%] border-solid border border-gray-500 '></div>
              <h2 className='text-yellow-300 mx-4 my-2 text-3xl font-semibold'>
                {post.mbti}
              </h2>
              <div className='text-gray-200 m-4'>
                {mbtiDescriptions[post.mbti]}
              </div>
              {userId === post.userId ? (
                <div className='mb-5 flex gap-6 justify-end mr-5'>
                  <button className='text-white py-3 md:px-5 px-3 bg-blue-500 rounded-xl'>
                    비공개로 전환
                  </button>
                  <button
                    onClick={() => {
                      deleteHandler(post.id);
                    }}
                    className='text-white py-3 md:px-5 px-3 bg-red-500 rounded-xl'
                  >
                    삭제
                  </button>
                </div>
              ) : (
                <div className='m-3' />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Results;

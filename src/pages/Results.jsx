import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from '../api/mbtiApi';
import { mbtiDescriptions } from '../data/mbtiDescriptions';
import { useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const Results = () => {
  const { userId } = useSelector((state) => state.auth);
  const queryClient = useQueryClient();
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(['mbti']);
    },
  });

  const { mutate: updateMutate } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(['mbti']);
    },
  });

  const {
    data: posts,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['mbti'],
    queryFn: getTestResults,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생 했습니다.</div>;
  }

  const deleteHandler = (id) => {
    deleteMutate(id);
  };

  const openViewHandler = (id, isPublic) => {
    updateMutate(id, !isPublic);
  };

  return (
    <section className='flex flex-col bg-white mx-auto items-center rounded-xl w-[100%] h-[100%] md:w-[90%] md:mt-10 md:h-auto'>
      <h1 className='py-7 text-3xl font-bold'>모든 테스트 결과</h1>
      {posts.map((post) => {
        //작성한 유저이거나 공개표시 되어있으면 게시글 보여주기
        if (userId === post.userId || post.isPublic) {
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
                    <button
                      onClick={() => {
                        openViewHandler(post.id, post.isPublic);
                      }}
                      className='text-white py-3 md:px-5 px-3 bg-blue-500 rounded-xl'
                    >
                      {post.isPublic ? '비공개로 전환' : '공개로 전환'}
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
        }

        //작성한 유저가 아니고, isPublic이 false면 포스터 안그림
        return <div key={post.id}></div>;
      })}
    </section>
  );
};

export default Results;

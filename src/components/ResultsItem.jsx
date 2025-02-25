import { mbtiDescriptions } from '../data/mbtiDescriptions';
import { useMbitMutate } from '../hooks/mutations/useMbtiMutate';

const ResultsItem = ({ post, userId }) => {
  //텐스택쿼리의 mutete함수 불러오는 훅
  const { deleteMbtiMutate, updateMbitIsPublicMutate } = useMbitMutate();

  //id값을 기준으로 MBIT 포스터를 지우는 API요청을 실행
  const deleteHandler = (id) => {
    deleteMbtiMutate(id);
  };

  //id값을 기준으로 MBIT 포스터의 공개여부를 수정하는 API요청을 실행
  const openViewHandler = (id, isPublic) => {
    updateMbitIsPublicMutate({ id, isPublic: !isPublic });
  };

  //props로 내려받은 MBTI 포스터정보로 포스터를 리턴
  return (
    <div className='bg-blue-950 w-[70%] mb-10 rounded-xl'>
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
        <div className='text-gray-200 m-4'>{mbtiDescriptions[post.mbti]}</div>
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
};

export default ResultsItem;

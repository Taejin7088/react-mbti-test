import { useSelector } from 'react-redux';
import { useMbtiQuery } from '../hooks/querys/useMbtiQuery';
import ResultsItem from '../components/ResultsItem';

const Results = () => {
  const { userId } = useSelector((state) => state.auth);
  const { data: posts, isPending, isError } = useMbtiQuery();

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>데이터 조회 중 오류가 발생 했습니다.</div>;
  }

  return (
    <section className='flex flex-col bg-white mx-auto items-center rounded-xl w-[100%] h-[100%] md:w-[90%] md:mt-10 md:h-auto'>
      <h1 className='py-7 text-3xl font-bold'>모든 테스트 결과</h1>
      {posts.map((post) => {
        //작성한 유저이거나 공개표시 되어있으면 게시글 보여주기
        if (userId === post.userId || post.isPublic) {
          return <ResultsItem key={post.id} post={post} userId={userId} />;
        }

        //작성한 유저가 아니고, isPublic이 false면 포스터 안그림
      })}
    </section>
  );
};

export default Results;

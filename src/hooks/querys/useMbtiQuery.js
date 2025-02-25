import { useQuery } from '@tanstack/react-query';
import { getTestResults } from '../../api/mbtiApi';
import { QUERY_KEY } from '../../constants/queryKey';

//{data, isPending , isError} 을 리턴하는 mbti useQuery를 정의
export const useMbtiQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MBTI],
    queryFn: getTestResults,
  });
};

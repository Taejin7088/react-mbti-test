import { useQuery } from '@tanstack/react-query';
import { getTestResults } from '../../api/mbtiApi';
import { QUERY_KEY } from '../../constants/queryKey';

export const useMbtiQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MBTI],
    queryFn: getTestResults,
  });
};

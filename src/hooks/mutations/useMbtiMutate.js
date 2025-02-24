import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deleteTestResult,
  updateTestResultVisibility,
} from '../../api/mbtiApi';
import { QUERY_KEY } from '../../constants/queryKey';

export const useMbitMutate = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteMbtiMutate } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MBTI]);
    },
  });

  const { mutate: updateMbitIsPublicMutate } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MBTI]);
    },
  });

  return { deleteMbtiMutate, updateMbitIsPublicMutate };
};

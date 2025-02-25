import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createTestResult,
  deleteTestResult,
  updateTestResultVisibility,
} from '../../api/mbtiApi';
import { QUERY_KEY } from '../../constants/queryKey';

//mutate 함수를 리턴하는 훅
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

  const { mutate: createMbtiMutate } = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MBTI]);
    },
  });

  return { deleteMbtiMutate, updateMbitIsPublicMutate, createMbtiMutate };
};

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import useToast from '../useToast';
import userState from '../../recoil/atoms/userState';

const keyword = 'comments';

const useCommentMutation = ({ requestFn, queryKeyword = keyword, postId, onMutate: expected, ...options }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const setUser = useSetRecoilState(userState);

  const { mutate } = useMutation({
    mutationFn: async variables => {
      await requestFn({ postId, ...variables });
    },
    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey: [queryKeyword, postId] });

      const prevComments = queryClient.getQueryData([queryKeyword, postId]);

      queryClient.setQueryData([queryKeyword, postId], oldData => expected(oldData, variables));

      return { prevComments };
    },
    onError: (error, variables, { prevComments }) => {
      toast.error({ message: error.response.data.error });
      setUser(null);

      queryClient.setQueryData([queryKeyword, postId], prevComments);
    },
    ...options,
  });

  return mutate;
};

export default useCommentMutation;

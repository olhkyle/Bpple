import { useQueryClient, useMutation } from '@tanstack/react-query';

const keyword = 'comments';

const useCommentMutation = ({
  requestFn,
  queryKeyword = keyword,
  postId,
  onMutate: expected,
  onError: handleError,
  ...options
}) => {
  const queryClient = useQueryClient();

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
      if (handleError) handleError(error);

      queryClient.setQueryData([queryKeyword, postId], prevComments);
    },
    ...options,
  });

  return mutate;
};

export default useCommentMutation;

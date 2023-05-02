import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { updateCertifiedComment } from '../../constants/mutateComment';
import { updateCommentCertified } from '../../api/post';
import userState from '../../recoil/atoms/userState';

const useUpdateCertifiedMutation = postId => {
  const queryClient = useQueryClient();
  const setUser = useSetRecoilState(userState);

  const commentQueryKey = ['comments', postId];
  const postDetailQueryKey = ['postDetail', postId];

  const { mutate } = useMutation({
    mutationFn: async variables => {
      await updateCommentCertified({ postId, ...variables });
    },

    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey: ['comments', 'postDetail'] });

      const prevComments = queryClient.getQueryData(commentQueryKey);
      const prevPost = queryClient.getQueryData(postDetailQueryKey);

      queryClient.setQueryData(commentQueryKey, oldData => updateCertifiedComment(oldData, variables));
      queryClient.setQueryData(postDetailQueryKey, oldData => ({
        ...oldData,
        post: { ...oldData.post, certified: variables.certified },
      }));

      return { prevComments, prevPost };
    },
    onError: (error, variables, { prevComments, prevPost }) => {
      setUser(null);

      queryClient.setQueryData(commentQueryKey, prevComments);
      queryClient.setQueryData(postDetailQueryKey, prevPost);
    },
  });

  return mutate;
};

export default useUpdateCertifiedMutation;

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { toggleCertified } from '../../constants/mutateComment';
import { toggleCommentCertified } from '../../api/post';
import userState from '../../recoil/atoms/userState';

const useToggleCertifiedMutation = postId => {
  const queryClient = useQueryClient();
  const setUser = useSetRecoilState(userState);

  const commentQueryKey = ['comments', postId];
  const postDetailQueryKey = ['postDetail', postId];

  const { mutate } = useMutation({
    mutationFn: async variables => {
      await toggleCommentCertified({ postId, ...variables });
    },

    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey: ['comments', 'postDetail'] });

      const prevComments = queryClient.getQueryData(commentQueryKey);
      const prevPost = queryClient.getQueryData(postDetailQueryKey);

      queryClient.setQueryData(commentQueryKey, oldData => toggleCertified(oldData, variables));
      queryClient.setQueryData(postDetailQueryKey, oldData => ({
        ...oldData,
        post: { ...oldData.post, certified: variables.certified },
      }));

      return { prevComments, prevPost };
    },
    onError: (_, __, { prevComments, prevPost }) => {
      setUser(null);

      queryClient.setQueryData(commentQueryKey, prevComments);
      queryClient.setQueryData(postDetailQueryKey, prevPost);
    },
  });

  return mutate;
};

export default useToggleCertifiedMutation;

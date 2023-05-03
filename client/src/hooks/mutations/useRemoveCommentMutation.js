import { removeComment } from '../../api/post';
import { remove } from '../../constants/mutateComment';
import usePostInfoMutation from './usePostInfoMutation';

const useRemoveCommentMutation = postId =>
  usePostInfoMutation({
    postId,
    requestFn: removeComment,
    commentUpdateFn: remove,
    postUpdateFn: (oldData, variables) =>
      variables.certified ? { ...oldData, post: { ...oldData.post, certified: false } } : oldData,
  });

export default useRemoveCommentMutation;

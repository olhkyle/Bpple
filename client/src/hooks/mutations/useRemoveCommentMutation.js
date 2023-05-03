import { removeComment } from '../../api/post';
import { remove } from '../../constants/mutateComment';
import useCommentMutation from './useCommentMutation';

const useRemoveCommentMutation = postId =>
  useCommentMutation({
    requestFn: removeComment,
    updateFn: remove,
    postId,
  });

export default useRemoveCommentMutation;

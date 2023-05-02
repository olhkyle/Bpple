import { removeComment } from '../../api/post';
import { remove } from '../../constants/mutateComment';
import commentsQueryKey from '../../constants/commentsQueryKey';
import useCommentMutation from './useCommentMutation';

const useRemoveCommentMutation = postId =>
  useCommentMutation({
    requestFn: removeComment,
    queryKeyword: commentsQueryKey,
    postId,
    updateFn: remove,
  });

export default useRemoveCommentMutation;

import { addComment } from '../../api/post';
import { add } from '../../constants/mutateComment';
import commentsQueryKey from '../../constants/commentsQueryKey';
import useCommentMutation from './useCommentMutation';

const useAddCommentMutation = postId =>
  useCommentMutation({
    requestFn: addComment,
    queryKeyword: commentsQueryKey,
    postId,
    updateFn: add,
  });

export default useAddCommentMutation;

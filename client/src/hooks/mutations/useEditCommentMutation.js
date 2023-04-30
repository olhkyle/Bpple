import { editComment } from '../../api/post';
import { edit } from '../../constants/mutateComment';
import commentsQueryKey from '../../constants/commentsQueryKey';
import useCommentMutation from './useCommentMutation';

const useEditCommentMutation = postId =>
  useCommentMutation({
    requestFn: editComment,
    queryKeyword: commentsQueryKey,
    postId,
    onMutate: edit,
  });

export default useEditCommentMutation;

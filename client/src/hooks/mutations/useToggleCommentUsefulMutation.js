import useCommentMutation from './useCommentMutation';
import commentsQueryKey from '../../constants/commentsQueryKey';
import { toggleUseful } from '../../constants/mutateComment';
import { checkIsUseFul } from '../../api/post';

const useToggleCommentUsefulMutation = postId =>
  useCommentMutation({
    requestFn: checkIsUseFul,
    queryKeyword: commentsQueryKey,
    postId,
    updateFn: toggleUseful,
  });

export default useToggleCommentUsefulMutation;

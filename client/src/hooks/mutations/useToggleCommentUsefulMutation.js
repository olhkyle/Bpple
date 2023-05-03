import useCommentMutation from './useCommentMutation';
import { toggleUseful } from '../../constants/mutateComment';
import { toggleCommentUseFul } from '../../api/post';

const useToggleCommentUsefulMutation = postId =>
  useCommentMutation({
    requestFn: toggleCommentUseFul,
    updateFn: toggleUseful,
    postId,
  });

export default useToggleCommentUsefulMutation;

import useCommentMutation from './useCommentMutation';
import commentsQueryKey from '../../constants/commentsQueryKey';
import { updateCertifiedComment } from '../../constants/mutateComment';
import { updateCommentCertified } from '../../api/post';

const useUpdateCertifiedCommentMutation = postId =>
  useCommentMutation({
    requestFn: updateCommentCertified,
    queryKeyword: commentsQueryKey,
    postId,
    onMutate: updateCertifiedComment,
  });

export default useUpdateCertifiedCommentMutation;

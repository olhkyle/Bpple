import { useSetRecoilState } from 'recoil';
import { addComment } from '../../api/post';
import { add } from '../../constants/mutateComment';
import commentsQueryKey from '../../constants/commentsQueryKey';
import useCommentMutation from './useCommentMutation';
import useToast from '../useToast';
import userState from '../../recoil/atoms/userState';

const useAddCommentMutation = postId => {
  const toast = useToast();
  const setUser = useSetRecoilState(userState);

  return useCommentMutation({
    requestFn: addComment,
    queryKeyword: commentsQueryKey,
    postId,
    onMutate: add,
    onError: error => {
      toast.error({ message: error.response.data.error });
      setUser(null);
    },
  });
};

export default useAddCommentMutation;

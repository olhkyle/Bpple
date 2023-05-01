import { getPost } from '../api/post';

const staleTime = 3000;

const communityPostQuery = postId => ({
  queryKey: ['communityPost', postId],
  queryFn: async () => {
    const { data } = await getPost(postId);
    return data;
  },
  staleTime,
});

export default communityPostQuery;

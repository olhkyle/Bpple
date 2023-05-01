import { getMyPosts } from '../api/posts';

const staleTime = 3000;

const communityMeQuery = () => ({
  queryKey: ['communityMe'],
  queryFn: async () => {
    const { data } = await getMyPosts();
    return data;
  },
  staleTime,
});

export default communityMeQuery;

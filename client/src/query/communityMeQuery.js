import { getMyPosts } from '../api/posts';

const staleTime = 3000;

const communityMeQuery = () => ({
  queryKey: ['communityMe'],
  queryFn: async ({ pageParam = 1 }) => {
    const { data } = await getMyPosts({ pageParam });
    return data;
  },
  getNextPageParam: (lastPage, allPages) => {
    const nextPage = allPages.length + 1;

    const { totalLength } = lastPage;
    return totalLength === 0 || Math.ceil(totalLength / 5) === allPages.length ? undefined : nextPage;
  },
  select: data => ({
    posts: data.pages.map(({ posts }) => posts).flat(),
    totalLength: data.pages[0].totalLength,
  }),
  staleTime,
});

export default communityMeQuery;

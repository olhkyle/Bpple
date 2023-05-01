import { getUserPosts } from '../api/posts';

const staleTime = 3000;

const userPostsQuery = nickName => ({
  queryKey: ['posts', nickName],
  queryFn: async ({ pageParam = 1 }) => {
    const { data } = await getUserPosts({ param: nickName, pageParam });
    return data;
  },
  getNextPageParam: (lastPage, allPages) => {
    const nextPage = allPages.length + 1;

    const { totalLength } = lastPage;
    return totalLength === 0 || Math.ceil(totalLength / 10) === allPages.length ? undefined : nextPage;
  },
  staleTime,
  select: data => ({
    posts: data.pages.map(({ posts }) => posts).flat(),
    totalLength: data.pages[0].totalLength,
  }),
  suspense: true,
});

export default userPostsQuery;

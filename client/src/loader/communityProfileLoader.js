import { userPostsQuery, userProfileQuery } from '../query';

const communityProfileLoader =
  queryClient =>
  async ({ params }) => {
    const { nickName } = params;

    if (!nickName) {
      throw new Response('Not Found', { status: 404 });
    }

    const profileQuery = userProfileQuery(nickName);
    const postsQuery = userPostsQuery(nickName);

    // eslint-disable-next-line no-return-await
    const profile = queryClient.getQueryData(profileQuery.queryKey) ?? (await queryClient.fetchQuery(profileQuery));
    const posts = queryClient.getQueryData(postsQuery.queryKey) ?? (await queryClient.fetchInfiniteQuery(postsQuery));

    return { profile, posts };
  };

export default communityProfileLoader;

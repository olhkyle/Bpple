import { postsByNickNameQuery, profileByNickNameQuery } from '../queries';

const profileLoader =
  queryClient =>
  async ({ params }) => {
    const { nickName } = params;

    if (!nickName) {
      throw new Response('Not Found', { status: 404 });
    }

    const profileQuery = profileByNickNameQuery(nickName);
    const postsQuery = postsByNickNameQuery(nickName);

    // eslint-disable-next-line no-return-await
    const profile = queryClient.getQueryData(profileQuery.queryKey) ?? (await queryClient.fetchQuery(profileQuery));
    const posts = queryClient.getQueryData(postsQuery.queryKey) ?? (await queryClient.fetchInfiniteQuery(postsQuery));

    return { profile, posts };
  };

export default profileLoader;

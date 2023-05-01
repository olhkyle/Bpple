import { communityPostQuery } from '../query';

const communityPostLoader =
  queryClient =>
  async ({ params }) => {
    const query = communityPostQuery(params.postId);

    // eslint-disable-next-line no-return-await
    const { post } = queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
    return post;
  };

export default communityPostLoader;

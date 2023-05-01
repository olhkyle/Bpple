import { postsByCategoryQuery } from '../queries';

const communityCategoryLoader =
  queryClient =>
  async ({ params }) => {
    const query = postsByCategoryQuery(params.category);

    // eslint-disable-next-line no-return-await
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchInfiniteQuery(query));
  };

export default communityCategoryLoader;

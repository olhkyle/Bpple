import { categoryQuery } from '../query';

const communityCategoryLoader =
  queryClient =>
  async ({ params }) => {
    const query = categoryQuery(params.category);

    // eslint-disable-next-line no-return-await
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchInfiniteQuery(query));
  };

export default communityCategoryLoader;

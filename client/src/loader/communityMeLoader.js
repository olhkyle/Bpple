import { myPostsQuery } from '../queries';

const communityMeLoader = queryClient => async () => {
  const query = myPostsQuery();
  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchInfiniteQuery(query));
};

export default communityMeLoader;

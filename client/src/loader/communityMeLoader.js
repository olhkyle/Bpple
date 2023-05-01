import { communityMeQuery } from '../query';

const communityMeLoader = queryClient => async () => {
  const query = communityMeQuery();
  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchInfiniteQuery(query));
};

export default communityMeLoader;

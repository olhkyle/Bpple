import { profileQuery } from '../query';

const profileLoader = queryClient => async () => {
  const query = profileQuery();

  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

export default profileLoader;

import { fetchUserProfile } from '../api/profile';

const staleTime = 3000;

const userProfileQuery = nickName => ({
  queryKey: ['profile', nickName],
  queryFn: async () => {
    const { data } = await fetchUserProfile(nickName);
    return data;
  },
  staleTime,
});

export default userProfileQuery;

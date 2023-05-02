import { fetchProfile } from '../api/profile';

const staleTime = 3000;

const myProfileQuery = () => ({
  queryKey: ['profile'],
  queryFn: async () => {
    const { data } = await fetchProfile();
    return data;
  },
  staleTime,
});

export default myProfileQuery;

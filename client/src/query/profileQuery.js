import { fetchProfile } from '../api/profile';

const staleTime = 3000;

const profileQuery = () => ({
  queryKey: ['profile'],
  queryFn: async () => {
    const { data } = await fetchProfile();
    return data;
  },
  staleTime,
  suspense: true,
});

export default profileQuery;

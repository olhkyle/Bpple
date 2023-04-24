import { useQuery } from '@tanstack/react-query';

const STALE_TIME = 3000;

/**
 * @param {{
 * inputValue: string
 * queryFn: () => promise
 * }} props
 */
const useAutoCompleteQuery = (inputValue, queryFn) => {
  const { data: posts } = useQuery({
    queryKey: ['posts', inputValue],
    staleTime: STALE_TIME,
    queryFn: async () => {
      const { data: posts } = await queryFn(inputValue);
      return posts;
    },
  });

  return posts;
};

export default useAutoCompleteQuery;

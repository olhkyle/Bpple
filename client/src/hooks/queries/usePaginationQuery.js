import { useInfiniteQuery } from '@tanstack/react-query';

const usePaginationQuery = ({ queryFn, queryKeyword, param, select }) => {
  const { data, hasNextPage, hasPreviousPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: [queryKeyword, param],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await queryFn({ param, pageParam });
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;

      const { totalLength } = lastPage;
      return totalLength === 0 || Math.ceil(totalLength / 10) === allPages.length ? undefined : nextPage;
    },
    select,
  });

  return { data, hasNextPage, hasPreviousPage, isFetchingNextPage, fetchNextPage, refetch };
};

export default usePaginationQuery;

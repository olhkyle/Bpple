import { useQuery } from '@tanstack/react-query';
import React from 'react';

const STALE_TIME = 3000;

/**
 * @param {{
 * inputValue: string
 * queryFn: () => promise
 * }} props
 */
const useAutoCompleteQuery = ({ inputValue, queryFn, category }) => {
  const [value, setValue] = React.useState([]);

  const { data: posts, isFetched } = useQuery({
    queryKey: ['posts', inputValue, category],
    queryFn: async () => {
      const { data: posts } = await queryFn({ keyword: inputValue, category });
      return posts;
    },
    staleTime: STALE_TIME,
    select: data => data.posts.map(post => ({ ...post, value: post.id })),
  });

  React.useEffect(() => {
    if (isFetched) setValue(posts);
  }, [posts, isFetched]);

  return value;
};

export default useAutoCompleteQuery;

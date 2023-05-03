import { useQuery } from '@tanstack/react-query';
import React from 'react';

const staleTime = 3000;

/**
 * @param {{
 * inputValue: string
 * queryFn: () => promise
 * }} props
 */
const useAutoCompleteQuery = ({ inputValue, category, queryFn }) => {
  const [value, setValue] = React.useState([]);

  const { data: posts, isFetched } = useQuery({
    queryKey: ['posts', inputValue, category],
    queryFn: async () => {
      const { data: posts } = await queryFn({ keyword: inputValue, category });
      return posts;
    },
    staleTime,
    select: data => data.posts.map(post => ({ ...post, value: post.id })),
  });

  React.useEffect(() => {
    if (isFetched) setValue(posts);
  }, [posts, isFetched]);

  return value;
};

export default useAutoCompleteQuery;

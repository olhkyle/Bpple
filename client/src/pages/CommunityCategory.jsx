import React from 'react';
import styled from '@emotion/styled';
import { Container } from '@mantine/core';
import { CommunityCategorySection } from '../components/community';
import { getPostsByCategory } from '../api/posts';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  color: var(--font-color);
`;

const staleTime = 3000;

const categoryQuery = category => ({
  queryKey: ['category', category],
  queryFn: async ({ pageParam = 1 }) => {
    const { data } = await getPostsByCategory({ param: category, pageParam });
    return data;
  },
  getNextPageParam: (lastPage, allPages) => {
    const nextPage = allPages.length + 1;

    const { totalLength } = lastPage;
    return totalLength === 0 || Math.ceil(totalLength / 10) === allPages.length ? undefined : nextPage;
  },
  staleTime,
  select: data => ({
    posts: data.pages.map(({ posts }) => posts).flat(),
    totalLength: data.pages[0].totalLength,
  }),
});

export const communityCategoryLoader =
  queryClient =>
  async ({ params }) => {
    const query = categoryQuery(params.category);

    // eslint-disable-next-line no-return-await
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchInfiniteQuery(query));
  };

const CommunityCategory = () => (
  <Wrapper>
    <CommunityCategorySection />
  </Wrapper>
);

export { categoryQuery };
export default CommunityCategory;

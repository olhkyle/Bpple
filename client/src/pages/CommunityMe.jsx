import React from 'react';
import styled from '@emotion/styled';
import { Container, Title } from '@mantine/core';
import { getMyPosts } from '../api/posts';
import { CommunityMyPosts, CommunitySkeleton } from '../components/community';

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

const communityMeQuery = () => ({
  queryKey: ['communityMe'],
  queryFn: async () => {
    const { data } = await getMyPosts();
    return data;
  },
  staleTime,
});

const communityMeLoader = queryClient => async () => {
  const query = communityMeQuery();
  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const CommunityMe = () => (
  <Wrapper>
    <Title size="52px" mt="40px">
      내가 작성한 글 목록
    </Title>
    <React.Suspense fallback={<CommunitySkeleton length={10} />}>
      <CommunityMyPosts />
    </React.Suspense>
  </Wrapper>
);

export { communityMeQuery, communityMeLoader };
export default CommunityMe;

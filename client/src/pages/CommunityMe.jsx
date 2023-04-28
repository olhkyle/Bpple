import React from 'react';
import styled from '@emotion/styled';
import Recoil from 'recoil';
import { Chip, Container, Flex, Group, Title } from '@mantine/core';
import { getMyPosts } from '../api/posts';
import userState from '../recoil/atoms/userState';
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

const STALE_TIME = 3000;

const communityMeQuery = userId => ({
  queryKey: ['communityMe', userId],
  queryFn: async () => {
    const { data } = await getMyPosts(userId);
    return data;
  },
  staleTime: STALE_TIME,
  suspense: true,
});

const communityMeLoader = queryClient => async () => {
  const loginUser = Recoil.useRecoilValue(userState);

  const query = communityMeQuery(loginUser.email);
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

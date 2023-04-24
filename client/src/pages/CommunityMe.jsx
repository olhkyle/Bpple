import React from 'react';
import styled from '@emotion/styled';
import Recoil from 'recoil';
import { Chip, Container, Flex, Group, Title } from '@mantine/core';
import { getMyPosts } from '../api/posts';
import userState from '../recoil/atoms/userState';
import { CommunityPosts, CommunitySkeleton } from '../components/community';

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
});

const communityMeLoader = queryClient => async () => {
  const loginUser = Recoil.useRecoilValue(userState);

  const query = communityMeQuery(loginUser.email);
  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const CommunityMe = () => {
  const [currentFilter, setCurrentFilter] = React.useState('recent');

  return (
    <Wrapper>
      <Title size="52px" mt="40px">
        내가 작성한 글 목록
      </Title>
      <Flex justify="flex-end">
        <Chip.Group value={currentFilter} onChange={setCurrentFilter}>
          <Group position="center">
            <Chip value="recent">최신 순</Chip>
            <Chip value="old">오래된 순</Chip>
          </Group>
        </Chip.Group>
      </Flex>
      <React.Suspense fallback={<CommunitySkeleton length={10} />}>
        <CommunityPosts currentFilter={currentFilter} />
      </React.Suspense>
    </Wrapper>
  );
};

export { communityMeQuery, communityMeLoader };
export default CommunityMe;

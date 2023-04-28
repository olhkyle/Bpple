import React from 'react';
import styled from '@emotion/styled';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { Chip, Flex, Group, List } from '@mantine/core';
import userState from '../../recoil/atoms/userState';
import { communityMeQuery } from '../../pages/CommunityMe';
import { EmptyPostIndicator, PostItem } from '.';

const MyPosts = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

const CommunityMyPosts = () => {
  const loginUser = Recoil.useRecoilValue(userState);
  // todo : loader 관련 useLoaderData hook 사용 예정
  const { data } = useQuery(communityMeQuery(loginUser.email));
  const [currentFilter, setCurrentFilter] = React.useState('recent');

  const filteredPosts = [...data.posts].sort((a, b) =>
    currentFilter === 'recent' ? new Date(b.createAt) - new Date(a.createAt) : new Date(a.createAt - b.createAt)
  );

  return (
    <>
      {filteredPosts.length === 0 ? (
        <EmptyPostIndicator />
      ) : (
        <>
          <Flex justify="flex-end">
            <Chip.Group value={currentFilter} onChange={setCurrentFilter}>
              <Group position="center">
                <Chip value="recent">최신 순</Chip>
                <Chip value="old">오래된 순</Chip>
              </Group>
            </Chip.Group>
          </Flex>
          <MyPosts>
            {filteredPosts.map(post => (
              <PostItem key={post.title} post={post} />
            ))}
          </MyPosts>
        </>
      )}
    </>
  );
};

export default CommunityMyPosts;

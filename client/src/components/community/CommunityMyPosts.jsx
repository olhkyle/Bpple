import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Chip, Flex, Group, List, Text } from '@mantine/core';
import { communityMeQuery } from '../../pages/CommunityMe';
import { EmptyPostIndicator, PostItem } from '.';

const MyPosts = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const CommunityMyPosts = () => {
  const { data } = useQuery(communityMeQuery());
  const [currentFilter, setCurrentFilter] = React.useState('recent');

  const filteredPosts = [...data.posts].sort((a, b) =>
    currentFilter === 'recent'
      ? new Date(b.createAt) - new Date(a.createAt)
      : new Date(a.createAt) - new Date(b.createAt)
  );

  return (
    <>
      {filteredPosts.length === 0 ? (
        <EmptyPostIndicator />
      ) : (
        <>
          <Flex justify="end" pos="relative">
            <Text pos="absolute" top="-6.3rem" fz="5rem" fw="600" color="var(--font-color)">
              {filteredPosts.length}
            </Text>
            <Chip.Group value={currentFilter} onChange={setCurrentFilter}>
              <Group position="center" mt="2rem">
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

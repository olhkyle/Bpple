import React from 'react';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Chip, Flex, Group, List, Text, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FILTERS from '../../constants/filters';
import { EmptyPostIndicator, PostItem, ShowMoreButton, SideFilter } from '.';
import filterPosts from '../../utils/filterPosts';
import sortPosts from '../../utils/sortPosts';

const PostsContainer = styled(Flex)`
  margin-top: 1rem;
  width: 100%;
  overflow: hidden;
`;

const MyPosts = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Posts = ({ queryFn }) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(queryFn);

  const [currentSort, setCurrentSort] = React.useState('recent');
  const [currentFilter, setCurrentFilter] = React.useState(FILTERS.all);
  const [opened, { toggle }] = useDisclosure(false);

  const filteredPosts = filterPosts(data.posts, currentFilter);

  return (
    <>
      <Flex justify="end" pos="relative">
        <Text pos="absolute" top="-6.3rem" fz="5rem" fw="600" color="var(--font-color)">
          {data.totalLength}
        </Text>
        <Burger
          opened={opened}
          onClick={toggle}
          pos="absolute"
          top="2rem"
          left="0"
          color="var(--font-color)"
          aria-label={opened ? 'Close' : 'Open'}
        />
        <Chip.Group value={currentSort} onChange={setCurrentSort}>
          <Group position="center" mt="2rem">
            <Chip value="recent">최신 순</Chip>
            <Chip value="old">오래된 순</Chip>
          </Group>
        </Chip.Group>
      </Flex>
      <PostsContainer>
        <SideFilter open={opened} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
        {filteredPosts.length !== 0 ? (
          <MyPosts>
            {sortPosts(filteredPosts, currentSort).map(post => (
              <PostItem key={post.title} post={post} />
            ))}
          </MyPosts>
        ) : (
          <EmptyPostIndicator />
        )}
      </PostsContainer>
      {hasNextPage && <ShowMoreButton onClick={fetchNextPage} loading={isFetchingNextPage} />}
    </>
  );
};

export default Posts;

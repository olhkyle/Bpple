import React from 'react';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Divider, Flex, List, Text } from '@mantine/core';
import FILTERS from '../../constants/filters';
import { ShowMoreButton, PostItem, EmptyPostIndicator, SideFilter } from '.';

const PostsContainer = styled(Flex)`
  margin-top: 1rem;
  width: 100%;
  overflow: hidden;
`;

const CategoryPosts = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  width: 100%;
`;

const CommunityCategoryPosts = ({ queryFn }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [currentFilter, setCurrentFilter] = React.useState(FILTERS.all);

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(queryFn);

  const filteredPosts =
    data?.posts.filter(post =>
      currentFilter === FILTERS.active
        ? !post.completed
        : currentFilter === FILTERS.completed
        ? post.completed
        : currentFilter === FILTERS.certified
        ? post.certified
        : true
    ) ?? [];

  return (
    <>
      <Flex gap="10px" mt="5.5rem" mb="10px" align="center" fw="600">
        <Text fz="2rem" fw="600" mt="1px">
          질문
        </Text>
        <Text c="blue" fz="2.5rem">
          {data?.totalLength}
        </Text>
      </Flex>
      <Divider mb="1rem" variant="dashed" />
      <Flex pos="relative">
        <Burger
          opened={opened}
          onClick={toggle}
          pos="absolute"
          top="0.5rem"
          left="0"
          color="var(--font-color)"
          aria-label={opened ? 'Close' : 'Open'}
        />
        <PostsContainer>
          <SideFilter open={opened} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
          {filteredPosts.length === 0 ? (
            <EmptyPostIndicator />
          ) : (
            <CategoryPosts>
              {filteredPosts.map(post => (
                <PostItem key={post.id} post={post} />
              ))}
            </CategoryPosts>
          )}
        </PostsContainer>
      </Flex>
      {hasNextPage && <ShowMoreButton loading={isFetchingNextPage} onClick={fetchNextPage} />}
    </>
  );
};

export default CommunityCategoryPosts;

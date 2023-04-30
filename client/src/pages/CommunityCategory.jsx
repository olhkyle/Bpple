import React from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Container, Divider, Flex, Image, List, Text, Title } from '@mantine/core';
import { FiArrowRight } from 'react-icons/fi';
import { COMMUNITY_PATH } from '../routes/routePaths';
import { AutoComplete, EmptyPostIndicator, PostItem, ShowMoreButton, SideFilter } from '../components/community';
import { getPostsByCategory, getSearchedPosts } from '../api/posts';
import FILTERS from '../constants/filters';

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

const CategoryImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  figure.mantine-Image-figure {
    width: ${({ category }) => (category === 'mac' ? '90%' : category === 'ipad' ? '65%' : '70%')};
  }
`;

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

const CATEGORY = {
  iphone: 'iPhone',
  ipad: 'iPad',
  mac: 'Mac',
};

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

const CommunityCategory = () => {
  const { category } = useParams();

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(categoryQuery(category));

  const [opened, { toggle }] = useDisclosure(false);
  const [currentFilter, setCurrentFilter] = React.useState(FILTERS.all);

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
    <Wrapper>
      <Flex>
        <Link to={`${COMMUNITY_PATH}`}>
          <Flex gap="5px" align="center" mr="5px" fz="15px" fw="600" td="none" c="var(--font-color)">
            <Text>Community</Text>
            <FiArrowRight />
          </Flex>
        </Link>
        <Link to={`${COMMUNITY_PATH}/${category}`}>
          <Flex gap="5px" align="center" fz="15px" fw="600" td="none" c="var(--font-color)">
            <Text>{CATEGORY[category]}</Text>
            <BsArrowUpRightSquare />
          </Flex>
        </Link>
      </Flex>
      <Flex gap="0.5rem" mt="2rem">
        <CategoryImage
          src={`/community/${category}/${category}-category.png`}
          alt={`${category}-category-img`}
          category={category}
        />
        <Flex direction="column" justify="center">
          <Title mb="3rem">{CATEGORY[category]}</Title>
          <AutoComplete width={720} queryFn={getSearchedPosts} category={category} />
        </Flex>
      </Flex>

      <Flex gap="10px" mt="6rem" mb="1rem" align="center" fw="600">
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
          <SideFilter open={opened} setCurrentFilter={setCurrentFilter} />
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
    </Wrapper>
  );
};

export default CommunityCategory;

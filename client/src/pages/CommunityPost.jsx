import React from 'react';
import styled from '@emotion/styled';
import { Link, useLoaderData } from 'react-router-dom';
import { Container, Divider, Flex, Text } from '@mantine/core';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { COMMUNITY_PATH } from '../routes/routePaths';
import { getPost } from '../api/post';
import Comments from '../components/community/Comments';
import PostContent from '../components/community/PostContent';

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

const communityPostQuery = postId => ({
  queryKey: ['communityPost', postId],
  queryFn: async () => {
    const { data } = await getPost(postId);
    return data;
  },
  staleTime,
});

export const communityPostLoader =
  queryClient =>
  async ({ params }) => {
    const query = communityPostQuery(params.postId);

    // eslint-disable-next-line no-return-await
    const { post } = queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
    return post;
  };

const CommunityPost = () => {
  const post = useLoaderData();

  return (
    <Wrapper>
      <Link to={`${COMMUNITY_PATH}/${post.category.toLowerCase()}`}>
        <Flex gap="5px" align="center" fz="15px" fw="600" td="none" c="var(--font-color)">
          <Text>{post.category}</Text>
          <BsArrowUpRightSquare />
        </Flex>
      </Link>
      <PostContent post={post} />
      <Divider variant="dashed" />
      <Comments />
    </Wrapper>
  );
};

export default CommunityPost;

import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Divider } from '@mantine/core';
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
  const params = useParams();
  const {
    data: { post },
  } = useQuery(communityPostQuery(params.postId));

  return (
    <Wrapper>
      <PostContent post={post} />
      <Divider variant="dashed" />
      <Comments postAuthor={post.author} />
    </Wrapper>
  );
};

export default CommunityPost;

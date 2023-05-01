import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Divider } from '@mantine/core';
import { communityPostQuery } from '../query';
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

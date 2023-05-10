import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Divider } from '@mantine/core';
import { postDetailQuery } from '../queries';
import { PostContent, CommentSection, CommentLoader } from '../components';
import {
  useAddCommentMutation,
  useEditCommentMutation,
  useRemoveCommentMutation,
  useToggleCommentUsefulMutation,
  useToggleCertifiedMutation,
} from '../hooks/mutations';

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

const CommunityPostDetail = () => {
  const { postId } = useParams();
  const { data: post } = useQuery(postDetailQuery(postId));

  const mutateFns = {
    editMutate: useEditCommentMutation(postId),
    removeMutate: useRemoveCommentMutation(postId),
    addMutate: useAddCommentMutation(postId),
    toggleUsefulMutate: useToggleCommentUsefulMutation(postId),
    toggleCertifiedMutate: useToggleCertifiedMutation(postId),
  };

  return (
    <Wrapper>
      <PostContent post={post} />
      <Divider variant="dashed" />
      <React.Suspense fallback={<CommentLoader />}>
        <CommentSection
          postInfo={{ id: postId, author: post.author, certified: post.certified }}
          mutateFns={mutateFns}
        />
      </React.Suspense>
    </Wrapper>
  );
};

export default CommunityPostDetail;

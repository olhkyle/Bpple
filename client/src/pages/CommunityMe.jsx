import React from 'react';
import styled from '@emotion/styled';
import { Container, Title } from '@mantine/core';

import { CommunityMyPosts, CommunitySkeleton } from '../components/community';

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

const CommunityMe = () => (
  <Wrapper>
    <Title size="52px" mt="40px">
      내가 작성한 글 목록
    </Title>
    <React.Suspense fallback={<CommunitySkeleton length={10} />}>
      <CommunityMyPosts />
    </React.Suspense>
  </Wrapper>
);

export default CommunityMe;

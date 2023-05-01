import React from 'react';
import { Container, Skeleton } from '@mantine/core';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { userPostsQuery } from '../query';
import { AvatarProfileInfo, CommunityCategoryPosts } from '../components';

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

const CommunityProfile = () => {
  const { nickName } = useParams();

  return (
    <Wrapper>
      <React.Suspense fallback={<Skeleton width="100%" height={200} m="40px 0" />}>
        <AvatarProfileInfo nickName={nickName} />
      </React.Suspense>
      <React.Suspense fallback={<Skeleton width="100%" height={500} m="40px 0" />}>
        <CommunityCategoryPosts queryFn={userPostsQuery(nickName)} />
      </React.Suspense>
    </Wrapper>
  );
};

export default CommunityProfile;

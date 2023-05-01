import React from 'react';
import { Container, Skeleton } from '@mantine/core';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from '../api/profile';
import AvatarProfileInfo from '../components/profile/AvatarProfileInfo';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--font-color);
`;

const staleTime = 3000;

const userProfileQuery = nickName => ({
  queryKey: ['profile', nickName],
  queryFn: async () => {
    const { data } = await fetchUserProfile(nickName);
    return data;
  },
  staleTime,
  suspense: true,
});

const CommunityProfile = () => {
  const { nickName } = useParams();

  return (
    <Wrapper>
      <React.Suspense fallback={<Skeleton width="100%" height={200} m="40px 0" />}>
        <AvatarProfileInfo nickName={nickName} />
      </React.Suspense>
    </Wrapper>
  );
};

export { userProfileQuery };
export default CommunityProfile;

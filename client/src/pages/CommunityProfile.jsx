import React from 'react';
import { Container, Skeleton } from '@mantine/core';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from '../api/profile';
import AvatarProfileInfo from '../components/profile/AvatarProfileInfo';
import { getUserPosts } from '../api/posts';
import CommunityCategoryPosts from '../components/community/CommunityCategoryPosts';

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

const userProfileQuery = nickName => ({
  queryKey: ['profile', nickName],
  queryFn: async () => {
    const { data } = await fetchUserProfile(nickName);
    return data;
  },
  staleTime,
  suspense: true,
});

const userPostsQuery = nickName => ({
  queryKey: ['posts', nickName],
  queryFn: async () => {
    const { data } = await getUserPosts(nickName);
    return data;
  },
  staleTime,
  suspense: true,
  select: data => ({
    posts: data.pages.map(({ posts }) => posts).flat(),
    totalLength: data.pages[0].totalLength,
  }),
});

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

export { userProfileQuery };
export default CommunityProfile;

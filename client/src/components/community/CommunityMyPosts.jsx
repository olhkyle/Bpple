import React from 'react';
import styled from '@emotion/styled';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { List } from '@mantine/core';
import userState from '../../recoil/atoms/userState';
import { communityMeQuery } from '../../pages/CommunityMe';
import PostItem from './PostItem';

const MyPosts = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

const CommunityMyPosts = ({ currentFilter }) => {
  const loginUser = Recoil.useRecoilValue(userState);
  const { data } = useQuery(communityMeQuery(loginUser.email));

  const filteredPosts = [...data.posts].sort((a, b) =>
    currentFilter === 'recent' ? new Date(b.createAt) - new Date(a.createAt) : new Date(a.createAt - b.createAt)
  );

  return (
    <MyPosts>
      {filteredPosts.map(post => (
        <PostItem key={post.title} post={post} />
      ))}
    </MyPosts>
  );
};

export default CommunityMyPosts;

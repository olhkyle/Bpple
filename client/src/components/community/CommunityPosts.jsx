import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import Recoil from 'recoil';
import { Badge, Flex, Group, List, Text, Title } from '@mantine/core';
import { AiFillCheckCircle, AiFillApple } from 'react-icons/ai';
import ProfileAvatar from '../profile/avatar/ProfileAvatar';
import { communityMeQuery } from '../../pages/CommunityMe';
import userState from '../../recoil/atoms/userState';

const Post = styled(List.Item)`
  border: 1px solid var(--opacity-border-color);
  border-radius: 18px;
  cursor: pointer;

  div.mantine-List-itemWrapper {
    width: 100%;
  }

  &:hover {
    border: 1px solid var(--hover-font-color);
  }

  @media screen and (max-width: 720px) {
    width: 675px;
  }
`;

const CheckCircleIcon = styled.i`
  font-size: 24px;
  color: ${({ completed }) => (completed ? '#58be7d' : '#c2c2c2')};
`;

const AppleLogoIcon = styled.i`
  font-size: 24px;
  color: var(--font-color);
`;

const CommunityPosts = ({ currentFilter }) => {
  const loginUser = Recoil.useRecoilValue(userState);
  const { data } = useQuery(communityMeQuery(loginUser.email));

  const filteredPosts = [...data.posts].sort((a, b) =>
    currentFilter === 'recent' ? new Date(b.createAt) - new Date(a.createAt) : new Date(a.createAt - b.createAt)
  );

  return (
    <List display="flex" mt="3rem" sx={{ flexDirection: 'column', gap: '1rem' }}>
      {filteredPosts.map(({ id, title, createdAt, category, comments, completed, avatarId }) => (
        <Post key={id} p="24px" fz="15px" bg="var(--opacity-bg-color)">
          <Flex mih={50} gap="xl">
            <ProfileAvatar avatarId={avatarId} />
            <Group
              display="flex"
              sx={{
                flexDirection: 'column',
                alignItems: 'start',
                wordBreak: 'keep-all',
              }}>
              <Title size="21px" fw="600" c="var(--font-color)">
                {title}
              </Title>
              <Flex sx={{ flexDirection: 'column' }}>
                <Text c="var(--font-color)">{createdAt}</Text>
                <Group display="flex" mt="10px" fz="20px" sx={{ alignItems: 'center', gap: '10px' }}>
                  <CheckCircleIcon completed={completed}>
                    <AiFillCheckCircle />
                  </CheckCircleIcon>
                  <AppleLogoIcon>
                    <AiFillApple />
                  </AppleLogoIcon>
                </Group>
              </Flex>
            </Group>
            <Group
              display="flex"
              ml="auto"
              align="flex-end"
              sx={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Badge
                w={100}
                size="lg"
                variant="outline"
                color={category === 'iPhone' ? 'red' : category === 'mac' ? 'green' : 'blue'}
                sx={{ cursor: 'default' }}>
                {category}
              </Badge>
              <Text c="var(--font-color)">답글 {comments.length}</Text>
            </Group>
          </Flex>
        </Post>
      ))}
    </List>
  );
};

export default CommunityPosts;

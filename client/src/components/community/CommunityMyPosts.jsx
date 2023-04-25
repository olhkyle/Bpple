import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import Recoil from 'recoil';
import { Badge, Flex, Group, List, Text, Title } from '@mantine/core';
import { communityMeQuery } from '../../pages/CommunityMe';
import ProfileAvatar from '../profile/avatar/ProfileAvatar';
import userState from '../../recoil/atoms/userState';
import { AppleRecommendIcon, CheckedCircleIcon } from '.';

const MyPosts = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

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

const PostDescription = styled(Group)`
  display: flex;
  flex-direction: column;
  align-items: start;
  word-break: keep-all;
`;

const CommunityMyPosts = ({ currentFilter }) => {
  const loginUser = Recoil.useRecoilValue(userState);
  const { data } = useQuery(communityMeQuery(loginUser.email));

  const filteredPosts = React.useMemo(
    () =>
      [...data.posts].sort((a, b) =>
        currentFilter === 'recent' ? new Date(b.createAt) - new Date(a.createAt) : new Date(a.createAt - b.createAt)
      ),
    [data, currentFilter]
  );

  return (
    <MyPosts>
      {filteredPosts.map(({ id, title, createAt, category, comments, completed, avatarId }) => (
        <Post key={id} p="24px" fz="15px" bg="var(--opacity-bg-color)">
          <Flex mih={50} gap="xl">
            <ProfileAvatar avatarId={avatarId} />
            <PostDescription>
              <Title size="21px" fw="600" c="var(--font-color)">
                {title}
              </Title>
              <Flex direction="column">
                <Text c="var(--font-color)">{createAt}</Text>
                <Flex mt="10px" fz="20px" gap="1rem" align="center">
                  <CheckedCircleIcon completed={completed} />
                  {comments.some(({ certified }) => certified) && <AppleRecommendIcon />}
                </Flex>
              </Flex>
            </PostDescription>
            <Flex ml="auto" direction="column" justify="space-between" align="flex-end">
              <Badge
                w={100}
                size="lg"
                variant="outline"
                color={category === 'iPhone' ? 'red' : category === 'mac' ? 'green' : 'blue'}>
                {category}
              </Badge>
              <Text pr="0.8rem" c="var(--font-color)">
                답글 {comments.length}
              </Text>
            </Flex>
          </Flex>
        </Post>
      ))}
    </MyPosts>
  );
};

export default CommunityMyPosts;

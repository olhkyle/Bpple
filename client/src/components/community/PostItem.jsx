import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Badge, Flex, Group, List, Text, Title } from '@mantine/core';
import { COMMUNITY_POST_PATH } from '../../routes/routePaths';
import ProfileAvatar from '../profile/avatar/ProfileAvatar';
import formattedDate from '../../utils/formattedDate';
import AppleRecommendIcon from './AppleRecommendIcon';
import CheckedCircleIcon from './CheckedCircleIcon';

const Post = styled(List.Item)`
  border: 1px solid var(--opacity-border-color);
  border-radius: 18px;
  cursor: pointer;

  div.mantine-List-itemWrapper {
    width: 100%;

    span {
      display: inline-flex;
    }
  }

  &:hover {
    border: 1px solid var(--hover-font-color);
  }

  @media screen and (max-width: 720px) {
    width: 675px;
  }
`;

const PostLink = styled(Link)`
  padding: 24px;
  width: 100%;
  height: 100%;
`;

const PostDescription = styled(Group)`
  display: flex;
  flex-direction: column;
  align-items: start;
  word-break: keep-all;
`;

const PostItem = ({ post }) => {
  const { id, title, createAt, category, completed, comments, avatarId } = post;

  return (
    <Post key={id} fz="15px" bg="var(--opacity-bg-color)">
      <PostLink to={`${COMMUNITY_POST_PATH}/${id}`}>
        <Flex mih={50} gap="xl">
          <ProfileAvatar avatarId={avatarId} />
          <PostDescription>
            <Title size="21px" fw="600" c="var(--font-color)">
              {title}
            </Title>
            <Flex direction="column">
              <Text c="var(--font-color)">{formattedDate(new Date(createAt))}</Text>
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
            {/* 갖고 있는 기기 목록 Badge 추가 */}
            <Text pr="0.8rem" c="var(--font-color)">
              답글 {comments.length}
            </Text>
          </Flex>
        </Flex>
      </PostLink>
    </Post>
  );
};

export default PostItem;

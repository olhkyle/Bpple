import React from 'react';
import styled from '@emotion/styled';
import { Badge, Flex, Text, Title } from '@mantine/core';
import formattedDate from '../../utils/formattedDate';
import { ProfileAvatar } from '../common';
import CheckedCircleIcon from './CheckedCircleIcon';
import AppleRecommendIcon from './AppleRecommendIcon';

const PostSection = styled.section`
  margin-top: 2.5rem;
`;

const PostTitle = styled(Title)`
  width: 980px;
  font-size: 2.5rem;
  word-break: keep-all;
`;

const AuthorProfile = styled.header`
  display: flex;
  gap: 20px;
  margin-top: 2rem;
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const Content = styled(Text)`
  margin: 2rem auto;
  width: 90%;
  font-size: 18px;
  line-height: 2rem;
  text-align: justify;
  word-break: keep-all;
`;

const PostContent = ({ post }) => {
  const { title, createAt, content, completed, avatarId, certified, nickName, level, point } = post;

  return (
    <PostSection>
      <Flex gap="1rem" mb="0.5rem" ml="auto" h="30px">
        <CheckedCircleIcon completed={completed} />
        {certified && <AppleRecommendIcon />}
      </Flex>

      <PostTitle>{title}</PostTitle>

      <Text mt="0.5rem" ml="0.2rem" fz="15px" c="grey">
        {formattedDate(new Date(createAt))}
      </Text>
      <AuthorProfile>
        <ProfileAvatar avatarId={avatarId} />
        <Flex display="flex" gap="10px" direction="column">
          <Text mt="-3px" ml="2px" fz="21px" fw="500">
            {nickName}
          </Text>
          <Flex gap="8px" align="center">
            <Badge variant="outline" size="lg" fz="14px">
              레벨 {level}
            </Badge>
            <Badge variant="outline" size="lg" fz="14px">
              포인트 {point}
            </Badge>
          </Flex>
        </Flex>
      </AuthorProfile>
      <Content>{content}</Content>
    </PostSection>
  );
};

export default PostContent;
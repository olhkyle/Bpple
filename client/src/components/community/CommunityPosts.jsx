import React from 'react';
import styled from '@emotion/styled';
import { Badge, Flex, Group, Text, Title } from '@mantine/core';
import { AiFillCheckCircle } from 'react-icons/ai';
import ProfileAvatar from '../profile/ProfileAvatar';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

const Post = styled.li`
  padding: 24px;
  font-size: '15px';
  border: 1px solid var(--opacity-border-color);
  border-radius: 18px;
  background-color: var(--opacity-bg-color);
  cursor: pointer;

  &:hover {
    border: 1px solid var(--hover-font-color);
  }

  @media screen and (max-width: 720px) {
    width: 675px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  font-size: 20px;
`;

const CheckCircleIcon = styled.i`
  color: ${({ completed }) => (completed ? '#58be7d' : '#c2c2c2')};
`;

const AppleRecommendIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CommunityPosts = ({ posts }) => (
  <Container>
    {posts.map(({ id, title, createdAt, category, comments, completed }) => (
      <Post key={id}>
        <Flex mih={50} gap="xl" align="align-items">
          <ProfileAvatar />
          <Group display="flex" sx={{ flexDirection: 'column', alignItems: 'start', wordBreak: 'keep-all' }}>
            <Title size="21px" fw="600">
              {title}
            </Title>
            <div>
              <Text c="var(--font-color)">{createdAt}</Text>
              <IconContainer>
                <CheckCircleIcon completed={completed}>
                  <AiFillCheckCircle />
                </CheckCircleIcon>
                <AppleRecommendIcon>
                  <img
                    src={document.body.dataset.theme === 'light' ? '/logo-dark.svg' : '/logo-light.svg'}
                    alt="logo"
                  />
                </AppleRecommendIcon>
              </IconContainer>
            </div>
          </Group>
          <Group
            display="flex"
            ml="auto"
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Badge
              w={100}
              variant="gradient"
              size="lg"
              gradient={
                category === 'iphone'
                  ? { from: 'indigo', to: 'cyan' }
                  : category === 'mac'
                  ? { from: 'teal', to: 'lime' }
                  : { from: 'orange', to: 'red' }
              }>
              {category}
            </Badge>
            <Badge w={80} size="lg" bg="#f5f5f7">
              답글 {comments.length}
            </Badge>
          </Group>
        </Flex>
      </Post>
    ))}
  </Container>
);

export default CommunityPosts;

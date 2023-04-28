import React from 'react';
import styled from '@emotion/styled';
import { Button, Flex, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { COMMUNITY_QUESTION_PATH } from '../../routes/routePaths';

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5rem;
  padding: 3rem 2rem;
  width: 100%;
  border-radius: 20px;
  background-color: var(--secondary-bg-color);
`;

const EmptyPostIndicator = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title mb="0.5rem" fz="2rem" fw="500" ta="center">
        작성한 글이 없습니다 👷🏻‍♂️
      </Title>
      <Button onClick={() => navigate(COMMUNITY_QUESTION_PATH)} w="300px" radius="xl" fz="md">
        질문하기
      </Button>
    </Container>
  );
};

export default EmptyPostIndicator;

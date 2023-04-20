import React from 'react';
import styled from '@emotion/styled';
import { Container, Title } from '@mantine/core';

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

const CommunityMain = () => {
  const [state, setstate] = React.useState(0);

  return (
    <Wrapper>
      <Title size="54px" mt="40px">
        FineApple이 지원하는 커뮤니티
      </Title>
    </Wrapper>
  );
};

export default CommunityMain;

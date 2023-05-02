import React from 'react';
import { Container } from '@mantine/core';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { postsByNickNameQuery } from '../queries';
import { AvatarProfileInfo, Posts } from '../components';

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

const CommunityProfile = () => {
  const { nickName } = useParams();

  return (
    <Wrapper>
      <AvatarProfileInfo nickName={nickName} />
      <Posts queryFn={postsByNickNameQuery(nickName)} />
    </Wrapper>
  );
};

export default CommunityProfile;

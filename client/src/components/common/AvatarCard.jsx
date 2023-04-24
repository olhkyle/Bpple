import React from 'react';
import { Flex, Text } from '@mantine/core';
import styled from '@emotion/styled';
import ProfileAvatar from '../profile/avatar/ProfileAvatar';

const Container = styled(Flex)`
  padding: 10px;
  width: 260px;
`;

const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled(Flex)`
  margin-left: 20px;
  flex-direction: column;
  font-size: 14px;
`;

const Title = styled(Text)`
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
`;

const Content = styled(Text)`
  font-size: 13px;
  font-weight: 400;
  color: var(--font-color);
`;

/**
 * @param {{
 * avatarId: string
 * title: string
 * content: string
 * }} props
 */
const AvatarCard = ({ avatarId, title, content }) => (
  <Container>
    <AvatarWrapper>
      <ProfileAvatar avatarId={avatarId} />
    </AvatarWrapper>
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  </Container>
);

export default AvatarCard;

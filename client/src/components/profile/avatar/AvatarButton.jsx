import styled from '@emotion/styled';
import { Avatar, Container } from '@mantine/core';
import React from 'react';
import avatars from '../../../constants/avatars';

const AvatarContainer = styled(Container)`
  position: relative;
  padding: 0;
`;

const AvatarWrapper = styled(Avatar)`
  background-color: #d1d1d1;
  border: 3px solid #d1d1d1;
  border-radius: 100%;
`;

const Overlay = styled(Container)`
  position: absolute;
  cursor: pointer;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #e0e0e0;

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
    :after {
      content: 'Edit';
    }
  }
`;

const AvatarButton = ({ avatarId, onClick }) => (
  <AvatarContainer>
    <AvatarWrapper size="xl" src={avatars[avatarId]} alt="avatar image button" />
    {onClick && <Overlay onClick={onClick} />}
  </AvatarContainer>
);

export default AvatarButton;

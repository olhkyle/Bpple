import styled from '@emotion/styled';
import { Avatar } from '@mantine/core';
import React from 'react';
import avatars from '../../../constants/avatars';

const Container = styled(Avatar)`
  background-color: #d1d1d1;
  border: 3px solid #d1d1d1;
  border-radius: 100%;

  :hover {
    cursor: ${({ clickable }) => clickable && 'pointer'};
    background-color: ${({ selectable }) => selectable && `var(--hover-font-color)`};
  }
`;

const AvatarButton = ({ avatarId, onClick }) => (
  <Container src={avatars[avatarId]} onClick={onClick} clickable={!!onClick} alt="avatar image button" />
);

export default AvatarButton;

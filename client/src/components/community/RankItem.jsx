import React from 'react';
import styled from '@emotion/styled';
import { ProfileAvatar } from '../common';

const AvatarWrapper = styled.td`
  display: flex;
  justify-content: center;
`;

const RankItem = ({ rank, avatarId, nickName, level, point }) => (
  // TODO: user profile modal or page
  <tr>
    <td>{rank}</td>
    <AvatarWrapper>
      <ProfileAvatar avatarId={avatarId} />
    </AvatarWrapper>
    <td>{nickName}</td>
    <td>{level}</td>
    <td>{point}</td>
  </tr>
);
export default RankItem;

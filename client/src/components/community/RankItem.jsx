import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { AvatarIcon } from '..';
import { COMMUNITY_PROFILE_PATH } from '../../routes/routePaths';

const AvatarWrapper = styled.td`
  display: flex;
  justify-content: center;
`;

const RankItem = ({ rank, avatarId, nickName, level, point }) => (
  <tr>
    <td>{rank}</td>
    <AvatarWrapper>
      <Link to={`${COMMUNITY_PROFILE_PATH}/${nickName}`}>
        <AvatarIcon avatarId={avatarId} />
      </Link>
    </AvatarWrapper>
    <td>
      <Link to={`${COMMUNITY_PROFILE_PATH}/${nickName}`}>{nickName}</Link>
    </td>
    <td>{level}</td>
    <td>{point}</td>
  </tr>
);
export default RankItem;

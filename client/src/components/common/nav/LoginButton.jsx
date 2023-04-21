import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import routesConstants from '../../../constants/routes';

const LoginLink = styled(Link)`
  color: var(--font-color);
  :hover {
    color: var(--hover-font-color);
  }
`;

const LoginButton = () => {
  // TODO: 전역상태에서 로그인 정보 가져와서 avatar 아이콘 표시
  return <LoginLink to={routesConstants.SIGNIN}>로그인</LoginLink>;
};

export default LoginButton;

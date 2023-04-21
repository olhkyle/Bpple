import React from 'react';
import Recoil from 'recoil';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Menu } from '@mantine/core';
import routesConstants from '../../../constants/routes';
import userState from '../../../recoil/atoms/userState';
import { ProfileAvatar } from '../../profile';

const AvatarWrapper = styled.div`
  background: none;
  :hover {
    color: var(--hover-font-color);
  }
`;

const LoginLink = styled(Link)`
  color: var(--font-color);
  background: none !important;
  :hover {
    color: var(--hover-font-color);
  }
`;

const MenuDropdown = styled(Menu.Dropdown)`
  display: flex;
  top: 0;
  margin-top: -5px;
  background-color: var(--secondary-bg-color);
  color: var(--footer-font-color);
`;

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-align: center;
  }
`;

const MenuItem = styled(Menu.Item)`
  width: 100%;
  color: var(--font-color);
  font-size: 15px;
  font-weight: 400;
  background: none !important;

  :hover {
    color: var(--hover-font-color);
  }
`;

const LoginButton = () => {
  const loginUser = Recoil.useRecoilValue(userState);

  return !loginUser ? (
    <LoginLink to={routesConstants.SIGNIN}>로그인</LoginLink>
  ) : (
    <Menu trigger="hover">
      <Menu.Target>
        <AvatarWrapper>
          <ProfileAvatar avatarId={loginUser.avatarId} />
        </AvatarWrapper>
      </Menu.Target>
      <MenuDropdown>
        <MenuItemWrapper>
          <MenuItem component="a" href={routesConstants.PROFILE}>
            프로필
          </MenuItem>
          <MenuItem component="a" href={'/'}>
            로그아웃
          </MenuItem>
        </MenuItemWrapper>
      </MenuDropdown>
    </Menu>
  );
};

export default LoginButton;

import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { AvatarIcon } from '..';
import { signOut } from '../../../api/auth';
import { MAIN_PATH, PROFILE_PATH, REGISTER_PRODUCT_PATH, SIGNIN_PATH } from '../../../routes/routePaths';

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
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = Recoil.useRecoilState(userState);

  const handleLogout = async () => {
    try {
      await signOut();
      setLoginUser(null);
    } catch (e) {
      console.error(e);
    } finally {
      navigate(MAIN_PATH);
    }
  };

  return !loginUser ? (
    <LoginLink to={SIGNIN_PATH}>로그인</LoginLink>
  ) : (
    <Menu trigger="hover">
      <Menu.Target>
        <AvatarWrapper>
          <AvatarIcon avatarId={loginUser.avatarId} />
        </AvatarWrapper>
      </Menu.Target>
      <MenuDropdown>
        <MenuItemWrapper>
          <MenuItem component="a" href={PROFILE_PATH}>
            프로필
          </MenuItem>
          <MenuItem component="a" href={REGISTER_PRODUCT_PATH}>
            기기등록
          </MenuItem>
          <MenuItem component="button" onClick={handleLogout}>
            로그아웃
          </MenuItem>
        </MenuItemWrapper>
      </MenuDropdown>
    </Menu>
  );
};

export default LoginButton;

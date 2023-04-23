import React from 'react';
import styled from '@emotion/styled';
import { Header, Group, Menu, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import routesConstants from '../../../constants/routes';
import MacSubMenu from './MacSubMenu';
import IphoneSubMenu from './IphoneSubMenu';
import CommunitySubMenu from './CommunitySubMenu';
import ThemeButton from './ThemeButton';
import LoginButton from './LoginButton';
import Logo from '../Logo';

const NavContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 6px 0;
  background-color: var(--footer-bg-color);
  color: var(--font-color);
`;

const Wrapper = styled(Group)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 60px;
  gap: 20px;
`;

const SideWrapper = styled(Wrapper)`
  margin-right: 50px;
`;

const TextMenu = styled(Menu)`
  color: var(--font-color);
`;

const NavItem = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  padding: 8px 15px;
  :hover {
    color: var(--hover-font-color);
  }
  &[aria-expanded='true'] {
    cursor: default;
  }
`;

const LogoLink = styled(Link)`
  margin-right: 30px;
`;

const CartLink = styled(Link)`
  display: flex;
  padding: 8px;
  color: var(--font-color);
  :hover {
    color: var(--hover-font-color);
  }
`;

const IconLink = styled.i`
  font-size: 24px;
`;

const Nav = () => (
  <>
    <NavContainer>
      <Wrapper>
        <LogoLink to={routesConstants.COMMUNITY}>
          <Logo clickable={true} />
        </LogoLink>
        <TextMenu trigger="hover">
          <Menu.Target>
            <NavItem>Mac</NavItem>
          </Menu.Target>
          <MacSubMenu />
        </TextMenu>

        <TextMenu trigger="hover">
          <Menu.Target>
            <NavItem>iPhone</NavItem>
          </Menu.Target>
          <IphoneSubMenu />
        </TextMenu>

        <TextMenu trigger="hover">
          <Menu.Target>
            <NavItem>커뮤니티</NavItem>
          </Menu.Target>
          <CommunitySubMenu />
        </TextMenu>
      </Wrapper>

      <SideWrapper>
        <CartLink to={routesConstants.CART}>
          <IconLink>
            <BsCart />
          </IconLink>
        </CartLink>
        <ThemeButton />
        <LoginButton />
      </SideWrapper>
    </NavContainer>
  </>
);

export default Nav;

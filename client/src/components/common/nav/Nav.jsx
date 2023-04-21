import React from 'react';
import styled from '@emotion/styled';
import { Header, Container, Group, Menu, Text } from '@mantine/core';
import MacSubMenu from './MacSubMenu';
import IphoneSubMenu from './IphoneSubMenu';
import CommunitySubMenu from './CommunitySubMenu';

const NavContainer = styled(Header)`
  display: flex;
  width: 100%;
  padding: 6px 0;
  background-color: var(--footer-bg-color);
  color: var(--font-color);
`;

const Wrapper = styled(Group)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 20px;
`;

const TextMenu = styled(Menu)`
  color: var(--font-color);
`;

const NavItem = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  padding: 8px 15px;
  &[aria-expanded='true'] {
    color: var(--hover-font-color);
    cursor: default;
  }
`;

const Nav = () => (
  <>
    <NavContainer>
      <Container>
        <Wrapper>
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
      </Container>
    </NavContainer>
  </>
);

export default Nav;

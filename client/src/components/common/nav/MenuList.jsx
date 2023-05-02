import React from 'react';
import styled from '@emotion/styled';
import { Menu, Text } from '@mantine/core';
import { MacSubMenu, IphoneSubMenu, CommunitySubMenu } from '.';

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

const MenuList = () => (
  <>
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
  </>
);

export default MenuList;

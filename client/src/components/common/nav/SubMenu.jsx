import styled from '@emotion/styled';
import { Menu, Text } from '@mantine/core';
import React from 'react';

const SubMenuContainer = styled(Menu.Dropdown)`
  /* --secondary-bg-color: black; */
  min-width: 100vw;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding-top: 30px;
  padding-bottom: 20px;
  border: none;
  border-radius: 0;
  background-color: var(--secondary-bg-color);
  color: var(--footer-font-color);
  z-index: 9999;
`;

const SubMenuWrapper = styled.div`
  min-width: 720px;
  max-width: 720px;
  display: flex;
  flex-direction: row;
`;

const SubMenuWrapperLeft = styled.div`
  width: 40%;
`;

const SubMenuWrapperRight = styled.div`
  width: 60%;
`;

const SubMenuLabel = styled(Text)`
  color: var(--footer-font-color);
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 8px;
  padding-left: 5px;
`;

const SubMenuItem = styled(Menu.Item)`
  color: var(--font-color);
  width: fit-content;
  padding: 3px 5px;
  background: none !important;
  :hover {
    color: var(--hover-font-color);
  }
`;

const MenuItemLg = styled(SubMenuItem)`
  font-size: 20px;
  font-weight: 700;
`;

const MenuItemSm = styled(SubMenuItem)`
  font-size: 15px;
  font-weight: 400;
`;

/**
 * @param {{
 * leftLabel?: string
 * leftMeunItems: Array<{
 *  size: 'sm' | 'lg',
 *  content: string,
 *  path: string
 * }>
 * rightLabel?: string
 * rightMeunItems: Array<{
 *  size: 'sm' | 'lg',
 *  content: string,
 *  path: string
 * }>
 *
 * }} props
 */
const SubMenu = ({ leftLabel, leftMenuItems, rightLabel, rightMenuItems }) => (
  <SubMenuContainer>
    <SubMenuWrapper>
      <SubMenuWrapperLeft>
        {leftLabel && <SubMenuLabel>{leftLabel}</SubMenuLabel>}
        {leftMenuItems.map(({ size, content, path }) =>
          size === 'sm' ? (
            <MenuItemSm key={path} component="a" href={path}>
              {content}
            </MenuItemSm>
          ) : (
            <MenuItemLg key={path} component="a" href={path}>
              {content}
            </MenuItemLg>
          )
        )}
      </SubMenuWrapperLeft>
      <SubMenuWrapperRight>
        {rightLabel && <SubMenuLabel>{rightLabel}</SubMenuLabel>}
        {rightMenuItems.map(({ size, content, path }) =>
          size === 'sm' ? (
            <MenuItemSm key={path} component="a" href={path}>
              {content}
            </MenuItemSm>
          ) : (
            <MenuItemLg key={path} component="a" href={path}>
              {content}
            </MenuItemLg>
          )
        )}
      </SubMenuWrapperRight>
    </SubMenuWrapper>
  </SubMenuContainer>
);

export default SubMenu;

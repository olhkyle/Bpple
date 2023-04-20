import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border-radius: 18px;
  box-sizing: border-box;
  padding: 40px 42px;
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  :first-child {
    margin-left: 20px;
  }
  :last-child {
    margin-right: 20px;
  }
  :not(:first-child) {
    margin-left: 20px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: var(--font-color);
  font-weight: 600;
  letter-spacing: 0.004em;
`;

const Content = styled(Text)`
  margin-top: 14px;
  color: var(--font-color);
`;

const LinkWrapper = styled.div`
  margin-top: 17px;
`;

const TextLink = styled(Link)`
  color: var(--hover-font-color);

  :after {
    content: ' >';
  }
  :hover {
    border-bottom: 1px solid var(--hover-font-color);
  }
`;

/**
 * @param {{
 * title: string
 * content: string
 * link?: {path: string, content: string}
 * }} props
 */
const TextCard = ({ title, content, link }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>
    {link && (
      <LinkWrapper>
        <TextLink to={link.path}>{link.content}</TextLink>
      </LinkWrapper>
    )}
  </Container>
);

export default TextCard;

import React from 'react';
import { UnstyledButton } from '@mantine/core';
import { BiUpArrowAlt } from 'react-icons/bi';
import styled from '@emotion/styled';

const Button = styled(UnstyledButton)`
  position: fixed;
  bottom: 2rem;
  right: 3rem;

  display: flex;
  padding-top: 1.5px;
  width: 40px;
  height: 40px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  text-align: center;
  color: var(--font-color);
  background-color: var(--body-bg-color);
  &:hover {
    border: 1px solid var(--font-color);
  }
`;

const ScrollToTopButton = () => (
  <Button
    onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>
    <BiUpArrowAlt size="35" color="var(--font-color)" />
  </Button>
);

export default ScrollToTopButton;

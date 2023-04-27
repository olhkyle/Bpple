import React from 'react';
import { Text, Box, NavLink, Stack } from '@mantine/core';
import styled from '@emotion/styled';

const Container = styled(Box)`
  --spacing: ${({ open }) => (open ? 40 : 0)};
  --width: ${({ open }) => (open ? 280 : 0)};
  --x: ${({ open }) => (open ? 0 : 280)};

  width: calc(var(--width) * 1px);
  margin-top: 3rem;
  margin-right: calc(var(--spacing) * 1px);
  padding-right: calc(var(--spacing) * 1px);
  transform: translate3d(calc(var(--x) * -1px), 0, 0);
  transition: all 0.2s;
  border-right: 1px solid var(--opacity-border-color);
`;

const SideFilter = ({ open }) => (
  <Container open={open}>
    <Text fz="20px" fw="600">
      유형
    </Text>
    <Stack my="xl" spacing="xl">
      <NavLink label="해결된 질문" />
      <NavLink label="FineApple 권장 답변" />
      <NavLink label="해결되지 않은 질문" />
    </Stack>
  </Container>
);

export default SideFilter;

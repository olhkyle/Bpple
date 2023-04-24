import React from 'react';
import { Group, Skeleton } from '@mantine/core';

const CommunitySkeleton = ({ length = 10 }) => (
  <Group mt="48px">
    {Array.from({ length }, (_, idx) => (
      <Skeleton key={idx} height={130} mt="0.5rem" radius="lg" />
    ))}
  </Group>
);

export default CommunitySkeleton;

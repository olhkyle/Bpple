import React from 'react';
import { Container, Loader as SLoader } from '@mantine/core';

const Loader = () => (
  <Container h="1024px">
    <SLoader size="xl" pos="fixed" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)' }} />
  </Container>
);

export default Loader;

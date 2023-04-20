import React from 'react';
import { Container, Title } from '@mantine/core';
import { SignUpForm } from '.';

const SignUp = () => (
  <Container size="xs">
    <Title mb="xl" align="center">
      Bpple ID 생성
    </Title>
    <SignUpForm />
  </Container>
);
export default SignUp;

import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container, Title, Text, Stack } from '@mantine/core';
import { WiDirectionUpRight } from 'react-icons/wi';
import { SignInForm } from '.';

const LinkBox = styled.span`
  display: inline-block;
  transform: translateY(8px);
`;

const SingIn = () => (
  <Container>
    <Title>더욱 빠르게 결제하시려면 로그인하세요.</Title>
    <Stack align="center">
      <SignInForm />
      <Text fz="14px">
        Apple ID가 없으십니까?
        {/** TODO : SINGUP 페이지로 이동시키기 */}
        <Link to="/signup">
          지금 만드세요.
          <LinkBox>
            <WiDirectionUpRight size="24" />
          </LinkBox>
        </Link>
      </Text>
    </Stack>
  </Container>
);

export default SingIn;

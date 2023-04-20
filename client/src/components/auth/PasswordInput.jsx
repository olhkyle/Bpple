import React from 'react';
import { useController } from 'react-hook-form';
import { Tooltip, Stack, Title, Flex, Text } from '@mantine/core';
import styled from '@emotion/styled';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Input } from '.';

const Wrapper = styled.div`
  width: 100%;
`;

const TooltipBox = ({ value }) => {
  const validList = [
    { valid: /.{8,}/.test(value), text: '8자 이상' },
    { valid: /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value), text: '대소문자' },
    { valid: /\d+/.test(value), text: '숫자 한개 이상' },
  ];

  return (
    <Stack spacing="sm">
      <Title c="#000" order={6}>
        암호 필수 조건
      </Title>
      {validList.map(({ valid, text }) => (
        <Flex key={text} c={valid ? '#00a000' : '#a3a3a3'} align="center" gap="xs">
          <AiOutlineCheckCircle fontSize="20px" />
          <Text>{text}</Text>
        </Flex>
      ))}
    </Stack>
  );
};

const PasswordInput = ({ type, name, label, control }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control, defaultValue: '' });

  const [opened, setOpened] = React.useState(false);

  return (
    <Tooltip
      label={<TooltipBox value={value} />}
      opened={opened}
      position="bottom"
      p="lg"
      w="300px"
      bg="#fafafa"
      sx={{ border: '1px solid #a3a3a3' }}>
      <Wrapper>
        <Input
          type={type}
          label={label}
          value={value}
          onChange={onChange}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
        />
      </Wrapper>
    </Tooltip>
  );
};

export default PasswordInput;

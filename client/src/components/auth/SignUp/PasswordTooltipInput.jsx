import React from 'react';
import { Tooltip, Stack, Title, Flex, Text, Input } from '@mantine/core';
import styled from '@emotion/styled';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Wrapper = styled.div`
  width: 100%;
`;

const TooltipBox = ({ value }) => {
  const validList = [
    { regExp: /.{8,}/, text: '8자 이상' },
    { regExp: /^(?=.*[a-z])(?=.*[A-Z]).+$/, text: '대소문자' },
    { regExp: /\d+/, text: '숫자 한개 이상' },
  ];

  return (
    <Stack spacing="sm">
      <Title order={6}>암호 필수 조건</Title>
      {validList.map(({ regExp, text }) => (
        <Flex key={text} c={regExp.test(value) ? '#00a000' : '#a3a3a3'} align="center" gap="xs">
          <AiOutlineCheckCircle fontSize="20px" />
          <Text>{text}</Text>
        </Flex>
      ))}
    </Stack>
  );
};

const PasswordTooltipInput = ({ name, placeholder, onChange, onBlur }, ref) => {
  const [value, setValue] = React.useState('');
  const [opened, setOpened] = React.useState(false);

  const handleChange = e => {
    onChange(e);
    setValue(e.target.value);
  };

  const handleBlur = e => {
    onBlur(e);
    setOpened(false);
  };

  return (
    <Tooltip
      label={<TooltipBox value={value} />}
      opened={opened}
      position="bottom"
      p="lg"
      w="300px"
      c="var(--font-color)"
      bg="var(--body-bg-color)"
      sx={{ border: '1px solid #a3a3a3' }}>
      <Wrapper>
        <Input
          type="password"
          placeholder={placeholder}
          ref={ref}
          name={name}
          onFocus={() => setOpened(true)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Wrapper>
    </Tooltip>
  );
};

export default React.forwardRef(PasswordTooltipInput);

import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@mantine/core';

const Container = styled.div`
  position: relative;
  width: ${({ w }) => w};
  height: 56px;
  padding: 16px 24px 0 16px;
  border-color: ${({ focus }) => (focus ? '#0070c9' : '#d2d2d7')};
  border-radius: ${({ radius }) => radius};
  background-color: #fff;
  box-shadow: ${({ focus }) => focus && '0 0 0 3px rgba(131,192,253,.5);'};
  overflow: hidden;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 20px;
  }

  span {
    position: absolute;
    top: 4px;
    left: 16px;
    font-size: 12px;
    color: #86868b;
    transform: ${({ focus }) => !focus && 'translate3d(0, 100%, 0) scale3d(1.2, 1.2, 1.2)'};
    transition: transform 0.2s;
  }
`;

const FormInput = ({ w = '100%', type, label, value, onChange, radius = '10px', children }) => {
  const [focus, setFocus] = React.useState(false);
  const [isDirty, setDirty] = React.useState(false);

  const handleChange = e => {
    onChange(e);
    setDirty(true);
  };

  return (
    <Container w={w} focus={focus} radius={radius}>
      <Flex mt="8px" justify="space-between">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            if (isDirty && value) return;

            setFocus(false);
          }}
        />
        {children}
      </Flex>
      <span>{label}</span>
    </Container>
  );
};

export default FormInput;

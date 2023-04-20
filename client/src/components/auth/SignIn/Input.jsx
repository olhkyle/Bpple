import React from 'react';
import { Input as MantineInput } from '@mantine/core';

const Input = ({ type, placeholder, value, onChange, borderRadius, rightSection }) => (
  <MantineInput
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    sx={{
      input: {
        borderRadius,
        height: '46px',
      },
    }}
    rightSection={rightSection}
  />
);

export default Input;

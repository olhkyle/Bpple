import React from 'react';
import { DateInput } from '@mantine/dates';
import { useController } from 'react-hook-form';
import { Input } from '.';

const BirthDateInput = ({ name, label, control }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control, defaultValue: '' });

  const handleChange = e => {
    onChange(e);
  };

  return (
    <Input
      value={value}
      label={label}
      RenderInput={({ onFocus, onBlur }) => (
        <DateInput
          bg="none"
          type="text"
          valueFormat="YYYY-MM-DD"
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default BirthDateInput;

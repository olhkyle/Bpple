import React from 'react';
import { DatePicker } from '@mantine/dates';
import { Input } from '@mantine/core';

const datePickerStyle = {
  position: 'absolute',
  top: '54px',
  zIndex: '9999',
  borderRadius: '10px',
  border: '1px solid #ced4da',

  button: {
    color: 'var(--font-color)',
    ':hover': {
      color: 'var(--hover-font-color)',
      background: 'var(--opacity-bg-color)',
    },
  },
};

const formattedDate = date => {
  if (!date) return '';

  const format = n => (n < 10 ? `0${n}` : `${n}`);
  return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
};

/**
 * useForm의 register('inputName') props로 전달
 * useForm의 setValue props로 전달
 * placeholder설정 가능
 * @param {{...register('inputName'), placeholder, setValue}, ref}
 * @returns
 */

const BirthDateInput = ({ name, placeholder, onChange, onBlur, setValue }, ref) => {
  const [date, setDate] = React.useState();
  const [opened, setOpened] = React.useState(false);

  const handleChange = date => {
    setDate(date);
    setOpened(false);
    setValue(name, formattedDate(date));
  };

  return (
    <>
      <Input
        ref={ref}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onClick={() => setOpened(!opened)}
        readOnly
      />
      {opened && (
        <DatePicker
          p="12px"
          bg="var(--body-bg-color)"
          c="var(--font-color)"
          value={date}
          onChange={handleChange}
          defaultLevel="decade"
          sx={datePickerStyle}
        />
      )}
    </>
  );
};

export default React.forwardRef(BirthDateInput);

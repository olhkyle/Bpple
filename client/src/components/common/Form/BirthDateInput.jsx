import React from 'react';
import { DateInput } from '@mantine/dates';

const datePickerStyle = {
  '.mantine-Popover-dropdown': {
    borderRadius: '10px',
    border: '1px solid #ced4da',
    background: 'var(--body-bg-color)',

    'button:not([data-weekend])': {
      color: 'var(--font-color)',
      ':hover': {
        color: 'var(--hover-font-color)',
        background: 'var(--opacity-bg-color)',
      },
    },
  },
};

/**
 * useForm의 register('inputName') props로 전달
 * useForm의 setValue props로 전달
 * placeholder설정 가능
 * initDate 초기 띄울 날짜 설정
 * @param {{...register('inputName'), placeholder, setValue, initDate}, ref}
 * @returns
 */

const BirthDateInput = ({ name, placeholder, onBlur, setValue, initDate }, ref) => {
  const [date, setDate] = React.useState(initDate);

  return (
    <DateInput
      ref={ref}
      name={name}
      value={date}
      onChange={date => {
        setDate(date);
        setValue(name, date);
      }}
      onBlur={onBlur}
      valueFormat="YYYY-MM-DD"
      placeholder={placeholder}
      sx={datePickerStyle}
    />
  );
};

export default React.forwardRef(BirthDateInput);

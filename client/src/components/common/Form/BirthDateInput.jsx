import React from 'react';
import styled from '@emotion/styled';
import { DateInput } from '@mantine/dates';

const MantineDateInput = styled(DateInput)`
  .mantine-Popover-dropdown {
    border: 1px solid #ced4da;
    border-radius: 10px;
    background: var(--body-bg-color);

    button:not([data-weekend]) {
      color: var(--font-color);
      :hover {
        color: var(--hover-font-color);
        background-color: var(--opacity-bg-color);
      }
    }
  }
`;

/**
 * useForm의 register('inputName') props로 전달
 * useForm의 setValue props로 전달
 * placeholder설정 가능
 * initDate 초기 띄울 날짜 설정
 * @param {{...register('inputName'), placeholder, setValue, initDate}, ref}
 * @returns
 */

const BirthDateInput = ({ name, placeholder, onBlur, setValue, initDate = new Date('2022-12-12') }, ref) => {
  const [date, setDate] = React.useState(initDate);

  return (
    <MantineDateInput
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
    />
  );
};

export default React.forwardRef(BirthDateInput);

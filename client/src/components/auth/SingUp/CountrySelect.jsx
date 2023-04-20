import React from 'react';
import { Select } from '@mantine/core';
import { useController } from 'react-hook-form';
import countyList from '../../../constants/countyList';

const getKrNameCountryList = () => {
  const krNameCountryList = [];

  for (const key of Object.keys(countyList)) {
    krNameCountryList.push(countyList[key].CountryNameKR);
  }

  return krNameCountryList.sort();
};

const CountrySelect = ({ name, control }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control, defaultValue: '대한민국' });

  return (
    <Select
      name={name}
      value={value}
      onChange={onChange}
      label="국가 / 지역"
      data={getKrNameCountryList()}
      searchable
      size="md"
      w="100%"
      radius="md"
    />
  );
};

export default CountrySelect;

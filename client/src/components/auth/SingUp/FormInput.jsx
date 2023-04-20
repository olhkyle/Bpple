import React from 'react';
import { useController } from 'react-hook-form';
import { Input } from '.';

const FormInput = ({ type, name, label, control }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control, defaultValue: '' });

  return <Input type={type} label={label} value={value} onChange={onChange} />;
};

export default FormInput;
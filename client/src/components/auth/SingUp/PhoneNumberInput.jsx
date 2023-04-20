import React from 'react';
import { useController } from 'react-hook-form';
import { Input } from '.';

const usePhoneNumberInput = ({ name, control }) => {
  const {
    fieldState,
    field: { value, onChange },
  } = useController({ name, control, defaultValue: '' });

  React.useEffect(() => {
    const phoneNumber = value.replace(/\D/g, '');

    onChange(
      phoneNumber.replace(phoneNumber.length >= 11 ? /(\d{3})(\d{4})(\d{4})/ : /(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    );
  }, [value]);

  return { fieldState, field: { value, onChange } };
};

const FormInput = ({ type, name, label, control }) => {
  const {
    fieldState: { error },
    field: { value, onChange },
  } = usePhoneNumberInput({ name, control });

  return (
    <Input type={type} label={label} value={value} error={error} errorMessage={error?.message} onChange={onChange} />
  );
};

export default FormInput;

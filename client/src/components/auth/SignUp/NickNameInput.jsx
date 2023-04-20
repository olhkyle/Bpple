import React from 'react';
import { useController } from 'react-hook-form';
import { Input } from '.';
import { checkNickName } from '../../../api/auth';

const EmailInput = ({ type, name, label, control }) => {
  const {
    fieldState: { error },
    field: { value, onChange },
  } = useController({ name, control, defaultValue: '' });

  const [duplicated, setDuplicated] = React.useState(false);

  const handleBlur = async () => {
    const { data } = await checkNickName(value);

    setDuplicated(data.duplicated);
  };

  return (
    <Input
      type={type}
      label={label}
      value={value}
      decs="커뮤니티에서 사용될 닉네임입니다."
      error={error || duplicated}
      errorMessage={error?.message || '해당 닉네임을 사용할 수 없습니다. 다른 닉네임을 선택하십시오'}
      onChange={onChange}
      onBlur={handleBlur}
    />
  );
};

export default EmailInput;

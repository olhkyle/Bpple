import { useController } from 'react-hook-form';
import { Input, SubmitChecker } from '.';

const EmailInput = ({ control, trigger, emailPassed, setEmailPassed, closeTooltip }) => {
  const {
    field: { value, onChange },
    fieldState: { isDirty, invalid },
  } = useController({ name: 'email', control, defaultValue: '' });

  const handleChange = e => {
    onChange(e);
    trigger('email');
    setEmailPassed(false);
    closeTooltip();
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      borderRadius={emailPassed ? '5px 5px 0 0' : '5px'}
      rightSection={
        !emailPassed && <SubmitChecker isDirty={isDirty} invalid={invalid} callback={() => setEmailPassed(true)} />
      }
    />
  );
};

export default EmailInput;

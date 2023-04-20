import { useController } from 'react-hook-form';
import { Tooltip, Text } from '@mantine/core';
import { Input, SubmitChecker } from '.';

const PasswordTooltip = ({ opened, children }) => (
  <Tooltip
    label={
      <Text c="#000" fz="14px" fw="bold">
        FineApple ID 또는 암호가 올바르지 않습니다.
      </Text>
    }
    bg="#fae9a3"
    p="24px"
    position="bottom"
    withArrow
    arrowPosition="center"
    arrowSize={10}
    opened={opened}
    sx={{ boxShadow: '0 5px 10px 2px rgba(0,0,0,.1)' }}>
    {children}
  </Tooltip>
);

const PasswordInput = ({ control, trigger, subMit, toolTipOpened, closeTooltip }) => {
  const {
    field: { value, onChange },
    fieldState: { isDirty, invalid },
  } = useController({ name: 'password', control, defaultValue: '' });

  const handleChange = e => {
    onChange(e);
    trigger('password');
    closeTooltip();
  };

  return (
    <PasswordTooltip opened={toolTipOpened}>
      <div>
        <Input
          type="password"
          placeholder="암호"
          value={value}
          onChange={handleChange}
          borderRadius="0 0 5px 5px"
          rightSection={<SubmitChecker isDirty={isDirty} invalid={invalid} callback={subMit} />}
        />
      </div>
    </PasswordTooltip>
  );
};

export default PasswordInput;

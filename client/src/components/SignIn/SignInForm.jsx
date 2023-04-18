import React from 'react';
import axios from 'axios';
import { useController, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title, Stack, Input, ActionIcon, Tooltip, Text } from '@mantine/core';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const signinScheme = z.object({
  email: z.string().email({ message: '이메일 형식에 맞게 입력해 주세요.' }),
  password: z.string().regex(/^[0-9a-zA-Z]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
});

const SubmitBtn = ({ onClick, disabled }) => (
  <ActionIcon fw="600" type="submit" radius="100%" onClick={onClick} variant="transparent" disabled={disabled}>
    <HiOutlineArrowCircleRight fontSize="36px" />
  </ActionIcon>
);

const PasswordTooltip = ({ opened, children }) => (
  <Tooltip
    label={
      <Text c="#000" fz="14px" fw="bold">
        Apple ID 또는 암호가 올바르지 않습니다.
      </Text>
    }
    bg="#fae9a3"
    p="24px"
    position="bottom"
    withArrow
    arrowPosition="center"
    opened={opened}
    sx={{ boxShadow: '0 5px 10px 2px rgba(0,0,0,.1)' }}>
    {children}
  </Tooltip>
);

const useChecking = callback => {
  const [isChecking, setChecking] = React.useState(false);

  React.useEffect(() => {
    if (!isChecking) return;

    setTimeout(() => {
      callback();
      setChecking(false);
    }, 1000);
  }, [isChecking]);

  return [isChecking, () => setChecking(true)];
};

const EmailInput = ({ control, trigger, borderRadius, emailPassed, setEmailPassed, closeTooltip }) => {
  const [isChecking, setChecking] = useChecking(() => setEmailPassed(true));
  const {
    field: { value, onChange },
    fieldState: { isDirty, invalid },
  } = useController({ name: 'email', control, defaultValue: '' });

  return (
    <Input
      value={value}
      onChange={e => {
        onChange(e);
        trigger('email');
        setEmailPassed(false);
        closeTooltip();
      }}
      placeholder="Apple ID"
      sx={{
        input: {
          borderRadius,
          height: '46px',
        },
      }}
      rightSection={
        !emailPassed &&
        (isChecking ? (
          <img src="/spinner.svg" alt="spinner" />
        ) : (
          <SubmitBtn onClick={setChecking} disabled={isDirty ? invalid : true} />
        ))
      }
    />
  );
};

const PasswordInput = ({ control, trigger, borderRadius, subMit, opened, closeTooltip }) => {
  const [isChecking, setChecking] = useChecking(subMit);

  const {
    field: { value, onChange },
    fieldState: { isDirty, invalid },
  } = useController({ name: 'password', control, defaultValue: '' });

  return (
    <PasswordTooltip opened={opened}>
      <Input
        ref={node => node?.focus()}
        type="password"
        value={value}
        onChange={e => {
          onChange(e);
          trigger('password');
          closeTooltip();
        }}
        placeholder="암호"
        sx={{
          input: {
            borderRadius,
            height: '46px',
          },
        }}
        rightSection={
          isChecking ? (
            <img src="/spinner.svg" alt="spinner" />
          ) : (
            <SubmitBtn onClick={setChecking} disabled={isDirty ? invalid : true} />
          )
        }
      />
    </PasswordTooltip>
  );
};

const SignInForm = () => {
  const { handleSubmit, control, trigger, setValue, setFocus } = useForm({ resolver: zodResolver(signinScheme) });
  const [emailPassed, setEmailPassed] = React.useState(false);
  const [opened, setOpened] = React.useState(false);

  const onSubmit = async data => {
    try {
      const res = await axios.post('api/signin', data);
      // TODO : MAIN으로 이동
      console.log(res.data);
    } catch (e) {
      setFocus('email');
      setValue('password', '');
      setOpened(true);
    }
  };

  return (
    <form>
      <Stack h="300px" justify="center" align="center">
        <Title c="#494949" fz="22px" order={2}>
          Apple Store에 로그인하세요
        </Title>
        <Stack w="340px" spacing="0">
          <EmailInput
            control={control}
            trigger={trigger}
            emailPassed={emailPassed}
            setEmailPassed={setEmailPassed}
            closeTooltip={() => setOpened(false)}
            borderRadius={emailPassed ? '5px 5px 0 0' : '5px'}
          />
          {emailPassed && (
            <PasswordInput
              opened={opened}
              closeTooltip={() => setOpened(false)}
              control={control}
              trigger={trigger}
              borderRadius="0 0 5px 5px"
              subMit={handleSubmit(onSubmit)}
            />
          )}
        </Stack>
      </Stack>
    </form>
  );
};

export default SignInForm;

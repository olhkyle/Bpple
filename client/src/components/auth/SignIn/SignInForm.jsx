import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title, Stack } from '@mantine/core';
import { EmailInput, PasswordInput } from '.';
import { signIn } from '../../../api/auth';

const signinScheme = z.object({
  email: z.string().email({ message: '이메일 형식에 맞게 입력해 주세요.' }),
  password: z.string().regex(/^[0-9a-zA-Z]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
});

const SignInForm = () => {
  // TODO : trigger 디바운스 하기
  const { handleSubmit, control, trigger, setValue } = useForm({ resolver: zodResolver(signinScheme) });
  const [emailPassed, setEmailPassed] = React.useState(false);
  const [toolTipOpened, setToolTipOpened] = React.useState(false);

  const onSubmit = async data => {
    try {
      const res = await signIn(data);
      // TODO : MAIN으로 이동 , 유저 정보 전역 상태로 관리하기
      console.log(res.data);
    } catch (e) {
      setValue('password', '');
      setToolTipOpened(true);
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
            closeTooltip={() => setToolTipOpened(false)}
          />
          {emailPassed && (
            <PasswordInput
              toolTipOpened={toolTipOpened}
              closeTooltip={() => setToolTipOpened(false)}
              control={control}
              trigger={trigger}
              subMit={handleSubmit(onSubmit)}
            />
          )}
        </Stack>
      </Stack>
    </form>
  );
};

export default SignInForm;
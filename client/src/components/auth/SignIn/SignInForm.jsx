import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Stack, Input, Button } from '@mantine/core';
import { signIn } from '../../../api/auth';
import { InputWrapper } from '../../common/Form';
import userState from '../../../recoil/atoms/userState';
import routesConstants from '../../../constants/routes';

const signinScheme = z.object({
  email: z.string().email({ message: '이메일 형식에 맞게 입력해 주세요.' }),
  password: z.string().regex(/^[0-9a-zA-Z]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
});

const SignInForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinScheme) });

  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  React.useEffect(() => {
    setFocus('email');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  const onSubmit = async data => {
    try {
      const { data: user } = await signIn(data);

      setUser(user);
      navigate(routesConstants.MAIN);
    } catch (e) {
      setErrorMessage(e.response.data.error);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack w="340px" spacing="12px">
        <InputWrapper error={errors?.email?.message}>
          <Input {...register('email')} placeholder="FineApple ID" />
        </InputWrapper>
        <InputWrapper error={errorMessage || errors?.password?.message}>
          <Input type="password" {...register('password')} placeholder="암호" />
        </InputWrapper>
        <Button type="submit">로그인</Button>
      </Stack>
    </form>
  );
};

export default SignInForm;

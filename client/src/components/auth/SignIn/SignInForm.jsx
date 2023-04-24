import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title, Stack, Input, Button } from '@mantine/core';
import { signIn } from '../../../api/auth';
import userState from '../../../recoil/atoms/userState';
import routesConstants from '../../../constants/routes';

const signinScheme = z.object({
  email: z.string().email({ message: '이메일 형식에 맞게 입력해 주세요.' }),
  password: z.string().regex(/^[0-9a-zA-Z]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
});

const InputWrapper = ({ error, children }) => (
  <Input.Wrapper
    error={error}
    sx={{
      input: {
        height: '50px',
        color: 'var(--font-color)',
        fontSize: '20px',
        backgroundColor: 'rgba(255,255,255, 0.1)',
      },
    }}>
    {children}
  </Input.Wrapper>
);

const SignInForm = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  // TODO : trigger 디바운스 하기
  const { handleSubmit, register, setValue } = useForm({ resolver: zodResolver(signinScheme) });

  const onSubmit = async data => {
    try {
      const { data: user } = await signIn(data);

      setUser(user);
      navigate(routesConstants.MAIN);
    } catch (e) {
      setValue('password', '');
      setValue('email', '');
    }
  };

  return (
    <Stack h="300px" justify="center" align="center">
      <Title c="var(--font-color)" fz="22px" order={2}>
        FineApple Store에 로그인하세요
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack w="340px" spacing="0">
          <InputWrapper>
            <Input {...register('email')} placeholder="FineApple ID" />
          </InputWrapper>
          <InputWrapper>
            <Input {...register('password')} placeholder="암호" />
          </InputWrapper>
          <Button type="submit">Sign In</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default SignInForm;

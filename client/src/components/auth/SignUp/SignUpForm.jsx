import React from 'react';
import { Stack, Flex, Divider, Button } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUp } from '../../../api/auth';
import {
  FormInput,
  CountrySelect,
  BirthDateInput,
  PasswordInput,
  EmailInput,
  NickNameInput,
  PhoneNumberInput,
} from '.';

const signupScheme = z
  .object({
    firstName: z.string().regex(/.+/, { message: '이름을 입력해주세요' }),
    lastName: z.string().regex(/.+/, { message: '성을 입력해주세요' }),
    country: z.string(),
    birthDate: z.date({ required_error: '생년월일을 선택 해주세요' }),
    email: z.string().email({ message: '적절한 이메일이 아닙니다.' }),
    password: z.string().regex(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, { message: '적절한 패스워드가 아닙니다.' }),
    confirmPassword: z.string().regex(/.+/, { message: '확인을 위해 패스워드를 한 번 더 입력해주세요' }),
    nickName: z.string().regex(/.+/, { message: '닉네임을 입력해주세요' }),
    phoneNumber: z
      .string()
      .regex(/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/, { message: '적절한 전화번호가 아닙니다.' }),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    path: ['confirmPassword'],
    message: '패스워드가 일치하지 않습니다.',
  });

const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isDirty },
  } = useForm({
    resolver: zodResolver(signupScheme),
  });

  const onSubmit = data => {
    if (!isDirty) return;

    try {
      signUp(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack align="center">
        <Flex w="100%" gap="xl">
          <FormInput type="text" name="lastName" label="성" control={control} />
          <FormInput type="text" name="firstName" label="이름" control={control} />
        </Flex>
        <CountrySelect name="country" control={control} />
        <BirthDateInput name="birthDate" label="생년월일" control={control} />

        <Divider />

        <EmailInput type="text" name="email" label="name@example.com" control={control} />
        <PasswordInput type="password" name="password" label="암호" control={control} />
        <FormInput type="password" name="confirmPassword" label="암호 확인" control={control} />

        <Divider />

        <NickNameInput type="text" name="nickName" label="닉네임" control={control} />
        <PhoneNumberInput type="text" name="phoneNumber" label="전화번호" control={control} />

        <Button type="submit">회원가입</Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;

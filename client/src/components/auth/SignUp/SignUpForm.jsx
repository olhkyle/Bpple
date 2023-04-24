import React from 'react';
import { Stack, Flex, Button, Input, Divider } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordTooltipInput } from '.';
import { InputWrapper, CountrySelect, BirthDateInput, DuplicateCheckInput, PhoneNumberInput } from '../../common/Form';
import { checkEmail, checkNickName, signUp } from '../../../api/auth';

const signupScheme = z
  .object({
    firstName: z.string().regex(/.+/, { message: '이름을 입력해주세요' }),
    lastName: z.string().regex(/.+/, { message: '성을 입력해주세요' }),
    country: z.string(),
    birthDate: z
      .string()
      .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, { message: '생년월일을 입력해주세요' }),
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
    register,
    setValue,
    formState: { isDirty, errors },
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
        <Flex w="100%" justify="center" gap="8px">
          <InputWrapper error={errors?.lastName?.message}>
            <Input {...register('lastName')} placeholder="성" />
          </InputWrapper>
          <InputWrapper error={errors?.firstName?.message}>
            <Input {...register('firstName')} placeholder="이름" />
          </InputWrapper>
        </Flex>

        <InputWrapper label="국가 / 지역" error={errors?.country?.message}>
          <CountrySelect {...register('country')} />
        </InputWrapper>
        <InputWrapper error={errors?.birthDate?.message}>
          <BirthDateInput {...register('birthDate')} setValue={setValue} placeholder="생년월일" />
        </InputWrapper>

        <Divider />

        <InputWrapper desc="새 FineApple ID로 사용할 주소입니다." error={errors?.email?.message}>
          <DuplicateCheckInput {...register('email')} checker={checkEmail} placeholder="name@example.com" />
        </InputWrapper>
        <InputWrapper error={errors?.password?.message}>
          <PasswordTooltipInput {...register('password')} placeholder="암호" />
        </InputWrapper>
        <InputWrapper error={errors?.confirmPassword?.message}>
          <Input type="password" {...register('confirmPassword')} placeholder="암호 확인" />
        </InputWrapper>

        <Divider />

        <InputWrapper desc="커뮤니티에서 사용할 닉네임입니다.." error={errors?.nickName?.message}>
          <DuplicateCheckInput {...register('nickName')} checker={checkNickName} placeholder="닉네임" />
        </InputWrapper>
        <InputWrapper error={errors?.phoneNumber?.message}>
          <PhoneNumberInput {...register('phoneNumber')} setValue={setValue} placeholder="전화번호" />
        </InputWrapper>

        <Button type="submit">회원가입</Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;

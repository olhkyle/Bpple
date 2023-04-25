import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Stack, Flex, Button, Input, Divider } from '@mantine/core';
import { checkEmail, checkNickName, signUp } from '../../../api/auth';
import { PasswordTooltipInput } from '.';
import { InputWrapper, CountrySelect, BirthDateInput, DuplicateCheckInput, PhoneNumberInput } from '../../common/Form';
import routesConstants from '../../../constants/routes';
import useToast from '../../../hooks/useToast';

const signupScheme = z
  .object({
    firstName: z.string().regex(/.+/, { message: '이름을 입력해주세요' }),
    lastName: z.string().regex(/.+/, { message: '성을 입력해주세요' }),
    country: z.string(),
    birthDate: z.date(),
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

  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = async data => {
    if (!isDirty) return;

    try {
      await signUp(data);
      toast.create({ message: '회원가입에 성공하였습니다.' });
      navigate(routesConstants.SIGNIN);
    } catch (e) {
      console.error(e);
    }
  };

  const checkDuplicateEmail = async email => {
    try {
      const { data } = await checkEmail(email);

      return data.duplicated;
    } catch (e) {
      return false;
    }
  };

  const checkDuplicateNickName = async email => {
    try {
      const { data } = await checkNickName(email);

      return data.duplicated;
    } catch (e) {
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Flex w="100%" justify="center" gap="8px">
          <InputWrapper label="성" error={errors?.lastName?.message}>
            <Input {...register('lastName')} placeholder="성" />
          </InputWrapper>
          <InputWrapper label="이름" error={errors?.firstName?.message}>
            <Input {...register('firstName')} placeholder="이름" />
          </InputWrapper>
        </Flex>

        <InputWrapper label="국가 / 지역" error={errors?.country?.message}>
          <CountrySelect {...register('country')} />
        </InputWrapper>
        <InputWrapper label="생년월일" error={errors?.birthDate?.message}>
          <BirthDateInput {...register('birthDate')} setValue={setValue} placeholder="생년월일" />
        </InputWrapper>

        <Divider size="xs" variant="dashed" my="10px" />

        <InputWrapper label="이메일" desc="새 FineApple ID로 사용할 주소입니다." error={errors?.email?.message}>
          <DuplicateCheckInput {...register('email')} checker={checkDuplicateEmail} placeholder="name@example.com" />
        </InputWrapper>
        <InputWrapper label="비밀번호" error={errors?.password?.message}>
          <PasswordTooltipInput {...register('password')} placeholder="비밀번호" />
        </InputWrapper>
        <InputWrapper label="비밀번호 확인" error={errors?.confirmPassword?.message}>
          <Input type="password" {...register('confirmPassword')} placeholder="비밀번호 확인" />
        </InputWrapper>

        <Divider size="xs" variant="dashed" my="10px" />

        <InputWrapper label="닉네임" desc="커뮤니티에서 사용할 닉네임입니다.." error={errors?.nickName?.message}>
          <DuplicateCheckInput {...register('nickName')} checker={checkDuplicateNickName} placeholder="닉네임" />
        </InputWrapper>
        <InputWrapper label="전화번호" error={errors?.phoneNumber?.message}>
          <PhoneNumberInput {...register('phoneNumber')} setValue={setValue} placeholder="전화번호" />
        </InputWrapper>

        <Button mt="xl" size="lg" type="submit">
          회원가입
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;

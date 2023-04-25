import React from 'react';
import Recoil from 'recoil';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Stack, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { checkNickName } from '../../api/auth';
import { editProfile } from '../../api/profile';
import userState from '../../recoil/atoms/userState';
import useToast from '../../hooks/useToast';
import routesConstants from '../../constants/routes';
import { BirthDateInput, CountrySelect, DuplicateCheckInput, InputWrapper, PhoneNumberInput } from '../common/Form';
import { AvatarButton, AvatarEditModal } from './avatar';

const editProfileScheme = z.object({
  country: z.string(),
  birthDate: z.date(),
  nickName: z.string().regex(/.+/, { message: '닉네임을 입력해주세요' }),
  phoneNumber: z.string().regex(/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/, { message: '적절한 전화번호가 아닙니다.' }),
  avatarId: z.string(),
  aboutMe: z.string().max(1000),
});

const UserProfileEditForm = ({ userInfo }) => {
  const loginUser = Recoil.useRecoilValue(userState);

  const [avatarEditPopupOpened, { open: openAvatarEditPopup, close: closeAvatarEditPopup }] = useDisclosure(false);

  const navigate = useNavigate();
  const toast = useToast();

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { isDirty, errors },
  } = useForm({
    resolver: zodResolver(editProfileScheme),
    defaultValues: {
      nickName: userInfo.nickName,
      phoneNumber: userInfo.phoneNumber,
      birthDate: new Date(userInfo.birthDate),
      aboutMe: userInfo.aboutMe,
      avatarId: userInfo.avatarId,
    },
  });

  const onSubmit = async data => {
    if (!isDirty) return;

    try {
      await editProfile({ ...data, userId: loginUser.email });
      toast.create({ message: '회원정보가 수정되었습니다.' });
      navigate(routesConstants.PROFILE);
    } catch (e) {
      console.error(e);
    }
  };

  const checkChangeNickName = async newNickName => {
    if (newNickName === userInfo.nickName) {
      return false;
    }
    const {
      data: { duplicated },
    } = await checkNickName(newNickName);
    return duplicated;
  };

  return (
    <Container size="xs" mb="xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <AvatarButton avatarId={getValues('avatarId')} onClick={openAvatarEditPopup} select />
          <AvatarEditModal
            avatarId={getValues('avatarId')}
            opened={avatarEditPopupOpened}
            onClose={closeAvatarEditPopup}
            onSelect={newAvatarId => {
              setValue('avatarId', newAvatarId);
            }}
          />

          <InputWrapper label="닉네임" desc="커뮤니티에서 사용할 닉네임입니다.." error={errors?.nickName?.message}>
            <DuplicateCheckInput {...register('nickName')} checker={checkChangeNickName} placeholder="닉네임" />
          </InputWrapper>

          <InputWrapper label="전화번호" error={errors?.phoneNumber?.message}>
            <PhoneNumberInput {...register('phoneNumber')} setValue={setValue} placeholder="전화번호" />
          </InputWrapper>

          <InputWrapper label="생년월일" error={errors?.birthDate?.message}>
            <BirthDateInput
              {...register('birthDate')}
              setValue={setValue}
              placeholder="생년월일"
              initDate={getValues('birthDate')}
            />
          </InputWrapper>

          <InputWrapper label="국가 / 지역" error={errors?.country?.message}>
            <CountrySelect {...register('country')} />
          </InputWrapper>

          <InputWrapper label="자기소개">
            <Textarea {...register('aboutMe')} />
          </InputWrapper>

          <Button type="submit" mt="xl" size="lg">
            수정하기
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default UserProfileEditForm;

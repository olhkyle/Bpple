import React from 'react';
import Recoil from 'recoil';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useController, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Radio, Stack, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { checkNickName } from '../../api/auth';
import { editProfile } from '../../api/profile';
import userState from '../../recoil/atoms/userState';
import useToast from '../../hooks/useToast';
import { PROFILE_PATH } from '../../routes/routePaths';
import { myProfileQuery } from '../../queries';
import { BirthDateInput, CountrySelect, DuplicateCheckInput, InputWrapper, PhoneNumberInput } from '../common/form';
import { AvatarButton, AvatarEditModal } from '../common';

const editProfileScheme = z.object({
  country: z.string(),
  birthDate: z.date(),
  nickName: z.string().regex(/.+/, { message: '닉네임을 입력해주세요' }),
  phoneNumber: z.string().regex(/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/, { message: '적절한 전화번호가 아닙니다.' }),
  avatarId: z.string(),
  aboutMe: z.string().max(1000),
});

const UserProfileEditForm = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [loginUser, setLoginUser] = Recoil.useRecoilState(userState);

  const { data: userInfo } = useQuery(myProfileQuery());

  const [avatarEditPopupOpened, { open: openAvatarEditPopup, close: closeAvatarEditPopup }] = useDisclosure(false);

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    control,
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

  const {
    field: { value: selectedAvatarId, onChange: onChangeSelectedAvatarId },
  } = useController({ name: 'avatarId', control });

  const onSubmit = async data => {
    if (!isDirty) return;

    try {
      await editProfile({ ...data, userId: loginUser.email });
      setLoginUser({ email: loginUser.email, nickName: data.nickName, avatarId: data.avatarId });
      toast.create({ message: '회원정보가 수정되었습니다.' });
      navigate(PROFILE_PATH);
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
          <Radio.Group m="auto" value={selectedAvatarId} onChange={onChangeSelectedAvatarId}>
            <AvatarButton avatarId={getValues('avatarId')} onClick={openAvatarEditPopup} select />
            <AvatarEditModal
              avatarId={selectedAvatarId}
              opened={avatarEditPopupOpened}
              onClose={closeAvatarEditPopup}
            />
          </Radio.Group>

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

          <Button type="submit" mt="xl" size="lg" disabled={!isDirty} radius="10px">
            수정하기
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default UserProfileEditForm;

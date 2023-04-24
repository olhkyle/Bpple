import React from 'react';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import userState from '../recoil/atoms/userState';
import UserProfileEditForm from '../components/profile/UserProfileEditForm';
import { profileQuery } from './Profile';

const Title = styled.h1`
  color: var(--font-color);
  text-align: center;
  font-size: 3.5rem;
  padding: 50px 0;
`;

const ProfileEdit = () => {
  const loginUser = Recoil.useRecoilValue(userState);
  console.log(loginUser);

  const { data: userInfo } = useQuery(profileQuery(loginUser.email));

  // TODO: Profile Edit

  return (
    <>
      <Title>프로필 수정</Title>
      <UserProfileEditForm userInfo={{ ...loginUser, ...userInfo }} />
    </>
  );
};

export default ProfileEdit;

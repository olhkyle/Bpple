import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import userState from '../recoil/atoms/userState';
import { ProfileInfo } from '../components/profile';
import { Loader } from '../components/common';

const Title = styled.h1`
  color: var(--font-color);
  text-align: center;
  font-size: 3.5rem;
  padding: 50px 0;
`;

const Profile = () => {
  const loginUser = Recoil.useRecoilValue(userState);

  return (
    <>
      <Title>{loginUser.nickName}님, 안녕하세요.</Title>

      <React.Suspense fallback={<Loader />}>
        <ProfileInfo />
      </React.Suspense>
    </>
  );
};

export default Profile;

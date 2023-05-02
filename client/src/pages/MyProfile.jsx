import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import userState from '../recoil/atoms/userState';
import { MyProfile } from '../components';
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
        <MyProfile />
      </React.Suspense>
    </>
  );
};

export default Profile;

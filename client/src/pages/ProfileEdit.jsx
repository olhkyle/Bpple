import React from 'react';
import styled from '@emotion/styled';
import { UserProfileEditForm } from '../components/profile';
import { Loader } from '../components/common';

const Title = styled.h1`
  color: var(--font-color);
  text-align: center;
  font-size: 3.5rem;
  padding: 50px 0;
`;

const ProfileEdit = () => (
  <>
    <Title>프로필 수정</Title>
    <React.Suspense fallback={<Loader />}>
      <UserProfileEditForm />
    </React.Suspense>
  </>
);

export default ProfileEdit;

import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import userState from '../recoil/atoms/userState';
import { fetchProfile } from '../api/profile';
import { ProfileInfo } from '../components/profile';
import { Loader } from '../components/common';

const staleTime = 3000;

/**
 * query
 */
const profileQuery = () => ({
  queryKey: ['profile'],
  queryFn: async () => {
    const { data } = await fetchProfile();
    return data;
  },
  staleTime,
  suspense: true,
});

/**
 * loader
 */
const profileLoader = queryClient => async () => {
  const loginUser = Recoil.useRecoilValue(userState);

  const query = profileQuery(loginUser.email);
  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

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

export { profileLoader, profileQuery };
export default Profile;
